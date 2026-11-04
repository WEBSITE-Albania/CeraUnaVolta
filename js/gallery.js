/* ==========================================================================
   C’era Una Volta – Gallery (photos & videos) and lightbox
   --------------------------------------------------------------------------
   Media live next to the website folder, in images/gallery/:
     photos/     original photographs  "C'era Una Volta Pub & Bar (N).png"
     video/      original videos       "video (N).mp4"
     optimized/  generated WebP copies used by the page:
                   photo-NN-400.webp / -800.webp  grid thumbnails
                   photo-NN-full.webp             lightbox image
                   video-NN-400.webp / -800.webp  video thumbnails
                   video-NN-poster.webp           poster in the video player
   The originals are never modified. Each item below has one category:
   "ambient" (Ambienti), "drinks" (Pijet) or "music" (Muzika live).
   The order of the list is the order shown under "Të gjitha".
   ========================================================================== */

const GALLERY_ITEMS = [
  { type: "photo", n: 25, cat: "drinks", w: 1093, h: 1458 },
  { type: "photo", n: 1, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 26, cat: "drinks", w: 1093, h: 1458 },
  { type: "video", n: 10, cat: "music", w: 1080, h: 1920, dur: 73.6 },
  { type: "photo", n: 2, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 27, cat: "drinks", w: 1093, h: 1458 },
  { type: "video", n: 3, cat: "drinks", w: 1080, h: 1920, dur: 6.3 },
  { type: "photo", n: 6, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 28, cat: "drinks", w: 1093, h: 1458 },
  { type: "video", n: 1, cat: "ambient", w: 1080, h: 1920, dur: 5.4 },
  { type: "photo", n: 29, cat: "drinks", w: 1093, h: 1458 },
  { type: "photo", n: 3, cat: "music", w: 1093, h: 1458 },
  { type: "photo", n: 30, cat: "drinks", w: 1093, h: 1458 },
  { type: "photo", n: 7, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 31, cat: "drinks", w: 1093, h: 1458 },
  { type: "photo", n: 8, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 32, cat: "drinks", w: 1093, h: 1458 },
  { type: "video", n: 4, cat: "drinks", w: 1080, h: 1920, dur: 10.8 },
  { type: "photo", n: 9, cat: "ambient", w: 1093, h: 1093 },
  { type: "video", n: 11, cat: "music", w: 1080, h: 1920, dur: 34.3 },
  { type: "photo", n: 33, cat: "drinks", w: 1093, h: 1458 },
  { type: "photo", n: 10, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 34, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 35, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 11, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 36, cat: "drinks", w: 1093, h: 1093 },
  { type: "video", n: 2, cat: "ambient", w: 1080, h: 1920, dur: 6.3 },
  { type: "video", n: 12, cat: "music", w: 1080, h: 1920, dur: 44.6 },
  { type: "photo", n: 37, cat: "drinks", w: 1093, h: 1093 },
  { type: "video", n: 5, cat: "drinks", w: 1080, h: 1920, dur: 9.5 },
  { type: "photo", n: 12, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 38, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 13, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 39, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 40, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 14, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 4, cat: "music", w: 1093, h: 1458 },
  { type: "photo", n: 41, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 15, cat: "ambient", w: 1093, h: 1093 },
  { type: "photo", n: 42, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 16, cat: "ambient", w: 1093, h: 1093 },
  { type: "video", n: 6, cat: "drinks", w: 1080, h: 1920, dur: 12.0 },
  { type: "photo", n: 43, cat: "drinks", w: 1093, h: 1093 },
  { type: "video", n: 13, cat: "music", w: 1080, h: 1920, dur: 64.8 },
  { type: "video", n: 8, cat: "ambient", w: 1080, h: 1920, dur: 8.5 },
  { type: "photo", n: 44, cat: "drinks", w: 956, h: 1274 },
  { type: "photo", n: 17, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 45, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 46, cat: "drinks", w: 956, h: 1274 },
  { type: "photo", n: 18, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 47, cat: "drinks", w: 956, h: 1274 },
  { type: "video", n: 14, cat: "music", w: 1080, h: 1920, dur: 124.3 },
  { type: "photo", n: 19, cat: "ambient", w: 1093, h: 1458 },
  { type: "video", n: 7, cat: "drinks", w: 1080, h: 1920, dur: 15.4 },
  { type: "photo", n: 48, cat: "drinks", w: 956, h: 1274 },
  { type: "photo", n: 20, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 49, cat: "drinks", w: 956, h: 1274 },
  { type: "photo", n: 21, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 50, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 5, cat: "music", w: 1093, h: 1458 },
  { type: "photo", n: 51, cat: "drinks", w: 1093, h: 1093 },
  { type: "video", n: 16, cat: "ambient", w: 1080, h: 1920, dur: 6.5 },
  { type: "photo", n: 52, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 22, cat: "ambient", w: 1093, h: 1458 },
  { type: "video", n: 9, cat: "drinks", w: 1080, h: 1920, dur: 6.5 },
  { type: "photo", n: 53, cat: "drinks", w: 1093, h: 1093 },
  { type: "photo", n: 23, cat: "ambient", w: 1093, h: 1458 },
  { type: "video", n: 15, cat: "music", w: 1080, h: 1920, dur: 12.7 },
  { type: "photo", n: 54, cat: "drinks", w: 956, h: 1274 },
  { type: "photo", n: 24, cat: "ambient", w: 1093, h: 1458 },
  { type: "photo", n: 55, cat: "drinks", w: 1093, h: 1458 }
];

