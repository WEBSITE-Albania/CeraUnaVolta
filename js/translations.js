/* ==========================================================================
   C’era Una Volta – Translations
   --------------------------------------------------------------------------
   All interface text lives here, in Albanian (sq, default) and English (en).
   In the HTML, an element with  data-i18n="some.key"  gets its text from
   this file. Attributes (aria-label, alt, title) use
   data-i18n-attr="aria-label:some.key".

   Proper names and drink names are NOT translated – they are written
   directly in the HTML or in js/menu-data.js.
   ========================================================================== */

const TRANSLATIONS = {
  sq: {
    /* Navigation & shared */
    "nav.home": "Kreu",
    "nav.about": "Rreth nesh",
    "nav.menu": "Menuja",
    "nav.gallery": "Galeria",
    "nav.contact": "Kontakt",
    "nav.open": "Hap menunë e navigimit",
    "nav.close": "Mbyll menunë e navigimit",
    "nav.label": "Navigimi kryesor",
    "nav.skip": "Kalo te përmbajtja",
    "lang.label": "Zgjidh gjuhën",
    "lang.sq": "Shqip",
    "lang.en": "English",
    "brand.home": "C’era Una Volta – faqja kryesore",

    /* Footer */
    "footer.tagline": "Pub & Bar · Gota, këngë, histori",
    "footer.visit": "Na vizitoni",
    "footer.contact": "Kontakt",
    "footer.follow": "Na ndiqni",
    "footer.rights": "Të gjitha të drejtat të rezervuara.",

    /* Common labels */
    "label.address": "Adresa",
    "label.phone": "Telefoni",
    "label.email": "Email",
    "label.instagram": "Instagram",
    "label.facebook": "Facebook",
    "label.newTab": "(hapet në skedë të re)",
    "currency": "lekë",

    /* Home */
    "home.hero.lead": "Kështu fillojnë historitë e mira – me një gotë, një këngë dhe njerëz të dashur, në zemër të Pazarit të Vjetër.",
    "home.hero.ctaMenu": "Shiko menunë",
    "home.hero.ctaContact": "Na kontaktoni",
    "home.hero.place": "Pazari i Vjetër, Korçë",
    "home.intro.title": "Ku çdo mbrëmje ka historinë e vet",
    "home.intro.text": "Në Pazarin e Vjetër, C’era Una Volta është vendi ku bisedat zgjasin, gotat trokasin dhe muzika mbush natën. Kokteje klasike, krijime të shtëpisë dhe një atmosferë që të fton të qëndrosh edhe pak.",
    "home.intro.link": "Njihuni me ne",
    "home.intro.imgLabel": "Atmosfera e barit",
    "home.music.title": "Muzikë live çdo fundjavë",
    "home.music.text": "Saimir Poda dhe grupi i tij ngjiten në skenë çdo fundjavë me serenata korçare, këngë italiane dhe hite ndërkombëtare.",
    "home.music.suggest": "Keni një këngë që doni ta dëgjoni? Na e sugjeroni në rrjetet sociale.",
    "home.music.ctaIg": "Sugjero në Instagram",
    "home.music.ctaFb": "Sugjero në Facebook",
    "home.music.imgLabel": "Muzikë live",
    "home.music.soundOn": "Aktivizo zërin",
    "home.music.soundOff": "Çaktivizo zërin",
    "home.invite.title": "Një gotë për çdo histori",
    "home.invite.text": "Nga klasikët e pakohë te krijimet e shtëpisë – lëreni mbrëmjen t’ju zgjedhë pijen.",
    "home.invite.cta": "Zbuloni menunë",
    "home.invite.imgLabel": "Koktejet tona",
    "home.visit.title": "Ju presim",
    "home.visit.text": "Ejani për një aperitiv, qëndroni për muzikën.",
    "home.visit.ctaMap": "Hap në Google Maps",

    /* About */
    "about.title": "Rreth nesh",
    "about.subtitle": "Një bar, një skenë dhe shumë histori",
    "about.heading": "Na ishte një herë…",
    "about.p1": "C’era una volta – “na ishte një herë” – është mënyra si fillojnë historitë e mira. Kështu e mendojmë edhe barin tonë: një vend në Pazarin e Vjetër të Korçës ku shija e mirë takon ngrohtësinë korçare, dhe ku çdo mbrëmje ka historinë e vet.",
    "about.p2": "Çdo fundjavë, Saimir Poda dhe grupi i tij luajnë live: serenata korçare, këngë italiane dhe hite ndërkombëtare që e bëjnë gjithë sallën të këndojë bashkë.",
    "about.p3": "Dëshironi të dëgjoni një këngë të veçantë? Na shkruani në Instagram ose Facebook dhe sugjeroni të preferuarën tuaj. Pjesën tjetër – gotën, shoqërinë dhe mbrëmjen – e kemi ne.",
    "about.team1": "Foto e ekipit 1",
    "about.team2": "Foto e ekipit 2",
    "about.teamCaption": "Ekipi ynë",
    "about.cta": "Shiko menunë",

    /* Menu */
    "menu.title": "Menuja",
    "menu.subtitle": "Zgjidhni gotën – mbrëmjen e shkruajmë bashkë",
    "menu.jump": "Kategoritë e menusë",
    "menu.cat.longDrinks": "Long Drinks",
    "menu.cat.cocktails": "Kokteje",
    "menu.cat.signature": "Kokteje speciale",
    "menu.cat.beers": "Birra",
    "menu.cat.ginWhiskey": "Xhin & uiski",
    "menu.cat.rum": "Rum",
    "menu.cat.liqueur": "Liker",
    "menu.cat.brandy": "Brandi",
    "menu.cat.shots": "Shote",
    "menu.cat.freskuese": "Freskuese",

    /* Gallery */
    "gallery.title": "Galeria",
    "gallery.subtitle": "Mbrëmje, kokteje dhe muzikë në Pazarin e Vjetër",
    "gallery.filter.label": "Filtro galerinë",
    "gallery.filter.all": "Të gjitha",
    "gallery.filter.ambient": "Ambienti",
    "gallery.filter.drinks": "Pijet",
    "gallery.filter.music": "Muzika live",
    "gallery.cap.ambient": "Ambienti i C’era Una Volta",
    "gallery.cap.drinks": "Pije dhe kokteje",
    "gallery.cap.music": "Muzika live",
    "gallery.video": "Video",
    "gallery.open": "Hap foton",
    "zoom.open": "Zmadho foton",
    "gallery.play": "Luaj videon",
    "gallery.close": "Mbyll",
    "gallery.prev": "E mëparshmja",
    "gallery.next": "Tjetra",
    "gallery.counter": "nga",

    /* Contact */
    "contact.title": "Kontakt",
    "contact.subtitle": "Na telefononi, na shkruani ose thjesht ejani",
    "contact.detailsTitle": "Të gjitha rrugët të çojnë tek ne",
    "contact.mapTitle": "Harta e C’era Una Volta në Pazarin e Vjetër, Korçë",
    "contact.mapCta": "Hap në Google Maps",
    "contact.call": "Telefononi",
    "contact.write": "Shkruani",
    "contact.followTitle": "Na ndiqni",
    "contact.followText": "Mbrëmjet, muzika dhe koktejet e reja – ndiqni historinë tonë në Instagram dhe Facebook. Aty mund të na sugjeroni edhe këngën tuaj të preferuar.",
    "contact.followIg": "Instagram",
    "contact.followFb": "Facebook",

    /* Placeholders */
    "ph.note": "Vendosni foton këtu"
  },

  en: {
    /* Navigation & shared */
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.open": "Open navigation menu",
    "nav.close": "Close navigation menu",
    "nav.label": "Main navigation",
    "nav.skip": "Skip to content",
    "lang.label": "Choose language",
    "lang.sq": "Shqip",
    "lang.en": "English",
    "brand.home": "C’era Una Volta – home page",

    /* Footer */
    "footer.tagline": "Pub & Bar · Glasses, songs, stories",
    "footer.visit": "Visit us",
    "footer.contact": "Contact",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved.",

    /* Common labels */
    "label.address": "Address",
    "label.phone": "Phone",
    "label.email": "Email",
    "label.instagram": "Instagram",
    "label.facebook": "Facebook",
    "label.newTab": "(opens in a new tab)",
    "currency": "lek",

    /* Home */
    "home.hero.lead": "This is how good stories begin – with a glass, a song and good company, in the heart of the Old Bazaar.",
    "home.hero.ctaMenu": "View the menu",
    "home.hero.ctaContact": "Contact us",
    "home.hero.place": "Old Bazaar, Korçë",
    "home.intro.title": "Where every evening has a story of its own",
    "home.intro.text": "In the Old Bazaar, C’era Una Volta is where conversations run long, glasses meet and music fills the night. Classic cocktails, house creations and an atmosphere that invites you to stay a little longer.",
    "home.intro.link": "Get to know us",
    "home.intro.imgLabel": "The bar’s atmosphere",
    "home.music.title": "Live music every weekend",
    "home.music.text": "Every weekend, Saimir Poda and his band take the stage with Korçë serenades, Italian songs and international hits.",
    "home.music.suggest": "Is there a song you’d love to hear? Suggest it to us on social media.",
    "home.music.ctaIg": "Suggest on Instagram",
    "home.music.ctaFb": "Suggest on Facebook",
    "home.music.imgLabel": "Live music",
    "home.music.soundOn": "Turn sound on",
    "home.music.soundOff": "Turn sound off",
    "home.invite.title": "A glass for every story",
    "home.invite.text": "From timeless classics to our house creations – let the evening choose your drink.",
    "home.invite.cta": "Discover the menu",
    "home.invite.imgLabel": "Our cocktails",
    "home.visit.title": "See you soon",
    "home.visit.text": "Come for an aperitivo, stay for the music.",
    "home.visit.ctaMap": "Open in Google Maps",

    /* About */
    "about.title": "About us",
    "about.subtitle": "One bar, one stage and many stories",
    "about.heading": "Once upon a time…",
    "about.p1": "C’era una volta – “once upon a time” – is how good stories begin. That is how we think of our bar: a place in Korçë’s Old Bazaar where good taste meets Korçë warmth, and where every evening has a story of its own.",
    "about.p2": "Every weekend, Saimir Poda and his band play live: Korçë serenades, Italian songs and international hits that bring the whole room into the chorus.",
    "about.p3": "Want to hear a particular song? Write to us on Instagram or Facebook and suggest your favourite. Leave the rest – the glass, the company, the evening – to us.",
    "about.team1": "Team photo 1",
    "about.team2": "Team photo 2",
    "about.teamCaption": "Our team",
    "about.cta": "View the menu",

    /* Menu */
    "menu.title": "Menu",
    "menu.subtitle": "Choose your glass – we’ll write the evening together",
    "menu.jump": "Menu categories",
    "menu.cat.longDrinks": "Long Drinks",
    "menu.cat.cocktails": "Cocktails",
    "menu.cat.signature": "Signature cocktails",
    "menu.cat.beers": "Beers",
    "menu.cat.ginWhiskey": "Gin & whiskey",
    "menu.cat.rum": "Rum",
    "menu.cat.liqueur": "Liqueur",
    "menu.cat.brandy": "Brandy",
    "menu.cat.shots": "Shots",
    "menu.cat.freskuese": "Refreshments",

    /* Gallery */
    "gallery.title": "Gallery",
    "gallery.subtitle": "Evenings, cocktails and music in the Old Bazaar",
    "gallery.filter.label": "Filter the gallery",
    "gallery.filter.all": "All",
    "gallery.filter.ambient": "Ambience",
    "gallery.filter.drinks": "Drinks",
    "gallery.filter.music": "Live music",
    "gallery.cap.ambient": "The ambience at C’era Una Volta",
    "gallery.cap.drinks": "Drinks and cocktails",
    "gallery.cap.music": "Live music",
    "gallery.video": "Video",
    "gallery.open": "Open photo",
    "zoom.open": "Enlarge photo",
    "gallery.play": "Play video",
    "gallery.close": "Close",
    "gallery.prev": "Previous",
    "gallery.next": "Next",
    "gallery.counter": "of",

    /* Contact */
    "contact.title": "Contact",
    "contact.subtitle": "Call us, write to us, or simply come by",
    "contact.detailsTitle": "All roads lead to us",
    "contact.mapTitle": "Map of C’era Una Volta in the Old Bazaar, Korçë",
    "contact.mapCta": "Open in Google Maps",
    "contact.call": "Call",
    "contact.write": "Write",
    "contact.followTitle": "Follow us",
    "contact.followText": "Evenings, music and new cocktails – follow our story on Instagram and Facebook. It’s also where you can suggest your favourite song.",
    "contact.followIg": "Instagram",
    "contact.followFb": "Facebook",

    /* Placeholders */
    "ph.note": "Add photo here"
  }
};
