/* ============================================================
   ZALâ€™THERA WEBSITE
   INTERNATIONALIZATION LAYER v2.0

   Languages:
   DE / EN / TR / ES / FR / IT / RO / ZH-HANS
   ============================================================ */

(() => {
  "use strict";

  const STORAGE_KEY = "zalthera-language";
  const DEFAULT_LANGUAGE = "de";

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
    de: { short: "DE", name: "Deutsch" },
    en: { short: "EN", name: "English" },
    tr: { short: "TR", name: "TÃ¼rkÃ§e" },
    es: { short: "ES", name: "EspaÃ±ol" },
    fr: { short: "FR", name: "FranÃ§ais" },
    it: { short: "IT", name: "Italiano" },
    ro: { short: "RO", name: "RomÃ¢nÄƒ" },
    "zh-Hans": { short: "ä¸­æ–‡", name: "ç®€ä½“ä¸­æ–‡" }
  };


  /* ============================================================
     TRANSLATIONS
     ============================================================ */

  const TRANSLATIONS = {

    /* ==========================================================
       DEUTSCH
       ========================================================== */

    de: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Hotelbetrieb, Gastronomie, Bestand und Teamarbeit in einem gemeinsamen System. Version 1.0 wird fÃ¼r die VerÃ¶ffentlichung vorbereitet.",
      "hp.status": "1.0 Â· In Vorbereitung",
      "hp.title": "Hospitality â€” Hotelbetrieb und Gastronomie | ZALâ€™THERA",
      "hp.hero": "Der Hotelbetrieb. Gemeinsam im Blick.",
      "hp.lead": "Von der Reservierung bis zur Bestellung: Hospitality verbindet Rezeption, Housekeeping und Service mit einem nachvollziehbaren gemeinsamen Stand.",
      "hp.explore": "Funktionen entdecken",
      "hp.contact": "Hospitality anfragen",
      "hp.operations": "Ein Betrieb. Verbundene Bereiche.",
      "hp.rooms": "Zimmer & GÃ¤ste",
      "hp.roomsText": "Zimmerstatus, GÃ¤ste, Reservierungen sowie An- und Abreisen Ã¼bersichtlich organisieren.",
      "hp.housekeeping": "Housekeeping & SchÃ¤den",
      "hp.housekeepingText": "Aufgaben zuweisen, Reinigung verfolgen und SchÃ¤den mit nachvollziehbarem Status festhalten.",
      "hp.dining": "Restaurant & KÃ¼che",
      "hp.diningText": "Tische, Speisekarte und Bestellungen verbinden. Der Service erfasst die Bestellung, die KÃ¼che sieht den Arbeitsstand.",
      "hp.stock": "Bestand & Verbrauch",
      "hp.stockText": "WareneingÃ¤nge, Verbrauch und Korrekturen protokollieren. VerknÃ¼pfte Bestellungen berÃ¼cksichtigen den Lagerbestand.",
      "hp.sync": "Team & ZAL Sync",
      "hp.syncText": "Gekoppelte MitarbeitergerÃ¤te arbeiten im Hotelnetz mit der Zentrale am Mac. Rollen und Freigaben begrenzen den Zugriff.",
      "hp.invoices": "Rechnungen & Auswertung",
      "hp.invoicesText": "Rechnungen und erfasste Zahlungen im separaten Journal nachvollziehen und Auswertungen exportieren.",
      "hp.roadmap": "Was bereitsteht. Was als NÃ¤chstes kommt.",
      "hp.releaseText": "Die Betriebsfunktionen werden fÃ¼r Version 1.0 vorbereitet. Ein App-Store-Download wird nach der VerÃ¶ffentlichung hier ergÃ¤nzt.",
      "hp.payments": "Online-Zahlungen Â· Integration & Test",
      "hp.paymentsText": "Der Gastzugang per QR-Code und die Zahlungsanbindung werden erprobt. Echte Online-Zahlungen sind noch nicht freigeschaltet.",
      "hp.ai": "2.0 Â· PersÃ¶nliche KI geplant",
      "hp.aiText": "Geplant ist die Verbindung zwischen Gast und Hotel: persÃ¶nliche KI soll BuchungswÃ¼nsche und RÃ¼ckfragen vorbereiten und Ã¼bergeben. Verbindliche Buchungen und Zahlungen benÃ¶tigen die vorgesehenen BestÃ¤tigungen.",
      "hp.contactText": "Du mÃ¶chtest Hospitality in deinem Betrieb kennenlernen? Schreib uns mit HotelgrÃ¶ÃŸe und gewÃ¼nschtem Einsatzbereich.",
      "hp.note": "Das Rechnungsmodul ersetzt keine geprÃ¼fte Kassen- oder SteuerlÃ¶sung.",


      /* GLOBAL */

      "nav.system": "System",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industry",
      "nav.products": "Products",
      "nav.about": "About",

      "global.home": "Home",
      "global.explore": "Explore",
      "global.open": "Ã–ffnen",
      "global.close": "SchlieÃŸen",
      "global.discover": "Entdecken",
      "global.learnMore": "Mehr erfahren",
      "global.support": "Support",
      "global.contact": "Kontakt",
      "global.available": "AVAILABLE",
      "global.development": "DEVELOPMENT",
      "global.systemModule": "SYSTEM MODULE",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Navigation Ã¶ffnen",
      "global.mainNavigation": "Hauptnavigation",

      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",


      /* ========================================================
         HOME
         ======================================================== */

      "home.hero.kicker":
        "SOUVERÃ„NE DIGITALE ARCHITEKTUR",

      "home.hero.title":
        "One system.<br>One identity.<br>Connected intelligence.",

      "home.hero.description":
        "ZALâ€™THERA verbindet IdentitÃ¤t, Kontext, kÃ¼nstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.",

      "home.hero.primary":
        "System entdecken",

      "home.hero.core":
        "ZALâ€™THERA Core",

      "home.state.label":
        "SYSTEMSTATUS",

      "home.state.identity":
        "IDENTITÃ„T",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "INTELLIGENCE",

      "home.state.communication":
        "COMMUNICATION",

      "home.state.industry":
        "INDUSTRY",

      "home.state.proof":
        "PROOF",

      "home.state.core":
        "CORE",

      "home.state.active":
        "AKTIVE ENTWICKLUNG",

      "home.state.architecture":
        "ARCHITEKTUR",

      "home.state.module":
        "SYSTEMMODUL",

      "home.system.eyebrow":
        "EIN SYSTEM",

      "home.system.title":
        "Technologie beginnt nicht mit einer App.",

      "home.system.lead":
        "Sie beginnt mit einer gemeinsamen Logik dafÃ¼r, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tatsÃ¤chlich ausgefÃ¼hrt werden kann.",

      "home.system.identity.title":
        "IdentitÃ¤t",

      "home.system.identity.text":
        "Wer oder welches autorisierte System handelt?",

      "home.system.context.title":
        "Kontext",

      "home.system.context.text":
        "In welchem Zusammenhang existieren Information und Handlung?",

      "home.system.intelligence.title":
        "Intelligenz",

      "home.system.intelligence.text":
        "Was lÃ¤sst sich aus dem vorhandenen Kontext verstehen?",

      "home.system.trust.title":
        "Vertrauen",

      "home.system.trust.text":
        "Was ist erlaubt, belegbar und Ã¼berprÃ¼fbar?",

      "home.system.action.title":
        "Aktion",

      "home.system.action.text":
        "Was darf tatsÃ¤chlich ausgefÃ¼hrt werden?",

      "home.system.principle":
        "KERNPRINZIP",

      "home.system.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "home.system.openArchitecture":
        "Architektur Ã¶ffnen",

      "home.continuity.eyebrow":
        "PERSÃ–NLICHES SOUVERÃ„NES SYSTEM",

      "home.continuity.status":
        "AKTIVE ENTWICKLUNG",

      "home.continuity.tagline":
        "Dein Lebenskontext. Strukturiert. Verbunden. VerstÃ¤ndlich.",

      "home.continuity.text1":
        "CONTINUITY verbindet persÃ¶nliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souverÃ¤nen persÃ¶nlichen Umgebung.",

      "home.continuity.text2":
        "Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im persÃ¶nlichen System.",

      "home.continuity.documents": "Dokumente",
      "home.continuity.cards": "Cards",
      "home.continuity.timeline": "Timeline",
      "home.continuity.finance": "Finanzen",
      "home.continuity.context": "Kontext",
      "home.continuity.audit": "Audit",

      "home.intelligence.eyebrow":
        "KONTEXTUELLE INTELLIGENZ",

      "home.intelligence.status":
        "AKTIVE ENTWICKLUNG",

      "home.intelligence.title":
        "ZALâ€™THERA Intelligence",

      "home.intelligence.tagline":
        "Intelligenz, die ihre Grenzen kennt.",

      "home.intelligence.text1":
        "Die Intelligenzschicht arbeitet nicht losgelÃ¶st vom Menschen. Sie versteht verfÃ¼gbaren Kontext, erkennt ZusammenhÃ¤nge, erklÃ¤rt Informationen und bereitet mÃ¶gliche Aktionen vor.",

      "home.intelligence.text2":
        "Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.",

      "home.communication.eyebrow":
        "IDENTITÃ„T-ZU-IDENTITÃ„T",

      "home.communication.status":
        "AKTIVE ENTWICKLUNG",

      "home.communication.title":
        "Communication",

      "home.communication.tagline":
        "Verbindung beginnt mit IdentitÃ¤t und Zustimmung.",

      "home.communication.text1":
        "ZALâ€™THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten IdentitÃ¤ten.",

      "home.communication.text2":
        "Sprache, spÃ¤ter Video, Dateien und vertrauensbasierte Zustellung werden nicht Ã¼ber Ã¶ffentliche Profile definiert, sondern Ã¼ber IdentitÃ¤t, Beziehung und Berechtigung.",

      "home.communication.voice": "SPRACHE",
      "home.communication.video": "VIDEO",
      "home.communication.files": "DATEIEN",
      "home.communication.trust": "VERTRAUEN",
      "home.communication.consent": "ZUSTIMMUNG",

      "home.communication.connectionRule":
        "ZUSTIMMUNG VOR VERBINDUNG",

      "home.industry.eyebrow":
        "REALE SYSTEME",

      "home.industry.status":
        "ENTWICKLUNG & ARCHITEKTUR",

      "home.industry.title":
        "ZALâ€™THERA Industry",

      "home.industry.tagline":
        "Reale Prozesse werden zu verstÃ¤ndlichen Systemen.",

      "home.industry.text":
        "Die industrielle Schicht verbindet operative Ãœbergaben, ProzesszustÃ¤nde, Sensordaten, Messwerte und zukÃ¼nftige Maschinenanbindungen.",

      "home.industry.shift":
        "SchichtÃ¼bergabe & operative ZustÃ¤nde",

      "home.industry.gate":
        "Sensorik, Messwerte & Maschinenprozesse",

      "home.industry.process":
        "Analyse & nachvollziehbare ProzesszustÃ¤nde",

      "home.proof.eyebrow":
        "NACHWEIS & VERTRAUEN",

      "home.proof.title":
        "Nachweis vor Annahme.",

      "home.proof.text":
        "ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.",

      "home.proof.open":
        "ProofFlow Ã¶ffnen",

      "home.products.eyebrow":
        "SYSTEMPORTFOLIO",

      "home.products.title":
        "Ein Ã–kosystem. Unterschiedliche Reifegrade.",

      "home.products.lead":
        "ZALâ€™THERA trennt klar zwischen verfÃ¼gbaren Produkten, aktiver Entwicklung, Systemmodulen und zukÃ¼nftiger Architektur.",

      "home.products.lifeflow":
        "Kosten, VertrÃ¤ge, Fristen und persÃ¶nliche FinanzÃ¼bersicht.",

      "home.products.continuity":
        "PersÃ¶nliche souverÃ¤ne Umgebung fÃ¼r Dokumente, Daten, Kontext und Intelligenz.",

      "home.products.proofflow":
        "Nachweise, Audit, Signatur und Ã¼berprÃ¼fbare AblÃ¤ufe.",

      "home.products.shiftlog":
        "Digitale SchichtÃ¼bergabe fÃ¼r operative ZustÃ¤nde und Verantwortlichkeiten.",

      "home.products.voicebridge":
        "Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten IdentitÃ¤ten.",

      "home.products.zalgate":
        "Architektur fÃ¼r die Verbindung von Sensorik, Messwerten, Maschinen und ProzesszustÃ¤nden.",

      "home.products.open": "Ã–ffnen â†’",
      "home.products.viewSystem": "System ansehen â†’",
      "home.products.viewDevelopment": "Entwicklung ansehen â†’",
      "home.products.viewArchitecture": "Architektur â†’",

      "home.pilot.eyebrow":
        "KONTROLLIERTER REALER EINSTIEG",

      "home.pilot.title":
        "ZALâ€™THERA Pilot",

      "home.pilot.text":
        "Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tatsÃ¤chlichen Nutzen prÃ¼fen â€“ ohne den bestehenden Betrieb sofort vollstÃ¤ndig zu ersetzen.",

      "home.pilot.discover":
        "Pilot entdecken",

      "home.pilot.request":
        "Pilot anfragen",

      "home.core.eyebrow":
        "UNTER JEDEM SYSTEM",

      "home.core.title":
        "ZALâ€™THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte AusfÃ¼hrung bilden den technischen Kern hinter dem Ã–kosystem.",

      "home.core.discover":
        "Core entdecken",

      "home.contact.eyebrow": "KONTAKT",
      "home.contact.title": "ZALâ€™THERA kontaktieren",

      "home.contact.text":
        "Fragen zu ZALâ€™THERA, einem System oder bestehenden Modulen?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Dein Name",
      "home.contact.email": "E-Mail",
      "home.contact.emailPlaceholder": "deine@email.de",
      "home.contact.message": "Nachricht",
      "home.contact.messagePlaceholder": "Deine Nachricht â€¦",
      "home.contact.send": "Senden",

      "home.contact.privacyPrefix":
        "Mit dem Absenden akzeptierst du unsere",

      "home.contact.privacy":
        "DatenschutzerklÃ¤rung",


      /* ========================================================
         CORE
         ======================================================== */

      "core.hero.kicker":
        "SYSTEMGRUNDLAGE",

      "core.hero.title":
        "Vertrauen sollte nicht<br>vorausgesetzt werden.<br>Es sollte konstruiert werden.",

      "core.hero.description":
        "ZALâ€™THERA Core verbindet IdentitÃ¤t, Kontext, Regeln, Zustimmung, Nachweis und kontrollierte AusfÃ¼hrung zu einer gemeinsamen Vertrauensarchitektur.",

      "core.hero.architecture":
        "Architektur Ã¶ffnen",

      "core.hero.identityBound":
        "IDENTITÃ„TSGEBUNDEN",

      "core.hero.policyGoverned":
        "REGELGESTEUERT",

      "core.hero.auditable":
        "NACHVOLLZIEHBAR",

      "core.hero.humanAuthorized":
        "MENSCHLICH AUTORISIERT",

      "core.status.label":
        "KERNPRINZIPIEN",

      "core.status.identity":
        "IDENTITÃ„T",

      "core.status.who":
        "WER",

      "core.status.context":
        "KONTEXT",

      "core.status.why":
        "WARUM",

      "core.status.policy":
        "REGELN",

      "core.status.what":
        "WAS",

      "core.status.consent":
        "ZUSTIMMUNG",

      "core.status.allow":
        "ERLAUBEN",

      "core.status.audit":
        "AUDIT",

      "core.status.prove":
        "NACHWEIS",

      "core.status.execution":
        "AUSFÃœHRUNG",

      "core.status.act":
        "HANDELN",

      "core.architecture.eyebrow":
        "Ã–FFENTLICHE ARCHITEKTUR",

      "core.architecture.title":
        "FÃ¼nf Ebenen. Eine nachvollziehbare Entscheidungskette.",

      "core.architecture.lead":
        "Die Ã¶ffentliche Architektur erklÃ¤rt die Grundlogik von ZALâ€™THERA, ohne interne Sicherheitsimplementierungen, private SchlÃ¼sselstrukturen oder Protokolldetails offenzulegen.",

      "core.architecture.identity.title":
        "IdentitÃ¤t",

      "core.architecture.identity.text":
        "Eine Handlung beginnt mit einer eindeutig zugeordneten IdentitÃ¤t, Rolle oder autorisierten Systeminstanz.",

      "core.architecture.context.title":
        "Kontext",

      "core.architecture.context.text":
        "Informationen werden nicht isoliert betrachtet, sondern mit Herkunft, Zeit und Beziehung verstanden.",

      "core.architecture.intelligence.title":
        "Intelligenz",

      "core.architecture.intelligence.text":
        "Systeme dÃ¼rfen Informationen strukturieren, erklÃ¤ren und mÃ¶gliche nÃ¤chste Schritte vorbereiten.",

      "core.architecture.trust.title":
        "Vertrauen",

      "core.architecture.trust.text":
        "Berechtigungen, Nachweise, Consent und Audit bestimmen, was als vertrauenswÃ¼rdig gelten darf.",

      "core.architecture.action.title":
        "Aktion",

      "core.architecture.action.text":
        "Konsequente Aktionen werden erst ausgefÃ¼hrt, wenn die erforderlichen Bedingungen erfÃ¼llt sind.",

      "core.architecture.principle":
        "SYSTEMPRINZIP",

      "core.architecture.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "core.architecture.technicalCore":
        "Technischer Kern",

      "core.technical.eyebrow":
        "TECHNISCHER KERN",

      "core.technical.lead":
        "Unterhalb der Ã¶ffentlichen Architektur arbeitet eine prÃ¤zisere Kontrollkette fÃ¼r nachvollziehbare Systemaktionen.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Regeln definieren Grenzen, ZustÃ¤nde, Berechtigungen und Bedingungen.",

      "core.technical.policy.question":
        "WAS IST ERLAUBT?",

      "core.technical.identity.title":
        "IdentitÃ¤t",

      "core.technical.identity.text":
        "Aktionen werden einer Person, Rolle, IdentitÃ¤t oder autorisierten Instanz zugeordnet.",

      "core.technical.identity.question":
        "WER HANDELT?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Relevante Ereignisse werden mit Herkunft, Zeitpunkt und Zustand nachvollziehbar dokumentiert.",

      "core.technical.audit.question":
        "WAS IST PASSIERT?",

      "core.technical.execute.title":
        "AusfÃ¼hren",

      "core.technical.execute.text":
        "Eine Aktion darf den sichtbaren Zustand erst verÃ¤ndern, wenn die notwendigen Bedingungen erfÃ¼llt sind.",

      "core.technical.execute.question":
        "DARF ES GESCHEHEN?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Ein lokaler Wahrheitskern fÃ¼r Ã¼berprÃ¼fbare Ereignisse.",

      "core.ledger.text1":
        "THE LEDGER hÃ¤lt relevante Ereignisse in nachvollziehbarer Reihenfolge fest. EintrÃ¤ge werden ergÃ¤nzt, miteinander verbunden und kÃ¶nnen spÃ¤ter geprÃ¼ft werden.",

      "core.ledger.text2":
        "Das Ziel ist nicht, sÃ¤mtliche Information zentral zu sammeln. Das Ziel ist, relevante ZustandsÃ¤nderungen nachvollziehbar und Ã¼berprÃ¼fbar zu machen.",

      "core.ledger.created":
        "ERSTELLT",

      "core.ledger.proof":
        "NACHWEIS",

      "core.ledger.signed":
        "SIGNIERT",

      "core.ledger.verified":
        "VERIFIZIERT",

      "core.ledger.appendOnly.title":
        "Nur ergÃ¤nzend",

      "core.ledger.appendOnly.text":
        "Relevante Ereignisse werden ergÃ¤nzt, nicht unbemerkt Ã¼berschrieben.",

      "core.ledger.linked.title":
        "VerknÃ¼pft",

      "core.ledger.linked.text":
        "Ereignisse erhalten eine nachvollziehbare Beziehung zueinander.",

      "core.ledger.verifiable.title":
        "ÃœberprÃ¼fbar",

      "core.ledger.verifiable.text":
        "Struktur, IntegritÃ¤t und Herkunft kÃ¶nnen geprÃ¼ft werden.",

      "core.trust.eyebrow":
        "VERTRAUENSSCHICHT",

      "core.trust.title":
        "Vertrauen wird nicht behauptet.",

      "core.trust.lead":
        "Es entsteht aus Ã¼berprÃ¼fbaren ZustÃ¤nden, IdentitÃ¤ten, Berechtigungen und Nachweisen.",

      "core.trust.proof.title":
        "Nachweisvertrauen",

      "core.trust.proof.text":
        "Existiert ein gÃ¼ltiger Nachweis fÃ¼r die behauptete Aktion?",

      "core.trust.policy.title":
        "Regelvertrauen",

      "core.trust.policy.text":
        "Wurde innerhalb der vorgesehenen Regeln gehandelt?",

      "core.trust.identity.title":
        "IdentitÃ¤tsvertrauen",

      "core.trust.identity.text":
        "Ist die handelnde IdentitÃ¤t eindeutig und autorisiert?",

      "core.trust.audit.title":
        "Audit-Vertrauen",

      "core.trust.audit.text":
        "Ist der Ablauf vollstÃ¤ndig genug, um spÃ¤ter nachvollzogen zu werden?",

      "core.authorization.eyebrow":
        "MENSCHLICHES AUTORISIERUNGSTOR",

      "core.authorization.title":
        "Intelligenz darf vorbereiten.<br>AutoritÃ¤t bleibt ausdrÃ¼cklich.",

      "core.authorization.text":
        "ZALâ€™THERA kann Informationen verstehen, strukturieren, erklÃ¤ren und HandlungsmÃ¶glichkeiten vorbereiten. Konsequente Aktionen bleiben jedoch an die erforderliche menschliche oder ausdrÃ¼cklich delegierte Autorisierung gebunden.",

      "core.application.eyebrow":
        "SYSTEMANWENDUNG",

      "core.application.title":
        "Ein Kern. Mehrere Anwendungswelten.",

      "core.application.personal":
        "PERSÃ–NLICH",

      "core.application.continuity":
        "Dokumente Â· Finanzen Â· Kontext Â· Cards",

      "core.application.proof":
        "NACHWEIS",

      "core.application.proofflow":
        "Nachweis Â· Audit Â· Signatur Â· Export",

      "core.application.communication":
        "KOMMUNIKATION",

      "core.application.voicebridge":
        "IdentitÃ¤t Â· Zustimmung Â· Sprache Â· Vertrauen",

      "core.application.industry":
        "INDUSTRIE",

      "core.application.shiftlog":
        "Ãœbergabe Â· Zustand Â· Verantwortung",

      "core.return.title":
        "Der Kern ist nicht das Produkt.<br>Er verbindet die Produkte.",

      "core.return.button":
        "ZurÃ¼ck zum System"
    },


    /* ==========================================================
       ENGLISH
       ========================================================== */

    en: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Hotel operations, dining, inventory and teamwork in one shared system. Version 1.0 is being prepared for release.",
      "hp.status": "1.0 Â· Preparing for release",
      "hp.title": "Hospitality â€” Hotel operations and dining | ZALâ€™THERA",
      "hp.hero": "Hotel operations. A shared view.",
      "hp.lead": "From reservations to orders: Hospitality connects reception, housekeeping and service through a traceable shared view.",
      "hp.explore": "Explore features",
      "hp.contact": "Ask about Hospitality",
      "hp.operations": "One operation. Connected teams.",
      "hp.rooms": "Rooms & guests",
      "hp.roomsText": "Organize room status, guests, reservations, arrivals and departures in one clear view.",
      "hp.housekeeping": "Housekeeping & damage",
      "hp.housekeepingText": "Assign tasks, track cleaning and record damage with a traceable status.",
      "hp.dining": "Restaurant & kitchen",
      "hp.diningText": "Connect tables, menus and orders. Service records the order; the kitchen follows its progress.",
      "hp.stock": "Inventory & usage",
      "hp.stockText": "Log incoming goods, usage and corrections. Linked orders update inventory.",
      "hp.sync": "Team & ZAL Sync",
      "hp.syncText": "Paired employee devices work with the Mac hotel centre over the hotel network. Roles and approvals limit access.",
      "hp.invoices": "Invoices & reports",
      "hp.invoicesText": "Trace invoices and recorded payments in a separate journal and export reports.",
      "hp.roadmap": "Where we are. What comes next.",
      "hp.releaseText": "Operational features are being prepared for version 1.0. An App Store download will be added here after release.",
      "hp.payments": "Online payments Â· Integration & testing",
      "hp.paymentsText": "QR guest access and payment integration are being tested. Live online payments are not enabled yet.",
      "hp.ai": "2.0 Â· Personal AI planned",
      "hp.aiText": "The plan connects guest and hotel: personal AI would prepare and relay booking requests and questions. Binding bookings and payments require the designated approvals.",
      "hp.contactText": "Want to explore Hospitality for your business? Tell us your hotel size and intended use.",
      "hp.note": "The invoice module does not replace a validated cash-register or tax solution.",


      "nav.system": "System",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industry",
      "nav.products": "Products",
      "nav.about": "About",

      "global.home": "Home",
      "global.explore": "Explore",
      "global.open": "Open",
      "global.close": "Close",
      "global.discover": "Discover",
      "global.learnMore": "Learn more",
      "global.support": "Support",
      "global.contact": "Contact",
      "global.available": "AVAILABLE",
      "global.development": "DEVELOPMENT",
      "global.systemModule": "SYSTEM MODULE",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Open navigation",
      "global.mainNavigation": "Main navigation",

      "footer.imprint": "Legal Notice",
      "footer.privacy": "Privacy",


      /* HOME */

      "home.hero.kicker":
        "SOVEREIGN DIGITAL ARCHITECTURE",

      "home.hero.title":
        "One system.<br>One identity.<br>Connected intelligence.",

      "home.hero.description":
        "ZALâ€™THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.",

      "home.hero.primary":
        "Discover the system",

      "home.hero.core":
        "ZALâ€™THERA Core",

      "home.state.label": "SYSTEM STATE",
      "home.state.identity": "IDENTITY",
      "home.state.continuity": "CONTINUITY",
      "home.state.intelligence": "INTELLIGENCE",
      "home.state.communication": "COMMUNICATION",
      "home.state.industry": "INDUSTRY",
      "home.state.proof": "PROOF",
      "home.state.core": "CORE",
      "home.state.active": "ACTIVE DEVELOPMENT",
      "home.state.architecture": "ARCHITECTURE",
      "home.state.module": "SYSTEM MODULE",

      "home.system.eyebrow": "ONE SYSTEM",
      "home.system.title": "Technology does not begin with an app.",

      "home.system.lead":
        "It begins with a shared logic for who acts, what is understood, who may be trusted and which action may actually be executed.",

      "home.system.identity.title": "Identity",
      "home.system.identity.text": "Who or which authorized system is acting?",
      "home.system.context.title": "Context",
      "home.system.context.text": "In what context do information and action exist?",
      "home.system.intelligence.title": "Intelligence",
      "home.system.intelligence.text": "What can be understood from the available context?",
      "home.system.trust.title": "Trust",
      "home.system.trust.text": "What is permitted, verifiable and accountable?",
      "home.system.action.title": "Action",
      "home.system.action.text": "What may actually be executed?",
      "home.system.principle": "CORE PRINCIPLE",

      "home.system.principleText":
        "Understand first. Prepare second. Act only with permission.",

      "home.system.openArchitecture": "Open architecture",

      "home.continuity.eyebrow": "PERSONAL SOVEREIGN SYSTEM",
      "home.continuity.status": "ACTIVE DEVELOPMENT",

      "home.continuity.tagline":
        "Your life context. Structured. Connected. Understandable.",

      "home.continuity.text1":
        "CONTINUITY connects personal documents, data, Cards, Timeline, finances, evidence and context within a sovereign personal environment.",

      "home.continuity.text2":
        "Information does not remain as isolated files. It receives context, provenance, temporal reference and a traceable position within the personal system.",

      "home.continuity.documents": "Documents",
      "home.continuity.cards": "Cards",
      "home.continuity.timeline": "Timeline",
      "home.continuity.finance": "Finance",
      "home.continuity.context": "Context",
      "home.continuity.audit": "Audit",

      "home.intelligence.eyebrow": "CONTEXTUAL INTELLIGENCE",
      "home.intelligence.status": "ACTIVE DEVELOPMENT",
      "home.intelligence.title": "ZALâ€™THERA Intelligence",
      "home.intelligence.tagline": "Intelligence that knows its limits.",

      "home.intelligence.text1":
        "The intelligence layer does not operate independently of the human. It understands available context, identifies relationships, explains information and prepares possible actions.",

      "home.intelligence.text2":
        "Consequential actions remain bound to authorization, context and human approval.",

      "home.communication.eyebrow": "IDENTITY-TO-IDENTITY",
      "home.communication.status": "ACTIVE DEVELOPMENT",
      "home.communication.title": "Communication",
      "home.communication.tagline": "Connection begins with identity and consent.",

      "home.communication.text1":
        "ZALâ€™THERA Communication is developing a secure communication layer between authorized identities.",

      "home.communication.text2":
        "Voice, later video, files and trusted delivery are defined not through public profiles, but through identity, relationship and authorization.",

      "home.communication.voice": "VOICE",
      "home.communication.video": "VIDEO",
      "home.communication.files": "FILES",
      "home.communication.trust": "TRUST",
      "home.communication.consent": "CONSENT",
      "home.communication.connectionRule": "CONSENT BEFORE CONNECTION",

      "home.industry.eyebrow": "REAL-WORLD SYSTEMS",
      "home.industry.status": "DEVELOPMENT & ARCHITECTURE",
      "home.industry.title": "ZALâ€™THERA Industry",
      "home.industry.tagline": "Real processes become understandable systems.",

      "home.industry.text":
        "The industrial layer connects operational handovers, process states, sensor data, measurements and future machine integrations.",

      "home.industry.shift": "Shift handover & operational states",
      "home.industry.gate": "Sensors, measurements & machine processes",
      "home.industry.process": "Analysis & traceable process states",

      "home.proof.eyebrow": "PROOF & TRUST",
      "home.proof.title": "Evidence before assumption.",

      "home.proof.text":
        "ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.",

      "home.proof.open": "Open ProofFlow",

      "home.products.eyebrow": "SYSTEM PORTFOLIO",
      "home.products.title": "One ecosystem. Different levels of maturity.",

      "home.products.lead":
        "ZALâ€™THERA clearly distinguishes between available products, active development, system modules and future architecture.",

      "home.products.lifeflow": "Costs, contracts, deadlines and personal financial overview.",

      "home.products.continuity":
        "A personal sovereign environment for documents, data, context and intelligence.",

      "home.products.proofflow":
        "Evidence, audit, signatures and verifiable workflows.",

      "home.products.shiftlog":
        "Digital shift handover for operational states and responsibilities.",

      "home.products.voicebridge":
        "Development of a trust-based direct voice connection between authorized identities.",

      "home.products.zalgate":
        "Architecture connecting sensors, measurements, machines and process states.",

      "home.products.open": "Open â†’",
      "home.products.viewSystem": "View system â†’",
      "home.products.viewDevelopment": "View development â†’",
      "home.products.viewArchitecture": "Architecture â†’",

      "home.pilot.eyebrow": "CONTROLLED REAL-WORLD ENTRY",
      "home.pilot.title": "ZALâ€™THERA Pilot",

      "home.pilot.text":
        "Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.",

      "home.pilot.discover": "Discover Pilot",
      "home.pilot.request": "Request Pilot",

      "home.core.eyebrow": "BENEATH EVERY SYSTEM",
      "home.core.title": "ZALâ€™THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.",

      "home.core.discover": "Discover Core",

      "home.contact.eyebrow": "CONTACT",
      "home.contact.title": "Contact ZALâ€™THERA",

      "home.contact.text":
        "Questions about ZALâ€™THERA, a system or existing modules?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Your name",
      "home.contact.email": "Email",
      "home.contact.emailPlaceholder": "your@email.com",
      "home.contact.message": "Message",
      "home.contact.messagePlaceholder": "Your message â€¦",
      "home.contact.send": "Send",
      "home.contact.privacyPrefix": "By submitting, you accept our",
      "home.contact.privacy": "Privacy Policy",


      /* CORE */

      "core.hero.kicker":
        "SYSTEM FOUNDATION",

      "core.hero.title":
        "Trust should not<br>be assumed.<br>It should be constructed.",

      "core.hero.description":
        "ZALâ€™THERA Core connects identity, context, policy, consent, evidence and controlled execution into one shared trust architecture.",

      "core.hero.architecture":
        "Open architecture",

      "core.hero.identityBound":
        "IDENTITY-BOUND",

      "core.hero.policyGoverned":
        "POLICY-GOVERNED",

      "core.hero.auditable":
        "AUDITABLE",

      "core.hero.humanAuthorized":
        "HUMAN-AUTHORIZED",

      "core.status.label":
        "CORE PRINCIPLES",

      "core.status.identity": "IDENTITY",
      "core.status.who": "WHO",
      "core.status.context": "CONTEXT",
      "core.status.why": "WHY",
      "core.status.policy": "POLICY",
      "core.status.what": "WHAT",
      "core.status.consent": "CONSENT",
      "core.status.allow": "ALLOW",
      "core.status.audit": "AUDIT",
      "core.status.prove": "PROVE",
      "core.status.execution": "EXECUTION",
      "core.status.act": "ACT",

      "core.architecture.eyebrow":
        "PUBLIC ARCHITECTURE",

      "core.architecture.title":
        "Five layers. One traceable decision chain.",

      "core.architecture.lead":
        "The public architecture explains the fundamental logic of ZALâ€™THERA without exposing internal security implementations, private key structures or protocol details.",

      "core.architecture.identity.title":
        "Identity",

      "core.architecture.identity.text":
        "An action begins with a clearly assigned identity, role or authorized system instance.",

      "core.architecture.context.title":
        "Context",

      "core.architecture.context.text":
        "Information is not viewed in isolation, but understood with provenance, time and relationship.",

      "core.architecture.intelligence.title":
        "Intelligence",

      "core.architecture.intelligence.text":
        "Systems may structure information, explain it and prepare possible next steps.",

      "core.architecture.trust.title":
        "Trust",

      "core.architecture.trust.text":
        "Permissions, evidence, consent and audit determine what may be considered trustworthy.",

      "core.architecture.action.title":
        "Action",

      "core.architecture.action.text":
        "Consequential actions are executed only when the required conditions are satisfied.",

      "core.architecture.principle":
        "SYSTEM PRINCIPLE",

      "core.architecture.principleText":
        "Understand first. Prepare second. Act only with permission.",

      "core.architecture.technicalCore":
        "Technical Core",

      "core.technical.eyebrow":
        "TECHNICAL CORE",

      "core.technical.lead":
        "Below the public architecture operates a more precise control chain for traceable system actions.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Rules define boundaries, states, permissions and conditions.",

      "core.technical.policy.question":
        "WHAT IS ALLOWED?",

      "core.technical.identity.title":
        "Identity",

      "core.technical.identity.text":
        "Actions are assigned to a person, role, identity or authorized instance.",

      "core.technical.identity.question":
        "WHO ACTS?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Relevant events are documented with provenance, time and state so they can be traced.",

      "core.technical.audit.question":
        "WHAT HAPPENED?",

      "core.technical.execute.title":
        "Execute",

      "core.technical.execute.text":
        "An action may change the visible state only after the necessary conditions are satisfied.",

      "core.technical.execute.question":
        "MAY IT HAPPEN?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "A local truth core for verifiable events.",

      "core.ledger.text1":
        "THE LEDGER records relevant events in a traceable sequence. Entries are appended, linked and can later be examined.",

      "core.ledger.text2":
        "The goal is not to collect all information centrally. The goal is to make relevant state changes traceable and verifiable.",

      "core.ledger.created": "CREATED",
      "core.ledger.proof": "PROOF",
      "core.ledger.signed": "SIGNED",
      "core.ledger.verified": "VERIFIED",

      "core.ledger.appendOnly.title":
        "Append-only",

      "core.ledger.appendOnly.text":
        "Relevant events are appended rather than silently overwritten.",

      "core.ledger.linked.title":
        "Linked",

      "core.ledger.linked.text":
        "Events maintain a traceable relationship with one another.",

      "core.ledger.verifiable.title":
        "Verifiable",

      "core.ledger.verifiable.text":
        "Structure, integrity and provenance can be examined.",

      "core.trust.eyebrow":
        "TRUST LAYER",

      "core.trust.title":
        "Trust is not simply claimed.",

      "core.trust.lead":
        "It emerges from verifiable states, identities, permissions and evidence.",

      "core.trust.proof.title":
        "Proof Trust",

      "core.trust.proof.text":
        "Does valid evidence exist for the claimed action?",

      "core.trust.policy.title":
        "Policy Trust",

      "core.trust.policy.text":
        "Was the action performed within the intended rules?",

      "core.trust.identity.title":
        "Identity Trust",

      "core.trust.identity.text":
        "Is the acting identity clearly established and authorized?",

      "core.trust.audit.title":
        "Audit Trust",

      "core.trust.audit.text":
        "Is the process complete enough to be reconstructed later?",

      "core.authorization.eyebrow":
        "HUMAN AUTHORIZATION GATE",

      "core.authorization.title":
        "Intelligence may prepare.<br>Authority remains explicit.",

      "core.authorization.text":
        "ZALâ€™THERA may understand, structure and explain information and prepare possible actions. Consequential actions remain bound to the required human or explicitly delegated authorization.",

      "core.application.eyebrow":
        "SYSTEM APPLICATION",

      "core.application.title":
        "One core. Multiple application worlds.",

      "core.application.personal":
        "PERSONAL",

      "core.application.continuity":
        "Documents Â· Finance Â· Context Â· Cards",

      "core.application.proof":
        "PROOF",

      "core.application.proofflow":
        "Evidence Â· Audit Â· Signature Â· Export",

      "core.application.communication":
        "COMMUNICATION",

      "core.application.voicebridge":
        "Identity Â· Consent Â· Voice Â· Trust",

      "core.application.industry":
        "INDUSTRY",

      "core.application.shiftlog":
        "Handover Â· State Â· Responsibility",

      "core.return.title":
        "The core is not the product.<br>It is what connects the products.",

      "core.return.button":
        "Back to the system"
    },


    /* ==========================================================
       TÃœRKÃ‡E
       ========================================================== */

    tr: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Otel iÅŸletimi, restoran, stok ve ekip Ã§alÄ±ÅŸmasÄ± ortak bir sistemde. SÃ¼rÃ¼m 1.0 yayÄ±ma hazÄ±rlanÄ±yor.",
      "hp.status": "1.0 Â· YayÄ±ma hazÄ±rlanÄ±yor",
      "hp.title": "Hospitality â€” Otel iÅŸletimi ve restoran | ZALâ€™THERA",
      "hp.hero": "Otel iÅŸletimi. Ortak bir bakÄ±ÅŸ.",
      "hp.lead": "Rezervasyondan sipariÅŸe: Hospitality resepsiyon, kat hizmetleri ve servisi izlenebilir ortak bir gÃ¶rÃ¼nÃ¼mde birleÅŸtirir.",
      "hp.explore": "Ã–zellikleri keÅŸfet",
      "hp.contact": "Hospitality hakkÄ±nda bilgi alÄ±n",
      "hp.operations": "Tek iÅŸletme. BaÄŸlÄ± ekipler.",
      "hp.rooms": "Odalar ve misafirler",
      "hp.roomsText": "Oda durumu, misafirler, rezervasyonlar, giriÅŸ ve Ã§Ä±kÄ±ÅŸlarÄ± dÃ¼zenleyin.",
      "hp.housekeeping": "Kat hizmetleri ve hasarlar",
      "hp.housekeepingText": "GÃ¶rev atayÄ±n, temizliÄŸi takip edin ve hasarlarÄ± izlenebilir durumlarla kaydedin.",
      "hp.dining": "Restoran ve mutfak",
      "hp.diningText": "MasalarÄ±, menÃ¼yÃ¼ ve sipariÅŸleri birleÅŸtirin. Servis sipariÅŸi kaydeder, mutfak ilerlemeyi gÃ¶rÃ¼r.",
      "hp.stock": "Stok ve tÃ¼ketim",
      "hp.stockText": "Mal giriÅŸlerini, tÃ¼ketimi ve dÃ¼zeltmeleri kaydedin. BaÄŸlÄ± sipariÅŸler stoku gÃ¼nceller.",
      "hp.sync": "Ekip ve ZAL Sync",
      "hp.syncText": "EÅŸleÅŸtirilmiÅŸ Ã§alÄ±ÅŸan cihazlarÄ± otel aÄŸÄ±nda Mac merkeziyle Ã§alÄ±ÅŸÄ±r. Roller ve onaylar eriÅŸimi sÄ±nÄ±rlar.",
      "hp.invoices": "Faturalar ve raporlar",
      "hp.invoicesText": "FaturalarÄ± ve kayÄ±tlÄ± Ã¶demeleri ayrÄ± bir gÃ¼nlÃ¼kte izleyin ve raporlarÄ± dÄ±ÅŸa aktarÄ±n.",
      "hp.roadmap": "Mevcut durum. SÄ±rada ne var.",
      "hp.releaseText": "Ä°ÅŸletim Ã¶zellikleri sÃ¼rÃ¼m 1.0 iÃ§in hazÄ±rlanÄ±yor. YayÄ±mdan sonra App Store baÄŸlantÄ±sÄ± eklenecek.",
      "hp.payments": "Ã‡evrimiÃ§i Ã¶demeler Â· Entegrasyon ve test",
      "hp.paymentsText": "QR misafir eriÅŸimi ve Ã¶deme entegrasyonu test ediliyor. GerÃ§ek Ã§evrimiÃ§i Ã¶demeler henÃ¼z etkin deÄŸil.",
      "hp.ai": "2.0 Â· KiÅŸisel yapay zekÃ¢ planlanÄ±yor",
      "hp.aiText": "Plan, misafir ve oteli baÄŸlar: kiÅŸisel yapay zekÃ¢ rezervasyon taleplerini ve sorularÄ± hazÄ±rlayÄ±p iletecek. BaÄŸlayÄ±cÄ± rezervasyonlar ve Ã¶demeler gerekli onaylarÄ± gerektirir.",
      "hp.contactText": "Hospitalityâ€™yi iÅŸletmenizde tanÄ±mak ister misiniz? Otel bÃ¼yÃ¼klÃ¼ÄŸÃ¼nÃ¼ ve kullanÄ±m alanÄ±nÄ± bize yazÄ±n.",
      "hp.note": "Fatura modÃ¼lÃ¼, doÄŸrulanmÄ±ÅŸ kasa veya vergi Ã§Ã¶zÃ¼mÃ¼nÃ¼n yerini almaz.",


      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "ZekÃ¢",
      "nav.communication": "Ä°letiÅŸim",
      "nav.industry": "EndÃ¼stri",
      "nav.products": "ÃœrÃ¼nler",
      "nav.about": "HakkÄ±nda",

      "global.home": "Ana Sayfa",
      "global.explore": "KeÅŸfet",
      "global.open": "AÃ§",
      "global.close": "Kapat",
      "global.discover": "KeÅŸfet",
      "global.learnMore": "Daha fazla bilgi",
      "global.support": "Destek",
      "global.contact": "Ä°letiÅŸim",
      "global.available": "MEVCUT",
      "global.development": "GELÄ°ÅžTÄ°RME",
      "global.systemModule": "SÄ°STEM MODÃœLÃœ",
      "global.architecture": "MÄ°MARÄ°",
      "global.navOpen": "Navigasyonu aÃ§",
      "global.mainNavigation": "Ana navigasyon",

      "footer.imprint": "Yasal Bilgiler",
      "footer.privacy": "Gizlilik",

      "core.hero.kicker":
        "SÄ°STEM TEMELÄ°",

      "core.hero.title":
        "GÃ¼ven varsayÄ±lmamalÄ±.<br>Ä°nÅŸa edilmelidir.",

      "core.hero.description":
        "ZALâ€™THERA Core; kimlik, baÄŸlam, kurallar, onay, kanÄ±t ve kontrollÃ¼ yÃ¼rÃ¼tmeyi ortak bir gÃ¼ven mimarisinde birleÅŸtirir.",

      "core.hero.architecture":
        "Mimariyi aÃ§",

      "core.hero.identityBound":
        "KÄ°MLÄ°ÄžE BAÄžLI",

      "core.hero.policyGoverned":
        "KURALLARLA YÃ–NETÄ°LEN",

      "core.hero.auditable":
        "DENETLENEBÄ°LÄ°R",

      "core.hero.humanAuthorized":
        "Ä°NSAN TARAFINDAN YETKÄ°LENDÄ°RÄ°LMÄ°Åž",

      "core.status.label":
        "TEMEL Ä°LKELER",

      "core.status.identity": "KÄ°MLÄ°K",
      "core.status.who": "KÄ°M",
      "core.status.context": "BAÄžLAM",
      "core.status.why": "NEDEN",
      "core.status.policy": "POLÄ°TÄ°KA",
      "core.status.what": "NE",
      "core.status.consent": "ONAY",
      "core.status.allow": "Ä°ZÄ°N",
      "core.status.audit": "DENETÄ°M",
      "core.status.prove": "KANIT",
      "core.status.execution": "YÃœRÃœTME",
      "core.status.act": "HAREKET",

      "core.architecture.eyebrow":
        "KAMUSAL MÄ°MARÄ°",

      "core.architecture.title":
        "BeÅŸ katman. Tek izlenebilir karar zinciri.",

      "core.architecture.lead":
        "Kamusal mimari, dahili gÃ¼venlik uygulamalarÄ±nÄ±, Ã¶zel anahtar yapÄ±larÄ±nÄ± veya protokol ayrÄ±ntÄ±larÄ±nÄ± aÃ§Ä±ÄŸa Ã§Ä±karmadan ZALâ€™THERAâ€™nÄ±n temel mantÄ±ÄŸÄ±nÄ± aÃ§Ä±klar.",

      "core.architecture.identity.title":
        "Kimlik",

      "core.architecture.identity.text":
        "Bir eylem aÃ§Ä±kÃ§a atanmÄ±ÅŸ bir kimlik, rol veya yetkili sistem Ã¶rneÄŸiyle baÅŸlar.",

      "core.architecture.context.title":
        "BaÄŸlam",

      "core.architecture.context.text":
        "Bilgi yalÄ±tÄ±lmÄ±ÅŸ olarak deÄŸil, kaynak, zaman ve iliÅŸkiyle birlikte anlaÅŸÄ±lÄ±r.",

      "core.architecture.intelligence.title":
        "ZekÃ¢",

      "core.architecture.intelligence.text":
        "Sistemler bilgiyi yapÄ±landÄ±rabilir, aÃ§Ä±klayabilir ve olasÄ± sonraki adÄ±mlarÄ± hazÄ±rlayabilir.",

      "core.architecture.trust.title":
        "GÃ¼ven",

      "core.architecture.trust.text":
        "Yetkiler, kanÄ±tlar, onay ve denetim, neyin gÃ¼venilir kabul edilebileceÄŸini belirler.",

      "core.architecture.action.title":
        "Eylem",

      "core.architecture.action.text":
        "Ã–nemli eylemler yalnÄ±zca gerekli koÅŸullar saÄŸlandÄ±ÄŸÄ±nda gerÃ§ekleÅŸtirilir.",

      "core.architecture.principle":
        "SÄ°STEM Ä°LKESÄ°",

      "core.architecture.principleText":
        "Ã–nce anla. Sonra hazÄ±rla. YalnÄ±zca izinle hareket et.",

      "core.architecture.technicalCore":
        "Teknik Ã‡ekirdek",

      "core.technical.eyebrow":
        "TEKNÄ°K Ã‡EKÄ°RDEK",

      "core.technical.lead":
        "Kamusal mimarinin altÄ±nda, izlenebilir sistem eylemleri iÃ§in daha hassas bir kontrol zinciri Ã§alÄ±ÅŸÄ±r.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Kurallar sÄ±nÄ±rlarÄ±, durumlarÄ±, yetkileri ve koÅŸullarÄ± tanÄ±mlar.",

      "core.technical.policy.question":
        "NEYE Ä°ZÄ°N VAR?",

      "core.technical.identity.title":
        "Kimlik",

      "core.technical.identity.text":
        "Eylemler bir kiÅŸiye, role, kimliÄŸe veya yetkili Ã¶rneÄŸe atanÄ±r.",

      "core.technical.identity.question":
        "KÄ°M HAREKET EDÄ°YOR?",

      "core.technical.audit.title":
        "Denetim",

      "core.technical.audit.text":
        "Ä°lgili olaylar kaynak, zaman ve durum bilgileriyle izlenebilir biÃ§imde belgelenir.",

      "core.technical.audit.question":
        "NE OLDU?",

      "core.technical.execute.title":
        "YÃ¼rÃ¼tme",

      "core.technical.execute.text":
        "Bir eylem yalnÄ±zca gerekli koÅŸullar saÄŸlandÄ±ktan sonra gÃ¶rÃ¼nÃ¼r durumu deÄŸiÅŸtirebilir.",

      "core.technical.execute.question":
        "GERÃ‡EKLEÅžEBÄ°LÄ°R MÄ°?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "DoÄŸrulanabilir olaylar iÃ§in yerel bir gerÃ§eklik Ã§ekirdeÄŸi.",

      "core.ledger.text1":
        "THE LEDGER ilgili olaylarÄ± izlenebilir bir sÄ±rayla kaydeder. KayÄ±tlar eklenir, birbirine baÄŸlanÄ±r ve daha sonra incelenebilir.",

      "core.ledger.text2":
        "AmaÃ§ tÃ¼m bilgileri merkezi olarak toplamak deÄŸildir. AmaÃ§ Ã¶nemli durum deÄŸiÅŸikliklerini izlenebilir ve doÄŸrulanabilir hale getirmektir.",

      "core.ledger.created": "OLUÅžTURULDU",
      "core.ledger.proof": "KANIT",
      "core.ledger.signed": "Ä°MZALANDI",
      "core.ledger.verified": "DOÄžRULANDI",

      "core.ledger.appendOnly.title":
        "YalnÄ±zca ekleme",

      "core.ledger.appendOnly.text":
        "Ä°lgili olaylar sessizce Ã¼zerine yazÄ±lmak yerine eklenir.",

      "core.ledger.linked.title":
        "BaÄŸlantÄ±lÄ±",

      "core.ledger.linked.text":
        "Olaylar birbirleriyle izlenebilir iliÅŸkiler taÅŸÄ±r.",

      "core.ledger.verifiable.title":
        "DoÄŸrulanabilir",

      "core.ledger.verifiable.text":
        "YapÄ±, bÃ¼tÃ¼nlÃ¼k ve kaynak doÄŸrulanabilir.",

      "core.trust.eyebrow":
        "GÃœVEN KATMANI",

      "core.trust.title":
        "GÃ¼ven yalnÄ±zca iddia edilmez.",

      "core.trust.lead":
        "DoÄŸrulanabilir durumlar, kimlikler, yetkiler ve kanÄ±tlardan oluÅŸur.",

      "core.trust.proof.title":
        "KanÄ±t GÃ¼veni",

      "core.trust.proof.text":
        "Ä°ddia edilen eylem iÃ§in geÃ§erli bir kanÄ±t mevcut mu?",

      "core.trust.policy.title":
        "Politika GÃ¼veni",

      "core.trust.policy.text":
        "Eylem Ã¶ngÃ¶rÃ¼len kurallar iÃ§inde mi gerÃ§ekleÅŸtirildi?",

      "core.trust.identity.title":
        "Kimlik GÃ¼veni",

      "core.trust.identity.text":
        "Hareket eden kimlik aÃ§Ä±kÃ§a belirlenmiÅŸ ve yetkili mi?",

      "core.trust.audit.title":
        "Denetim GÃ¼veni",

      "core.trust.audit.text":
        "SÃ¼reÃ§ daha sonra yeniden anlaÅŸÄ±labilecek kadar eksiksiz mi?",

      "core.authorization.eyebrow":
        "Ä°NSAN YETKÄ°LENDÄ°RME KAPISI",

      "core.authorization.title":
        "ZekÃ¢ hazÄ±rlayabilir.<br>Yetki aÃ§Ä±k kalÄ±r.",

      "core.authorization.text":
        "ZALâ€™THERA bilgiyi anlayabilir, yapÄ±landÄ±rabilir, aÃ§Ä±klayabilir ve olasÄ± eylemleri hazÄ±rlayabilir. Ã–nemli eylemler gerekli insan veya aÃ§Ä±kÃ§a devredilmiÅŸ yetkilendirmeye baÄŸlÄ± kalÄ±r.",

      "core.application.eyebrow":
        "SÄ°STEM UYGULAMASI",

      "core.application.title":
        "Tek Ã§ekirdek. Birden fazla uygulama alanÄ±.",

      "core.application.personal": "KÄ°ÅžÄ°SEL",

      "core.application.continuity":
        "Belgeler Â· Finans Â· BaÄŸlam Â· Cards",

      "core.application.proof": "KANIT",

      "core.application.proofflow":
        "KanÄ±t Â· Denetim Â· Ä°mza Â· DÄ±ÅŸa Aktarma",

      "core.application.communication":
        "Ä°LETÄ°ÅžÄ°M",

      "core.application.voicebridge":
        "Kimlik Â· Onay Â· Ses Â· GÃ¼ven",

      "core.application.industry":
        "ENDÃœSTRÄ°",

      "core.application.shiftlog":
        "Devir Â· Durum Â· Sorumluluk",

      "core.return.title":
        "Ã‡ekirdek Ã¼rÃ¼n deÄŸildir.<br>ÃœrÃ¼nleri birbirine baÄŸlayan yapÄ±dÄ±r.",

      "core.return.button":
        "Sisteme dÃ¶n"
    },


    /* ==========================================================
       ESPAÃ‘OL
       ========================================================== */

    es: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "OperaciÃ³n hotelera, restauraciÃ³n, inventario y equipo en un sistema compartido. La versiÃ³n 1.0 se prepara para su lanzamiento.",
      "hp.status": "1.0 Â· En preparaciÃ³n",
      "hp.title": "Hospitality â€” OperaciÃ³n hotelera y restauraciÃ³n | ZALâ€™THERA",
      "hp.hero": "El hotel. Una visiÃ³n compartida.",
      "hp.lead": "De las reservas a los pedidos: Hospitality conecta recepciÃ³n, limpieza y servicio con una visiÃ³n compartida y trazable.",
      "hp.explore": "Explorar funciones",
      "hp.contact": "Consultar sobre Hospitality",
      "hp.operations": "Un hotel. Equipos conectados.",
      "hp.rooms": "Habitaciones y huÃ©spedes",
      "hp.roomsText": "Organiza estados de habitaciones, huÃ©spedes, reservas, llegadas y salidas.",
      "hp.housekeeping": "Limpieza e incidencias",
      "hp.housekeepingText": "Asigna tareas, sigue la limpieza y registra incidencias con estados trazables.",
      "hp.dining": "Restaurante y cocina",
      "hp.diningText": "Conecta mesas, carta y pedidos. El servicio registra el pedido y cocina sigue su estado.",
      "hp.stock": "Inventario y consumo",
      "hp.stockText": "Registra entradas, consumos y ajustes. Los pedidos vinculados actualizan las existencias.",
      "hp.sync": "Equipo y ZAL Sync",
      "hp.syncText": "Los dispositivos vinculados trabajan con la central del Mac en la red del hotel. Roles y autorizaciones limitan el acceso.",
      "hp.invoices": "Facturas e informes",
      "hp.invoicesText": "Consulta facturas y pagos registrados en un diario separado y exporta informes.",
      "hp.roadmap": "DÃ³nde estamos. QuÃ© sigue.",
      "hp.releaseText": "Las funciones operativas se preparan para la versiÃ³n 1.0. El enlace de App Store se aÃ±adirÃ¡ tras el lanzamiento.",
      "hp.payments": "Pagos en lÃ­nea Â· IntegraciÃ³n y pruebas",
      "hp.paymentsText": "El acceso QR para huÃ©spedes y la integraciÃ³n de pagos estÃ¡n en pruebas. Los pagos reales aÃºn no estÃ¡n habilitados.",
      "hp.ai": "2.0 Â· IA personal prevista",
      "hp.aiText": "El plan conecta huÃ©sped y hotel: la IA personal prepararÃ¡ y transmitirÃ¡ solicitudes y preguntas. Reservas vinculantes y pagos requieren las confirmaciones previstas.",
      "hp.contactText": "Â¿Quieres conocer Hospitality para tu negocio? Indica el tamaÃ±o del hotel y el uso previsto.",
      "hp.note": "El mÃ³dulo de facturaciÃ³n no sustituye una soluciÃ³n de caja o fiscal validada.",


      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligencia",
      "nav.communication": "ComunicaciÃ³n",
      "nav.industry": "Industria",
      "nav.products": "Productos",
      "nav.about": "Acerca de",

      "global.home": "Inicio",
      "global.explore": "Explorar",
      "global.open": "Abrir",
      "global.close": "Cerrar",
      "global.discover": "Descubrir",
      "global.learnMore": "MÃ¡s informaciÃ³n",
      "global.support": "Soporte",
      "global.contact": "Contacto",
      "global.available": "DISPONIBLE",
      "global.development": "DESARROLLO",
      "global.systemModule": "MÃ“DULO DEL SISTEMA",
      "global.architecture": "ARQUITECTURA",
      "global.navOpen": "Abrir navegaciÃ³n",
      "global.mainNavigation": "NavegaciÃ³n principal",

      "footer.imprint": "Aviso legal",
      "footer.privacy": "Privacidad",

      "core.hero.kicker":
        "BASE DEL SISTEMA",

      "core.hero.title":
        "La confianza no deberÃ­a<br>darse por sentada.<br>Debe construirse.",

      "core.hero.description":
        "ZALâ€™THERA Core conecta identidad, contexto, reglas, consentimiento, evidencia y ejecuciÃ³n controlada en una arquitectura comÃºn de confianza.",

      "core.hero.architecture":
        "Abrir arquitectura",

      "core.hero.identityBound":
        "VINCULADO A LA IDENTIDAD",

      "core.hero.policyGoverned":
        "GOBERNADO POR REGLAS",

      "core.hero.auditable":
        "AUDITABLE",

      "core.hero.humanAuthorized":
        "AUTORIZADO POR PERSONAS",

      "core.status.label":
        "PRINCIPIOS DEL NÃšCLEO",

      "core.status.identity": "IDENTIDAD",
      "core.status.who": "QUIÃ‰N",
      "core.status.context": "CONTEXTO",
      "core.status.why": "POR QUÃ‰",
      "core.status.policy": "POLÃTICA",
      "core.status.what": "QUÃ‰",
      "core.status.consent": "CONSENTIMIENTO",
      "core.status.allow": "PERMITIR",
      "core.status.audit": "AUDITORÃA",
      "core.status.prove": "PROBAR",
      "core.status.execution": "EJECUCIÃ“N",
      "core.status.act": "ACTUAR",

      "core.architecture.eyebrow":
        "ARQUITECTURA PÃšBLICA",

      "core.architecture.title":
        "Cinco capas. Una cadena de decisiones trazable.",

      "core.architecture.lead":
        "La arquitectura pÃºblica explica la lÃ³gica fundamental de ZALâ€™THERA sin revelar implementaciones internas de seguridad, estructuras de claves privadas ni detalles de protocolos.",

      "core.architecture.identity.title":
        "Identidad",

      "core.architecture.identity.text":
        "Una acciÃ³n comienza con una identidad, funciÃ³n o instancia de sistema autorizada claramente asignada.",

      "core.architecture.context.title":
        "Contexto",

      "core.architecture.context.text":
        "La informaciÃ³n no se analiza de forma aislada, sino junto con su procedencia, tiempo y relaciÃ³n.",

      "core.architecture.intelligence.title":
        "Inteligencia",

      "core.architecture.intelligence.text":
        "Los sistemas pueden estructurar informaciÃ³n, explicarla y preparar posibles pasos siguientes.",

      "core.architecture.trust.title":
        "Confianza",

      "core.architecture.trust.text":
        "Los permisos, las pruebas, el consentimiento y la auditorÃ­a determinan quÃ© puede considerarse confiable.",

      "core.architecture.action.title":
        "AcciÃ³n",

      "core.architecture.action.text":
        "Las acciones importantes solo se ejecutan cuando se cumplen las condiciones necesarias.",

      "core.architecture.principle":
        "PRINCIPIO DEL SISTEMA",

      "core.architecture.principleText":
        "Primero comprender. DespuÃ©s preparar. Actuar solo con permiso.",

      "core.architecture.technicalCore":
        "NÃºcleo tÃ©cnico",

      "core.technical.eyebrow":
        "NÃšCLEO TÃ‰CNICO",

      "core.technical.lead":
        "Por debajo de la arquitectura pÃºblica funciona una cadena de control mÃ¡s precisa para acciones trazables del sistema.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Las reglas definen lÃ­mites, estados, permisos y condiciones.",

      "core.technical.policy.question":
        "Â¿QUÃ‰ ESTÃ PERMITIDO?",

      "core.technical.identity.title":
        "Identidad",

      "core.technical.identity.text":
        "Las acciones se asignan a una persona, funciÃ³n, identidad o instancia autorizada.",

      "core.technical.identity.question":
        "Â¿QUIÃ‰N ACTÃšA?",

      "core.technical.audit.title":
        "AuditorÃ­a",

      "core.technical.audit.text":
        "Los eventos relevantes se documentan con procedencia, momento y estado para permitir su trazabilidad.",

      "core.technical.audit.question":
        "Â¿QUÃ‰ OCURRIÃ“?",

      "core.technical.execute.title":
        "Ejecutar",

      "core.technical.execute.text":
        "Una acciÃ³n solo puede modificar el estado visible cuando se hayan cumplido las condiciones necesarias.",

      "core.technical.execute.question":
        "Â¿PUEDE OCURRIR?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nÃºcleo local de verdad para eventos verificables.",

      "core.ledger.text1":
        "THE LEDGER registra eventos relevantes en una secuencia trazable. Las entradas se aÃ±aden, se vinculan y pueden examinarse posteriormente.",

      "core.ledger.text2":
        "El objetivo no es recopilar toda la informaciÃ³n de forma centralizada. El objetivo es hacer trazables y verificables los cambios de estado relevantes.",

      "core.ledger.created": "CREADO",
      "core.ledger.proof": "PRUEBA",
      "core.ledger.signed": "FIRMADO",
      "core.ledger.verified": "VERIFICADO",

      "core.ledger.appendOnly.title":
        "Solo aÃ±adir",

      "core.ledger.appendOnly.text":
        "Los eventos relevantes se aÃ±aden en lugar de sobrescribirse silenciosamente.",

      "core.ledger.linked.title":
        "Vinculado",

      "core.ledger.linked.text":
        "Los eventos mantienen relaciones trazables entre sÃ­.",

      "core.ledger.verifiable.title":
        "Verificable",

      "core.ledger.verifiable.text":
        "La estructura, integridad y procedencia pueden comprobarse.",

      "core.trust.eyebrow":
        "CAPA DE CONFIANZA",

      "core.trust.title":
        "La confianza no se limita a afirmarse.",

      "core.trust.lead":
        "Surge de estados, identidades, permisos y pruebas verificables.",

      "core.trust.proof.title":
        "Confianza en la prueba",

      "core.trust.proof.text":
        "Â¿Existe una prueba vÃ¡lida de la acciÃ³n declarada?",

      "core.trust.policy.title":
        "Confianza en las reglas",

      "core.trust.policy.text":
        "Â¿La acciÃ³n se realizÃ³ dentro de las reglas previstas?",

      "core.trust.identity.title":
        "Confianza en la identidad",

      "core.trust.identity.text":
        "Â¿La identidad que actÃºa estÃ¡ claramente establecida y autorizada?",

      "core.trust.audit.title":
        "Confianza de auditorÃ­a",

      "core.trust.audit.text":
        "Â¿El proceso estÃ¡ lo suficientemente completo como para reconstruirse posteriormente?",

      "core.authorization.eyebrow":
        "PUERTA DE AUTORIZACIÃ“N HUMANA",

      "core.authorization.title":
        "La inteligencia puede preparar.<br>La autoridad permanece explÃ­cita.",

      "core.authorization.text":
        "ZALâ€™THERA puede comprender, estructurar y explicar informaciÃ³n, y preparar posibles acciones. Las acciones importantes permanecen vinculadas a la autorizaciÃ³n humana necesaria o expresamente delegada.",

      "core.application.eyebrow":
        "APLICACIÃ“N DEL SISTEMA",

      "core.application.title":
        "Un nÃºcleo. Varios Ã¡mbitos de aplicaciÃ³n.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documentos Â· Finanzas Â· Contexto Â· Cards",
      "core.application.proof": "PRUEBA",
      "core.application.proofflow": "Evidencia Â· AuditorÃ­a Â· Firma Â· ExportaciÃ³n",
      "core.application.communication": "COMUNICACIÃ“N",
      "core.application.voicebridge": "Identidad Â· Consentimiento Â· Voz Â· Confianza",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Relevo Â· Estado Â· Responsabilidad",

      "core.return.title":
        "El nÃºcleo no es el producto.<br>Es lo que conecta los productos.",

      "core.return.button":
        "Volver al sistema"
    },


    /* ==========================================================
       FRANÃ‡AIS
       ========================================================== */

    fr: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Exploitation hÃ´teliÃ¨re, restauration, stocks et travail en Ã©quipe dans un systÃ¨me commun. La version 1.0 est en prÃ©paration.",
      "hp.status": "1.0 Â· En prÃ©paration",
      "hp.title": "Hospitality â€” HÃ´tellerie et restauration | ZALâ€™THERA",
      "hp.hero": "Lâ€™hÃ´tel. Une vision partagÃ©e.",
      "hp.lead": "Des rÃ©servations aux commandes : Hospitality relie rÃ©ception, entretien et service autour dâ€™un Ã©tat commun et traÃ§able.",
      "hp.explore": "DÃ©couvrir les fonctions",
      "hp.contact": "Se renseigner sur Hospitality",
      "hp.operations": "Un Ã©tablissement. Des Ã©quipes reliÃ©es.",
      "hp.rooms": "Chambres et clients",
      "hp.roomsText": "Organisez lâ€™Ã©tat des chambres, les clients, rÃ©servations, arrivÃ©es et dÃ©parts.",
      "hp.housekeeping": "Entretien et dommages",
      "hp.housekeepingText": "Attribuez les tÃ¢ches, suivez le nettoyage et consignez les dommages avec un statut traÃ§able.",
      "hp.dining": "Restaurant et cuisine",
      "hp.diningText": "Reliez tables, carte et commandes. Le service saisit la commande ; la cuisine suit son avancement.",
      "hp.stock": "Stocks et consommation",
      "hp.stockText": "Consignez rÃ©ceptions, consommations et corrections. Les commandes liÃ©es mettent Ã  jour les stocks.",
      "hp.sync": "Ã‰quipe et ZAL Sync",
      "hp.syncText": "Les appareils associÃ©s travaillent avec la centrale sur Mac via le rÃ©seau de lâ€™hÃ´tel. RÃ´les et autorisations limitent lâ€™accÃ¨s.",
      "hp.invoices": "Factures et rapports",
      "hp.invoicesText": "Suivez factures et paiements enregistrÃ©s dans un journal sÃ©parÃ© et exportez les rapports.",
      "hp.roadmap": "OÃ¹ nous en sommes. La suite.",
      "hp.releaseText": "Les fonctions opÃ©rationnelles sont prÃ©parÃ©es pour la version 1.0. Le lien App Store sera ajoutÃ© aprÃ¨s publication.",
      "hp.payments": "Paiements en ligne Â· IntÃ©gration et tests",
      "hp.paymentsText": "Lâ€™accÃ¨s client par QR et lâ€™intÃ©gration des paiements sont en test. Les paiements rÃ©els ne sont pas encore activÃ©s.",
      "hp.ai": "2.0 Â· IA personnelle prÃ©vue",
      "hp.aiText": "Le projet relie client et hÃ´tel : lâ€™IA personnelle prÃ©parerait et transmettrait demandes et questions. RÃ©servations fermes et paiements nÃ©cessitent les validations prÃ©vues.",
      "hp.contactText": "Vous souhaitez dÃ©couvrir Hospitality pour votre Ã©tablissement ? Indiquez sa taille et lâ€™usage prÃ©vu.",
      "hp.note": "Le module de facturation ne remplace pas une solution de caisse ou fiscale validÃ©e.",


      "nav.system": "SystÃ¨me",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industrie",
      "nav.products": "Produits",
      "nav.about": "Ã€ propos",

      "global.home": "Accueil",
      "global.explore": "Explorer",
      "global.open": "Ouvrir",
      "global.close": "Fermer",
      "global.discover": "DÃ©couvrir",
      "global.learnMore": "En savoir plus",
      "global.support": "Support",
      "global.contact": "Contact",
      "global.available": "DISPONIBLE",
      "global.development": "DÃ‰VELOPPEMENT",
      "global.systemModule": "MODULE SYSTÃˆME",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Ouvrir la navigation",
      "global.mainNavigation": "Navigation principale",

      "footer.imprint": "Mentions lÃ©gales",
      "footer.privacy": "ConfidentialitÃ©",

      "core.hero.kicker":
        "FONDATION DU SYSTÃˆME",

      "core.hero.title":
        "La confiance ne devrait pas<br>Ãªtre supposÃ©e.<br>Elle devrait Ãªtre construite.",

      "core.hero.description":
        "ZALâ€™THERA Core relie identitÃ©, contexte, rÃ¨gles, consentement, preuve et exÃ©cution contrÃ´lÃ©e dans une architecture de confiance commune.",

      "core.hero.architecture":
        "Ouvrir lâ€™architecture",

      "core.hero.identityBound":
        "LIÃ‰ Ã€ Lâ€™IDENTITÃ‰",

      "core.hero.policyGoverned":
        "GOUVERNÃ‰ PAR DES RÃˆGLES",

      "core.hero.auditable":
        "AUDITABLE",

      "core.hero.humanAuthorized":
        "AUTORISÃ‰ PAR Lâ€™HUMAIN",

      "core.status.label":
        "PRINCIPES DU CORE",

      "core.status.identity": "IDENTITÃ‰",
      "core.status.who": "QUI",
      "core.status.context": "CONTEXTE",
      "core.status.why": "POURQUOI",
      "core.status.policy": "POLITIQUE",
      "core.status.what": "QUOI",
      "core.status.consent": "CONSENTEMENT",
      "core.status.allow": "AUTORISER",
      "core.status.audit": "AUDIT",
      "core.status.prove": "PROUVER",
      "core.status.execution": "EXÃ‰CUTION",
      "core.status.act": "AGIR",

      "core.architecture.eyebrow":
        "ARCHITECTURE PUBLIQUE",

      "core.architecture.title":
        "Cinq niveaux. Une chaÃ®ne de dÃ©cision traÃ§able.",

      "core.architecture.lead":
        "Lâ€™architecture publique explique la logique fondamentale de ZALâ€™THERA sans rÃ©vÃ©ler les implÃ©mentations internes de sÃ©curitÃ©, les structures de clÃ©s privÃ©es ou les dÃ©tails de protocole.",

      "core.architecture.identity.title":
        "IdentitÃ©",

      "core.architecture.identity.text":
        "Une action commence par une identitÃ©, un rÃ´le ou une instance systÃ¨me autorisÃ©e clairement attribuÃ©e.",

      "core.architecture.context.title":
        "Contexte",

      "core.architecture.context.text":
        "Les informations ne sont pas examinÃ©es isolÃ©ment, mais comprises avec leur provenance, leur temporalitÃ© et leurs relations.",

      "core.architecture.intelligence.title":
        "Intelligence",

      "core.architecture.intelligence.text":
        "Les systÃ¨mes peuvent structurer les informations, les expliquer et prÃ©parer les Ã©tapes suivantes possibles.",

      "core.architecture.trust.title":
        "Confiance",

      "core.architecture.trust.text":
        "Les permissions, preuves, consentements et audits dÃ©terminent ce qui peut Ãªtre considÃ©rÃ© comme fiable.",

      "core.architecture.action.title":
        "Action",

      "core.architecture.action.text":
        "Les actions importantes ne sont exÃ©cutÃ©es que lorsque les conditions requises sont satisfaites.",

      "core.architecture.principle":
        "PRINCIPE SYSTÃˆME",

      "core.architecture.principleText":
        "Comprendre dâ€™abord. PrÃ©parer ensuite. Agir uniquement avec autorisation.",

      "core.architecture.technicalCore":
        "Core technique",

      "core.technical.eyebrow":
        "CORE TECHNIQUE",

      "core.technical.lead":
        "Sous lâ€™architecture publique fonctionne une chaÃ®ne de contrÃ´le plus prÃ©cise pour les actions systÃ¨me traÃ§ables.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Les rÃ¨gles dÃ©finissent les limites, les Ã©tats, les permissions et les conditions.",

      "core.technical.policy.question":
        "QUâ€™EST-CE QUI EST AUTORISÃ‰ ?",

      "core.technical.identity.title":
        "IdentitÃ©",

      "core.technical.identity.text":
        "Les actions sont attribuÃ©es Ã  une personne, un rÃ´le, une identitÃ© ou une instance autorisÃ©e.",

      "core.technical.identity.question":
        "QUI AGIT ?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Les Ã©vÃ©nements pertinents sont documentÃ©s avec provenance, date et Ã©tat afin de rester traÃ§ables.",

      "core.technical.audit.question":
        "QUE Sâ€™EST-IL PASSÃ‰ ?",

      "core.technical.execute.title":
        "ExÃ©cuter",

      "core.technical.execute.text":
        "Une action ne peut modifier lâ€™Ã©tat visible quâ€™aprÃ¨s satisfaction des conditions nÃ©cessaires.",

      "core.technical.execute.question":
        "CELA PEUT-IL ARRIVER ?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un noyau local de vÃ©ritÃ© pour des Ã©vÃ©nements vÃ©rifiables.",

      "core.ledger.text1":
        "THE LEDGER enregistre les Ã©vÃ©nements pertinents dans une sÃ©quence traÃ§able. Les entrÃ©es sont ajoutÃ©es, liÃ©es et peuvent Ãªtre examinÃ©es ultÃ©rieurement.",

      "core.ledger.text2":
        "Lâ€™objectif nâ€™est pas de centraliser toutes les informations. Il est de rendre les changements dâ€™Ã©tat pertinents traÃ§ables et vÃ©rifiables.",

      "core.ledger.created": "CRÃ‰Ã‰",
      "core.ledger.proof": "PREUVE",
      "core.ledger.signed": "SIGNÃ‰",
      "core.ledger.verified": "VÃ‰RIFIÃ‰",

      "core.ledger.appendOnly.title":
        "Ajout uniquement",

      "core.ledger.appendOnly.text":
        "Les Ã©vÃ©nements pertinents sont ajoutÃ©s plutÃ´t que remplacÃ©s discrÃ¨tement.",

      "core.ledger.linked.title":
        "LiÃ©",

      "core.ledger.linked.text":
        "Les Ã©vÃ©nements conservent une relation traÃ§able entre eux.",

      "core.ledger.verifiable.title":
        "VÃ©rifiable",

      "core.ledger.verifiable.text":
        "La structure, lâ€™intÃ©gritÃ© et la provenance peuvent Ãªtre contrÃ´lÃ©es.",

      "core.trust.eyebrow":
        "COUCHE DE CONFIANCE",

      "core.trust.title":
        "La confiance ne se dÃ©crÃ¨te pas.",

      "core.trust.lead":
        "Elle naÃ®t dâ€™Ã©tats, dâ€™identitÃ©s, de permissions et de preuves vÃ©rifiables.",

      "core.trust.proof.title":
        "Confiance par la preuve",

      "core.trust.proof.text":
        "Existe-t-il une preuve valide de lâ€™action dÃ©clarÃ©e ?",

      "core.trust.policy.title":
        "Confiance par les rÃ¨gles",

      "core.trust.policy.text":
        "Lâ€™action a-t-elle Ã©tÃ© rÃ©alisÃ©e conformÃ©ment aux rÃ¨gles prÃ©vues ?",

      "core.trust.identity.title":
        "Confiance dâ€™identitÃ©",

      "core.trust.identity.text":
        "Lâ€™identitÃ© qui agit est-elle clairement Ã©tablie et autorisÃ©e ?",

      "core.trust.audit.title":
        "Confiance dâ€™audit",

      "core.trust.audit.text":
        "Le processus est-il suffisamment complet pour Ãªtre reconstituÃ© ultÃ©rieurement ?",

      "core.authorization.eyebrow":
        "PASSAGE Dâ€™AUTORISATION HUMAINE",

      "core.authorization.title":
        "Lâ€™intelligence peut prÃ©parer.<br>Lâ€™autoritÃ© reste explicite.",

      "core.authorization.text":
        "ZALâ€™THERA peut comprendre, structurer et expliquer les informations et prÃ©parer des actions possibles. Les actions importantes restent liÃ©es Ã  lâ€™autorisation humaine requise ou explicitement dÃ©lÃ©guÃ©e.",

      "core.application.eyebrow":
        "APPLICATION DU SYSTÃˆME",

      "core.application.title":
        "Un core. Plusieurs domaines dâ€™application.",

      "core.application.personal": "PERSONNEL",
      "core.application.continuity": "Documents Â· Finances Â· Contexte Â· Cards",
      "core.application.proof": "PREUVE",
      "core.application.proofflow": "Preuve Â· Audit Â· Signature Â· Export",
      "core.application.communication": "COMMUNICATION",
      "core.application.voicebridge": "IdentitÃ© Â· Consentement Â· Voix Â· Confiance",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Transmission Â· Ã‰tat Â· ResponsabilitÃ©",

      "core.return.title":
        "Le core nâ€™est pas le produit.<br>Câ€™est ce qui relie les produits.",

      "core.return.button":
        "Retour au systÃ¨me"
    },


    /* ==========================================================
       ITALIANO
       ========================================================== */

    it: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Gestione alberghiera, ristorazione, scorte e lavoro di squadra in un sistema condiviso. La versione 1.0 Ã¨ in preparazione.",
      "hp.status": "1.0 Â· In preparazione",
      "hp.title": "Hospitality â€” Gestione alberghiera e ristorazione | ZALâ€™THERA",
      "hp.hero": "Lâ€™hotel. Una visione condivisa.",
      "hp.lead": "Dalle prenotazioni agli ordini: Hospitality collega reception, pulizie e servizio con una visione condivisa e tracciabile.",
      "hp.explore": "Scopri le funzioni",
      "hp.contact": "Informazioni su Hospitality",
      "hp.operations": "Una struttura. Team connessi.",
      "hp.rooms": "Camere e ospiti",
      "hp.roomsText": "Organizza stato camere, ospiti, prenotazioni, arrivi e partenze.",
      "hp.housekeeping": "Pulizie e danni",
      "hp.housekeepingText": "Assegna attivitÃ , segui le pulizie e registra danni con uno stato tracciabile.",
      "hp.dining": "Ristorante e cucina",
      "hp.diningText": "Collega tavoli, menu e ordini. Il servizio registra lâ€™ordine e la cucina ne segue lo stato.",
      "hp.stock": "Scorte e consumi",
      "hp.stockText": "Registra entrate, consumi e correzioni. Gli ordini collegati aggiornano le scorte.",
      "hp.sync": "Team e ZAL Sync",
      "hp.syncText": "I dispositivi associati lavorano con la centrale Mac sulla rete dellâ€™hotel. Ruoli e autorizzazioni limitano lâ€™accesso.",
      "hp.invoices": "Fatture e report",
      "hp.invoicesText": "Segui fatture e pagamenti registrati in un registro separato ed esporta i report.",
      "hp.roadmap": "A che punto siamo. I prossimi passi.",
      "hp.releaseText": "Le funzioni operative sono in preparazione per la versione 1.0. Il link App Store verrÃ  aggiunto dopo il lancio.",
      "hp.payments": "Pagamenti online Â· Integrazione e test",
      "hp.paymentsText": "Accesso ospite via QR e integrazione dei pagamenti sono in fase di test. I pagamenti reali non sono ancora attivi.",
      "hp.ai": "2.0 Â· IA personale prevista",
      "hp.aiText": "Il progetto collega ospite e hotel: lâ€™IA personale preparerÃ  e trasmetterÃ  richieste e domande. Prenotazioni vincolanti e pagamenti richiedono le conferme previste.",
      "hp.contactText": "Vuoi conoscere Hospitality per la tua struttura? Scrivici dimensioni dellâ€™hotel e uso previsto.",
      "hp.note": "Il modulo fatture non sostituisce una soluzione di cassa o fiscale verificata.",


      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligenza",
      "nav.communication": "Comunicazione",
      "nav.industry": "Industria",
      "nav.products": "Prodotti",
      "nav.about": "Chi siamo",

      "global.home": "Home",
      "global.explore": "Esplora",
      "global.open": "Apri",
      "global.close": "Chiudi",
      "global.discover": "Scopri",
      "global.learnMore": "Scopri di piÃ¹",
      "global.support": "Supporto",
      "global.contact": "Contatto",
      "global.available": "DISPONIBILE",
      "global.development": "SVILUPPO",
      "global.systemModule": "MODULO DI SISTEMA",
      "global.architecture": "ARCHITETTURA",
      "global.navOpen": "Apri navigazione",
      "global.mainNavigation": "Navigazione principale",

      "footer.imprint": "Note legali",
      "footer.privacy": "Privacy",

      "core.hero.kicker":
        "FONDAMENTO DEL SISTEMA",

      "core.hero.title":
        "La fiducia non dovrebbe<br>essere presunta.<br>Dovrebbe essere costruita.",

      "core.hero.description":
        "ZALâ€™THERA Core collega identitÃ , contesto, regole, consenso, prova ed esecuzione controllata in unâ€™unica architettura di fiducia.",

      "core.hero.architecture":
        "Apri architettura",

      "core.hero.identityBound":
        "LEGATO ALLâ€™IDENTITÃ€",

      "core.hero.policyGoverned":
        "GOVERNATO DA REGOLE",

      "core.hero.auditable":
        "VERIFICABILE",

      "core.hero.humanAuthorized":
        "AUTORIZZATO DALLâ€™UOMO",

      "core.status.label":
        "PRINCIPI DEL CORE",

      "core.status.identity": "IDENTITÃ€",
      "core.status.who": "CHI",
      "core.status.context": "CONTESTO",
      "core.status.why": "PERCHÃ‰",
      "core.status.policy": "POLICY",
      "core.status.what": "COSA",
      "core.status.consent": "CONSENSO",
      "core.status.allow": "CONSENTIRE",
      "core.status.audit": "AUDIT",
      "core.status.prove": "PROVARE",
      "core.status.execution": "ESECUZIONE",
      "core.status.act": "AGIRE",

      "core.architecture.eyebrow":
        "ARCHITETTURA PUBBLICA",

      "core.architecture.title":
        "Cinque livelli. Una catena decisionale tracciabile.",

      "core.architecture.lead":
        "Lâ€™architettura pubblica spiega la logica fondamentale di ZALâ€™THERA senza esporre implementazioni interne di sicurezza, strutture di chiavi private o dettagli dei protocolli.",

      "core.architecture.identity.title":
        "IdentitÃ ",

      "core.architecture.identity.text":
        "Unâ€™azione inizia con unâ€™identitÃ , un ruolo o unâ€™istanza di sistema autorizzata chiaramente assegnata.",

      "core.architecture.context.title":
        "Contesto",

      "core.architecture.context.text":
        "Le informazioni non vengono considerate isolate, ma comprese insieme a provenienza, tempo e relazione.",

      "core.architecture.intelligence.title":
        "Intelligenza",

      "core.architecture.intelligence.text":
        "I sistemi possono strutturare informazioni, spiegarle e preparare possibili passaggi successivi.",

      "core.architecture.trust.title":
        "Fiducia",

      "core.architecture.trust.text":
        "Autorizzazioni, prove, consenso e audit determinano ciÃ² che puÃ² essere considerato affidabile.",

      "core.architecture.action.title":
        "Azione",

      "core.architecture.action.text":
        "Le azioni rilevanti vengono eseguite solo quando le condizioni richieste sono soddisfatte.",

      "core.architecture.principle":
        "PRINCIPIO DI SISTEMA",

      "core.architecture.principleText":
        "Prima comprendere. Poi preparare. Agire solo con autorizzazione.",

      "core.architecture.technicalCore":
        "Core tecnico",

      "core.technical.eyebrow":
        "CORE TECNICO",

      "core.technical.lead":
        "Sotto lâ€™architettura pubblica opera una catena di controllo piÃ¹ precisa per azioni di sistema tracciabili.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Le regole definiscono limiti, stati, autorizzazioni e condizioni.",

      "core.technical.policy.question":
        "COSA Ãˆ CONSENTITO?",

      "core.technical.identity.title":
        "IdentitÃ ",

      "core.technical.identity.text":
        "Le azioni vengono assegnate a una persona, un ruolo, unâ€™identitÃ  o unâ€™istanza autorizzata.",

      "core.technical.identity.question":
        "CHI AGISCE?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Gli eventi rilevanti vengono documentati con provenienza, momento e stato affinchÃ© restino tracciabili.",

      "core.technical.audit.question":
        "COSA Ãˆ SUCCESSO?",

      "core.technical.execute.title":
        "Esecuzione",

      "core.technical.execute.text":
        "Unâ€™azione puÃ² modificare lo stato visibile solo dopo che le condizioni necessarie sono state soddisfatte.",

      "core.technical.execute.question":
        "PUÃ’ AVVENIRE?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleo locale di veritÃ  per eventi verificabili.",

      "core.ledger.text1":
        "THE LEDGER registra gli eventi rilevanti in una sequenza tracciabile. Le voci vengono aggiunte, collegate e possono essere esaminate in seguito.",

      "core.ledger.text2":
        "Lâ€™obiettivo non Ã¨ raccogliere centralmente tutte le informazioni. Lâ€™obiettivo Ã¨ rendere tracciabili e verificabili i cambiamenti di stato rilevanti.",

      "core.ledger.created": "CREATO",
      "core.ledger.proof": "PROVA",
      "core.ledger.signed": "FIRMATO",
      "core.ledger.verified": "VERIFICATO",

      "core.ledger.appendOnly.title":
        "Solo aggiunta",

      "core.ledger.appendOnly.text":
        "Gli eventi rilevanti vengono aggiunti anzichÃ© sovrascritti silenziosamente.",

      "core.ledger.linked.title":
        "Collegato",

      "core.ledger.linked.text":
        "Gli eventi mantengono relazioni tracciabili tra loro.",

      "core.ledger.verifiable.title":
        "Verificabile",

      "core.ledger.verifiable.text":
        "Struttura, integritÃ  e provenienza possono essere controllate.",

      "core.trust.eyebrow":
        "LIVELLO DI FIDUCIA",

      "core.trust.title":
        "La fiducia non viene semplicemente dichiarata.",

      "core.trust.lead":
        "Nasce da stati, identitÃ , autorizzazioni e prove verificabili.",

      "core.trust.proof.title":
        "Fiducia nella prova",

      "core.trust.proof.text":
        "Esiste una prova valida dellâ€™azione dichiarata?",

      "core.trust.policy.title":
        "Fiducia nelle regole",

      "core.trust.policy.text":
        "Lâ€™azione Ã¨ stata eseguita secondo le regole previste?",

      "core.trust.identity.title":
        "Fiducia nellâ€™identitÃ ",

      "core.trust.identity.text":
        "Lâ€™identitÃ  che agisce Ã¨ chiaramente stabilita e autorizzata?",

      "core.trust.audit.title":
        "Fiducia nellâ€™audit",

      "core.trust.audit.text":
        "Il processo Ã¨ sufficientemente completo da poter essere ricostruito successivamente?",

      "core.authorization.eyebrow":
        "GATE DI AUTORIZZAZIONE UMANA",

      "core.authorization.title":
        "Lâ€™intelligenza puÃ² preparare.<br>Lâ€™autoritÃ  resta esplicita.",

      "core.authorization.text":
        "ZALâ€™THERA puÃ² comprendere, strutturare e spiegare informazioni e preparare possibili azioni. Le azioni rilevanti restano vincolate alla necessaria autorizzazione umana o esplicitamente delegata.",

      "core.application.eyebrow":
        "APPLICAZIONE DEL SISTEMA",

      "core.application.title":
        "Un core. PiÃ¹ ambiti applicativi.",

      "core.application.personal": "PERSONALE",
      "core.application.continuity": "Documenti Â· Finanze Â· Contesto Â· Cards",
      "core.application.proof": "PROVA",
      "core.application.proofflow": "Prova Â· Audit Â· Firma Â· Esportazione",
      "core.application.communication": "COMUNICAZIONE",
      "core.application.voicebridge": "IdentitÃ  Â· Consenso Â· Voce Â· Fiducia",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Passaggio Â· Stato Â· ResponsabilitÃ ",

      "core.return.title":
        "Il core non Ã¨ il prodotto.<br>Ãˆ ciÃ² che collega i prodotti.",

      "core.return.button":
        "Torna al sistema"
    },


    /* ==========================================================
       ROMÃ‚NÄ‚
       ========================================================== */

    ro: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "OperaÈ›iuni hoteliere, restaurant, stocuri È™i echipÄƒ Ã®ntr-un sistem comun. Versiunea 1.0 este Ã®n pregÄƒtire pentru lansare.",
      "hp.status": "1.0 Â· ÃŽn pregÄƒtire",
      "hp.title": "Hospitality â€” OperaÈ›iuni hoteliere È™i restaurant | ZALâ€™THERA",
      "hp.hero": "Hotelul. O perspectivÄƒ comunÄƒ.",
      "hp.lead": "De la rezervÄƒri la comenzi: Hospitality conecteazÄƒ recepÈ›ia, curÄƒÈ›enia È™i serviciul printr-o imagine comunÄƒ È™i trasabilÄƒ.",
      "hp.explore": "DescoperÄƒ funcÈ›iile",
      "hp.contact": "SolicitÄƒ informaÈ›ii",
      "hp.operations": "Un hotel. Echipe conectate.",
      "hp.rooms": "Camere È™i oaspeÈ›i",
      "hp.roomsText": "OrganizeazÄƒ starea camerelor, oaspeÈ›ii, rezervÄƒrile, sosirile È™i plecÄƒrile.",
      "hp.housekeeping": "CurÄƒÈ›enie È™i daune",
      "hp.housekeepingText": "Atribuie sarcini, urmÄƒreÈ™te curÄƒÈ›enia È™i Ã®nregistreazÄƒ daunele cu un statut trasabil.",
      "hp.dining": "Restaurant È™i bucÄƒtÄƒrie",
      "hp.diningText": "ConecteazÄƒ mese, meniu È™i comenzi. Serviciul Ã®nregistreazÄƒ comanda, iar bucÄƒtÄƒria urmÄƒreÈ™te progresul.",
      "hp.stock": "Stocuri È™i consum",
      "hp.stockText": "ÃŽnregistreazÄƒ intrÄƒrile, consumul È™i corecÈ›iile. Comenzile asociate actualizeazÄƒ stocul.",
      "hp.sync": "EchipÄƒ È™i ZAL Sync",
      "hp.syncText": "Dispozitivele asociate lucreazÄƒ cu centrala Mac prin reÈ›eaua hotelului. Rolurile È™i aprobÄƒrile limiteazÄƒ accesul.",
      "hp.invoices": "Facturi È™i rapoarte",
      "hp.invoicesText": "UrmÄƒreÈ™te facturile È™i plÄƒÈ›ile Ã®nregistrate Ã®ntr-un jurnal separat È™i exportÄƒ rapoarte.",
      "hp.roadmap": "Unde suntem. Ce urmeazÄƒ.",
      "hp.releaseText": "FuncÈ›iile operaÈ›ionale sunt pregÄƒtite pentru versiunea 1.0. Linkul App Store va fi adÄƒugat dupÄƒ lansare.",
      "hp.payments": "PlÄƒÈ›i online Â· Integrare È™i testare",
      "hp.paymentsText": "Accesul oaspeÈ›ilor prin QR È™i integrarea plÄƒÈ›ilor sunt Ã®n testare. PlÄƒÈ›ile reale nu sunt Ã®ncÄƒ activate.",
      "hp.ai": "2.0 Â· IA personalÄƒ planificatÄƒ",
      "hp.aiText": "Planul conecteazÄƒ oaspetele È™i hotelul: IA personalÄƒ va pregÄƒti È™i transmite cereri È™i Ã®ntrebÄƒri. RezervÄƒrile ferme È™i plÄƒÈ›ile necesitÄƒ aprobÄƒrile prevÄƒzute.",
      "hp.contactText": "Vrei sÄƒ descoperi Hospitality pentru afacerea ta? Scrie-ne dimensiunea hotelului È™i utilizarea doritÄƒ.",
      "hp.note": "Modulul de facturare nu Ã®nlocuieÈ™te o soluÈ›ie de casÄƒ sau fiscalÄƒ validatÄƒ.",


      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "InteligenÈ›Äƒ",
      "nav.communication": "Comunicare",
      "nav.industry": "Industrie",
      "nav.products": "Produse",
      "nav.about": "Despre",

      "global.home": "AcasÄƒ",
      "global.explore": "ExploreazÄƒ",
      "global.open": "Deschide",
      "global.close": "ÃŽnchide",
      "global.discover": "DescoperÄƒ",
      "global.learnMore": "AflÄƒ mai multe",
      "global.support": "Suport",
      "global.contact": "Contact",
      "global.available": "DISPONIBIL",
      "global.development": "DEZVOLTARE",
      "global.systemModule": "MODUL DE SISTEM",
      "global.architecture": "ARHITECTURÄ‚",
      "global.navOpen": "Deschide navigarea",
      "global.mainNavigation": "Navigare principalÄƒ",

      "footer.imprint": "InformaÈ›ii legale",
      "footer.privacy": "ConfidenÈ›ialitate",

      "core.hero.kicker":
        "FUNDAÈšIA SISTEMULUI",

      "core.hero.title":
        "ÃŽncrederea nu ar trebui<br>presupusÄƒ.<br>Ar trebui construitÄƒ.",

      "core.hero.description":
        "ZALâ€™THERA Core conecteazÄƒ identitatea, contextul, regulile, consimÈ›ÄƒmÃ¢ntul, dovada È™i execuÈ›ia controlatÄƒ Ã®ntr-o arhitecturÄƒ comunÄƒ de Ã®ncredere.",

      "core.hero.architecture":
        "Deschide arhitectura",

      "core.hero.identityBound":
        "LEGAT DE IDENTITATE",

      "core.hero.policyGoverned":
        "GUVERNAT DE REGULI",

      "core.hero.auditable":
        "AUDITABIL",

      "core.hero.humanAuthorized":
        "AUTORIZAT DE OM",

      "core.status.label":
        "PRINCIPII CORE",

      "core.status.identity": "IDENTITATE",
      "core.status.who": "CINE",
      "core.status.context": "CONTEXT",
      "core.status.why": "DE CE",
      "core.status.policy": "POLITICÄ‚",
      "core.status.what": "CE",
      "core.status.consent": "CONSIMÈšÄ‚MÃ‚NT",
      "core.status.allow": "PERMITE",
      "core.status.audit": "AUDIT",
      "core.status.prove": "DOVADÄ‚",
      "core.status.execution": "EXECUÈšIE",
      "core.status.act": "ACÈšIUNE",

      "core.architecture.eyebrow":
        "ARHITECTURÄ‚ PUBLICÄ‚",

      "core.architecture.title":
        "Cinci niveluri. Un lanÈ› decizional trasabil.",

      "core.architecture.lead":
        "Arhitectura publicÄƒ explicÄƒ logica fundamentalÄƒ ZALâ€™THERA fÄƒrÄƒ a expune implementÄƒri interne de securitate, structuri de chei private sau detalii de protocol.",

      "core.architecture.identity.title":
        "Identitate",

      "core.architecture.identity.text":
        "O acÈ›iune Ã®ncepe cu o identitate, un rol sau o instanÈ›Äƒ autorizatÄƒ de sistem clar atribuitÄƒ.",

      "core.architecture.context.title":
        "Context",

      "core.architecture.context.text":
        "InformaÈ›ia nu este analizatÄƒ izolat, ci Ã®mpreunÄƒ cu provenienÈ›a, timpul È™i relaÈ›ia sa.",

      "core.architecture.intelligence.title":
        "InteligenÈ›Äƒ",

      "core.architecture.intelligence.text":
        "Sistemele pot structura informaÈ›iile, le pot explica È™i pot pregÄƒti posibili paÈ™i urmÄƒtori.",

      "core.architecture.trust.title":
        "ÃŽncredere",

      "core.architecture.trust.text":
        "Permisiunile, dovezile, consimÈ›ÄƒmÃ¢ntul È™i auditul determinÄƒ ce poate fi considerat de Ã®ncredere.",

      "core.architecture.action.title":
        "AcÈ›iune",

      "core.architecture.action.text":
        "AcÈ›iunile importante sunt executate numai atunci cÃ¢nd condiÈ›iile necesare sunt Ã®ndeplinite.",

      "core.architecture.principle":
        "PRINCIPIU DE SISTEM",

      "core.architecture.principleText":
        "Mai Ã®ntÃ¢i Ã®nÈ›elege. Apoi pregÄƒteÈ™te. AcÈ›ioneazÄƒ numai cu permisiune.",

      "core.architecture.technicalCore":
        "Core tehnic",

      "core.technical.eyebrow":
        "CORE TEHNIC",

      "core.technical.lead":
        "Sub arhitectura publicÄƒ funcÈ›ioneazÄƒ un lanÈ› de control mai precis pentru acÈ›iuni de sistem trasabile.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Regulile definesc limite, stÄƒri, permisiuni È™i condiÈ›ii.",

      "core.technical.policy.question":
        "CE ESTE PERMIS?",

      "core.technical.identity.title":
        "Identitate",

      "core.technical.identity.text":
        "AcÈ›iunile sunt atribuite unei persoane, unui rol, unei identitÄƒÈ›i sau unei instanÈ›e autorizate.",

      "core.technical.identity.question":
        "CINE ACÈšIONEAZÄ‚?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Evenimentele relevante sunt documentate cu provenienÈ›Äƒ, timp È™i stare pentru a rÄƒmÃ¢ne trasabile.",

      "core.technical.audit.question":
        "CE S-A ÃŽNTÃ‚MPLAT?",

      "core.technical.execute.title":
        "Executare",

      "core.technical.execute.text":
        "O acÈ›iune poate modifica starea vizibilÄƒ numai dupÄƒ Ã®ndeplinirea condiÈ›iilor necesare.",

      "core.technical.execute.question":
        "POATE AVEA LOC?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleu local de adevÄƒr pentru evenimente verificabile.",

      "core.ledger.text1":
        "THE LEDGER Ã®nregistreazÄƒ evenimentele relevante Ã®ntr-o secvenÈ›Äƒ trasabilÄƒ. ÃŽnregistrÄƒrile sunt adÄƒugate, legate È™i pot fi examinate ulterior.",

      "core.ledger.text2":
        "Scopul nu este colectarea centralizatÄƒ a tuturor informaÈ›iilor. Scopul este ca modificÄƒrile relevante de stare sÄƒ devinÄƒ trasabile È™i verificabile.",

      "core.ledger.created": "CREAT",
      "core.ledger.proof": "DOVADÄ‚",
      "core.ledger.signed": "SEMNAT",
      "core.ledger.verified": "VERIFICAT",

      "core.ledger.appendOnly.title":
        "Doar adÄƒugare",

      "core.ledger.appendOnly.text":
        "Evenimentele relevante sunt adÄƒugate Ã®n loc sÄƒ fie suprascrise Ã®n mod ascuns.",

      "core.ledger.linked.title":
        "Conectat",

      "core.ledger.linked.text":
        "Evenimentele pÄƒstreazÄƒ relaÈ›ii trasabile Ã®ntre ele.",

      "core.ledger.verifiable.title":
        "Verificabil",

      "core.ledger.verifiable.text":
        "Structura, integritatea È™i provenienÈ›a pot fi verificate.",

      "core.trust.eyebrow":
        "STRAT DE ÃŽNCREDERE",

      "core.trust.title":
        "ÃŽncrederea nu este doar declaratÄƒ.",

      "core.trust.lead":
        "Ea rezultÄƒ din stÄƒri, identitÄƒÈ›i, permisiuni È™i dovezi verificabile.",

      "core.trust.proof.title":
        "ÃŽncredere prin dovadÄƒ",

      "core.trust.proof.text":
        "ExistÄƒ o dovadÄƒ validÄƒ pentru acÈ›iunea declaratÄƒ?",

      "core.trust.policy.title":
        "ÃŽncredere Ã®n reguli",

      "core.trust.policy.text":
        "AcÈ›iunea a fost realizatÄƒ conform regulilor prevÄƒzute?",

      "core.trust.identity.title":
        "ÃŽncredere Ã®n identitate",

      "core.trust.identity.text":
        "Identitatea care acÈ›ioneazÄƒ este clar stabilitÄƒ È™i autorizatÄƒ?",

      "core.trust.audit.title":
        "ÃŽncredere Ã®n audit",

      "core.trust.audit.text":
        "Procesul este suficient de complet pentru a putea fi reconstruit ulterior?",

      "core.authorization.eyebrow":
        "POARTÄ‚ DE AUTORIZARE UMANÄ‚",

      "core.authorization.title":
        "InteligenÈ›a poate pregÄƒti.<br>Autoritatea rÄƒmÃ¢ne explicitÄƒ.",

      "core.authorization.text":
        "ZALâ€™THERA poate Ã®nÈ›elege, structura È™i explica informaÈ›iile È™i poate pregÄƒti acÈ›iuni posibile. AcÈ›iunile importante rÄƒmÃ¢n legate de autorizarea umanÄƒ necesarÄƒ sau delegatÄƒ explicit.",

      "core.application.eyebrow":
        "APLICAREA SISTEMULUI",

      "core.application.title":
        "Un core. Mai multe domenii de aplicare.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documente Â· FinanÈ›e Â· Context Â· Cards",
      "core.application.proof": "DOVADÄ‚",
      "core.application.proofflow": "DovadÄƒ Â· Audit Â· SemnÄƒturÄƒ Â· Export",
      "core.application.communication": "COMUNICARE",
      "core.application.voicebridge": "Identitate Â· ConsimÈ›ÄƒmÃ¢nt Â· Voce Â· ÃŽncredere",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Predare Â· Stare Â· Responsabilitate",

      "core.return.title":
        "Core-ul nu este produsul.<br>Este ceea ce conecteazÄƒ produsele.",

      "core.return.button":
        "ÃŽnapoi la sistem"
    },


    /* ==========================================================
       ç®€ä½“ä¸­æ–‡
       ========================================================== */

    "zh-Hans": {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "é…’åº—è¿è¥ã€é¤é¥®ã€åº“å­˜ä¸Žå›¢é˜Ÿåä½œï¼Œæ±‡èšäºŽåŒä¸€ç³»ç»Ÿã€‚1.0 ç‰ˆæœ¬æ­£åœ¨å‡†å¤‡å‘å¸ƒã€‚",
      "hp.status": "1.0 Â· å‘å¸ƒå‡†å¤‡ä¸­",
      "hp.title": "Hospitality â€” é…’åº—è¿è¥ä¸Žé¤é¥® | ZALâ€™THERA",
      "hp.hero": "é…’åº—è¿è¥ï¼Œå›¢é˜Ÿå…±åŒæŽŒæ¡ã€‚",
      "hp.lead": "ä»Žé¢„è®¢åˆ°ç‚¹å•ï¼šHospitality å°†å‰å°ã€å®¢æˆ¿æ¸…æ´ä¸ŽæœåŠ¡å›¢é˜Ÿè¿žæŽ¥åˆ°å¯è¿½æº¯çš„å…±åŒçŠ¶æ€ã€‚",
      "hp.explore": "äº†è§£åŠŸèƒ½",
      "hp.contact": "å’¨è¯¢ Hospitality",
      "hp.operations": "ä¸€ä¸ªé…’åº—ï¼Œç›¸äº’è¿žæŽ¥çš„å›¢é˜Ÿã€‚",
      "hp.rooms": "å®¢æˆ¿ä¸Žä½å®¢",
      "hp.roomsText": "æ¸…æ™°ç®¡ç†å®¢æˆ¿çŠ¶æ€ã€ä½å®¢ã€é¢„è®¢ã€å…¥ä½ä¸Žé€€æˆ¿ã€‚",
      "hp.housekeeping": "å®¢æˆ¿æ¸…æ´ä¸ŽæŸå",
      "hp.housekeepingText": "åˆ†é…ä»»åŠ¡ã€è·Ÿè¿›æ¸…æ´ï¼Œå¹¶ä»¥å¯è¿½æº¯çŠ¶æ€è®°å½•æŸåã€‚",
      "hp.dining": "é¤åŽ…ä¸ŽåŽ¨æˆ¿",
      "hp.diningText": "è¿žæŽ¥é¤æ¡Œã€èœå•ä¸Žè®¢å•ã€‚æœåŠ¡äººå‘˜å½•å•ï¼ŒåŽ¨æˆ¿è·Ÿè¿›å¤„ç†çŠ¶æ€ã€‚",
      "hp.stock": "åº“å­˜ä¸Žæ¶ˆè€—",
      "hp.stockText": "è®°å½•å…¥åº“ã€æ¶ˆè€—ä¸Žè°ƒæ•´ã€‚å…³è”è®¢å•åŒæ­¥æ›´æ–°åº“å­˜ã€‚",
      "hp.sync": "å›¢é˜Ÿä¸Ž ZAL Sync",
      "hp.syncText": "é…å¯¹çš„å‘˜å·¥è®¾å¤‡é€šè¿‡é…’åº—ç½‘ç»œä¸Ž Mac ä¸­å¿ƒåä½œã€‚è§’è‰²ä¸ŽæŽˆæƒé™å®šè®¿é—®èŒƒå›´ã€‚",
      "hp.invoices": "è´¦å•ä¸ŽæŠ¥è¡¨",
      "hp.invoicesText": "åœ¨ç‹¬ç«‹æ—¥å¿—ä¸­è¿½æº¯è´¦å•ä¸Žå·²è®°å½•ä»˜æ¬¾ï¼Œå¹¶å¯¼å‡ºæŠ¥è¡¨ã€‚",
      "hp.roadmap": "å½“å‰è¿›å±•ä¸Žä¸‹ä¸€æ­¥ã€‚",
      "hp.releaseText": "è¿è¥åŠŸèƒ½æ­£åœ¨ä¸º 1.0 ç‰ˆæœ¬åšå‡†å¤‡ã€‚æ­£å¼å‘å¸ƒåŽå°†åœ¨æ­¤æä¾› App Store ä¸‹è½½é“¾æŽ¥ã€‚",
      "hp.payments": "åœ¨çº¿æ”¯ä»˜ Â· é›†æˆä¸Žæµ‹è¯•",
      "hp.paymentsText": "ä½å®¢äºŒç»´ç å…¥å£ä¸Žæ”¯ä»˜é›†æˆæ­£åœ¨æµ‹è¯•ã€‚çœŸå®žåœ¨çº¿æ”¯ä»˜å°šæœªå¯ç”¨ã€‚",
      "hp.ai": "2.0 Â· ä¸ªäºº AI è§„åˆ’ä¸­",
      "hp.aiText": "è§„åˆ’å°†ä½å®¢ä¸Žé…’åº—è¿žæŽ¥èµ·æ¥ï¼šä¸ªäºº AI å°†å‡†å¤‡å¹¶ä¼ é€’é¢„è®¢éœ€æ±‚ä¸Žé—®é¢˜ã€‚å…·æœ‰çº¦æŸåŠ›çš„é¢„è®¢ä¸Žä»˜æ¬¾ä»éœ€è§„å®šçš„ç¡®è®¤ã€‚",
      "hp.contactText": "æƒ³äº†è§£ Hospitality å¦‚ä½•ç”¨äºŽä½ çš„é…’åº—ï¼Ÿè¯·å‘ŠçŸ¥é…’åº—è§„æ¨¡ä¸Žè®¡åˆ’ä½¿ç”¨çš„ä¸šåŠ¡èŒƒå›´ã€‚",
      "hp.note": "è´¦å•æ¨¡å—ä¸èƒ½æ›¿ä»£ç»è¿‡éªŒè¯çš„æ”¶é“¶æˆ–ç¨ŽåŠ¡è§£å†³æ–¹æ¡ˆã€‚",


      "nav.system": "ç³»ç»Ÿ",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "æ™ºèƒ½",
      "nav.communication": "é€šä¿¡",
      "nav.industry": "å·¥ä¸š",
      "nav.products": "äº§å“",
      "nav.about": "å…³äºŽ",

      "global.home": "é¦–é¡µ",
      "global.explore": "æŽ¢ç´¢",
      "global.open": "æ‰“å¼€",
      "global.close": "å…³é—­",
      "global.discover": "æŽ¢ç´¢",
      "global.learnMore": "äº†è§£æ›´å¤š",
      "global.support": "æ”¯æŒ",
      "global.contact": "è”ç³»",
      "global.available": "å·²å‘å¸ƒ",
      "global.development": "å¼€å‘ä¸­",
      "global.systemModule": "ç³»ç»Ÿæ¨¡å—",
      "global.architecture": "æž¶æž„",
      "global.navOpen": "æ‰“å¼€å¯¼èˆª",
      "global.mainNavigation": "ä¸»å¯¼èˆª",

      "footer.imprint": "æ³•å¾‹å£°æ˜Ž",
      "footer.privacy": "éšç§",

      "core.hero.kicker":
        "ç³»ç»ŸåŸºç¡€",

      "core.hero.title":
        "ä¿¡ä»»ä¸åº”è¢«<br>é»˜è®¤å‡è®¾ã€‚<br>å®ƒåº”è¯¥è¢«æž„å»ºã€‚",

      "core.hero.description":
        "ZALâ€™THERA Core å°†èº«ä»½ã€ä¸Šä¸‹æ–‡ã€è§„åˆ™ã€åŒæ„ã€è¯æ˜Žä¸Žå—æŽ§æ‰§è¡Œè¿žæŽ¥æˆç»Ÿä¸€çš„ä¿¡ä»»æž¶æž„ã€‚",

      "core.hero.architecture":
        "æ‰“å¼€æž¶æž„",

      "core.hero.identityBound":
        "èº«ä»½ç»‘å®š",

      "core.hero.policyGoverned":
        "è§„åˆ™æ²»ç†",

      "core.hero.auditable":
        "å¯å®¡è®¡",

      "core.hero.humanAuthorized":
        "äººå·¥æŽˆæƒ",

      "core.status.label":
        "æ ¸å¿ƒåŽŸåˆ™",

      "core.status.identity": "èº«ä»½",
      "core.status.who": "è°",
      "core.status.context": "ä¸Šä¸‹æ–‡",
      "core.status.why": "ä¸ºä»€ä¹ˆ",
      "core.status.policy": "è§„åˆ™",
      "core.status.what": "ä»€ä¹ˆ",
      "core.status.consent": "åŒæ„",
      "core.status.allow": "å…è®¸",
      "core.status.audit": "å®¡è®¡",
      "core.status.prove": "è¯æ˜Ž",
      "core.status.execution": "æ‰§è¡Œ",
      "core.status.act": "è¡ŒåŠ¨",

      "core.architecture.eyebrow":
        "å…¬å¼€æž¶æž„",

      "core.architecture.title":
        "äº”ä¸ªå±‚çº§ã€‚ä¸€æ¡å¯è¿½æº¯çš„å†³ç­–é“¾ã€‚",

      "core.architecture.lead":
        "å…¬å¼€æž¶æž„è§£é‡Š ZALâ€™THERA çš„åŸºæœ¬é€»è¾‘ï¼ŒåŒæ—¶ä¸ä¼šå…¬å¼€å†…éƒ¨å®‰å…¨å®žçŽ°ã€ç§é’¥ç»“æž„æˆ–åè®®ç»†èŠ‚ã€‚",

      "core.architecture.identity.title":
        "èº«ä»½",

      "core.architecture.identity.text":
        "æ¯ä¸ªæ“ä½œéƒ½ä»Žæ˜Žç¡®åˆ†é…çš„èº«ä»½ã€è§’è‰²æˆ–å·²æŽˆæƒç³»ç»Ÿå®žä¾‹å¼€å§‹ã€‚",

      "core.architecture.context.title":
        "ä¸Šä¸‹æ–‡",

      "core.architecture.context.text":
        "ä¿¡æ¯ä¸ä¼šè¢«å­¤ç«‹ç†è§£ï¼Œè€Œæ˜¯ç»“åˆæ¥æºã€æ—¶é—´å’Œå…³ç³»è¿›è¡Œè§£é‡Šã€‚",

      "core.architecture.intelligence.title":
        "æ™ºèƒ½",

      "core.architecture.intelligence.text":
        "ç³»ç»Ÿå¯ä»¥ç»„ç»‡ä¿¡æ¯ã€è§£é‡Šä¿¡æ¯ï¼Œå¹¶å‡†å¤‡å¯èƒ½çš„ä¸‹ä¸€æ­¥ã€‚",

      "core.architecture.trust.title":
        "ä¿¡ä»»",

      "core.architecture.trust.text":
        "æƒé™ã€è¯æ˜Žã€åŒæ„å’Œå®¡è®¡å…±åŒå†³å®šä»€ä¹ˆå¯ä»¥è¢«è§†ä¸ºå¯ä¿¡ã€‚",

      "core.architecture.action.title":
        "æ“ä½œ",

      "core.architecture.action.text":
        "é‡è¦æ“ä½œåªæœ‰åœ¨æ»¡è¶³æ‰€éœ€æ¡ä»¶åŽæ‰èƒ½æ‰§è¡Œã€‚",

      "core.architecture.principle":
        "ç³»ç»ŸåŽŸåˆ™",

      "core.architecture.principleText":
        "å…ˆç†è§£ã€‚å†å‡†å¤‡ã€‚åªæœ‰èŽ·å¾—è®¸å¯åŽæ‰è¡ŒåŠ¨ã€‚",

      "core.architecture.technicalCore":
        "æŠ€æœ¯æ ¸å¿ƒ",

      "core.technical.eyebrow":
        "æŠ€æœ¯æ ¸å¿ƒ",

      "core.technical.lead":
        "åœ¨å…¬å¼€æž¶æž„ä¹‹ä¸‹è¿è¡Œç€ä¸€æ¡æ›´ç²¾ç¡®çš„æŽ§åˆ¶é“¾ï¼Œç”¨äºŽç¡®ä¿ç³»ç»Ÿæ“ä½œå¯è¿½æº¯ã€‚",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "è§„åˆ™å®šä¹‰è¾¹ç•Œã€çŠ¶æ€ã€æƒé™å’Œæ¡ä»¶ã€‚",

      "core.technical.policy.question":
        "å…è®¸ä»€ä¹ˆï¼Ÿ",

      "core.technical.identity.title":
        "èº«ä»½",

      "core.technical.identity.text":
        "æ“ä½œä¼šè¢«æ˜Žç¡®å…³è”åˆ°ä¸ªäººã€è§’è‰²ã€èº«ä»½æˆ–å·²æŽˆæƒå®žä¾‹ã€‚",

      "core.technical.identity.question":
        "è°åœ¨è¡ŒåŠ¨ï¼Ÿ",

      "core.technical.audit.title":
        "å®¡è®¡",

      "core.technical.audit.text":
        "é‡è¦äº‹ä»¶é€šè¿‡æ¥æºã€æ—¶é—´å’ŒçŠ¶æ€ä¿¡æ¯è¢«è®°å½•ï¼Œä»¥ä¿æŒå¯è¿½æº¯æ€§ã€‚",

      "core.technical.audit.question":
        "å‘ç”Ÿäº†ä»€ä¹ˆï¼Ÿ",

      "core.technical.execute.title":
        "æ‰§è¡Œ",

      "core.technical.execute.text":
        "åªæœ‰æ»¡è¶³å¿…è¦æ¡ä»¶åŽï¼Œæ“ä½œæ‰å¯ä»¥æ”¹å˜å¯è§çŠ¶æ€ã€‚",

      "core.technical.execute.question":
        "å¯ä»¥æ‰§è¡Œå—ï¼Ÿ",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "é¢å‘å¯éªŒè¯äº‹ä»¶çš„æœ¬åœ°äº‹å®žæ ¸å¿ƒã€‚",

      "core.ledger.text1":
        "THE LEDGER æŒ‰å¯è¿½æº¯é¡ºåºè®°å½•é‡è¦äº‹ä»¶ã€‚è®°å½•ä¼šè¢«è¿½åŠ ã€å…³è”ï¼Œå¹¶å¯åœ¨ä¹‹åŽè¿›è¡Œæ£€æŸ¥ã€‚",

      "core.ledger.text2":
        "ç›®æ ‡ä¸æ˜¯é›†ä¸­æ”¶é›†æ‰€æœ‰ä¿¡æ¯ã€‚ç›®æ ‡æ˜¯è®©é‡è¦çŠ¶æ€å˜åŒ–ä¿æŒå¯è¿½æº¯å’Œå¯éªŒè¯ã€‚",

      "core.ledger.created": "å·²åˆ›å»º",
      "core.ledger.proof": "è¯æ˜Ž",
      "core.ledger.signed": "å·²ç­¾ç½²",
      "core.ledger.verified": "å·²éªŒè¯",

      "core.ledger.appendOnly.title":
        "ä»…è¿½åŠ ",

      "core.ledger.appendOnly.text":
        "é‡è¦äº‹ä»¶ä¼šè¢«è¿½åŠ ï¼Œè€Œä¸æ˜¯è¢«æ‚„ç„¶è¦†ç›–ã€‚",

      "core.ledger.linked.title":
        "å…³è”",

      "core.ledger.linked.text":
        "äº‹ä»¶ä¹‹é—´ä¿æŒå¯è¿½æº¯çš„å…³ç³»ã€‚",

      "core.ledger.verifiable.title":
        "å¯éªŒè¯",

      "core.ledger.verifiable.text":
        "ç»“æž„ã€å®Œæ•´æ€§å’Œæ¥æºéƒ½å¯ä»¥è¢«æ£€æŸ¥ã€‚",

      "core.trust.eyebrow":
        "ä¿¡ä»»å±‚",

      "core.trust.title":
        "ä¿¡ä»»ä¸æ˜¯ç®€å•å£°æ˜Žå‡ºæ¥çš„ã€‚",

      "core.trust.lead":
        "å®ƒæ¥è‡ªå¯éªŒè¯çš„çŠ¶æ€ã€èº«ä»½ã€æƒé™å’Œè¯æ˜Žã€‚",

      "core.trust.proof.title":
        "è¯æ˜Žä¿¡ä»»",

      "core.trust.proof.text":
        "å£°æ˜Žçš„æ“ä½œæ˜¯å¦å­˜åœ¨æœ‰æ•ˆè¯æ˜Žï¼Ÿ",

      "core.trust.policy.title":
        "è§„åˆ™ä¿¡ä»»",

      "core.trust.policy.text":
        "æ“ä½œæ˜¯å¦æŒ‰ç…§é¢„å®šè§„åˆ™æ‰§è¡Œï¼Ÿ",

      "core.trust.identity.title":
        "èº«ä»½ä¿¡ä»»",

      "core.trust.identity.text":
        "æ‰§è¡Œæ“ä½œçš„èº«ä»½æ˜¯å¦æ˜Žç¡®å¹¶å·²èŽ·æŽˆæƒï¼Ÿ",

      "core.trust.audit.title":
        "å®¡è®¡ä¿¡ä»»",

      "core.trust.audit.text":
        "æµç¨‹æ˜¯å¦è¶³å¤Ÿå®Œæ•´ï¼Œå¯ä»¥åœ¨ä¹‹åŽè¢«é‡æ–°è¿½æº¯ï¼Ÿ",

      "core.authorization.eyebrow":
        "äººå·¥æŽˆæƒé—¸é—¨",

      "core.authorization.title":
        "æ™ºèƒ½å¯ä»¥å‡†å¤‡ã€‚<br>æƒåŠ›å¿…é¡»æ˜Žç¡®ã€‚",

      "core.authorization.text":
        "ZALâ€™THERA å¯ä»¥ç†è§£ã€ç»„ç»‡å’Œè§£é‡Šä¿¡æ¯ï¼Œå¹¶å‡†å¤‡å¯èƒ½çš„æ“ä½œã€‚ä½†é‡è¦æ“ä½œä»ç„¶å¿…é¡»å—å¿…è¦çš„äººå·¥æŽˆæƒæˆ–æ˜Žç¡®å§”æ‰˜çš„æŽˆæƒçº¦æŸã€‚",

      "core.application.eyebrow":
        "ç³»ç»Ÿåº”ç”¨",

      "core.application.title":
        "ä¸€ä¸ªæ ¸å¿ƒã€‚å¤šä¸ªåº”ç”¨é¢†åŸŸã€‚",

      "core.application.personal":
        "ä¸ªäºº",

      "core.application.continuity":
        "æ–‡æ¡£ Â· è´¢åŠ¡ Â· ä¸Šä¸‹æ–‡ Â· Cards",

      "core.application.proof":
        "è¯æ˜Ž",

      "core.application.proofflow":
        "è¯æ˜Ž Â· å®¡è®¡ Â· ç­¾å Â· å¯¼å‡º",

      "core.application.communication":
        "é€šä¿¡",

      "core.application.voicebridge":
        "èº«ä»½ Â· åŒæ„ Â· è¯­éŸ³ Â· ä¿¡ä»»",

      "core.application.industry":
        "å·¥ä¸š",

      "core.application.shiftlog":
        "äº¤æŽ¥ Â· çŠ¶æ€ Â· è´£ä»»",

      "core.return.title":
        "æ ¸å¿ƒä¸æ˜¯äº§å“ã€‚<br>æ ¸å¿ƒè¿žæŽ¥æ‰€æœ‰äº§å“ã€‚",

      "core.return.button":
        "è¿”å›žç³»ç»Ÿ"
    }
  };



  /* ============================================================
     FINAL WEBSITE TRANSLATIONS v2.0
     Complete page translation rows.
     Order: DE / EN / TR / ES / FR / IT / RO / ZH-HANS
     ============================================================ */

  const FINAL_TRANSLATION_ROWS = [["footer.terms",["AGB","Terms","Åžartlar","TÃ©rminos","CGV","Termini","Termeni","æ¡æ¬¾"]],["footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","RÃ©tractation","Recesso","Retragere","æ’¤é”€"]],["global.navClose",["Navigation schlieÃŸen","Close navigation","Navigasyonu kapat","Cerrar navegaciÃ³n","Fermer la navigation","Chiudi navigazione","ÃŽnchide navigarea","å…³é—­å¯¼èˆª"]],["home.hero.kicker",["SOUVERÃ„NE DIGITALE ARCHITEKTUR","SOVEREIGN DIGITAL ARCHITECTURE","EGEMEN DÄ°JÄ°TAL MÄ°MARÄ°","ARQUITECTURA DIGITAL SOBERANA","ARCHITECTURE NUMÃ‰RIQUE SOUVERAINE","ARCHITETTURA DIGITALE SOVRANA","ARHITECTURÄ‚ DIGITALÄ‚ SUVERANÄ‚","ä¸»æƒæ•°å­—æž¶æž„"]],["home.hero.title",["One system.<br>One identity.<br>Connected intelligence.","One system.<br>One identity.<br>Connected intelligence.","Tek sistem.<br>Tek kimlik.<br>BaÄŸlantÄ±lÄ± zekÃ¢.","Un sistema.<br>Una identidad.<br>Inteligencia conectada.","Un systÃ¨me.<br>Une identitÃ©.<br>Une intelligence connectÃ©e.","Un sistema.<br>Unâ€™identitÃ .<br>Intelligenza connessa.","Un sistem.<br>O identitate.<br>InteligenÈ›Äƒ conectatÄƒ.","ä¸€ä¸ªç³»ç»Ÿã€‚<br>ä¸€ä¸ªèº«ä»½ã€‚<br>è¿žæŽ¥çš„æ™ºèƒ½ã€‚"]],["home.hero.description",["ZALâ€™THERA verbindet IdentitÃ¤t, Kontext, kÃ¼nstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.","ZALâ€™THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.","ZALâ€™THERA; kimlik, baÄŸlam, yapay zekÃ¢, veri, gÃ¼ven, iletiÅŸim ve gerÃ§ek sÃ¼reÃ§leri ortak bir teknolojik mimaride birleÅŸtirir.","ZALâ€™THERA conecta identidad, contexto, inteligencia artificial, datos, confianza, comunicaciÃ³n y procesos reales dentro de una arquitectura tecnolÃ³gica comÃºn.","ZALâ€™THERA relie identitÃ©, contexte, intelligence artificielle, donnÃ©es, confiance, communication et processus rÃ©els dans une architecture technologique commune.","ZALâ€™THERA collega identitÃ , contesto, intelligenza artificiale, dati, fiducia, comunicazione e processi reali in unâ€™unica architettura tecnologica.","ZALâ€™THERA conecteazÄƒ identitatea, contextul, inteligenÈ›a artificialÄƒ, datele, Ã®ncrederea, comunicarea È™i procesele reale Ã®ntr-o arhitecturÄƒ tehnologicÄƒ comunÄƒ.","ZALâ€™THERA å°†èº«ä»½ã€ä¸Šä¸‹æ–‡ã€äººå·¥æ™ºèƒ½ã€æ•°æ®ã€ä¿¡ä»»ã€é€šä¿¡ä¸ŽçŽ°å®žæµç¨‹è¿žæŽ¥åœ¨ç»Ÿä¸€çš„æŠ€æœ¯æž¶æž„ä¸­ã€‚"]],["home.hero.primary",["System entdecken","Discover the system","Sistemi keÅŸfet","Descubrir el sistema","DÃ©couvrir le systÃ¨me","Scopri il sistema","DescoperÄƒ sistemul","æŽ¢ç´¢ç³»ç»Ÿ"]],["home.hero.core",["ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core","ZALâ€™THERA Core"]],["home.state.label",["SYSTEMSTATUS","SYSTEM STATE","SÄ°STEM DURUMU","ESTADO DEL SISTEMA","Ã‰TAT DU SYSTÃˆME","STATO DEL SISTEMA","STAREA SISTEMULUI","ç³»ç»ŸçŠ¶æ€"]],["home.state.identity",["IDENTITÃ„T","IDENTITY","KÄ°MLÄ°K","IDENTIDAD","IDENTITÃ‰","IDENTITÃ€","IDENTITATE","èº«ä»½"]],["home.state.continuity",["CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY"]],["home.state.intelligence",["INTELLIGENCE","INTELLIGENCE","ZEKÃ‚","INTELIGENCIA","INTELLIGENCE","INTELLIGENZA","INTELIGENÈšÄ‚","æ™ºèƒ½"]],["home.state.communication",["COMMUNICATION","COMMUNICATION","Ä°LETÄ°ÅžÄ°M","COMUNICACIÃ“N","COMMUNICATION","COMUNICAZIONE","COMUNICARE","é€šä¿¡"]],["home.state.industry",["INDUSTRY","INDUSTRY","ENDÃœSTRÄ°","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","å·¥ä¸š"]],["home.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADÄ‚","è¯æ˜Ž"]],["home.state.core",["CORE","CORE","CORE","CORE","CORE","CORE","CORE","CORE"]],["home.state.active",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTÄ°F GELÄ°ÅžTÄ°RME","DESARROLLO ACTIVO","DÃ‰VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVÄ‚","ç§¯æžå¼€å‘ä¸­"]],["home.state.architecture",["ARCHITEKTUR","ARCHITECTURE","MÄ°MARÄ°","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTURÄ‚","æž¶æž„"]],["home.state.module",["SYSTEMMODUL","SYSTEM MODULE","SÄ°STEM MODÃœLÃœ","MÃ“DULO DEL SISTEMA","MODULE SYSTÃˆME","MODULO DI SISTEMA","MODUL DE SISTEM","ç³»ç»Ÿæ¨¡å—"]],["home.system.eyebrow",["EIN SYSTEM","ONE SYSTEM","TEK SÄ°STEM","UN SISTEMA","UN SYSTÃˆME","UN SISTEMA","UN SISTEM","ä¸€ä¸ªç³»ç»Ÿ"]],["home.system.title",["Technologie beginnt nicht mit einer App.","Technology does not begin with an app.","Teknoloji bir uygulamayla baÅŸlamaz.","La tecnologÃ­a no comienza con una app.","La technologie ne commence pas par une application.","La tecnologia non inizia con unâ€™app.","Tehnologia nu Ã®ncepe cu o aplicaÈ›ie.","æŠ€æœ¯å¹¶ä¸æ˜¯ä»Žä¸€ä¸ªåº”ç”¨å¼€å§‹ã€‚"]],["home.system.lead",["Sie beginnt mit einer gemeinsamen Logik dafÃ¼r, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tatsÃ¤chlich ausgefÃ¼hrt werden kann.","It begins with a shared logic for who acts, what is understood, who may be trusted and which action may actually be executed.","Kimin hareket ettiÄŸi, neyin anlaÅŸÄ±ldÄ±ÄŸÄ±, kime gÃ¼venilebileceÄŸi ve hangi eylemin gerÃ§ekten yÃ¼rÃ¼tÃ¼lebileceÄŸine dair ortak bir mantÄ±kla baÅŸlar.","Comienza con una lÃ³gica comÃºn sobre quiÃ©n actÃºa, quÃ© se comprende, en quiÃ©n se puede confiar y quÃ© acciÃ³n puede ejecutarse realmente.","Elle commence par une logique commune : qui agit, ce qui est compris, Ã  qui faire confiance et quelle action peut rÃ©ellement Ãªtre exÃ©cutÃ©e.","Inizia con una logica comune su chi agisce, cosa viene compreso, di chi ci si puÃ² fidare e quale azione puÃ² essere realmente eseguita.","ÃŽncepe cu o logicÄƒ comunÄƒ privind cine acÈ›ioneazÄƒ, ce este Ã®nÈ›eles, Ã®n cine se poate avea Ã®ncredere È™i ce acÈ›iune poate fi executatÄƒ.","å®ƒå§‹äºŽä¸€å¥—å…±åŒé€»è¾‘ï¼šè°åœ¨è¡ŒåŠ¨ã€ç†è§£äº†ä»€ä¹ˆã€å¯ä»¥ä¿¡ä»»è°ï¼Œä»¥åŠä»€ä¹ˆæ“ä½œçœŸæ­£å¯ä»¥æ‰§è¡Œã€‚"]],["home.system.identity.title",["IdentitÃ¤t","Identity","Kimlik","Identidad","IdentitÃ©","IdentitÃ ","Identitate","èº«ä»½"]],["home.system.identity.text",["Wer oder welches autorisierte System handelt?","Who or which authorized system is acting?","Kim veya hangi yetkili sistem hareket ediyor?","Â¿QuiÃ©n o quÃ© sistema autorizado estÃ¡ actuando?","Qui ou quel systÃ¨me autorisÃ© agit ?","Chi o quale sistema autorizzato sta agendo?","Cine sau ce sistem autorizat acÈ›ioneazÄƒ?","è°æˆ–å“ªä¸ªå·²æŽˆæƒç³»ç»Ÿæ­£åœ¨è¡ŒåŠ¨ï¼Ÿ"]],["home.system.context.title",["Kontext","Context","BaÄŸlam","Contexto","Contexte","Contesto","Context","ä¸Šä¸‹æ–‡"]],["home.system.context.text",["In welchem Zusammenhang existieren Information und Handlung?","In what context do information and action exist?","Bilgi ve eylem hangi baÄŸlamda var?","Â¿En quÃ© contexto existen la informaciÃ³n y la acciÃ³n?","Dans quel contexte existent lâ€™information et lâ€™action ?","In quale contesto esistono informazione e azione?","ÃŽn ce context existÄƒ informaÈ›ia È™i acÈ›iunea?","ä¿¡æ¯ä¸Žè¡ŒåŠ¨å­˜åœ¨äºŽä»€ä¹ˆä¸Šä¸‹æ–‡ä¸­ï¼Ÿ"]],["home.system.intelligence.title",["Intelligenz","Intelligence","ZekÃ¢","Inteligencia","Intelligence","Intelligenza","InteligenÈ›Äƒ","æ™ºèƒ½"]],["home.system.intelligence.text",["Was lÃ¤sst sich aus dem vorhandenen Kontext verstehen?","What can be understood from the available context?","Mevcut baÄŸlamdan ne anlaÅŸÄ±labilir?","Â¿QuÃ© puede comprenderse a partir del contexto disponible?","Que peut-on comprendre Ã  partir du contexte disponible ?","Cosa si puÃ² comprendere dal contesto disponibile?","Ce poate fi Ã®nÈ›eles din contextul disponibil?","ä»ŽçŽ°æœ‰ä¸Šä¸‹æ–‡ä¸­å¯ä»¥ç†è§£ä»€ä¹ˆï¼Ÿ"]],["home.system.trust.title",["Vertrauen","Trust","GÃ¼ven","Confianza","Confiance","Fiducia","ÃŽncredere","ä¿¡ä»»"]],["home.system.trust.text",["Was ist erlaubt, belegbar und Ã¼berprÃ¼fbar?","What is permitted, verifiable and accountable?","Neye izin veriliyor, ne kanÄ±tlanabilir ve doÄŸrulanabilir?","Â¿QuÃ© estÃ¡ permitido, puede probarse y verificarse?","Quâ€™est-ce qui est autorisÃ©, prouvable et vÃ©rifiable ?","Cosa Ã¨ consentito, dimostrabile e verificabile?","Ce este permis, demonstrabil È™i verificabil?","ä»€ä¹ˆæ˜¯è¢«å…è®¸ã€å¯è¯æ˜Žå¹¶å¯éªŒè¯çš„ï¼Ÿ"]],["home.system.action.title",["Aktion","Action","Eylem","AcciÃ³n","Action","Azione","AcÈ›iune","æ“ä½œ"]],["home.system.action.text",["Was darf tatsÃ¤chlich ausgefÃ¼hrt werden?","What may actually be executed?","GerÃ§ekte ne yÃ¼rÃ¼tÃ¼lebilir?","Â¿QuÃ© puede ejecutarse realmente?","Quâ€™est-ce qui peut rÃ©ellement Ãªtre exÃ©cutÃ© ?","Cosa puÃ² essere realmente eseguito?","Ce poate fi executat efectiv?","ä»€ä¹ˆæ“ä½œçœŸæ­£å¯ä»¥æ‰§è¡Œï¼Ÿ"]],["home.system.principle",["KERNPRINZIP","CORE PRINCIPLE","TEMEL Ä°LKE","PRINCIPIO CENTRAL","PRINCIPE CENTRAL","PRINCIPIO CENTRALE","PRINCIPIU CENTRAL","æ ¸å¿ƒåŽŸåˆ™"]],["home.system.principleText",["Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.","Understand first. Prepare second. Act only with permission.","Ã–nce anla. Sonra hazÄ±rla. YalnÄ±zca izinle hareket et.","Primero comprender. DespuÃ©s preparar. Actuar solo con permiso.","Comprendre dâ€™abord. PrÃ©parer ensuite. Agir uniquement avec autorisation.","Prima comprendere. Poi preparare. Agire solo con autorizzazione.","Mai Ã®ntÃ¢i Ã®nÈ›elege. Apoi pregÄƒteÈ™te. AcÈ›ioneazÄƒ numai cu permisiune.","å…ˆç†è§£ã€‚å†å‡†å¤‡ã€‚åªæœ‰èŽ·å¾—è®¸å¯åŽæ‰è¡ŒåŠ¨ã€‚"]],["home.system.openArchitecture",["Architektur Ã¶ffnen","Open architecture","Mimariyi aÃ§","Abrir arquitectura","Ouvrir lâ€™architecture","Apri architettura","Deschide arhitectura","æ‰“å¼€æž¶æž„"]],["home.continuity.eyebrow",["PERSÃ–NLICHES SOUVERÃ„NES SYSTEM","PERSONAL SOVEREIGN SYSTEM","KÄ°ÅžÄ°SEL EGEMEN SÄ°STEM","SISTEMA PERSONAL SOBERANO","SYSTÃˆME PERSONNEL SOUVERAIN","SISTEMA PERSONALE SOVRANO","SISTEM PERSONAL SUVERAN","ä¸ªäººä¸»æƒç³»ç»Ÿ"]],["home.continuity.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTÄ°F GELÄ°ÅžTÄ°RME","DESARROLLO ACTIVO","DÃ‰VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVÄ‚","ç§¯æžå¼€å‘ä¸­"]],["home.continuity.tagline",["Dein Lebenskontext. Strukturiert. Verbunden. VerstÃ¤ndlich.","Your life context. Structured. Connected. Understandable.","YaÅŸam baÄŸlamÄ±n. YapÄ±landÄ±rÄ±lmÄ±ÅŸ. BaÄŸlantÄ±lÄ±. AnlaÅŸÄ±lÄ±r.","El contexto de tu vida. Estructurado. Conectado. Comprensible.","Le contexte de votre vie. StructurÃ©. ConnectÃ©. ComprÃ©hensible.","Il contesto della tua vita. Strutturato. Connesso. Comprensibile.","Contextul vieÈ›ii tale. Structurat. Conectat. UÈ™or de Ã®nÈ›eles.","ä½ çš„ç”Ÿæ´»ä¸Šä¸‹æ–‡ã€‚ç»“æž„åŒ–ã€‚è¿žæŽ¥ã€‚å¯ç†è§£ã€‚"]],["home.continuity.text1",["CONTINUITY verbindet persÃ¶nliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souverÃ¤nen persÃ¶nlichen Umgebung.","CONTINUITY connects personal documents, data, Cards, Timeline, finances, evidence and context within a sovereign personal environment.","CONTINUITY; kiÅŸisel belgeleri, verileri, Cards, Timeline, finans, kanÄ±t ve baÄŸlamÄ± egemen bir kiÅŸisel ortamda birleÅŸtirir.","CONTINUITY conecta documentos personales, datos, Cards, Timeline, finanzas, pruebas y contexto en un entorno personal soberano.","CONTINUITY relie documents personnels, donnÃ©es, Cards, Timeline, finances, preuves et contexte dans un environnement personnel souverain.","CONTINUITY collega documenti personali, dati, Cards, Timeline, finanze, prove e contesto in un ambiente personale sovrano.","CONTINUITY conecteazÄƒ documente personale, date, Cards, Timeline, finanÈ›e, dovezi È™i context Ã®ntr-un mediu personal suveran.","CONTINUITY å°†ä¸ªäººæ–‡æ¡£ã€æ•°æ®ã€Cardsã€Timelineã€è´¢åŠ¡ã€è¯æ˜Žä¸Žä¸Šä¸‹æ–‡è¿žæŽ¥åœ¨ä¸€ä¸ªä¸ªäººä¸»æƒçŽ¯å¢ƒä¸­ã€‚"]],["home.continuity.text2",["Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im persÃ¶nlichen System.","Information does not remain as isolated files. It receives context, provenance, temporal reference and a traceable position within the personal system.","Bilgiler yalÄ±tÄ±lmÄ±ÅŸ dosyalar olarak kalmaz. BaÄŸlam, kaynak, zaman iliÅŸkisi ve kiÅŸisel sistem iÃ§inde izlenebilir bir konum kazanÄ±r.","La informaciÃ³n no queda como archivos aislados. Recibe contexto, procedencia, referencia temporal y una posiciÃ³n trazable dentro del sistema personal.","Les informations ne restent pas des fichiers isolÃ©s. Elles reÃ§oivent un contexte, une provenance, un repÃ¨re temporel et une position traÃ§able dans le systÃ¨me personnel.","Le informazioni non restano file isolati. Ricevono contesto, provenienza, riferimento temporale e una posizione tracciabile nel sistema personale.","InformaÈ›iile nu rÄƒmÃ¢n fiÈ™iere izolate. Primesc context, provenienÈ›Äƒ, referinÈ›Äƒ temporalÄƒ È™i o poziÈ›ie trasabilÄƒ Ã®n sistemul personal.","ä¿¡æ¯ä¸ä¼šåœç•™ä¸ºå­¤ç«‹æ–‡ä»¶ï¼Œè€Œä¼šèŽ·å¾—ä¸Šä¸‹æ–‡ã€æ¥æºã€æ—¶é—´å…³è”ä»¥åŠåœ¨ä¸ªäººç³»ç»Ÿä¸­çš„å¯è¿½æº¯ä½ç½®ã€‚"]],["home.continuity.documents",["Dokumente","Documents","Belgeler","Documentos","Documents","Documenti","Documente","æ–‡æ¡£"]],["home.continuity.cards",["Cards","Cards","Cards","Cards","Cards","Cards","Cards","Cards"]],["home.continuity.timeline",["Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline"]],["home.continuity.finance",["Finanzen","Finance","Finans","Finanzas","Finances","Finanze","FinanÈ›e","è´¢åŠ¡"]],["home.continuity.context",["Kontext","Context","BaÄŸlam","Contexto","Contexte","Contesto","Context","ä¸Šä¸‹æ–‡"]],["home.continuity.audit",["Audit","Audit","Denetim","AuditorÃ­a","Audit","Audit","Audit","å®¡è®¡"]],["home.intelligence.eyebrow",["KONTEXTUELLE INTELLIGENZ","CONTEXTUAL INTELLIGENCE","BAÄžLAMSAL ZEKÃ‚","INTELIGENCIA CONTEXTUAL","INTELLIGENCE CONTEXTUELLE","INTELLIGENZA CONTESTUALE","INTELIGENÈšÄ‚ CONTEXTUALÄ‚","ä¸Šä¸‹æ–‡æ™ºèƒ½"]],["home.intelligence.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTÄ°F GELÄ°ÅžTÄ°RME","DESARROLLO ACTIVO","DÃ‰VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVÄ‚","ç§¯æžå¼€å‘ä¸­"]],["home.intelligence.title",["ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence","ZALâ€™THERA Intelligence"]],["home.intelligence.tagline",["Intelligenz, die ihre Grenzen kennt.","Intelligence that knows its limits.","SÄ±nÄ±rlarÄ±nÄ± bilen zekÃ¢.","Inteligencia que conoce sus lÃ­mites.","Une intelligence qui connaÃ®t ses limites.","Intelligenza che conosce i propri limiti.","InteligenÈ›Äƒ care Ã®È™i cunoaÈ™te limitele.","çŸ¥é“è‡ªèº«è¾¹ç•Œçš„æ™ºèƒ½ã€‚"]],["home.intelligence.text1",["Die Intelligenzschicht arbeitet nicht losgelÃ¶st vom Menschen. Sie versteht verfÃ¼gbaren Kontext, erkennt ZusammenhÃ¤nge, erklÃ¤rt Informationen und bereitet mÃ¶gliche Aktionen vor.","The intelligence layer does not operate independently of the human. It understands available context, identifies relationships, explains information and prepares possible actions.","ZekÃ¢ katmanÄ± insandan baÄŸÄ±msÄ±z Ã§alÄ±ÅŸmaz. Mevcut baÄŸlamÄ± anlar, iliÅŸkileri fark eder, bilgiyi aÃ§Ä±klar ve olasÄ± eylemleri hazÄ±rlar.","La capa de inteligencia no funciona separada de la persona. Comprende el contexto disponible, identifica relaciones, explica informaciÃ³n y prepara posibles acciones.","La couche dâ€™intelligence nâ€™agit pas indÃ©pendamment de lâ€™humain. Elle comprend le contexte disponible, identifie les relations, explique lâ€™information et prÃ©pare des actions possibles.","Il livello di intelligenza non opera separato dalla persona. Comprende il contesto disponibile, riconosce relazioni, spiega informazioni e prepara possibili azioni.","Stratul de inteligenÈ›Äƒ nu funcÈ›ioneazÄƒ separat de om. ÃŽnÈ›elege contextul disponibil, identificÄƒ relaÈ›ii, explicÄƒ informaÈ›ii È™i pregÄƒteÈ™te acÈ›iuni posibile.","æ™ºèƒ½å±‚å¹¶ä¸è„±ç¦»äººç‹¬ç«‹è¿è¡Œã€‚å®ƒç†è§£å¯ç”¨ä¸Šä¸‹æ–‡ã€è¯†åˆ«å…³è”ã€è§£é‡Šä¿¡æ¯å¹¶å‡†å¤‡å¯èƒ½çš„æ“ä½œã€‚"]],["home.intelligence.text2",["Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.","Consequential actions remain bound to authorization, context and human approval.","SonuÃ§ doÄŸuran eylemler yetki, baÄŸlam ve insan onayÄ±na baÄŸlÄ± kalÄ±r.","Las acciones con consecuencias permanecen vinculadas a autorizaciÃ³n, contexto y aprobaciÃ³n humana.","Les actions Ã  consÃ©quence restent liÃ©es Ã  lâ€™autorisation, au contexte et Ã  lâ€™approbation humaine.","Le azioni con conseguenze restano vincolate ad autorizzazione, contesto e approvazione umana.","AcÈ›iunile cu consecinÈ›e rÄƒmÃ¢n legate de autorizare, context È™i aprobarea umanÄƒ.","ä¼šäº§ç”ŸåŽæžœçš„æ“ä½œä»å—æƒé™ã€ä¸Šä¸‹æ–‡ä¸Žäººå·¥æŽˆæƒçº¦æŸã€‚"]],["home.communication.eyebrow",["IDENTITÃ„T-ZU-IDENTITÃ„T","IDENTITY-TO-IDENTITY","KÄ°MLÄ°KTEN KÄ°MLÄ°ÄžE","IDENTIDAD A IDENTIDAD","IDENTITÃ‰ Ã€ IDENTITÃ‰","IDENTITÃ€ A IDENTITÃ€","IDENTITATE LA IDENTITATE","èº«ä»½åˆ°èº«ä»½"]],["home.communication.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTÄ°F GELÄ°ÅžTÄ°RME","DESARROLLO ACTIVO","DÃ‰VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVÄ‚","ç§¯æžå¼€å‘ä¸­"]],["home.communication.title",["Communication","Communication","Ä°letiÅŸim","ComunicaciÃ³n","Communication","Comunicazione","Comunicare","é€šä¿¡"]],["home.communication.tagline",["Verbindung beginnt mit IdentitÃ¤t und Zustimmung.","Connection begins with identity and consent.","BaÄŸlantÄ± kimlik ve onayla baÅŸlar.","La conexiÃ³n comienza con identidad y consentimiento.","La connexion commence par lâ€™identitÃ© et le consentement.","La connessione inizia con identitÃ  e consenso.","Conexiunea Ã®ncepe cu identitate È™i consimÈ›ÄƒmÃ¢nt.","è¿žæŽ¥å§‹äºŽèº«ä»½ä¸ŽåŒæ„ã€‚"]],["home.communication.text1",["ZALâ€™THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten IdentitÃ¤ten.","ZALâ€™THERA Communication is developing a secure communication layer between authorized identities.","ZALâ€™THERA Communication, yetkili kimlikler arasÄ±nda gÃ¼venli bir iletiÅŸim katmanÄ± geliÅŸtirir.","ZALâ€™THERA Communication desarrolla una capa de comunicaciÃ³n segura entre identidades autorizadas.","ZALâ€™THERA Communication dÃ©veloppe une couche de communication sÃ©curisÃ©e entre identitÃ©s autorisÃ©es.","ZALâ€™THERA Communication sviluppa un livello di comunicazione sicuro tra identitÃ  autorizzate.","ZALâ€™THERA Communication dezvoltÄƒ un strat sigur de comunicare Ã®ntre identitÄƒÈ›i autorizate.","ZALâ€™THERA Communication æ­£åœ¨æž„å»ºå·²æŽˆæƒèº«ä»½ä¹‹é—´çš„å®‰å…¨é€šä¿¡å±‚ã€‚"]],["home.communication.text2",["Sprache, spÃ¤ter Video, Dateien und vertrauensbasierte Zustellung werden nicht Ã¼ber Ã¶ffentliche Profile definiert, sondern Ã¼ber IdentitÃ¤t, Beziehung und Berechtigung.","Voice, later video, files and trusted delivery are defined not through public profiles, but through identity, relationship and authorization.","Ses, daha sonra video, dosyalar ve gÃ¼vene dayalÄ± teslimat; herkese aÃ§Ä±k profillerle deÄŸil kimlik, iliÅŸki ve yetkiyle tanÄ±mlanÄ±r.","La voz, mÃ¡s adelante el vÃ­deo, los archivos y la entrega de confianza no se definen mediante perfiles pÃºblicos, sino mediante identidad, relaciÃ³n y autorizaciÃ³n.","La voix, puis la vidÃ©o, les fichiers et la livraison de confiance ne sont pas dÃ©finis par des profils publics, mais par lâ€™identitÃ©, la relation et lâ€™autorisation.","Voce, in seguito video, file e consegna basata sulla fiducia non sono definiti tramite profili pubblici, ma tramite identitÃ , relazione e autorizzazione.","Vocea, ulterior video, fiÈ™ierele È™i livrarea bazatÄƒ pe Ã®ncredere nu sunt definite prin profiluri publice, ci prin identitate, relaÈ›ie È™i autorizare.","è¯­éŸ³ã€åŽç»­çš„è§†é¢‘ã€æ–‡ä»¶ä¸Žå¯ä¿¡æŠ•é€’ä¸ç”±å…¬å¼€èµ„æ–™å®šä¹‰ï¼Œè€Œç”±èº«ä»½ã€å…³ç³»ä¸ŽæŽˆæƒå®šä¹‰ã€‚"]],["home.communication.voice",["SPRACHE","VOICE","SES","VOZ","VOIX","VOCE","VOCE","è¯­éŸ³"]],["home.communication.video",["VIDEO","VIDEO","VÄ°DEO","VÃDEO","VIDÃ‰O","VIDEO","VIDEO","è§†é¢‘"]],["home.communication.files",["DATEIEN","FILES","DOSYALAR","ARCHIVOS","FICHIERS","FILE","FIÈ˜IERE","æ–‡ä»¶"]],["home.communication.trust",["VERTRAUEN","TRUST","GÃœVEN","CONFIANZA","CONFIANCE","FIDUCIA","ÃŽNCREDERE","ä¿¡ä»»"]],["home.communication.consent",["ZUSTIMMUNG","CONSENT","ONAY","CONSENTIMIENTO","CONSENTEMENT","CONSENSO","CONSIMÈšÄ‚MÃ‚NT","åŒæ„"]],["home.communication.connectionRule",["ZUSTIMMUNG VOR VERBINDUNG","CONSENT BEFORE CONNECTION","BAÄžLANTIDAN Ã–NCE ONAY","CONSENTIMIENTO ANTES DE LA CONEXIÃ“N","CONSENTEMENT AVANT CONNEXION","CONSENSO PRIMA DELLA CONNESSIONE","CONSIMÈšÄ‚MÃ‚NT ÃŽNAINTE DE CONECTARE","è¿žæŽ¥å‰å…ˆèŽ·å¾—åŒæ„"]],["home.industry.eyebrow",["REALE SYSTEME","REAL-WORLD SYSTEMS","GERÃ‡EK DÃœNYA SÄ°STEMLERÄ°","SISTEMAS DEL MUNDO REAL","SYSTÃˆMES DU MONDE RÃ‰EL","SISTEMI DEL MONDO REALE","SISTEME DIN LUMEA REALÄ‚","çŽ°å®žä¸–ç•Œç³»ç»Ÿ"]],["home.industry.status",["ENTWICKLUNG & ARCHITEKTUR","DEVELOPMENT & ARCHITECTURE","GELÄ°ÅžTÄ°RME & MÄ°MARÄ°","DESARROLLO & ARQUITECTURA","DÃ‰VELOPPEMENT & ARCHITECTURE","SVILUPPO & ARCHITETTURA","DEZVOLTARE & ARHITECTURÄ‚","å¼€å‘ä¸Žæž¶æž„"]],["home.industry.title",["ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry","ZALâ€™THERA Industry"]],["home.industry.tagline",["Reale Prozesse werden zu verstÃ¤ndlichen Systemen.","Real processes become understandable systems.","GerÃ§ek sÃ¼reÃ§ler anlaÅŸÄ±lÄ±r sistemlere dÃ¶nÃ¼ÅŸÃ¼r.","Los procesos reales se convierten en sistemas comprensibles.","Les processus rÃ©els deviennent des systÃ¨mes comprÃ©hensibles.","I processi reali diventano sistemi comprensibili.","Procesele reale devin sisteme uÈ™or de Ã®nÈ›eles.","çŽ°å®žæµç¨‹è½¬åŒ–ä¸ºå¯ç†è§£çš„ç³»ç»Ÿã€‚"]],["home.industry.text",["Die industrielle Schicht verbindet operative Ãœbergaben, ProzesszustÃ¤nde, Sensordaten, Messwerte und zukÃ¼nftige Maschinenanbindungen.","The industrial layer connects operational handovers, process states, sensor data, measurements and future machine integrations.","EndÃ¼striyel katman; operasyonel devirleri, sÃ¼reÃ§ durumlarÄ±nÄ±, sensÃ¶r verilerini, Ã¶lÃ§Ã¼mleri ve gelecekteki makine entegrasyonlarÄ±nÄ± baÄŸlar.","La capa industrial conecta relevos operativos, estados de proceso, datos de sensores, mediciones y futuras integraciones de mÃ¡quinas.","La couche industrielle relie transmissions opÃ©rationnelles, Ã©tats de processus, donnÃ©es de capteurs, mesures et futures intÃ©grations de machines.","Il livello industriale collega passaggi operativi, stati di processo, dati sensore, misurazioni e future integrazioni macchina.","Stratul industrial conecteazÄƒ predÄƒri operaÈ›ionale, stÄƒri de proces, date de senzori, mÄƒsurÄƒtori È™i viitoare integrÄƒri de utilaje.","å·¥ä¸šå±‚è¿žæŽ¥æ“ä½œäº¤æŽ¥ã€æµç¨‹çŠ¶æ€ã€ä¼ æ„Ÿå™¨æ•°æ®ã€æµ‹é‡å€¼ä¸Žæœªæ¥çš„æœºå™¨é›†æˆã€‚"]],["home.industry.shift",["SchichtÃ¼bergabe & operative ZustÃ¤nde","Shift handover & operational states","Vardiya devri & operasyonel durumlar","Relevo de turno & estados operativos","Transmission de poste & Ã©tats opÃ©rationnels","Passaggio turno & stati operativi","Predare schimb & stÄƒri operaÈ›ionale","ç­æ¬¡äº¤æŽ¥ä¸Žè¿è¡ŒçŠ¶æ€"]],["home.industry.gate",["Sensorik, Messwerte & Maschinenprozesse","Sensors, measurements & machine processes","SensÃ¶rler, Ã¶lÃ§Ã¼mler & makine sÃ¼reÃ§leri","Sensores, mediciones & procesos de mÃ¡quina","Capteurs, mesures & processus machine","Sensori, misurazioni & processi macchina","Senzori, mÄƒsurÄƒtori & procese de utilaje","ä¼ æ„Ÿå™¨ã€æµ‹é‡å€¼ä¸Žæœºå™¨æµç¨‹"]],["home.industry.process",["Analyse & nachvollziehbare ProzesszustÃ¤nde","Analysis & traceable process states","Analiz & izlenebilir sÃ¼reÃ§ durumlarÄ±","AnÃ¡lisis & estados de proceso trazables","Analyse & Ã©tats de processus traÃ§ables","Analisi & stati di processo tracciabili","AnalizÄƒ & stÄƒri de proces trasabile","åˆ†æžä¸Žå¯è¿½æº¯æµç¨‹çŠ¶æ€"]],["home.proof.eyebrow",["NACHWEIS & VERTRAUEN","PROOF & TRUST","KANIT & GÃœVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVADÄ‚ & ÃŽNCREDERE","è¯æ˜Žä¸Žä¿¡ä»»"]],["home.proof.title",["Nachweis vor Annahme.","Evidence before assumption.","VarsayÄ±mdan Ã¶nce kanÄ±t.","Prueba antes que suposiciÃ³n.","La preuve avant lâ€™hypothÃ¨se.","La prova prima dellâ€™ipotesi.","Dovada Ã®naintea presupunerii.","å…ˆæœ‰è¯æ®ï¼Œå†ä½œåˆ¤æ–­ã€‚"]],["home.proof.text",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow; gÃ¶revleri, kanÄ±tlarÄ±, fotoÄŸraflarÄ±, notlarÄ±, imzalarÄ±, denetimi ve dÄ±ÅŸa aktarmayÄ± izlenebilir bir akÄ±ÅŸta birleÅŸtirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditorÃ­a y exportaciÃ³n en un flujo trazable.","ProofFlow relie tÃ¢ches, preuves, photos, notes, signatures, audit et export dans un flux traÃ§able.","ProofFlow collega attivitÃ , prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conecteazÄƒ sarcini, dovezi, fotografii, note, semnÄƒturi, audit È™i export Ã®ntr-un flux trasabil.","ProofFlow å°†ä»»åŠ¡ã€è¯æ˜Žã€ç…§ç‰‡ã€å¤‡æ³¨ã€ç­¾åã€å®¡è®¡ä¸Žå¯¼å‡ºè¿žæŽ¥æˆå¯è¿½æº¯æµç¨‹ã€‚"]],["home.proof.open",["ProofFlow Ã¶ffnen","Open ProofFlow","ProofFlowâ€™u aÃ§","Abrir ProofFlow","Ouvrir ProofFlow","Apri ProofFlow","Deschide ProofFlow","æ‰“å¼€ ProofFlow"]],["home.products.eyebrow",["SYSTEMPORTFOLIO","SYSTEM PORTFOLIO","SÄ°STEM PORTFÃ–YÃœ","PORTAFOLIO DEL SISTEMA","PORTEFEUILLE SYSTÃˆME","PORTAFOGLIO SISTEMA","PORTOFOLIU DE SISTEM","ç³»ç»Ÿç»„åˆ"]],["home.products.title",["Ein Ã–kosystem. Unterschiedliche Reifegrade.","One ecosystem. Different levels of maturity.","Tek ekosistem. FarklÄ± olgunluk dÃ¼zeyleri.","Un ecosistema. Distintos niveles de madurez.","Un Ã©cosystÃ¨me. DiffÃ©rents niveaux de maturitÃ©.","Un ecosistema. Diversi livelli di maturitÃ .","Un ecosistem. Niveluri diferite de maturitate.","ä¸€ä¸ªç”Ÿæ€ç³»ç»Ÿã€‚ä¸åŒæˆç†Ÿåº¦ã€‚"]],["home.products.lead",["ZALâ€™THERA trennt klar zwischen verfÃ¼gbaren Produkten, aktiver Entwicklung, Systemmodulen und zukÃ¼nftiger Architektur.","ZALâ€™THERA clearly distinguishes between available products, active development, system modules and future architecture.","ZALâ€™THERA; mevcut Ã¼rÃ¼nleri, aktif geliÅŸtirmeyi, sistem modÃ¼llerini ve gelecekteki mimariyi aÃ§Ä±kÃ§a ayÄ±rÄ±r.","ZALâ€™THERA distingue claramente entre productos disponibles, desarrollo activo, mÃ³dulos del sistema y arquitectura futura.","ZALâ€™THERA distingue clairement les produits disponibles, le dÃ©veloppement actif, les modules systÃ¨me et lâ€™architecture future.","ZALâ€™THERA distingue chiaramente tra prodotti disponibili, sviluppo attivo, moduli di sistema e architettura futura.","ZALâ€™THERA separÄƒ clar produsele disponibile, dezvoltarea activÄƒ, modulele de sistem È™i arhitectura viitoare.","ZALâ€™THERA æ˜Žç¡®åŒºåˆ†å·²å‘å¸ƒäº§å“ã€ç§¯æžå¼€å‘ã€ç³»ç»Ÿæ¨¡å—ä¸Žæœªæ¥æž¶æž„ã€‚"]],["home.products.lifeflow",["Kosten, VertrÃ¤ge, Fristen und persÃ¶nliche FinanzÃ¼bersicht.","Costs, contracts, deadlines and personal financial overview.","Maliyetler, sÃ¶zleÅŸmeler, sÃ¼reler ve kiÅŸisel finans gÃ¶rÃ¼nÃ¼mÃ¼.","Costes, contratos, plazos y visiÃ³n financiera personal.","CoÃ»ts, contrats, Ã©chÃ©ances et vue financiÃ¨re personnelle.","Costi, contratti, scadenze e panoramica finanziaria personale.","Costuri, contracte, termene È™i vedere financiarÄƒ personalÄƒ.","æˆæœ¬ã€åˆåŒã€æœŸé™ä¸Žä¸ªäººè´¢åŠ¡æ¦‚è§ˆã€‚"]],["home.products.continuity",["PersÃ¶nliche souverÃ¤ne Umgebung fÃ¼r Dokumente, Daten, Kontext und Intelligenz.","A personal sovereign environment for documents, data, context and intelligence.","Belgeler, veriler, baÄŸlam ve zekÃ¢ iÃ§in kiÅŸisel egemen ortam.","Un entorno personal soberano para documentos, datos, contexto e inteligencia.","Un environnement personnel souverain pour documents, donnÃ©es, contexte et intelligence.","Un ambiente personale sovrano per documenti, dati, contesto e intelligenza.","Un mediu personal suveran pentru documente, date, context È™i inteligenÈ›Äƒ.","é¢å‘æ–‡æ¡£ã€æ•°æ®ã€ä¸Šä¸‹æ–‡ä¸Žæ™ºèƒ½çš„ä¸ªäººä¸»æƒçŽ¯å¢ƒã€‚"]],["home.products.proofflow",["Nachweise, Audit, Signatur und Ã¼berprÃ¼fbare AblÃ¤ufe.","Evidence, audit, signatures and verifiable workflows.","KanÄ±t, denetim, imza ve doÄŸrulanabilir iÅŸ akÄ±ÅŸlarÄ±.","Pruebas, auditorÃ­a, firmas y flujos verificables.","Preuves, audit, signatures et flux vÃ©rifiables.","Prove, audit, firme e flussi verificabili.","Dovezi, audit, semnÄƒturi È™i fluxuri verificabile.","è¯æ˜Žã€å®¡è®¡ã€ç­¾åä¸Žå¯éªŒè¯æµç¨‹ã€‚"]],["home.products.shiftlog",["Digitale SchichtÃ¼bergabe fÃ¼r operative ZustÃ¤nde und Verantwortlichkeiten.","Digital shift handover for operational states and responsibilities.","Operasyonel durumlar ve sorumluluklar iÃ§in dijital vardiya devri.","Relevo digital de turno para estados operativos y responsabilidades.","Transmission numÃ©rique de poste pour Ã©tats opÃ©rationnels et responsabilitÃ©s.","Passaggio turno digitale per stati operativi e responsabilitÃ .","Predare digitalÄƒ de schimb pentru stÄƒri operaÈ›ionale È™i responsabilitÄƒÈ›i.","é¢å‘è¿è¡ŒçŠ¶æ€ä¸Žè´£ä»»çš„æ•°å­—ç­æ¬¡äº¤æŽ¥ã€‚"]],["home.products.voicebridge",["Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten IdentitÃ¤ten.","Development of a trust-based direct voice connection between authorized identities.","Yetkili kimlikler arasÄ±nda gÃ¼vene dayalÄ± doÄŸrudan ses baÄŸlantÄ±sÄ± geliÅŸtirme.","Desarrollo de una conexiÃ³n de voz directa basada en confianza entre identidades autorizadas.","DÃ©veloppement dâ€™une connexion vocale directe fondÃ©e sur la confiance entre identitÃ©s autorisÃ©es.","Sviluppo di una connessione vocale diretta basata sulla fiducia tra identitÃ  autorizzate.","Dezvoltarea unei conexiuni vocale directe bazate pe Ã®ncredere Ã®ntre identitÄƒÈ›i autorizate.","å¼€å‘å·²æŽˆæƒèº«ä»½ä¹‹é—´åŸºäºŽä¿¡ä»»çš„ç›´æŽ¥è¯­éŸ³è¿žæŽ¥ã€‚"]],["home.products.zalgate",["Architektur fÃ¼r die Verbindung von Sensorik, Messwerten, Maschinen und ProzesszustÃ¤nden.","Architecture connecting sensors, measurements, machines and process states.","SensÃ¶rleri, Ã¶lÃ§Ã¼mleri, makineleri ve sÃ¼reÃ§ durumlarÄ±nÄ± baÄŸlayan mimari.","Arquitectura que conecta sensores, mediciones, mÃ¡quinas y estados de proceso.","Architecture reliant capteurs, mesures, machines et Ã©tats de processus.","Architettura che collega sensori, misurazioni, macchine e stati di processo.","ArhitecturÄƒ care conecteazÄƒ senzori, mÄƒsurÄƒtori, utilaje È™i stÄƒri de proces.","è¿žæŽ¥ä¼ æ„Ÿå™¨ã€æµ‹é‡å€¼ã€æœºå™¨ä¸Žæµç¨‹çŠ¶æ€çš„æž¶æž„ã€‚"]],["home.products.open",["Ã–ffnen â†’","Open â†’","AÃ§ â†’","Abrir â†’","Ouvrir â†’","Apri â†’","Deschide â†’","æ‰“å¼€ â†’"]],["home.products.viewSystem",["System ansehen â†’","View system â†’","Sistemi gÃ¶rÃ¼ntÃ¼le â†’","Ver sistema â†’","Voir le systÃ¨me â†’","Vedi sistema â†’","Vezi sistemul â†’","æŸ¥çœ‹ç³»ç»Ÿ â†’"]],["home.products.viewDevelopment",["Entwicklung ansehen â†’","View development â†’","GeliÅŸtirmeyi gÃ¶rÃ¼ntÃ¼le â†’","Ver desarrollo â†’","Voir le dÃ©veloppement â†’","Vedi sviluppo â†’","Vezi dezvoltarea â†’","æŸ¥çœ‹å¼€å‘ â†’"]],["home.products.viewArchitecture",["Architektur â†’","Architecture â†’","Mimari â†’","Arquitectura â†’","Architecture â†’","Architettura â†’","ArhitecturÄƒ â†’","æž¶æž„ â†’"]],["home.pilot.eyebrow",["KONTROLLIERTER REALER EINSTIEG","CONTROLLED REAL-WORLD ENTRY","KONTROLLÃœ GERÃ‡EK DÃœNYA GÄ°RÄ°ÅžÄ°","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTRÃ‰E CONTRÃ”LÃ‰E DANS LE RÃ‰EL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLATÄ‚ ÃŽN LUMEA REALÄ‚","å—æŽ§çš„çŽ°å®žä¸–ç•Œåˆ‡å…¥"]],["home.pilot.title",["ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot","ZALâ€™THERA Pilot"]],["home.pilot.text",["Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tatsÃ¤chlichen Nutzen prÃ¼fen â€“ ohne den bestehenden Betrieb sofort vollstÃ¤ndig zu ersetzen.","Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.","AÃ§Ä±kÃ§a sÄ±nÄ±rlandÄ±rÄ±lmÄ±ÅŸ gerÃ§ek bir sÃ¼reci anlayÄ±n, kontrollÃ¼ test edin ve mevcut iÅŸletmeyi hemen tamamen deÄŸiÅŸtirmeden gerÃ§ek faydayÄ± doÄŸrulayÄ±n.","Comprender un proceso real claramente delimitado, probarlo de forma controlada y verificar su valor sin sustituir de inmediato la operaciÃ³n existente.","Comprendre un processus rÃ©el clairement dÃ©limitÃ©, le tester de maniÃ¨re contrÃ´lÃ©e et vÃ©rifier sa valeur sans remplacer immÃ©diatement lâ€™existant.","Comprendere un processo reale ben delimitato, testarlo in modo controllato e verificarne il valore senza sostituire subito lâ€™operativitÃ  esistente.","ÃŽnÈ›elege un proces real clar delimitat, testeazÄƒ-l controlat È™i verificÄƒ valoarea fÄƒrÄƒ a Ã®nlocui imediat operaÈ›iunea existentÄƒ.","ç†è§£ä¸€ä¸ªè¾¹ç•Œæ¸…æ™°çš„çŽ°å®žæµç¨‹ï¼Œä»¥å—æŽ§æ–¹å¼æµ‹è¯•å¹¶éªŒè¯å®žé™…ä»·å€¼ï¼Œè€Œæ— éœ€ç«‹å³å…¨é¢æ›¿æ¢çŽ°æœ‰è¿è¡Œã€‚"]],["home.pilot.discover",["Pilot entdecken","Discover Pilot","Pilotâ€™u keÅŸfet","Descubrir Pilot","DÃ©couvrir Pilot","Scopri Pilot","DescoperÄƒ Pilot","æŽ¢ç´¢ Pilot"]],["home.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","SolicitÄƒ Pilot","ç”³è¯· Pilot"]],["home.core.eyebrow",["UNTER JEDEM SYSTEM","BENEATH EVERY SYSTEM","HER SÄ°STEMÄ°N ALTINDA","DEBAJO DE CADA SISTEMA","SOUS CHAQUE SYSTÃˆME","SOTTO OGNI SISTEMA","SUB FIECARE SISTEM","æ¯ä¸ªç³»ç»Ÿä¹‹ä¸‹"]],["home.core.title",["ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE"]],["home.core.text",["Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte AusfÃ¼hrung bilden den technischen Kern hinter dem Ã–kosystem.","Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.","Kimlik, Policy, Onay, Denetim, Ledger, GÃ¼ven ve kontrollÃ¼ yÃ¼rÃ¼tme ekosistemin teknik Ã§ekirdeÄŸini oluÅŸturur.","Identity, Policy, Consent, Audit, Ledger, Trust y la ejecuciÃ³n controlada forman el nÃºcleo tÃ©cnico del ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust et lâ€™exÃ©cution contrÃ´lÃ©e forment le noyau technique de lâ€™Ã©cosystÃ¨me.","Identity, Policy, Consent, Audit, Ledger, Trust ed esecuzione controllata formano il nucleo tecnico dellâ€™ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust È™i execuÈ›ia controlatÄƒ formeazÄƒ nucleul tehnic al ecosistemului.","Identityã€Policyã€Consentã€Auditã€Ledgerã€Trust ä¸Žå—æŽ§æ‰§è¡Œæž„æˆç”Ÿæ€ç³»ç»ŸèƒŒåŽçš„æŠ€æœ¯æ ¸å¿ƒã€‚"]],["home.core.discover",["Core entdecken","Discover Core","Coreâ€™u keÅŸfet","Descubrir Core","DÃ©couvrir Core","Scopri Core","DescoperÄƒ Core","æŽ¢ç´¢ Core"]],["home.contact.eyebrow",["KONTAKT","CONTACT","Ä°LETÄ°ÅžÄ°M","CONTACTO","CONTACT","CONTATTO","CONTACT","è”ç³»"]],["home.contact.title",["ZALâ€™THERA kontaktieren","Contact ZALâ€™THERA","ZALâ€™THERA ile iletiÅŸime geÃ§","Contactar con ZALâ€™THERA","Contacter ZALâ€™THERA","Contatta ZALâ€™THERA","ContacteazÄƒ ZALâ€™THERA","è”ç³» ZALâ€™THERA"]],["home.contact.text",["Fragen zu ZALâ€™THERA, einem System oder bestehenden Modulen?","Questions about ZALâ€™THERA, a system or existing modules?","ZALâ€™THERA, bir sistem veya mevcut modÃ¼ller hakkÄ±nda sorularÄ±nÄ±z mÄ± var?","Â¿Preguntas sobre ZALâ€™THERA, un sistema o mÃ³dulos existentes?","Des questions sur ZALâ€™THERA, un systÃ¨me ou des modules existants ?","Domande su ZALâ€™THERA, un sistema o moduli esistenti?","ÃŽntrebÄƒri despre ZALâ€™THERA, un sistem sau module existente?","å¯¹ ZALâ€™THERAã€æŸä¸ªç³»ç»Ÿæˆ–çŽ°æœ‰æ¨¡å—æœ‰ç–‘é—®ï¼Ÿ"]],["home.contact.name",["Name","Name","Ad","Nombre","Nom","Nome","Nume","å§“å"]],["home.contact.namePlaceholder",["Dein Name","Your name","AdÄ±nÄ±z","Tu nombre","Votre nom","Il tuo nome","Numele tÄƒu","ä½ çš„å§“å"]],["home.contact.email",["E-Mail","Email","E-posta","Correo electrÃ³nico","E-mail","E-mail","E-mail","ç”µå­é‚®ä»¶"]],["home.contact.emailPlaceholder",["deine@email.de","your@email.com","eposta@ornek.com","tu@email.com","votre@email.com","tua@email.com","email@exemplu.ro","you@example.com"]],["home.contact.message",["Nachricht","Message","Mesaj","Mensaje","Message","Messaggio","Mesaj","æ¶ˆæ¯"]],["home.contact.messagePlaceholder",["Deine Nachricht â€¦","Your message â€¦","MesajÄ±nÄ±z â€¦","Tu mensaje â€¦","Votre message â€¦","Il tuo messaggio â€¦","Mesajul tÄƒu â€¦","ä½ çš„æ¶ˆæ¯â€¦"]],["home.contact.send",["Senden","Send","GÃ¶nder","Enviar","Envoyer","Invia","Trimite","å‘é€"]],["home.contact.privacyPrefix",["Mit dem Absenden akzeptierst du unsere","By submitting, you accept our","GÃ¶ndererek ÅŸunu kabul edersiniz:","Al enviar, aceptas nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accepÈ›i","æäº¤å³è¡¨ç¤ºä½ æŽ¥å—æˆ‘ä»¬çš„"]],["home.contact.privacy",["DatenschutzerklÃ¤rung","Privacy Policy","Gizlilik PolitikasÄ±","PolÃ­tica de privacidad","Politique de confidentialitÃ©","Informativa sulla privacy","Politica de confidenÈ›ialitate","éšç§æ”¿ç­–"]],["about.header.chip",["About","About","HakkÄ±nda","Acerca de","Ã€ propos","Chi siamo","Despre","å…³äºŽ"]],["about.hero.kicker",["WHY ZALâ€™THERA EXISTS","WHY ZALâ€™THERA EXISTS","ZALâ€™THERA NEDEN VAR","POR QUÃ‰ EXISTE ZALâ€™THERA","POURQUOI ZALâ€™THERA EXISTE","PERCHÃ‰ ESISTE ZALâ€™THERA","DE CE EXISTÄ‚ ZALâ€™THERA","ZALâ€™THERA ä¸ºä½•å­˜åœ¨"]],["about.hero.product",["BUILT FROM FIRST PRINCIPLES","BUILT FROM FIRST PRINCIPLES","Ä°LK Ä°LKELERDEN Ä°NÅžA EDÄ°LDÄ°","CONSTRUIDO DESDE PRIMEROS PRINCIPIOS","CONSTRUIT Ã€ PARTIR DE PRINCIPES FONDAMENTAUX","COSTRUITO DAI PRINCIPI FONDAMENTALI","CONSTRUIT DIN PRINCIPII FUNDAMENTALE","ä»Žç¬¬ä¸€æ€§åŽŸç†æž„å»º"]],["about.hero.title",["Technology should<br>understand responsibility.","Technology should<br>understand responsibility.","Teknoloji<br>sorumluluÄŸu anlamalÄ±.","La tecnologÃ­a deberÃ­a<br>comprender la responsabilidad.","La technologie devrait<br>comprendre la responsabilitÃ©.","La tecnologia dovrebbe<br>comprendere la responsabilitÃ .","Tehnologia ar trebui<br>sÄƒ Ã®nÈ›eleagÄƒ responsabilitatea.","æŠ€æœ¯åº”è¯¥<br>ç†è§£è´£ä»»ã€‚"]],["about.hero.lead",["ZALâ€™THERA entsteht aus einer einfachen Frage: Wie kÃ¶nnen digitale Systeme intelligenter werden, ohne IdentitÃ¤t, Verantwortung, Nachvollziehbarkeit und menschliche Kontrolle zu verlieren?","ZALâ€™THERA begins with a simple question: How can digital systems become more intelligent without losing identity, responsibility, traceability and human control?","ZALâ€™THERA basit bir sorudan doÄŸar: Dijital sistemler kimlik, sorumluluk, izlenebilirlik ve insan kontrolÃ¼nÃ¼ kaybetmeden nasÄ±l daha akÄ±llÄ± olabilir?","ZALâ€™THERA nace de una pregunta sencilla: Â¿CÃ³mo pueden los sistemas digitales ser mÃ¡s inteligentes sin perder identidad, responsabilidad, trazabilidad y control humano?","ZALâ€™THERA part dâ€™une question simple : comment rendre les systÃ¨mes numÃ©riques plus intelligents sans perdre identitÃ©, responsabilitÃ©, traÃ§abilitÃ© et contrÃ´le humain ?","ZALâ€™THERA nasce da una domanda semplice: come possono i sistemi digitali diventare piÃ¹ intelligenti senza perdere identitÃ , responsabilitÃ , tracciabilitÃ  e controllo umano?","ZALâ€™THERA porneÈ™te de la o Ã®ntrebare simplÄƒ: cum pot sistemele digitale deveni mai inteligente fÄƒrÄƒ a pierde identitatea, responsabilitatea, trasabilitatea È™i controlul uman?","ZALâ€™THERA å§‹äºŽä¸€ä¸ªç®€å•çš„é—®é¢˜ï¼šæ•°å­—ç³»ç»Ÿå¦‚ä½•åœ¨ä¸å¤±åŽ»èº«ä»½ã€è´£ä»»ã€å¯è¿½æº¯æ€§ä¸Žäººå·¥æŽ§åˆ¶çš„å‰æä¸‹å˜å¾—æ›´æ™ºèƒ½ï¼Ÿ"]],["about.hero.principles",["Prinzipien entdecken","Discover principles","Ä°lkeleri keÅŸfet","Descubrir principios","DÃ©couvrir les principes","Scopri i principi","DescoperÄƒ principiile","æŽ¢ç´¢åŽŸåˆ™"]],["about.hero.founder",["Founder","Founder","Kurucu","Fundador","Fondateur","Fondatore","Fondator","åˆ›å§‹äºº"]],["about.hero.localFirst",["LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","æœ¬åœ°ä¼˜å…ˆ"]],["about.hero.sovereign",["SOVEREIGN","SOVEREIGN","EGEMEN","SOBERANO","SOUVERAIN","SOVRANO","SUVERAN","ä¸»æƒ"]],["about.hero.traceable",["TRACEABLE","TRACEABLE","Ä°ZLENEBÄ°LÄ°R","TRAZABLE","TRAÃ‡ABLE","TRACCIABILE","TRASABIL","å¯è¿½æº¯"]],["about.hero.humanAuthorized",["HUMAN-AUTHORIZED","HUMAN-AUTHORIZED","Ä°NSAN TARAFINDAN YETKÄ°LÄ°","AUTORIZADO POR PERSONAS","AUTORISÃ‰ PAR Lâ€™HUMAIN","AUTORIZZATO DALLâ€™UOMO","AUTORIZAT DE OM","äººå·¥æŽˆæƒ"]],["about.principles.eyebrow",["FIRST PRINCIPLES","FIRST PRINCIPLES","Ä°LK Ä°LKELER","PRIMEROS PRINCIPIOS","PRINCIPES FONDAMENTAUX","PRINCIPI FONDAMENTALI","PRINCIPII FUNDAMENTALE","ç¬¬ä¸€æ€§åŽŸç†"]],["about.principles.title",["Digitale Systeme sollten Menschen nicht entmÃ¼ndigen.","Digital systems should not disempower people.","Dijital sistemler insanlarÄ±n yetkisini elinden almamalÄ±.","Los sistemas digitales no deberÃ­an restar autonomÃ­a a las personas.","Les systÃ¨mes numÃ©riques ne devraient pas retirer leur autonomie aux personnes.","I sistemi digitali non dovrebbero togliere autonomia alle persone.","Sistemele digitale nu ar trebui sÄƒ diminueze autonomia oamenilor.","æ•°å­—ç³»ç»Ÿä¸åº”å‰Šå¼±äººçš„è‡ªä¸»æƒã€‚"]],["about.principles.lead",["Je mehr Systeme wissen und vorbereiten kÃ¶nnen, desto wichtiger werden IdentitÃ¤t, Kontext, Berechtigung, Nachweis und klare Verantwortlichkeit.","The more systems can know and prepare, the more important identity, context, authorization, evidence and clear accountability become.","Sistemler ne kadar Ã§ok bilir ve hazÄ±rlÄ±k yapabilirse kimlik, baÄŸlam, yetki, kanÄ±t ve aÃ§Ä±k sorumluluk o kadar Ã¶nemli olur.","Cuanto mÃ¡s pueden saber y preparar los sistemas, mÃ¡s importantes son la identidad, el contexto, la autorizaciÃ³n, la evidencia y la responsabilidad clara.","Plus les systÃ¨mes peuvent savoir et prÃ©parer, plus lâ€™identitÃ©, le contexte, lâ€™autorisation, la preuve et la responsabilitÃ© claire deviennent essentiels.","PiÃ¹ i sistemi possono sapere e preparare, piÃ¹ diventano importanti identitÃ , contesto, autorizzazione, prova e responsabilitÃ  chiara.","Cu cÃ¢t sistemele pot È™ti È™i pregÄƒti mai mult, cu atÃ¢t identitatea, contextul, autorizarea, dovada È™i responsabilitatea clarÄƒ devin mai importante.","ç³»ç»ŸçŸ¥é“å’Œå‡†å¤‡å¾—è¶Šå¤šï¼Œèº«ä»½ã€ä¸Šä¸‹æ–‡ã€æŽˆæƒã€è¯æ®ä¸Žæ¸…æ™°è´£ä»»å°±è¶Šé‡è¦ã€‚"]],["about.principles.identity.title",["Identity belongs to the person.","Identity belongs to the person.","Kimlik kiÅŸiye aittir.","La identidad pertenece a la persona.","Lâ€™identitÃ© appartient Ã  la personne.","Lâ€™identitÃ  appartiene alla persona.","Identitatea aparÈ›ine persoanei.","èº«ä»½å±žäºŽä¸ªäººã€‚"]],["about.principles.identity.text",["Digitale IdentitÃ¤t soll nicht von einer einzelnen App, Plattform oder Sitzung abhÃ¤ngig sein.","Digital identity should not depend on a single app, platform or session.","Dijital kimlik tek bir uygulamaya, platforma veya oturuma baÄŸlÄ± olmamalÄ±.","La identidad digital no deberÃ­a depender de una sola app, plataforma o sesiÃ³n.","Lâ€™identitÃ© numÃ©rique ne devrait pas dÃ©pendre dâ€™une seule application, plateforme ou session.","Lâ€™identitÃ  digitale non dovrebbe dipendere da una singola app, piattaforma o sessione.","Identitatea digitalÄƒ nu ar trebui sÄƒ depindÄƒ de o singurÄƒ aplicaÈ›ie, platformÄƒ sau sesiune.","æ•°å­—èº«ä»½ä¸åº”ä¾èµ–æŸä¸ªå•ä¸€åº”ç”¨ã€å¹³å°æˆ–ä¼šè¯ã€‚"]],["about.principles.context.title",["Context must remain understandable.","Context must remain understandable.","BaÄŸlam anlaÅŸÄ±lÄ±r kalmalÄ±.","El contexto debe seguir siendo comprensible.","Le contexte doit rester comprÃ©hensible.","Il contesto deve restare comprensibile.","Contextul trebuie sÄƒ rÄƒmÃ¢nÄƒ uÈ™or de Ã®nÈ›eles.","ä¸Šä¸‹æ–‡å¿…é¡»ä¿æŒå¯ç†è§£ã€‚"]],["about.principles.context.text",["Information gewinnt Bedeutung durch Herkunft, Beziehung, Zeitpunkt und Zusammenhang.","Information gains meaning through provenance, relationship, time and context.","Bilgi; kaynak, iliÅŸki, zaman ve baÄŸlamla anlam kazanÄ±r.","La informaciÃ³n adquiere significado mediante procedencia, relaciÃ³n, tiempo y contexto.","Lâ€™information prend du sens par sa provenance, sa relation, son moment et son contexte.","Lâ€™informazione acquista significato tramite provenienza, relazione, tempo e contesto.","InformaÈ›ia capÄƒtÄƒ sens prin provenienÈ›Äƒ, relaÈ›ie, timp È™i context.","ä¿¡æ¯é€šè¿‡æ¥æºã€å…³ç³»ã€æ—¶é—´ä¸Žä¸Šä¸‹æ–‡èŽ·å¾—æ„ä¹‰ã€‚"]],["about.principles.trust.title",["Trust should be verifiable.","Trust should be verifiable.","GÃ¼ven doÄŸrulanabilir olmalÄ±.","La confianza debe ser verificable.","La confiance doit Ãªtre vÃ©rifiable.","La fiducia dovrebbe essere verificabile.","ÃŽncrederea ar trebui sÄƒ fie verificabilÄƒ.","ä¿¡ä»»åº”å½“å¯éªŒè¯ã€‚"]],["about.principles.trust.text",["Vertrauen soll aus nachvollziehbaren ZustÃ¤nden, Berechtigungen und Nachweisen entstehen.","Trust should emerge from traceable states, permissions and evidence.","GÃ¼ven, izlenebilir durumlar, yetkiler ve kanÄ±tlardan doÄŸmalÄ±.","La confianza debe surgir de estados, permisos y pruebas trazables.","La confiance doit naÃ®tre dâ€™Ã©tats, de permissions et de preuves traÃ§ables.","La fiducia dovrebbe nascere da stati, autorizzazioni e prove tracciabili.","ÃŽncrederea ar trebui sÄƒ rezulte din stÄƒri, permisiuni È™i dovezi trasabile.","ä¿¡ä»»åº”æ¥è‡ªå¯è¿½æº¯çŠ¶æ€ã€æƒé™ä¸Žè¯æ®ã€‚"]],["about.principles.authority.title",["Authority remains explicit.","Authority remains explicit.","Yetki aÃ§Ä±k kalÄ±r.","La autoridad permanece explÃ­cita.","Lâ€™autoritÃ© reste explicite.","Lâ€™autoritÃ  resta esplicita.","Autoritatea rÄƒmÃ¢ne explicitÄƒ.","æƒåŠ›å¿…é¡»æ˜Žç¡®ã€‚"]],["about.principles.authority.text",["Intelligenz darf vorbereiten. Konsequente Aktionen benÃ¶tigen Autorisierung.","Intelligence may prepare. Consequential actions require authorization.","ZekÃ¢ hazÄ±rlayabilir. SonuÃ§ doÄŸuran eylemler yetki gerektirir.","La inteligencia puede preparar. Las acciones con consecuencias requieren autorizaciÃ³n.","Lâ€™intelligence peut prÃ©parer. Les actions Ã  consÃ©quence nÃ©cessitent une autorisation.","Lâ€™intelligenza puÃ² preparare. Le azioni con conseguenze richiedono autorizzazione.","InteligenÈ›a poate pregÄƒti. AcÈ›iunile cu consecinÈ›e necesitÄƒ autorizare.","æ™ºèƒ½å¯ä»¥å‡†å¤‡ã€‚ä¼šäº§ç”ŸåŽæžœçš„æ“ä½œéœ€è¦æŽˆæƒã€‚"]],["about.architecture.eyebrow",["ONE ARCHITECTURE","ONE ARCHITECTURE","TEK MÄ°MARÄ°","UNA ARQUITECTURA","UNE ARCHITECTURE","UNâ€™ARCHITETTURA","O ARHITECTURÄ‚","ç»Ÿä¸€æž¶æž„"]],["about.architecture.title",["ZALâ€™THERA ist nicht als Sammlung isolierter Apps gedacht.","ZALâ€™THERA is not designed as a collection of isolated apps.","ZALâ€™THERA, birbirinden kopuk uygulamalar koleksiyonu olarak tasarlanmadÄ±.","ZALâ€™THERA no estÃ¡ concebido como una colecciÃ³n de apps aisladas.","ZALâ€™THERA nâ€™est pas conÃ§u comme une collection dâ€™applications isolÃ©es.","ZALâ€™THERA non Ã¨ pensato come una raccolta di app isolate.","ZALâ€™THERA nu este conceput ca o colecÈ›ie de aplicaÈ›ii izolate.","ZALâ€™THERA å¹¶éžè¢«è®¾è®¡æˆä¸€ç»„å­¤ç«‹åº”ç”¨ã€‚"]],["about.architecture.text",["CONTINUITY, Proof, Communication, Intelligence und industrielle Systeme folgen einer gemeinsamen Logik: IdentitÃ¤t, Kontext, Vertrauen, Audit und kontrollierte Aktion.","CONTINUITY, Proof, Communication, Intelligence and industrial systems follow a shared logic: identity, context, trust, audit and controlled action.","CONTINUITY, Proof, Communication, Intelligence ve endÃ¼striyel sistemler ortak bir mantÄ±ÄŸÄ± izler: kimlik, baÄŸlam, gÃ¼ven, denetim ve kontrollÃ¼ eylem.","CONTINUITY, Proof, Communication, Intelligence y los sistemas industriales siguen una lÃ³gica comÃºn: identidad, contexto, confianza, auditorÃ­a y acciÃ³n controlada.","CONTINUITY, Proof, Communication, Intelligence et les systÃ¨mes industriels suivent une logique commune : identitÃ©, contexte, confiance, audit et action contrÃ´lÃ©e.","CONTINUITY, Proof, Communication, Intelligence e i sistemi industriali seguono una logica comune: identitÃ , contesto, fiducia, audit e azione controllata.","CONTINUITY, Proof, Communication, Intelligence È™i sistemele industriale urmeazÄƒ o logicÄƒ comunÄƒ: identitate, context, Ã®ncredere, audit È™i acÈ›iune controlatÄƒ.","CONTINUITYã€Proofã€Communicationã€Intelligence ä¸Žå·¥ä¸šç³»ç»Ÿéµå¾ªå…±åŒé€»è¾‘ï¼šèº«ä»½ã€ä¸Šä¸‹æ–‡ã€ä¿¡ä»»ã€å®¡è®¡ä¸Žå—æŽ§æ“ä½œã€‚"]],["about.architecture.systems",["Systeme ansehen","View systems","Sistemleri gÃ¶rÃ¼ntÃ¼le","Ver sistemas","Voir les systÃ¨mes","Vedi sistemi","Vezi sistemele","æŸ¥çœ‹ç³»ç»Ÿ"]],["about.founder.eyebrow",["FOUNDER","FOUNDER","KURUCU","FUNDADOR","FONDATEUR","FONDATORE","FONDATOR","åˆ›å§‹äºº"]],["about.founder.tagline",["Founder and builder of ZALâ€™THERA.","Founder and builder of ZALâ€™THERA.","ZALâ€™THERAâ€™nÄ±n kurucusu ve geliÅŸtiricisi.","Fundador y creador de ZALâ€™THERA.","Fondateur et bÃ¢tisseur de ZALâ€™THERA.","Fondatore e costruttore di ZALâ€™THERA.","Fondator È™i creator al ZALâ€™THERA.","ZALâ€™THERA çš„åˆ›å§‹äººä¸Žæž„å»ºè€…ã€‚"]],["about.founder.text1",["ZALâ€™THERA entsteht aus dem Ziel, digitale Systeme nicht nur leistungsfÃ¤higer, sondern verstÃ¤ndlicher, verantwortlicher und souverÃ¤ner zu machen.","ZALâ€™THERA is built with the goal of making digital systems not only more capable, but also more understandable, responsible and sovereign.","ZALâ€™THERA, dijital sistemleri yalnÄ±zca daha gÃ¼Ã§lÃ¼ deÄŸil, daha anlaÅŸÄ±lÄ±r, sorumlu ve egemen hale getirme hedefiyle geliÅŸtiriliyor.","ZALâ€™THERA nace con el objetivo de hacer los sistemas digitales no solo mÃ¡s capaces, sino tambiÃ©n mÃ¡s comprensibles, responsables y soberanos.","ZALâ€™THERA est construit avec lâ€™objectif de rendre les systÃ¨mes numÃ©riques non seulement plus puissants, mais aussi plus comprÃ©hensibles, responsables et souverains.","ZALâ€™THERA nasce con lâ€™obiettivo di rendere i sistemi digitali non solo piÃ¹ capaci, ma anche piÃ¹ comprensibili, responsabili e sovrani.","ZALâ€™THERA este construit cu scopul de a face sistemele digitale nu doar mai capabile, ci È™i mai uÈ™or de Ã®nÈ›eles, responsabile È™i suverane.","ZALâ€™THERA çš„ç›®æ ‡ä¸ä»…æ˜¯è®©æ•°å­—ç³»ç»Ÿæ›´å¼ºå¤§ï¼Œä¹Ÿè®©å®ƒä»¬æ›´å¯ç†è§£ã€æ›´è´Ÿè´£ä»»ã€æ›´å…·ä¸»æƒæ€§ã€‚"]],["about.founder.text2",["Der Schwerpunkt liegt auf Systemarchitekturen, die persÃ¶nliche Daten, IdentitÃ¤t, kÃ¼nstliche Intelligenz, Kommunikation, Nachweise und reale Prozesse miteinander verbinden, ohne menschliche AutoritÃ¤t unsichtbar zu ersetzen.","The focus is on system architectures that connect personal data, identity, artificial intelligence, communication, evidence and real-world processes without invisibly replacing human authority.","Odak; kiÅŸisel verileri, kimliÄŸi, yapay zekÃ¢yÄ±, iletiÅŸimi, kanÄ±tlarÄ± ve gerÃ§ek sÃ¼reÃ§leri insan yetkisini gÃ¶rÃ¼nmez biÃ§imde deÄŸiÅŸtirmeden baÄŸlayan sistem mimarileridir.","El foco estÃ¡ en arquitecturas de sistemas que conectan datos personales, identidad, inteligencia artificial, comunicaciÃ³n, pruebas y procesos reales sin sustituir de forma invisible la autoridad humana.","Lâ€™accent porte sur des architectures qui relient donnÃ©es personnelles, identitÃ©, intelligence artificielle, communication, preuves et processus rÃ©els sans remplacer invisiblement lâ€™autoritÃ© humaine.","Lâ€™attenzione Ã¨ su architetture di sistema che collegano dati personali, identitÃ , intelligenza artificiale, comunicazione, prove e processi reali senza sostituire invisibilmente lâ€™autoritÃ  umana.","Accentul este pus pe arhitecturi de sistem care conecteazÄƒ date personale, identitate, inteligenÈ›Äƒ artificialÄƒ, comunicare, dovezi È™i procese reale fÄƒrÄƒ a Ã®nlocui invizibil autoritatea umanÄƒ.","é‡ç‚¹æ˜¯æž„å»ºèƒ½å¤Ÿè¿žæŽ¥ä¸ªäººæ•°æ®ã€èº«ä»½ã€äººå·¥æ™ºèƒ½ã€é€šä¿¡ã€è¯æ˜Žä¸ŽçŽ°å®žæµç¨‹çš„ç³»ç»Ÿæž¶æž„ï¼ŒåŒæ—¶ä¸ä»¥ä¸å¯è§æ–¹å¼å–ä»£äººçš„æƒåŠ›ã€‚"]],["about.founder.discover",["ZALâ€™THERA entdecken","Discover ZALâ€™THERA","ZALâ€™THERAâ€™yÄ± keÅŸfet","Descubrir ZALâ€™THERA","DÃ©couvrir ZALâ€™THERA","Scopri ZALâ€™THERA","DescoperÄƒ ZALâ€™THERA","æŽ¢ç´¢ ZALâ€™THERA"]],["about.founder.role",["Founder Â· Systems Architecture","Founder Â· Systems Architecture","Kurucu Â· Sistem Mimarisi","Fundador Â· Arquitectura de Sistemas","Fondateur Â· Architecture des SystÃ¨mes","Fondatore Â· Architettura dei Sistemi","Fondator Â· ArhitecturÄƒ de Sisteme","åˆ›å§‹äºº Â· ç³»ç»Ÿæž¶æž„"]],["about.direction.eyebrow",["THE DIRECTION","THE DIRECTION","YÃ–N","LA DIRECCIÃ“N","LA DIRECTION","LA DIREZIONE","DIRECÈšIA","æ–¹å‘"]],["about.direction.title",["Intelligence should increase capability without removing accountability.","Intelligence should increase capability without removing accountability.","ZekÃ¢, hesap verebilirliÄŸi ortadan kaldÄ±rmadan yeteneÄŸi artÄ±rmalÄ±.","La inteligencia deberÃ­a aumentar la capacidad sin eliminar la responsabilidad.","Lâ€™intelligence devrait accroÃ®tre les capacitÃ©s sans supprimer la responsabilitÃ©.","Lâ€™intelligenza dovrebbe aumentare le capacitÃ  senza eliminare la responsabilitÃ .","InteligenÈ›a ar trebui sÄƒ creascÄƒ capacitatea fÄƒrÄƒ a elimina responsabilitatea.","æ™ºèƒ½åº”æå‡èƒ½åŠ›ï¼Œè€Œä¸å–æ¶ˆè´£ä»»ã€‚"]],["about.direction.text",["Je mÃ¤chtiger ein digitales System wird, desto wichtiger werden nachvollziehbare Grenzen, klare IdentitÃ¤t und bewusste Autorisierung.","The more powerful a digital system becomes, the more important traceable boundaries, clear identity and deliberate authorization become.","Dijital bir sistem ne kadar gÃ¼Ã§lÃ¼ olursa izlenebilir sÄ±nÄ±rlar, aÃ§Ä±k kimlik ve bilinÃ§li yetkilendirme o kadar Ã¶nemli olur.","Cuanto mÃ¡s potente es un sistema digital, mÃ¡s importantes son los lÃ­mites trazables, la identidad clara y la autorizaciÃ³n consciente.","Plus un systÃ¨me numÃ©rique devient puissant, plus les limites traÃ§ables, lâ€™identitÃ© claire et lâ€™autorisation consciente deviennent importantes.","PiÃ¹ un sistema digitale diventa potente, piÃ¹ diventano importanti limiti tracciabili, identitÃ  chiara e autorizzazione consapevole.","Cu cÃ¢t un sistem digital devine mai puternic, cu atÃ¢t limitele trasabile, identitatea clarÄƒ È™i autorizarea conÈ™tientÄƒ devin mai importante.","æ•°å­—ç³»ç»Ÿè¶Šå¼ºå¤§ï¼Œå¯è¿½æº¯è¾¹ç•Œã€æ¸…æ™°èº«ä»½ä¸Žæœ‰æ„è¯†çš„æŽˆæƒå°±è¶Šé‡è¦ã€‚"]],["about.direction.back",["ZurÃ¼ck zum System","Back to the system","Sisteme dÃ¶n","Volver al sistema","Retour au systÃ¨me","Torna al sistema","ÃŽnapoi la sistem","è¿”å›žç³»ç»Ÿ"]],["lifeflow.hero.kicker",["PERSONAL FINANCE CLARITY","PERSONAL FINANCE CLARITY","KÄ°ÅžÄ°SEL FÄ°NANS NETLÄ°ÄžÄ°","CLARIDAD FINANCIERA PERSONAL","CLARTÃ‰ FINANCIÃˆRE PERSONNELLE","CHIAREZZA FINANZIARIA PERSONALE","CLARITATE FINANCIARÄ‚ PERSONALÄ‚","ä¸ªäººè´¢åŠ¡æ¸…æ™°åº¦"]],["lifeflow.hero.title",["See what comes in.<br>See what goes out.<br>Know what remains.","See what comes in.<br>See what goes out.<br>Know what remains.","Ne geliyor gÃ¶r.<br>Ne gidiyor gÃ¶r.<br>Ne kaldÄ±ÄŸÄ±nÄ± bil.","Ve lo que entra.<br>Ve lo que sale.<br>Sabe lo que queda.","Voyez ce qui entre.<br>Voyez ce qui sort.<br>Sachez ce qui reste.","Vedi cosa entra.<br>Vedi cosa esce.<br>Saprai cosa resta.","Vezi ce intrÄƒ.<br>Vezi ce iese.<br>È˜tii ce rÄƒmÃ¢ne.","çœ‹æ¸…æ”¶å…¥ã€‚<br>çœ‹æ¸…æ”¯å‡ºã€‚<br>çŸ¥é“è¿˜å‰©å¤šå°‘ã€‚"]],["lifeflow.hero.lead",["LifeFlow macht laufende Kosten, VertrÃ¤ge, Fristen und finanzielle Verpflichtungen sichtbar â€“ fokussiert, verstÃ¤ndlich und ohne unnÃ¶tige KomplexitÃ¤t.","LifeFlow makes recurring costs, contracts, deadlines and financial obligations visible â€” focused, understandable and without unnecessary complexity.","LifeFlow; dÃ¼zenli maliyetleri, sÃ¶zleÅŸmeleri, sÃ¼releri ve finansal yÃ¼kÃ¼mlÃ¼lÃ¼kleri gÃ¶rÃ¼nÃ¼r kÄ±lar â€” odaklÄ±, anlaÅŸÄ±lÄ±r ve gereksiz karmaÅŸÄ±klÄ±k olmadan.","LifeFlow hace visibles los costes recurrentes, contratos, plazos y obligaciones financieras, de forma enfocada, comprensible y sin complejidad innecesaria.","LifeFlow rend visibles les coÃ»ts rÃ©currents, contrats, Ã©chÃ©ances et obligations financiÃ¨res â€” de faÃ§on ciblÃ©e, comprÃ©hensible et sans complexitÃ© inutile.","LifeFlow rende visibili costi ricorrenti, contratti, scadenze e obblighi finanziari â€” in modo focalizzato, comprensibile e senza complessitÃ  inutile.","LifeFlow face vizibile costurile recurente, contractele, termenele È™i obligaÈ›iile financiare â€” clar, concentrat È™i fÄƒrÄƒ complexitate inutilÄƒ.","LifeFlow è®©æŒç»­æˆæœ¬ã€åˆåŒã€æœŸé™ä¸Žè´¢åŠ¡ä¹‰åŠ¡æ¸…æ™°å¯è§â€”â€”èšç„¦ã€æ˜“æ‡‚ä¸”æ²¡æœ‰ä¸å¿…è¦çš„å¤æ‚æ€§ã€‚"]],["lifeflow.hero.view",["LifeFlow ansehen","View LifeFlow","LifeFlowâ€™u gÃ¶rÃ¼ntÃ¼le","Ver LifeFlow","Voir LifeFlow","Vedi LifeFlow","Vezi LifeFlow","æŸ¥çœ‹ LifeFlow"]],["lifeflow.hero.understand",["System verstehen","Understand the system","Sistemi anla","Entender el sistema","Comprendre le systÃ¨me","Comprendi il sistema","ÃŽnÈ›elege sistemul","ç†è§£ç³»ç»Ÿ"]],["lifeflow.hero.costs",["COSTS","COSTS","MALÄ°YETLER","COSTES","COÃ›TS","COSTI","COSTURI","æˆæœ¬"]],["lifeflow.hero.contracts",["CONTRACTS","CONTRACTS","SÃ–ZLEÅžMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","åˆåŒ"]],["lifeflow.hero.deadlines",["DEADLINES","DEADLINES","SÃœRELER","PLAZOS","Ã‰CHÃ‰ANCES","SCADENZE","TERMENE","æœŸé™"]],["lifeflow.hero.moneyView",["MONEY VIEW","MONEY VIEW","PARA GÃ–RÃœNÃœMÃœ","VISTA FINANCIERA","VUE FINANCIÃˆRE","VISTA FINANZIARIA","VIZIUNE FINANCIARÄ‚","èµ„é‡‘è§†å›¾"]],["lifeflow.state.label",["FINANCE VIEW","FINANCE VIEW","FÄ°NANS GÃ–RÃœNÃœMÃœ","VISTA FINANCIERA","VUE FINANCIÃˆRE","VISTA FINANZIARIA","VIZIUNE FINANCIARÄ‚","è´¢åŠ¡è§†å›¾"]],["lifeflow.state.income",["INCOME","INCOME","GELÄ°R","INGRESOS","REVENUS","ENTRATE","VENIT","æ”¶å…¥"]],["lifeflow.state.visible",["VISIBLE","VISIBLE","GÃ–RÃœNÃœR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","å¯è§"]],["lifeflow.state.costs",["COSTS","COSTS","MALÄ°YETLER","COSTES","COÃ›TS","COSTI","COSTURI","æˆæœ¬"]],["lifeflow.state.tracked",["TRACKED","TRACKED","TAKÄ°P EDÄ°LÄ°YOR","REGISTRADOS","SUIVIS","TRACCIATI","URMÄ‚RITE","å·²è·Ÿè¸ª"]],["lifeflow.state.contracts",["CONTRACTS","CONTRACTS","SÃ–ZLEÅžMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","åˆåŒ"]],["lifeflow.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMIÅž","ESTRUCTURADOS","STRUCTURÃ‰S","STRUTTURATI","STRUCTURATE","å·²ç»“æž„åŒ–"]],["lifeflow.state.deadlines",["DEADLINES","DEADLINES","SÃœRELER","PLAZOS","Ã‰CHÃ‰ANCES","SCADENZE","TERMENE","æœŸé™"]],["lifeflow.state.known",["KNOWN","KNOWN","BÄ°LÄ°NÄ°YOR","CONOCIDOS","CONNUES","NOTE","CUNOSCUTE","å·²çŸ¥"]],["lifeflow.state.remainder",["REMAINDER","REMAINDER","KALAN","RESTANTE","RESTE","RESIDUO","REST","ä½™é¢"]],["lifeflow.state.calculated",["CALCULATED","CALCULATED","HESAPLANDI","CALCULADO","CALCULÃ‰","CALCOLATO","CALCULAT","å·²è®¡ç®—"]],["lifeflow.problem.eyebrow",["FINANCIAL VISIBILITY","FINANCIAL VISIBILITY","FÄ°NANSAL GÃ–RÃœNÃœRLÃœK","VISIBILIDAD FINANCIERA","VISIBILITÃ‰ FINANCIÃˆRE","VISIBILITÃ€ FINANZIARIA","VIZIBILITATE FINANCIARÄ‚","è´¢åŠ¡å¯è§æ€§"]],["lifeflow.problem.title",["Kleine Verpflichtungen werden groÃŸ, wenn sie unsichtbar bleiben.","Small obligations become large when they remain invisible.","KÃ¼Ã§Ã¼k yÃ¼kÃ¼mlÃ¼lÃ¼kler gÃ¶rÃ¼nmez kaldÄ±ÄŸÄ±nda bÃ¼yÃ¼r.","Las pequeÃ±as obligaciones se vuelven grandes cuando permanecen invisibles.","Les petites obligations deviennent importantes lorsquâ€™elles restent invisibles.","I piccoli impegni diventano grandi quando restano invisibili.","ObligaÈ›iile mici devin mari cÃ¢nd rÄƒmÃ¢n invizibile.","å°ä¹‰åŠ¡åœ¨çœ‹ä¸è§æ—¶ä¼šå˜æˆå¤§é—®é¢˜ã€‚"]],["lifeflow.problem.lead",["Viele laufende Kosten sind einzeln Ã¼berschaubar. Das Problem entsteht, wenn VertrÃ¤ge, Fristen und wiederkehrende Zahlungen keinen gemeinsamen Ãœberblick haben.","Many recurring costs are manageable on their own. The problem begins when contracts, deadlines and recurring payments lack a shared overview.","BirÃ§ok dÃ¼zenli maliyet tek baÅŸÄ±na yÃ¶netilebilir. Sorun, sÃ¶zleÅŸmelerin, sÃ¼relerin ve tekrarlayan Ã¶demelerin ortak bir gÃ¶rÃ¼nÃ¼mÃ¼ olmadÄ±ÄŸÄ±nda baÅŸlar.","Muchos costes recurrentes son manejables por separado. El problema aparece cuando contratos, plazos y pagos recurrentes no comparten una visiÃ³n comÃºn.","De nombreux coÃ»ts rÃ©currents sont gÃ©rables isolÃ©ment. Le problÃ¨me apparaÃ®t lorsque contrats, Ã©chÃ©ances et paiements rÃ©currents nâ€™ont pas de vue dâ€™ensemble.","Molti costi ricorrenti sono gestibili singolarmente. Il problema nasce quando contratti, scadenze e pagamenti ricorrenti non hanno una vista comune.","Multe costuri recurente sunt gestionabile separat. Problema apare cÃ¢nd contractele, termenele È™i plÄƒÈ›ile recurente nu au o imagine comunÄƒ.","è®¸å¤šæŒç»­æˆæœ¬å•ç‹¬çœ‹éƒ½å¯æŽ§ã€‚é—®é¢˜åœ¨äºŽåˆåŒã€æœŸé™ä¸Žé‡å¤ä»˜æ¬¾ç¼ºå°‘ç»Ÿä¸€è§†å›¾ã€‚"]],["lifeflow.problem.overview.title",["Kein Gesamtbild","No complete picture","Genel gÃ¶rÃ¼nÃ¼m yok","Sin visiÃ³n global","Pas de vue dâ€™ensemble","Nessun quadro completo","FÄƒrÄƒ imagine completÄƒ","æ²¡æœ‰å…¨å±€è§†å›¾"]],["lifeflow.problem.overview.text",["Einkommen und Ausgaben werden getrennt wahrgenommen, statt gemeinsam betrachtet.","Income and expenses are perceived separately instead of being viewed together.","Gelir ve giderler birlikte deÄŸil ayrÄ± algÄ±lanÄ±r.","Ingresos y gastos se perciben por separado en vez de verse juntos.","Revenus et dÃ©penses sont perÃ§us sÃ©parÃ©ment au lieu dâ€™Ãªtre vus ensemble.","Entrate e uscite vengono percepite separatamente invece che insieme.","Veniturile È™i cheltuielile sunt percepute separat, nu Ã®mpreunÄƒ.","æ”¶å…¥ä¸Žæ”¯å‡ºè¢«åˆ†å¼€çœ‹å¾…ï¼Œè€Œä¸æ˜¯ç»Ÿä¸€ç†è§£ã€‚"]],["lifeflow.problem.deadlines.title",["Fristen verschwinden","Deadlines disappear","SÃ¼reler gÃ¶zden kaybolur","Los plazos desaparecen","Les Ã©chÃ©ances disparaissent","Le scadenze spariscono","Termenele dispar","æœŸé™è¢«å¿½ç•¥"]],["lifeflow.problem.deadlines.text",["Vertrags- und KÃ¼ndigungsdaten werden erst relevant, wenn es bereits zu spÃ¤t ist.","Contract and cancellation dates become relevant only when it is already too late.","SÃ¶zleÅŸme ve iptal tarihleri ancak Ã§ok geÃ§ olduÄŸunda fark edilir.","Las fechas de contrato y cancelaciÃ³n se vuelven relevantes cuando ya es demasiado tarde.","Les dates de contrat et de rÃ©siliation deviennent importantes lorsquâ€™il est dÃ©jÃ  trop tard.","Le date di contratto e disdetta diventano rilevanti quando Ã¨ giÃ  troppo tardi.","Datele contractuale È™i de reziliere devin relevante cÃ¢nd este deja prea tÃ¢rziu.","åˆåŒä¸Žå–æ¶ˆæ—¥æœŸå¾€å¾€åœ¨å·²ç»å¤ªæ™šæ—¶æ‰å—åˆ°é‡è§†ã€‚"]],["lifeflow.problem.remainder.title",["Restbetrag bleibt GefÃ¼hl","Remainder remains a feeling","Kalan tutar bir his olarak kalÄ±r","El restante queda como una sensaciÃ³n","Le reste demeure une impression","Il residuo resta una sensazione","Restul rÄƒmÃ¢ne o impresie","å‰©ä½™é‡‘é¢åªæ˜¯æ„Ÿè§‰"]],["lifeflow.problem.remainder.text",["Ohne klare Ãœbersicht ist schwer einzuschÃ¤tzen, wie viel finanzieller Spielraum tatsÃ¤chlich bleibt.","Without a clear overview, it is difficult to know how much financial flexibility actually remains.","AÃ§Ä±k bir gÃ¶rÃ¼nÃ¼m olmadan gerÃ§ekte ne kadar finansal alan kaldÄ±ÄŸÄ±nÄ± deÄŸerlendirmek zordur.","Sin una visiÃ³n clara, es difÃ­cil saber cuÃ¡nto margen financiero queda realmente.","Sans vue claire, il est difficile de savoir quelle marge financiÃ¨re reste rÃ©ellement.","Senza una vista chiara Ã¨ difficile capire quanto margine finanziario rimanga davvero.","FÄƒrÄƒ o imagine clarÄƒ este greu de estimat cÃ¢t spaÈ›iu financiar rÄƒmÃ¢ne efectiv.","æ²¡æœ‰æ¸…æ™°è§†å›¾ï¼Œå°±å¾ˆéš¾åˆ¤æ–­çœŸæ­£è¿˜å‰©å¤šå°‘è´¢åŠ¡ç©ºé—´ã€‚"]],["lifeflow.system.eyebrow",["LIFEFLOW SYSTEM","LIFEFLOW SYSTEM","LIFEFLOW SÄ°STEMÄ°","SISTEMA LIFEFLOW","SYSTÃˆME LIFEFLOW","SISTEMA LIFEFLOW","SISTEM LIFEFLOW","LIFEFLOW ç³»ç»Ÿ"]],["lifeflow.system.title",["Finanzielle AlltagsrealitÃ¤t an einem Ort.","Everyday financial reality in one place.","GÃ¼nlÃ¼k finansal gerÃ§eklik tek yerde.","La realidad financiera diaria en un solo lugar.","La rÃ©alitÃ© financiÃ¨re quotidienne en un seul endroit.","La realtÃ  finanziaria quotidiana in un unico posto.","Realitatea financiarÄƒ de zi cu zi Ã®ntr-un singur loc.","æ—¥å¸¸è´¢åŠ¡çŽ°å®žé›†ä¸­åœ¨ä¸€ä¸ªåœ°æ–¹ã€‚"]],["lifeflow.system.lead",["LifeFlow konzentriert sich bewusst auf das, was regelmÃ¤ÃŸig sichtbar sein muss.","LifeFlow deliberately focuses on what needs to stay visible regularly.","LifeFlow bilinÃ§li olarak dÃ¼zenli biÃ§imde gÃ¶rÃ¼nÃ¼r kalmasÄ± gerekenlere odaklanÄ±r.","LifeFlow se centra deliberadamente en lo que debe permanecer visible de forma regular.","LifeFlow se concentre volontairement sur ce qui doit rester visible rÃ©guliÃ¨rement.","LifeFlow si concentra volutamente su ciÃ² che deve restare visibile con regolaritÃ .","LifeFlow se concentreazÄƒ Ã®n mod deliberat pe ceea ce trebuie sÄƒ rÄƒmÃ¢nÄƒ vizibil regulat.","LifeFlow æœ‰æ„è¯†åœ°èšç„¦äºŽéœ€è¦æŒç»­ä¿æŒå¯è§çš„å†…å®¹ã€‚"]],["lifeflow.system.contracts.title",["Contracts","Contracts","SÃ¶zleÅŸmeler","Contratos","Contrats","Contratti","Contracte","åˆåŒ"]],["lifeflow.system.contracts.text",["Laufende VertrÃ¤ge, Startdaten, Enddaten und Fristen im Blick behalten.","Keep recurring contracts, start dates, end dates and deadlines in view.","Devam eden sÃ¶zleÅŸmeleri, baÅŸlangÄ±Ã§ ve bitiÅŸ tarihlerini ve sÃ¼releri takip edin.","MantÃ©n a la vista contratos, fechas de inicio y fin y plazos.","Gardez Ã  lâ€™Å“il contrats, dates de dÃ©but et de fin et Ã©chÃ©ances.","Tieni sotto controllo contratti, date di inizio e fine e scadenze.","Èšine sub control contractele, datele de Ã®nceput È™i sfÃ¢rÈ™it È™i termenele.","æŒç»­æŽŒæ¡åˆåŒã€å¼€å§‹æ—¥æœŸã€ç»“æŸæ—¥æœŸä¸ŽæœŸé™ã€‚"]],["lifeflow.system.costs.title",["Costs","Costs","Maliyetler","Costes","CoÃ»ts","Costi","Costuri","æˆæœ¬"]],["lifeflow.system.costs.text",["Wiederkehrende finanzielle Verpflichtungen strukturiert sichtbar machen.","Make recurring financial obligations visible in a structured way.","Tekrarlayan finansal yÃ¼kÃ¼mlÃ¼lÃ¼kleri yapÄ±landÄ±rÄ±lmÄ±ÅŸ biÃ§imde gÃ¶rÃ¼nÃ¼r kÄ±lÄ±n.","Haz visibles de forma estructurada las obligaciones financieras recurrentes.","Rendez visibles de faÃ§on structurÃ©e les obligations financiÃ¨res rÃ©currentes.","Rendi visibili in modo strutturato gli obblighi finanziari ricorrenti.","FÄƒ vizibile structurat obligaÈ›iile financiare recurente.","ä»¥ç»“æž„åŒ–æ–¹å¼å‘ˆçŽ°é‡å¤è´¢åŠ¡ä¹‰åŠ¡ã€‚"]],["lifeflow.system.money.title",["Money View","Money View","Para GÃ¶rÃ¼nÃ¼mÃ¼","Vista financiera","Vue financiÃ¨re","Vista finanziaria","Viziune financiarÄƒ","èµ„é‡‘è§†å›¾"]],["lifeflow.system.money.text",["Einkommen, Kosten, Schulden und verbleibenden Betrag zusammen betrachten.","View income, costs, debt and remaining amount together.","Gelir, maliyet, borÃ§ ve kalan tutarÄ± birlikte gÃ¶rÃ¼ntÃ¼leyin.","Consulta juntos ingresos, costes, deudas y cantidad restante.","Visualisez ensemble revenus, coÃ»ts, dettes et montant restant.","Guarda insieme entrate, costi, debiti e importo rimanente.","PriveÈ™te Ã®mpreunÄƒ veniturile, costurile, datoriile È™i suma rÄƒmasÄƒ.","å°†æ”¶å…¥ã€æˆæœ¬ã€å€ºåŠ¡ä¸Žå‰©ä½™é‡‘é¢æ”¾åœ¨ä¸€èµ·æŸ¥çœ‹ã€‚"]],["lifeflow.system.status.title",["Status","Status","Durum","Estado","Statut","Stato","Stare","çŠ¶æ€"]],["lifeflow.system.status.text",["Finanzielle Lage schneller und verstÃ¤ndlicher einschÃ¤tzen.","Assess your financial situation faster and more clearly.","Finansal durumu daha hÄ±zlÄ± ve anlaÅŸÄ±lÄ±r deÄŸerlendirin.","EvalÃºa la situaciÃ³n financiera mÃ¡s rÃ¡pido y con mayor claridad.","Ã‰valuez plus rapidement et clairement la situation financiÃ¨re.","Valuta la situazione finanziaria piÃ¹ rapidamente e con maggiore chiarezza.","EvalueazÄƒ situaÈ›ia financiarÄƒ mai rapid È™i mai clar.","æ›´å¿«ã€æ›´æ¸…æ™°åœ°è¯„ä¼°è´¢åŠ¡çŠ¶å†µã€‚"]],["lifeflow.continuity.eyebrow",["FROM LIFEFLOW TO CONTINUITY","FROM LIFEFLOW TO CONTINUITY","LIFEFLOWâ€™DAN CONTINUITYâ€™YE","DE LIFEFLOW A CONTINUITY","DE LIFEFLOW Ã€ CONTINUITY","DA LIFEFLOW A CONTINUITY","DE LA LIFEFLOW LA CONTINUITY","ä»Ž LIFEFLOW åˆ° CONTINUITY"]],["lifeflow.continuity.title",["LifeFlow bleibt fokussiert. CONTINUITY geht weiter.","LifeFlow stays focused. CONTINUITY goes further.","LifeFlow odaklÄ± kalÄ±r. CONTINUITY daha ileri gider.","LifeFlow se mantiene enfocado. CONTINUITY va mÃ¡s allÃ¡.","LifeFlow reste ciblÃ©. CONTINUITY va plus loin.","LifeFlow resta focalizzato. CONTINUITY va oltre.","LifeFlow rÄƒmÃ¢ne concentrat. CONTINUITY merge mai departe.","LifeFlow ä¿æŒèšç„¦ï¼ŒCONTINUITY æ›´è¿›ä¸€æ­¥ã€‚"]],["lifeflow.continuity.text",["LifeFlow ist ein eigenstÃ¤ndig nutzbares, fokussiertes Produkt fÃ¼r Kosten, VertrÃ¤ge und Fristen. CONTINUITY entwickelt daraus eine wesentlich grÃ¶ÃŸere persÃ¶nliche Umgebung fÃ¼r Dokumente, Finance, Cards, Timeline, Herkunft und Kontext.","LifeFlow is a focused standalone product for costs, contracts and deadlines. CONTINUITY expands this into a much broader personal environment for documents, finance, Cards, Timeline, provenance and context.","LifeFlow maliyetler, sÃ¶zleÅŸmeler ve sÃ¼reler iÃ§in baÄŸÄ±msÄ±z, odaklÄ± bir Ã¼rÃ¼ndÃ¼r. CONTINUITY bunu belgeler, finans, Cards, Timeline, kaynak ve baÄŸlam iÃ§in Ã§ok daha geniÅŸ bir kiÅŸisel ortama dÃ¶nÃ¼ÅŸtÃ¼rÃ¼r.","LifeFlow es un producto independiente y enfocado para costes, contratos y plazos. CONTINUITY lo amplÃ­a a un entorno personal mucho mayor para documentos, finanzas, Cards, Timeline, procedencia y contexto.","LifeFlow est un produit autonome et ciblÃ© pour coÃ»ts, contrats et Ã©chÃ©ances. CONTINUITY lâ€™Ã©tend Ã  un environnement personnel beaucoup plus vaste pour documents, finances, Cards, Timeline, provenance et contexte.","LifeFlow Ã¨ un prodotto autonomo e focalizzato per costi, contratti e scadenze. CONTINUITY lo estende a un ambiente personale molto piÃ¹ ampio per documenti, finanze, Cards, Timeline, provenienza e contesto.","LifeFlow este un produs autonom È™i focalizat pentru costuri, contracte È™i termene. CONTINUITY Ã®l extinde Ã®ntr-un mediu personal mult mai amplu pentru documente, finanÈ›e, Cards, Timeline, provenienÈ›Äƒ È™i context.","LifeFlow æ˜¯é¢å‘æˆæœ¬ã€åˆåŒä¸ŽæœŸé™çš„ç‹¬ç«‹èšç„¦äº§å“ã€‚CONTINUITY å°†å…¶æ‰©å±•ä¸ºæ›´å¤§çš„ä¸ªäººçŽ¯å¢ƒï¼Œæ¶µç›–æ–‡æ¡£ã€è´¢åŠ¡ã€Cardsã€Timelineã€æ¥æºä¸Žä¸Šä¸‹æ–‡ã€‚"]],["lifeflow.continuity.view",["CONTINUITY ansehen","View CONTINUITY","CONTINUITYâ€™yi gÃ¶rÃ¼ntÃ¼le","Ver CONTINUITY","Voir CONTINUITY","Vedi CONTINUITY","Vezi CONTINUITY","æŸ¥çœ‹ CONTINUITY"]],["lifeflow.offer.eyebrow",["AVAILABLE","AVAILABLE","MEVCUT","DISPONIBLE","DISPONIBLE","DISPONIBILE","DISPONIBIL","å·²å‘å¸ƒ"]],["lifeflow.offer.text",["Ein fokussierter Einstieg in persÃ¶nliche FinanzÃ¼bersicht.","A focused entry point into personal financial overview.","KiÅŸisel finans gÃ¶rÃ¼nÃ¼mÃ¼ne odaklÄ± bir giriÅŸ.","Una entrada enfocada a la visiÃ³n financiera personal.","Une entrÃ©e ciblÃ©e dans la vue financiÃ¨re personnelle.","Un ingresso focalizzato nella panoramica finanziaria personale.","Un punct de intrare concentrat Ã®n imaginea financiarÄƒ personalÄƒ.","ä¸ªäººè´¢åŠ¡æ¦‚è§ˆçš„èšç„¦å…¥å£ã€‚"]],["lifeflow.offer.appStore",["Im App Store ansehen","View in the App Store","App Storeâ€™da gÃ¶rÃ¼ntÃ¼le","Ver en App Store","Voir dans lâ€™App Store","Vedi su App Store","Vezi Ã®n App Store","åœ¨ App Store æŸ¥çœ‹"]],["lifeflow.offer.legalPrefix",["Mit dem Kauf gelten unsere","By purchasing, our","SatÄ±n alma ile ÅŸu ÅŸartlar geÃ§erlidir:","Con la compra se aplican nuestros","Avec lâ€™achat sâ€™appliquent nos","Con lâ€™acquisto si applicano i nostri","Prin cumpÄƒrare se aplicÄƒ","è´­ä¹°å³é€‚ç”¨æˆ‘ä»¬çš„"]],["lifeflow.offer.terms",["AGB","Terms","Åžartlar","TÃ©rminos","CGV","Termini","Termeni","æ¡æ¬¾"]],["lifeflow.offer.legalMiddle",["und unsere","and our","ve","y nuestra","et notre","e la nostra","È™i","ä»¥åŠæˆ‘ä»¬çš„"]],["lifeflow.offer.withdrawal",["Widerrufsbelehrung","Withdrawal Policy","Cayma PolitikasÄ±","PolÃ­tica de desistimiento","Politique de rÃ©tractation","Informativa sul recesso","Politica de retragere","æ’¤é”€è¯´æ˜Ž"]],["lifeflow.offer.legalAnd",[".",".",".",".",".",".",".","ã€‚"]],["lifeflow.offer.model",["MODELL","MODEL","MODEL","MODELO","MODÃˆLE","MODELLO","MODEL","æ¨¡å¼"]],["lifeflow.offer.oneTime",["Einmalkauf","One-time purchase","Tek seferlik satÄ±n alma","Compra Ãºnica","Achat unique","Acquisto una tantum","AchiziÈ›ie unicÄƒ","ä¸€æ¬¡æ€§è´­ä¹°"]],["lifeflow.offer.subscription",["ABO","SUBSCRIPTION","ABONELÄ°K","SUSCRIPCIÃ“N","ABONNEMENT","ABBONAMENTO","ABONAMENT","è®¢é˜…"]],["lifeflow.offer.none",["Kein Abo","No subscription","Abonelik yok","Sin suscripciÃ³n","Sans abonnement","Nessun abbonamento","FÄƒrÄƒ abonament","æ— è®¢é˜…"]],["lifeflow.offer.platform",["PLATTFORM","PLATFORM","PLATFORM","PLATAFORMA","PLATEFORME","PIATTAFORMA","PLATFORMÄ‚","å¹³å°"]],["lifeflow.offer.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","çŠ¶æ€"]],["lifeflow.faq.title",["FAQ","FAQ","SSS","FAQ","FAQ","FAQ","FAQ","å¸¸è§é—®é¢˜"]],["lifeflow.faq.subscription.question",["Gibt es ein Abo?","Is there a subscription?","Abonelik var mÄ±?","Â¿Hay suscripciÃ³n?","Y a-t-il un abonnement ?","Câ€™Ã¨ un abbonamento?","ExistÄƒ abonament?","æœ‰è®¢é˜…å—ï¼Ÿ"]],["lifeflow.faq.subscription.answer",["Nein. LifeFlow ist als Einmalkauf vorgesehen.","No. LifeFlow is intended as a one-time purchase.","HayÄ±r. LifeFlow tek seferlik satÄ±n alma olarak tasarlanmÄ±ÅŸtÄ±r.","No. LifeFlow estÃ¡ previsto como compra Ãºnica.","Non. LifeFlow est prÃ©vu comme achat unique.","No. LifeFlow Ã¨ previsto come acquisto una tantum.","Nu. LifeFlow este conceput ca achiziÈ›ie unicÄƒ.","æ²¡æœ‰ã€‚LifeFlow è®¾è®¡ä¸ºä¸€æ¬¡æ€§è´­ä¹°ã€‚"]],["lifeflow.faq.continuity.question",["Ist LifeFlow dasselbe wie CONTINUITY?","Is LifeFlow the same as CONTINUITY?","LifeFlow, CONTINUITY ile aynÄ± mÄ±?","Â¿LifeFlow es lo mismo que CONTINUITY?","LifeFlow est-il identique Ã  CONTINUITY ?","LifeFlow Ã¨ lo stesso di CONTINUITY?","LifeFlow este acelaÈ™i lucru cu CONTINUITY?","LifeFlow å’Œ CONTINUITY æ˜¯åŒä¸€ä¸ªä¸œè¥¿å—ï¼Ÿ"]],["lifeflow.faq.continuity.answer",["Nein. LifeFlow bleibt ein fokussiertes Produkt. CONTINUITY entwickelt eine deutlich umfassendere persÃ¶nliche Systemumgebung.","No. LifeFlow remains a focused product. CONTINUITY is developing a much broader personal system environment.","HayÄ±r. LifeFlow odaklÄ± bir Ã¼rÃ¼n olarak kalÄ±r. CONTINUITY Ã§ok daha kapsamlÄ± bir kiÅŸisel sistem ortamÄ± geliÅŸtirir.","No. LifeFlow sigue siendo un producto enfocado. CONTINUITY desarrolla un entorno de sistema personal mucho mÃ¡s amplio.","Non. LifeFlow reste un produit ciblÃ©. CONTINUITY dÃ©veloppe un environnement personnel beaucoup plus large.","No. LifeFlow resta un prodotto focalizzato. CONTINUITY sviluppa un ambiente personale molto piÃ¹ ampio.","Nu. LifeFlow rÄƒmÃ¢ne un produs focalizat. CONTINUITY dezvoltÄƒ un mediu personal mult mai amplu.","ä¸æ˜¯ã€‚LifeFlow ä¿æŒä¸ºèšç„¦äº§å“ï¼ŒCONTINUITY æ­£åœ¨æž„å»ºæ›´å¹¿æ³›çš„ä¸ªäººç³»ç»ŸçŽ¯å¢ƒã€‚"]],["lifeflow.faq.platform.question",["Auf welcher Plattform ist LifeFlow verfÃ¼gbar?","Which platform is LifeFlow available on?","LifeFlow hangi platformda mevcut?","Â¿En quÃ© plataforma estÃ¡ disponible LifeFlow?","Sur quelle plateforme LifeFlow est-il disponible ?","Su quale piattaforma Ã¨ disponibile LifeFlow?","Pe ce platformÄƒ este disponibil LifeFlow?","LifeFlow åœ¨å“ªä¸ªå¹³å°å¯ç”¨ï¼Ÿ"]],["lifeflow.faq.platform.answer",["LifeFlow ist fÃ¼r iPhone / iOS vorgesehen.","LifeFlow is intended for iPhone / iOS.","LifeFlow iPhone / iOS iÃ§in tasarlanmÄ±ÅŸtÄ±r.","LifeFlow estÃ¡ previsto para iPhone / iOS.","LifeFlow est prÃ©vu pour iPhone / iOS.","LifeFlow Ã¨ previsto per iPhone / iOS.","LifeFlow este destinat pentru iPhone / iOS.","LifeFlow é¢å‘ iPhone / iOSã€‚"]],["lifeflow.contact.title",["Fragen zu LifeFlow?","Questions about LifeFlow?","LifeFlow hakkÄ±nda sorularÄ±nÄ±z mÄ± var?","Â¿Preguntas sobre LifeFlow?","Des questions sur LifeFlow ?","Domande su LifeFlow?","ÃŽntrebÄƒri despre LifeFlow?","å¯¹ LifeFlow æœ‰ç–‘é—®ï¼Ÿ"]],["lifeflow.contact.text",["Schreib uns direkt.","Write to us directly.","Bize doÄŸrudan yazÄ±n.","EscrÃ­benos directamente.","Ã‰crivez-nous directement.","Scrivici direttamente.","Scrie-ne direct.","ç›´æŽ¥è”ç³»æˆ‘ä»¬ã€‚"]],["lifeflow.contact.question",["Frage zu LifeFlow","Question about LifeFlow","LifeFlow hakkÄ±nda soru","Pregunta sobre LifeFlow","Question sur LifeFlow","Domanda su LifeFlow","ÃŽntrebare despre LifeFlow","å…³äºŽ LifeFlow çš„é—®é¢˜"]],["lifeflow.contact.messagePlaceholder",["Deine Frage zu LifeFlow â€¦","Your question about LifeFlow â€¦","LifeFlow hakkÄ±ndaki sorunuz â€¦","Tu pregunta sobre LifeFlow â€¦","Votre question sur LifeFlow â€¦","La tua domanda su LifeFlow â€¦","ÃŽntrebarea ta despre LifeFlow â€¦","ä½ å…³äºŽ LifeFlow çš„é—®é¢˜â€¦"]],["lifeflow.footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","RÃ©tractation","Recesso","Retragere","æ’¤é”€"]],["pilot.header.chip",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.hero.kicker",["CONTROLLED REAL-WORLD ENTRY","CONTROLLED REAL-WORLD ENTRY","KONTROLLÃœ GERÃ‡EK DÃœNYA GÄ°RÄ°ÅžÄ°","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTRÃ‰E CONTRÃ”LÃ‰E DANS LE RÃ‰EL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLATÄ‚ ÃŽN LUMEA REALÄ‚","å—æŽ§çš„çŽ°å®žä¸–ç•Œåˆ‡å…¥"]],["pilot.hero.title",["ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT","ZALâ€™THERA PILOT"]],["pilot.hero.lead",["Start small. Test reality. Prove value.","Start small. Test reality. Prove value.","KÃ¼Ã§Ã¼k baÅŸla. GerÃ§eÄŸi test et. DeÄŸeri kanÄ±tla.","Empieza pequeÃ±o. Prueba la realidad. Demuestra valor.","Commencez petit. Testez le rÃ©el. Prouvez la valeur.","Inizia in piccolo. Testa la realtÃ . Dimostra il valore.","ÃŽncepe mic. TesteazÄƒ realitatea. DovedeÈ™te valoarea.","ä»Žå°å¤„å¼€å§‹ã€‚æµ‹è¯•çŽ°å®žã€‚è¯æ˜Žä»·å€¼ã€‚"]],["pilot.hero.understand",["Pilot verstehen","Understand Pilot","Pilotâ€™u anla","Entender Pilot","Comprendre Pilot","Comprendi Pilot","ÃŽnÈ›elege Pilot","äº†è§£ Pilot"]],["pilot.hero.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","SolicitÄƒ Pilot","ç”³è¯· Pilot"]],["pilot.hero.scoped",["SCOPED","SCOPED","SINIRLI","DELIMITADO","DÃ‰LIMITÃ‰","DELIMITATO","DELIMITAT","èŒƒå›´æ˜Žç¡®"]],["pilot.hero.controlled",["CONTROLLED","CONTROLLED","KONTROLLÃœ","CONTROLADO","CONTRÃ”LÃ‰","CONTROLLATO","CONTROLAT","å—æŽ§"]],["pilot.hero.measurable",["MEASURABLE","MEASURABLE","Ã–LÃ‡ÃœLEBÄ°LÄ°R","MEDIBLE","MESURABLE","MISURABILE","MÄ‚SURABIL","å¯è¡¡é‡"]],["pilot.hero.reviewable",["REVIEWABLE","REVIEWABLE","Ä°NCELENEBÄ°LÄ°R","REVISABLE","RÃ‰EXAMINABLE","REVISIONABILE","REVIZUIBIL","å¯è¯„å®¡"]],["pilot.state.label",["PILOT STATE","PILOT STATE","PÄ°LOT DURUMU","ESTADO DEL PILOT","Ã‰TAT DU PILOT","STATO DEL PILOT","STAREA PILOTULUI","Pilot çŠ¶æ€"]],["pilot.state.realProcess",["REAL PROCESS","REAL PROCESS","GERÃ‡EK SÃœREÃ‡","PROCESO REAL","PROCESSUS RÃ‰EL","PROCESSO REALE","PROCES REAL","çŽ°å®žæµç¨‹"]],["pilot.state.scope",["SCOPE","SCOPE","KAPSAM","ALCANCE","PÃ‰RIMÃˆTRE","AMBITO","SCOP","èŒƒå›´"]],["pilot.state.defined",["DEFINED","DEFINED","TANIMLI","DEFINIDO","DÃ‰FINI","DEFINITO","DEFINIT","å·²å®šä¹‰"]],["pilot.state.model",["MODEL","MODEL","MODEL","MODELO","MODÃˆLE","MODELLO","MODEL","æ¨¡åž‹"]],["pilot.state.prepared",["PREPARED","PREPARED","HAZIR","PREPARADO","PRÃ‰PARÃ‰","PREPARATO","PREGÄ‚TIT","å·²å‡†å¤‡"]],["pilot.state.test",["TEST","TEST","TEST","PRUEBA","TEST","TEST","TEST","æµ‹è¯•"]],["pilot.state.controlled",["CONTROLLED","CONTROLLED","KONTROLLÃœ","CONTROLADO","CONTRÃ”LÃ‰","CONTROLLATO","CONTROLAT","å—æŽ§"]],["pilot.state.result",["RESULT","RESULT","SONUÃ‡","RESULTADO","RÃ‰SULTAT","RISULTATO","REZULTAT","ç»“æžœ"]],["pilot.state.measured",["MEASURED","MEASURED","Ã–LÃ‡ÃœLDÃœ","MEDIDO","MESURÃ‰","MISURATO","MÄ‚SURAT","å·²è¡¡é‡"]],["pilot.state.decision",["DECISION","DECISION","KARAR","DECISIÃ“N","DÃ‰CISION","DECISIONE","DECIZIE","å†³ç­–"]],["pilot.state.reviewed",["REVIEWED","REVIEWED","Ä°NCELENDÄ°","REVISADA","EXAMINÃ‰E","REVISIONATA","REVIZUITÄ‚","å·²è¯„å®¡"]],["pilot.focus.eyebrow",["PILOT FOCUS","PILOT FOCUS","PÄ°LOT ODAÄžI","ENFOQUE DEL PILOT","FOCUS DU PILOT","FOCUS DEL PILOT","FOCUS PILOT","Pilot èšç„¦"]],["pilot.focus.title",["Nicht das ganze Unternehmen muss sich Ã¤ndern.","The whole company does not have to change.","TÃ¼m ÅŸirketin deÄŸiÅŸmesi gerekmez.","No tiene que cambiar toda la empresa.","Toute lâ€™entreprise nâ€™a pas besoin de changer.","Non deve cambiare tutta lâ€™azienda.","Nu trebuie sÄƒ se schimbe Ã®ntreaga companie.","ä¸éœ€è¦æ•´ä¸ªä¼ä¸šéƒ½æ”¹å˜ã€‚"]],["pilot.focus.lead",["Ein Pilot begrenzt das Problem, den Prozess und die Messung des tatsÃ¤chlichen Nutzens.","A pilot limits the problem, process and measurement of actual value.","Pilot; problemi, sÃ¼reci ve gerÃ§ek faydanÄ±n Ã¶lÃ§Ã¼mÃ¼nÃ¼ sÄ±nÄ±rlar.","Un pilot delimita el problema, el proceso y la mediciÃ³n del valor real.","Un pilot dÃ©limite le problÃ¨me, le processus et la mesure de la valeur rÃ©elle.","Un pilot delimita problema, processo e misurazione del valore reale.","Un pilot delimiteazÄƒ problema, procesul È™i mÄƒsurarea valorii reale.","Pilot ä¼šé™åˆ¶é—®é¢˜ã€æµç¨‹ä»¥åŠå®žé™…ä»·å€¼çš„è¡¡é‡èŒƒå›´ã€‚"]],["pilot.focus.proof.title",["Proof","Proof","KanÄ±t","Prueba","Preuve","Prova","DovadÄƒ","è¯æ˜Ž"]],["pilot.focus.proof.text",["Was muss spÃ¤ter nachvollziehbar oder Ã¼berprÃ¼fbar sein?","What must later be traceable or verifiable?","Daha sonra neyin izlenebilir veya doÄŸrulanabilir olmasÄ± gerekir?","Â¿QuÃ© debe poder rastrearse o verificarse despuÃ©s?","Quâ€™est-ce qui doit Ãªtre traÃ§able ou vÃ©rifiable ensuite ?","Cosa deve essere tracciabile o verificabile in seguito?","Ce trebuie sÄƒ poatÄƒ fi trasat sau verificat ulterior?","ä¹‹åŽä»€ä¹ˆå¿…é¡»å¯è¿½æº¯æˆ–å¯éªŒè¯ï¼Ÿ"]],["pilot.focus.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","äº¤æŽ¥"]],["pilot.focus.handover.text",["Wo gehen Informationen, ZustÃ¤nde oder Verantwortung verloren?","Where are information, states or responsibility lost?","Bilgi, durum veya sorumluluk nerede kayboluyor?","Â¿DÃ³nde se pierden informaciÃ³n, estados o responsabilidad?","OÃ¹ se perdent informations, Ã©tats ou responsabilitÃ© ?","Dove si perdono informazioni, stati o responsabilitÃ ?","Unde se pierd informaÈ›ii, stÄƒri sau responsabilitate?","ä¿¡æ¯ã€çŠ¶æ€æˆ–è´£ä»»åœ¨å“ªé‡Œä¸¢å¤±ï¼Ÿ"]],["pilot.focus.control.title",["Control","Control","Kontrol","Control","ContrÃ´le","Controllo","Control","æŽ§åˆ¶"]],["pilot.focus.control.text",["Welche Grenzen, Freigaben und ZustÃ¤nde mÃ¼ssen sichtbar bleiben?","Which boundaries, approvals and states must remain visible?","Hangi sÄ±nÄ±rlar, onaylar ve durumlar gÃ¶rÃ¼nÃ¼r kalmalÄ±?","Â¿QuÃ© lÃ­mites, aprobaciones y estados deben seguir visibles?","Quelles limites, validations et Ã©tats doivent rester visibles ?","Quali limiti, approvazioni e stati devono restare visibili?","Ce limite, aprobÄƒri È™i stÄƒri trebuie sÄƒ rÄƒmÃ¢nÄƒ vizibile?","å“ªäº›è¾¹ç•Œã€æ‰¹å‡†ä¸ŽçŠ¶æ€å¿…é¡»ä¿æŒå¯è§ï¼Ÿ"]],["pilot.process.eyebrow",["PILOT PROCESS","PILOT PROCESS","PÄ°LOT SÃœRECÄ°","PROCESO PILOT","PROCESSUS PILOT","PROCESSO PILOT","PROCES PILOT","Pilot æµç¨‹"]],["pilot.process.title",["Vom realen Problem zur Ã¼berprÃ¼fbaren Entscheidung.","From a real problem to a verifiable decision.","GerÃ§ek bir problemden doÄŸrulanabilir bir karara.","Del problema real a una decisiÃ³n verificable.","Du problÃ¨me rÃ©el Ã  une dÃ©cision vÃ©rifiable.","Dal problema reale a una decisione verificabile.","De la o problemÄƒ realÄƒ la o decizie verificabilÄƒ.","ä»ŽçŽ°å®žé—®é¢˜åˆ°å¯éªŒè¯çš„å†³ç­–ã€‚"]],["pilot.process.lead",["Der Pilot bleibt bewusst begrenzt. Erst wenn der Nutzen sichtbar ist, wird Ã¼ber den nÃ¤chsten Schritt entschieden.","The pilot remains deliberately limited. Only when value is visible is the next step decided.","Pilot bilinÃ§li olarak sÄ±nÄ±rlÄ± kalÄ±r. DeÄŸer gÃ¶rÃ¼nÃ¼r olduÄŸunda sonraki adÄ±m kararlaÅŸtÄ±rÄ±lÄ±r.","El pilot se mantiene deliberadamente limitado. Solo cuando el valor es visible se decide el siguiente paso.","Le pilot reste volontairement limitÃ©. Le prochain pas nâ€™est dÃ©cidÃ© quâ€™une fois la valeur visible.","Il pilot resta volutamente limitato. Solo quando il valore Ã¨ visibile si decide il passo successivo.","Pilotul rÄƒmÃ¢ne intenÈ›ionat limitat. Abia cÃ¢nd valoarea este vizibilÄƒ se decide pasul urmÄƒtor.","Pilot æœ‰æ„è¯†åœ°ä¿æŒæœ‰é™ã€‚åªæœ‰å½“ä»·å€¼å¯è§æ—¶ï¼Œæ‰å†³å®šä¸‹ä¸€æ­¥ã€‚"]],["pilot.process.scope.title",["Scope","Scope","Kapsam","Alcance","PÃ©rimÃ¨tre","Ambito","Scop","èŒƒå›´"]],["pilot.process.scope.text",["Ein konkreter Prozess, Bereich oder Anwendungsfall wird abgegrenzt.","A specific process, area or use case is defined.","Belirli bir sÃ¼reÃ§, alan veya kullanÄ±m senaryosu sÄ±nÄ±rlandÄ±rÄ±lÄ±r.","Se delimita un proceso, Ã¡rea o caso de uso concreto.","Un processus, domaine ou cas dâ€™usage prÃ©cis est dÃ©limitÃ©.","Viene delimitato un processo, unâ€™area o un caso dâ€™uso specifico.","Este delimitat un proces, domeniu sau caz de utilizare concret.","æ˜Žç¡®ç•Œå®šä¸€ä¸ªå…·ä½“æµç¨‹ã€é¢†åŸŸæˆ–ä½¿ç”¨åœºæ™¯ã€‚"]],["pilot.process.understand.title",["Understand","Understand","Anla","Comprender","Comprendre","Comprendere","ÃŽnÈ›elege","ç†è§£"]],["pilot.process.understand.text",["Der bestehende Ablauf und seine relevanten ZustÃ¤nde werden verstanden.","The existing workflow and its relevant states are understood.","Mevcut akÄ±ÅŸ ve ilgili durumlarÄ± anlaÅŸÄ±lÄ±r.","Se comprende el flujo existente y sus estados relevantes.","Le flux existant et ses Ã©tats pertinents sont compris.","Si comprendono il flusso esistente e i suoi stati rilevanti.","Sunt Ã®nÈ›elese fluxul existent È™i stÄƒrile sale relevante.","ç†è§£çŽ°æœ‰æµç¨‹åŠå…¶ç›¸å…³çŠ¶æ€ã€‚"]],["pilot.process.model.title",["Model","Model","Model","Modelo","ModÃ¨le","Modello","Model","å»ºæ¨¡"]],["pilot.process.model.text",["Das benÃ¶tigte ZALâ€™THERA-System wird auf den Prozess zugeschnitten.","The required ZALâ€™THERA system is tailored to the process.","Gerekli ZALâ€™THERA sistemi sÃ¼rece uyarlanÄ±r.","El sistema ZALâ€™THERA necesario se adapta al proceso.","Le systÃ¨me ZALâ€™THERA nÃ©cessaire est adaptÃ© au processus.","Il sistema ZALâ€™THERA necessario viene adattato al processo.","Sistemul ZALâ€™THERA necesar este adaptat procesului.","æ‰€éœ€çš„ ZALâ€™THERA ç³»ç»ŸæŒ‰æµç¨‹è¿›è¡Œé€‚é…ã€‚"]],["pilot.process.pilot.title",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.process.pilot.text",["Das System wird begrenzt im realen Ablauf eingesetzt.","The system is used on a limited basis in the real workflow.","Sistem gerÃ§ek akÄ±ÅŸta sÄ±nÄ±rlÄ± olarak kullanÄ±lÄ±r.","El sistema se utiliza de forma limitada en el flujo real.","Le systÃ¨me est utilisÃ© de maniÃ¨re limitÃ©e dans le flux rÃ©el.","Il sistema viene usato in modo limitato nel flusso reale.","Sistemul este utilizat limitat Ã®n fluxul real.","ç³»ç»Ÿåœ¨çŽ°å®žæµç¨‹ä¸­ä»¥æœ‰é™èŒƒå›´æŠ•å…¥ä½¿ç”¨ã€‚"]],["pilot.process.review.title",["Review","Review","Ä°nceleme","RevisiÃ³n","Revue","Revisione","Revizuire","è¯„å®¡"]],["pilot.process.review.text",["Nutzen, Grenzen und nÃ¤chster Schritt werden gemeinsam bewertet.","Value, limits and the next step are reviewed together.","Fayda, sÄ±nÄ±rlar ve sonraki adÄ±m birlikte deÄŸerlendirilir.","Se evalÃºan conjuntamente el valor, los lÃ­mites y el siguiente paso.","La valeur, les limites et lâ€™Ã©tape suivante sont Ã©valuÃ©es ensemble.","Valore, limiti e passo successivo vengono valutati insieme.","Valoarea, limitele È™i pasul urmÄƒtor sunt evaluate Ã®mpreunÄƒ.","å…±åŒè¯„ä¼°ä»·å€¼ã€è¾¹ç•Œä¸Žä¸‹ä¸€æ­¥ã€‚"]],["pilot.modules.eyebrow",["PILOT ENTRY POINTS","PILOT ENTRY POINTS","PÄ°LOT GÄ°RÄ°Åž NOKTALARI","PUNTOS DE ENTRADA DEL PILOT","POINTS Dâ€™ENTRÃ‰E DU PILOT","PUNTI DI INGRESSO DEL PILOT","PUNCTE DE INTRARE PILOT","Pilot å…¥å£"]],["pilot.modules.title",["Unterschiedliche Probleme. Gemeinsamer Systemkern.","Different problems. One shared system core.","FarklÄ± problemler. Ortak sistem Ã§ekirdeÄŸi.","Problemas distintos. Un nÃºcleo de sistema comÃºn.","Des problÃ¨mes diffÃ©rents. Un noyau systÃ¨me commun.","Problemi diversi. Un core di sistema comune.","Probleme diferite. Un nucleu de sistem comun.","ä¸åŒé—®é¢˜ï¼Œå…±åŒçš„ç³»ç»Ÿæ ¸å¿ƒã€‚"]],["pilot.modules.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADÄ‚","è¯æ˜Ž"]],["pilot.modules.proofflow",["Evidence Â· Audit Â· Signature Â· Export","Evidence Â· Audit Â· Signature Â· Export","KanÄ±t Â· Denetim Â· Ä°mza Â· DÄ±ÅŸa Aktarma","Prueba Â· AuditorÃ­a Â· Firma Â· ExportaciÃ³n","Preuve Â· Audit Â· Signature Â· Export","Prova Â· Audit Â· Firma Â· Esportazione","DovadÄƒ Â· Audit Â· SemnÄƒturÄƒ Â· Export","è¯æ˜Ž Â· å®¡è®¡ Â· ç­¾å Â· å¯¼å‡º"]],["pilot.modules.industry",["INDUSTRY","INDUSTRY","ENDÃœSTRÄ°","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","å·¥ä¸š"]],["pilot.modules.shiftlog",["Handover Â· State Â· Responsibility","Handover Â· State Â· Responsibility","Devir Â· Durum Â· Sorumluluk","Relevo Â· Estado Â· Responsabilidad","Transmission Â· Ã‰tat Â· ResponsabilitÃ©","Passaggio Â· Stato Â· ResponsabilitÃ ","Predare Â· Stare Â· Responsabilitate","äº¤æŽ¥ Â· çŠ¶æ€ Â· è´£ä»»"]],["pilot.modules.trust",["TRUST","TRUST","GÃœVEN","CONFIANZA","CONFIANCE","FIDUCIA","ÃŽNCREDERE","ä¿¡ä»»"]],["pilot.modules.ledger",["Events Â· Traceability Â· Verification","Events Â· Traceability Â· Verification","Olaylar Â· Ä°zlenebilirlik Â· DoÄŸrulama","Eventos Â· Trazabilidad Â· VerificaciÃ³n","Ã‰vÃ©nements Â· TraÃ§abilitÃ© Â· VÃ©rification","Eventi Â· TracciabilitÃ  Â· Verifica","Evenimente Â· Trasabilitate Â· Verificare","äº‹ä»¶ Â· å¯è¿½æº¯æ€§ Â· éªŒè¯"]],["pilot.modules.architecture",["ARCHITECTURE","ARCHITECTURE","MÄ°MARÄ°","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTURÄ‚","æž¶æž„"]],["pilot.modules.industryText",["Process Â· Data Â· Sensors Â· Future Integration","Process Â· Data Â· Sensors Â· Future Integration","SÃ¼reÃ§ Â· Veri Â· SensÃ¶rler Â· Gelecek Entegrasyonu","Proceso Â· Datos Â· Sensores Â· IntegraciÃ³n futura","Processus Â· DonnÃ©es Â· Capteurs Â· IntÃ©gration future","Processo Â· Dati Â· Sensori Â· Integrazione futura","Proces Â· Date Â· Senzori Â· Integrare viitoare","æµç¨‹ Â· æ•°æ® Â· ä¼ æ„Ÿå™¨ Â· æœªæ¥é›†æˆ"]],["pilot.principle.eyebrow",["CONTROLLED ENTRY","CONTROLLED ENTRY","KONTROLLÃœ GÄ°RÄ°Åž","ENTRADA CONTROLADA","ENTRÃ‰E CONTRÃ”LÃ‰E","INGRESSO CONTROLLATO","INTRARE CONTROLATÄ‚","å—æŽ§åˆ‡å…¥"]],["pilot.principle.title",["A pilot should reduce uncertainty, not create dependency.","A pilot should reduce uncertainty, not create dependency.","Pilot belirsizliÄŸi azaltmalÄ±, baÄŸÄ±mlÄ±lÄ±k yaratmamalÄ±.","Un pilot debe reducir la incertidumbre, no crear dependencia.","Un pilot doit rÃ©duire lâ€™incertitude, pas crÃ©er de dÃ©pendance.","Un pilot deve ridurre lâ€™incertezza, non creare dipendenza.","Un pilot ar trebui sÄƒ reducÄƒ incertitudinea, nu sÄƒ creeze dependenÈ›Äƒ.","Pilot åº”å‡å°‘ä¸ç¡®å®šæ€§ï¼Œè€Œä¸æ˜¯åˆ¶é€ ä¾èµ–ã€‚"]],["pilot.principle.text",["Der Pilot dient nicht dazu, einen bestehenden Prozess blind zu ersetzen. Er soll zeigen, ob ein klar definiertes Systemproblem tatsÃ¤chlich besser gelÃ¶st werden kann.","The pilot is not intended to blindly replace an existing process. It should show whether a clearly defined system problem can actually be solved better.","Pilot mevcut bir sÃ¼reci kÃ¶rÃ¼ kÃ¶rÃ¼ne deÄŸiÅŸtirmek iÃ§in deÄŸildir. AÃ§Ä±kÃ§a tanÄ±mlanmÄ±ÅŸ bir sistem probleminin gerÃ§ekten daha iyi Ã§Ã¶zÃ¼lÃ¼p Ã§Ã¶zÃ¼lemeyeceÄŸini gÃ¶stermelidir.","El pilot no pretende sustituir a ciegas un proceso existente. Debe mostrar si un problema de sistema claramente definido puede resolverse mejor.","Le pilot nâ€™a pas pour but de remplacer aveuglÃ©ment un processus existant. Il doit montrer si un problÃ¨me systÃ¨me clairement dÃ©fini peut rÃ©ellement Ãªtre mieux rÃ©solu.","Il pilot non serve a sostituire ciecamente un processo esistente. Deve mostrare se un problema di sistema chiaramente definito puÃ² davvero essere risolto meglio.","Pilotul nu are rolul de a Ã®nlocui orbeÈ™te un proces existent. Trebuie sÄƒ arate dacÄƒ o problemÄƒ de sistem clar definitÄƒ poate fi rezolvatÄƒ mai bine.","Pilot ä¸æ˜¯ä¸ºäº†ç›²ç›®æ›¿æ¢çŽ°æœ‰æµç¨‹ï¼Œè€Œæ˜¯è¦è¯æ˜Žä¸€ä¸ªæ¸…æ™°å®šä¹‰çš„ç³»ç»Ÿé—®é¢˜æ˜¯å¦çœŸçš„èƒ½å¤Ÿè¢«æ›´å¥½åœ°è§£å†³ã€‚"]],["pilot.principle.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","SolicitÄƒ Pilot","ç”³è¯· Pilot"]],["pilot.contact.title",["Pilotprojekt anfragen","Request a pilot project","Pilot projesi talep et","Solicitar proyecto pilot","Demander un projet pilot","Richiedi un progetto pilot","SolicitÄƒ un proiect pilot","ç”³è¯· Pilot é¡¹ç›®"]],["pilot.contact.text",["Beschreibe kurz den realen Prozess oder das Problem, das kontrolliert getestet werden soll.","Briefly describe the real process or problem to be tested in a controlled way.","KontrollÃ¼ olarak test edilecek gerÃ§ek sÃ¼reci veya problemi kÄ±saca aÃ§Ä±klayÄ±n.","Describe brevemente el proceso real o problema que debe probarse de forma controlada.","DÃ©crivez briÃ¨vement le processus rÃ©el ou le problÃ¨me Ã  tester de maniÃ¨re contrÃ´lÃ©e.","Descrivi brevemente il processo reale o il problema da testare in modo controllato.","Descrie pe scurt procesul real sau problema care trebuie testatÄƒ controlat.","ç®€è¦æè¿°éœ€è¦ä»¥å—æŽ§æ–¹å¼æµ‹è¯•çš„çŽ°å®žæµç¨‹æˆ–é—®é¢˜ã€‚"]],["pilot.contact.namePlaceholder",["Ihr Name","Your name","AdÄ±nÄ±z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","æ‚¨çš„å§“å"]],["pilot.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["pilot.contact.messagePlaceholder",["Welcher Prozess soll als Pilot getestet werden?","Which process should be tested as a pilot?","Hangi sÃ¼reÃ§ pilot olarak test edilmeli?","Â¿QuÃ© proceso deberÃ­a probarse como pilot?","Quel processus doit Ãªtre testÃ© en pilot ?","Quale processo dovrebbe essere testato come pilot?","Ce proces ar trebui testat ca pilot?","å“ªä¸ªæµç¨‹åº”ä½œä¸º Pilot è¿›è¡Œæµ‹è¯•ï¼Ÿ"]],["pilot.contact.send",["Anfrage senden","Send request","Talep gÃ¶nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","å‘é€ç”³è¯·"]],["pilot.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","GÃ¶ndererek ÅŸunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptaÈ›i","æäº¤å³è¡¨ç¤ºæ‚¨æŽ¥å—æˆ‘ä»¬çš„"]],["proofflow.header.pilot",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["proofflow.hero.kicker",["PROOF Â· AUDIT Â· TRACEABILITY","PROOF Â· AUDIT Â· TRACEABILITY","KANIT Â· DENETÄ°M Â· Ä°ZLENEBÄ°LÄ°RLÄ°K","PRUEBA Â· AUDITORÃA Â· TRAZABILIDAD","PREUVE Â· AUDIT Â· TRAÃ‡ABILITÃ‰","PROVA Â· AUDIT Â· TRACCIABILITÃ€","DOVADÄ‚ Â· AUDIT Â· TRASABILITATE","è¯æ˜Ž Â· å®¡è®¡ Â· å¯è¿½æº¯æ€§"]],["proofflow.hero.title",["Evidence before<br>assumption.","Evidence before<br>assumption.","VarsayÄ±mdan Ã¶nce<br>kanÄ±t.","Prueba antes que<br>suposiciÃ³n.","La preuve avant<br>lâ€™hypothÃ¨se.","La prova prima<br>dellâ€™ipotesi.","Dovada Ã®naintea<br>presupunerii.","å…ˆæœ‰è¯æ®ï¼Œ<br>å†ä½œåˆ¤æ–­ã€‚"]],["proofflow.hero.lead",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow gÃ¶revleri, kanÄ±tlarÄ±, fotoÄŸraflarÄ±, notlarÄ±, imzalarÄ±, denetimi ve dÄ±ÅŸa aktarmayÄ± izlenebilir bir akÄ±ÅŸta birleÅŸtirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditorÃ­a y exportaciÃ³n en un flujo trazable.","ProofFlow relie tÃ¢ches, preuves, photos, notes, signatures, audit et export dans un flux traÃ§able.","ProofFlow collega attivitÃ , prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conecteazÄƒ sarcini, dovezi, fotografii, note, semnÄƒturi, audit È™i export Ã®ntr-un flux trasabil.","ProofFlow å°†ä»»åŠ¡ã€è¯æ˜Žã€ç…§ç‰‡ã€å¤‡æ³¨ã€ç­¾åã€å®¡è®¡ä¸Žå¯¼å‡ºè¿žæŽ¥æˆå¯è¿½æº¯æµç¨‹ã€‚"]],["proofflow.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le systÃ¨me","Comprendi il sistema","ÃŽnÈ›elege sistemul","ç†è§£ç³»ç»Ÿ"]],["proofflow.hero.requestPilot",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","SolicitÄƒ Pilot","ç”³è¯· Pilot"]],["proofflow.hero.provenance",["PROVENANCE","PROVENANCE","KAYNAK","PROCEDENCIA","PROVENANCE","PROVENIENZA","PROVENIENÈšÄ‚","æ¥æº"]],["proofflow.hero.identity",["IDENTITY","IDENTITY","KÄ°MLÄ°K","IDENTIDAD","IDENTITÃ‰","IDENTITÃ€","IDENTITATE","èº«ä»½"]],["proofflow.hero.audit",["AUDIT","AUDIT","DENETÄ°M","AUDITORÃA","AUDIT","AUDIT","AUDIT","å®¡è®¡"]],["proofflow.hero.export",["EXPORT","EXPORT","DIÅžA AKTARMA","EXPORTACIÃ“N","EXPORT","ESPORTAZIONE","EXPORT","å¯¼å‡º"]],["proofflow.state.label",["PROOF FLOW","PROOF FLOW","KANIT AKIÅžI","FLUJO DE PRUEBA","FLUX DE PREUVE","FLUSSO DI PROVA","FLUX DE DOVADÄ‚","è¯æ˜Žæµç¨‹"]],["proofflow.state.job",["JOB","JOB","Ä°Åž","TRABAJO","TÃ‚CHE","ATTIVITÃ€","SARCINÄ‚","ä»»åŠ¡"]],["proofflow.state.context",["CONTEXT","CONTEXT","BAÄžLAM","CONTEXTO","CONTEXTE","CONTESTO","CONTEXT","ä¸Šä¸‹æ–‡"]],["proofflow.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADÄ‚","è¯æ˜Ž"]],["proofflow.state.capture",["CAPTURE","CAPTURE","YAKALAMA","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTURÄ‚","é‡‡é›†"]],["proofflow.state.sign",["SIGN","SIGN","Ä°MZA","FIRMA","SIGNER","FIRMA","SEMNARE","ç­¾å"]],["proofflow.state.identity",["IDENTITY","IDENTITY","KÄ°MLÄ°K","IDENTIDAD","IDENTITÃ‰","IDENTITÃ€","IDENTITATE","èº«ä»½"]],["proofflow.state.audit",["AUDIT","AUDIT","DENETÄ°M","AUDITORÃA","AUDIT","AUDIT","AUDIT","å®¡è®¡"]],["proofflow.state.trace",["TRACE","TRACE","Ä°Z","TRAZA","TRACE","TRACCIA","URMÄ‚","è¿½è¸ª"]],["proofflow.state.export",["EXPORT","EXPORT","DIÅžA AKTARMA","EXPORTACIÃ“N","EXPORT","ESPORTAZIONE","EXPORT","å¯¼å‡º"]],["proofflow.state.output",["OUTPUT","OUTPUT","Ã‡IKTI","SALIDA","SORTIE","OUTPUT","IEÈ˜IRE","è¾“å‡º"]],["proofflow.problem.eyebrow",["THE PROBLEM","THE PROBLEM","PROBLEM","EL PROBLEMA","LE PROBLÃˆME","IL PROBLEMA","PROBLEMA","é—®é¢˜"]],["proofflow.problem.title",["Erinnerung ist kein Nachweis.","Memory is not evidence.","HatÄ±ra kanÄ±t deÄŸildir.","La memoria no es una prueba.","La mÃ©moire nâ€™est pas une preuve.","La memoria non Ã¨ una prova.","Memoria nu este dovadÄƒ.","è®°å¿†ä¸æ˜¯è¯æ®ã€‚"]],["proofflow.problem.lead",["Wenn VorfÃ¤lle, MaÃŸnahmen und Entscheidungen nicht strukturiert dokumentiert werden, entstehen spÃ¤ter Interpretationen statt Ã¼berprÃ¼fbarer AblÃ¤ufe.","When incidents, actions and decisions are not documented in a structured way, later interpretations replace verifiable workflows.","Olaylar, Ã¶nlemler ve kararlar yapÄ±landÄ±rÄ±lmÄ±ÅŸ biÃ§imde belgelenmezse daha sonra doÄŸrulanabilir akÄ±ÅŸlar yerine yorumlar oluÅŸur.","Si incidentes, medidas y decisiones no se documentan de forma estructurada, despuÃ©s surgen interpretaciones en vez de procesos verificables.","Si incidents, mesures et dÃ©cisions ne sont pas documentÃ©s de faÃ§on structurÃ©e, des interprÃ©tations remplacent ensuite les processus vÃ©rifiables.","Se eventi, misure e decisioni non vengono documentati in modo strutturato, in seguito emergono interpretazioni invece di processi verificabili.","DacÄƒ incidentele, mÄƒsurile È™i deciziile nu sunt documentate structurat, ulterior apar interpretÄƒri Ã®n locul fluxurilor verificabile.","å¦‚æžœäº‹ä»¶ã€æŽªæ–½ä¸Žå†³ç­–æ²¡æœ‰ç»“æž„åŒ–è®°å½•ï¼Œä¹‹åŽå°±ä¼šå‡ºçŽ°è§£é‡Šè€Œä¸æ˜¯å¯éªŒè¯æµç¨‹ã€‚"]],["proofflow.problem.process.title",["Unklarer Ablauf","Unclear workflow","Belirsiz akÄ±ÅŸ","Flujo poco claro","Processus flou","Flusso poco chiaro","Flux neclar","æµç¨‹ä¸æ¸…"]],["proofflow.problem.process.text",["Was ist tatsÃ¤chlich passiert und in welcher Reihenfolge?","What actually happened and in what order?","GerÃ§ekte ne oldu ve hangi sÄ±rayla?","Â¿QuÃ© ocurriÃ³ realmente y en quÃ© orden?","Que sâ€™est-il rÃ©ellement passÃ© et dans quel ordre ?","Cosa Ã¨ successo davvero e in quale ordine?","Ce s-a Ã®ntÃ¢mplat de fapt È™i Ã®n ce ordine?","å®žé™…å‘ç”Ÿäº†ä»€ä¹ˆï¼Œé¡ºåºå¦‚ä½•ï¼Ÿ"]],["proofflow.problem.responsibility.title",["Unklare Verantwortung","Unclear responsibility","Belirsiz sorumluluk","Responsabilidad poco clara","ResponsabilitÃ© floue","ResponsabilitÃ  poco chiara","Responsabilitate neclarÄƒ","è´£ä»»ä¸æ¸…"]],["proofflow.problem.responsibility.text",["Wer hat wann gehandelt, bestÃ¤tigt oder entschieden?","Who acted, confirmed or decided, and when?","Kim ne zaman hareket etti, onayladÄ± veya karar verdi?","Â¿QuiÃ©n actuÃ³, confirmÃ³ o decidiÃ³ y cuÃ¡ndo?","Qui a agi, confirmÃ© ou dÃ©cidÃ©, et quand ?","Chi ha agito, confermato o deciso e quando?","Cine a acÈ›ionat, confirmat sau decis È™i cÃ¢nd?","è°åœ¨ä½•æ—¶è¡ŒåŠ¨ã€ç¡®è®¤æˆ–åšå‡ºå†³å®šï¼Ÿ"]],["proofflow.problem.evidence.title",["Fehlender Nachweis","Missing evidence","Eksik kanÄ±t","Falta de prueba","Preuve manquante","Prova mancante","DovadÄƒ lipsÄƒ","ç¼ºå°‘è¯æ®"]],["proofflow.problem.evidence.text",["Ohne belegbare Informationen bleiben spÃ¤ter Aussagen gegeneinander stehen.","Without verifiable information, later statements remain opposed to one another.","DoÄŸrulanabilir bilgi olmadan daha sonra ifadeler karÅŸÄ± karÅŸÄ±ya kalÄ±r.","Sin informaciÃ³n verificable, despuÃ©s quedan afirmaciones enfrentadas.","Sans information vÃ©rifiable, les dÃ©clarations restent ensuite opposÃ©es.","Senza informazioni verificabili, in seguito restano dichiarazioni contrapposte.","FÄƒrÄƒ informaÈ›ii verificabile, ulterior rÄƒmÃ¢n afirmaÈ›ii opuse.","æ²¡æœ‰å¯éªŒè¯ä¿¡æ¯ï¼Œä¹‹åŽåªå‰©ç›¸äº’å¯¹ç«‹çš„è¯´æ³•ã€‚"]],["proofflow.system.eyebrow",["PROOF SYSTEM","PROOF SYSTEM","KANIT SÄ°STEMÄ°","SISTEMA DE PRUEBA","SYSTÃˆME DE PREUVE","SISTEMA DI PROVA","SISTEM DE DOVADÄ‚","è¯æ˜Žç³»ç»Ÿ"]],["proofflow.system.title",["Ein nachvollziehbarer Ablauf statt isolierter Dateien.","A traceable workflow instead of isolated files.","YalÄ±tÄ±lmÄ±ÅŸ dosyalar yerine izlenebilir bir akÄ±ÅŸ.","Un flujo trazable en vez de archivos aislados.","Un flux traÃ§able plutÃ´t que des fichiers isolÃ©s.","Un flusso tracciabile invece di file isolati.","Un flux trasabil Ã®n locul fiÈ™ierelor izolate.","ç”¨å¯è¿½æº¯æµç¨‹æ›¿ä»£å­¤ç«‹æ–‡ä»¶ã€‚"]],["proofflow.system.lead",["ProofFlow strukturiert den Weg von einem Vorgang bis zu einem Ã¼berprÃ¼fbaren Ergebnis.","ProofFlow structures the path from an event to a verifiable result.","ProofFlow bir olaydan doÄŸrulanabilir sonuca giden yolu yapÄ±landÄ±rÄ±r.","ProofFlow estructura el camino desde un proceso hasta un resultado verificable.","ProofFlow structure le chemin dâ€™un Ã©vÃ©nement jusquâ€™Ã  un rÃ©sultat vÃ©rifiable.","ProofFlow struttura il percorso da un evento a un risultato verificabile.","ProofFlow structureazÄƒ drumul de la un eveniment la un rezultat verificabil.","ProofFlow å°†ä¸€ä¸ªäº‹ä»¶åˆ°å¯éªŒè¯ç»“æžœçš„è·¯å¾„ç»“æž„åŒ–ã€‚"]],["proofflow.system.job.title",["Job","Job","Ä°ÅŸ","Trabajo","TÃ¢che","AttivitÃ ","SarcinÄƒ","ä»»åŠ¡"]],["proofflow.system.job.text",["Der Vorgang erhÃ¤lt einen klaren Kontext und Ausgangspunkt.","The event receives a clear context and starting point.","Olay aÃ§Ä±k bir baÄŸlam ve baÅŸlangÄ±Ã§ noktasÄ± kazanÄ±r.","El proceso recibe un contexto y punto de partida claros.","Lâ€™Ã©vÃ©nement reÃ§oit un contexte et un point de dÃ©part clairs.","Lâ€™evento riceve un contesto e un punto di partenza chiari.","Evenimentul primeÈ™te un context È™i un punct de pornire clar.","äº‹ä»¶èŽ·å¾—æ¸…æ™°çš„ä¸Šä¸‹æ–‡ä¸Žèµ·ç‚¹ã€‚"]],["proofflow.system.proof.title",["Proof","Proof","KanÄ±t","Prueba","Preuve","Prova","DovadÄƒ","è¯æ˜Ž"]],["proofflow.system.proof.text",["Relevante Nachweise werden dem Vorgang zugeordnet.","Relevant evidence is assigned to the event.","Ä°lgili kanÄ±tlar olaya atanÄ±r.","Las pruebas relevantes se asignan al proceso.","Les preuves pertinentes sont rattachÃ©es Ã  lâ€™Ã©vÃ©nement.","Le prove rilevanti vengono associate allâ€™evento.","Dovezile relevante sunt asociate evenimentului.","ç›¸å…³è¯æ˜Žè¢«å…³è”åˆ°è¯¥äº‹ä»¶ã€‚"]],["proofflow.system.sign.title",["Sign","Sign","Ä°mza","Firma","Signer","Firma","Semnare","ç­¾å"]],["proofflow.system.sign.text",["BestÃ¤tigung oder Signatur wird mit IdentitÃ¤t verbunden.","Confirmation or signature is linked to identity.","Onay veya imza kimlikle baÄŸlanÄ±r.","La confirmaciÃ³n o firma se vincula a la identidad.","La confirmation ou signature est liÃ©e Ã  lâ€™identitÃ©.","La conferma o firma viene collegata allâ€™identitÃ .","Confirmarea sau semnÄƒtura este legatÄƒ de identitate.","ç¡®è®¤æˆ–ç­¾åä¸Žèº«ä»½å…³è”ã€‚"]],["proofflow.system.audit.title",["Audit","Audit","Denetim","AuditorÃ­a","Audit","Audit","Audit","å®¡è®¡"]],["proofflow.system.audit.text",["Relevante ZustandsÃ¤nderungen bleiben nachvollziehbar.","Relevant state changes remain traceable.","Ä°lgili durum deÄŸiÅŸiklikleri izlenebilir kalÄ±r.","Los cambios de estado relevantes siguen siendo trazables.","Les changements dâ€™Ã©tat pertinents restent traÃ§ables.","I cambiamenti di stato rilevanti restano tracciabili.","ModificÄƒrile relevante de stare rÄƒmÃ¢n trasabile.","ç›¸å…³çŠ¶æ€å˜åŒ–ä¿æŒå¯è¿½æº¯ã€‚"]],["proofflow.system.export.title",["Export","Export","DÄ±ÅŸa Aktarma","ExportaciÃ³n","Export","Esportazione","Export","å¯¼å‡º"]],["proofflow.system.export.text",["Der dokumentierte Ablauf kann strukturiert ausgegeben werden.","The documented workflow can be exported in a structured way.","Belgelenen akÄ±ÅŸ yapÄ±landÄ±rÄ±lmÄ±ÅŸ biÃ§imde dÄ±ÅŸa aktarÄ±labilir.","El flujo documentado puede exportarse de forma estructurada.","Le flux documentÃ© peut Ãªtre exportÃ© de maniÃ¨re structurÃ©e.","Il flusso documentato puÃ² essere esportato in modo strutturato.","Fluxul documentat poate fi exportat structurat.","è®°å½•çš„æµç¨‹å¯ä»¥ç»“æž„åŒ–å¯¼å‡ºã€‚"]],["proofflow.trust.eyebrow",["PROOF & TRUST","PROOF & TRUST","KANIT & GÃœVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVADÄ‚ & ÃŽNCREDERE","è¯æ˜Žä¸Žä¿¡ä»»"]],["proofflow.trust.title",["Ein Nachweis ist mehr als ein Foto.","Evidence is more than a photo.","KanÄ±t bir fotoÄŸraftan fazlasÄ±dÄ±r.","Una prueba es mÃ¡s que una foto.","Une preuve est plus quâ€™une photo.","Una prova Ã¨ piÃ¹ di una foto.","O dovadÄƒ este mai mult decÃ¢t o fotografie.","è¯æ˜Žä¸åªæ˜¯ä¸€å¼ ç…§ç‰‡ã€‚"]],["proofflow.trust.lead",["Entscheidend ist der Zusammenhang zwischen Herkunft, Zeitpunkt, IdentitÃ¤t und Prozess.","What matters is the relationship between provenance, time, identity and process.","Ã–nemli olan kaynak, zaman, kimlik ve sÃ¼reÃ§ arasÄ±ndaki iliÅŸkidir.","Lo decisivo es la relaciÃ³n entre procedencia, tiempo, identidad y proceso.","Lâ€™essentiel est la relation entre provenance, temps, identitÃ© et processus.","Conta il rapporto tra provenienza, tempo, identitÃ  e processo.","ConteazÄƒ relaÈ›ia dintre provenienÈ›Äƒ, timp, identitate È™i proces.","å…³é”®æ˜¯æ¥æºã€æ—¶é—´ã€èº«ä»½ä¸Žæµç¨‹ä¹‹é—´çš„å…³ç³»ã€‚"]],["proofflow.trust.context.title",["Context","Context","BaÄŸlam","Contexto","Contexte","Contesto","Context","ä¸Šä¸‹æ–‡"]],["proofflow.trust.context.text",["Zu welchem Vorgang gehÃ¶rt der Nachweis?","Which event does the evidence belong to?","KanÄ±t hangi olaya ait?","Â¿A quÃ© proceso pertenece la prueba?","Ã€ quel Ã©vÃ©nement appartient la preuve ?","A quale evento appartiene la prova?","CÄƒrui eveniment Ã®i aparÈ›ine dovada?","è¯¥è¯æ˜Žå±žäºŽå“ªä¸ªäº‹ä»¶ï¼Ÿ"]],["proofflow.trust.identity.title",["Identity","Identity","Kimlik","Identidad","IdentitÃ©","IdentitÃ ","Identitate","èº«ä»½"]],["proofflow.trust.identity.text",["Wer hat dokumentiert, bestÃ¤tigt oder gehandelt?","Who documented, confirmed or acted?","Kim belgeledi, onayladÄ± veya hareket etti?","Â¿QuiÃ©n documentÃ³, confirmÃ³ o actuÃ³?","Qui a documentÃ©, confirmÃ© ou agi ?","Chi ha documentato, confermato o agito?","Cine a documentat, confirmat sau acÈ›ionat?","è°è¿›è¡Œäº†è®°å½•ã€ç¡®è®¤æˆ–æ“ä½œï¼Ÿ"]],["proofflow.trust.time.title",["Time","Time","Zaman","Tiempo","Temps","Tempo","Timp","æ—¶é—´"]],["proofflow.trust.time.text",["Wann entstand der relevante Zustand oder Nachweis?","When did the relevant state or evidence arise?","Ä°lgili durum veya kanÄ±t ne zaman oluÅŸtu?","Â¿CuÃ¡ndo surgiÃ³ el estado o la prueba relevante?","Quand lâ€™Ã©tat ou la preuve pertinente est-il apparu ?","Quando Ã¨ nato lo stato o la prova rilevante?","CÃ¢nd a apÄƒrut starea sau dovada relevantÄƒ?","ç›¸å…³çŠ¶æ€æˆ–è¯æ˜Žä½•æ—¶äº§ç”Ÿï¼Ÿ"]],["proofflow.trust.audit.title",["Audit","Audit","Denetim","AuditorÃ­a","Audit","Audit","Audit","å®¡è®¡"]],["proofflow.trust.audit.text",["Ist die Entwicklung des Vorgangs spÃ¤ter nachvollziehbar?","Can the development of the event be traced later?","OlayÄ±n geliÅŸimi daha sonra izlenebilir mi?","Â¿Puede rastrearse despuÃ©s la evoluciÃ³n del proceso?","Lâ€™Ã©volution de lâ€™Ã©vÃ©nement peut-elle Ãªtre retracÃ©e ensuite ?","Lâ€™evoluzione dellâ€™evento puÃ² essere ricostruita in seguito?","Poate fi urmÄƒritÄƒ ulterior evoluÈ›ia evenimentului?","ä¹‹åŽèƒ½å¦è¿½æº¯è¯¥äº‹ä»¶çš„å‘å±•è¿‡ç¨‹ï¼Ÿ"]],["proofflow.pilot.eyebrow",["PILOT","PILOT","PÄ°LOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.title",["ProofFlow wird an einem realen Prozess geprÃ¼ft.","ProofFlow is tested on a real process.","ProofFlow gerÃ§ek bir sÃ¼reÃ§ Ã¼zerinde test edilir.","ProofFlow se prueba en un proceso real.","ProofFlow est testÃ© sur un processus rÃ©el.","ProofFlow viene testato su un processo reale.","ProofFlow este testat pe un proces real.","ProofFlow åœ¨çŽ°å®žæµç¨‹ä¸­è¿›è¡Œæµ‹è¯•ã€‚"]],["proofflow.pilot.text",["FÃ¼r einen Pilot wird ein konkreter Vorgang ausgewÃ¤hlt, strukturiert und mit den benÃ¶tigten Nachweis- und Audit-Schritten abgebildet.","For a pilot, a concrete event is selected, structured and mapped with the required evidence and audit steps.","Pilot iÃ§in belirli bir olay seÃ§ilir, yapÄ±landÄ±rÄ±lÄ±r ve gerekli kanÄ±t ve denetim adÄ±mlarÄ±yla modellenir.","Para un pilot se selecciona un proceso concreto, se estructura y se representa con los pasos de prueba y auditorÃ­a necesarios.","Pour un pilot, un Ã©vÃ©nement concret est choisi, structurÃ© et modÃ©lisÃ© avec les Ã©tapes de preuve et dâ€™audit nÃ©cessaires.","Per un pilot viene selezionato un evento concreto, strutturato e rappresentato con i passaggi di prova e audit necessari.","Pentru un pilot este ales un eveniment concret, structurat È™i modelat cu paÈ™ii necesari de dovadÄƒ È™i audit.","Pilot ä¼šé€‰æ‹©ä¸€ä¸ªå…·ä½“äº‹ä»¶ï¼Œå¯¹å…¶ç»“æž„åŒ–ï¼Œå¹¶æ˜ å°„æ‰€éœ€çš„è¯æ˜Žä¸Žå®¡è®¡æ­¥éª¤ã€‚"]],["proofflow.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","SolicitÄƒ Pilot","ç”³è¯· Pilot"]],["proofflow.pilot.email",["E-Mail senden","Send email","E-posta gÃ¶nder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","å‘é€é‚®ä»¶"]],["proofflow.pilot.phase1",["PHASE 01","PHASE 01","AÅžAMA 01","FASE 01","PHASE 01","FASE 01","FAZA 01","é˜¶æ®µ 01"]],["proofflow.pilot.analysis",["ANALYSE","ANALYSIS","ANALÄ°Z","ANÃLISIS","ANALYSE","ANALISI","ANALIZÄ‚","åˆ†æž"]],["proofflow.pilot.phase2",["PHASE 02","PHASE 02","AÅžAMA 02","FASE 02","PHASE 02","FASE 02","FAZA 02","é˜¶æ®µ 02"]],["proofflow.pilot.model",["MODEL","MODEL","MODEL","MODELO","MODÃˆLE","MODELLO","MODEL","æ¨¡åž‹"]],["proofflow.pilot.phase3",["PHASE 03","PHASE 03","AÅžAMA 03","FASE 03","PHASE 03","FASE 03","FAZA 03","é˜¶æ®µ 03"]],["proofflow.pilot.pilot",["PILOT","PILOT","PÄ°LOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.phase4",["PHASE 04","PHASE 04","AÅžAMA 04","FASE 04","PHASE 04","FASE 04","FAZA 04","é˜¶æ®µ 04"]],["proofflow.pilot.review",["REVIEW","REVIEW","Ä°NCELEME","REVISIÃ“N","REVUE","REVISIONE","REVIZUIRE","è¯„å®¡"]],["proofflow.core.eyebrow",["ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE","ZALâ€™THERA CORE"]],["proofflow.core.title",["ProofFlow nutzt denselben Vertrauenskern.","ProofFlow uses the same trust core.","ProofFlow aynÄ± gÃ¼ven Ã§ekirdeÄŸini kullanÄ±r.","ProofFlow utiliza el mismo nÃºcleo de confianza.","ProofFlow utilise le mÃªme noyau de confiance.","ProofFlow usa lo stesso core di fiducia.","ProofFlow foloseÈ™te acelaÈ™i nucleu de Ã®ncredere.","ProofFlow ä½¿ç”¨åŒä¸€ä¸ªä¿¡ä»»æ ¸å¿ƒã€‚"]],["proofflow.core.text",["IdentitÃ¤t, Kontext, Nachweis, Audit und kontrollierte AusfÃ¼hrung bleiben Teil derselben ZALâ€™THERA-Architektur.","Identity, context, evidence, audit and controlled execution remain part of the same ZALâ€™THERA architecture.","Kimlik, baÄŸlam, kanÄ±t, denetim ve kontrollÃ¼ yÃ¼rÃ¼tme aynÄ± ZALâ€™THERA mimarisinin parÃ§asÄ± olarak kalÄ±r.","Identidad, contexto, prueba, auditorÃ­a y ejecuciÃ³n controlada siguen formando parte de la misma arquitectura ZALâ€™THERA.","IdentitÃ©, contexte, preuve, audit et exÃ©cution contrÃ´lÃ©e restent dans la mÃªme architecture ZALâ€™THERA.","IdentitÃ , contesto, prova, audit ed esecuzione controllata restano parte della stessa architettura ZALâ€™THERA.","Identitatea, contextul, dovada, auditul È™i execuÈ›ia controlatÄƒ rÄƒmÃ¢n parte din aceeaÈ™i arhitecturÄƒ ZALâ€™THERA.","èº«ä»½ã€ä¸Šä¸‹æ–‡ã€è¯æ˜Žã€å®¡è®¡ä¸Žå—æŽ§æ‰§è¡Œä»å±žäºŽåŒä¸€ ZALâ€™THERA æž¶æž„ã€‚"]],["proofflow.contact.title",["ProofFlow Pilot anfragen","Request a ProofFlow pilot","ProofFlow pilot talep et","Solicitar un pilot de ProofFlow","Demander un pilot ProofFlow","Richiedi un pilot ProofFlow","SolicitÄƒ un pilot ProofFlow","ç”³è¯· ProofFlow Pilot"]],["proofflow.contact.text",["Beschreibe kurz den Prozess, der nachvollziehbarer werden soll.","Briefly describe the process that should become more traceable.","Daha izlenebilir hale gelmesi gereken sÃ¼reci kÄ±saca aÃ§Ä±klayÄ±n.","Describe brevemente el proceso que debe ser mÃ¡s trazable.","DÃ©crivez briÃ¨vement le processus qui doit devenir plus traÃ§able.","Descrivi brevemente il processo che deve diventare piÃ¹ tracciabile.","Descrie pe scurt procesul care trebuie sÄƒ devinÄƒ mai trasabil.","ç®€è¦æè¿°éœ€è¦å˜å¾—æ›´å¯è¿½æº¯çš„æµç¨‹ã€‚"]],["proofflow.contact.namePlaceholder",["Ihr Name","Your name","AdÄ±nÄ±z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","æ‚¨çš„å§“å"]],["proofflow.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["proofflow.contact.messagePlaceholder",["Welcher Prozess soll nachvollziehbarer werden?","Which process should become more traceable?","Hangi sÃ¼reÃ§ daha izlenebilir olmalÄ±?","Â¿QuÃ© proceso deberÃ­a ser mÃ¡s trazable?","Quel processus doit devenir plus traÃ§able ?","Quale processo dovrebbe diventare piÃ¹ tracciabile?","Ce proces ar trebui sÄƒ devinÄƒ mai trasabil?","å“ªä¸ªæµç¨‹éœ€è¦å˜å¾—æ›´å¯è¿½æº¯ï¼Ÿ"]],["proofflow.contact.send",["Anfrage senden","Send request","Talep gÃ¶nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","å‘é€ç”³è¯·"]],["proofflow.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","GÃ¶ndererek ÅŸunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptaÈ›i","æäº¤å³è¡¨ç¤ºæ‚¨æŽ¥å—æˆ‘ä»¬çš„"]],["shiftlog.hero.kicker",["ZALâ€™THERA INDUSTRY","ZALâ€™THERA INDUSTRY","ZALâ€™THERA ENDÃœSTRÄ°","ZALâ€™THERA INDUSTRIA","ZALâ€™THERA INDUSTRIE","ZALâ€™THERA INDUSTRIA","ZALâ€™THERA INDUSTRIE","ZALâ€™THERA å·¥ä¸š"]],["shiftlog.hero.title",["Shift handover.<br>Without information loss.","Shift handover.<br>Without information loss.","Vardiya devri.<br>Bilgi kaybÄ± olmadan.","Relevo de turno.<br>Sin pÃ©rdida de informaciÃ³n.","Transmission de poste.<br>Sans perte dâ€™information.","Passaggio turno.<br>Senza perdita di informazioni.","Predare de schimb.<br>FÄƒrÄƒ pierdere de informaÈ›ii.","ç­æ¬¡äº¤æŽ¥ã€‚<br>ä¸ä¸¢å¤±ä¿¡æ¯ã€‚"]],["shiftlog.hero.lead",["ShiftLog macht operative ZustÃ¤nde, offene Punkte und Verantwortlichkeiten Ã¼ber Schichtgrenzen hinweg nachvollziehbar.","ShiftLog makes operational states, open points and responsibilities traceable across shift boundaries.","ShiftLog operasyonel durumlarÄ±, aÃ§Ä±k noktalarÄ± ve sorumluluklarÄ± vardiyalar arasÄ±nda izlenebilir kÄ±lar.","ShiftLog hace trazables los estados operativos, puntos abiertos y responsabilidades entre turnos.","ShiftLog rend traÃ§ables les Ã©tats opÃ©rationnels, points ouverts et responsabilitÃ©s entre les postes.","ShiftLog rende tracciabili stati operativi, punti aperti e responsabilitÃ  tra i turni.","ShiftLog face trasabile stÄƒrile operaÈ›ionale, punctele deschise È™i responsabilitÄƒÈ›ile Ã®ntre schimburi.","ShiftLog è®©è¿è¡ŒçŠ¶æ€ã€æœªå†³äº‹é¡¹ä¸Žè´£ä»»è·¨ç­æ¬¡ä¿æŒå¯è¿½æº¯ã€‚"]],["shiftlog.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le systÃ¨me","Comprendi il sistema","ÃŽnÈ›elege sistemul","ç†è§£ç³»ç»Ÿ"]],["shiftlog.hero.interest",["Interesse melden","Register interest","Ä°lgi bildir","Mostrar interÃ©s","Signaler son intÃ©rÃªt","Segnala interesse","ExprimÄƒ interesul","è¡¨è¾¾å…´è¶£"]],["shiftlog.hero.handover",["HANDOVER","HANDOVER","DEVÄ°R","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","äº¤æŽ¥"]],["shiftlog.hero.state",["STATE","STATE","DURUM","ESTADO","Ã‰TAT","STATO","STARE","çŠ¶æ€"]],["shiftlog.hero.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILITÃ‰","RESPONSABILITÃ€","RESPONSABILITATE","è´£ä»»"]],["shiftlog.hero.traceability",["TRACEABILITY","TRACEABILITY","Ä°ZLENEBÄ°LÄ°RLÄ°K","TRAZABILIDAD","TRAÃ‡ABILITÃ‰","TRACCIABILITÃ€","TRASABILITATE","å¯è¿½æº¯æ€§"]],["shiftlog.state.label",["SHIFT STATE","SHIFT STATE","VARDÄ°YA DURUMU","ESTADO DEL TURNO","Ã‰TAT DU POSTE","STATO DEL TURNO","STAREA SCHIMBULUI","ç­æ¬¡çŠ¶æ€"]],["shiftlog.state.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","çŠ¶æ€"]],["shiftlog.state.capture",["CAPTURE","CAPTURE","KAYIT","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTURÄ‚","è®°å½•"]],["shiftlog.state.openPoints",["OPEN POINTS","OPEN POINTS","AÃ‡IK NOKTALAR","PUNTOS ABIERTOS","POINTS OUVERTS","PUNTI APERTI","PUNCTE DESCHISE","æœªå†³äº‹é¡¹"]],["shiftlog.state.visible",["VISIBLE","VISIBLE","GÃ–RÃœNÃœR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","å¯è§"]],["shiftlog.state.handover",["HANDOVER","HANDOVER","DEVÄ°R","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","äº¤æŽ¥"]],["shiftlog.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMIÅž","ESTRUCTURADO","STRUCTURÃ‰","STRUTTURATO","STRUCTURAT","å·²ç»“æž„åŒ–"]],["shiftlog.state.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILITÃ‰","RESPONSABILITÃ€","RESPONSABILITATE","è´£ä»»"]],["shiftlog.state.assigned",["ASSIGNED","ASSIGNED","ATANDI","ASIGNADA","ATTRIBUÃ‰E","ASSEGNATA","ATRIBUITÄ‚","å·²åˆ†é…"]],["shiftlog.state.history",["HISTORY","HISTORY","GEÃ‡MÄ°Åž","HISTORIAL","HISTORIQUE","STORICO","ISTORIC","åŽ†å²"]],["shiftlog.state.traceable",["TRACEABLE","TRACEABLE","Ä°ZLENEBÄ°LÄ°R","TRAZABLE","TRAÃ‡ABLE","TRACCIABILE","TRASABIL","å¯è¿½æº¯"]],["shiftlog.problem.eyebrow",["SHIFT REALITY","SHIFT REALITY","VARDÄ°YA GERÃ‡EÄžÄ°","REALIDAD DEL TURNO","RÃ‰ALITÃ‰ DU POSTE","REALTÃ€ DEL TURNO","REALITATEA SCHIMBULUI","ç­æ¬¡çŽ°å®ž"]],["shiftlog.problem.title",["Information darf nicht an der Schichtgrenze enden.","Information must not stop at the shift boundary.","Bilgi vardiya sÄ±nÄ±rÄ±nda bitmemeli.","La informaciÃ³n no debe terminar en el cambio de turno.","Lâ€™information ne doit pas sâ€™arrÃªter au changement de poste.","Le informazioni non devono fermarsi al cambio turno.","InformaÈ›ia nu trebuie sÄƒ se opreascÄƒ la schimbul de turÄƒ.","ä¿¡æ¯ä¸åº”åœ¨ç­æ¬¡è¾¹ç•Œç»ˆæ­¢ã€‚"]],["shiftlog.problem.lead",["Offene Punkte, MaschinenzustÃ¤nde und Verantwortlichkeiten verlieren schnell Kontext, wenn Ãœbergaben nur mÃ¼ndlich oder unstrukturiert erfolgen.","Open points, machine states and responsibilities quickly lose context when handovers are only verbal or unstructured.","AÃ§Ä±k noktalar, makine durumlarÄ± ve sorumluluklar devirler yalnÄ±zca sÃ¶zlÃ¼ veya yapÄ±landÄ±rÄ±lmamÄ±ÅŸ olduÄŸunda hÄ±zla baÄŸlam kaybeder.","Puntos abiertos, estados de mÃ¡quina y responsabilidades pierden contexto rÃ¡pidamente cuando los relevos son solo verbales o no estructurados.","Points ouverts, Ã©tats machine et responsabilitÃ©s perdent vite leur contexte lorsque les transmissions sont seulement orales ou non structurÃ©es.","Punti aperti, stati macchina e responsabilitÃ  perdono rapidamente contesto quando i passaggi sono solo verbali o non strutturati.","Punctele deschise, stÄƒrile utilajelor È™i responsabilitÄƒÈ›ile pierd rapid context cÃ¢nd predÄƒrile sunt doar verbale sau nestructurate.","å½“äº¤æŽ¥ä»…é å£å¤´æˆ–ç¼ºä¹ç»“æž„æ—¶ï¼Œæœªå†³äº‹é¡¹ã€æœºå™¨çŠ¶æ€ä¸Žè´£ä»»ä¼šè¿…é€Ÿå¤±åŽ»ä¸Šä¸‹æ–‡ã€‚"]],["shiftlog.problem.overlooked.title",["Offene Punkte werden Ã¼bersehen","Open points are overlooked","AÃ§Ä±k noktalar gÃ¶zden kaÃ§ar","Se pasan por alto puntos abiertos","Des points ouverts sont oubliÃ©s","I punti aperti vengono trascurati","Punctele deschise sunt omise","æœªå†³äº‹é¡¹è¢«å¿½ç•¥"]],["shiftlog.problem.overlooked.text",["Was nicht klar Ã¼bergeben wird, kann in der nÃ¤chsten Schicht verschwinden.","What is not handed over clearly can disappear in the next shift.","AÃ§Ä±kÃ§a devredilmeyen ÅŸey sonraki vardiyada kaybolabilir.","Lo que no se entrega con claridad puede desaparecer en el siguiente turno.","Ce qui nâ€™est pas transmis clairement peut disparaÃ®tre au poste suivant.","CiÃ² che non viene passato chiaramente puÃ² perdersi nel turno successivo.","Ceea ce nu este predat clar poate dispÄƒrea Ã®n schimbul urmÄƒtor.","æœªè¢«æ¸…æ™°äº¤æŽ¥çš„ä¿¡æ¯å¯èƒ½åœ¨ä¸‹ä¸€ç­æ¬¡ä¸­æ¶ˆå¤±ã€‚"]],["shiftlog.problem.states.title",["ZustÃ¤nde werden uneindeutig","States become ambiguous","Durumlar belirsizleÅŸir","Los estados se vuelven ambiguos","Les Ã©tats deviennent ambigus","Gli stati diventano ambigui","StÄƒrile devin ambigue","çŠ¶æ€å˜å¾—æ¨¡ç³Š"]],["shiftlog.problem.states.text",["Ohne strukturierten Status ist schwer zu erkennen, was offen, Ã¼bernommen oder erledigt ist.","Without structured status, it is hard to see what is open, taken over or completed.","YapÄ±landÄ±rÄ±lmÄ±ÅŸ durum olmadan neyin aÃ§Ä±k, devralÄ±nmÄ±ÅŸ veya tamamlanmÄ±ÅŸ olduÄŸunu gÃ¶rmek zordur.","Sin estado estructurado es difÃ­cil ver quÃ© estÃ¡ abierto, asumido o completado.","Sans statut structurÃ©, il est difficile de voir ce qui est ouvert, repris ou terminÃ©.","Senza stato strutturato Ã¨ difficile capire cosa Ã¨ aperto, preso in carico o completato.","FÄƒrÄƒ stare structuratÄƒ este greu de vÄƒzut ce este deschis, preluat sau finalizat.","æ²¡æœ‰ç»“æž„åŒ–çŠ¶æ€ï¼Œå°±éš¾ä»¥çœ‹æ¸…ä»€ä¹ˆæ˜¯æœªå†³ã€å·²æŽ¥æ‰‹æˆ–å·²å®Œæˆã€‚"]],["shiftlog.problem.context.title",["Kontext geht verloren","Context is lost","BaÄŸlam kaybolur","Se pierde el contexto","Le contexte se perd","Il contesto si perde","Contextul se pierde","ä¸Šä¸‹æ–‡ä¸¢å¤±"]],["shiftlog.problem.context.text",["Maschine, Bereich, Zeitpunkt und Verantwortlichkeit mÃ¼ssen zusammen sichtbar bleiben.","Machine, area, time and responsibility must remain visible together.","Makine, alan, zaman ve sorumluluk birlikte gÃ¶rÃ¼nÃ¼r kalmalÄ±.","MÃ¡quina, Ã¡rea, momento y responsabilidad deben seguir visibles juntos.","Machine, zone, moment et responsabilitÃ© doivent rester visibles ensemble.","Macchina, area, tempo e responsabilitÃ  devono restare visibili insieme.","Utilajul, zona, timpul È™i responsabilitatea trebuie sÄƒ rÄƒmÃ¢nÄƒ vizibile Ã®mpreunÄƒ.","æœºå™¨ã€åŒºåŸŸã€æ—¶é—´ä¸Žè´£ä»»å¿…é¡»ä¸€èµ·ä¿æŒå¯è§ã€‚"]],["shiftlog.system.eyebrow",["SHIFTLOG SYSTEM","SHIFTLOG SYSTEM","SHIFTLOG SÄ°STEMÄ°","SISTEMA SHIFTLOG","SYSTÃˆME SHIFTLOG","SISTEMA SHIFTLOG","SISTEM SHIFTLOG","SHIFTLOG ç³»ç»Ÿ"]],["shiftlog.system.title",["Ãœbergabe wird zu einem nachvollziehbaren Prozess.","Handover becomes a traceable process.","Devir izlenebilir bir sÃ¼rece dÃ¶nÃ¼ÅŸÃ¼r.","El relevo se convierte en un proceso trazable.","La transmission devient un processus traÃ§able.","Il passaggio diventa un processo tracciabile.","Predarea devine un proces trasabil.","äº¤æŽ¥å˜æˆå¯è¿½æº¯æµç¨‹ã€‚"]],["shiftlog.system.lead",["ShiftLog strukturiert operative Informationen so, dass Zustand, Ãœbergabe und Verantwortung Ã¼ber Schichten hinweg sichtbar bleiben.","ShiftLog structures operational information so that state, handover and responsibility remain visible across shifts.","ShiftLog operasyonel bilgiyi, durum, devir ve sorumluluÄŸun vardiyalar boyunca gÃ¶rÃ¼nÃ¼r kalacaÄŸÄ± ÅŸekilde yapÄ±landÄ±rÄ±r.","ShiftLog estructura la informaciÃ³n operativa para que estado, relevo y responsabilidad sigan visibles entre turnos.","ShiftLog structure les informations opÃ©rationnelles pour que lâ€™Ã©tat, la transmission et la responsabilitÃ© restent visibles entre les postes.","ShiftLog struttura le informazioni operative affinchÃ© stato, passaggio e responsabilitÃ  restino visibili tra i turni.","ShiftLog structureazÄƒ informaÈ›ia operaÈ›ionalÄƒ astfel Ã®ncÃ¢t starea, predarea È™i responsabilitatea sÄƒ rÄƒmÃ¢nÄƒ vizibile Ã®ntre schimburi.","ShiftLog å¯¹è¿è¡Œä¿¡æ¯è¿›è¡Œç»“æž„åŒ–ï¼Œä½¿çŠ¶æ€ã€äº¤æŽ¥ä¸Žè´£ä»»è·¨ç­æ¬¡ä¿æŒå¯è§ã€‚"]],["shiftlog.system.capture.title",["Capture","Capture","KayÄ±t","Captura","Capture","Acquisizione","CapturÄƒ","è®°å½•"]],["shiftlog.system.capture.text",["Relevante ZustÃ¤nde und offene Punkte werden strukturiert erfasst.","Relevant states and open points are captured in a structured way.","Ä°lgili durumlar ve aÃ§Ä±k noktalar yapÄ±landÄ±rÄ±lmÄ±ÅŸ biÃ§imde kaydedilir.","Los estados relevantes y puntos abiertos se registran de forma estructurada.","Les Ã©tats pertinents et points ouverts sont saisis de maniÃ¨re structurÃ©e.","Stati rilevanti e punti aperti vengono registrati in modo strutturato.","StÄƒrile relevante È™i punctele deschise sunt capturate structurat.","ç›¸å…³çŠ¶æ€ä¸Žæœªå†³äº‹é¡¹è¢«ç»“æž„åŒ–è®°å½•ã€‚"]],["shiftlog.system.state.title",["State","State","Durum","Estado","Ã‰tat","Stato","Stare","çŠ¶æ€"]],["shiftlog.system.state.text",["Der aktuelle operative Zustand bleibt sichtbar.","The current operational state remains visible.","Mevcut operasyonel durum gÃ¶rÃ¼nÃ¼r kalÄ±r.","El estado operativo actual sigue visible.","Lâ€™Ã©tat opÃ©rationnel actuel reste visible.","Lo stato operativo attuale resta visibile.","Starea operaÈ›ionalÄƒ curentÄƒ rÄƒmÃ¢ne vizibilÄƒ.","å½“å‰è¿è¡ŒçŠ¶æ€ä¿æŒå¯è§ã€‚"]],["shiftlog.system.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","äº¤æŽ¥"]],["shiftlog.system.handover.text",["Offene Punkte werden gezielt an die nÃ¤chste Schicht Ã¼bergeben.","Open points are deliberately handed over to the next shift.","AÃ§Ä±k noktalar bilinÃ§li biÃ§imde sonraki vardiyaya devredilir.","Los puntos abiertos se entregan de forma intencional al siguiente turno.","Les points ouverts sont transmis explicitement au poste suivant.","I punti aperti vengono passati intenzionalmente al turno successivo.","Punctele deschise sunt predate explicit schimbului urmÄƒtor.","æœªå†³äº‹é¡¹è¢«æ˜Žç¡®äº¤ç»™ä¸‹ä¸€ç­æ¬¡ã€‚"]],["shiftlog.system.responsibility.title",["Responsibility","Responsibility","Sorumluluk","Responsabilidad","ResponsabilitÃ©","ResponsabilitÃ ","Responsabilitate","è´£ä»»"]],["shiftlog.system.responsibility.text",["ZustÃ¤ndigkeit und Ãœbernahme werden klarer nachvollziehbar.","Responsibility and acceptance become more traceable.","Sorumluluk ve devralma daha aÃ§Ä±k izlenebilir olur.","La responsabilidad y la aceptaciÃ³n se vuelven mÃ¡s trazables.","La responsabilitÃ© et la prise en charge deviennent plus traÃ§ables.","ResponsabilitÃ  e presa in carico diventano piÃ¹ tracciabili.","Responsabilitatea È™i preluarea devin mai trasabile.","è´£ä»»ä¸ŽæŽ¥æ‰‹å˜å¾—æ›´å¯è¿½æº¯ã€‚"]],["shiftlog.system.history.title",["History","History","GeÃ§miÅŸ","Historial","Historique","Storico","Istoric","åŽ†å²"]],["shiftlog.system.history.text",["Relevante Ã„nderungen und Ãœbergaben bleiben spÃ¤ter nachvollziehbar.","Relevant changes and handovers remain traceable later.","Ä°lgili deÄŸiÅŸiklikler ve devirler daha sonra izlenebilir kalÄ±r.","Los cambios y relevos relevantes siguen siendo trazables despuÃ©s.","Les changements et transmissions pertinents restent traÃ§ables ensuite.","Cambiamenti e passaggi rilevanti restano tracciabili in seguito.","ModificÄƒrile È™i predÄƒrile relevante rÄƒmÃ¢n trasabile ulterior.","ç›¸å…³å˜åŒ–ä¸Žäº¤æŽ¥ä¹‹åŽä»å¯è¿½æº¯ã€‚"]],["shiftlog.industry.title",["Teil von ZALâ€™THERA Industry.","Part of ZALâ€™THERA Industry.","ZALâ€™THERA Industryâ€™nin bir parÃ§asÄ±.","Parte de ZALâ€™THERA Industry.","Partie de ZALâ€™THERA Industry.","Parte di ZALâ€™THERA Industry.","Parte din ZALâ€™THERA Industry.","ZALâ€™THERA Industry çš„ä¸€éƒ¨åˆ†ã€‚"]],["shiftlog.industry.text",["ShiftLog ist ein operativer Einstieg in die industrielle ZALâ€™THERA-Architektur.","ShiftLog is an operational entry point into the industrial ZALâ€™THERA architecture.","ShiftLog endÃ¼striyel ZALâ€™THERA mimarisine operasyonel bir giriÅŸ noktasÄ±dÄ±r.","ShiftLog es una entrada operativa a la arquitectura industrial ZALâ€™THERA.","ShiftLog est un point dâ€™entrÃ©e opÃ©rationnel dans lâ€™architecture industrielle ZALâ€™THERA.","ShiftLog Ã¨ un punto di ingresso operativo nellâ€™architettura industriale ZALâ€™THERA.","ShiftLog este un punct operaÈ›ional de intrare Ã®n arhitectura industrialÄƒ ZALâ€™THERA.","ShiftLog æ˜¯è¿›å…¥ ZALâ€™THERA å·¥ä¸šæž¶æž„çš„æ“ä½œå…¥å£ã€‚"]],["shiftlog.industry.view",["Industry ansehen","View Industry","Industryâ€™yi gÃ¶rÃ¼ntÃ¼le","Ver Industry","Voir Industry","Vedi Industry","Vezi Industry","æŸ¥çœ‹ Industry"]],["shiftlog.use.eyebrow",["REAL-WORLD USE","REAL-WORLD USE","GERÃ‡EK DÃœNYA KULLANIMI","USO REAL","USAGE RÃ‰EL","USO REALE","UTILIZARE REALÄ‚","çŽ°å®žä½¿ç”¨"]],["shiftlog.use.title",["FÃ¼r reale Ãœbergaben gebaut.","Built for real handovers.","GerÃ§ek devirler iÃ§in Ã¼retildi.","Construido para relevos reales.","ConÃ§u pour de vraies transmissions.","Costruito per passaggi reali.","Construit pentru predÄƒri reale.","ä¸ºçœŸå®žäº¤æŽ¥è€Œæž„å»ºã€‚"]],["shiftlog.use.text",["ShiftLog soll in klar abgegrenzten betrieblichen AblÃ¤ufen getestet und schrittweise weiterentwickelt werden.","ShiftLog is intended to be tested in clearly defined operational workflows and developed step by step.","ShiftLog aÃ§Ä±kÃ§a tanÄ±mlanmÄ±ÅŸ iÅŸletme akÄ±ÅŸlarÄ±nda test edilip adÄ±m adÄ±m geliÅŸtirilecektir.","ShiftLog estÃ¡ pensado para probarse en flujos operativos claramente definidos y desarrollarse paso a paso.","ShiftLog doit Ãªtre testÃ© dans des flux opÃ©rationnels clairement dÃ©finis et dÃ©veloppÃ© progressivement.","ShiftLog Ã¨ pensato per essere testato in flussi operativi chiaramente definiti e sviluppato passo dopo passo.","ShiftLog este destinat testÄƒrii Ã®n fluxuri operaÈ›ionale clar definite È™i dezvoltÄƒrii treptate.","ShiftLog å°†åœ¨è¾¹ç•Œæ¸…æ™°çš„è¿è¡Œæµç¨‹ä¸­æµ‹è¯•ï¼Œå¹¶é€æ­¥å‘å±•ã€‚"]],["shiftlog.use.interest",["Interesse melden","Register interest","Ä°lgi bildir","Mostrar interÃ©s","Signaler son intÃ©rÃªt","Segnala interesse","ExprimÄƒ interesul","è¡¨è¾¾å…´è¶£"]],["shiftlog.use.email",["E-Mail senden","Send email","E-posta gÃ¶nder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","å‘é€é‚®ä»¶"]],["shiftlog.use.state1",["STATE 01","STATE 01","DURUM 01","ESTADO 01","Ã‰TAT 01","STATO 01","STARE 01","çŠ¶æ€ 01"]],["shiftlog.use.captured",["CAPTURED","CAPTURED","KAYDEDÄ°LDÄ°","CAPTURADO","SAISI","ACQUISITO","CAPTURAT","å·²è®°å½•"]],["shiftlog.use.state2",["STATE 02","STATE 02","DURUM 02","ESTADO 02","Ã‰TAT 02","STATO 02","STARE 02","çŠ¶æ€ 02"]],["shiftlog.use.open",["OPEN","OPEN","AÃ‡IK","ABIERTO","OUVERT","APERTO","DESCHIS","æœªå†³"]],["shiftlog.use.state3",["STATE 03","STATE 03","DURUM 03","ESTADO 03","Ã‰TAT 03","STATO 03","STARE 03","çŠ¶æ€ 03"]],["shiftlog.use.handedOver",["HANDED OVER","HANDED OVER","DEVREDÄ°LDÄ°","ENTREGADO","TRANSMIS","PASSATO","PREDAT","å·²äº¤æŽ¥"]],["shiftlog.use.state4",["STATE 04","STATE 04","DURUM 04","ESTADO 04","Ã‰TAT 04","STATO 04","STARE 04","çŠ¶æ€ 04"]],["shiftlog.use.resolved",["RESOLVED","RESOLVED","Ã‡Ã–ZÃœLDÃœ","RESUELTO","RÃ‰SOLU","RISOLTO","REZOLVAT","å·²è§£å†³"]],["shiftlog.contact.title",["Interesse an ShiftLog?","Interested in ShiftLog?","ShiftLog ile ilgileniyor musunuz?","Â¿InterÃ©s en ShiftLog?","IntÃ©ressÃ© par ShiftLog ?","Interessato a ShiftLog?","Interesat de ShiftLog?","å¯¹ ShiftLog æ„Ÿå…´è¶£ï¼Ÿ"]],["shiftlog.contact.text",["Beschreibe kurz den betrieblichen Ablauf, in dem Ãœbergaben oder offene Punkte besser strukturiert werden sollen.","Briefly describe the operational workflow in which handovers or open points should be structured better.","Devirlerin veya aÃ§Ä±k noktalarÄ±n daha iyi yapÄ±landÄ±rÄ±lmasÄ± gereken iÅŸletme akÄ±ÅŸÄ±nÄ± kÄ±saca aÃ§Ä±klayÄ±n.","Describe brevemente el flujo operativo en el que los relevos o puntos abiertos deben estructurarse mejor.","DÃ©crivez briÃ¨vement le flux opÃ©rationnel oÃ¹ les transmissions ou points ouverts doivent Ãªtre mieux structurÃ©s.","Descrivi brevemente il flusso operativo in cui passaggi o punti aperti devono essere strutturati meglio.","Descrie pe scurt fluxul operaÈ›ional Ã®n care predÄƒrile sau punctele deschise trebuie structurate mai bine.","ç®€è¦æè¿°éœ€è¦æ›´å¥½ç»“æž„åŒ–äº¤æŽ¥æˆ–æœªå†³äº‹é¡¹çš„è¿è¡Œæµç¨‹ã€‚"]],["shiftlog.contact.namePlaceholder",["Ihr Name","Your name","AdÄ±nÄ±z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","æ‚¨çš„å§“å"]],["shiftlog.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["shiftlog.contact.messagePlaceholder",["Wo entstehen heute Informationsverluste bei Ãœbergaben?","Where do information losses occur in handovers today?","BugÃ¼n devirlerde bilgi kaybÄ± nerede oluÅŸuyor?","Â¿DÃ³nde se producen hoy pÃ©rdidas de informaciÃ³n en los relevos?","OÃ¹ se produisent aujourdâ€™hui les pertes dâ€™information lors des transmissions ?","Dove si verificano oggi perdite di informazioni nei passaggi?","Unde apar astÄƒzi pierderi de informaÈ›ii la predÄƒri?","å¦‚ä»Šäº¤æŽ¥ä¸­çš„ä¿¡æ¯ä¸¢å¤±å‘ç”Ÿåœ¨å“ªé‡Œï¼Ÿ"]],["shiftlog.contact.send",["Anfrage senden","Send request","Talep gÃ¶nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","å‘é€ç”³è¯·"]],["shiftlog.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","GÃ¶ndererek ÅŸunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptaÈ›i","æäº¤å³è¡¨ç¤ºæ‚¨æŽ¥å—æˆ‘ä»¬çš„"]],["support.hero.eyebrow",["SUPPORT","SUPPORT","DESTEK","SOPORTE","SUPPORT","SUPPORTO","SUPORT","æ”¯æŒ"]],["support.hero.title",["ZALâ€™THERA Support","ZALâ€™THERA Support","ZALâ€™THERA Destek","Soporte ZALâ€™THERA","Support ZALâ€™THERA","Supporto ZALâ€™THERA","Suport ZALâ€™THERA","ZALâ€™THERA æ”¯æŒ"]],["support.hero.text",["Hilfe zu ZALâ€™THERA Produkten, Systemen und bestehenden Anwendungen.","Help with ZALâ€™THERA products, systems and existing applications.","ZALâ€™THERA Ã¼rÃ¼nleri, sistemleri ve mevcut uygulamalarÄ± iÃ§in yardÄ±m.","Ayuda sobre productos, sistemas y aplicaciones existentes de ZALâ€™THERA.","Aide concernant les produits, systÃ¨mes et applications existantes de ZALâ€™THERA.","Aiuto per prodotti, sistemi e applicazioni esistenti ZALâ€™THERA.","Ajutor pentru produsele, sistemele È™i aplicaÈ›iile existente ZALâ€™THERA.","å…³äºŽ ZALâ€™THERA äº§å“ã€ç³»ç»Ÿä¸ŽçŽ°æœ‰åº”ç”¨çš„å¸®åŠ©ã€‚"]],["support.contact.title",["Kontakt","Contact","Ä°letiÅŸim","Contacto","Contact","Contatto","Contact","è”ç³»"]],["support.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","ç”µå­é‚®ä»¶ï¼š"]],["support.apps.title",["Apps & Systeme","Apps & Systems","Uygulamalar & Sistemler","Apps & Sistemas","Applications & SystÃ¨mes","App & Sistemi","AplicaÈ›ii & Sisteme","åº”ç”¨ä¸Žç³»ç»Ÿ"]],["support.apps.lifeflow",["LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow"]],["support.apps.easyproof",["EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro"]],["support.apps.lifeshield",["LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield"]],["support.apps.deliveryCore",["Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core"]],["support.apps.origin",["Origin","Origin","Origin","Origin","Origin","Origin","Origin","Origin"]],["support.apps.other.title",["Andere Produkte oder Systeme","Other products or systems","DiÄŸer Ã¼rÃ¼nler veya sistemler","Otros productos o sistemas","Autres produits ou systÃ¨mes","Altri prodotti o sistemi","Alte produse sau sisteme","å…¶ä»–äº§å“æˆ–ç³»ç»Ÿ"]],["support.apps.other.text",["Nenne bitte den Produkt- oder Systemnamen in deiner Nachricht.","Please include the product or system name in your message.","MesajÄ±nÄ±zda Ã¼rÃ¼n veya sistem adÄ±nÄ± belirtin.","Indica el nombre del producto o sistema en tu mensaje.","Indiquez le nom du produit ou systÃ¨me dans votre message.","Indica il nome del prodotto o sistema nel messaggio.","MenÈ›ioneazÄƒ numele produsului sau sistemului Ã®n mesaj.","è¯·åœ¨æ¶ˆæ¯ä¸­æ³¨æ˜Žäº§å“æˆ–ç³»ç»Ÿåç§°ã€‚"]],["support.message.title",["Damit wir schnell helfen kÃ¶nnen","To help you quickly","HÄ±zlÄ± yardÄ±mcÄ± olabilmemiz iÃ§in","Para poder ayudarte rÃ¡pido","Pour vous aider rapidement","Per poterti aiutare rapidamente","Pentru a te ajuta rapid","ä¸ºäº†æ›´å¿«å¸®åŠ©ä½ "]],["support.message.app",["App oder System nennen","Name the app or system","Uygulama veya sistemi belirtin","Indica la app o el sistema","Indiquez lâ€™application ou le systÃ¨me","Indica app o sistema","MenÈ›ioneazÄƒ aplicaÈ›ia sau sistemul","æ³¨æ˜Žåº”ç”¨æˆ–ç³»ç»Ÿ"]],["support.message.problem",["Problem mÃ¶glichst genau beschreiben","Describe the problem as precisely as possible","Sorunu mÃ¼mkÃ¼n olduÄŸunca ayrÄ±ntÄ±lÄ± aÃ§Ä±klayÄ±n","Describe el problema con la mayor precisiÃ³n posible","DÃ©crivez le problÃ¨me aussi prÃ©cisÃ©ment que possible","Descrivi il problema nel modo piÃ¹ preciso possibile","Descrie problema cÃ¢t mai exact posibil","å°½å¯èƒ½å‡†ç¡®æè¿°é—®é¢˜"]],["support.message.device",["GerÃ¤t und Betriebssystem nennen","Include device and operating system","CihazÄ± ve iÅŸletim sistemini belirtin","Indica dispositivo y sistema operativo","Indiquez lâ€™appareil et le systÃ¨me dâ€™exploitation","Indica dispositivo e sistema operativo","MenÈ›ioneazÄƒ dispozitivul È™i sistemul de operare","æ³¨æ˜Žè®¾å¤‡ä¸Žæ“ä½œç³»ç»Ÿ"]],["support.message.screenshot",["Wenn mÃ¶glich Screenshot anhÃ¤ngen","Attach a screenshot if possible","MÃ¼mkÃ¼nse ekran gÃ¶rÃ¼ntÃ¼sÃ¼ ekleyin","Adjunta una captura si es posible","Ajoutez une capture dâ€™Ã©cran si possible","Allega uno screenshot se possibile","AtaÈ™eazÄƒ o capturÄƒ dacÄƒ este posibil","å¦‚å¯èƒ½è¯·é™„æˆªå›¾"]],["support.responseTime",["Wir antworten so schnell wie mÃ¶glich.","We reply as quickly as possible.","MÃ¼mkÃ¼n olduÄŸunca hÄ±zlÄ± yanÄ±t veririz.","Respondemos lo antes posible.","Nous rÃ©pondons aussi rapidement que possible.","Rispondiamo il prima possibile.","RÄƒspundem cÃ¢t mai repede posibil.","æˆ‘ä»¬ä¼šå°½å¿«å›žå¤ã€‚"]],["support.actions.contact",["Support kontaktieren","Contact support","Destekle iletiÅŸime geÃ§","Contactar soporte","Contacter le support","Contatta il supporto","ContacteazÄƒ suportul","è”ç³»æ”¯æŒ"]],["support.actions.home",["Zur Startseite","Back to home","Ana sayfaya dÃ¶n","Volver al inicio","Retour Ã  lâ€™accueil","Torna alla home","ÃŽnapoi acasÄƒ","è¿”å›žé¦–é¡µ"]],["imprint.hero.eyebrow",["LEGAL","LEGAL","YASAL","LEGAL","JURIDIQUE","LEGALE","LEGAL","æ³•å¾‹"]],["imprint.hero.title",["Impressum","Legal Notice","Yasal Bilgiler","Aviso legal","Mentions lÃ©gales","Note legali","InformaÈ›ii legale","æ³•å¾‹å£°æ˜Ž"]],["imprint.hero.lead",["Rechtliche Anbieterinformationen zu ZALâ€™THERA.","Legal provider information for ZALâ€™THERA.","ZALâ€™THERA iÃ§in yasal saÄŸlayÄ±cÄ± bilgileri.","InformaciÃ³n legal del proveedor de ZALâ€™THERA.","Informations lÃ©gales sur le fournisseur de ZALâ€™THERA.","Informazioni legali sul fornitore ZALâ€™THERA.","InformaÈ›ii legale despre furnizorul ZALâ€™THERA.","ZALâ€™THERA çš„æ³•å¾‹æä¾›è€…ä¿¡æ¯ã€‚"]],["imprint.provider.title",["Angaben gemÃ¤ÃŸ Â§ 5 DDG","Information pursuant to Â§ 5 DDG","Â§ 5 DDG uyarÄ±nca bilgiler","InformaciÃ³n conforme al Â§ 5 DDG","Informations conformÃ©ment au Â§ 5 DDG","Informazioni ai sensi del Â§ 5 DDG","InformaÈ›ii conform Â§ 5 DDG","æ ¹æ®å¾·å›½ DDG ç¬¬ 5 æ¡çš„ä¿¡æ¯"]],["imprint.contact.title",["Kontakt","Contact","Ä°letiÅŸim","Contacto","Contact","Contatto","Contact","è”ç³»"]],["imprint.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","ç”µå­é‚®ä»¶ï¼š"]],["imprint.responsibility.title",["Verantwortlich fÃ¼r den Inhalt","Responsible for content","Ä°Ã§erikten sorumlu","Responsable del contenido","Responsable du contenu","Responsabile dei contenuti","Responsabil pentru conÈ›inut","å†…å®¹è´Ÿè´£äºº"]],["imprint.project.title",["Projekt / Marke","Project / Brand","Proje / Marka","Proyecto / Marca","Projet / Marque","Progetto / Marchio","Proiect / MarcÄƒ","é¡¹ç›® / å“ç‰Œ"]],["imprint.project.text",["ZALâ€™THERA ist ein digitales System fÃ¼r Ordnung, Nachweis, Schutz, Ãœbergabe, Vertrauen und nachvollziehbare Aktionen.","ZALâ€™THERA is a digital system for organization, evidence, protection, handover, trust and traceable actions.","ZALâ€™THERA; dÃ¼zen, kanÄ±t, koruma, devir, gÃ¼ven ve izlenebilir eylemler iÃ§in dijital bir sistemdir.","ZALâ€™THERA es un sistema digital para organizaciÃ³n, prueba, protecciÃ³n, relevo, confianza y acciones trazables.","ZALâ€™THERA est un systÃ¨me numÃ©rique pour lâ€™organisation, la preuve, la protection, la transmission, la confiance et les actions traÃ§ables.","ZALâ€™THERA Ã¨ un sistema digitale per organizzazione, prova, protezione, passaggio, fiducia e azioni tracciabili.","ZALâ€™THERA este un sistem digital pentru organizare, dovadÄƒ, protecÈ›ie, predare, Ã®ncredere È™i acÈ›iuni trasabile.","ZALâ€™THERA æ˜¯ç”¨äºŽç»„ç»‡ã€è¯æ˜Žã€ä¿æŠ¤ã€äº¤æŽ¥ã€ä¿¡ä»»ä¸Žå¯è¿½æº¯æ“ä½œçš„æ•°å­—ç³»ç»Ÿã€‚"]],["imprint.contentLiability.title",["Haftung fÃ¼r Inhalte","Liability for content","Ä°Ã§erik sorumluluÄŸu","Responsabilidad por contenidos","ResponsabilitÃ© du contenu","ResponsabilitÃ  per i contenuti","RÄƒspundere pentru conÈ›inut","å†…å®¹è´£ä»»"]],["imprint.contentLiability.text",["Als Diensteanbieter sind wir fÃ¼r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.","As a service provider, we are responsible for our own content on these pages under general law.","Hizmet saÄŸlayÄ±cÄ± olarak bu sayfalardaki kendi iÃ§eriklerimizden genel yasalar uyarÄ±nca sorumluyuz.","Como proveedor de servicios somos responsables de nuestros propios contenidos en estas pÃ¡ginas conforme a la legislaciÃ³n general.","En tant que fournisseur de services, nous sommes responsables de nos propres contenus sur ces pages conformÃ©ment au droit gÃ©nÃ©ral.","In qualitÃ  di fornitore di servizi siamo responsabili dei nostri contenuti su queste pagine secondo la legge generale.","Ca furnizor de servicii suntem responsabili pentru propriul conÈ›inut de pe aceste pagini conform legislaÈ›iei generale.","ä½œä¸ºæœåŠ¡æä¾›è€…ï¼Œæˆ‘ä»¬ä¾æ®ä¸€èˆ¬æ³•å¾‹å¯¹æœ¬ç½‘ç«™è‡ªèº«å†…å®¹è´Ÿè´£ã€‚"]],["imprint.linkLiability.title",["Haftung fÃ¼r Links","Liability for links","BaÄŸlantÄ± sorumluluÄŸu","Responsabilidad por enlaces","ResponsabilitÃ© des liens","ResponsabilitÃ  per i link","RÄƒspundere pentru linkuri","é“¾æŽ¥è´£ä»»"]],["imprint.linkLiability.text",["Unser Angebot enthÃ¤lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.","Our website contains links to external third-party websites over whose content we have no control.","Sitemiz, iÃ§erikleri Ã¼zerinde kontrolÃ¼mÃ¼z olmayan Ã¼Ã§Ã¼ncÃ¼ taraf harici web sitelerine baÄŸlantÄ±lar iÃ§erir.","Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyos contenidos no tenemos control.","Notre site contient des liens vers des sites externes tiers dont nous ne contrÃ´lons pas le contenu.","Il nostro sito contiene link a siti esterni di terzi sui cui contenuti non abbiamo controllo.","Site-ul nostru conÈ›ine linkuri cÄƒtre site-uri externe terÈ›e asupra cÄƒrora nu avem control.","æˆ‘ä»¬çš„ç½‘ç«™åŒ…å«æŒ‡å‘ç¬¬ä¸‰æ–¹å¤–éƒ¨ç½‘ç«™çš„é“¾æŽ¥ï¼Œæˆ‘ä»¬æ— æ³•æŽ§åˆ¶å…¶å†…å®¹ã€‚"]],["imprint.copyright.title",["Urheberrecht","Copyright","Telif hakkÄ±","Derechos de autor","Droit dâ€™auteur","Diritto dâ€™autore","Drepturi de autor","ç‰ˆæƒ"]],["imprint.copyright.text",["Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.","The content and works created by the site operator on these pages are subject to German copyright law.","Site iÅŸletmecisi tarafÄ±ndan oluÅŸturulan iÃ§erik ve eserler Alman telif hakkÄ± yasasÄ±na tabidir.","Los contenidos y obras creados por el operador del sitio estÃ¡n sujetos al derecho de autor alemÃ¡n.","Les contenus et Å“uvres crÃ©Ã©s par lâ€™exploitant du site sont soumis au droit dâ€™auteur allemand.","I contenuti e le opere creati dal gestore del sito sono soggetti al diritto dâ€™autore tedesco.","ConÈ›inuturile È™i operele create de operatorul site-ului sunt supuse dreptului de autor german.","ç½‘ç«™è¿è¥è€…åˆ›å»ºçš„å†…å®¹ä¸Žä½œå“å—å¾·å›½ç‰ˆæƒæ³•ä¿æŠ¤ã€‚"]],["imprint.actions.home",["Zur Startseite","Back to home","Ana sayfaya dÃ¶n","Volver al inicio","Retour Ã  lâ€™accueil","Torna alla home","ÃŽnapoi acasÄƒ","è¿”å›žé¦–é¡µ"]],["privacy.hero.eyebrow",["DATENSCHUTZ","PRIVACY","GÄ°ZLÄ°LÄ°K","PRIVACIDAD","CONFIDENTIALITÃ‰","PRIVACY","CONFIDENÈšIALITATE","éšç§"]],["privacy.hero.title",["DatenschutzerklÃ¤rung","Privacy Policy","Gizlilik PolitikasÄ±","PolÃ­tica de privacidad","Politique de confidentialitÃ©","Informativa sulla privacy","Politica de confidenÈ›ialitate","éšç§æ”¿ç­–"]],["privacy.hero.lead",["Informationen zur Verarbeitung personenbezogener Daten auf der ZALâ€™THERA Website und in verbundenen Anwendungen.","Information about the processing of personal data on the ZALâ€™THERA website and in connected applications.","ZALâ€™THERA web sitesinde ve baÄŸlantÄ±lÄ± uygulamalarda kiÅŸisel verilerin iÅŸlenmesine iliÅŸkin bilgiler.","InformaciÃ³n sobre el tratamiento de datos personales en el sitio web ZALâ€™THERA y aplicaciones conectadas.","Informations sur le traitement des donnÃ©es personnelles sur le site ZALâ€™THERA et les applications liÃ©es.","Informazioni sul trattamento dei dati personali sul sito ZALâ€™THERA e nelle applicazioni collegate.","InformaÈ›ii privind prelucrarea datelor cu caracter personal pe site-ul ZALâ€™THERA È™i Ã®n aplicaÈ›iile conectate.","å…³äºŽ ZALâ€™THERA ç½‘ç«™åŠå…³è”åº”ç”¨ä¸­ä¸ªäººæ•°æ®å¤„ç†çš„ä¿¡æ¯ã€‚"]],["privacy.controller.title",["Verantwortlicher","Controller","Veri sorumlusu","Responsable","Responsable du traitement","Titolare del trattamento","Operator","æŽ§åˆ¶è€…"]],["privacy.controller.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","ç”µå­é‚®ä»¶ï¼š"]],["privacy.website.title",["Websitezugriff","Website access","Web sitesi eriÅŸimi","Acceso al sitio web","AccÃ¨s au site","Accesso al sito","Accesarea site-ului","ç½‘ç«™è®¿é—®"]],["privacy.website.text",["Beim Aufruf dieser Website kÃ¶nnen technisch notwendige Daten verarbeitet werden, die zur Bereitstellung, Sicherheit und StabilitÃ¤t der Website erforderlich sind.","When this website is accessed, technically necessary data may be processed to provide, secure and stabilize the website.","Bu web sitesi aÃ§Ä±ldÄ±ÄŸÄ±nda, sitenin sunulmasÄ±, gÃ¼venliÄŸi ve kararlÄ±lÄ±ÄŸÄ± iÃ§in gerekli teknik veriler iÅŸlenebilir.","Al acceder a este sitio pueden tratarse datos tÃ©cnicamente necesarios para ofrecer, asegurar y estabilizar el sitio.","Lors de lâ€™accÃ¨s Ã  ce site, des donnÃ©es techniquement nÃ©cessaires peuvent Ãªtre traitÃ©es afin dâ€™assurer sa fourniture, sa sÃ©curitÃ© et sa stabilitÃ©.","Durante lâ€™accesso al sito possono essere trattati dati tecnicamente necessari per fornire, proteggere e stabilizzare il sito.","La accesarea acestui site pot fi prelucrate date necesare tehnic pentru furnizarea, securitatea È™i stabilitatea site-ului.","è®¿é—®æœ¬ç½‘ç«™æ—¶ï¼Œå¯èƒ½ä¼šå¤„ç†ä¸ºæä¾›ã€å®‰å…¨ä¸Žç¨³å®šè¿è¡Œç½‘ç«™æ‰€å¿…éœ€çš„æŠ€æœ¯æ•°æ®ã€‚"]],["privacy.contact.title",["Kontaktaufnahme","Contact","Ä°letiÅŸim","Contacto","Prise de contact","Contatto","Contact","è”ç³»"]],["privacy.contact.text1",["Wenn du uns per E-Mail oder Kontaktformular kontaktierst, verarbeiten wir die von dir Ã¼bermittelten Angaben zur Bearbeitung deiner Anfrage.","If you contact us by email or contact form, we process the information you provide in order to handle your request.","E-posta veya iletiÅŸim formu ile bize ulaÅŸÄ±rsanÄ±z, talebinizi iÅŸlemek iÃ§in ilettiÄŸiniz bilgileri iÅŸleriz.","Si nos contactas por correo o formulario, tratamos los datos enviados para gestionar tu solicitud.","Si vous nous contactez par e-mail ou formulaire, nous traitons les informations transmises afin de gÃ©rer votre demande.","Se ci contatti via e-mail o modulo, trattiamo i dati forniti per gestire la richiesta.","DacÄƒ ne contactezi prin e-mail sau formular, prelucrÄƒm informaÈ›iile furnizate pentru a gestiona solicitarea.","å¦‚æžœä½ é€šè¿‡ç”µå­é‚®ä»¶æˆ–è”ç³»è¡¨å•è”ç³»æˆ‘ä»¬ï¼Œæˆ‘ä»¬ä¼šå¤„ç†ä½ æä¾›çš„ä¿¡æ¯ä»¥å¤„ç†ä½ çš„è¯·æ±‚ã€‚"]],["privacy.contact.text2",["FÃ¼r Kontaktformulare kann ein technischer Dienst wie Formspree eingesetzt werden. Dabei kÃ¶nnen die eingegebenen Daten an diesen Dienst Ã¼bertragen werden.","A technical service such as Formspree may be used for contact forms. The entered data may therefore be transmitted to that service.","Ä°letiÅŸim formlarÄ± iÃ§in Formspree gibi teknik bir hizmet kullanÄ±labilir. Girilen veriler bu hizmete aktarÄ±labilir.","Para formularios de contacto puede utilizarse un servicio tÃ©cnico como Formspree. Los datos introducidos pueden transmitirse a dicho servicio.","Un service technique tel que Formspree peut Ãªtre utilisÃ© pour les formulaires. Les donnÃ©es saisies peuvent alors Ãªtre transmises Ã  ce service.","Per i moduli di contatto puÃ² essere utilizzato un servizio tecnico come Formspree. I dati inseriti possono quindi essere trasmessi a tale servizio.","Pentru formularele de contact poate fi folosit un serviciu tehnic precum Formspree. Datele introduse pot fi transmise acestui serviciu.","è”ç³»è¡¨å•å¯èƒ½ä½¿ç”¨ Formspree ç­‰æŠ€æœ¯æœåŠ¡ï¼Œè¾“å…¥çš„æ•°æ®å¯èƒ½ä¼šä¼ è¾“ç»™è¯¥æœåŠ¡ã€‚"]],["privacy.apps.title",["ZALâ€™THERA Apps","ZALâ€™THERA Apps","ZALâ€™THERA UygulamalarÄ±","Apps ZALâ€™THERA","Applications ZALâ€™THERA","App ZALâ€™THERA","AplicaÈ›ii ZALâ€™THERA","ZALâ€™THERA åº”ç”¨"]],["privacy.apps.text1",["Daten in ZALâ€™THERA Anwendungen werden grundsÃ¤tzlich lokal auf dem jeweiligen GerÃ¤t verarbeitet, soweit bei einer Funktion nicht ausdrÃ¼cklich etwas anderes angegeben wird.","Data in ZALâ€™THERA applications is generally processed locally on the respective device unless a feature explicitly states otherwise.","ZALâ€™THERA uygulamalarÄ±ndaki veriler, bir Ã¶zellikte aksi aÃ§Ä±kÃ§a belirtilmedikÃ§e temel olarak ilgili cihazda yerel iÅŸlenir.","Los datos de las aplicaciones ZALâ€™THERA se procesan en principio localmente en el dispositivo, salvo que una funciÃ³n indique expresamente lo contrario.","Les donnÃ©es des applications ZALâ€™THERA sont en principe traitÃ©es localement sur lâ€™appareil, sauf indication explicite contraire dâ€™une fonction.","I dati nelle applicazioni ZALâ€™THERA vengono generalmente elaborati localmente sul dispositivo, salvo diversa indicazione esplicita di una funzione.","Datele din aplicaÈ›iile ZALâ€™THERA sunt procesate Ã®n principal local pe dispozitiv, dacÄƒ o funcÈ›ie nu indicÄƒ explicit altceva.","ZALâ€™THERA åº”ç”¨ä¸­çš„æ•°æ®åŽŸåˆ™ä¸Šåœ¨ç›¸åº”è®¾å¤‡æœ¬åœ°å¤„ç†ï¼Œé™¤éžæŸé¡¹åŠŸèƒ½æ˜Žç¡®è¯´æ˜Žå…¶ä»–å¤„ç†æ–¹å¼ã€‚"]],["privacy.apps.text2",["Einzelne zukÃ¼nftige Funktionen kÃ¶nnen externe Dienste verwenden. In diesem Fall wird die jeweilige Verarbeitung transparent beschrieben.","Individual future features may use external services. In that case, the relevant processing will be described transparently.","Gelecekteki bazÄ± Ã¶zellikler harici hizmetler kullanabilir. Bu durumda ilgili iÅŸleme ÅŸeffaf biÃ§imde aÃ§Ä±klanÄ±r.","Algunas funciones futuras pueden utilizar servicios externos. En ese caso, el tratamiento correspondiente se describirÃ¡ de forma transparente.","Certaines fonctions futures peuvent utiliser des services externes. Le traitement concernÃ© sera alors dÃ©crit de maniÃ¨re transparente.","Alcune funzioni future possono utilizzare servizi esterni. In tal caso il relativo trattamento sarÃ  descritto in modo trasparente.","Unele funcÈ›ii viitoare pot utiliza servicii externe. ÃŽn acest caz, prelucrarea va fi descrisÄƒ transparent.","æœªæ¥éƒ¨åˆ†åŠŸèƒ½å¯èƒ½ä½¿ç”¨å¤–éƒ¨æœåŠ¡ï¼›å±Šæ—¶ç›¸å…³å¤„ç†ä¼šé€æ˜Žè¯´æ˜Žã€‚"]],["privacy.files.title",["Kamera, Fotos und Dateien","Camera, photos and files","Kamera, fotoÄŸraflar ve dosyalar","CÃ¡mara, fotos y archivos","CamÃ©ra, photos et fichiers","Fotocamera, foto e file","CamerÄƒ, fotografii È™i fiÈ™iere","ç›¸æœºã€ç…§ç‰‡ä¸Žæ–‡ä»¶"]],["privacy.files.text",["Wenn eine App Zugriff auf Kamera, Fotos oder Dateien benÃ¶tigt, erfolgt dieser Zugriff nur im Rahmen der jeweiligen Funktion und nach den Berechtigungen des Betriebssystems.","If an app requires access to the camera, photos or files, that access occurs only for the relevant feature and according to operating-system permissions.","Bir uygulama kamera, fotoÄŸraf veya dosyalara eriÅŸim gerektiriyorsa bu eriÅŸim yalnÄ±zca ilgili Ã¶zellik kapsamÄ±nda ve iÅŸletim sistemi izinlerine gÃ¶re gerÃ§ekleÅŸir.","Si una app necesita acceso a cÃ¡mara, fotos o archivos, ese acceso se realiza solo para la funciÃ³n correspondiente y segÃºn los permisos del sistema operativo.","Si une application nÃ©cessite lâ€™accÃ¨s Ã  la camÃ©ra, aux photos ou aux fichiers, cet accÃ¨s nâ€™a lieu que pour la fonction concernÃ©e et selon les autorisations du systÃ¨me.","Se unâ€™app richiede accesso a fotocamera, foto o file, lâ€™accesso avviene solo per la funzione interessata e secondo i permessi del sistema operativo.","DacÄƒ o aplicaÈ›ie necesitÄƒ acces la camerÄƒ, fotografii sau fiÈ™iere, accesul are loc doar pentru funcÈ›ia respectivÄƒ È™i conform permisiunilor sistemului.","å¦‚æžœåº”ç”¨éœ€è¦è®¿é—®ç›¸æœºã€ç…§ç‰‡æˆ–æ–‡ä»¶ï¼Œè¯¥è®¿é—®ä»…ç”¨äºŽç›¸åº”åŠŸèƒ½ï¼Œå¹¶éµå¾ªæ“ä½œç³»ç»Ÿæƒé™ã€‚"]],["privacy.tracking.title",["Tracking und Werbung","Tracking and advertising","Takip ve reklam","Seguimiento y publicidad","Suivi et publicitÃ©","Tracciamento e pubblicitÃ ","UrmÄƒrire È™i publicitate","è·Ÿè¸ªä¸Žå¹¿å‘Š"]],["privacy.tracking.text",["ZALâ€™THERA verwendet keine werbebasierten Tracking-Systeme, sofern nicht ausdrÃ¼cklich anders angegeben.","ZALâ€™THERA does not use advertising-based tracking systems unless explicitly stated otherwise.","ZALâ€™THERA, aÃ§Ä±kÃ§a aksi belirtilmedikÃ§e reklam temelli takip sistemleri kullanmaz.","ZALâ€™THERA no utiliza sistemas de seguimiento publicitario salvo indicaciÃ³n expresa en contrario.","ZALâ€™THERA nâ€™utilise pas de systÃ¨mes de suivi publicitaire sauf indication explicite contraire.","ZALâ€™THERA non utilizza sistemi di tracciamento pubblicitario salvo diversa indicazione esplicita.","ZALâ€™THERA nu utilizeazÄƒ sisteme de urmÄƒrire bazate pe publicitate, dacÄƒ nu se indicÄƒ explicit altfel.","é™¤éžæ˜Žç¡®å¦æœ‰è¯´æ˜Žï¼ŒZALâ€™THERA ä¸ä½¿ç”¨åŸºäºŽå¹¿å‘Šçš„è·Ÿè¸ªç³»ç»Ÿã€‚"]],["privacy.purposes.title",["Zwecke der Verarbeitung","Purposes of processing","Ä°ÅŸleme amaÃ§larÄ±","Finalidades del tratamiento","FinalitÃ©s du traitement","FinalitÃ  del trattamento","Scopurile prelucrÄƒrii","å¤„ç†ç›®çš„"]],["privacy.purposes.website",["Bereitstellung und Sicherheit der Website","Providing and securing the website","Web sitesinin sunulmasÄ± ve gÃ¼venliÄŸi","PrestaciÃ³n y seguridad del sitio web","Fourniture et sÃ©curitÃ© du site","Fornitura e sicurezza del sito","Furnizarea È™i securitatea site-ului","æä¾›ä¸Žä¿éšœç½‘ç«™å®‰å…¨"]],["privacy.purposes.support",["Bearbeitung von Support- und Kontaktanfragen","Handling support and contact requests","Destek ve iletiÅŸim taleplerinin iÅŸlenmesi","GestiÃ³n de solicitudes de soporte y contacto","Traitement des demandes de support et de contact","Gestione delle richieste di supporto e contatto","Gestionarea solicitÄƒrilor de suport È™i contact","å¤„ç†æ”¯æŒä¸Žè”ç³»è¯·æ±‚"]],["privacy.purposes.features",["Bereitstellung von App-Funktionen","Providing app features","Uygulama Ã¶zelliklerinin sunulmasÄ±","PrestaciÃ³n de funciones de la app","Fourniture des fonctions de lâ€™application","Fornitura delle funzioni dellâ€™app","Furnizarea funcÈ›iilor aplicaÈ›iei","æä¾›åº”ç”¨åŠŸèƒ½"]],["privacy.purposes.storage",["Lokale Speicherung und Verarbeitung, soweit vorgesehen","Local storage and processing where intended","Ã–ngÃ¶rÃ¼ldÃ¼ÄŸÃ¼ Ã¶lÃ§Ã¼de yerel depolama ve iÅŸleme","Almacenamiento y tratamiento local cuando estÃ© previsto","Stockage et traitement locaux lorsque prÃ©vus","Archiviazione ed elaborazione locale ove previste","Stocare È™i prelucrare localÄƒ, unde este prevÄƒzut","æŒ‰è®¾è®¡è¿›è¡Œæœ¬åœ°å­˜å‚¨ä¸Žå¤„ç†"]],["privacy.purposes.improvement",["Technische StabilitÃ¤t und Verbesserung","Technical stability and improvement","Teknik kararlÄ±lÄ±k ve geliÅŸtirme","Estabilidad tÃ©cnica y mejora","StabilitÃ© technique et amÃ©lioration","StabilitÃ  tecnica e miglioramento","Stabilitate tehnicÄƒ È™i Ã®mbunÄƒtÄƒÈ›ire","æŠ€æœ¯ç¨³å®šä¸Žæ”¹è¿›"]],["privacy.legalBasis.title",["Rechtsgrundlagen","Legal bases","Hukuki dayanaklar","Bases jurÃ­dicas","Bases lÃ©gales","Basi giuridiche","Temeiuri juridice","æ³•å¾‹ä¾æ®"]],["privacy.legalBasis.text",["Je nach Verarbeitung kommen insbesondere Art. 6 Abs. 1 lit. b und lit. f DSGVO sowie â€“ sofern erforderlich â€“ eine Einwilligung als Rechtsgrundlage in Betracht.","Depending on the processing, Art. 6(1)(b) and (f) GDPR in particular, and consent where required, may serve as legal bases.","Ä°ÅŸlemeye baÄŸlÄ± olarak Ã¶zellikle GDPR Madde 6(1)(b) ve (f) ile gerektiÄŸinde rÄ±za hukuki dayanak olabilir.","SegÃºn el tratamiento, pueden ser aplicables en particular el art. 6.1.b y f del RGPD y, cuando sea necesario, el consentimiento.","Selon le traitement, lâ€™art. 6, par. 1, b et f du RGPD ainsi que, si nÃ©cessaire, le consentement peuvent notamment constituer la base lÃ©gale.","A seconda del trattamento, possono costituire base giuridica in particolare lâ€™art. 6(1)(b) e (f) GDPR e, se necessario, il consenso.","ÃŽn funcÈ›ie de prelucrare, Ã®n special art. 6 alin. (1) lit. b È™i f GDPR È™i, dacÄƒ este necesar, consimÈ›ÄƒmÃ¢ntul pot constitui temeiuri juridice.","æ ¹æ®å¤„ç†æƒ…å½¢ï¼ŒGDPR ç¬¬ 6(1)(b) ä¸Ž (f) æ¡ï¼Œä»¥åŠåœ¨å¿…è¦æ—¶çš„åŒæ„ï¼Œå¯ä½œä¸ºç›¸å…³æ³•å¾‹ä¾æ®ã€‚"]],["privacy.storage.title",["Speicherdauer","Storage period","Saklama sÃ¼resi","Plazo de conservaciÃ³n","DurÃ©e de conservation","Periodo di conservazione","Perioada de stocare","å­˜å‚¨æœŸé™"]],["privacy.storage.text",["Personenbezogene Daten werden nur so lange gespeichert, wie dies fÃ¼r den jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten dies verlangen.","Personal data is stored only for as long as necessary for the relevant purpose or as required by law.","KiÅŸisel veriler yalnÄ±zca ilgili amaÃ§ iÃ§in gerekli olduÄŸu veya yasal yÃ¼kÃ¼mlÃ¼lÃ¼kler gerektirdiÄŸi sÃ¼re boyunca saklanÄ±r.","Los datos personales se conservan solo mientras sea necesario para la finalidad correspondiente o lo exija la ley.","Les donnÃ©es personnelles ne sont conservÃ©es que pendant la durÃ©e nÃ©cessaire Ã  la finalitÃ© concernÃ©e ou imposÃ©e par la loi.","I dati personali sono conservati solo per il tempo necessario allo scopo pertinente o richiesto dalla legge.","Datele cu caracter personal sunt stocate doar atÃ¢t timp cÃ¢t este necesar scopului respectiv sau impus de lege.","ä¸ªäººæ•°æ®ä»…åœ¨ç›¸å…³ç›®çš„æ‰€éœ€æœŸé—´æˆ–æ³•å¾‹è¦æ±‚çš„æœŸé™å†…ä¿å­˜ã€‚"]],["privacy.rights.title",["Deine Rechte","Your rights","HaklarÄ±nÄ±z","Tus derechos","Vos droits","I tuoi diritti","Drepturile tale","ä½ çš„æƒåˆ©"]],["privacy.rights.text1",["Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung, LÃ¶schung, EinschrÃ¤nkung der Verarbeitung, DatenÃ¼bertragbarkeit und Widerspruch.","Subject to legal requirements, you have rights including access, rectification, erasure, restriction of processing, data portability and objection.","Yasal koÅŸullar Ã§erÃ§evesinde eriÅŸim, dÃ¼zeltme, silme, iÅŸlemenin kÄ±sÄ±tlanmasÄ±, veri taÅŸÄ±nabilirliÄŸi ve itiraz gibi haklara sahipsiniz.","Dentro de los requisitos legales tienes derechos, entre otros, de acceso, rectificaciÃ³n, supresiÃ³n, limitaciÃ³n del tratamiento, portabilidad y oposiciÃ³n.","Sous rÃ©serve des conditions lÃ©gales, vous disposez notamment de droits dâ€™accÃ¨s, de rectification, dâ€™effacement, de limitation, de portabilitÃ© et dâ€™opposition.","Nel rispetto dei requisiti legali hai, tra gli altri, diritti di accesso, rettifica, cancellazione, limitazione, portabilitÃ  e opposizione.","ÃŽn condiÈ›iile legii ai, printre altele, drepturi de acces, rectificare, È™tergere, restricÈ›ionare, portabilitate È™i opoziÈ›ie.","åœ¨æ³•å¾‹è§„å®šæ¡ä»¶ä¸‹ï¼Œä½ å°¤å…¶äº«æœ‰è®¿é—®ã€æ›´æ­£ã€åˆ é™¤ã€é™åˆ¶å¤„ç†ã€æ•°æ®å¯æºä¸Žåå¯¹ç­‰æƒåˆ©ã€‚"]],["privacy.rights.text2",["AuÃŸerdem besteht das Recht, sich bei einer zustÃ¤ndigen DatenschutzaufsichtsbehÃ¶rde zu beschweren.","You also have the right to lodge a complaint with a competent data-protection supervisory authority.","AyrÄ±ca yetkili veri koruma denetim makamÄ±na ÅŸikÃ¢yette bulunma hakkÄ±nÄ±z vardÄ±r.","TambiÃ©n tienes derecho a presentar una reclamaciÃ³n ante una autoridad de protecciÃ³n de datos competente.","Vous avez Ã©galement le droit dâ€™introduire une rÃ©clamation auprÃ¨s dâ€™une autoritÃ© de contrÃ´le compÃ©tente.","Hai inoltre il diritto di proporre reclamo a unâ€™autoritÃ  di controllo competente.","Ai de asemenea dreptul de a depune o plÃ¢ngere la o autoritate competentÄƒ de protecÈ›ie a datelor.","ä½ è¿˜æœ‰æƒå‘æœ‰ç®¡è¾–æƒçš„æ•°æ®ä¿æŠ¤ç›‘ç®¡æœºæž„æå‡ºæŠ•è¯‰ã€‚"]],["privacy.externalLinks.title",["Externe Links","External links","Harici baÄŸlantÄ±lar","Enlaces externos","Liens externes","Link esterni","Linkuri externe","å¤–éƒ¨é“¾æŽ¥"]],["privacy.externalLinks.text",["FÃ¼r Inhalte und Datenschutzpraktiken externer Websites gelten die Bestimmungen der jeweiligen Anbieter.","The policies of the respective providers apply to the content and privacy practices of external websites.","Harici web sitelerinin iÃ§erik ve gizlilik uygulamalarÄ± iÃ§in ilgili saÄŸlayÄ±cÄ±larÄ±n hÃ¼kÃ¼mleri geÃ§erlidir.","Para el contenido y las prÃ¡cticas de privacidad de sitios externos se aplican las disposiciones de sus respectivos proveedores.","Les dispositions des fournisseurs concernÃ©s sâ€™appliquent au contenu et aux pratiques de confidentialitÃ© des sites externes.","Per contenuti e pratiche privacy dei siti esterni si applicano le disposizioni dei rispettivi fornitori.","Pentru conÈ›inutul È™i practicile de confidenÈ›ialitate ale site-urilor externe se aplicÄƒ regulile furnizorilor respectivi.","å¤–éƒ¨ç½‘ç«™çš„å†…å®¹ä¸Žéšç§å®žè·µé€‚ç”¨å„è‡ªæä¾›è€…çš„è§„å®šã€‚"]],["privacy.actions.home",["Zur Startseite","Back to home","Ana sayfaya dÃ¶n","Volver al inicio","Retour Ã  lâ€™accueil","Torna alla home","ÃŽnapoi acasÄƒ","è¿”å›žé¦–é¡µ"]],["terms.hero.eyebrow",["ALLGEMEINE GESCHÃ„FTSBEDINGUNGEN","TERMS AND CONDITIONS","GENEL ÅžARTLAR VE KOÅžULLAR","TÃ‰RMINOS Y CONDICIONES","CONDITIONS GÃ‰NÃ‰RALES","TERMINI E CONDIZIONI","TERMENI È˜I CONDIÈšII","ä¸€èˆ¬æ¡æ¬¾ä¸Žæ¡ä»¶"]],["terms.hero.title",["Allgemeine GeschÃ¤ftsbedingungen (AGB)","Terms and Conditions","Genel Åžartlar ve KoÅŸullar","TÃ©rminos y Condiciones","Conditions GÃ©nÃ©rales","Termini e Condizioni","Termeni È™i CondiÈ›ii","ä¸€èˆ¬æ¡æ¬¾ä¸Žæ¡ä»¶"]],["terms.provider.title",["1. Anbieter","1. Provider","1. SaÄŸlayÄ±cÄ±","1. Proveedor","1. Fournisseur","1. Fornitore","1. Furnizor","1. æä¾›è€…"]],["terms.provider.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","ç”µå­é‚®ä»¶ï¼š"]],["terms.subject.title",["2. Vertragsgegenstand","2. Subject of the contract","2. SÃ¶zleÅŸmenin konusu","2. Objeto del contrato","2. Objet du contrat","2. Oggetto del contratto","2. Obiectul contractului","2. åˆåŒæ ‡çš„"]],["terms.subject.text",["Gegenstand ist der Verkauf einer digitalen Anwendung (â€žLifeFlowâ€œ). Es handelt sich aktuell um eine Vorbestellung. Der Zugriff erfolgt nach VerÃ¶ffentlichung.","The subject is the sale of a digital application (â€œLifeFlowâ€). It is currently a pre-order. Access is provided after publication.","SÃ¶zleÅŸmenin konusu dijital bir uygulamanÄ±n (â€œLifeFlowâ€) satÄ±ÅŸÄ±dÄ±r. Åžu anda Ã¶n sipariÅŸtir. EriÅŸim yayÄ±mlandÄ±ktan sonra saÄŸlanÄ±r.","El objeto es la venta de una aplicaciÃ³n digital (â€œLifeFlowâ€). Actualmente se trata de una precompra. El acceso se proporciona tras la publicaciÃ³n.","Lâ€™objet est la vente dâ€™une application numÃ©rique (Â« LifeFlow Â»). Il sâ€™agit actuellement dâ€™une prÃ©commande. Lâ€™accÃ¨s est fourni aprÃ¨s publication.","Oggetto Ã¨ la vendita di unâ€™applicazione digitale (â€œLifeFlowâ€). Attualmente si tratta di un preordine. Lâ€™accesso viene fornito dopo la pubblicazione.","Obiectul este vÃ¢nzarea unei aplicaÈ›ii digitale (â€žLifeFlowâ€). ÃŽn prezent este o precomandÄƒ. Accesul este oferit dupÄƒ publicare.","æ ‡çš„æ˜¯æ•°å­—åº”ç”¨â€œLifeFlowâ€çš„é”€å”®ã€‚ç›®å‰å±žäºŽé¢„è´­ï¼Œå‘å¸ƒåŽæä¾›è®¿é—®ã€‚"]],["terms.contract.title",["3. Vertragsschluss","3. Conclusion of contract","3. SÃ¶zleÅŸmenin kurulmasÄ±","3. CelebraciÃ³n del contrato","3. Conclusion du contrat","3. Conclusione del contratto","3. ÃŽncheierea contractului","3. åˆåŒæˆç«‹"]],["terms.contract.text",["Der Vertrag kommt zustande, sobald die Zahlung Ã¼ber den bereitgestellten Zahlungsanbieter (z. B. PayPal) erfolgt ist.","The contract is concluded once payment has been made through the provided payment provider (e.g. PayPal).","SÃ¶zleÅŸme, saÄŸlanan Ã¶deme hizmeti (Ã¶r. PayPal) Ã¼zerinden Ã¶deme yapÄ±ldÄ±ÄŸÄ±nda kurulur.","El contrato se celebra cuando se realiza el pago mediante el proveedor de pago facilitado (p. ej., PayPal).","Le contrat est conclu dÃ¨s que le paiement est effectuÃ© via le prestataire de paiement fourni (p. ex. PayPal).","Il contratto si conclude quando il pagamento viene effettuato tramite il fornitore di pagamento messo a disposizione (es. PayPal).","Contractul se Ã®ncheie odatÄƒ ce plata este efectuatÄƒ prin furnizorul de plÄƒÈ›i disponibil (de ex. PayPal).","ä¸€æ—¦é€šè¿‡æä¾›çš„æ”¯ä»˜æœåŠ¡å•†ï¼ˆä¾‹å¦‚ PayPalï¼‰å®Œæˆä»˜æ¬¾ï¼ŒåˆåŒå³æˆç«‹ã€‚"]],["terms.delivery.title",["4. Lieferung","4. Delivery","4. Teslimat","4. Entrega","4. Livraison","4. Consegna","4. Livrare","4. äº¤ä»˜"]],["terms.delivery.text",["Die Lieferung erfolgt digital. Der Zugang zur Anwendung wird nach VerÃ¶ffentlichung bereitgestellt. Ein genauer Zeitpunkt kann nicht garantiert werden, erfolgt jedoch so schnell wie mÃ¶glich.","Delivery is digital. Access to the application is provided after publication. An exact date cannot be guaranteed, but access will be provided as quickly as possible.","Teslimat dijital olarak yapÄ±lÄ±r. Uygulamaya eriÅŸim yayÄ±mlandÄ±ktan sonra saÄŸlanÄ±r. Kesin bir tarih garanti edilemez ancak mÃ¼mkÃ¼n olan en kÄ±sa sÃ¼rede saÄŸlanÄ±r.","La entrega es digital. El acceso a la aplicaciÃ³n se proporciona tras la publicaciÃ³n. No puede garantizarse una fecha exacta, pero se facilitarÃ¡ lo antes posible.","La livraison est numÃ©rique. Lâ€™accÃ¨s Ã  lâ€™application est fourni aprÃ¨s publication. Une date prÃ©cise ne peut Ãªtre garantie, mais lâ€™accÃ¨s sera fourni dÃ¨s que possible.","La consegna Ã¨ digitale. Lâ€™accesso allâ€™applicazione viene fornito dopo la pubblicazione. Non Ã¨ possibile garantire una data esatta, ma sarÃ  fornito il prima possibile.","Livrarea este digitalÄƒ. Accesul la aplicaÈ›ie este oferit dupÄƒ publicare. Nu poate fi garantatÄƒ o datÄƒ exactÄƒ, dar accesul va fi oferit cÃ¢t mai repede posibil.","äº¤ä»˜ä»¥æ•°å­—æ–¹å¼è¿›è¡Œã€‚åº”ç”¨å‘å¸ƒåŽæä¾›è®¿é—®ã€‚æ— æ³•ä¿è¯ç¡®åˆ‡æ—¶é—´ï¼Œä½†ä¼šå°½å¿«æä¾›ã€‚"]],["terms.prices.title",["5. Preise","5. Prices","5. Fiyatlar","5. Precios","5. Prix","5. Prezzi","5. PreÈ›uri","5. ä»·æ ¼"]],["terms.prices.text",["Alle Preise sind Endpreise. GemÃ¤ÃŸ Â§19 UStG wird keine Umsatzsteuer berechnet.","All prices are final prices. No VAT is charged pursuant to Â§19 UStG.","TÃ¼m fiyatlar nihai fiyatlardÄ±r. Alman UStG Â§19 uyarÄ±nca KDV hesaplanmaz.","Todos los precios son finales. Conforme al Â§19 UStG no se cobra IVA.","Tous les prix sont des prix finaux. ConformÃ©ment au Â§19 UStG, aucune TVA nâ€™est facturÃ©e.","Tutti i prezzi sono finali. Ai sensi del Â§19 UStG non viene addebitata IVA.","Toate preÈ›urile sunt finale. Conform Â§19 UStG nu se percepe TVA.","æ‰€æœ‰ä»·æ ¼å‡ä¸ºæœ€ç»ˆä»·æ ¼ã€‚æ ¹æ®å¾·å›½ UStG ç¬¬ 19 æ¡ï¼Œä¸æ”¶å–å¢žå€¼ç¨Žã€‚"]],["terms.license.title",["6. Nutzungsrechte","6. Usage rights","6. KullanÄ±m haklarÄ±","6. Derechos de uso","6. Droits dâ€™utilisation","6. Diritti dâ€™uso","6. Drepturi de utilizare","6. ä½¿ç”¨æƒ"]],["terms.license.text",["Der KÃ¤ufer erhÃ¤lt ein einfaches, nicht Ã¼bertragbares Nutzungsrecht. Weitergabe, Verkauf oder VervielfÃ¤ltigung der Software ist nicht gestattet.","The buyer receives a simple, non-transferable right of use. Distribution, resale or reproduction of the software is not permitted.","AlÄ±cÄ± basit ve devredilemez bir kullanÄ±m hakkÄ± alÄ±r. YazÄ±lÄ±mÄ±n daÄŸÄ±tÄ±lmasÄ±, satÄ±lmasÄ± veya Ã§oÄŸaltÄ±lmasÄ± yasaktÄ±r.","El comprador recibe un derecho de uso simple y no transferible. No se permite distribuir, vender o reproducir el software.","Lâ€™acheteur reÃ§oit un droit dâ€™utilisation simple et non transfÃ©rable. La transmission, la revente ou la reproduction du logiciel ne sont pas autorisÃ©es.","Lâ€™acquirente riceve un diritto dâ€™uso semplice e non trasferibile. Non sono consentiti distribuzione, vendita o riproduzione del software.","CumpÄƒrÄƒtorul primeÈ™te un drept de utilizare simplu, netransferabil. Distribuirea, vÃ¢nzarea sau reproducerea software-ului nu sunt permise.","è´­ä¹°è€…èŽ·å¾—ç®€å•ã€ä¸å¯è½¬è®©çš„ä½¿ç”¨æƒã€‚ä¸å¾—åˆ†å‘ã€é”€å”®æˆ–å¤åˆ¶è½¯ä»¶ã€‚"]],["terms.liability.title",["7. Haftung","7. Liability","7. Sorumluluk","7. Responsabilidad","7. ResponsabilitÃ©","7. ResponsabilitÃ ","7. RÄƒspundere","7. è´£ä»»"]],["terms.liability.text",["Die Nutzung erfolgt auf eigene Verantwortung. Es wird keine Haftung fÃ¼r finanzielle Entscheidungen Ã¼bernommen, die auf Basis der App getroffen werden.","Use is at your own responsibility. No liability is assumed for financial decisions made on the basis of the app.","KullanÄ±m kendi sorumluluÄŸunuzdadÄ±r. Uygulamaya dayanarak alÄ±nan finansal kararlar iÃ§in sorumluluk kabul edilmez.","El uso es bajo propia responsabilidad. No se asume responsabilidad por decisiones financieras tomadas sobre la base de la app.","Lâ€™utilisation se fait sous votre propre responsabilitÃ©. Aucune responsabilitÃ© nâ€™est assumÃ©e pour les dÃ©cisions financiÃ¨res prises sur la base de lâ€™application.","Lâ€™utilizzo avviene sotto la propria responsabilitÃ . Non si assume responsabilitÃ  per decisioni finanziarie prese sulla base dellâ€™app.","Utilizarea are loc pe propria rÄƒspundere. Nu se asumÄƒ rÄƒspundere pentru decizii financiare luate pe baza aplicaÈ›iei.","ä½¿ç”¨ç”±ç”¨æˆ·è‡ªè¡Œè´Ÿè´£ã€‚å¯¹äºŽåŸºäºŽè¯¥åº”ç”¨åšå‡ºçš„è´¢åŠ¡å†³å®šï¼Œä¸æ‰¿æ‹…è´£ä»»ã€‚"]],["terms.final.title",["8. Schlussbestimmungen","8. Final provisions","8. Son hÃ¼kÃ¼mler","8. Disposiciones finales","8. Dispositions finales","8. Disposizioni finali","8. DispoziÈ›ii finale","8. æœ€ç»ˆæ¡æ¬¾"]],["terms.final.text",["Es gilt deutsches Recht.","German law applies.","Alman hukuku uygulanÄ±r.","Se aplica el derecho alemÃ¡n.","Le droit allemand sâ€™applique.","Si applica il diritto tedesco.","Se aplicÄƒ dreptul german.","é€‚ç”¨å¾·å›½æ³•å¾‹ã€‚"]],["terms.actions.home",["Zur Startseite","Back to home","Ana sayfaya dÃ¶n","Volver al inicio","Retour Ã  lâ€™accueil","Torna alla home","ÃŽnapoi acasÄƒ","è¿”å›žé¦–é¡µ"]],["withdrawal.hero.eyebrow",["WIDERRUF","WITHDRAWAL","CAYMA","DESISTIMIENTO","RÃ‰TRACTATION","RECESSO","RETRAGERE","æ’¤é”€"]],["withdrawal.hero.title",["Widerrufsbelehrung","Withdrawal Policy","Cayma HakkÄ± Bilgilendirmesi","InformaciÃ³n sobre desistimiento","Information sur le droit de rÃ©tractation","Informativa sul recesso","Informare privind retragerea","æ’¤é”€æƒè¯´æ˜Ž"]],["withdrawal.right.title",["Widerrufsrecht","Right of withdrawal","Cayma hakkÄ±","Derecho de desistimiento","Droit de rÃ©tractation","Diritto di recesso","Drept de retragere","æ’¤é”€æƒ"]],["withdrawal.right.text1",["Du hast das Recht, binnen vierzehn Tagen ohne Angabe von GrÃ¼nden diesen Vertrag zu widerrufen.","You have the right to withdraw from this contract within fourteen days without giving any reason.","On dÃ¶rt gÃ¼n iÃ§inde herhangi bir gerekÃ§e gÃ¶stermeden bu sÃ¶zleÅŸmeden cayma hakkÄ±nÄ±z vardÄ±r.","Tienes derecho a desistir de este contrato en un plazo de catorce dÃ­as sin indicar motivo.","Vous avez le droit de vous rÃ©tracter de ce contrat dans un dÃ©lai de quatorze jours sans indiquer de motif.","Hai il diritto di recedere dal presente contratto entro quattordici giorni senza indicarne il motivo.","Ai dreptul sÄƒ te retragi din acest contract Ã®n termen de paisprezece zile fÄƒrÄƒ a indica un motiv.","ä½ æœ‰æƒåœ¨åå››å¤©å†…æ— é¡»è¯´æ˜Žç†ç”±æ’¤é”€æœ¬åˆåŒã€‚"]],["withdrawal.right.text2",["Die Widerrufsfrist betrÃ¤gt vierzehn Tage ab dem Tag des Vertragsabschlusses.","The withdrawal period is fourteen days from the day the contract is concluded.","Cayma sÃ¼resi sÃ¶zleÅŸmenin kurulduÄŸu gÃ¼nden itibaren on dÃ¶rt gÃ¼ndÃ¼r.","El plazo de desistimiento es de catorce dÃ­as desde la celebraciÃ³n del contrato.","Le dÃ©lai de rÃ©tractation est de quatorze jours Ã  compter de la conclusion du contrat.","Il termine di recesso Ã¨ di quattordici giorni dalla conclusione del contratto.","Perioada de retragere este de paisprezece zile de la data Ã®ncheierii contractului.","æ’¤é”€æœŸé™ä¸ºåˆåŒæˆç«‹ä¹‹æ—¥èµ·åå››å¤©ã€‚"]],["withdrawal.right.text3",["Um dein Widerrufsrecht auszuÃ¼ben, musst du uns (Patrick Walker, contact@zalthera.de) mittels einer eindeutigen ErklÃ¤rung (z. B. E-Mail) Ã¼ber deinen Entschluss informieren.","To exercise your right of withdrawal, you must inform us (Patrick Walker, contact@zalthera.de) of your decision by means of a clear statement (e.g. email).","Cayma hakkÄ±nÄ±zÄ± kullanmak iÃ§in kararÄ±nÄ±zÄ± aÃ§Ä±k bir beyanla (Ã¶r. e-posta) bize (Patrick Walker, contact@zalthera.de) bildirmeniz gerekir.","Para ejercer tu derecho de desistimiento debes informarnos (Patrick Walker, contact@zalthera.de) de tu decisiÃ³n mediante una declaraciÃ³n inequÃ­voca (p. ej., correo electrÃ³nico).","Pour exercer votre droit de rÃ©tractation, vous devez nous informer (Patrick Walker, contact@zalthera.de) de votre dÃ©cision au moyen dâ€™une dÃ©claration claire (p. ex. e-mail).","Per esercitare il diritto di recesso devi informarci (Patrick Walker, contact@zalthera.de) della tua decisione mediante una dichiarazione esplicita (ad es. e-mail).","Pentru a-È›i exercita dreptul de retragere trebuie sÄƒ ne informezi (Patrick Walker, contact@zalthera.de) despre decizie printr-o declaraÈ›ie clarÄƒ (de ex. e-mail).","ä¸ºè¡Œä½¿æ’¤é”€æƒï¼Œä½ å¿…é¡»é€šè¿‡æ˜Žç¡®å£°æ˜Žï¼ˆä¾‹å¦‚ç”µå­é‚®ä»¶ï¼‰é€šçŸ¥æˆ‘ä»¬ï¼ˆPatrick Walker, contact@zalthera.deï¼‰ä½ çš„å†³å®šã€‚"]],["withdrawal.consequences.title",["Folgen des Widerrufs","Consequences of withdrawal","CaymanÄ±n sonuÃ§larÄ±","Consecuencias del desistimiento","ConsÃ©quences de la rÃ©tractation","Conseguenze del recesso","ConsecinÈ›ele retragerii","æ’¤é”€åŽæžœ"]],["withdrawal.consequences.text",["Wenn du diesen Vertrag widerrufst, werden alle Zahlungen unverzÃ¼glich zurÃ¼ckerstattet.","If you withdraw from this contract, all payments will be refunded without undue delay.","Bu sÃ¶zleÅŸmeden cayarsanÄ±z tÃ¼m Ã¶demeler gecikmeksizin iade edilir.","Si desistes de este contrato, todos los pagos serÃ¡n reembolsados sin demora indebida.","Si vous vous rÃ©tractez de ce contrat, tous les paiements seront remboursÃ©s sans retard injustifiÃ©.","Se recedi dal contratto, tutti i pagamenti saranno rimborsati senza indebito ritardo.","DacÄƒ te retragi din acest contract, toate plÄƒÈ›ile vor fi rambursate fÄƒrÄƒ Ã®ntÃ¢rzieri nejustificate.","å¦‚æžœä½ æ’¤é”€æœ¬åˆåŒï¼Œæ‰€æœ‰ä»˜æ¬¾å°†åŠæ—¶é€€è¿˜ã€‚"]],["withdrawal.notice.title",["Besonderer Hinweis","Special notice","Ã–zel not","Aviso especial","Remarque particuliÃ¨re","Avviso speciale","NotÄƒ specialÄƒ","ç‰¹åˆ«è¯´æ˜Ž"]],["withdrawal.notice.text",["Bei digitalen Produkten kann das Widerrufsrecht erlÃ¶schen, sobald der Zugriff auf die Anwendung bereitgestellt wurde und die Nutzung beginnt.","For digital products, the right of withdrawal may expire once access to the application has been provided and use begins.","Dijital Ã¼rÃ¼nlerde, uygulamaya eriÅŸim saÄŸlanÄ±p kullanÄ±m baÅŸladÄ±ÄŸÄ±nda cayma hakkÄ± sona erebilir.","En productos digitales, el derecho de desistimiento puede extinguirse una vez facilitado el acceso a la aplicaciÃ³n y comenzado su uso.","Pour les produits numÃ©riques, le droit de rÃ©tractation peut sâ€™Ã©teindre dÃ¨s que lâ€™accÃ¨s Ã  lâ€™application est fourni et que lâ€™utilisation commence.","Per i prodotti digitali, il diritto di recesso puÃ² decadere una volta fornito lâ€™accesso allâ€™applicazione e iniziato lâ€™utilizzo.","Pentru produsele digitale, dreptul de retragere poate Ã®nceta odatÄƒ ce accesul la aplicaÈ›ie este furnizat È™i utilizarea Ã®ncepe.","å¯¹äºŽæ•°å­—äº§å“ï¼Œä¸€æ—¦æä¾›åº”ç”¨è®¿é—®å¹¶å¼€å§‹ä½¿ç”¨ï¼Œæ’¤é”€æƒå¯èƒ½ç»ˆæ­¢ã€‚"]],["withdrawal.actions.home",["Zur Startseite","Back to home","Ana sayfaya dÃ¶n","Volver al inicio","Retour Ã  lâ€™accueil","Torna alla home","ÃŽnapoi acasÄƒ","è¿”å›žé¦–é¡µ"]]];

  FINAL_TRANSLATION_ROWS.forEach(([key, values]) => {
    SUPPORTED_LANGUAGES.forEach((language, index) => {
      TRANSLATIONS[language][key] = values[index];
    });
  });

  /* ============================================================
     FALLBACK
     For languages where a key has not yet been translated,
     fall back to English and then German.
     ============================================================ */

  function getFallbackValue(language, key) {

    if (
      TRANSLATIONS[language] &&
      Object.prototype.hasOwnProperty.call(
        TRANSLATIONS[language],
        key
      )
    ) {
      return TRANSLATIONS[language][key];
    }

    if (
      TRANSLATIONS.en &&
      Object.prototype.hasOwnProperty.call(
        TRANSLATIONS.en,
        key
      )
    ) {
      return TRANSLATIONS.en[key];
    }

    if (
      TRANSLATIONS.de &&
      Object.prototype.hasOwnProperty.call(
        TRANSLATIONS.de,
        key
      )
    ) {
      return TRANSLATIONS.de[key];
    }

    return null;
  }


  /* ============================================================
     LANGUAGE NORMALIZATION
     ============================================================ */

  function normalizeLanguage(language) {

    if (!language) {
      return null;
    }

    const value = String(language)
      .trim()
      .replace("_", "-");

    const lower = value.toLowerCase();

    if (
      lower === "zh" ||
      lower === "zh-cn" ||
      lower === "zh-sg" ||
      lower === "zh-hans"
    ) {
      return "zh-Hans";
    }

    const exact = SUPPORTED_LANGUAGES.find(
      item => item.toLowerCase() === lower
    );

    if (exact) {
      return exact;
    }

    const base = lower.split("-")[0];

    const baseMatch = SUPPORTED_LANGUAGES.find(
      item => item.toLowerCase() === base
    );

    return baseMatch || null;
  }


  function detectBrowserLanguage() {

    const candidates = [
      ...(navigator.languages || []),
      navigator.language
    ];

    for (const candidate of candidates) {

      const normalized =
        normalizeLanguage(candidate);

      if (normalized) {
        return normalized;
      }
    }

    return DEFAULT_LANGUAGE;
  }


  function getStoredLanguage() {

    try {

      const stored =
        localStorage.getItem(
          STORAGE_KEY
        );

      return normalizeLanguage(stored);

    } catch {

      return null;
    }
  }


  function saveLanguage(language) {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        language
      );

    } catch {
      /* Storage unavailable */
    }
  }


  /* ============================================================
     CURRENT LANGUAGE
     ============================================================ */

  function getRequestedLanguage() {
    try { return normalizeLanguage(new URLSearchParams(window.location.search).get("lang")); }
    catch { return null; }
  }

  let currentLanguage =
    getRequestedLanguage() ||
    getStoredLanguage() ||
    detectBrowserLanguage() ||
    DEFAULT_LANGUAGE;


  /* ============================================================
     TRANSLATION LOOKUP
     ============================================================ */

  function translate(
    key,
    language = currentLanguage
  ) {

    return getFallbackValue(
      language,
      key
    );
  }


  /* ============================================================
     APPLY TRANSLATIONS
     ============================================================ */

  function translatePage() {

    document.documentElement.lang =
      currentLanguage;


    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.getAttribute(
            "data-i18n"
          );

        if (!key) {
          return;
        }

        const value =
          translate(key);

        if (value === null) {
          return;
        }


        const targetAttribute =
          element.getAttribute(
            "data-i18n-attribute"
          );


        if (targetAttribute) {

          element.setAttribute(
            targetAttribute,
            value
          );

          return;
        }


        if (
          element.hasAttribute(
            "data-i18n-html"
          )
        ) {

          element.innerHTML =
            value;

          return;
        }


        element.textContent =
          value;
      });


    updateLanguageSwitcher();
  }


  /* ============================================================
     LANGUAGE SWITCHER STYLES
     ============================================================ */

  function installStyles() {

    if (
      document.getElementById(
        "zal-language-styles"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");

    style.id =
      "zal-language-styles";

    style.textContent = `

      .zal-language {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        z-index: 10050;
      }

      .zal-language-button {
        appearance: none;
        -webkit-appearance: none;
        border: 1px solid rgba(255,255,255,.12);
        background:
          linear-gradient(
            180deg,
            rgba(255,255,255,.075),
            rgba(255,255,255,.035)
          );
        color: rgba(255,255,255,.9);
        min-width: 46px;
        height: 36px;
        padding: 0 11px;
        border-radius: 999px;
        font: inherit;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .12em;
        line-height: 1;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        white-space: nowrap;
        transition:
          border-color .2s ease,
          background .2s ease,
          color .2s ease,
          transform .2s ease;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.04);
      }

      .zal-language-button:hover {
        border-color: rgba(255,255,255,.24);
        background: rgba(255,255,255,.09);
        color: #fff;
      }

      .zal-language-button:focus-visible {
        outline: 2px solid rgba(112,220,255,.72);
        outline-offset: 3px;
      }

      .zal-language-button::after {
        content: "";
        width: 5px;
        height: 5px;
        border-right: 1px solid currentColor;
        border-bottom: 1px solid currentColor;
        transform:
          translateY(-1px)
          rotate(45deg);
        opacity: .58;
      }

      .zal-language[data-open="true"]
      .zal-language-button::after {
        transform:
          translateY(1px)
          rotate(225deg);
      }

      .zal-language-menu {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: 190px;
        padding: 7px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,.12);
        background:
          linear-gradient(
            180deg,
            rgba(14,17,24,.97),
            rgba(5,7,11,.985)
          );
        box-shadow:
          0 24px 70px rgba(0,0,0,.48),
          inset 0 1px 0 rgba(255,255,255,.045);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(-5px);
        transition:
          opacity .18s ease,
          visibility .18s ease,
          transform .18s ease;
        overflow: hidden;
      }

      .zal-language[data-open="true"]
      .zal-language-menu {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
      }

      .zal-language-option {
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        min-height: 39px;
        border: 0;
        border-radius: 10px;
        background: transparent;
        color: rgba(255,255,255,.72);
        font: inherit;
        cursor: pointer;
        display: grid;
        grid-template-columns: 40px 1fr 18px;
        align-items: center;
        gap: 4px;
        padding: 7px 9px;
        text-align: left;
        transition:
          background .16s ease,
          color .16s ease;
      }

      .zal-language-option:hover,
      .zal-language-option:focus-visible {
        background: rgba(255,255,255,.065);
        color: #fff;
        outline: none;
      }

      .zal-language-option-short {
        color: rgba(255,255,255,.96);
        font-size: 10px;
        font-weight: 750;
        letter-spacing: .08em;
      }

      .zal-language-option-name {
        font-size: 12px;
        letter-spacing: .01em;
      }

      .zal-language-option-check {
        font-size: 12px;
        text-align: center;
        color: rgba(104,224,255,.95);
        opacity: 0;
      }

      .zal-language-option[aria-current="true"] {
        background: rgba(255,255,255,.055);
        color: #fff;
      }

      .zal-language-option[aria-current="true"]
      .zal-language-option-check {
        opacity: 1;
      }

      @media (max-width: 760px) {

        .zal-language-button {
          min-width: 42px;
          height: 34px;
          padding: 0 9px;
        }

        .zal-language-menu {
          width: 180px;
        }
      }

      @media (prefers-reduced-motion: reduce) {

        .zal-language-button,
        .zal-language-menu,
        .zal-language-option {
          transition: none;
        }
      }

    `;

    document.head.appendChild(style);
  }


  /* ============================================================
     LANGUAGE SWITCHER
     ============================================================ */

  let languageRoot = null;
  let languageButton = null;
  let languageMenu = null;


  function closeLanguageMenu() {

    if (!languageRoot) {
      return;
    }

    languageRoot.dataset.open =
      "false";

    languageButton?.setAttribute(
      "aria-expanded",
      "false"
    );
  }


  function openLanguageMenu() {

    if (!languageRoot) {
      return;
    }

    languageRoot.dataset.open =
      "true";

    languageButton?.setAttribute(
      "aria-expanded",
      "true"
    );
  }


  function toggleLanguageMenu() {

    if (!languageRoot) {
      return;
    }

    const isOpen =
      languageRoot.dataset.open ===
      "true";

    if (isOpen) {
      closeLanguageMenu();
    } else {
      openLanguageMenu();
    }
  }


  function updateLanguageSwitcher() {

    if (!languageRoot) {
      return;
    }

    const meta =
      LANGUAGE_META[currentLanguage];

    if (languageButton && meta) {

      const label =
        languageButton.querySelector(
          "[data-language-current]"
        );

      if (label) {
        label.textContent =
          meta.short;
      }

      languageButton.setAttribute(
        "aria-label",
        `Language: ${meta.name}`
      );
    }


    languageRoot
      .querySelectorAll(
        "[data-language-option]"
      )
      .forEach(option => {

        const language =
          option.getAttribute(
            "data-language-option"
          );

        const isCurrent =
          language === currentLanguage;

        option.setAttribute(
          "aria-current",
          isCurrent
            ? "true"
            : "false"
        );
      });
  }


  function buildLanguageSwitcher() {

    const existing =
      document.querySelector(
        ".zal-language"
      );

    if (existing) {

      languageRoot =
        existing;

      languageButton =
        languageRoot.querySelector(
          ".zal-language-button"
        );

      languageMenu =
        languageRoot.querySelector(
          ".zal-language-menu"
        );

      updateLanguageSwitcher();

      return;
    }


    const host =
      document.querySelector(
        ".topbar-cta"
      );

    if (!host) {
      return;
    }


    languageRoot =
      document.createElement("div");

    languageRoot.className =
      "zal-language";

    languageRoot.dataset.open =
      "false";


    languageButton =
      document.createElement("button");

    languageButton.type =
      "button";

    languageButton.className =
      "zal-language-button";

    languageButton.setAttribute(
      "aria-haspopup",
      "menu"
    );

    languageButton.setAttribute(
      "aria-expanded",
      "false"
    );

    languageButton.innerHTML =
      `<span data-language-current>DE</span>`;


    languageMenu =
      document.createElement("div");

    languageMenu.className =
      "zal-language-menu";

    languageMenu.setAttribute(
      "role",
      "menu"
    );

    languageMenu.setAttribute(
      "aria-label",
      "Language"
    );


    SUPPORTED_LANGUAGES.forEach(
      language => {

        const meta =
          LANGUAGE_META[language];

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
          "menuitem"
        );

        option.setAttribute(
          "data-language-option",
          language
        );

        option.innerHTML = `
          <span class="zal-language-option-short">
            ${meta.short}
          </span>

          <span class="zal-language-option-name">
            ${meta.name}
          </span>

          <span
            class="zal-language-option-check"
            aria-hidden="true"
          >
            âœ“
          </span>
        `;


        option.addEventListener(
          "click",
          () => {

            setLanguage(language);

            closeLanguageMenu();

            languageButton?.focus();
          }
        );


        languageMenu.appendChild(
          option
        );
      }
    );


    languageButton.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();

        toggleLanguageMenu();
      }
    );


    languageRoot.appendChild(
      languageButton
    );

    languageRoot.appendChild(
      languageMenu
    );


    const pageChip =
      host.querySelector(
        ".chip-cta"
      );

    if (pageChip) {

      host.insertBefore(
        languageRoot,
        pageChip
      );

    } else {

      host.appendChild(
        languageRoot
      );
    }


    updateLanguageSwitcher();
  }


  /* ============================================================
     SET LANGUAGE
     ============================================================ */

  function setLanguage(language) {

    const normalized =
      normalizeLanguage(language);

    if (!normalized) {
      return false;
    }

    const previousLanguage =
      currentLanguage;

    currentLanguage =
      normalized;

    saveLanguage(
      currentLanguage
    );

    translatePage();
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", currentLanguage);
        window.history.replaceState(null, "", url);
      }
    } catch { /* Translation works even if history is unavailable. */ }

    window.dispatchEvent(
      new CustomEvent(
        "zal:languagechange",
        {
          detail: {
            language:
              currentLanguage,

            previousLanguage
          }
        }
      )
    );

    return true;
  }


  /* ============================================================
     GLOBAL EVENTS
     ============================================================ */

  document.addEventListener(
    "click",
    event => {

      if (
        languageRoot &&
        !languageRoot.contains(
          event.target
        )
      ) {
        closeLanguageMenu();
      }
    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        languageRoot?.dataset.open ===
          "true"
      ) {

        closeLanguageMenu();

        languageButton?.focus();
      }
    }
  );


  /* ============================================================
     PUBLIC API
     ============================================================ */

  window.ZAL_I18N = {

    get language() {
      return currentLanguage;
    },

    get supportedLanguages() {
      return [
        ...SUPPORTED_LANGUAGES
      ];
    },

    setLanguage,

    translate,

    refresh:
      translatePage,

    translations:
      TRANSLATIONS
  };


  /* ============================================================
     INITIALIZATION
     ============================================================ */

  function initialize() {

    installStyles();

    buildLanguageSwitcher();

    translatePage();
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      {
        once: true
      }
    );

  } else {

    initialize();
  }

})();