(function () {
  "use strict";

  const grid = document.getElementById("gallery-grid");
  if (!grid || !window.CUV) return;
  const { t, applyTranslations } = window.CUV;

  const BASE = "images/gallery/";
  const pad = (n) => String(n).padStart(2, "0");
  const opt = (item, suffix) => `${BASE}optimized/${item.type}-${pad(item.n)}-${suffix}.webp`;
  const videoSrc = (item) => BASE + "video/" + encodeURIComponent(`video (${item.n}).mp4`);

  const CAPTION_KEY = { ambient: "gallery.cap.ambient", drinks: "gallery.cap.drinks", music: "gallery.cap.music" };

  const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 6.5v11l9-5.5z" fill="currentColor"/></svg>';

  /* ---------- Build grid (thumbnails only; nothing large is loaded here) ---------- */
  const SIZES = "(max-width: 680px) 50vw, (max-width: 1024px) 33vw, 290px";

  grid.innerHTML = GALLERY_ITEMS.map((item, i) => {
    const isVideo = item.type === "video";
    const tw = 400;
    const th = Math.round((item.h / item.w) * tw);
    return `
    <li class="gallery-item${isVideo ? " gallery-item--video" : ""}" data-cat="${item.cat}">
      <button class="gallery-item__btn ph" type="button" data-index="${i}"
              data-i18n-attr="aria-label:${isVideo ? "gallery.play" : "gallery.open"}">
        <img src="${opt(item, "400")}"
             srcset="${opt(item, "400")} 400w, ${opt(item, "800")} 800w"
             sizes="${SIZES}" width="${tw}" height="${th}"
             alt="" loading="lazy" decoding="async"
             data-i18n-attr="alt:${CAPTION_KEY[item.cat]}">
        ${isVideo ? `<span class="gallery-item__play" aria-hidden="true">${PLAY_ICON}</span>` : ""}
      </button>
    </li>`;
  }).join("");

  applyTranslations(grid);
  grid.querySelectorAll("img").forEach((img) => {
    const host = img.closest(".gallery-item__btn");
    const done = () => host.classList.add("img-loaded");
    if (img.complete && img.naturalWidth) done();
    else img.addEventListener("load", done, { once: true });
  });

  /* ---------- Filters (no reload; items are only shown or hidden) ---------- */
  const filterBtns = document.querySelectorAll(".gallery-filter__btn");
  let activeFilter = "all";

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      grid.querySelectorAll(".gallery-item").forEach((li) => {
        li.hidden = !(activeFilter === "all" || li.dataset.cat === activeFilter);
      });
    });
  });

  const visibleIndexes = () =>
    GALLERY_ITEMS.map((item, i) => i).filter(
      (i) => activeFilter === "all" || GALLERY_ITEMS[i].cat === activeFilter
    );

  /* ---------- Lightbox: photo viewer and video player ---------- */
  const box = document.getElementById("lightbox");
  const stage = box.querySelector(".lightbox__stage");
  const caption = box.querySelector(".lightbox__caption-text");
  const counter = box.querySelector(".lightbox__counter");
  const btnClose = box.querySelector(".lightbox__close");
  const btnPrev = box.querySelector(".lightbox__prev");
  const btnNext = box.querySelector(".lightbox__next");

  let current = -1;
  let lastFocus = null;

  /* Stop and unload any playing video, so two videos never download at once */
  function releaseVideo() {
    const v = stage.querySelector("video");
    if (!v) return;
    v.pause();
    v.removeAttribute("src");
    v.load();
  }

  function show(index) {
    releaseVideo();
    current = index;
    const item = GALLERY_ITEMS[index];
    const label = t(CAPTION_KEY[item.cat]);
    const ratio = `${item.w} / ${item.h}`;

    if (item.type === "video") {
      /* The player is created only now; preload="none" plus an explicit
         play() means the file starts downloading on this click, not before. */
      stage.innerHTML = `
        <div class="lightbox__media" style="--ar: ${item.w / item.h}; aspect-ratio: ${ratio}">
          <video controls playsinline preload="none" poster="${opt(item, "poster")}"
                 aria-label="${label}"></video>
        </div>`;
      const v = stage.querySelector("video");
      v.src = videoSrc(item);
      const p = v.play();
      if (p && p.catch) p.catch(() => { /* playback blocked: controls stay available */ });
    } else {
      stage.innerHTML = `
        <div class="lightbox__media" style="--ar: ${item.w / item.h}; aspect-ratio: ${ratio}">
          <img src="${opt(item, "full")}" width="${item.w}" height="${item.h}" alt="${label}" decoding="async">
        </div>`;
    }

    const list = visibleIndexes();
    const pos = list.indexOf(index) + 1;
    caption.textContent = "";
    counter.textContent = "";
    const single = list.length < 2;
    btnPrev.hidden = single;
    btnNext.hidden = single;
    preloadNeighbours(list, pos - 1);
  }

  /* Warm up the next/previous photo (small WebP only, never videos) */
  function preloadNeighbours(list, pos) {
    [1, -1].forEach((d) => {
      const it = GALLERY_ITEMS[list[(pos + d + list.length) % list.length]];
      if (it && it.type === "photo") { const im = new Image(); im.decoding = "async"; im.src = opt(it, "full"); }
    });
  }

  function open(index) {
    lastFocus = document.activeElement;
    show(index);
    box.hidden = false;
    document.body.classList.add("nav-locked");
    requestAnimationFrame(() => box.classList.add("is-open"));
    btnClose.focus();
  }

  function close() {
    releaseVideo();
    box.classList.remove("is-open");
    document.body.classList.remove("nav-locked");
    box.hidden = true;
    stage.innerHTML = "";
    current = -1;
    if (lastFocus) lastFocus.focus();
  }

  function step(dir) {
    const list = visibleIndexes();
    if (list.length < 2) return;
    const pos = list.indexOf(current);
    show(list[(pos + dir + list.length) % list.length]);
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-item__btn");
    if (btn) open(Number(btn.dataset.index));
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", () => step(-1));
  btnNext.addEventListener("click", () => step(1));

  /* Close when clicking the dark backdrop (anything that isn't the media or a control) */
  box.addEventListener("click", (e) => {
    if (e.target.closest(".lightbox__media, .lightbox__btn, .lightbox__caption")) return;
    close();
  });

  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    const inVideo = e.target && e.target.tagName === "VIDEO";
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft" && !inVideo) step(-1);
    else if (e.key === "ArrowRight" && !inVideo) step(1);
    else if (e.key === "Tab") {
      /* keep focus inside the lightbox */
      const focusables = [...box.querySelectorAll("button:not([hidden]), video")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Swipe on touch screens (not while using the video's own controls) */
  let touchX = null;
  box.addEventListener("touchstart", (e) => {
    touchX = e.target.closest("video") ? null : e.touches[0].clientX;
  }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });

  /* Refresh the counter when the language changes while the lightbox is open */
  document.addEventListener("cuv:langchange", () => {
    if (current < 0) return;
    const list = visibleIndexes();
    counter.textContent = "";
  });
})();
