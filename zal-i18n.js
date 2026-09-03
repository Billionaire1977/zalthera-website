/* ============================================================
   ZAL’THERA WEBSITE
   INTERNATIONALIZATION LAYER v1.1

   Languages:
   DE / EN / TR / ES / FR / IT / RO / ZH-HANS
   ============================================================ */

(() => {
  "use strict";


  /* ============================================================
     CONFIGURATION
     ============================================================ */

  const STORAGE_KEY =
    "zalthera-language";

  const DEFAULT_LANGUAGE =
    "de";

  const SUPPORTED_LANGUAGES = [
    "de",
    "en",
    "tr",
    "es",
    "fr",
    "it",
    "ro",
    "zh-Hans"
  ];


  const LANGUAGE_META = {

    de: {
      code: "DE",
      label: "Deutsch",
      locale: "de-DE"
    },

    en: {
      code: "EN",
      label: "English",
      locale: "en-US"
    },

    tr: {
      code: "TR",
      label: "Türkçe",
      locale: "tr-TR"
    },

    es: {
      code: "ES",
      label: "Español",
      locale: "es-ES"
    },

    fr: {
      code: "FR",
      label: "Français",
      locale: "fr-FR"
    },

    it: {
      code: "IT",
      label: "Italiano",
      locale: "it-IT"
    },

    ro: {
      code: "RO",
      label: "Română",
      locale: "ro-RO"
    },

    "zh-Hans": {
      code: "中文",
      label: "简体中文",
      locale: "zh-CN"
    }

  };


  /* ============================================================
     GLOBAL TRANSLATIONS
     ============================================================ */

  const translations = {

    de: {

      "nav.system": "System",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industry",
      "nav.products": "Products",
      "nav.about": "About",

      "global.explore": "Explore",
      "global.open": "Öffnen",
      "global.close": "Schließen",
      "global.discover": "Entdecken",
      "global.learnMore": "Mehr erfahren",
      "global.support": "Support",
      "global.contact": "Kontakt",

      "global.available": "Verfügbar",
      "global.development": "Entwicklung",
      "global.systemModule": "Systemmodul",
      "global.architecture": "Architektur",

      "search.label": "ZAL SEARCH",
      "search.title": "Explore the system",
      "search.placeholder":
        "System, Produkt oder Bereich suchen …",
      "search.quickAccess":
        "SCHNELLZUGRIFF",
      "search.noResults":
        "Kein Systembereich gefunden.",
      "search.noResultsHint":
        "Versuche zum Beispiel „CONTINUITY“, „Pilot“, „Voice“, „Shift“ oder „Finance“.",
      "search.navigate": "Navigieren",
      "search.open": "Öffnen",
      "search.close": "Schließen",

      "language.label": "Sprache",
      "language.select":
        "Sprache auswählen",
      "language.current":
        "Aktuelle Sprache"

    },


    en: {

      "nav.system": "System",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industry",
      "nav.products": "Products",
      "nav.about": "About",

      "global.explore": "Explore",
      "global.open": "Open",
      "global.close": "Close",
      "global.discover": "Discover",
      "global.learnMore": "Learn more",
      "global.support": "Support",
      "global.contact": "Contact",

      "global.available": "Available",
      "global.development": "Development",
      "global.systemModule": "System Module",
      "global.architecture": "Architecture",

      "search.label": "ZAL SEARCH",
      "search.title": "Explore the system",
      "search.placeholder":
        "Search for a system, product or area …",
      "search.quickAccess":
        "QUICK ACCESS",
      "search.noResults":
        "No system area found.",
      "search.noResultsHint":
        "Try “CONTINUITY”, “Pilot”, “Voice”, “Shift” or “Finance”.",
      "search.navigate": "Navigate",
      "search.open": "Open",
      "search.close": "Close",

      "language.label": "Language",
      "language.select":
        "Select language",
      "language.current":
        "Current language"

    },


    tr: {

      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Zekâ",
      "nav.communication": "İletişim",
      "nav.industry": "Endüstri",
      "nav.products": "Ürünler",
      "nav.about": "Hakkında",

      "global.explore": "Keşfet",
      "global.open": "Aç",
      "global.close": "Kapat",
      "global.discover": "Keşfet",
      "global.learnMore":
        "Daha fazla bilgi",
      "global.support": "Destek",
      "global.contact": "İletişim",

      "global.available": "Mevcut",
      "global.development": "Geliştirme",
      "global.systemModule":
        "Sistem Modülü",
      "global.architecture": "Mimari",

      "search.label": "ZAL SEARCH",
      "search.title": "Sistemi keşfet",
      "search.placeholder":
        "Sistem, ürün veya alan ara …",
      "search.quickAccess":
        "HIZLI ERİŞİM",
      "search.noResults":
        "Sistem alanı bulunamadı.",
      "search.noResultsHint":
        "Örneğin “CONTINUITY”, “Pilot”, “Voice”, “Shift” veya “Finance” aramayı dene.",
      "search.navigate": "Gezin",
      "search.open": "Aç",
      "search.close": "Kapat",

      "language.label": "Dil",
      "language.select": "Dil seç",
      "language.current":
        "Mevcut dil"

    },


    es: {

      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligencia",
      "nav.communication": "Comunicación",
      "nav.industry": "Industria",
      "nav.products": "Productos",
      "nav.about": "Acerca de",

      "global.explore": "Explorar",
      "global.open": "Abrir",
      "global.close": "Cerrar",
      "global.discover": "Descubrir",
      "global.learnMore":
        "Más información",
      "global.support": "Soporte",
      "global.contact": "Contacto",

      "global.available": "Disponible",
      "global.development": "Desarrollo",
      "global.systemModule":
        "Módulo del sistema",
      "global.architecture": "Arquitectura",

      "search.label": "ZAL SEARCH",
      "search.title":
        "Explora el sistema",
      "search.placeholder":
        "Buscar sistema, producto o área …",
      "search.quickAccess":
        "ACCESO RÁPIDO",
      "search.noResults":
        "No se encontró ningún área del sistema.",
      "search.noResultsHint":
        "Prueba con “CONTINUITY”, “Pilot”, “Voice”, “Shift” o “Finance”.",
      "search.navigate": "Navegar",
      "search.open": "Abrir",
      "search.close": "Cerrar",

      "language.label": "Idioma",
      "language.select":
        "Seleccionar idioma",
      "language.current":
        "Idioma actual"

    },


    fr: {

      "nav.system": "Système",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industrie",
      "nav.products": "Produits",
      "nav.about": "À propos",

      "global.explore": "Explorer",
      "global.open": "Ouvrir",
      "global.close": "Fermer",
      "global.discover": "Découvrir",
      "global.learnMore":
        "En savoir plus",
      "global.support": "Support",
      "global.contact": "Contact",

      "global.available": "Disponible",
      "global.development":
        "Développement",
      "global.systemModule":
        "Module système",
      "global.architecture":
        "Architecture",

      "search.label": "ZAL SEARCH",
      "search.title":
        "Explorer le système",
      "search.placeholder":
        "Rechercher un système, un produit ou un domaine …",
      "search.quickAccess":
        "ACCÈS RAPIDE",
      "search.noResults":
        "Aucun domaine du système trouvé.",
      "search.noResultsHint":
        "Essayez « CONTINUITY », « Pilot », « Voice », « Shift » ou « Finance ».",
      "search.navigate": "Naviguer",
      "search.open": "Ouvrir",
      "search.close": "Fermer",

      "language.label": "Langue",
      "language.select":
        "Choisir la langue",
      "language.current":
        "Langue actuelle"

    },


    it: {

      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligenza",
      "nav.communication": "Comunicazione",
      "nav.industry": "Industria",
      "nav.products": "Prodotti",
      "nav.about": "Informazioni",

      "global.explore": "Esplora",
      "global.open": "Apri",
      "global.close": "Chiudi",
      "global.discover": "Scopri",
      "global.learnMore":
        "Scopri di più",
      "global.support": "Supporto",
      "global.contact": "Contatto",

      "global.available": "Disponibile",
      "global.development": "Sviluppo",
      "global.systemModule":
        "Modulo di sistema",
      "global.architecture":
        "Architettura",

      "search.label": "ZAL SEARCH",
      "search.title":
        "Esplora il sistema",
      "search.placeholder":
        "Cerca un sistema, prodotto o area …",
      "search.quickAccess":
        "ACCESSO RAPIDO",
      "search.noResults":
        "Nessuna area del sistema trovata.",
      "search.noResultsHint":
        "Prova “CONTINUITY”, “Pilot”, “Voice”, “Shift” o “Finance”.",
      "search.navigate": "Naviga",
      "search.open": "Apri",
      "search.close": "Chiudi",

      "language.label": "Lingua",
      "language.select":
        "Seleziona lingua",
      "language.current":
        "Lingua attuale"

    },


    ro: {

      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligență",
      "nav.communication": "Comunicare",
      "nav.industry": "Industrie",
      "nav.products": "Produse",
      "nav.about": "Despre",

      "global.explore": "Explorează",
      "global.open": "Deschide",
      "global.close": "Închide",
      "global.discover": "Descoperă",
      "global.learnMore":
        "Află mai multe",
      "global.support": "Suport",
      "global.contact": "Contact",

      "global.available": "Disponibil",
      "global.development":
        "Dezvoltare",
      "global.systemModule":
        "Modul de sistem",
      "global.architecture":
        "Arhitectură",

      "search.label": "ZAL SEARCH",
      "search.title":
        "Explorează sistemul",
      "search.placeholder":
        "Caută un sistem, produs sau domeniu …",
      "search.quickAccess":
        "ACCES RAPID",
      "search.noResults":
        "Nu a fost găsit niciun domeniu al sistemului.",
      "search.noResultsHint":
        "Încearcă „CONTINUITY”, „Pilot”, „Voice”, „Shift” sau „Finance”.",
      "search.navigate": "Navigare",
      "search.open": "Deschide",
      "search.close": "Închide",

      "language.label": "Limbă",
      "language.select":
        "Selectează limba",
      "language.current":
        "Limba curentă"

    },


    "zh-Hans": {

      "nav.system": "系统",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "智能",
      "nav.communication": "通信",
      "nav.industry": "工业",
      "nav.products": "产品",
      "nav.about": "关于",

      "global.explore": "探索",
      "global.open": "打开",
      "global.close": "关闭",
      "global.discover": "探索",
      "global.learnMore": "了解更多",
      "global.support": "支持",
      "global.contact": "联系",

      "global.available": "可用",
      "global.development": "开发中",
      "global.systemModule": "系统模块",
      "global.architecture": "架构",

      "search.label": "ZAL SEARCH",
      "search.title": "探索系统",
      "search.placeholder":
        "搜索系统、产品或领域 …",
      "search.quickAccess": "快速访问",
      "search.noResults":
        "未找到相关系统领域。",
      "search.noResultsHint":
        "可以尝试搜索“CONTINUITY”、“Pilot”、“Voice”、“Shift”或“Finance”。",
      "search.navigate": "导航",
      "search.open": "打开",
      "search.close": "关闭",

      "language.label": "语言",
      "language.select": "选择语言",
      "language.current": "当前语言"

    }

  };


  /* ============================================================
     LANGUAGE SWITCHER STYLES
     ============================================================ */

  const styleId =
    "zal-language-styles";


  if (
    !document.getElementById(
      styleId
    )
  ) {

    const style =
      document.createElement(
        "style"
      );


    style.id =
      styleId;


    style.textContent = `

      /* ========================================================
         ZAL LANGUAGE — ROOT
         ======================================================== */

      .zal-language {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        z-index: 1002;
      }


      /* ========================================================
         TRIGGER
         ======================================================== */

      .zal-language-trigger {
        appearance: none;
        -webkit-appearance: none;

        min-width: 42px;
        height: 40px;

        padding: 0 10px;

        border:
          1px solid
          rgba(255,255,255,.09);

        border-radius: 999px;

        background:
          rgba(255,255,255,.025);

        color:
          rgba(238,242,250,.72);

        display:
          inline-flex;

        align-items:
          center;

        justify-content:
          center;

        gap:
          5px;

        cursor:
          pointer;

        font:
          inherit;

        font-size:
          10px;

        font-weight:
          650;

        letter-spacing:
          .08em;

        line-height:
          1;

        white-space:
          nowrap;

        backdrop-filter:
          blur(18px);

        -webkit-backdrop-filter:
          blur(18px);

        transition:
          border-color .2s ease,
          background .2s ease,
          color .2s ease,
          transform .2s ease;
      }


      .zal-language-trigger:hover {
        color:
          rgba(255,255,255,.96);

        border-color:
          rgba(88,224,255,.24);

        background:
          rgba(88,224,255,.045);

        transform:
          translateY(-1px);
      }


      .zal-language-trigger:focus-visible {
        outline:
          2px solid
          rgba(88,224,255,.62);

        outline-offset:
          3px;
      }


      .zal-language-trigger-label {
        display:
          inline-flex;

        align-items:
          center;

        justify-content:
          center;
      }


      .zal-language-trigger-chevron {
        font-size:
          8px;

        opacity:
          .48;

        transform:
          translateY(-1px);

        transition:
          transform .18s ease;
      }


      .zal-language.is-open
      .zal-language-trigger-chevron {
        transform:
          translateY(-1px)
          rotate(180deg);
      }


      /* ========================================================
         MENU — ABSOLUTE OVERLAY
         ======================================================== */

      .zal-language-menu {
        position:
          absolute;

        top:
          calc(100% + 12px);

        right:
          0;

        width:
          190px;

        padding:
          7px;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:
          16px;

        background:
          linear-gradient(
            180deg,
            rgba(17,23,36,.97),
            rgba(5,8,15,.98)
          );

        box-shadow:
          0 24px 70px
          rgba(0,0,0,.52);

        backdrop-filter:
          blur(24px);

        -webkit-backdrop-filter:
          blur(24px);

        opacity:
          0;

        visibility:
          hidden;

        pointer-events:
          none;

        transform:
          translateY(-6px)
          scale(.985);

        transform-origin:
          top right;

        transition:
          opacity .18s ease,
          visibility .18s ease,
          transform .18s ease;
      }


      .zal-language-menu::before {
        content:
          "";

        position:
          absolute;

        left:
          16px;

        right:
          16px;

        top:
          0;

        height:
          1px;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(88,224,255,.45),
            rgba(219,177,94,.32),
            transparent
          );

        pointer-events:
          none;
      }


      .zal-language.is-open
      .zal-language-menu {
        opacity:
          1;

        visibility:
          visible;

        pointer-events:
          auto;

        transform:
          translateY(0)
          scale(1);
      }


      /* ========================================================
         OPTIONS
         ======================================================== */

      .zal-language-option {
        appearance:
          none;

        -webkit-appearance:
          none;

        width:
          100%;

        min-height:
          38px;

        margin:
          0;

        padding:
          0 10px;

        border:
          1px solid
          transparent;

        border-radius:
          10px;

        background:
          transparent;

        color:
          rgba(238,242,250,.66);

        display:
          grid;

        grid-template-columns:
          44px 1fr 18px;

        align-items:
          center;

        gap:
          4px;

        text-align:
          left;

        cursor:
          pointer;

        font:
          inherit;

        transition:
          background .14s ease,
          border-color .14s ease,
          color .14s ease;
      }


      .zal-language-option:hover,
      .zal-language-option:focus-visible {
        background:
          rgba(88,224,255,.055);

        border-color:
          rgba(88,224,255,.09);

        color:
          rgba(255,255,255,.94);

        outline:
          none;
      }


      .zal-language-option.is-active {
        background:
          linear-gradient(
            90deg,
            rgba(88,224,255,.07),
            rgba(157,136,255,.025)
          );

        border-color:
          rgba(88,224,255,.12);

        color:
          rgba(255,255,255,.96);
      }


      .zal-language-option-code {
        font-size:
          9px;

        font-weight:
          750;

        letter-spacing:
          .11em;

        color:
          rgba(88,224,255,.74);
      }


      .zal-language-option-name {
        font-size:
          11px;

        font-weight:
          520;

        white-space:
          nowrap;
      }


      .zal-language-option-check {
        opacity:
          0;

        color:
          rgba(88,224,255,.85);

        font-size:
          11px;

        text-align:
          right;
      }


      .zal-language-option.is-active
      .zal-language-option-check {
        opacity:
          1;
      }


      /* ========================================================
         TOPBAR SAFETY
         ======================================================== */

      .topbar-cta {
        position:
          relative;

        display:
          flex;

        align-items:
          center;

        justify-content:
          flex-end;

        gap:
          8px;

        flex:
          0 0 auto;

        white-space:
          nowrap;
      }


      /* ========================================================
         MOBILE
         ======================================================== */

      @media
      (max-width: 820px) {

        .zal-language-trigger {
          width:
            40px;

          min-width:
            40px;

          height:
            40px;

          padding:
            0 5px;

          border-radius:
            50%;
        }


        .zal-language-trigger-chevron {
          display:
            none;
        }


        .zal-language-menu {
          position:
            fixed;

          top:
            70px;

          right:
            12px;

          width:
            min(
              210px,
              calc(100vw - 24px)
            );
        }

      }


      /* ========================================================
         REDUCED MOTION
         ======================================================== */

      @media
      (prefers-reduced-motion: reduce) {

        .zal-language-trigger,
        .zal-language-menu,
        .zal-language-option,
        .zal-language-trigger-chevron {
          transition:
            none !important;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ============================================================
     LANGUAGE RESOLUTION
     ============================================================ */

  const normalizeLanguage =
    (value) => {

      if (!value) {
        return null;
      }


      const language =
        String(value)
          .trim()
          .toLowerCase();


      if (
        language === "zh" ||
        language === "zh-cn" ||
        language === "zh-sg" ||
        language === "zh-hans"
      ) {

        return "zh-Hans";

      }


      const shortCode =
        language.split("-")[0];


      const match =
        SUPPORTED_LANGUAGES.find(
          (supportedLanguage) =>
            supportedLanguage
              .toLowerCase() ===
            shortCode
        );


      return match || null;

    };


  const getStoredLanguage =
    () => {

      try {

        return normalizeLanguage(
          window.localStorage.getItem(
            STORAGE_KEY
          )
        );

      } catch (error) {

        return null;

      }

    };


  const getBrowserLanguage =
    () => {

      const browserLanguages =
        navigator.languages &&
        navigator.languages.length
          ? navigator.languages
          : [navigator.language];


      for (
        const browserLanguage
        of browserLanguages
      ) {

        const normalized =
          normalizeLanguage(
            browserLanguage
          );


        if (normalized) {
          return normalized;
        }

      }


      return null;

    };


  let currentLanguage =
    getStoredLanguage() ||
    getBrowserLanguage() ||
    DEFAULT_LANGUAGE;


  /* ============================================================
     TRANSLATION HELPERS
     ============================================================ */

  const translate =
    (
      key,
      language =
        currentLanguage
    ) => {

      const dictionary =
        translations[language] ||
        translations[
          DEFAULT_LANGUAGE
        ];


      return (
        dictionary[key] ??
        translations[
          DEFAULT_LANGUAGE
        ][key] ??
        key
      );

    };


  const translateElement =
    (element) => {

      const key =
        element.getAttribute(
          "data-i18n"
        );


      if (!key) {
        return;
      }


      const value =
        translate(key);


      const attribute =
        element.getAttribute(
          "data-i18n-attribute"
        );


      if (attribute) {

        element.setAttribute(
          attribute,
          value
        );

        return;

      }


      element.textContent =
        value;

    };


  const translateDocument =
    () => {

      document
        .querySelectorAll(
          "[data-i18n]"
        )
        .forEach(
          translateElement
        );


      document.documentElement.lang =
        currentLanguage ===
        "zh-Hans"
          ? "zh-Hans"
          : currentLanguage;


      document.documentElement
        .setAttribute(
          "data-language",
          currentLanguage
        );


      updateLanguageTrigger();
      updateLanguageOptions();


      document.dispatchEvent(
        new CustomEvent(
          "zal:languagechange",
          {
            detail: {

              language:
                currentLanguage,

              locale:
                LANGUAGE_META[
                  currentLanguage
                ].locale

            }
          }
        )
      );

    };


  /* ============================================================
     SAVE / CHANGE LANGUAGE
     ============================================================ */

  const setLanguage =
    (
      language,
      options = {}
    ) => {

      const normalized =
        normalizeLanguage(
          language
        );


      if (!normalized) {
        return false;
      }


      currentLanguage =
        normalized;


      if (
        options.persist !==
        false
      ) {

        try {

          window.localStorage
            .setItem(
              STORAGE_KEY,
              currentLanguage
            );

        } catch (error) {

          /* Storage unavailable */

        }

      }


      translateDocument();


      return true;

    };


  /* ============================================================
     LANGUAGE SWITCHER
     ============================================================ */

  const languageRoot =
    document.createElement(
      "div"
    );


  languageRoot.className =
    "zal-language";

  languageRoot.setAttribute(
    "data-zal-language",
    ""
  );


  const languageTrigger =
    document.createElement(
      "button"
    );


  languageTrigger.type =
    "button";

  languageTrigger.className =
    "zal-language-trigger";

  languageTrigger.setAttribute(
    "aria-haspopup",
    "listbox"
  );

  languageTrigger.setAttribute(
    "aria-expanded",
    "false"
  );


  const languageMenu =
    document.createElement(
      "div"
    );


  languageMenu.className =
    "zal-language-menu";

  languageMenu.setAttribute(
    "role",
    "listbox"
  );


  languageRoot.appendChild(
    languageTrigger
  );

  languageRoot.appendChild(
    languageMenu
  );


  /* ============================================================
     CREATE LANGUAGE OPTIONS
     ============================================================ */

  SUPPORTED_LANGUAGES.forEach(
    (language) => {

      const meta =
        LANGUAGE_META[
          language
        ];


      const option =
        document.createElement(
          "button"
        );


      option.type =
        "button";

      option.className =
        "zal-language-option";

      option.setAttribute(
        "role",
        "option"
      );

      option.setAttribute(
        "data-language-option",
        language
      );


      option.innerHTML = `

        <span
          class="zal-language-option-code"
        >
          ${meta.code}
        </span>

        <span
          class="zal-language-option-name"
        >
          ${meta.label}
        </span>

        <span
          class="zal-language-option-check"
          aria-hidden="true"
        >
          ✓
        </span>

      `;


      option.addEventListener(
        "click",
        () => {

          setLanguage(
            language
          );

          closeLanguageMenu();

          languageTrigger.focus();

        }
      );


      languageMenu.appendChild(
        option
      );

    }
  );


  /* ============================================================
     LANGUAGE STATE
     ============================================================ */

  function updateLanguageTrigger() {

    const meta =
      LANGUAGE_META[
        currentLanguage
      ];


    languageTrigger.innerHTML = `

      <span
        class="zal-language-trigger-label"
      >
        ${meta.code}
      </span>

      <span
        class="zal-language-trigger-chevron"
        aria-hidden="true"
      >
        ▾
      </span>

    `;


    languageTrigger.setAttribute(
      "aria-label",
      `${translate(
        "language.current"
      )}: ${meta.label}`
    );


    languageMenu.setAttribute(
      "aria-label",
      translate(
        "language.select"
      )
    );

  }


  function updateLanguageOptions() {

    languageMenu
      .querySelectorAll(
        "[data-language-option]"
      )
      .forEach(
        (option) => {

          const language =
            option.getAttribute(
              "data-language-option"
            );


          const isActive =
            language ===
            currentLanguage;


          option.classList.toggle(
            "is-active",
            isActive
          );


          option.setAttribute(
            "aria-selected",
            isActive
              ? "true"
              : "false"
          );

        }
      );

  }


  /* ============================================================
     OPEN / CLOSE
     ============================================================ */

  function openLanguageMenu() {

    languageRoot.classList.add(
      "is-open"
    );


    languageTrigger.setAttribute(
      "aria-expanded",
      "true"
    );


    const activeOption =
      languageMenu.querySelector(
        ".zal-language-option.is-active"
      );


    if (activeOption) {

      window.setTimeout(
        () => {

          activeOption.focus();

        },
        20
      );

    }

  }


  function closeLanguageMenu() {

    languageRoot.classList.remove(
      "is-open"
    );


    languageTrigger.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  function toggleLanguageMenu() {

    if (
      languageRoot.classList.contains(
        "is-open"
      )
    ) {

      closeLanguageMenu();

    } else {

      openLanguageMenu();

    }

  }


  /* ============================================================
     TRIGGER
     ============================================================ */

  languageTrigger.addEventListener(
    "click",
    (event) => {

      event.preventDefault();
      event.stopPropagation();

      toggleLanguageMenu();

    }
  );


  /* ============================================================
     MOUNT INTO TOPBAR
     ============================================================ */

  const mountLanguageSwitcher =
    () => {

      const topbarCTA =
        document.querySelector(
          ".topbar-cta"
        );


      if (!topbarCTA) {
        return false;
      }


      const existing =
        topbarCTA.querySelector(
          "[data-zal-language]"
        );


      if (
        existing &&
        existing !==
        languageRoot
      ) {

        existing.remove();

      }


      if (
        languageRoot.parentElement ===
        topbarCTA
      ) {

        return true;

      }


      /*
       * site.js creates the search button
       * after zal-i18n.js loads.
       *
       * Therefore language is mounted
       * before Explore. site.js later
       * inserts Search before it.
       *
       * Final order:
       *
       * Search · Language · Explore
       */

      const exploreTrigger =
        topbarCTA.querySelector(
          "[data-command-open]"
        );


      if (exploreTrigger) {

        topbarCTA.insertBefore(
          languageRoot,
          exploreTrigger
        );

      } else {

        topbarCTA.appendChild(
          languageRoot
        );

      }


      return true;

    };


  mountLanguageSwitcher();


  /* ============================================================
     CLICK OUTSIDE
     ============================================================ */

  document.addEventListener(
    "click",
    (event) => {

      if (
        !languageRoot.contains(
          event.target
        )
      ) {

        closeLanguageMenu();

      }

    }
  );


  /* ============================================================
     KEYBOARD ACCESS
     ============================================================ */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key ===
        "Escape" &&
        languageRoot.classList
          .contains(
            "is-open"
          )
      ) {

        event.preventDefault();

        closeLanguageMenu();

        languageTrigger.focus();

        return;

      }


      if (
        !languageRoot.classList
          .contains(
            "is-open"
          )
      ) {

        return;

      }


      const options =
        Array.from(
          languageMenu
            .querySelectorAll(
              ".zal-language-option"
            )
        );


      if (
        options.length === 0
      ) {

        return;

      }


      const focusedIndex =
        options.indexOf(
          document.activeElement
        );


      if (
        event.key ===
        "ArrowDown"
      ) {

        event.preventDefault();


        const nextIndex =
          focusedIndex < 0
            ? 0
            : (
              focusedIndex + 1
            ) %
            options.length;


        options[
          nextIndex
        ].focus();

        return;

      }


      if (
        event.key ===
        "ArrowUp"
      ) {

        event.preventDefault();


        const nextIndex =
          focusedIndex <= 0
            ? options.length - 1
            : focusedIndex - 1;


        options[
          nextIndex
        ].focus();

        return;

      }


      if (
        event.key ===
        "Home"
      ) {

        event.preventDefault();

        options[0].focus();

        return;

      }


      if (
        event.key ===
        "End"
      ) {

        event.preventDefault();

        options[
          options.length - 1
        ].focus();

      }

    }
  );


  /* ============================================================
     PUBLIC API
     ============================================================ */

  window.ZAL_I18N = {

    getLanguage() {

      return currentLanguage;

    },


    getLocale() {

      return LANGUAGE_META[
        currentLanguage
      ].locale;

    },


    setLanguage,


    translate,


    refresh() {

      translateDocument();

    },


    registerTranslations(
      language,
      dictionary
    ) {

      const normalized =
        normalizeLanguage(
          language
        );


      if (
        !normalized ||
        !dictionary ||
        typeof dictionary !==
        "object"
      ) {

        return false;

      }


      translations[
        normalized
      ] = {

        ...translations[
          normalized
        ],

        ...dictionary

      };


      if (
        normalized ===
        currentLanguage
      ) {

        translateDocument();

      }


      return true;

    }

  };


  /* ============================================================
     INITIALIZE
     ============================================================ */

  updateLanguageTrigger();
  updateLanguageOptions();
  translateDocument();

})();
