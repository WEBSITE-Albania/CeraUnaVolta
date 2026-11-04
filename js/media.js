/* ==========================================================================
   C’era Una Volta – Home & About media
   --------------------------------------------------------------------------
   1. Photo enlargement: any photo frame marked  data-zoom  opens in a
      lightbox (same look as the Gallery). Navigation only moves between the
      photos of the current page – never into Gallery items.
   2. Live-music video (home): muted, inline, plays only while its section is
      on screen, loads only when the visitor gets close to it, with a sound
      toggle. Sound is never switched on automatically.
   Loaded on index.html and about.html only (the Gallery has its own script).
   ========================================================================== */

(function () {
  "use strict";
  if (!window.CUV) return;
  const { t } = window.CUV;

  /* ------------------------------------------------------------------
     1. Photo enlargement
     ------------------------------------------------------------------ */
  const hosts = [...document.querySelectorAll("[data-zoom]")];

  if (hosts.length) {
    const ICON = {
      close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>',
      prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7"/></svg>',
      next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7"/></svg>'
    };

    /* The viewer markup mirrors the Gallery lightbox, so it shares its styles */
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.hidden = true;
    box.innerHTML = `
      <div class="lightbox__top">
        <button class="lightbox__btn lightbox__close" type="button" data-i18n-attr="aria-label:gallery.close">${ICON.close}</button>
      </div>
      <div class="lightbox__stage"></div>
      <button class="lightbox__btn lightbox__prev" type="button" data-i18n-attr="aria-label:gallery.prev">${ICON.prev}</button>
      <button class="lightbox__btn lightbox__next" type="button" data-i18n-attr="aria-label:gallery.next">${ICON.next}</button>
      <div class="lightbox__caption" aria-live="polite">
        <span class="lightbox__caption-text"></span>
        <span class="lightbox__counter"></span>
      </div>`;
    document.body.append(box);
    window.CUV.applyTranslations(box);

    const stage = box.querySelector(".lightbox__stage");
    const caption = box.querySelector(".lightbox__caption-text");
    const counter = box.querySelector(".lightbox__counter");
    const btnClose = box.querySelector(".lightbox__close");
    const btnPrev = box.querySelector(".lightbox__prev");
    const btnNext = box.querySelector(".lightbox__next");
    let list = [];
    let current = -1;
    let lastFocus = null;

    const isReady = (host) => {
      const img = host.querySelector("img");
      return img && img.complete && img.naturalWidth > 0;
    };

    /* Only frames that actually show a photo become clickable */
    function enable(host) {
      if (host.dataset.zoomReady) return;
      host.dataset.zoomReady = "1";
      host.classList.add("is-zoomable");
      host.setAttribute("role", "button");
      host.setAttribute("tabindex", "0");
      host.setAttribute("data-i18n-attr", "aria-label:zoom.open");
      host.setAttribute("aria-label", t("zoom.open"));
    }
    hosts.forEach((host) => {
      const img = host.querySelector("img");
      if (!img) return;
      if (isReady(host)) enable(host);
      else img.addEventListener("load", () => enable(host), { once: true });
    });

    function show(pos) {
      current = pos;
      const host = list[pos];
      const img = host.querySelector("img");
      const src = host.dataset.zoomSrc || img.currentSrc || img.src;
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const label = img.getAttribute("alt") || "";
      stage.innerHTML = `
        <div class="lightbox__media" style="--ar: ${w / h}; aspect-ratio: ${w} / ${h}">
          <img src="${src}" alt="${label}" decoding="async">
        </div>`;
      caption.textContent = "";
      counter.textContent = "";
      const single = list.length < 2;
      btnPrev.hidden = single;
      btnNext.hidden = single;
    }

    function open(host) {
      list = hosts.filter((h) => h.dataset.zoomReady);
      lastFocus = document.activeElement;
      show(list.indexOf(host));
      box.hidden = false;
      document.body.classList.add("nav-locked");
      requestAnimationFrame(() => box.classList.add("is-open"));
      btnClose.focus();
    }

    function close() {
      box.classList.remove("is-open");
      document.body.classList.remove("nav-locked");
      box.hidden = true;
      stage.innerHTML = "";
      current = -1;
      if (lastFocus) lastFocus.focus();
    }

    function step(dir) {
      if (list.length < 2) return;
      show((current + dir + list.length) % list.length);
    }

    hosts.forEach((host) => {
      host.addEventListener("click", () => { if (host.dataset.zoomReady) open(host); });
      host.addEventListener("keydown", (e) => {
        if (!host.dataset.zoomReady) return;
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(host); }
      });
    });

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", () => step(-1));
    btnNext.addEventListener("click", () => step(1));
    box.addEventListener("click", (e) => {
      if (e.target.closest(".lightbox__media, .lightbox__btn, .lightbox__caption")) return;
      close();
    });

    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab") {
        const f = [...box.querySelectorAll("button:not([hidden])")];
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });

    let touchX = null;
    box.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      touchX = null;
    });

    document.addEventListener("cuv:langchange", () => {
      if (current < 0) return;
      counter.textContent = "";
    });
  }

  /* ------------------------------------------------------------------
     2. Live-music video
     ------------------------------------------------------------------ */
  const frame = document.querySelector("[data-music-video]");
  const video = frame && frame.querySelector("video");

  if (video) {
    const toggle = frame.querySelector(".sound-toggle");

    /* Always start muted (needed for autoplay, and sound is the visitor's choice) */
    video.muted = true;
    video.defaultMuted = true;

    let loaded = false;
    let onScreen = false;

    function load() {
      if (loaded) return;
      loaded = true;
      video.poster = video.dataset.poster;
      video.preload = "metadata";
      video.src = video.dataset.src;
    }

    function play() {
      if (!onScreen || document.hidden) return;
      load();
      const p = video.play();
      if (p && p.catch) p.catch(() => { /* blocked (e.g. power saving): the sound button still starts it */ });
    }

    function renderToggle() {
      const muted = video.muted;
      toggle.classList.toggle("is-on", !muted);
      toggle.setAttribute("aria-pressed", String(!muted));
      /* icon only on screen; the action is announced to screen readers */
      const key = muted ? "home.music.soundOn" : "home.music.soundOff";
      toggle.setAttribute("data-i18n-attr", `aria-label:${key}`);
      toggle.setAttribute("aria-label", t(key));
    }

    toggle.addEventListener("click", () => {
      video.muted = !video.muted;
      renderToggle();
      if (video.paused) { onScreen = true; play(); }
    });

    if ("IntersectionObserver" in window) {
      /* Start fetching shortly before the section scrolls into view */
      new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) load();
      }, { rootMargin: "600px 0px" }).observe(frame);

      /* Play while at least a third of the video is visible, pause otherwise */
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          onScreen = e.isIntersecting && e.intersectionRatio >= 0.33;
          if (onScreen) play(); else video.pause();
        });
      }, { threshold: [0, 0.33, 0.6] }).observe(frame);
    } else {
      onScreen = true;
      play();
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause(); else play();
    });

    renderToggle();
  }
})();
