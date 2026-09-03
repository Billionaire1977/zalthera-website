/* ============================================================
   ZALâ€™THERA WEBSITE 2.3
   SITE INTERACTION LAYER
   Multilingual Command Search / Final Polish
   ============================================================ */

(() => {
  "use strict";

  /* ============================================================
     SEARCH STYLESHEET
     ============================================================ */

  const ensureSearchStylesheet = () => {
    if (document.querySelector('link[data-zal-search-styles]')) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "zal-search.css";
    link.dataset.zalSearchStyles = "true";
    document.head.appendChild(link);
  };

  ensureSearchStylesheet();

  /* ============================================================
     YEAR
     ============================================================ */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ============================================================
     LANGUAGE HELPERS
     ============================================================ */

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

  const normalizeLanguage = (language) => {
    const raw = String(language || "").trim();

    if (!raw) {
      return "de";
    }

    if (SUPPORTED_LANGUAGES.includes(raw)) {
      return raw;
    }

    const lower = raw.toLowerCase();

    if (lower.startsWith("zh")) {
      return "zh-Hans";
    }

    const short = lower.split("-")[0];

    return SUPPORTED_LANGUAGES.includes(short)
      ? short
      : "de";
  };

  const getCurrentLanguage = () =>
    normalizeLanguage(
      window.ZAL_I18N?.language ||
      document.documentElement.lang ||
      "de"
    );

  const UI_COPY = {
    de: {
      navOpen: "Navigation Ã¶ffnen",
      navClose: "Navigation schlieÃŸen",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Das System erkunden.",
      searchClose: "Suche schlieÃŸen",
      searchPlaceholder: "System, Produkt, Funktion oder Thema suchen â€¦",
      searchAria: "ZALâ€™THERA durchsuchen",
      searchOpenTitle: "Suche Ã¶ffnen (âŒ˜K / Ctrl+K)",
      resultAria: "Suchergebnisse",
      metaHelp: "â†‘ â†“ auswÃ¤hlen Â· Enter Ã¶ffnen Â· Esc schlieÃŸen",
      systemIndex: "Systemindex",
      resultOne: "Ergebnis",
      resultMany: "Ergebnisse",
      emptyTitle: "Nichts gefunden.",
      emptyText: "Versuche z. B. â€žcontinuityâ€œ, â€žledgerâ€œ, â€žvoiceâ€œ, â€žshiftâ€œ, â€žfinanceâ€œ oder â€žpilotâ€œ.",
      localSearch: "LOKALE SUCHE Â· KEIN EXTERNER SUCHANBIETER",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    en: {
      navOpen: "Open navigation",
      navClose: "Close navigation",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Explore the system.",
      searchClose: "Close search",
      searchPlaceholder: "Search system, product, function or topic â€¦",
      searchAria: "Search ZALâ€™THERA",
      searchOpenTitle: "Open search (âŒ˜K / Ctrl+K)",
      resultAria: "Search results",
      metaHelp: "â†‘ â†“ select Â· Enter open Â· Esc close",
      systemIndex: "System index",
      resultOne: "result",
      resultMany: "results",
      emptyTitle: "Nothing found.",
      emptyText: "Try â€œcontinuityâ€, â€œledgerâ€, â€œvoiceâ€, â€œshiftâ€, â€œfinanceâ€ or â€œpilotâ€.",
      localSearch: "LOCAL SEARCH Â· NO EXTERNAL SEARCH PROVIDER",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    tr: {
      navOpen: "Navigasyonu aÃ§",
      navClose: "Navigasyonu kapat",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Sistemi keÅŸfet.",
      searchClose: "AramayÄ± kapat",
      searchPlaceholder: "Sistem, Ã¼rÃ¼n, iÅŸlev veya konu ara â€¦",
      searchAria: "ZALâ€™THERA iÃ§inde ara",
      searchOpenTitle: "AramayÄ± aÃ§ (âŒ˜K / Ctrl+K)",
      resultAria: "Arama sonuÃ§larÄ±",
      metaHelp: "â†‘ â†“ seÃ§ Â· Enter aÃ§ Â· Esc kapat",
      systemIndex: "Sistem dizini",
      resultOne: "sonuÃ§",
      resultMany: "sonuÃ§",
      emptyTitle: "SonuÃ§ bulunamadÄ±.",
      emptyText: "Ã–rn. â€œcontinuityâ€, â€œledgerâ€, â€œvoiceâ€, â€œshiftâ€, â€œfinanceâ€ veya â€œpilotâ€ deneyin.",
      localSearch: "YEREL ARAMA Â· HARÄ°CÄ° ARAMA SAÄžLAYICISI YOK",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    es: {
      navOpen: "Abrir navegaciÃ³n",
      navClose: "Cerrar navegaciÃ³n",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Explora el sistema.",
      searchClose: "Cerrar bÃºsqueda",
      searchPlaceholder: "Buscar sistema, producto, funciÃ³n o tema â€¦",
      searchAria: "Buscar en ZALâ€™THERA",
      searchOpenTitle: "Abrir bÃºsqueda (âŒ˜K / Ctrl+K)",
      resultAria: "Resultados de bÃºsqueda",
      metaHelp: "â†‘ â†“ seleccionar Â· Enter abrir Â· Esc cerrar",
      systemIndex: "Ãndice del sistema",
      resultOne: "resultado",
      resultMany: "resultados",
      emptyTitle: "No se encontrÃ³ nada.",
      emptyText: "Prueba con â€œcontinuityâ€, â€œledgerâ€, â€œvoiceâ€, â€œshiftâ€, â€œfinanceâ€ o â€œpilotâ€.",
      localSearch: "BÃšSQUEDA LOCAL Â· SIN PROVEEDOR EXTERNO",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    fr: {
      navOpen: "Ouvrir la navigation",
      navClose: "Fermer la navigation",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Explorer le systÃ¨me.",
      searchClose: "Fermer la recherche",
      searchPlaceholder: "Rechercher un systÃ¨me, produit, fonction ou sujet â€¦",
      searchAria: "Rechercher dans ZALâ€™THERA",
      searchOpenTitle: "Ouvrir la recherche (âŒ˜K / Ctrl+K)",
      resultAria: "RÃ©sultats de recherche",
      metaHelp: "â†‘ â†“ sÃ©lectionner Â· EntrÃ©e ouvrir Â· Ã‰chap fermer",
      systemIndex: "Index du systÃ¨me",
      resultOne: "rÃ©sultat",
      resultMany: "rÃ©sultats",
      emptyTitle: "Aucun rÃ©sultat.",
      emptyText: "Essayez Â« continuity Â», Â« ledger Â», Â« voice Â», Â« shift Â», Â« finance Â» ou Â« pilot Â».",
      localSearch: "RECHERCHE LOCALE Â· AUCUN FOURNISSEUR EXTERNE",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    it: {
      navOpen: "Apri navigazione",
      navClose: "Chiudi navigazione",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "Esplora il sistema.",
      searchClose: "Chiudi ricerca",
      searchPlaceholder: "Cerca sistema, prodotto, funzione o argomento â€¦",
      searchAria: "Cerca in ZALâ€™THERA",
      searchOpenTitle: "Apri ricerca (âŒ˜K / Ctrl+K)",
      resultAria: "Risultati di ricerca",
      metaHelp: "â†‘ â†“ seleziona Â· Invio apri Â· Esc chiudi",
      systemIndex: "Indice del sistema",
      resultOne: "risultato",
      resultMany: "risultati",
      emptyTitle: "Nessun risultato.",
      emptyText: "Prova â€œcontinuityâ€, â€œledgerâ€, â€œvoiceâ€, â€œshiftâ€, â€œfinanceâ€ o â€œpilotâ€.",
      localSearch: "RICERCA LOCALE Â· NESSUN PROVIDER ESTERNO",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    ro: {
      navOpen: "Deschide navigarea",
      navClose: "ÃŽnchide navigarea",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "ExploreazÄƒ sistemul.",
      searchClose: "ÃŽnchide cÄƒutarea",
      searchPlaceholder: "CautÄƒ sistem, produs, funcÈ›ie sau subiect â€¦",
      searchAria: "CautÄƒ Ã®n ZALâ€™THERA",
      searchOpenTitle: "Deschide cÄƒutarea (âŒ˜K / Ctrl+K)",
      resultAria: "Rezultatele cÄƒutÄƒrii",
      metaHelp: "â†‘ â†“ selecteazÄƒ Â· Enter deschide Â· Esc Ã®nchide",
      systemIndex: "Index sistem",
      resultOne: "rezultat",
      resultMany: "rezultate",
      emptyTitle: "Nu s-a gÄƒsit nimic.",
      emptyText: "ÃŽncearcÄƒ â€žcontinuityâ€, â€žledgerâ€, â€žvoiceâ€, â€žshiftâ€, â€žfinanceâ€ sau â€žpilotâ€.",
      localSearch: "CÄ‚UTARE LOCALÄ‚ Â· FÄ‚RÄ‚ FURNIZOR EXTERN",
      pilot: "ZALâ€™THERA Pilot â†’"
    },
    "zh-Hans": {
      navOpen: "æ‰“å¼€å¯¼èˆª",
      navClose: "å…³é—­å¯¼èˆª",
      searchEyebrow: "ZAL SEARCH",
      searchTitle: "æŽ¢ç´¢ç³»ç»Ÿã€‚",
      searchClose: "å…³é—­æœç´¢",
      searchPlaceholder: "æœç´¢ç³»ç»Ÿã€äº§å“ã€åŠŸèƒ½æˆ–ä¸»é¢˜ â€¦",
      searchAria: "æœç´¢ ZALâ€™THERA",
      searchOpenTitle: "æ‰“å¼€æœç´¢ï¼ˆâŒ˜K / Ctrl+Kï¼‰",
      resultAria: "æœç´¢ç»“æžœ",
      metaHelp: "â†‘ â†“ é€‰æ‹© Â· Enter æ‰“å¼€ Â· Esc å…³é—­",
      systemIndex: "ç³»ç»Ÿç´¢å¼•",
      resultOne: "ä¸ªç»“æžœ",
      resultMany: "ä¸ªç»“æžœ",
      emptyTitle: "æœªæ‰¾åˆ°ç»“æžœã€‚",
      emptyText: "å¯å°è¯•â€œcontinuityâ€â€œledgerâ€â€œvoiceâ€â€œshiftâ€â€œfinanceâ€æˆ–â€œpilotâ€ã€‚",
      localSearch: "æœ¬åœ°æœç´¢ Â· ä¸ä½¿ç”¨å¤–éƒ¨æœç´¢æœåŠ¡",
      pilot: "ZALâ€™THERA Pilot â†’"
    }
  };

  const SEARCH_ITEMS = [
    {
      id: "core",
      href: "core.html",
      title: "ZALâ€™THERA Core",
      eyebrow: {
        de: "SYSTEMGRUNDLAGE", en: "SYSTEM FOUNDATION", tr: "SÄ°STEM TEMELÄ°",
        es: "BASE DEL SISTEMA", fr: "FONDATION DU SYSTÃˆME", it: "FONDAMENTO DEL SISTEMA",
        ro: "FUNDAÈšIA SISTEMULUI", "zh-Hans": "ç³»ç»ŸåŸºç¡€"
      },
      description: {
        de: "IdentitÃ¤t, Kontext, Policy, Consent, Audit, Ledger, Trust und kontrollierte AusfÃ¼hrung.",
        en: "Identity, context, policy, consent, audit, ledger, trust and controlled execution.",
        tr: "Kimlik, baÄŸlam, politika, onay, denetim, ledger, gÃ¼ven ve kontrollÃ¼ yÃ¼rÃ¼tme.",
        es: "Identidad, contexto, polÃ­ticas, consentimiento, auditorÃ­a, ledger, confianza y ejecuciÃ³n controlada.",
        fr: "IdentitÃ©, contexte, rÃ¨gles, consentement, audit, ledger, confiance et exÃ©cution contrÃ´lÃ©e.",
        it: "IdentitÃ , contesto, policy, consenso, audit, ledger, fiducia ed esecuzione controllata.",
        ro: "Identitate, context, politici, consimÈ›ÄƒmÃ¢nt, audit, ledger, Ã®ncredere È™i execuÈ›ie controlatÄƒ.",
        "zh-Hans": "èº«ä»½ã€ä¸Šä¸‹æ–‡ã€ç­–ç•¥ã€åŒæ„ã€å®¡è®¡ã€Ledgerã€ä¿¡ä»»ä¸Žå—æŽ§æ‰§è¡Œã€‚"
      },
      keywords: "system core identity identitÃ¤t kimlik identidad identitÃ© identitÃ  identitate èº«ä»½ policy consent audit trust architecture kern"
    },
    {
      id: "ledger",
      href: "core.html#ledger",
      title: "THE LEDGER",
      eyebrow: {
        de: "CORE Â· AUDIT", en: "CORE Â· AUDIT", tr: "CORE Â· DENETÄ°M", es: "CORE Â· AUDITORÃA",
        fr: "CORE Â· AUDIT", it: "CORE Â· AUDIT", ro: "CORE Â· AUDIT", "zh-Hans": "CORE Â· å®¡è®¡"
      },
      description: {
        de: "Lokaler Wahrheitskern fÃ¼r nachvollziehbare und Ã¼berprÃ¼fbare Ereignisse.",
        en: "Local truth core for traceable and verifiable events.",
        tr: "Ä°zlenebilir ve doÄŸrulanabilir olaylar iÃ§in yerel doÄŸruluk Ã§ekirdeÄŸi.",
        es: "NÃºcleo local de verdad para eventos trazables y verificables.",
        fr: "Noyau local de vÃ©ritÃ© pour des Ã©vÃ©nements traÃ§ables et vÃ©rifiables.",
        it: "Nucleo locale di veritÃ  per eventi tracciabili e verificabili.",
        ro: "Nucleu local de adevÄƒr pentru evenimente trasabile È™i verificabile.",
        "zh-Hans": "ç”¨äºŽå¯è¿½æº¯ã€å¯éªŒè¯äº‹ä»¶çš„æœ¬åœ°äº‹å®žæ ¸å¿ƒã€‚"
      },
      keywords: "ledger audit event proof verified append only linked nachweis ereignis denetim prueba preuve prova dovadÄƒ å®¡è®¡ è¯æ˜Ž"
    },
    {
      id: "continuity",
      href: "index.html#continuity",
      title: "CONTINUITY",
      eyebrow: {
        de: "PERSÃ–NLICHES SOUVERÃ„NES SYSTEM", en: "PERSONAL SOVEREIGN SYSTEM",
        tr: "KÄ°ÅžÄ°SEL EGEMEN SÄ°STEM", es: "SISTEMA PERSONAL SOBERANO",
        fr: "SYSTÃˆME PERSONNEL SOUVERAIN", it: "SISTEMA PERSONALE SOVRANO",
        ro: "SISTEM PERSONAL SUVERAN", "zh-Hans": "ä¸ªäººä¸»æƒç³»ç»Ÿ"
      },
      description: {
        de: "Dokumente, Cards, Timeline, Finance, Herkunft, Kontext und persÃ¶nliche Systemintelligenz.",
        en: "Documents, Cards, Timeline, finance, provenance, context and personal system intelligence.",
        tr: "Belgeler, Cards, Timeline, finans, kaynak, baÄŸlam ve kiÅŸisel sistem zekÃ¢sÄ±.",
        es: "Documentos, Cards, Timeline, finanzas, procedencia, contexto e inteligencia personal del sistema.",
        fr: "Documents, Cards, Timeline, finances, provenance, contexte et intelligence personnelle du systÃ¨me.",
        it: "Documenti, Cards, Timeline, finanza, provenienza, contesto e intelligenza personale del sistema.",
        ro: "Documente, Cards, Timeline, finanÈ›e, provenienÈ›Äƒ, context È™i inteligenÈ›Äƒ personalÄƒ a sistemului.",
        "zh-Hans": "æ–‡æ¡£ã€Cardsã€Timelineã€è´¢åŠ¡ã€æ¥æºã€ä¸Šä¸‹æ–‡ä¸Žä¸ªäººç³»ç»Ÿæ™ºèƒ½ã€‚"
      },
      keywords: "continuity dokumente documents belgeler documentos finance finanzen finans finanzas finances documente æ–‡æ¡£ è´¢åŠ¡ cards timeline context"
    },
    {
      id: "intelligence",
      href: "index.html#intelligence",
      title: "ZALâ€™THERA Intelligence",
      eyebrow: {
        de: "KONTEXTUELLE INTELLIGENZ", en: "CONTEXTUAL INTELLIGENCE", tr: "BAÄžLAMSAL ZEKÃ‚",
        es: "INTELIGENCIA CONTEXTUAL", fr: "INTELLIGENCE CONTEXTUELLE", it: "INTELLIGENZA CONTESTUALE",
        ro: "INTELIGENÈšÄ‚ CONTEXTUALÄ‚", "zh-Hans": "ä¸Šä¸‹æ–‡æ™ºèƒ½"
      },
      description: {
        de: "Kontextgebundene Intelligenz, die versteht, erklÃ¤rt und vorbereitet, ohne AutoritÃ¤t zu Ã¼bernehmen.",
        en: "Context-bound intelligence that understands, explains and prepares without taking over authority.",
        tr: "Yetkiyi devralmadan anlayan, aÃ§Ä±klayan ve hazÄ±rlayan baÄŸlama baÄŸlÄ± zekÃ¢.",
        es: "Inteligencia ligada al contexto que comprende, explica y prepara sin asumir autoridad.",
        fr: "Une intelligence liÃ©e au contexte qui comprend, explique et prÃ©pare sans prendre lâ€™autoritÃ©.",
        it: "Intelligenza legata al contesto che comprende, spiega e prepara senza assumere autoritÃ .",
        ro: "InteligenÈ›Äƒ legatÄƒ de context care Ã®nÈ›elege, explicÄƒ È™i pregÄƒteÈ™te fÄƒrÄƒ a prelua autoritatea.",
        "zh-Hans": "åŸºäºŽä¸Šä¸‹æ–‡è¿›è¡Œç†è§£ã€è§£é‡Šå’Œå‡†å¤‡ï¼Œä½†ä¸æŽ¥ç®¡äººçš„æŽˆæƒã€‚"
      },
      keywords: "ai kÃ¼nstliche intelligenz intelligence yapay zeka inteligencia intelligence intelligenza inteligenÈ›Äƒ äººå·¥æ™ºèƒ½ context agent known inferred uncertain unknown"
    },
    {
      id: "communication",
      href: "index.html#communication",
      title: {
        de: "Kommunikation", en: "Communication", tr: "Ä°letiÅŸim", es: "ComunicaciÃ³n",
        fr: "Communication", it: "Comunicazione", ro: "Comunicare", "zh-Hans": "é€šä¿¡"
      },
      eyebrow: {
        de: "IDENTITÃ„T-ZU-IDENTITÃ„T", en: "IDENTITY-TO-IDENTITY", tr: "KÄ°MLÄ°KTEN KÄ°MLÄ°ÄžE",
        es: "IDENTIDAD A IDENTIDAD", fr: "IDENTITÃ‰ Ã€ IDENTITÃ‰", it: "IDENTITÃ€ A IDENTITÃ€",
        ro: "IDENTITATE LA IDENTITATE", "zh-Hans": "èº«ä»½åˆ°èº«ä»½"
      },
      description: {
        de: "Vertrauensbasierte Kommunikation zwischen autorisierten IdentitÃ¤ten.",
        en: "Trust-based communication between authorized identities.",
        tr: "Yetkili kimlikler arasÄ±nda gÃ¼vene dayalÄ± iletiÅŸim.",
        es: "ComunicaciÃ³n basada en confianza entre identidades autorizadas.",
        fr: "Communication fondÃ©e sur la confiance entre identitÃ©s autorisÃ©es.",
        it: "Comunicazione basata sulla fiducia tra identitÃ  autorizzate.",
        ro: "Comunicare bazatÄƒ pe Ã®ncredere Ã®ntre identitÄƒÈ›i autorizate.",
        "zh-Hans": "æŽˆæƒèº«ä»½ä¹‹é—´åŸºäºŽä¿¡ä»»çš„é€šä¿¡ã€‚"
      },
      keywords: "communication kommunikation iletiÅŸim comunicaciÃ³n comunicazione comunicare é€šä¿¡ voice video files trust consent zal id"
    },
    {
      id: "voicebridge",
      href: "index.html#communication",
      title: "VoiceBridge",
      eyebrow: {
        de: "COMMUNICATION Â· ENTWICKLUNG", en: "COMMUNICATION Â· DEVELOPMENT", tr: "Ä°LETÄ°ÅžÄ°M Â· GELÄ°ÅžTÄ°RME",
        es: "COMUNICACIÃ“N Â· DESARROLLO", fr: "COMMUNICATION Â· DÃ‰VELOPPEMENT", it: "COMUNICAZIONE Â· SVILUPPO",
        ro: "COMUNICARE Â· DEZVOLTARE", "zh-Hans": "é€šä¿¡ Â· å¼€å‘ä¸­"
      },
      description: {
        de: "Direkte Sprachkommunikation zwischen autorisierten IdentitÃ¤ten.",
        en: "Direct voice communication between authorized identities.",
        tr: "Yetkili kimlikler arasÄ±nda doÄŸrudan sesli iletiÅŸim.",
        es: "ComunicaciÃ³n de voz directa entre identidades autorizadas.",
        fr: "Communication vocale directe entre identitÃ©s autorisÃ©es.",
        it: "Comunicazione vocale diretta tra identitÃ  autorizzate.",
        ro: "Comunicare vocalÄƒ directÄƒ Ã®ntre identitÄƒÈ›i autorizate.",
        "zh-Hans": "æŽˆæƒèº«ä»½ä¹‹é—´çš„ç›´æŽ¥è¯­éŸ³é€šä¿¡ã€‚"
      },
      keywords: "voicebridge voice sprache ses voz voix voce voce è¯­éŸ³ push to talk ptt webrtc audio"
    },
    {
      id: "industry",
      href: "index.html#industry",
      title: "ZALâ€™THERA Industry",
      eyebrow: {
        de: "REALE SYSTEME", en: "REAL-WORLD SYSTEMS", tr: "GERÃ‡EK DÃœNYA SÄ°STEMLERÄ°",
        es: "SISTEMAS DEL MUNDO REAL", fr: "SYSTÃˆMES DU MONDE RÃ‰EL", it: "SISTEMI DEL MONDO REALE",
        ro: "SISTEME DIN LUMEA REALÄ‚", "zh-Hans": "çŽ°å®žä¸–ç•Œç³»ç»Ÿ"
      },
      description: {
        de: "Operative Ãœbergaben, ProzesszustÃ¤nde, Sensordaten, Messwerte und zukÃ¼nftige Maschinenanbindungen.",
        en: "Operational handovers, process states, sensor data, measurements and future machine connections.",
        tr: "Operasyonel devirler, sÃ¼reÃ§ durumlarÄ±, sensÃ¶r verileri, Ã¶lÃ§Ã¼mler ve gelecekteki makine baÄŸlantÄ±larÄ±.",
        es: "Relevos operativos, estados de proceso, datos de sensores, mediciones y futuras conexiones de mÃ¡quinas.",
        fr: "RelÃ¨ves opÃ©rationnelles, Ã©tats de processus, donnÃ©es capteurs, mesures et futures connexions machines.",
        it: "Passaggi operativi, stati di processo, dati sensore, misure e future connessioni macchina.",
        ro: "PredÄƒri operaÈ›ionale, stÄƒri de proces, date de senzori, mÄƒsurÄƒtori È™i viitoare conexiuni cu utilaje.",
        "zh-Hans": "è¿è¥äº¤æŽ¥ã€æµç¨‹çŠ¶æ€ã€ä¼ æ„Ÿå™¨æ•°æ®ã€æµ‹é‡å€¼ä¸Žæœªæ¥æœºå™¨è¿žæŽ¥ã€‚"
      },
      keywords: "industry industrie endÃ¼stri industria industrie industria industrie å·¥ä¸š sensor machine maschine process messwerte shiftlog zal-gate"
    },
    {
      id: "zalgate",
      href: "index.html#industry",
      title: "ZAL-Gate",
      eyebrow: {
        de: "INDUSTRY Â· ARCHITEKTUR", en: "INDUSTRY Â· ARCHITECTURE", tr: "ENDÃœSTRÄ° Â· MÄ°MARÄ°",
        es: "INDUSTRIA Â· ARQUITECTURA", fr: "INDUSTRIE Â· ARCHITECTURE", it: "INDUSTRIA Â· ARCHITETTURA",
        ro: "INDUSTRIE Â· ARHITECTURÄ‚", "zh-Hans": "å·¥ä¸š Â· æž¶æž„"
      },
      description: {
        de: "Verbindung von Sensorik, Messwerten, Maschinen und ProzesszustÃ¤nden.",
        en: "Connection of sensors, measurements, machines and process states.",
        tr: "SensÃ¶rlerin, Ã¶lÃ§Ã¼mlerin, makinelerin ve sÃ¼reÃ§ durumlarÄ±nÄ±n baÄŸlantÄ±sÄ±.",
        es: "ConexiÃ³n de sensores, mediciones, mÃ¡quinas y estados de proceso.",
        fr: "Connexion des capteurs, mesures, machines et Ã©tats de processus.",
        it: "Connessione di sensori, misure, macchine e stati di processo.",
        ro: "Conectarea senzorilor, mÄƒsurÄƒtorilor, utilajelor È™i stÄƒrilor de proces.",
        "zh-Hans": "è¿žæŽ¥ä¼ æ„Ÿå™¨ã€æµ‹é‡å€¼ã€æœºå™¨ä¸Žæµç¨‹çŠ¶æ€ã€‚"
      },
      keywords: "zal-gate zalgate sensorik sensor sensÃ¶r sensores capteur sensori senzori ä¼ æ„Ÿå™¨ messwerte machine maschine process gateway"
    },
    {
      id: "proofflow",
      href: "proofflow.html",
      title: "ProofFlow",
      eyebrow: {
        de: "NACHWEIS Â· AUDIT Â· NACHVOLLZIEHBARKEIT", en: "PROOF Â· AUDIT Â· TRACEABILITY",
        tr: "KANIT Â· DENETÄ°M Â· Ä°ZLENEBÄ°LÄ°RLÄ°K", es: "PRUEBA Â· AUDITORÃA Â· TRAZABILIDAD",
        fr: "PREUVE Â· AUDIT Â· TRAÃ‡ABILITÃ‰", it: "PROVA Â· AUDIT Â· TRACCIABILITÃ€",
        ro: "DOVADÄ‚ Â· AUDIT Â· TRASABILITATE", "zh-Hans": "è¯æ˜Ž Â· å®¡è®¡ Â· å¯è¿½æº¯æ€§"
      },
      description: {
        de: "Nachweise, Fotos, Signaturen, Audit und Export in einem nachvollziehbaren Ablauf.",
        en: "Evidence, photos, signatures, audit and export in a traceable workflow.",
        tr: "Ä°zlenebilir bir sÃ¼reÃ§te kanÄ±tlar, fotoÄŸraflar, imzalar, denetim ve dÄ±ÅŸa aktarma.",
        es: "Pruebas, fotos, firmas, auditorÃ­a y exportaciÃ³n en un flujo trazable.",
        fr: "Preuves, photos, signatures, audit et export dans un processus traÃ§able.",
        it: "Prove, foto, firme, audit ed esportazione in un flusso tracciabile.",
        ro: "Dovezi, fotografii, semnÄƒturi, audit È™i export Ã®ntr-un flux trasabil.",
        "zh-Hans": "åœ¨å¯è¿½æº¯æµç¨‹ä¸­æ•´åˆè¯æ˜Žã€ç…§ç‰‡ã€ç­¾åã€å®¡è®¡ä¸Žå¯¼å‡ºã€‚"
      },
      keywords: "proofflow proof evidence audit sign signature export nachweis kanÄ±t prueba preuve prova dovadÄƒ è¯æ˜Ž"
    },
    {
      id: "shiftlog",
      href: "shiftlog.html",
      title: "ShiftLog",
      eyebrow: {
        de: "ZALâ€™THERA INDUSTRY", en: "ZALâ€™THERA INDUSTRY", tr: "ZALâ€™THERA ENDÃœSTRÄ°",
        es: "ZALâ€™THERA INDUSTRIA", fr: "ZALâ€™THERA INDUSTRIE", it: "ZALâ€™THERA INDUSTRIA",
        ro: "ZALâ€™THERA INDUSTRIE", "zh-Hans": "ZALâ€™THERA å·¥ä¸š"
      },
      description: {
        de: "Digitale SchichtÃ¼bergabe fÃ¼r operative ZustÃ¤nde, offene Punkte und Verantwortlichkeiten.",
        en: "Digital shift handover for operational states, open points and responsibilities.",
        tr: "Operasyonel durumlar, aÃ§Ä±k noktalar ve sorumluluklar iÃ§in dijital vardiya devri.",
        es: "Relevo digital de turno para estados operativos, puntos abiertos y responsabilidades.",
        fr: "RelÃ¨ve numÃ©rique pour Ã©tats opÃ©rationnels, points ouverts et responsabilitÃ©s.",
        it: "Passaggio turno digitale per stati operativi, punti aperti e responsabilitÃ .",
        ro: "Predare digitalÄƒ a schimbului pentru stÄƒri operaÈ›ionale, puncte deschise È™i responsabilitÄƒÈ›i.",
        "zh-Hans": "ç”¨äºŽè¿è¥çŠ¶æ€ã€æœªç»“äº‹é¡¹ä¸Žè´£ä»»äº¤æŽ¥çš„æ•°å­—åŒ–ç­æ¬¡äº¤æŽ¥ã€‚"
      },
      keywords: "shiftlog shift schicht handover vardiya turno relÃ¨ve passaggio schimb ç­æ¬¡ äº¤æŽ¥ state responsibility"
    },
    {
      id: "lifeflow",
      href: "lifeflow.html",
      title: "LifeFlow",
      eyebrow: {
        de: "PERSÃ–NLICHE FINANZKLARHEIT", en: "PERSONAL FINANCE CLARITY", tr: "KÄ°ÅžÄ°SEL FÄ°NANS NETLÄ°ÄžÄ°",
        es: "CLARIDAD FINANCIERA PERSONAL", fr: "CLARTÃ‰ FINANCIÃˆRE PERSONNELLE", it: "CHIAREZZA FINANZIARIA PERSONALE",
        ro: "CLARITATE FINANCIARÄ‚ PERSONALÄ‚", "zh-Hans": "ä¸ªäººè´¢åŠ¡æ¸…æ™°åº¦"
      },
      description: {
        de: "Kosten, VertrÃ¤ge, Fristen und persÃ¶nliche FinanzÃ¼bersicht.",
        en: "Costs, contracts, deadlines and personal financial overview.",
        tr: "Maliyetler, sÃ¶zleÅŸmeler, sÃ¼reler ve kiÅŸisel finans gÃ¶rÃ¼nÃ¼mÃ¼.",
        es: "Costes, contratos, plazos y visiÃ³n financiera personal.",
        fr: "CoÃ»ts, contrats, Ã©chÃ©ances et vue financiÃ¨re personnelle.",
        it: "Costi, contratti, scadenze e panoramica finanziaria personale.",
        ro: "Costuri, contracte, termene È™i imagine financiarÄƒ personalÄƒ.",
        "zh-Hans": "æˆæœ¬ã€åˆåŒã€æœŸé™ä¸Žä¸ªäººè´¢åŠ¡æ¦‚è§ˆã€‚"
      },
      keywords: "lifeflow kosten costs maliyet costes coÃ»ts costi costuri æˆæœ¬ contracts vertrÃ¤ge fristen finance money einkommen ausgaben"
    },
    {
      id: "pilot",
      href: "pilot.html",
      title: "ZALâ€™THERA Pilot",
      eyebrow: {
        de: "KONTROLLIERTER REALER EINSTIEG", en: "CONTROLLED REAL-WORLD ENTRY",
        tr: "KONTROLLÃœ GERÃ‡EK DÃœNYA GÄ°RÄ°ÅžÄ°", es: "ENTRADA CONTROLADA AL MUNDO REAL",
        fr: "ENTRÃ‰E CONTRÃ”LÃ‰E DANS LE RÃ‰EL", it: "INGRESSO CONTROLLATO NEL MONDO REALE",
        ro: "INTRARE CONTROLATÄ‚ ÃŽN LUMEA REALÄ‚", "zh-Hans": "å—æŽ§çŽ°å®žåœºæ™¯å…¥å£"
      },
      description: {
        de: "Einen realen Prozess klar abgrenzen, kontrolliert testen und den tatsÃ¤chlichen Nutzen prÃ¼fen.",
        en: "Clearly scope a real process, test it under control and verify actual value.",
        tr: "GerÃ§ek bir sÃ¼reci net biÃ§imde sÄ±nÄ±rla, kontrollÃ¼ test et ve gerÃ§ek faydayÄ± doÄŸrula.",
        es: "Delimitar un proceso real, probarlo de forma controlada y verificar su valor real.",
        fr: "DÃ©limiter un processus rÃ©el, le tester de faÃ§on contrÃ´lÃ©e et vÃ©rifier sa valeur rÃ©elle.",
        it: "Definire un processo reale, testarlo in modo controllato e verificarne il valore effettivo.",
        ro: "DelimiteazÄƒ clar un proces real, testeazÄƒ-l controlat È™i verificÄƒ valoarea realÄƒ.",
        "zh-Hans": "æ˜Žç¡®é™å®šçœŸå®žæµç¨‹ï¼Œåœ¨å—æŽ§æ¡ä»¶ä¸‹æµ‹è¯•å¹¶éªŒè¯å®žé™…ä»·å€¼ã€‚"
      },
      keywords: "pilot pilotprojekt project enterprise firma company ÅŸirket empresa entreprise azienda companie ä¼ä¸š test real process"
    },
    {
      id: "founder",
      href: "about.html#founder",
      title: "Patrick Walker",
      eyebrow: {
        de: "GRÃœNDER", en: "FOUNDER", tr: "KURUCU", es: "FUNDADOR",
        fr: "FONDATEUR", it: "FONDATORE", ro: "FONDATOR", "zh-Hans": "åˆ›å§‹äºº"
      },
      description: {
        de: "GrÃ¼nder und Systemarchitekt hinter ZALâ€™THERA.",
        en: "Founder and systems architect behind ZALâ€™THERA.",
        tr: "ZALâ€™THERAâ€™nÄ±n kurucusu ve sistem mimarÄ±.",
        es: "Fundador y arquitecto de sistemas detrÃ¡s de ZALâ€™THERA.",
        fr: "Fondateur et architecte systÃ¨me derriÃ¨re ZALâ€™THERA.",
        it: "Fondatore e architetto di sistemi di ZALâ€™THERA.",
        ro: "Fondator È™i arhitect de sisteme al ZALâ€™THERA.",
        "zh-Hans": "ZALâ€™THERA çš„åˆ›å§‹äººä¸Žç³»ç»Ÿæž¶æž„å¸ˆã€‚"
      },
      keywords: "patrick walker founder grÃ¼nder kurucu fundador fondateur fondatore fondator åˆ›å§‹äºº about"
    },
    {
      id: "about",
      href: "about.html",
      title: {
        de: "Ãœber ZALâ€™THERA", en: "About ZALâ€™THERA", tr: "ZALâ€™THERA HakkÄ±nda",
        es: "Acerca de ZALâ€™THERA", fr: "Ã€ propos de ZALâ€™THERA", it: "Informazioni su ZALâ€™THERA",
        ro: "Despre ZALâ€™THERA", "zh-Hans": "å…³äºŽ ZALâ€™THERA"
      },
      eyebrow: {
        de: "GRUNDPRINZIPIEN", en: "FIRST PRINCIPLES", tr: "TEMEL Ä°LKELER",
        es: "PRINCIPIOS FUNDAMENTALES", fr: "PRINCIPES FONDAMENTAUX", it: "PRINCIPI FONDAMENTALI",
        ro: "PRINCIPII FUNDAMENTALE", "zh-Hans": "åŸºæœ¬åŽŸåˆ™"
      },
      description: {
        de: "Warum ZALâ€™THERA entsteht und welche Prinzipien die Architektur bestimmen.",
        en: "Why ZALâ€™THERA exists and which principles shape its architecture.",
        tr: "ZALâ€™THERAâ€™nÄ±n neden var olduÄŸu ve mimarisini hangi ilkelerin ÅŸekillendirdiÄŸi.",
        es: "Por quÃ© existe ZALâ€™THERA y quÃ© principios definen su arquitectura.",
        fr: "Pourquoi ZALâ€™THERA existe et quels principes structurent son architecture.",
        it: "PerchÃ© esiste ZALâ€™THERA e quali principi ne guidano lâ€™architettura.",
        ro: "De ce existÄƒ ZALâ€™THERA È™i ce principii Ã®i definesc arhitectura.",
        "zh-Hans": "ZALâ€™THERA ä¸ºä½•å­˜åœ¨ï¼Œä»¥åŠå“ªäº›åŽŸåˆ™å¡‘é€ å…¶æž¶æž„ã€‚"
      },
      keywords: "about Ã¼ber hakkÄ±nda acerca propos informazioni despre å…³äºŽ principles prinzipien vision responsibility"
    },
    {
      id: "contact",
      href: "index.html#contact",
      title: {
        de: "Kontakt", en: "Contact", tr: "Ä°letiÅŸim", es: "Contacto", fr: "Contact",
        it: "Contatto", ro: "Contact", "zh-Hans": "è”ç³»"
      },
      eyebrow: {
        de: "KONTAKT", en: "CONTACT", tr: "Ä°LETÄ°ÅžÄ°M", es: "CONTACTO", fr: "CONTACT",
        it: "CONTATTO", ro: "CONTACT", "zh-Hans": "è”ç³»"
      },
      description: {
        de: "Fragen zu ZALâ€™THERA, Systemen, Modulen oder Pilotprojekten.",
        en: "Questions about ZALâ€™THERA, systems, modules or pilot projects.",
        tr: "ZALâ€™THERA, sistemler, modÃ¼ller veya pilot projeler hakkÄ±nda sorular.",
        es: "Preguntas sobre ZALâ€™THERA, sistemas, mÃ³dulos o proyectos piloto.",
        fr: "Questions sur ZALâ€™THERA, les systÃ¨mes, modules ou projets pilotes.",
        it: "Domande su ZALâ€™THERA, sistemi, moduli o progetti pilota.",
        ro: "ÃŽntrebÄƒri despre ZALâ€™THERA, sisteme, module sau proiecte pilot.",
        "zh-Hans": "å…³äºŽ ZALâ€™THERAã€ç³»ç»Ÿã€æ¨¡å—æˆ–è¯•ç‚¹é¡¹ç›®çš„é—®é¢˜ã€‚"
      },
      keywords: "kontakt contact iletiÅŸim contacto contatto è”ç³» email e-mail anfrage request"
    },
    {
      id: "support",
      href: "support.html",
      title: "Support",
      eyebrow: {
        de: "SUPPORT", en: "SUPPORT", tr: "DESTEK", es: "SOPORTE", fr: "SUPPORT",
        it: "SUPPORTO", ro: "SUPORT", "zh-Hans": "æ”¯æŒ"
      },
      description: {
        de: "Support und Hilfe zu ZALâ€™THERA-Produkten und Systemen.",
        en: "Support and help for ZALâ€™THERA products and systems.",
        tr: "ZALâ€™THERA Ã¼rÃ¼n ve sistemleri iÃ§in destek ve yardÄ±m.",
        es: "Soporte y ayuda para productos y sistemas ZALâ€™THERA.",
        fr: "Assistance pour les produits et systÃ¨mes ZALâ€™THERA.",
        it: "Supporto e assistenza per prodotti e sistemi ZALâ€™THERA.",
        ro: "Suport È™i ajutor pentru produsele È™i sistemele ZALâ€™THERA.",
        "zh-Hans": "ZALâ€™THERA äº§å“ä¸Žç³»ç»Ÿçš„æ”¯æŒå’Œå¸®åŠ©ã€‚"
      },
      keywords: "support hilfe help destek soporte assistance supporto suport æ”¯æŒ yardÄ±m ayuda aide aiuto ajutor å¸®åŠ©"
    },
    {
      id: "imprint",
      href: "impressum.html",
      title: {
        de: "Impressum", en: "Legal notice", tr: "Yasal Bilgiler", es: "Aviso legal",
        fr: "Mentions lÃ©gales", it: "Note legali", ro: "InformaÈ›ii legale", "zh-Hans": "æ³•å¾‹ä¿¡æ¯"
      },
      eyebrow: {
        de: "RECHTLICHES", en: "LEGAL", tr: "YASAL", es: "LEGAL", fr: "JURIDIQUE",
        it: "LEGALE", ro: "LEGAL", "zh-Hans": "æ³•å¾‹"
      },
      description: {
        de: "Rechtliche Anbieterinformationen.",
        en: "Legal provider information.",
        tr: "Yasal saÄŸlayÄ±cÄ± bilgileri.",
        es: "InformaciÃ³n legal del proveedor.",
        fr: "Informations lÃ©gales sur lâ€™Ã©diteur.",
        it: "Informazioni legali sul fornitore.",
        ro: "InformaÈ›ii legale despre furnizor.",
        "zh-Hans": "æœåŠ¡æä¾›è€…çš„æ³•å¾‹ä¿¡æ¯ã€‚"
      },
      keywords: "impressum legal rechtlich yasal aviso mentions note informaÈ›ii æ³•å¾‹ anbieter provider"
    },
    {
      id: "privacy",
      href: "datenschutz.html",
      title: {
        de: "Datenschutz", en: "Privacy", tr: "Gizlilik", es: "Privacidad", fr: "ConfidentialitÃ©",
        it: "Privacy", ro: "ConfidenÈ›ialitate", "zh-Hans": "éšç§"
      },
      eyebrow: {
        de: "RECHTLICHES", en: "LEGAL", tr: "YASAL", es: "LEGAL", fr: "JURIDIQUE",
        it: "LEGALE", ro: "LEGAL", "zh-Hans": "æ³•å¾‹"
      },
      description: {
        de: "DatenschutzerklÃ¤rung der ZALâ€™THERA Website.",
        en: "Privacy information for the ZALâ€™THERA website.",
        tr: "ZALâ€™THERA web sitesi iÃ§in gizlilik bilgileri.",
        es: "InformaciÃ³n de privacidad del sitio web de ZALâ€™THERA.",
        fr: "Informations de confidentialitÃ© du site ZALâ€™THERA.",
        it: "Informativa sulla privacy del sito ZALâ€™THERA.",
        ro: "InformaÈ›ii de confidenÈ›ialitate pentru site-ul ZALâ€™THERA.",
        "zh-Hans": "ZALâ€™THERA ç½‘ç«™çš„éšç§ä¿¡æ¯ã€‚"
      },
      keywords: "datenschutz privacy gizlilik privacidad confidentialitÃ© confidenÈ›ialitate éšç§ data protection legal"
    },
    {
      id: "terms",
      href: "agb.html",
      title: {
        de: "AGB", en: "Terms", tr: "Åžartlar", es: "TÃ©rminos", fr: "Conditions",
        it: "Termini", ro: "Termeni", "zh-Hans": "æ¡æ¬¾"
      },
      eyebrow: {
        de: "RECHTLICHES", en: "LEGAL", tr: "YASAL", es: "LEGAL", fr: "JURIDIQUE",
        it: "LEGALE", ro: "LEGAL", "zh-Hans": "æ³•å¾‹"
      },
      description: {
        de: "Allgemeine GeschÃ¤ftsbedingungen fÃ¼r LifeFlow.",
        en: "Terms and conditions for LifeFlow.",
        tr: "LifeFlow iÃ§in hÃ¼kÃ¼m ve koÅŸullar.",
        es: "TÃ©rminos y condiciones de LifeFlow.",
        fr: "Conditions gÃ©nÃ©rales pour LifeFlow.",
        it: "Termini e condizioni per LifeFlow.",
        ro: "Termeni È™i condiÈ›ii pentru LifeFlow.",
        "zh-Hans": "LifeFlow çš„æ¡æ¬¾ä¸Žæ¡ä»¶ã€‚"
      },
      keywords: "agb terms ÅŸartlar tÃ©rminos conditions termini termeni æ¡æ¬¾ lifeflow legal"
    },
    {
      id: "withdrawal",
      href: "widerruf.html",
      title: {
        de: "Widerruf", en: "Withdrawal", tr: "Cayma HakkÄ±", es: "Desistimiento",
        fr: "RÃ©tractation", it: "Recesso", ro: "Retragere", "zh-Hans": "æ’¤é”€æƒ"
      },
      eyebrow: {
        de: "RECHTLICHES", en: "LEGAL", tr: "YASAL", es: "LEGAL", fr: "JURIDIQUE",
        it: "LEGALE", ro: "LEGAL", "zh-Hans": "æ³•å¾‹"
      },
      description: {
        de: "Informationen zum Widerrufsrecht.",
        en: "Information about the right of withdrawal.",
        tr: "Cayma hakkÄ± hakkÄ±nda bilgi.",
        es: "InformaciÃ³n sobre el derecho de desistimiento.",
        fr: "Informations sur le droit de rÃ©tractation.",
        it: "Informazioni sul diritto di recesso.",
        ro: "InformaÈ›ii despre dreptul de retragere.",
        "zh-Hans": "å…³äºŽæ’¤é”€æƒçš„ä¿¡æ¯ã€‚"
      },
      keywords: "widerruf withdrawal cayma desistimiento rÃ©tractation recesso retragere æ’¤é”€ legal"
    }
  ];

  const pickLocalized = (value, language) => {
    if (typeof value === "string") {
      return value;
    }

    return (
      value?.[language] ??
      value?.en ??
      value?.de ??
      ""
    );
  };

  const localizeSearchItem = (item, language) => ({
    id: item.id,
    href: item.href,
    title: pickLocalized(item.title, language),
    eyebrow: pickLocalized(item.eyebrow, language),
    description: pickLocalized(item.description, language),
    keywords: item.keywords || ""
  });

  const getLocalizedSearchIndex = () => {
    const language = getCurrentLanguage();

    return SEARCH_ITEMS.map((item) =>
      localizeSearchItem(item, language)
    );
  };

  /* ============================================================
     REDUCED MOTION
     ============================================================ */

  const reducedMotionQuery =
    window.matchMedia("(prefers-reduced-motion: reduce)");

  const prefersReducedMotion =
    reducedMotionQuery.matches;

  /* ============================================================
     TOPBAR
     ============================================================ */

  const topbar =
    document.querySelector("[data-topbar]");

  const updateTopbar = () => {
    if (!topbar) {
      return;
    }

    topbar.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );
  };

  updateTopbar();

  window.addEventListener(
    "scroll",
    updateTopbar,
    { passive: true }
  );

  /* ============================================================
     MOBILE NAVIGATION
     ============================================================ */

  const navToggle =
    document.querySelector("[data-nav-toggle]");

  const nav =
    document.querySelector("[data-nav]");

  const updateNavToggleLabel = () => {
    if (!navToggle) {
      return;
    }

    const ui = UI_COPY[getCurrentLanguage()] || UI_COPY.de;
    const isOpen = navToggle.classList.contains("is-open");

    navToggle.setAttribute(
      "aria-label",
      isOpen ? ui.navClose : ui.navOpen
    );
  };

  const closeNavigation = () => {
    if (!navToggle || !nav) {
      return;
    }

    navToggle.classList.remove("is-open");
    nav.classList.remove("is-open");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "nav-open"
    );

    updateNavToggleLabel();
  };

  const openNavigation = () => {
    if (!navToggle || !nav) {
      return;
    }

    navToggle.classList.add("is-open");
    nav.classList.add("is-open");

    navToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.classList.add(
      "nav-open"
    );

    updateNavToggleLabel();
  };

  updateNavToggleLabel();

  if (navToggle && nav) {
    navToggle.addEventListener(
      "click",
      () => {
        const isOpen =
          navToggle.classList.contains(
            "is-open"
          );

        if (isOpen) {
          closeNavigation();
        } else {
          openNavigation();
        }
      }
    );

    nav.querySelectorAll("a").forEach(
      (link) => {
        link.addEventListener(
          "click",
          closeNavigation
        );
      }
    );

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 820) {
          closeNavigation();
        }
      }
    );
  }

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */

  const revealElements =
    document.querySelectorAll(".reveal");

  if (
    prefersReducedMotion ||
    !("IntersectionObserver" in window)
  ) {
    revealElements.forEach(
      (element) => {
        element.classList.add(
          "is-visible"
        );
      }
    );
  } else {
    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(
            (entry) => {
              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -8% 0px"
        }
      );

    revealElements.forEach(
      (element) => {
        revealObserver.observe(element);
      }
    );
  }

  /* ============================================================
     ACTIVE SECTION NAVIGATION
     ============================================================ */

  const observedSections =
    document.querySelectorAll(
      "[data-section]"
    );

  const navLinks =
    document.querySelectorAll(
      '.nav a[href^="#"]'
    );

  if (
    observedSections.length > 0 &&
    navLinks.length > 0 &&
    "IntersectionObserver" in window
  ) {
    const sectionObserver =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (visibleEntries.length === 0) {
            return;
          }

          const activeId =
            visibleEntries[0]
              .target
              .id;

          navLinks.forEach(
            (link) => {
              const href =
                link.getAttribute(
                  "href"
                );

              link.classList.toggle(
                "is-active",
                href === `#${activeId}`
              );
            }
          );
        },
        {
          threshold: [
            0.2,
            0.35,
            0.5,
            0.65
          ],
          rootMargin:
            "-20% 0px -50% 0px"
        }
      );

    observedSections.forEach(
      (section) => {
        sectionObserver.observe(section);
      }
    );
  }

  /* ============================================================
     ZAL FIELD POINTER RESPONSE
     ============================================================ */

  const hero =
    document.querySelector("[data-hero]");

  const zalField =
    document.querySelector(
      "[data-zal-field]"
    );

  if (
    hero &&
    zalField &&
    !prefersReducedMotion
  ) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame = null;

    const renderField = () => {
      currentX +=
        (targetX - currentX) * 0.075;

      currentY +=
        (targetY - currentY) * 0.075;

      zalField.style.setProperty(
        "--zal-x",
        `${currentX}px`
      );

      zalField.style.setProperty(
        "--zal-y",
        `${currentY}px`
      );

      animationFrame =
        requestAnimationFrame(
          renderField
        );
    };

    const updatePointer = (event) => {
      const rect =
        hero.getBoundingClientRect();

      const x =
        (
          event.clientX -
          rect.left
        ) / rect.width;

      const y =
        (
          event.clientY -
          rect.top
        ) / rect.height;

      targetX =
        (x - 0.5) * 24;

      targetY =
        (y - 0.5) * 18;
    };

    const resetPointer = () => {
      targetX = 0;
      targetY = 0;
    };

    hero.addEventListener(
      "pointermove",
      updatePointer,
      { passive: true }
    );

    hero.addEventListener(
      "pointerleave",
      resetPointer
    );

    animationFrame =
      requestAnimationFrame(
        renderField
      );

    window.addEventListener(
      "pagehide",
      () => {
        if (animationFrame) {
          cancelAnimationFrame(
            animationFrame
          );
        }
      }
    );
  }

  /* ============================================================
     ZAL SEARCH / COMMAND SEARCH
     ============================================================ */

  const normalizeSearchText = (value) =>
    String(value || "")
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[â€™']/g, "")
      .trim();

  const createCommandSearch = () => {
    const overlay = document.createElement("div");
    overlay.className = "zal-command";
    overlay.hidden = true;
    overlay.setAttribute("aria-hidden", "true");

    overlay.innerHTML = `
      <div class="zal-command-backdrop" data-command-close></div>

      <section
        class="zal-command-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="zal-command-title"
      >
        <div class="zal-command-head">
          <div>
            <span class="zal-command-eyebrow" data-command-eyebrow></span>
            <h2 id="zal-command-title" data-command-title></h2>
          </div>

          <button
            class="zal-command-close"
            type="button"
            data-command-close
          >
            ESC
          </button>
        </div>

        <div class="zal-command-input-wrap">
          <span class="zal-command-search-icon" aria-hidden="true"></span>

          <input
            class="zal-command-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            data-command-input
          />

          <span class="zal-command-shortcut" aria-hidden="true">âŒ˜ K</span>
        </div>

        <div class="zal-command-meta">
          <span data-command-count></span>
          <span data-command-help></span>
        </div>

        <div
          class="zal-command-results"
          role="listbox"
          data-command-results
        ></div>

        <div class="zal-command-footer">
          <span data-command-local></span>
          <a href="pilot.html" data-command-pilot></a>
        </div>
      </section>
    `;

    document.body.appendChild(overlay);

    return overlay;
  };

  const commandOverlay =
    createCommandSearch();

  const commandInput =
    commandOverlay.querySelector(
      "[data-command-input]"
    );

  const commandResults =
    commandOverlay.querySelector(
      "[data-command-results]"
    );

  const commandCount =
    commandOverlay.querySelector(
      "[data-command-count]"
    );

  let commandMatches = [];
  let commandSelection = 0;
  let commandLastFocused = null;

  const ensureTopbarSearchButton = () => {
    const cta = document.querySelector(".topbar-cta");

    if (!cta || cta.querySelector("[data-command-search-button]")) {
      return;
    }

    const button = document.createElement("button");
    button.className = "zal-search-trigger";
    button.type = "button";
    button.dataset.commandSearchButton = "true";
    button.dataset.commandOpen = "true";

    button.innerHTML = `
      <span class="zal-search-trigger-icon" aria-hidden="true"></span>
      <span class="zal-search-trigger-key" aria-hidden="true">âŒ˜K</span>
    `;

    cta.prepend(button);
  };

  ensureTopbarSearchButton();

  const getSearchMatches = (query) => {
    const localizedIndex =
      getLocalizedSearchIndex();

    const normalizedQuery =
      normalizeSearchText(query);

    if (!normalizedQuery) {
      const featuredIds = [
        "continuity",
        "core",
        "pilot",
        "lifeflow",
        "proofflow",
        "shiftlog",
        "voicebridge",
        "zalgate",
        "about"
      ];

      return featuredIds
        .map((id) =>
          localizedIndex.find(
            (item) => item.id === id
          )
        )
        .filter(Boolean);
    }

    const terms =
      normalizedQuery
        .split(/\s+/)
        .filter(Boolean);

    return localizedIndex
      .map((item) => {
        const title =
          normalizeSearchText(item.title);

        const eyebrow =
          normalizeSearchText(item.eyebrow);

        const description =
          normalizeSearchText(item.description);

        const keywords =
          normalizeSearchText(item.keywords);

        let score = 0;

        terms.forEach((term) => {
          if (title === term) score += 20;
          if (title.startsWith(term)) score += 12;
          if (title.includes(term)) score += 8;
          if (eyebrow.includes(term)) score += 5;
          if (keywords.includes(term)) score += 5;
          if (description.includes(term)) score += 2;
        });

        return {
          ...item,
          score
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  };

  const navigateToSearchResult = (item) => {
    if (!item) {
      return;
    }

    closeCommandSearch();

    const url = new URL(
      item.href,
      window.location.href
    );

    const currentPath =
      window.location.pathname
        .replace(/\/$/, "/index.html");

    const targetPath =
      url.pathname
        .replace(/\/$/, "/index.html");

    if (
      currentPath === targetPath &&
      url.hash
    ) {
      const target =
        document.querySelector(url.hash);

      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion
            ? "auto"
            : "smooth",
          block: "start"
        });

        history.replaceState(
          null,
          "",
          url.hash
        );

        return;
      }
    }

    window.location.href = item.href;
  };

  const updateCommandSelection = () => {
    const resultButtons =
      commandResults.querySelectorAll(
        "[data-command-result]"
      );

    resultButtons.forEach((button, index) => {
      const selected =
        index === commandSelection;

      button.classList.toggle(
        "is-selected",
        selected
      );

      button.setAttribute(
        "aria-selected",
        selected ? "true" : "false"
      );

      if (selected) {
        button.scrollIntoView({
          block: "nearest"
        });
      }
    });
  };

  const renderCommandResults = () => {
    const ui =
      UI_COPY[getCurrentLanguage()] ||
      UI_COPY.de;

    const query =
      commandInput.value;

    commandMatches =
      getSearchMatches(query);

    commandSelection = 0;

    if (query.trim()) {
      if (getCurrentLanguage() === "zh-Hans") {
        commandCount.textContent =
          `${commandMatches.length}${ui.resultMany}`;
      } else {
        commandCount.textContent =
          `${commandMatches.length} ${
            commandMatches.length === 1
              ? ui.resultOne
              : ui.resultMany
          }`;
      }
    } else {
      commandCount.textContent =
        ui.systemIndex;
    }

    if (commandMatches.length === 0) {
      commandResults.innerHTML = `
        <div class="zal-command-empty">
          <strong>${ui.emptyTitle}</strong>
          <span>${ui.emptyText}</span>
        </div>
      `;

      return;
    }

    commandResults.innerHTML =
      commandMatches
        .map(
          (item, index) => `
            <button
              class="zal-command-result${index === 0 ? " is-selected" : ""}"
              type="button"
              role="option"
              aria-selected="${index === 0 ? "true" : "false"}"
              data-command-result="${index}"
            >
              <span class="zal-command-result-marker" aria-hidden="true"></span>

              <span class="zal-command-result-copy">
                <small>${item.eyebrow}</small>
                <strong>${item.title}</strong>
                <span>${item.description}</span>
              </span>

              <span class="zal-command-result-arrow" aria-hidden="true">â†—</span>
            </button>
          `
        )
        .join("");

    commandResults
      .querySelectorAll("[data-command-result]")
      .forEach((button) => {
        button.addEventListener("mouseenter", () => {
          commandSelection = Number(
            button.dataset.commandResult
          );

          updateCommandSelection();
        });

        button.addEventListener("click", () => {
          const index = Number(
            button.dataset.commandResult
          );

          navigateToSearchResult(
            commandMatches[index]
          );
        });
      });
  };

  const updateCommandLanguage = () => {
    const ui =
      UI_COPY[getCurrentLanguage()] ||
      UI_COPY.de;

    const eyebrow =
      commandOverlay.querySelector(
        "[data-command-eyebrow]"
      );

    const title =
      commandOverlay.querySelector(
        "[data-command-title]"
      );

    const closeButton =
      commandOverlay.querySelector(
        ".zal-command-close"
      );

    const help =
      commandOverlay.querySelector(
        "[data-command-help]"
      );

    const local =
      commandOverlay.querySelector(
        "[data-command-local]"
      );

    const pilot =
      commandOverlay.querySelector(
        "[data-command-pilot]"
      );

    const searchButton =
      document.querySelector(
        "[data-command-search-button]"
      );

    if (eyebrow) {
      eyebrow.textContent =
        ui.searchEyebrow;
    }

    if (title) {
      title.textContent =
        ui.searchTitle;
    }

    if (closeButton) {
      closeButton.setAttribute(
        "aria-label",
        ui.searchClose
      );
    }

    if (commandInput) {
      commandInput.placeholder =
        ui.searchPlaceholder;

      commandInput.setAttribute(
        "aria-label",
        ui.searchAria
      );
    }

    if (commandResults) {
      commandResults.setAttribute(
        "aria-label",
        ui.resultAria
      );
    }

    if (help) {
      help.textContent =
        ui.metaHelp;
    }

    if (local) {
      local.textContent =
        ui.localSearch;
    }

    if (pilot) {
      pilot.textContent =
        ui.pilot;
    }

    if (searchButton) {
      searchButton.setAttribute(
        "aria-label",
        ui.searchAria
      );

      searchButton.setAttribute(
        "title",
        ui.searchOpenTitle
      );
    }

    updateNavToggleLabel();
    renderCommandResults();
  };

  function openCommandSearch() {
    if (!commandOverlay.hidden) {
      return;
    }

    commandLastFocused =
      document.activeElement;

    closeNavigation();

    commandOverlay.hidden = false;
    commandOverlay.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "command-open"
    );

    commandInput.value = "";
    updateCommandLanguage();

    window.requestAnimationFrame(() => {
      commandOverlay.classList.add(
        "is-open"
      );

      commandInput.focus();
    });
  }

  function closeCommandSearch() {
    if (commandOverlay.hidden) {
      return;
    }

    commandOverlay.classList.remove(
      "is-open"
    );

    commandOverlay.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "command-open"
    );

    window.setTimeout(() => {
      commandOverlay.hidden = true;

      if (
        commandLastFocused &&
        typeof commandLastFocused.focus === "function"
      ) {
        commandLastFocused.focus();
      }
    }, prefersReducedMotion ? 0 : 180);
  }

  updateCommandLanguage();

  window.addEventListener(
    "zal:languagechange",
    () => {
      updateCommandLanguage();
    }
  );

  document.addEventListener("click", (event) => {
    const opener =
      event.target.closest(
        "[data-command-open]"
      );

    if (opener) {
      event.preventDefault();
      openCommandSearch();
      return;
    }

    const closer =
      event.target.closest(
        "[data-command-close]"
      );

    if (closer) {
      event.preventDefault();
      closeCommandSearch();
    }
  });

  commandInput.addEventListener(
    "input",
    renderCommandResults
  );

  document.addEventListener(
    "keydown",
    (event) => {
      const commandShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (commandShortcut) {
        event.preventDefault();

        if (commandOverlay.hidden) {
          openCommandSearch();
        } else {
          closeCommandSearch();
        }

        return;
      }

      if (event.key === "Escape") {
        if (!commandOverlay.hidden) {
          event.preventDefault();
          closeCommandSearch();
        } else {
          closeNavigation();
        }

        return;
      }

      if (commandOverlay.hidden) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (commandMatches.length > 0) {
          commandSelection =
            (commandSelection + 1) %
            commandMatches.length;

          updateCommandSelection();
        }
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (commandMatches.length > 0) {
          commandSelection =
            (
              commandSelection - 1 +
              commandMatches.length
            ) % commandMatches.length;

          updateCommandSelection();
        }
      }

      if (event.key === "Enter") {
        if (
          document.activeElement === commandInput &&
          commandMatches.length > 0
        ) {
          event.preventDefault();

          navigateToSearchResult(
            commandMatches[commandSelection]
          );
        }
      }
    }
  );

  /* ============================================================
     SMOOTH INTERNAL ANCHORS
     ============================================================ */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(
      (anchor) => {
        anchor.addEventListener(
          "click",
          (event) => {
            if (
              anchor.hasAttribute(
                "data-command-open"
              )
            ) {
              return;
            }

            const targetId =
              anchor.getAttribute(
                "href"
              );

            if (
              !targetId ||
              targetId === "#"
            ) {
              return;
            }

            const target =
              document.querySelector(
                targetId
              );

            if (!target) {
              return;
            }

            event.preventDefault();

            target.scrollIntoView({
              behavior:
                prefersReducedMotion
                  ? "auto"
                  : "smooth",
              block: "start"
            });
          }
        );
      }
    );

})();
