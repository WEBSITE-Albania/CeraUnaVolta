/* ==========================================================================
   C’era Una Volta – Main script
   Shared header & footer, language switcher, navigation, image placeholders
   and menu rendering. Loaded on every page.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Business details (edit here – used in header, footer & pages)
     ------------------------------------------------------------------ */
  const SITE = {
    name: "C’era Una Volta",
    address: "Pazari i Vjetër, Korçë 7001, Shqipëri",
    phoneDisplay: "069 543 5744",
    phoneHref: "tel:+355695435744",
    email: "ceraunavoltakorce@gmail.com",
    instagram: "https://www.instagram.com/c__era_una_volta/",
    facebook: "https://www.facebook.com/nelondi/?locale=sq_AL",
    maps: "https://www.google.com/maps?q=place_id:ChIJ6zDr0YgLWhMR49GI8yAOuvs",
    logo: "images/logo.png"
  };

  const DEFAULT_LANG = "sq";
  const STORAGE_KEY = "cuv-lang";

  /* ------------------------------------------------------------------
     2. Line illustrations (thin strokes, inherit text colour)
     ------------------------------------------------------------------ */
  const svg = (body) =>
    `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

  const MENU_ICONS = {
    longdrink: svg('<path d="M15 12l2.2 30h13.6L33 12"/><path d="M16 20h16"/><path d="M29 3l-4 26"/><rect x="19" y="25" width="5" height="5" rx=".8" transform="rotate(-12 21.5 27.5)"/><rect x="24.5" y="31" width="4.5" height="4.5" rx=".8" transform="rotate(10 26.7 33.2)"/>'),
    cocktail: svg('<path d="M8 11h32L24 27z"/><path d="M24 27v13"/><path d="M16 41h16"/><path d="M13 16h22"/><path d="M30 6l-7 12"/><circle cx="29" cy="7.5" r="2"/>'),
    signature: svg('<path d="M10 15h28c-1 7.5-6.5 11-14 11S11 22.5 10 15z"/><path d="M24 26v14"/><path d="M17 41h14"/><path d="M38 4v6M35 7h6"/><path d="M33 13.5c1.5-1.8 3.4-2.4 5-1.6"/>'),
    beer: svg('<path d="M12 15h18v25a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z"/><path d="M30 20h4.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H30"/><path d="M11 15c0-3 2.5-5 5-3.8 1.2-2.6 5-3.2 6.8-.8 2-1.7 5.6-.9 6.4 1.7 1.6-.2 2.4 1.3 1.8 2.9"/><path d="M17 21v15M21 21v15M25 21v15"/>'),
    rocks: svg('<path d="M10 17l2.4 23h23.2L38 17"/><path d="M11 27c4.5 1.2 21.5 1.2 26 0"/><rect x="15" y="20" width="7" height="7" rx="1" transform="rotate(-10 18.5 23.5)"/><rect x="24" y="21" width="7" height="7" rx="1" transform="rotate(14 27.5 24.5)"/>'),
    bottle: svg('<path d="M20.5 4h7v8.5c4 2.4 6.5 5.6 6.5 10V42a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V22.5c0-4.4 2.5-7.6 6.5-10z"/><path d="M20.5 8h7"/><path d="M14 26h20M14 37h20"/>'),
    cordial: svg('<path d="M16 8h16c0 10-3.2 16-8 16s-8-6-8-16z"/><path d="M17 14h14"/><path d="M24 24v16"/><path d="M18 41h12"/>'),
    snifter: svg('<path d="M18 11h12"/><path d="M18 11c-6 4-8.5 10-6 15.5 1.8 4 6.5 6 12 6s10.2-2 12-6c2.5-5.5 0-11.5-6-15.5"/><path d="M11.8 23c7.2 2.2 17.2 2.2 24.4 0"/><path d="M24 32.5V40"/><path d="M17 41h14"/>'),
    shots: svg('<path d="M7 17l2 22h11l2-22z"/><path d="M7.8 25h13.4"/><path d="M26 17l2 22h11l2-22z"/><path d="M26.8 25h13.4"/><path d="M14 8v4M33 8v4M23.5 10v3"/>'),
    soft: svg('<path d="M13 13l3 29h14l3-29"/><path d="M14.2 22h17.6"/><circle cx="33" cy="12" r="6.5"/><path d="M33 5.5v13M26.5 12h13M28.4 7.4l9.2 9.2M37.6 7.4l-9.2 9.2"/><circle cx="20" cy="31" r="1.2"/><circle cx="25" cy="27.5" r="1"/><circle cx="23" cy="36" r="1.3"/>')
  };

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 21v-7.5h2.6l.4-3H14V8.7c0-.9.3-1.5 1.6-1.5H17V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.2H8.5v3H11V21"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 3.5h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.8 6.8l1.4-2.2 4.3 1.7V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 21s-6.5-6.1-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.9 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/></svg>',
    photo: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="6" y="11" width="36" height="27" rx="2"/><path d="M17 11l2.5-4h9L31 11"/><circle cx="24" cy="24.5" r="7.5"/><circle cx="24" cy="24.5" r="3.5"/></svg>'
  };

  /* Flag images (images/flags/) – shown at the same size, cropped with object-fit */
  const FLAGS = {
    sq: '<img src="images/flags/al.svg" alt="" width="22" height="16" decoding="async">',
    en: '<img src="images/flags/gb.svg" alt="" width="22" height="16" decoding="async">'
  };

  /* ------------------------------------------------------------------
     3. Language helpers
     ------------------------------------------------------------------ */
  function getLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch (e) { /* storage unavailable – fall back to default */ }
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  let currentLang = getLang();

  function t(key) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    if (key in dict) return dict[key];
    return TRANSLATIONS[DEFAULT_LANG][key] || key;
  }

  function applyTranslations(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    scope.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
    });
    const titleKey = document.body.getAttribute("data-title-key");
    if (titleKey) document.title = `${t(titleKey)} | ${SITE.name}`;
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang] || lang === currentLang) return;
    currentLang = lang;
    saveLang(lang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("cuv:langchange", { detail: { lang } }));
  }

  /* Expose a small API for other scripts (gallery.js) */
  window.CUV = { t, applyTranslations, getLang: () => currentLang, SITE, ICONS };

  /* ------------------------------------------------------------------
     4. Shared header & footer
     ------------------------------------------------------------------ */
  const PAGES = [
    { id: "home", href: "index.html", key: "nav.home" },
    { id: "about", href: "about.html", key: "nav.about" },
    { id: "menu", href: "menu.html", key: "nav.menu" },
    { id: "gallery", href: "gallery.html", key: "nav.gallery" },
    { id: "songs", href: "songs.html", key: "nav.songs" },
    { id: "contact", href: "contact.html", key: "nav.contact" }
  ];

  const ext = 'target="_blank" rel="noopener noreferrer"';

  function logoMarkup(extraClass) {
    return `<span class="brand ${extraClass || ""}" data-img-host>
        <img class="brand__logo" src="${SITE.logo}" alt="${SITE.name}" width="180" height="64">
        <span class="brand__text">${SITE.name}</span>
      </span>`;
  }

  function renderHeader() {
    const page = document.body.dataset.page;
    const links = PAGES.map((p) => {
      const current = p.id === page ? ' aria-current="page"' : "";
      return `<li><a class="site-nav__link" href="${p.href}"${current} data-i18n="${p.key}"></a></li>`;
    }).join("");

    const header = document.createElement("header");
    header.className = "site-header" + (document.body.dataset.heroHeader ? " site-header--over-hero" : "");
    header.innerHTML = `
      <a class="skip-link" href="#main" data-i18n="nav.skip"></a>
      <div class="container site-header__inner">
        <a class="site-header__brand" href="index.html" data-i18n-attr="aria-label:brand.home">${logoMarkup()}</a>
        <nav class="site-nav" id="site-nav" data-i18n-attr="aria-label:nav.label">
          <ul class="site-nav__list">${links}</ul>
        </nav>
        <div class="lang-switch" role="group" data-i18n-attr="aria-label:lang.label">
          <button class="lang-switch__btn" type="button" data-lang="sq" lang="sq" aria-pressed="false" data-i18n-attr="title:lang.sq">
            <span class="lang-switch__flag">${FLAGS.sq}</span><span class="lang-switch__code">SQ</span><span class="sr-only" data-i18n="lang.sq"></span>
          </button>
          <button class="lang-switch__btn" type="button" data-lang="en" lang="en" aria-pressed="false" data-i18n-attr="title:lang.en">
            <span class="lang-switch__flag">${FLAGS.en}</span><span class="lang-switch__code">EN</span><span class="sr-only" data-i18n="lang.en"></span>
          </button>
        </div>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-i18n-attr="aria-label:nav.open">
          <span class="nav-toggle__line"></span><span class="nav-toggle__line"></span>
        </button>
      </div>`;
    document.body.prepend(header);
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container site-footer__grid">
        <div class="site-footer__brand">
          <a href="index.html" data-i18n-attr="aria-label:brand.home">${logoMarkup("brand--footer")}</a>
          <p class="site-footer__name">${SITE.name}</p>
          <p class="site-footer__tagline" data-i18n="footer.tagline"></p>
        </div>
        <div class="site-footer__col">
          <h2 class="site-footer__title" data-i18n="footer.visit"></h2>
          <address class="site-footer__address"><a href="${SITE.maps}" ${ext}>${SITE.address}<span class="sr-only" data-i18n="label.newTab"></span></a></address>
        </div>
        <div class="site-footer__col">
          <h2 class="site-footer__title" data-i18n="footer.contact"></h2>
          <ul class="site-footer__list">
            <li><a href="${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phoneDisplay}</span></a></li>
            <li><span class="site-footer__item">${ICONS.mail}<span>${SITE.email}</span></span></li>
          </ul>
        </div>
        <div class="site-footer__col">
          <h2 class="site-footer__title" data-i18n="footer.follow"></h2>
          <ul class="site-footer__list">
            <li><a href="${SITE.instagram}" ${ext}>${ICONS.instagram}<span>Instagram</span><span class="sr-only" data-i18n="label.newTab"></span></a></li>
            <li><a href="${SITE.facebook}" ${ext}>${ICONS.facebook}<span>Facebook</span><span class="sr-only" data-i18n="label.newTab"></span></a></li>
          </ul>
        </div>
      </div>
      <div class="container site-footer__bottom">
        <p>© ${year} ${SITE.name}. <span data-i18n="footer.rights"></span></p>
      </div>`;
    document.body.append(footer);
  }

  /* ------------------------------------------------------------------
     5. Navigation behaviour
     ------------------------------------------------------------------ */
  function initNav() {
    const header = document.querySelector(".site-header");
    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".site-nav");

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-locked", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("data-i18n-attr", `aria-label:${open ? "nav.close" : "nav.open"}`);
      toggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
    }

    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });

    header.querySelectorAll(".lang-switch__btn").forEach((btn) =>
      btn.addEventListener("click", () => setLang(btn.dataset.lang))
    );

    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      header.classList.toggle("is-scrolled", scrolled);
      document.documentElement.classList.toggle("is-scrolled", scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------
     6. Image placeholders
     Any <img> inside an element with [data-img-host] that fails to load
     is hidden, and the host gets .img-missing so a labelled placeholder
     shows instead. Dropping the real file in /images makes it appear.
     ------------------------------------------------------------------ */
  function markMissing(img) {
    img.classList.add("is-missing");
    const host = img.closest("[data-img-host]");
    if (host) host.classList.add("img-missing");
  }
  function markLoaded(img) {
    const host = img.closest("[data-img-host]");
    if (host) host.classList.add("img-loaded");
  }

  function watchImage(img) {
    if (img.dataset.watched) return;
    img.dataset.watched = "1";
    if (img.complete) {
      if (img.naturalWidth === 0) markMissing(img); else markLoaded(img);
    } else {
      img.addEventListener("load", () => markLoaded(img), { once: true });
      img.addEventListener("error", () => markMissing(img), { once: true });
    }
  }

  function initImages(root) {
    (root || document).querySelectorAll("[data-img-host] img").forEach(watchImage);
  }

  /* Hero: use the photo if images/hero/hero-bar.jpg exists, otherwise keep
     the drawn line-art version. */
  function initHero() {
    const hero = document.querySelector("[data-hero-photo]");
    if (!hero) return;
    const src = hero.getAttribute("data-hero-photo");
    const probe = new Image();
    probe.onload = () => {
      hero.style.setProperty("--hero-photo", `url("${src}")`);
      hero.classList.add("hero--has-photo");
    };
    probe.src = src;
  }

  /* ------------------------------------------------------------------
     7. Menu rendering (menu.html and the home page teaser)
     ------------------------------------------------------------------ */
  const escapeHTML = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const formatPrice = (n) => String(n);

  function itemMarkup(item) {
    const desc = item.desc ? `<p class="menu-item__desc">${escapeHTML(item.desc)}</p>` : "";
    return `<li class="menu-item${item.desc ? "" : " menu-item--plain"}">
        <div class="menu-item__row">
          <span class="menu-item__name">${escapeHTML(item.name)}</span>
          <span class="menu-item__leader" aria-hidden="true"></span>
          <span class="menu-item__price">${formatPrice(item.price)}<span class="menu-item__cur" data-i18n="currency"></span></span>
        </div>
        ${desc}
      </li>`;
  }

  function renderMenu() {
    const root = document.getElementById("menu-root");
    const jump = document.getElementById("menu-jump");
    if (!root || typeof MENU_DATA === "undefined") return;

    root.innerHTML = MENU_DATA.map((cat) => {
      const hasDesc = cat.items.some((i) => i.desc);
      return `<section class="menu-cat${hasDesc ? "" : " menu-cat--compact"}" id="${cat.id}" aria-labelledby="${cat.id}-title">
          <header class="menu-cat__head">
            <span class="menu-cat__icon">${MENU_ICONS[cat.icon] || ""}</span>
            <h2 class="menu-cat__title" id="${cat.id}-title" data-i18n="${cat.key}"></h2>
          </header>
          <ul class="menu-list">${cat.items.map(itemMarkup).join("")}</ul>
        </section>`;
    }).join("");

    if (jump) {
      jump.innerHTML = MENU_DATA.map(
        (cat) => `<li><a href="#${cat.id}" data-i18n="${cat.key}"></a></li>`
      ).join("");
      initMenuSpy(jump);
    }
  }

  /* Highlight the category currently in view in the sticky category bar */
  function initMenuSpy(jump) {
    if (!("IntersectionObserver" in window)) return;
    const links = new Map();
    jump.querySelectorAll("a").forEach((a) => links.set(a.getAttribute("href").slice(1), a));
    const scroller = jump.closest(".menu-jump");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.classList.remove("is-active"));
          const a = links.get(entry.target.id);
          if (a) {
            a.classList.add("is-active");
            if (scroller) {
              const left = a.offsetLeft - scroller.clientWidth / 2 + a.clientWidth / 2;
              scroller.scrollTo({ left, behavior: "smooth" });
            }
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    document.querySelectorAll(".menu-cat").forEach((s) => observer.observe(s));
  }

  function renderSignatureTeaser() {
    const list = document.getElementById("signature-teaser");
    if (!list || typeof MENU_DATA === "undefined") return;
    const sig = MENU_DATA.find((c) => c.id === "signature");
    if (!sig) return;
    list.innerHTML = sig.items.map(itemMarkup).join("");
  }

  /* ------------------------------------------------------------------
     8. Fill in contact details wherever [data-site] is used in a page
     ------------------------------------------------------------------ */
  function fillSiteData() {
    document.querySelectorAll("[data-site-href]").forEach((el) => {
      const k = el.getAttribute("data-site-href");
      if (k === "phone") el.href = SITE.phoneHref;
      else if (k === "email") el.href = `mailto:${SITE.email}`;
      else if (SITE[k]) el.href = SITE[k];
    });
  }

  /* ------------------------------------------------------------------
     9. Start
     ------------------------------------------------------------------ */
  renderHeader();
  renderFooter();
  fillSiteData();
  renderMenu();
  renderSignatureTeaser();
  applyTranslations();
  initNav();
  initImages();
  initHero();
  document.documentElement.classList.add("js-ready");
})();
