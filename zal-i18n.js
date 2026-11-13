/* ============================================================
   ZAL\u2019THERA WEBSITE
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
    tr: { short: "TR", name: "T\u00fcrk\u00e7e" },
    es: { short: "ES", name: "Espa\u00f1ol" },
    fr: { short: "FR", name: "Fran\u00e7ais" },
    it: { short: "IT", name: "Italiano" },
    ro: { short: "RO", name: "Rom\u00e2n\u0103" },
    "zh-Hans": { short: "\u4e2d\u6587", name: "\u7b80\u4f53\u4e2d\u6587" }
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
      "home.products.hospitality": "Hotelbetrieb, Gastronomie, Bestand und Teamarbeit in einem gemeinsamen System. Version 1.0 wird f\u00fcr die Ver\u00f6ffentlichung vorbereitet.",
      "hp.status": "1.0 \u00b7 In Vorbereitung",
      "hp.title": "Hospitality \u2014 Hotelbetrieb und Gastronomie | ZAL\u2019THERA",
      "hp.hero": "Der Hotelbetrieb. Gemeinsam im Blick.",
      "hp.lead": "Von der Reservierung bis zur Bestellung: Hospitality verbindet Rezeption, Housekeeping und Service mit einem nachvollziehbaren gemeinsamen Stand.",
      "hp.explore": "Funktionen entdecken",
      "hp.contact": "Hospitality anfragen",
      "hp.operations": "Ein Betrieb. Verbundene Bereiche.",
      "hp.rooms": "Zimmer & G\u00e4ste",
      "hp.roomsText": "Zimmerstatus, G\u00e4ste, Reservierungen sowie An- und Abreisen \u00fcbersichtlich organisieren.",
      "hp.housekeeping": "Housekeeping & Sch\u00e4den",
      "hp.housekeepingText": "Aufgaben zuweisen, Reinigung verfolgen und Sch\u00e4den mit nachvollziehbarem Status festhalten.",
      "hp.dining": "Restaurant & K\u00fcche",
      "hp.diningText": "Tische, Speisekarte und Bestellungen verbinden. Der Service erfasst die Bestellung, die K\u00fcche sieht den Arbeitsstand.",
      "hp.stock": "Bestand & Verbrauch",
      "hp.stockText": "Wareneing\u00e4nge, Verbrauch und Korrekturen protokollieren. Verkn\u00fcpfte Bestellungen ber\u00fccksichtigen den Lagerbestand.",
      "hp.sync": "Team & ZAL Sync",
      "hp.syncText": "Gekoppelte Mitarbeiterger\u00e4te arbeiten im Hotelnetz mit der Zentrale am Mac. Rollen und Freigaben begrenzen den Zugriff.",
      "hp.invoices": "Rechnungen & Auswertung",
      "hp.invoicesText": "Rechnungen und erfasste Zahlungen im separaten Journal nachvollziehen und Auswertungen exportieren.",
      "hp.roadmap": "Was bereitsteht. Was als N\u00e4chstes kommt.",
      "hp.releaseText": "Die Betriebsfunktionen werden f\u00fcr Version 1.0 vorbereitet. Ein App-Store-Download wird nach der Ver\u00f6ffentlichung hier erg\u00e4nzt.",
      "hp.payments": "Online-Zahlungen \u00b7 Integration & Test",
      "hp.paymentsText": "Der Gastzugang per QR-Code und die Zahlungsanbindung werden erprobt. Echte Online-Zahlungen sind noch nicht freigeschaltet.",
      "hp.ai": "2.0 \u00b7 Pers\u00f6nliche KI geplant",
      "hp.aiText": "Geplant ist die Verbindung zwischen Gast und Hotel: pers\u00f6nliche KI soll Buchungsw\u00fcnsche und R\u00fcckfragen vorbereiten und \u00fcbergeben. Verbindliche Buchungen und Zahlungen ben\u00f6tigen die vorgesehenen Best\u00e4tigungen.",
      "hp.contactText": "Du m\u00f6chtest Hospitality in deinem Betrieb kennenlernen? Schreib uns mit Hotelgr\u00f6\u00dfe und gew\u00fcnschtem Einsatzbereich.",
      "hp.note": "Das Rechnungsmodul ersetzt keine gepr\u00fcfte Kassen- oder Steuerl\u00f6sung.",


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
      "global.open": "\u00d6ffnen",
      "global.close": "Schlie\u00dfen",
      "global.discover": "Entdecken",
      "global.learnMore": "Mehr erfahren",
      "global.support": "Support",
      "global.contact": "Kontakt",
      "global.available": "AVAILABLE",
      "global.development": "DEVELOPMENT",
      "global.systemModule": "SYSTEM MODULE",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Navigation \u00f6ffnen",
      "global.mainNavigation": "Hauptnavigation",

      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",


      /* ========================================================
         HOME
         ======================================================== */

      "home.hero.kicker":
        "SOUVER\u00c4NE DIGITALE ARCHITEKTUR",

      "home.hero.title":
        "One system.<br>One identity.<br>Connected intelligence.",

      "home.hero.description":
        "ZAL\u2019THERA verbindet Identit\u00e4t, Kontext, k\u00fcnstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.",

      "home.hero.primary":
        "System entdecken",

      "home.hero.core":
        "ZAL\u2019THERA Core",

      "home.state.label":
        "SYSTEMSTATUS",

      "home.state.identity":
        "IDENTIT\u00c4T",

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
        "Sie beginnt mit einer gemeinsamen Logik daf\u00fcr, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tats\u00e4chlich ausgef\u00fchrt werden kann.",

      "home.system.identity.title":
        "Identit\u00e4t",

      "home.system.identity.text":
        "Wer oder welches autorisierte System handelt?",

      "home.system.context.title":
        "Kontext",

      "home.system.context.text":
        "In welchem Zusammenhang existieren Information und Handlung?",

      "home.system.intelligence.title":
        "Intelligenz",

      "home.system.intelligence.text":
        "Was l\u00e4sst sich aus dem vorhandenen Kontext verstehen?",

      "home.system.trust.title":
        "Vertrauen",

      "home.system.trust.text":
        "Was ist erlaubt, belegbar und \u00fcberpr\u00fcfbar?",

      "home.system.action.title":
        "Aktion",

      "home.system.action.text":
        "Was darf tats\u00e4chlich ausgef\u00fchrt werden?",

      "home.system.principle":
        "KERNPRINZIP",

      "home.system.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "home.system.openArchitecture":
        "Architektur \u00f6ffnen",

      "home.continuity.eyebrow":
        "PERS\u00d6NLICHES SOUVER\u00c4NES SYSTEM",

      "home.continuity.status":
        "AKTIVE ENTWICKLUNG",

      "home.continuity.tagline":
        "Dein Lebenskontext. Strukturiert. Verbunden. Verst\u00e4ndlich.",

      "home.continuity.text1":
        "CONTINUITY verbindet pers\u00f6nliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souver\u00e4nen pers\u00f6nlichen Umgebung.",

      "home.continuity.text2":
        "Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im pers\u00f6nlichen System.",

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
        "ZAL\u2019THERA Intelligence",

      "home.intelligence.tagline":
        "Intelligenz, die ihre Grenzen kennt.",

      "home.intelligence.text1":
        "Die Intelligenzschicht arbeitet nicht losgel\u00f6st vom Menschen. Sie versteht verf\u00fcgbaren Kontext, erkennt Zusammenh\u00e4nge, erkl\u00e4rt Informationen und bereitet m\u00f6gliche Aktionen vor.",

      "home.intelligence.text2":
        "Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.",

      "home.communication.eyebrow":
        "IDENTIT\u00c4T-ZU-IDENTIT\u00c4T",

      "home.communication.status":
        "AKTIVE ENTWICKLUNG",

      "home.communication.title":
        "Communication",

      "home.communication.tagline":
        "Verbindung beginnt mit Identit\u00e4t und Zustimmung.",

      "home.communication.text1":
        "ZAL\u2019THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten Identit\u00e4ten.",

      "home.communication.text2":
        "Sprache, sp\u00e4ter Video, Dateien und vertrauensbasierte Zustellung werden nicht \u00fcber \u00f6ffentliche Profile definiert, sondern \u00fcber Identit\u00e4t, Beziehung und Berechtigung.",

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
        "ZAL\u2019THERA Industry",

      "home.industry.tagline":
        "Reale Prozesse werden zu verst\u00e4ndlichen Systemen.",

      "home.industry.text":
        "Die industrielle Schicht verbindet operative \u00dcbergaben, Prozesszust\u00e4nde, Sensordaten, Messwerte und zuk\u00fcnftige Maschinenanbindungen.",

      "home.industry.shift":
        "Schicht\u00fcbergabe & operative Zust\u00e4nde",

      "home.industry.gate":
        "Sensorik, Messwerte & Maschinenprozesse",

      "home.industry.process":
        "Analyse & nachvollziehbare Prozesszust\u00e4nde",

      "home.proof.eyebrow":
        "NACHWEIS & VERTRAUEN",

      "home.proof.title":
        "Nachweis vor Annahme.",

      "home.proof.text":
        "ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.",

      "home.proof.open":
        "ProofFlow \u00f6ffnen",

      "home.products.eyebrow":
        "SYSTEMPORTFOLIO",

      "home.products.title":
        "Ein \u00d6kosystem. Unterschiedliche Reifegrade.",

      "home.products.lead":
        "ZAL\u2019THERA trennt klar zwischen verf\u00fcgbaren Produkten, aktiver Entwicklung, Systemmodulen und zuk\u00fcnftiger Architektur.",

      "home.products.lifeflow":
        "Kosten, Vertr\u00e4ge, Fristen und pers\u00f6nliche Finanz\u00fcbersicht.",

      "home.products.continuity":
        "Pers\u00f6nliche souver\u00e4ne Umgebung f\u00fcr Dokumente, Daten, Kontext und Intelligenz.",

      "home.products.proofflow":
        "Nachweise, Audit, Signatur und \u00fcberpr\u00fcfbare Abl\u00e4ufe.",

      "home.products.shiftlog":
        "Digitale Schicht\u00fcbergabe f\u00fcr operative Zust\u00e4nde und Verantwortlichkeiten.",

      "home.products.voicebridge":
        "Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten Identit\u00e4ten.",

      "home.products.zalgate":
        "Architektur f\u00fcr die Verbindung von Sensorik, Messwerten, Maschinen und Prozesszust\u00e4nden.",

      "home.products.open": "\u00d6ffnen \u2192",
      "home.products.viewSystem": "System ansehen \u2192",
      "home.products.viewDevelopment": "Entwicklung ansehen \u2192",
      "home.products.viewArchitecture": "Architektur \u2192",

      "home.pilot.eyebrow":
        "KONTROLLIERTER REALER EINSTIEG",

      "home.pilot.title":
        "ZAL\u2019THERA Pilot",

      "home.pilot.text":
        "Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tats\u00e4chlichen Nutzen pr\u00fcfen \u2013 ohne den bestehenden Betrieb sofort vollst\u00e4ndig zu ersetzen.",

      "home.pilot.discover":
        "Pilot entdecken",

      "home.pilot.request":
        "Pilot anfragen",

      "home.core.eyebrow":
        "UNTER JEDEM SYSTEM",

      "home.core.title":
        "ZAL\u2019THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausf\u00fchrung bilden den technischen Kern hinter dem \u00d6kosystem.",

      "home.core.discover":
        "Core entdecken",

      "home.contact.eyebrow": "KONTAKT",
      "home.contact.title": "ZAL\u2019THERA kontaktieren",

      "home.contact.text":
        "Fragen zu ZAL\u2019THERA, einem System oder bestehenden Modulen?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Dein Name",
      "home.contact.email": "E-Mail",
      "home.contact.emailPlaceholder": "deine@email.de",
      "home.contact.message": "Nachricht",
      "home.contact.messagePlaceholder": "Deine Nachricht \u2026",
      "home.contact.send": "Senden",

      "home.contact.privacyPrefix":
        "Mit dem Absenden akzeptierst du unsere",

      "home.contact.privacy":
        "Datenschutzerkl\u00e4rung",


      /* ========================================================
         CORE
         ======================================================== */

      "core.hero.kicker":
        "SYSTEMGRUNDLAGE",

      "core.hero.title":
        "Vertrauen sollte nicht<br>vorausgesetzt werden.<br>Es sollte konstruiert werden.",

      "core.hero.description":
        "ZAL\u2019THERA Core verbindet Identit\u00e4t, Kontext, Regeln, Zustimmung, Nachweis und kontrollierte Ausf\u00fchrung zu einer gemeinsamen Vertrauensarchitektur.",

      "core.hero.architecture":
        "Architektur \u00f6ffnen",

      "core.hero.identityBound":
        "IDENTIT\u00c4TSGEBUNDEN",

      "core.hero.policyGoverned":
        "REGELGESTEUERT",

      "core.hero.auditable":
        "NACHVOLLZIEHBAR",

      "core.hero.humanAuthorized":
        "MENSCHLICH AUTORISIERT",

      "core.status.label":
        "KERNPRINZIPIEN",

      "core.status.identity":
        "IDENTIT\u00c4T",

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
        "AUSF\u00dcHRUNG",

      "core.status.act":
        "HANDELN",

      "core.architecture.eyebrow":
        "\u00d6FFENTLICHE ARCHITEKTUR",

      "core.architecture.title":
        "F\u00fcnf Ebenen. Eine nachvollziehbare Entscheidungskette.",

      "core.architecture.lead":
        "Die \u00f6ffentliche Architektur erkl\u00e4rt die Grundlogik von ZAL\u2019THERA, ohne interne Sicherheitsimplementierungen, private Schl\u00fcsselstrukturen oder Protokolldetails offenzulegen.",

      "core.architecture.identity.title":
        "Identit\u00e4t",

      "core.architecture.identity.text":
        "Eine Handlung beginnt mit einer eindeutig zugeordneten Identit\u00e4t, Rolle oder autorisierten Systeminstanz.",

      "core.architecture.context.title":
        "Kontext",

      "core.architecture.context.text":
        "Informationen werden nicht isoliert betrachtet, sondern mit Herkunft, Zeit und Beziehung verstanden.",

      "core.architecture.intelligence.title":
        "Intelligenz",

      "core.architecture.intelligence.text":
        "Systeme d\u00fcrfen Informationen strukturieren, erkl\u00e4ren und m\u00f6gliche n\u00e4chste Schritte vorbereiten.",

      "core.architecture.trust.title":
        "Vertrauen",

      "core.architecture.trust.text":
        "Berechtigungen, Nachweise, Consent und Audit bestimmen, was als vertrauensw\u00fcrdig gelten darf.",

      "core.architecture.action.title":
        "Aktion",

      "core.architecture.action.text":
        "Konsequente Aktionen werden erst ausgef\u00fchrt, wenn die erforderlichen Bedingungen erf\u00fcllt sind.",

      "core.architecture.principle":
        "SYSTEMPRINZIP",

      "core.architecture.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "core.architecture.technicalCore":
        "Technischer Kern",

      "core.technical.eyebrow":
        "TECHNISCHER KERN",

      "core.technical.lead":
        "Unterhalb der \u00f6ffentlichen Architektur arbeitet eine pr\u00e4zisere Kontrollkette f\u00fcr nachvollziehbare Systemaktionen.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Regeln definieren Grenzen, Zust\u00e4nde, Berechtigungen und Bedingungen.",

      "core.technical.policy.question":
        "WAS IST ERLAUBT?",

      "core.technical.identity.title":
        "Identit\u00e4t",

      "core.technical.identity.text":
        "Aktionen werden einer Person, Rolle, Identit\u00e4t oder autorisierten Instanz zugeordnet.",

      "core.technical.identity.question":
        "WER HANDELT?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Relevante Ereignisse werden mit Herkunft, Zeitpunkt und Zustand nachvollziehbar dokumentiert.",

      "core.technical.audit.question":
        "WAS IST PASSIERT?",

      "core.technical.execute.title":
        "Ausf\u00fchren",

      "core.technical.execute.text":
        "Eine Aktion darf den sichtbaren Zustand erst ver\u00e4ndern, wenn die notwendigen Bedingungen erf\u00fcllt sind.",

      "core.technical.execute.question":
        "DARF ES GESCHEHEN?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Ein lokaler Wahrheitskern f\u00fcr \u00fcberpr\u00fcfbare Ereignisse.",

      "core.ledger.text1":
        "THE LEDGER h\u00e4lt relevante Ereignisse in nachvollziehbarer Reihenfolge fest. Eintr\u00e4ge werden erg\u00e4nzt, miteinander verbunden und k\u00f6nnen sp\u00e4ter gepr\u00fcft werden.",

      "core.ledger.text2":
        "Das Ziel ist nicht, s\u00e4mtliche Information zentral zu sammeln. Das Ziel ist, relevante Zustands\u00e4nderungen nachvollziehbar und \u00fcberpr\u00fcfbar zu machen.",

      "core.ledger.created":
        "ERSTELLT",

      "core.ledger.proof":
        "NACHWEIS",

      "core.ledger.signed":
        "SIGNIERT",

      "core.ledger.verified":
        "VERIFIZIERT",

      "core.ledger.appendOnly.title":
        "Nur erg\u00e4nzend",

      "core.ledger.appendOnly.text":
        "Relevante Ereignisse werden erg\u00e4nzt, nicht unbemerkt \u00fcberschrieben.",

      "core.ledger.linked.title":
        "Verkn\u00fcpft",

      "core.ledger.linked.text":
        "Ereignisse erhalten eine nachvollziehbare Beziehung zueinander.",

      "core.ledger.verifiable.title":
        "\u00dcberpr\u00fcfbar",

      "core.ledger.verifiable.text":
        "Struktur, Integrit\u00e4t und Herkunft k\u00f6nnen gepr\u00fcft werden.",

      "core.trust.eyebrow":
        "VERTRAUENSSCHICHT",

      "core.trust.title":
        "Vertrauen wird nicht behauptet.",

      "core.trust.lead":
        "Es entsteht aus \u00fcberpr\u00fcfbaren Zust\u00e4nden, Identit\u00e4ten, Berechtigungen und Nachweisen.",

      "core.trust.proof.title":
        "Nachweisvertrauen",

      "core.trust.proof.text":
        "Existiert ein g\u00fcltiger Nachweis f\u00fcr die behauptete Aktion?",

      "core.trust.policy.title":
        "Regelvertrauen",

      "core.trust.policy.text":
        "Wurde innerhalb der vorgesehenen Regeln gehandelt?",

      "core.trust.identity.title":
        "Identit\u00e4tsvertrauen",

      "core.trust.identity.text":
        "Ist die handelnde Identit\u00e4t eindeutig und autorisiert?",

      "core.trust.audit.title":
        "Audit-Vertrauen",

      "core.trust.audit.text":
        "Ist der Ablauf vollst\u00e4ndig genug, um sp\u00e4ter nachvollzogen zu werden?",

      "core.authorization.eyebrow":
        "MENSCHLICHES AUTORISIERUNGSTOR",

      "core.authorization.title":
        "Intelligenz darf vorbereiten.<br>Autorit\u00e4t bleibt ausdr\u00fccklich.",

      "core.authorization.text":
        "ZAL\u2019THERA kann Informationen verstehen, strukturieren, erkl\u00e4ren und Handlungsm\u00f6glichkeiten vorbereiten. Konsequente Aktionen bleiben jedoch an die erforderliche menschliche oder ausdr\u00fccklich delegierte Autorisierung gebunden.",

      "core.application.eyebrow":
        "SYSTEMANWENDUNG",

      "core.application.title":
        "Ein Kern. Mehrere Anwendungswelten.",

      "core.application.personal":
        "PERS\u00d6NLICH",

      "core.application.continuity":
        "Dokumente \u00b7 Finanzen \u00b7 Kontext \u00b7 Cards",

      "core.application.proof":
        "NACHWEIS",

      "core.application.proofflow":
        "Nachweis \u00b7 Audit \u00b7 Signatur \u00b7 Export",

      "core.application.communication":
        "KOMMUNIKATION",

      "core.application.voicebridge":
        "Identit\u00e4t \u00b7 Zustimmung \u00b7 Sprache \u00b7 Vertrauen",

      "core.application.industry":
        "INDUSTRIE",

      "core.application.shiftlog":
        "\u00dcbergabe \u00b7 Zustand \u00b7 Verantwortung",

      "core.return.title":
        "Der Kern ist nicht das Produkt.<br>Er verbindet die Produkte.",

      "core.return.button":
        "Zur\u00fcck zum System"
    },


    /* ==========================================================
       ENGLISH
       ========================================================== */

    en: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Hotel operations, dining, inventory and teamwork in one shared system. Version 1.0 is being prepared for release.",
      "hp.status": "1.0 \u00b7 Preparing for release",
      "hp.title": "Hospitality \u2014 Hotel operations and dining | ZAL\u2019THERA",
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
      "hp.payments": "Online payments \u00b7 Integration & testing",
      "hp.paymentsText": "QR guest access and payment integration are being tested. Live online payments are not enabled yet.",
      "hp.ai": "2.0 \u00b7 Personal AI planned",
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
        "ZAL\u2019THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.",

      "home.hero.primary":
        "Discover the system",

      "home.hero.core":
        "ZAL\u2019THERA Core",

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
      "home.intelligence.title": "ZAL\u2019THERA Intelligence",
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
        "ZAL\u2019THERA Communication is developing a secure communication layer between authorized identities.",

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
      "home.industry.title": "ZAL\u2019THERA Industry",
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
        "ZAL\u2019THERA clearly distinguishes between available products, active development, system modules and future architecture.",

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

      "home.products.open": "Open \u2192",
      "home.products.viewSystem": "View system \u2192",
      "home.products.viewDevelopment": "View development \u2192",
      "home.products.viewArchitecture": "Architecture \u2192",

      "home.pilot.eyebrow": "CONTROLLED REAL-WORLD ENTRY",
      "home.pilot.title": "ZAL\u2019THERA Pilot",

      "home.pilot.text":
        "Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.",

      "home.pilot.discover": "Discover Pilot",
      "home.pilot.request": "Request Pilot",

      "home.core.eyebrow": "BENEATH EVERY SYSTEM",
      "home.core.title": "ZAL\u2019THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.",

      "home.core.discover": "Discover Core",

      "home.contact.eyebrow": "CONTACT",
      "home.contact.title": "Contact ZAL\u2019THERA",

      "home.contact.text":
        "Questions about ZAL\u2019THERA, a system or existing modules?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Your name",
      "home.contact.email": "Email",
      "home.contact.emailPlaceholder": "your@email.com",
      "home.contact.message": "Message",
      "home.contact.messagePlaceholder": "Your message \u2026",
      "home.contact.send": "Send",
      "home.contact.privacyPrefix": "By submitting, you accept our",
      "home.contact.privacy": "Privacy Policy",


      /* CORE */

      "core.hero.kicker":
        "SYSTEM FOUNDATION",

      "core.hero.title":
        "Trust should not<br>be assumed.<br>It should be constructed.",

      "core.hero.description":
        "ZAL\u2019THERA Core connects identity, context, policy, consent, evidence and controlled execution into one shared trust architecture.",

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
        "The public architecture explains the fundamental logic of ZAL\u2019THERA without exposing internal security implementations, private key structures or protocol details.",

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
        "ZAL\u2019THERA may understand, structure and explain information and prepare possible actions. Consequential actions remain bound to the required human or explicitly delegated authorization.",

      "core.application.eyebrow":
        "SYSTEM APPLICATION",

      "core.application.title":
        "One core. Multiple application worlds.",

      "core.application.personal":
        "PERSONAL",

      "core.application.continuity":
        "Documents \u00b7 Finance \u00b7 Context \u00b7 Cards",

      "core.application.proof":
        "PROOF",

      "core.application.proofflow":
        "Evidence \u00b7 Audit \u00b7 Signature \u00b7 Export",

      "core.application.communication":
        "COMMUNICATION",

      "core.application.voicebridge":
        "Identity \u00b7 Consent \u00b7 Voice \u00b7 Trust",

      "core.application.industry":
        "INDUSTRY",

      "core.application.shiftlog":
        "Handover \u00b7 State \u00b7 Responsibility",

      "core.return.title":
        "The core is not the product.<br>It is what connects the products.",

      "core.return.button":
        "Back to the system"
    },


    /* ==========================================================
       T\u00dcRK\u00c7E
       ========================================================== */

    tr: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Otel i\u015fletimi, restoran, stok ve ekip \u00e7al\u0131\u015fmas\u0131 ortak bir sistemde. S\u00fcr\u00fcm 1.0 yay\u0131ma haz\u0131rlan\u0131yor.",
      "hp.status": "1.0 \u00b7 Yay\u0131ma haz\u0131rlan\u0131yor",
      "hp.title": "Hospitality \u2014 Otel i\u015fletimi ve restoran | ZAL\u2019THERA",
      "hp.hero": "Otel i\u015fletimi. Ortak bir bak\u0131\u015f.",
      "hp.lead": "Rezervasyondan sipari\u015fe: Hospitality resepsiyon, kat hizmetleri ve servisi izlenebilir ortak bir g\u00f6r\u00fcn\u00fcmde birle\u015ftirir.",
      "hp.explore": "\u00d6zellikleri ke\u015ffet",
      "hp.contact": "Hospitality hakk\u0131nda bilgi al\u0131n",
      "hp.operations": "Tek i\u015fletme. Ba\u011fl\u0131 ekipler.",
      "hp.rooms": "Odalar ve misafirler",
      "hp.roomsText": "Oda durumu, misafirler, rezervasyonlar, giri\u015f ve \u00e7\u0131k\u0131\u015flar\u0131 d\u00fczenleyin.",
      "hp.housekeeping": "Kat hizmetleri ve hasarlar",
      "hp.housekeepingText": "G\u00f6rev atay\u0131n, temizli\u011fi takip edin ve hasarlar\u0131 izlenebilir durumlarla kaydedin.",
      "hp.dining": "Restoran ve mutfak",
      "hp.diningText": "Masalar\u0131, men\u00fcy\u00fc ve sipari\u015fleri birle\u015ftirin. Servis sipari\u015fi kaydeder, mutfak ilerlemeyi g\u00f6r\u00fcr.",
      "hp.stock": "Stok ve t\u00fcketim",
      "hp.stockText": "Mal giri\u015flerini, t\u00fcketimi ve d\u00fczeltmeleri kaydedin. Ba\u011fl\u0131 sipari\u015fler stoku g\u00fcnceller.",
      "hp.sync": "Ekip ve ZAL Sync",
      "hp.syncText": "E\u015fle\u015ftirilmi\u015f \u00e7al\u0131\u015fan cihazlar\u0131 otel a\u011f\u0131nda Mac merkeziyle \u00e7al\u0131\u015f\u0131r. Roller ve onaylar eri\u015fimi s\u0131n\u0131rlar.",
      "hp.invoices": "Faturalar ve raporlar",
      "hp.invoicesText": "Faturalar\u0131 ve kay\u0131tl\u0131 \u00f6demeleri ayr\u0131 bir g\u00fcnl\u00fckte izleyin ve raporlar\u0131 d\u0131\u015fa aktar\u0131n.",
      "hp.roadmap": "Mevcut durum. S\u0131rada ne var.",
      "hp.releaseText": "\u0130\u015fletim \u00f6zellikleri s\u00fcr\u00fcm 1.0 i\u00e7in haz\u0131rlan\u0131yor. Yay\u0131mdan sonra App Store ba\u011flant\u0131s\u0131 eklenecek.",
      "hp.payments": "\u00c7evrimi\u00e7i \u00f6demeler \u00b7 Entegrasyon ve test",
      "hp.paymentsText": "QR misafir eri\u015fimi ve \u00f6deme entegrasyonu test ediliyor. Ger\u00e7ek \u00e7evrimi\u00e7i \u00f6demeler hen\u00fcz etkin de\u011fil.",
      "hp.ai": "2.0 \u00b7 Ki\u015fisel yapay zek\u00e2 planlan\u0131yor",
      "hp.aiText": "Plan, misafir ve oteli ba\u011flar: ki\u015fisel yapay zek\u00e2 rezervasyon taleplerini ve sorular\u0131 haz\u0131rlay\u0131p iletecek. Ba\u011flay\u0131c\u0131 rezervasyonlar ve \u00f6demeler gerekli onaylar\u0131 gerektirir.",
      "hp.contactText": "Hospitality\u2019yi i\u015fletmenizde tan\u0131mak ister misiniz? Otel b\u00fcy\u00fckl\u00fc\u011f\u00fcn\u00fc ve kullan\u0131m alan\u0131n\u0131 bize yaz\u0131n.",
      "hp.note": "Fatura mod\u00fcl\u00fc, do\u011frulanm\u0131\u015f kasa veya vergi \u00e7\u00f6z\u00fcm\u00fcn\u00fcn yerini almaz.",


      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Zek\u00e2",
      "nav.communication": "\u0130leti\u015fim",
      "nav.industry": "End\u00fcstri",
      "nav.products": "\u00dcr\u00fcnler",
      "nav.about": "Hakk\u0131nda",

      "global.home": "Ana Sayfa",
      "global.explore": "Ke\u015ffet",
      "global.open": "A\u00e7",
      "global.close": "Kapat",
      "global.discover": "Ke\u015ffet",
      "global.learnMore": "Daha fazla bilgi",
      "global.support": "Destek",
      "global.contact": "\u0130leti\u015fim",
      "global.available": "MEVCUT",
      "global.development": "GEL\u0130\u015eT\u0130RME",
      "global.systemModule": "S\u0130STEM MOD\u00dcL\u00dc",
      "global.architecture": "M\u0130MAR\u0130",
      "global.navOpen": "Navigasyonu a\u00e7",
      "global.mainNavigation": "Ana navigasyon",

      "footer.imprint": "Yasal Bilgiler",
      "footer.privacy": "Gizlilik",

      "core.hero.kicker":
        "S\u0130STEM TEMEL\u0130",

      "core.hero.title":
        "G\u00fcven varsay\u0131lmamal\u0131.<br>\u0130n\u015fa edilmelidir.",

      "core.hero.description":
        "ZAL\u2019THERA Core; kimlik, ba\u011flam, kurallar, onay, kan\u0131t ve kontroll\u00fc y\u00fcr\u00fctmeyi ortak bir g\u00fcven mimarisinde birle\u015ftirir.",

      "core.hero.architecture":
        "Mimariyi a\u00e7",

      "core.hero.identityBound":
        "K\u0130ML\u0130\u011eE BA\u011eLI",

      "core.hero.policyGoverned":
        "KURALLARLA Y\u00d6NET\u0130LEN",

      "core.hero.auditable":
        "DENETLENEB\u0130L\u0130R",

      "core.hero.humanAuthorized":
        "\u0130NSAN TARAFINDAN YETK\u0130LEND\u0130R\u0130LM\u0130\u015e",

      "core.status.label":
        "TEMEL \u0130LKELER",

      "core.status.identity": "K\u0130ML\u0130K",
      "core.status.who": "K\u0130M",
      "core.status.context": "BA\u011eLAM",
      "core.status.why": "NEDEN",
      "core.status.policy": "POL\u0130T\u0130KA",
      "core.status.what": "NE",
      "core.status.consent": "ONAY",
      "core.status.allow": "\u0130Z\u0130N",
      "core.status.audit": "DENET\u0130M",
      "core.status.prove": "KANIT",
      "core.status.execution": "Y\u00dcR\u00dcTME",
      "core.status.act": "HAREKET",

      "core.architecture.eyebrow":
        "KAMUSAL M\u0130MAR\u0130",

      "core.architecture.title":
        "Be\u015f katman. Tek izlenebilir karar zinciri.",

      "core.architecture.lead":
        "Kamusal mimari, dahili g\u00fcvenlik uygulamalar\u0131n\u0131, \u00f6zel anahtar yap\u0131lar\u0131n\u0131 veya protokol ayr\u0131nt\u0131lar\u0131n\u0131 a\u00e7\u0131\u011fa \u00e7\u0131karmadan ZAL\u2019THERA\u2019n\u0131n temel mant\u0131\u011f\u0131n\u0131 a\u00e7\u0131klar.",

      "core.architecture.identity.title":
        "Kimlik",

      "core.architecture.identity.text":
        "Bir eylem a\u00e7\u0131k\u00e7a atanm\u0131\u015f bir kimlik, rol veya yetkili sistem \u00f6rne\u011fiyle ba\u015flar.",

      "core.architecture.context.title":
        "Ba\u011flam",

      "core.architecture.context.text":
        "Bilgi yal\u0131t\u0131lm\u0131\u015f olarak de\u011fil, kaynak, zaman ve ili\u015fkiyle birlikte anla\u015f\u0131l\u0131r.",

      "core.architecture.intelligence.title":
        "Zek\u00e2",

      "core.architecture.intelligence.text":
        "Sistemler bilgiyi yap\u0131land\u0131rabilir, a\u00e7\u0131klayabilir ve olas\u0131 sonraki ad\u0131mlar\u0131 haz\u0131rlayabilir.",

      "core.architecture.trust.title":
        "G\u00fcven",

      "core.architecture.trust.text":
        "Yetkiler, kan\u0131tlar, onay ve denetim, neyin g\u00fcvenilir kabul edilebilece\u011fini belirler.",

      "core.architecture.action.title":
        "Eylem",

      "core.architecture.action.text":
        "\u00d6nemli eylemler yaln\u0131zca gerekli ko\u015fullar sa\u011fland\u0131\u011f\u0131nda ger\u00e7ekle\u015ftirilir.",

      "core.architecture.principle":
        "S\u0130STEM \u0130LKES\u0130",

      "core.architecture.principleText":
        "\u00d6nce anla. Sonra haz\u0131rla. Yaln\u0131zca izinle hareket et.",

      "core.architecture.technicalCore":
        "Teknik \u00c7ekirdek",

      "core.technical.eyebrow":
        "TEKN\u0130K \u00c7EK\u0130RDEK",

      "core.technical.lead":
        "Kamusal mimarinin alt\u0131nda, izlenebilir sistem eylemleri i\u00e7in daha hassas bir kontrol zinciri \u00e7al\u0131\u015f\u0131r.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Kurallar s\u0131n\u0131rlar\u0131, durumlar\u0131, yetkileri ve ko\u015fullar\u0131 tan\u0131mlar.",

      "core.technical.policy.question":
        "NEYE \u0130Z\u0130N VAR?",

      "core.technical.identity.title":
        "Kimlik",

      "core.technical.identity.text":
        "Eylemler bir ki\u015fiye, role, kimli\u011fe veya yetkili \u00f6rne\u011fe atan\u0131r.",

      "core.technical.identity.question":
        "K\u0130M HAREKET ED\u0130YOR?",

      "core.technical.audit.title":
        "Denetim",

      "core.technical.audit.text":
        "\u0130lgili olaylar kaynak, zaman ve durum bilgileriyle izlenebilir bi\u00e7imde belgelenir.",

      "core.technical.audit.question":
        "NE OLDU?",

      "core.technical.execute.title":
        "Y\u00fcr\u00fctme",

      "core.technical.execute.text":
        "Bir eylem yaln\u0131zca gerekli ko\u015fullar sa\u011fland\u0131ktan sonra g\u00f6r\u00fcn\u00fcr durumu de\u011fi\u015ftirebilir.",

      "core.technical.execute.question":
        "GER\u00c7EKLE\u015eEB\u0130L\u0130R M\u0130?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Do\u011frulanabilir olaylar i\u00e7in yerel bir ger\u00e7eklik \u00e7ekirde\u011fi.",

      "core.ledger.text1":
        "THE LEDGER ilgili olaylar\u0131 izlenebilir bir s\u0131rayla kaydeder. Kay\u0131tlar eklenir, birbirine ba\u011flan\u0131r ve daha sonra incelenebilir.",

      "core.ledger.text2":
        "Ama\u00e7 t\u00fcm bilgileri merkezi olarak toplamak de\u011fildir. Ama\u00e7 \u00f6nemli durum de\u011fi\u015fikliklerini izlenebilir ve do\u011frulanabilir hale getirmektir.",

      "core.ledger.created": "OLU\u015eTURULDU",
      "core.ledger.proof": "KANIT",
      "core.ledger.signed": "\u0130MZALANDI",
      "core.ledger.verified": "DO\u011eRULANDI",

      "core.ledger.appendOnly.title":
        "Yaln\u0131zca ekleme",

      "core.ledger.appendOnly.text":
        "\u0130lgili olaylar sessizce \u00fczerine yaz\u0131lmak yerine eklenir.",

      "core.ledger.linked.title":
        "Ba\u011flant\u0131l\u0131",

      "core.ledger.linked.text":
        "Olaylar birbirleriyle izlenebilir ili\u015fkiler ta\u015f\u0131r.",

      "core.ledger.verifiable.title":
        "Do\u011frulanabilir",

      "core.ledger.verifiable.text":
        "Yap\u0131, b\u00fct\u00fcnl\u00fck ve kaynak do\u011frulanabilir.",

      "core.trust.eyebrow":
        "G\u00dcVEN KATMANI",

      "core.trust.title":
        "G\u00fcven yaln\u0131zca iddia edilmez.",

      "core.trust.lead":
        "Do\u011frulanabilir durumlar, kimlikler, yetkiler ve kan\u0131tlardan olu\u015fur.",

      "core.trust.proof.title":
        "Kan\u0131t G\u00fcveni",

      "core.trust.proof.text":
        "\u0130ddia edilen eylem i\u00e7in ge\u00e7erli bir kan\u0131t mevcut mu?",

      "core.trust.policy.title":
        "Politika G\u00fcveni",

      "core.trust.policy.text":
        "Eylem \u00f6ng\u00f6r\u00fclen kurallar i\u00e7inde mi ger\u00e7ekle\u015ftirildi?",

      "core.trust.identity.title":
        "Kimlik G\u00fcveni",

      "core.trust.identity.text":
        "Hareket eden kimlik a\u00e7\u0131k\u00e7a belirlenmi\u015f ve yetkili mi?",

      "core.trust.audit.title":
        "Denetim G\u00fcveni",

      "core.trust.audit.text":
        "S\u00fcre\u00e7 daha sonra yeniden anla\u015f\u0131labilecek kadar eksiksiz mi?",

      "core.authorization.eyebrow":
        "\u0130NSAN YETK\u0130LEND\u0130RME KAPISI",

      "core.authorization.title":
        "Zek\u00e2 haz\u0131rlayabilir.<br>Yetki a\u00e7\u0131k kal\u0131r.",

      "core.authorization.text":
        "ZAL\u2019THERA bilgiyi anlayabilir, yap\u0131land\u0131rabilir, a\u00e7\u0131klayabilir ve olas\u0131 eylemleri haz\u0131rlayabilir. \u00d6nemli eylemler gerekli insan veya a\u00e7\u0131k\u00e7a devredilmi\u015f yetkilendirmeye ba\u011fl\u0131 kal\u0131r.",

      "core.application.eyebrow":
        "S\u0130STEM UYGULAMASI",

      "core.application.title":
        "Tek \u00e7ekirdek. Birden fazla uygulama alan\u0131.",

      "core.application.personal": "K\u0130\u015e\u0130SEL",

      "core.application.continuity":
        "Belgeler \u00b7 Finans \u00b7 Ba\u011flam \u00b7 Cards",

      "core.application.proof": "KANIT",

      "core.application.proofflow":
        "Kan\u0131t \u00b7 Denetim \u00b7 \u0130mza \u00b7 D\u0131\u015fa Aktarma",

      "core.application.communication":
        "\u0130LET\u0130\u015e\u0130M",

      "core.application.voicebridge":
        "Kimlik \u00b7 Onay \u00b7 Ses \u00b7 G\u00fcven",

      "core.application.industry":
        "END\u00dcSTR\u0130",

      "core.application.shiftlog":
        "Devir \u00b7 Durum \u00b7 Sorumluluk",

      "core.return.title":
        "\u00c7ekirdek \u00fcr\u00fcn de\u011fildir.<br>\u00dcr\u00fcnleri birbirine ba\u011flayan yap\u0131d\u0131r.",

      "core.return.button":
        "Sisteme d\u00f6n"
    },


    /* ==========================================================
       ESPA\u00d1OL
       ========================================================== */

    es: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Operaci\u00f3n hotelera, restauraci\u00f3n, inventario y equipo en un sistema compartido. La versi\u00f3n 1.0 se prepara para su lanzamiento.",
      "hp.status": "1.0 \u00b7 En preparaci\u00f3n",
      "hp.title": "Hospitality \u2014 Operaci\u00f3n hotelera y restauraci\u00f3n | ZAL\u2019THERA",
      "hp.hero": "El hotel. Una visi\u00f3n compartida.",
      "hp.lead": "De las reservas a los pedidos: Hospitality conecta recepci\u00f3n, limpieza y servicio con una visi\u00f3n compartida y trazable.",
      "hp.explore": "Explorar funciones",
      "hp.contact": "Consultar sobre Hospitality",
      "hp.operations": "Un hotel. Equipos conectados.",
      "hp.rooms": "Habitaciones y hu\u00e9spedes",
      "hp.roomsText": "Organiza estados de habitaciones, hu\u00e9spedes, reservas, llegadas y salidas.",
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
      "hp.roadmap": "D\u00f3nde estamos. Qu\u00e9 sigue.",
      "hp.releaseText": "Las funciones operativas se preparan para la versi\u00f3n 1.0. El enlace de App Store se a\u00f1adir\u00e1 tras el lanzamiento.",
      "hp.payments": "Pagos en l\u00ednea \u00b7 Integraci\u00f3n y pruebas",
      "hp.paymentsText": "El acceso QR para hu\u00e9spedes y la integraci\u00f3n de pagos est\u00e1n en pruebas. Los pagos reales a\u00fan no est\u00e1n habilitados.",
      "hp.ai": "2.0 \u00b7 IA personal prevista",
      "hp.aiText": "El plan conecta hu\u00e9sped y hotel: la IA personal preparar\u00e1 y transmitir\u00e1 solicitudes y preguntas. Reservas vinculantes y pagos requieren las confirmaciones previstas.",
      "hp.contactText": "\u00bfQuieres conocer Hospitality para tu negocio? Indica el tama\u00f1o del hotel y el uso previsto.",
      "hp.note": "El m\u00f3dulo de facturaci\u00f3n no sustituye una soluci\u00f3n de caja o fiscal validada.",


      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligencia",
      "nav.communication": "Comunicaci\u00f3n",
      "nav.industry": "Industria",
      "nav.products": "Productos",
      "nav.about": "Acerca de",

      "global.home": "Inicio",
      "global.explore": "Explorar",
      "global.open": "Abrir",
      "global.close": "Cerrar",
      "global.discover": "Descubrir",
      "global.learnMore": "M\u00e1s informaci\u00f3n",
      "global.support": "Soporte",
      "global.contact": "Contacto",
      "global.available": "DISPONIBLE",
      "global.development": "DESARROLLO",
      "global.systemModule": "M\u00d3DULO DEL SISTEMA",
      "global.architecture": "ARQUITECTURA",
      "global.navOpen": "Abrir navegaci\u00f3n",
      "global.mainNavigation": "Navegaci\u00f3n principal",

      "footer.imprint": "Aviso legal",
      "footer.privacy": "Privacidad",

      "core.hero.kicker":
        "BASE DEL SISTEMA",

      "core.hero.title":
        "La confianza no deber\u00eda<br>darse por sentada.<br>Debe construirse.",

      "core.hero.description":
        "ZAL\u2019THERA Core conecta identidad, contexto, reglas, consentimiento, evidencia y ejecuci\u00f3n controlada en una arquitectura com\u00fan de confianza.",

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
        "PRINCIPIOS DEL N\u00daCLEO",

      "core.status.identity": "IDENTIDAD",
      "core.status.who": "QUI\u00c9N",
      "core.status.context": "CONTEXTO",
      "core.status.why": "POR QU\u00c9",
      "core.status.policy": "POL\u00cdTICA",
      "core.status.what": "QU\u00c9",
      "core.status.consent": "CONSENTIMIENTO",
      "core.status.allow": "PERMITIR",
      "core.status.audit": "AUDITOR\u00cdA",
      "core.status.prove": "PROBAR",
      "core.status.execution": "EJECUCI\u00d3N",
      "core.status.act": "ACTUAR",

      "core.architecture.eyebrow":
        "ARQUITECTURA P\u00daBLICA",

      "core.architecture.title":
        "Cinco capas. Una cadena de decisiones trazable.",

      "core.architecture.lead":
        "La arquitectura p\u00fablica explica la l\u00f3gica fundamental de ZAL\u2019THERA sin revelar implementaciones internas de seguridad, estructuras de claves privadas ni detalles de protocolos.",

      "core.architecture.identity.title":
        "Identidad",

      "core.architecture.identity.text":
        "Una acci\u00f3n comienza con una identidad, funci\u00f3n o instancia de sistema autorizada claramente asignada.",

      "core.architecture.context.title":
        "Contexto",

      "core.architecture.context.text":
        "La informaci\u00f3n no se analiza de forma aislada, sino junto con su procedencia, tiempo y relaci\u00f3n.",

      "core.architecture.intelligence.title":
        "Inteligencia",

      "core.architecture.intelligence.text":
        "Los sistemas pueden estructurar informaci\u00f3n, explicarla y preparar posibles pasos siguientes.",

      "core.architecture.trust.title":
        "Confianza",

      "core.architecture.trust.text":
        "Los permisos, las pruebas, el consentimiento y la auditor\u00eda determinan qu\u00e9 puede considerarse confiable.",

      "core.architecture.action.title":
        "Acci\u00f3n",

      "core.architecture.action.text":
        "Las acciones importantes solo se ejecutan cuando se cumplen las condiciones necesarias.",

      "core.architecture.principle":
        "PRINCIPIO DEL SISTEMA",

      "core.architecture.principleText":
        "Primero comprender. Despu\u00e9s preparar. Actuar solo con permiso.",

      "core.architecture.technicalCore":
        "N\u00facleo t\u00e9cnico",

      "core.technical.eyebrow":
        "N\u00daCLEO T\u00c9CNICO",

      "core.technical.lead":
        "Por debajo de la arquitectura p\u00fablica funciona una cadena de control m\u00e1s precisa para acciones trazables del sistema.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Las reglas definen l\u00edmites, estados, permisos y condiciones.",

      "core.technical.policy.question":
        "\u00bfQU\u00c9 EST\u00c1 PERMITIDO?",

      "core.technical.identity.title":
        "Identidad",

      "core.technical.identity.text":
        "Las acciones se asignan a una persona, funci\u00f3n, identidad o instancia autorizada.",

      "core.technical.identity.question":
        "\u00bfQUI\u00c9N ACT\u00daA?",

      "core.technical.audit.title":
        "Auditor\u00eda",

      "core.technical.audit.text":
        "Los eventos relevantes se documentan con procedencia, momento y estado para permitir su trazabilidad.",

      "core.technical.audit.question":
        "\u00bfQU\u00c9 OCURRI\u00d3?",

      "core.technical.execute.title":
        "Ejecutar",

      "core.technical.execute.text":
        "Una acci\u00f3n solo puede modificar el estado visible cuando se hayan cumplido las condiciones necesarias.",

      "core.technical.execute.question":
        "\u00bfPUEDE OCURRIR?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un n\u00facleo local de verdad para eventos verificables.",

      "core.ledger.text1":
        "THE LEDGER registra eventos relevantes en una secuencia trazable. Las entradas se a\u00f1aden, se vinculan y pueden examinarse posteriormente.",

      "core.ledger.text2":
        "El objetivo no es recopilar toda la informaci\u00f3n de forma centralizada. El objetivo es hacer trazables y verificables los cambios de estado relevantes.",

      "core.ledger.created": "CREADO",
      "core.ledger.proof": "PRUEBA",
      "core.ledger.signed": "FIRMADO",
      "core.ledger.verified": "VERIFICADO",

      "core.ledger.appendOnly.title":
        "Solo a\u00f1adir",

      "core.ledger.appendOnly.text":
        "Los eventos relevantes se a\u00f1aden en lugar de sobrescribirse silenciosamente.",

      "core.ledger.linked.title":
        "Vinculado",

      "core.ledger.linked.text":
        "Los eventos mantienen relaciones trazables entre s\u00ed.",

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
        "\u00bfExiste una prueba v\u00e1lida de la acci\u00f3n declarada?",

      "core.trust.policy.title":
        "Confianza en las reglas",

      "core.trust.policy.text":
        "\u00bfLa acci\u00f3n se realiz\u00f3 dentro de las reglas previstas?",

      "core.trust.identity.title":
        "Confianza en la identidad",

      "core.trust.identity.text":
        "\u00bfLa identidad que act\u00faa est\u00e1 claramente establecida y autorizada?",

      "core.trust.audit.title":
        "Confianza de auditor\u00eda",

      "core.trust.audit.text":
        "\u00bfEl proceso est\u00e1 lo suficientemente completo como para reconstruirse posteriormente?",

      "core.authorization.eyebrow":
        "PUERTA DE AUTORIZACI\u00d3N HUMANA",

      "core.authorization.title":
        "La inteligencia puede preparar.<br>La autoridad permanece expl\u00edcita.",

      "core.authorization.text":
        "ZAL\u2019THERA puede comprender, estructurar y explicar informaci\u00f3n, y preparar posibles acciones. Las acciones importantes permanecen vinculadas a la autorizaci\u00f3n humana necesaria o expresamente delegada.",

      "core.application.eyebrow":
        "APLICACI\u00d3N DEL SISTEMA",

      "core.application.title":
        "Un n\u00facleo. Varios \u00e1mbitos de aplicaci\u00f3n.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documentos \u00b7 Finanzas \u00b7 Contexto \u00b7 Cards",
      "core.application.proof": "PRUEBA",
      "core.application.proofflow": "Evidencia \u00b7 Auditor\u00eda \u00b7 Firma \u00b7 Exportaci\u00f3n",
      "core.application.communication": "COMUNICACI\u00d3N",
      "core.application.voicebridge": "Identidad \u00b7 Consentimiento \u00b7 Voz \u00b7 Confianza",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Relevo \u00b7 Estado \u00b7 Responsabilidad",

      "core.return.title":
        "El n\u00facleo no es el producto.<br>Es lo que conecta los productos.",

      "core.return.button":
        "Volver al sistema"
    },


    /* ==========================================================
       FRAN\u00c7AIS
       ========================================================== */

    fr: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Exploitation h\u00f4teli\u00e8re, restauration, stocks et travail en \u00e9quipe dans un syst\u00e8me commun. La version 1.0 est en pr\u00e9paration.",
      "hp.status": "1.0 \u00b7 En pr\u00e9paration",
      "hp.title": "Hospitality \u2014 H\u00f4tellerie et restauration | ZAL\u2019THERA",
      "hp.hero": "L\u2019h\u00f4tel. Une vision partag\u00e9e.",
      "hp.lead": "Des r\u00e9servations aux commandes : Hospitality relie r\u00e9ception, entretien et service autour d\u2019un \u00e9tat commun et tra\u00e7able.",
      "hp.explore": "D\u00e9couvrir les fonctions",
      "hp.contact": "Se renseigner sur Hospitality",
      "hp.operations": "Un \u00e9tablissement. Des \u00e9quipes reli\u00e9es.",
      "hp.rooms": "Chambres et clients",
      "hp.roomsText": "Organisez l\u2019\u00e9tat des chambres, les clients, r\u00e9servations, arriv\u00e9es et d\u00e9parts.",
      "hp.housekeeping": "Entretien et dommages",
      "hp.housekeepingText": "Attribuez les t\u00e2ches, suivez le nettoyage et consignez les dommages avec un statut tra\u00e7able.",
      "hp.dining": "Restaurant et cuisine",
      "hp.diningText": "Reliez tables, carte et commandes. Le service saisit la commande ; la cuisine suit son avancement.",
      "hp.stock": "Stocks et consommation",
      "hp.stockText": "Consignez r\u00e9ceptions, consommations et corrections. Les commandes li\u00e9es mettent \u00e0 jour les stocks.",
      "hp.sync": "\u00c9quipe et ZAL Sync",
      "hp.syncText": "Les appareils associ\u00e9s travaillent avec la centrale sur Mac via le r\u00e9seau de l\u2019h\u00f4tel. R\u00f4les et autorisations limitent l\u2019acc\u00e8s.",
      "hp.invoices": "Factures et rapports",
      "hp.invoicesText": "Suivez factures et paiements enregistr\u00e9s dans un journal s\u00e9par\u00e9 et exportez les rapports.",
      "hp.roadmap": "O\u00f9 nous en sommes. La suite.",
      "hp.releaseText": "Les fonctions op\u00e9rationnelles sont pr\u00e9par\u00e9es pour la version 1.0. Le lien App Store sera ajout\u00e9 apr\u00e8s publication.",
      "hp.payments": "Paiements en ligne \u00b7 Int\u00e9gration et tests",
      "hp.paymentsText": "L\u2019acc\u00e8s client par QR et l\u2019int\u00e9gration des paiements sont en test. Les paiements r\u00e9els ne sont pas encore activ\u00e9s.",
      "hp.ai": "2.0 \u00b7 IA personnelle pr\u00e9vue",
      "hp.aiText": "Le projet relie client et h\u00f4tel : l\u2019IA personnelle pr\u00e9parerait et transmettrait demandes et questions. R\u00e9servations fermes et paiements n\u00e9cessitent les validations pr\u00e9vues.",
      "hp.contactText": "Vous souhaitez d\u00e9couvrir Hospitality pour votre \u00e9tablissement ? Indiquez sa taille et l\u2019usage pr\u00e9vu.",
      "hp.note": "Le module de facturation ne remplace pas une solution de caisse ou fiscale valid\u00e9e.",


      "nav.system": "Syst\u00e8me",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industrie",
      "nav.products": "Produits",
      "nav.about": "\u00c0 propos",

      "global.home": "Accueil",
      "global.explore": "Explorer",
      "global.open": "Ouvrir",
      "global.close": "Fermer",
      "global.discover": "D\u00e9couvrir",
      "global.learnMore": "En savoir plus",
      "global.support": "Support",
      "global.contact": "Contact",
      "global.available": "DISPONIBLE",
      "global.development": "D\u00c9VELOPPEMENT",
      "global.systemModule": "MODULE SYST\u00c8ME",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Ouvrir la navigation",
      "global.mainNavigation": "Navigation principale",

      "footer.imprint": "Mentions l\u00e9gales",
      "footer.privacy": "Confidentialit\u00e9",

      "core.hero.kicker":
        "FONDATION DU SYST\u00c8ME",

      "core.hero.title":
        "La confiance ne devrait pas<br>\u00eatre suppos\u00e9e.<br>Elle devrait \u00eatre construite.",

      "core.hero.description":
        "ZAL\u2019THERA Core relie identit\u00e9, contexte, r\u00e8gles, consentement, preuve et ex\u00e9cution contr\u00f4l\u00e9e dans une architecture de confiance commune.",

      "core.hero.architecture":
        "Ouvrir l\u2019architecture",

      "core.hero.identityBound":
        "LI\u00c9 \u00c0 L\u2019IDENTIT\u00c9",

      "core.hero.policyGoverned":
        "GOUVERN\u00c9 PAR DES R\u00c8GLES",

      "core.hero.auditable":
        "AUDITABLE",

      "core.hero.humanAuthorized":
        "AUTORIS\u00c9 PAR L\u2019HUMAIN",

      "core.status.label":
        "PRINCIPES DU CORE",

      "core.status.identity": "IDENTIT\u00c9",
      "core.status.who": "QUI",
      "core.status.context": "CONTEXTE",
      "core.status.why": "POURQUOI",
      "core.status.policy": "POLITIQUE",
      "core.status.what": "QUOI",
      "core.status.consent": "CONSENTEMENT",
      "core.status.allow": "AUTORISER",
      "core.status.audit": "AUDIT",
      "core.status.prove": "PROUVER",
      "core.status.execution": "EX\u00c9CUTION",
      "core.status.act": "AGIR",

      "core.architecture.eyebrow":
        "ARCHITECTURE PUBLIQUE",

      "core.architecture.title":
        "Cinq niveaux. Une cha\u00eene de d\u00e9cision tra\u00e7able.",

      "core.architecture.lead":
        "L\u2019architecture publique explique la logique fondamentale de ZAL\u2019THERA sans r\u00e9v\u00e9ler les impl\u00e9mentations internes de s\u00e9curit\u00e9, les structures de cl\u00e9s priv\u00e9es ou les d\u00e9tails de protocole.",

      "core.architecture.identity.title":
        "Identit\u00e9",

      "core.architecture.identity.text":
        "Une action commence par une identit\u00e9, un r\u00f4le ou une instance syst\u00e8me autoris\u00e9e clairement attribu\u00e9e.",

      "core.architecture.context.title":
        "Contexte",

      "core.architecture.context.text":
        "Les informations ne sont pas examin\u00e9es isol\u00e9ment, mais comprises avec leur provenance, leur temporalit\u00e9 et leurs relations.",

      "core.architecture.intelligence.title":
        "Intelligence",

      "core.architecture.intelligence.text":
        "Les syst\u00e8mes peuvent structurer les informations, les expliquer et pr\u00e9parer les \u00e9tapes suivantes possibles.",

      "core.architecture.trust.title":
        "Confiance",

      "core.architecture.trust.text":
        "Les permissions, preuves, consentements et audits d\u00e9terminent ce qui peut \u00eatre consid\u00e9r\u00e9 comme fiable.",

      "core.architecture.action.title":
        "Action",

      "core.architecture.action.text":
        "Les actions importantes ne sont ex\u00e9cut\u00e9es que lorsque les conditions requises sont satisfaites.",

      "core.architecture.principle":
        "PRINCIPE SYST\u00c8ME",

      "core.architecture.principleText":
        "Comprendre d\u2019abord. Pr\u00e9parer ensuite. Agir uniquement avec autorisation.",

      "core.architecture.technicalCore":
        "Core technique",

      "core.technical.eyebrow":
        "CORE TECHNIQUE",

      "core.technical.lead":
        "Sous l\u2019architecture publique fonctionne une cha\u00eene de contr\u00f4le plus pr\u00e9cise pour les actions syst\u00e8me tra\u00e7ables.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Les r\u00e8gles d\u00e9finissent les limites, les \u00e9tats, les permissions et les conditions.",

      "core.technical.policy.question":
        "QU\u2019EST-CE QUI EST AUTORIS\u00c9 ?",

      "core.technical.identity.title":
        "Identit\u00e9",

      "core.technical.identity.text":
        "Les actions sont attribu\u00e9es \u00e0 une personne, un r\u00f4le, une identit\u00e9 ou une instance autoris\u00e9e.",

      "core.technical.identity.question":
        "QUI AGIT ?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Les \u00e9v\u00e9nements pertinents sont document\u00e9s avec provenance, date et \u00e9tat afin de rester tra\u00e7ables.",

      "core.technical.audit.question":
        "QUE S\u2019EST-IL PASS\u00c9 ?",

      "core.technical.execute.title":
        "Ex\u00e9cuter",

      "core.technical.execute.text":
        "Une action ne peut modifier l\u2019\u00e9tat visible qu\u2019apr\u00e8s satisfaction des conditions n\u00e9cessaires.",

      "core.technical.execute.question":
        "CELA PEUT-IL ARRIVER ?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un noyau local de v\u00e9rit\u00e9 pour des \u00e9v\u00e9nements v\u00e9rifiables.",

      "core.ledger.text1":
        "THE LEDGER enregistre les \u00e9v\u00e9nements pertinents dans une s\u00e9quence tra\u00e7able. Les entr\u00e9es sont ajout\u00e9es, li\u00e9es et peuvent \u00eatre examin\u00e9es ult\u00e9rieurement.",

      "core.ledger.text2":
        "L\u2019objectif n\u2019est pas de centraliser toutes les informations. Il est de rendre les changements d\u2019\u00e9tat pertinents tra\u00e7ables et v\u00e9rifiables.",

      "core.ledger.created": "CR\u00c9\u00c9",
      "core.ledger.proof": "PREUVE",
      "core.ledger.signed": "SIGN\u00c9",
      "core.ledger.verified": "V\u00c9RIFI\u00c9",

      "core.ledger.appendOnly.title":
        "Ajout uniquement",

      "core.ledger.appendOnly.text":
        "Les \u00e9v\u00e9nements pertinents sont ajout\u00e9s plut\u00f4t que remplac\u00e9s discr\u00e8tement.",

      "core.ledger.linked.title":
        "Li\u00e9",

      "core.ledger.linked.text":
        "Les \u00e9v\u00e9nements conservent une relation tra\u00e7able entre eux.",

      "core.ledger.verifiable.title":
        "V\u00e9rifiable",

      "core.ledger.verifiable.text":
        "La structure, l\u2019int\u00e9grit\u00e9 et la provenance peuvent \u00eatre contr\u00f4l\u00e9es.",

      "core.trust.eyebrow":
        "COUCHE DE CONFIANCE",

      "core.trust.title":
        "La confiance ne se d\u00e9cr\u00e8te pas.",

      "core.trust.lead":
        "Elle na\u00eet d\u2019\u00e9tats, d\u2019identit\u00e9s, de permissions et de preuves v\u00e9rifiables.",

      "core.trust.proof.title":
        "Confiance par la preuve",

      "core.trust.proof.text":
        "Existe-t-il une preuve valide de l\u2019action d\u00e9clar\u00e9e ?",

      "core.trust.policy.title":
        "Confiance par les r\u00e8gles",

      "core.trust.policy.text":
        "L\u2019action a-t-elle \u00e9t\u00e9 r\u00e9alis\u00e9e conform\u00e9ment aux r\u00e8gles pr\u00e9vues ?",

      "core.trust.identity.title":
        "Confiance d\u2019identit\u00e9",

      "core.trust.identity.text":
        "L\u2019identit\u00e9 qui agit est-elle clairement \u00e9tablie et autoris\u00e9e ?",

      "core.trust.audit.title":
        "Confiance d\u2019audit",

      "core.trust.audit.text":
        "Le processus est-il suffisamment complet pour \u00eatre reconstitu\u00e9 ult\u00e9rieurement ?",

      "core.authorization.eyebrow":
        "PASSAGE D\u2019AUTORISATION HUMAINE",

      "core.authorization.title":
        "L\u2019intelligence peut pr\u00e9parer.<br>L\u2019autorit\u00e9 reste explicite.",

      "core.authorization.text":
        "ZAL\u2019THERA peut comprendre, structurer et expliquer les informations et pr\u00e9parer des actions possibles. Les actions importantes restent li\u00e9es \u00e0 l\u2019autorisation humaine requise ou explicitement d\u00e9l\u00e9gu\u00e9e.",

      "core.application.eyebrow":
        "APPLICATION DU SYST\u00c8ME",

      "core.application.title":
        "Un core. Plusieurs domaines d\u2019application.",

      "core.application.personal": "PERSONNEL",
      "core.application.continuity": "Documents \u00b7 Finances \u00b7 Contexte \u00b7 Cards",
      "core.application.proof": "PREUVE",
      "core.application.proofflow": "Preuve \u00b7 Audit \u00b7 Signature \u00b7 Export",
      "core.application.communication": "COMMUNICATION",
      "core.application.voicebridge": "Identit\u00e9 \u00b7 Consentement \u00b7 Voix \u00b7 Confiance",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Transmission \u00b7 \u00c9tat \u00b7 Responsabilit\u00e9",

      "core.return.title":
        "Le core n\u2019est pas le produit.<br>C\u2019est ce qui relie les produits.",

      "core.return.button":
        "Retour au syst\u00e8me"
    },


    /* ==========================================================
       ITALIANO
       ========================================================== */

    it: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Gestione alberghiera, ristorazione, scorte e lavoro di squadra in un sistema condiviso. La versione 1.0 \u00e8 in preparazione.",
      "hp.status": "1.0 \u00b7 In preparazione",
      "hp.title": "Hospitality \u2014 Gestione alberghiera e ristorazione | ZAL\u2019THERA",
      "hp.hero": "L\u2019hotel. Una visione condivisa.",
      "hp.lead": "Dalle prenotazioni agli ordini: Hospitality collega reception, pulizie e servizio con una visione condivisa e tracciabile.",
      "hp.explore": "Scopri le funzioni",
      "hp.contact": "Informazioni su Hospitality",
      "hp.operations": "Una struttura. Team connessi.",
      "hp.rooms": "Camere e ospiti",
      "hp.roomsText": "Organizza stato camere, ospiti, prenotazioni, arrivi e partenze.",
      "hp.housekeeping": "Pulizie e danni",
      "hp.housekeepingText": "Assegna attivit\u00e0, segui le pulizie e registra danni con uno stato tracciabile.",
      "hp.dining": "Ristorante e cucina",
      "hp.diningText": "Collega tavoli, menu e ordini. Il servizio registra l\u2019ordine e la cucina ne segue lo stato.",
      "hp.stock": "Scorte e consumi",
      "hp.stockText": "Registra entrate, consumi e correzioni. Gli ordini collegati aggiornano le scorte.",
      "hp.sync": "Team e ZAL Sync",
      "hp.syncText": "I dispositivi associati lavorano con la centrale Mac sulla rete dell\u2019hotel. Ruoli e autorizzazioni limitano l\u2019accesso.",
      "hp.invoices": "Fatture e report",
      "hp.invoicesText": "Segui fatture e pagamenti registrati in un registro separato ed esporta i report.",
      "hp.roadmap": "A che punto siamo. I prossimi passi.",
      "hp.releaseText": "Le funzioni operative sono in preparazione per la versione 1.0. Il link App Store verr\u00e0 aggiunto dopo il lancio.",
      "hp.payments": "Pagamenti online \u00b7 Integrazione e test",
      "hp.paymentsText": "Accesso ospite via QR e integrazione dei pagamenti sono in fase di test. I pagamenti reali non sono ancora attivi.",
      "hp.ai": "2.0 \u00b7 IA personale prevista",
      "hp.aiText": "Il progetto collega ospite e hotel: l\u2019IA personale preparer\u00e0 e trasmetter\u00e0 richieste e domande. Prenotazioni vincolanti e pagamenti richiedono le conferme previste.",
      "hp.contactText": "Vuoi conoscere Hospitality per la tua struttura? Scrivici dimensioni dell\u2019hotel e uso previsto.",
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
      "global.learnMore": "Scopri di pi\u00f9",
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
        "ZAL\u2019THERA Core collega identit\u00e0, contesto, regole, consenso, prova ed esecuzione controllata in un\u2019unica architettura di fiducia.",

      "core.hero.architecture":
        "Apri architettura",

      "core.hero.identityBound":
        "LEGATO ALL\u2019IDENTIT\u00c0",

      "core.hero.policyGoverned":
        "GOVERNATO DA REGOLE",

      "core.hero.auditable":
        "VERIFICABILE",

      "core.hero.humanAuthorized":
        "AUTORIZZATO DALL\u2019UOMO",

      "core.status.label":
        "PRINCIPI DEL CORE",

      "core.status.identity": "IDENTIT\u00c0",
      "core.status.who": "CHI",
      "core.status.context": "CONTESTO",
      "core.status.why": "PERCH\u00c9",
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
        "L\u2019architettura pubblica spiega la logica fondamentale di ZAL\u2019THERA senza esporre implementazioni interne di sicurezza, strutture di chiavi private o dettagli dei protocolli.",

      "core.architecture.identity.title":
        "Identit\u00e0",

      "core.architecture.identity.text":
        "Un\u2019azione inizia con un\u2019identit\u00e0, un ruolo o un\u2019istanza di sistema autorizzata chiaramente assegnata.",

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
        "Autorizzazioni, prove, consenso e audit determinano ci\u00f2 che pu\u00f2 essere considerato affidabile.",

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
        "Sotto l\u2019architettura pubblica opera una catena di controllo pi\u00f9 precisa per azioni di sistema tracciabili.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Le regole definiscono limiti, stati, autorizzazioni e condizioni.",

      "core.technical.policy.question":
        "COSA \u00c8 CONSENTITO?",

      "core.technical.identity.title":
        "Identit\u00e0",

      "core.technical.identity.text":
        "Le azioni vengono assegnate a una persona, un ruolo, un\u2019identit\u00e0 o un\u2019istanza autorizzata.",

      "core.technical.identity.question":
        "CHI AGISCE?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Gli eventi rilevanti vengono documentati con provenienza, momento e stato affinch\u00e9 restino tracciabili.",

      "core.technical.audit.question":
        "COSA \u00c8 SUCCESSO?",

      "core.technical.execute.title":
        "Esecuzione",

      "core.technical.execute.text":
        "Un\u2019azione pu\u00f2 modificare lo stato visibile solo dopo che le condizioni necessarie sono state soddisfatte.",

      "core.technical.execute.question":
        "PU\u00d2 AVVENIRE?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleo locale di verit\u00e0 per eventi verificabili.",

      "core.ledger.text1":
        "THE LEDGER registra gli eventi rilevanti in una sequenza tracciabile. Le voci vengono aggiunte, collegate e possono essere esaminate in seguito.",

      "core.ledger.text2":
        "L\u2019obiettivo non \u00e8 raccogliere centralmente tutte le informazioni. L\u2019obiettivo \u00e8 rendere tracciabili e verificabili i cambiamenti di stato rilevanti.",

      "core.ledger.created": "CREATO",
      "core.ledger.proof": "PROVA",
      "core.ledger.signed": "FIRMATO",
      "core.ledger.verified": "VERIFICATO",

      "core.ledger.appendOnly.title":
        "Solo aggiunta",

      "core.ledger.appendOnly.text":
        "Gli eventi rilevanti vengono aggiunti anzich\u00e9 sovrascritti silenziosamente.",

      "core.ledger.linked.title":
        "Collegato",

      "core.ledger.linked.text":
        "Gli eventi mantengono relazioni tracciabili tra loro.",

      "core.ledger.verifiable.title":
        "Verificabile",

      "core.ledger.verifiable.text":
        "Struttura, integrit\u00e0 e provenienza possono essere controllate.",

      "core.trust.eyebrow":
        "LIVELLO DI FIDUCIA",

      "core.trust.title":
        "La fiducia non viene semplicemente dichiarata.",

      "core.trust.lead":
        "Nasce da stati, identit\u00e0, autorizzazioni e prove verificabili.",

      "core.trust.proof.title":
        "Fiducia nella prova",

      "core.trust.proof.text":
        "Esiste una prova valida dell\u2019azione dichiarata?",

      "core.trust.policy.title":
        "Fiducia nelle regole",

      "core.trust.policy.text":
        "L\u2019azione \u00e8 stata eseguita secondo le regole previste?",

      "core.trust.identity.title":
        "Fiducia nell\u2019identit\u00e0",

      "core.trust.identity.text":
        "L\u2019identit\u00e0 che agisce \u00e8 chiaramente stabilita e autorizzata?",

      "core.trust.audit.title":
        "Fiducia nell\u2019audit",

      "core.trust.audit.text":
        "Il processo \u00e8 sufficientemente completo da poter essere ricostruito successivamente?",

      "core.authorization.eyebrow":
        "GATE DI AUTORIZZAZIONE UMANA",

      "core.authorization.title":
        "L\u2019intelligenza pu\u00f2 preparare.<br>L\u2019autorit\u00e0 resta esplicita.",

      "core.authorization.text":
        "ZAL\u2019THERA pu\u00f2 comprendere, strutturare e spiegare informazioni e preparare possibili azioni. Le azioni rilevanti restano vincolate alla necessaria autorizzazione umana o esplicitamente delegata.",

      "core.application.eyebrow":
        "APPLICAZIONE DEL SISTEMA",

      "core.application.title":
        "Un core. Pi\u00f9 ambiti applicativi.",

      "core.application.personal": "PERSONALE",
      "core.application.continuity": "Documenti \u00b7 Finanze \u00b7 Contesto \u00b7 Cards",
      "core.application.proof": "PROVA",
      "core.application.proofflow": "Prova \u00b7 Audit \u00b7 Firma \u00b7 Esportazione",
      "core.application.communication": "COMUNICAZIONE",
      "core.application.voicebridge": "Identit\u00e0 \u00b7 Consenso \u00b7 Voce \u00b7 Fiducia",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Passaggio \u00b7 Stato \u00b7 Responsabilit\u00e0",

      "core.return.title":
        "Il core non \u00e8 il prodotto.<br>\u00c8 ci\u00f2 che collega i prodotti.",

      "core.return.button":
        "Torna al sistema"
    },


    /* ==========================================================
       ROM\u00c2N\u0102
       ========================================================== */

    ro: {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "Opera\u021biuni hoteliere, restaurant, stocuri \u0219i echip\u0103 \u00eentr-un sistem comun. Versiunea 1.0 este \u00een preg\u0103tire pentru lansare.",
      "hp.status": "1.0 \u00b7 \u00cen preg\u0103tire",
      "hp.title": "Hospitality \u2014 Opera\u021biuni hoteliere \u0219i restaurant | ZAL\u2019THERA",
      "hp.hero": "Hotelul. O perspectiv\u0103 comun\u0103.",
      "hp.lead": "De la rezerv\u0103ri la comenzi: Hospitality conecteaz\u0103 recep\u021bia, cur\u0103\u021benia \u0219i serviciul printr-o imagine comun\u0103 \u0219i trasabil\u0103.",
      "hp.explore": "Descoper\u0103 func\u021biile",
      "hp.contact": "Solicit\u0103 informa\u021bii",
      "hp.operations": "Un hotel. Echipe conectate.",
      "hp.rooms": "Camere \u0219i oaspe\u021bi",
      "hp.roomsText": "Organizeaz\u0103 starea camerelor, oaspe\u021bii, rezerv\u0103rile, sosirile \u0219i plec\u0103rile.",
      "hp.housekeeping": "Cur\u0103\u021benie \u0219i daune",
      "hp.housekeepingText": "Atribuie sarcini, urm\u0103re\u0219te cur\u0103\u021benia \u0219i \u00eenregistreaz\u0103 daunele cu un statut trasabil.",
      "hp.dining": "Restaurant \u0219i buc\u0103t\u0103rie",
      "hp.diningText": "Conecteaz\u0103 mese, meniu \u0219i comenzi. Serviciul \u00eenregistreaz\u0103 comanda, iar buc\u0103t\u0103ria urm\u0103re\u0219te progresul.",
      "hp.stock": "Stocuri \u0219i consum",
      "hp.stockText": "\u00cenregistreaz\u0103 intr\u0103rile, consumul \u0219i corec\u021biile. Comenzile asociate actualizeaz\u0103 stocul.",
      "hp.sync": "Echip\u0103 \u0219i ZAL Sync",
      "hp.syncText": "Dispozitivele asociate lucreaz\u0103 cu centrala Mac prin re\u021beaua hotelului. Rolurile \u0219i aprob\u0103rile limiteaz\u0103 accesul.",
      "hp.invoices": "Facturi \u0219i rapoarte",
      "hp.invoicesText": "Urm\u0103re\u0219te facturile \u0219i pl\u0103\u021bile \u00eenregistrate \u00eentr-un jurnal separat \u0219i export\u0103 rapoarte.",
      "hp.roadmap": "Unde suntem. Ce urmeaz\u0103.",
      "hp.releaseText": "Func\u021biile opera\u021bionale sunt preg\u0103tite pentru versiunea 1.0. Linkul App Store va fi ad\u0103ugat dup\u0103 lansare.",
      "hp.payments": "Pl\u0103\u021bi online \u00b7 Integrare \u0219i testare",
      "hp.paymentsText": "Accesul oaspe\u021bilor prin QR \u0219i integrarea pl\u0103\u021bilor sunt \u00een testare. Pl\u0103\u021bile reale nu sunt \u00eenc\u0103 activate.",
      "hp.ai": "2.0 \u00b7 IA personal\u0103 planificat\u0103",
      "hp.aiText": "Planul conecteaz\u0103 oaspetele \u0219i hotelul: IA personal\u0103 va preg\u0103ti \u0219i transmite cereri \u0219i \u00eentreb\u0103ri. Rezerv\u0103rile ferme \u0219i pl\u0103\u021bile necesit\u0103 aprob\u0103rile prev\u0103zute.",
      "hp.contactText": "Vrei s\u0103 descoperi Hospitality pentru afacerea ta? Scrie-ne dimensiunea hotelului \u0219i utilizarea dorit\u0103.",
      "hp.note": "Modulul de facturare nu \u00eenlocuie\u0219te o solu\u021bie de cas\u0103 sau fiscal\u0103 validat\u0103.",


      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligen\u021b\u0103",
      "nav.communication": "Comunicare",
      "nav.industry": "Industrie",
      "nav.products": "Produse",
      "nav.about": "Despre",

      "global.home": "Acas\u0103",
      "global.explore": "Exploreaz\u0103",
      "global.open": "Deschide",
      "global.close": "\u00cenchide",
      "global.discover": "Descoper\u0103",
      "global.learnMore": "Afl\u0103 mai multe",
      "global.support": "Suport",
      "global.contact": "Contact",
      "global.available": "DISPONIBIL",
      "global.development": "DEZVOLTARE",
      "global.systemModule": "MODUL DE SISTEM",
      "global.architecture": "ARHITECTUR\u0102",
      "global.navOpen": "Deschide navigarea",
      "global.mainNavigation": "Navigare principal\u0103",

      "footer.imprint": "Informa\u021bii legale",
      "footer.privacy": "Confiden\u021bialitate",

      "core.hero.kicker":
        "FUNDA\u021aIA SISTEMULUI",

      "core.hero.title":
        "\u00cencrederea nu ar trebui<br>presupus\u0103.<br>Ar trebui construit\u0103.",

      "core.hero.description":
        "ZAL\u2019THERA Core conecteaz\u0103 identitatea, contextul, regulile, consim\u021b\u0103m\u00e2ntul, dovada \u0219i execu\u021bia controlat\u0103 \u00eentr-o arhitectur\u0103 comun\u0103 de \u00eencredere.",

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
      "core.status.policy": "POLITIC\u0102",
      "core.status.what": "CE",
      "core.status.consent": "CONSIM\u021a\u0102M\u00c2NT",
      "core.status.allow": "PERMITE",
      "core.status.audit": "AUDIT",
      "core.status.prove": "DOVAD\u0102",
      "core.status.execution": "EXECU\u021aIE",
      "core.status.act": "AC\u021aIUNE",

      "core.architecture.eyebrow":
        "ARHITECTUR\u0102 PUBLIC\u0102",

      "core.architecture.title":
        "Cinci niveluri. Un lan\u021b decizional trasabil.",

      "core.architecture.lead":
        "Arhitectura public\u0103 explic\u0103 logica fundamental\u0103 ZAL\u2019THERA f\u0103r\u0103 a expune implement\u0103ri interne de securitate, structuri de chei private sau detalii de protocol.",

      "core.architecture.identity.title":
        "Identitate",

      "core.architecture.identity.text":
        "O ac\u021biune \u00eencepe cu o identitate, un rol sau o instan\u021b\u0103 autorizat\u0103 de sistem clar atribuit\u0103.",

      "core.architecture.context.title":
        "Context",

      "core.architecture.context.text":
        "Informa\u021bia nu este analizat\u0103 izolat, ci \u00eempreun\u0103 cu provenien\u021ba, timpul \u0219i rela\u021bia sa.",

      "core.architecture.intelligence.title":
        "Inteligen\u021b\u0103",

      "core.architecture.intelligence.text":
        "Sistemele pot structura informa\u021biile, le pot explica \u0219i pot preg\u0103ti posibili pa\u0219i urm\u0103tori.",

      "core.architecture.trust.title":
        "\u00cencredere",

      "core.architecture.trust.text":
        "Permisiunile, dovezile, consim\u021b\u0103m\u00e2ntul \u0219i auditul determin\u0103 ce poate fi considerat de \u00eencredere.",

      "core.architecture.action.title":
        "Ac\u021biune",

      "core.architecture.action.text":
        "Ac\u021biunile importante sunt executate numai atunci c\u00e2nd condi\u021biile necesare sunt \u00eendeplinite.",

      "core.architecture.principle":
        "PRINCIPIU DE SISTEM",

      "core.architecture.principleText":
        "Mai \u00eent\u00e2i \u00een\u021belege. Apoi preg\u0103te\u0219te. Ac\u021bioneaz\u0103 numai cu permisiune.",

      "core.architecture.technicalCore":
        "Core tehnic",

      "core.technical.eyebrow":
        "CORE TEHNIC",

      "core.technical.lead":
        "Sub arhitectura public\u0103 func\u021bioneaz\u0103 un lan\u021b de control mai precis pentru ac\u021biuni de sistem trasabile.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Regulile definesc limite, st\u0103ri, permisiuni \u0219i condi\u021bii.",

      "core.technical.policy.question":
        "CE ESTE PERMIS?",

      "core.technical.identity.title":
        "Identitate",

      "core.technical.identity.text":
        "Ac\u021biunile sunt atribuite unei persoane, unui rol, unei identit\u0103\u021bi sau unei instan\u021be autorizate.",

      "core.technical.identity.question":
        "CINE AC\u021aIONEAZ\u0102?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Evenimentele relevante sunt documentate cu provenien\u021b\u0103, timp \u0219i stare pentru a r\u0103m\u00e2ne trasabile.",

      "core.technical.audit.question":
        "CE S-A \u00ceNT\u00c2MPLAT?",

      "core.technical.execute.title":
        "Executare",

      "core.technical.execute.text":
        "O ac\u021biune poate modifica starea vizibil\u0103 numai dup\u0103 \u00eendeplinirea condi\u021biilor necesare.",

      "core.technical.execute.question":
        "POATE AVEA LOC?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleu local de adev\u0103r pentru evenimente verificabile.",

      "core.ledger.text1":
        "THE LEDGER \u00eenregistreaz\u0103 evenimentele relevante \u00eentr-o secven\u021b\u0103 trasabil\u0103. \u00cenregistr\u0103rile sunt ad\u0103ugate, legate \u0219i pot fi examinate ulterior.",

      "core.ledger.text2":
        "Scopul nu este colectarea centralizat\u0103 a tuturor informa\u021biilor. Scopul este ca modific\u0103rile relevante de stare s\u0103 devin\u0103 trasabile \u0219i verificabile.",

      "core.ledger.created": "CREAT",
      "core.ledger.proof": "DOVAD\u0102",
      "core.ledger.signed": "SEMNAT",
      "core.ledger.verified": "VERIFICAT",

      "core.ledger.appendOnly.title":
        "Doar ad\u0103ugare",

      "core.ledger.appendOnly.text":
        "Evenimentele relevante sunt ad\u0103ugate \u00een loc s\u0103 fie suprascrise \u00een mod ascuns.",

      "core.ledger.linked.title":
        "Conectat",

      "core.ledger.linked.text":
        "Evenimentele p\u0103streaz\u0103 rela\u021bii trasabile \u00eentre ele.",

      "core.ledger.verifiable.title":
        "Verificabil",

      "core.ledger.verifiable.text":
        "Structura, integritatea \u0219i provenien\u021ba pot fi verificate.",

      "core.trust.eyebrow":
        "STRAT DE \u00ceNCREDERE",

      "core.trust.title":
        "\u00cencrederea nu este doar declarat\u0103.",

      "core.trust.lead":
        "Ea rezult\u0103 din st\u0103ri, identit\u0103\u021bi, permisiuni \u0219i dovezi verificabile.",

      "core.trust.proof.title":
        "\u00cencredere prin dovad\u0103",

      "core.trust.proof.text":
        "Exist\u0103 o dovad\u0103 valid\u0103 pentru ac\u021biunea declarat\u0103?",

      "core.trust.policy.title":
        "\u00cencredere \u00een reguli",

      "core.trust.policy.text":
        "Ac\u021biunea a fost realizat\u0103 conform regulilor prev\u0103zute?",

      "core.trust.identity.title":
        "\u00cencredere \u00een identitate",

      "core.trust.identity.text":
        "Identitatea care ac\u021bioneaz\u0103 este clar stabilit\u0103 \u0219i autorizat\u0103?",

      "core.trust.audit.title":
        "\u00cencredere \u00een audit",

      "core.trust.audit.text":
        "Procesul este suficient de complet pentru a putea fi reconstruit ulterior?",

      "core.authorization.eyebrow":
        "POART\u0102 DE AUTORIZARE UMAN\u0102",

      "core.authorization.title":
        "Inteligen\u021ba poate preg\u0103ti.<br>Autoritatea r\u0103m\u00e2ne explicit\u0103.",

      "core.authorization.text":
        "ZAL\u2019THERA poate \u00een\u021belege, structura \u0219i explica informa\u021biile \u0219i poate preg\u0103ti ac\u021biuni posibile. Ac\u021biunile importante r\u0103m\u00e2n legate de autorizarea uman\u0103 necesar\u0103 sau delegat\u0103 explicit.",

      "core.application.eyebrow":
        "APLICAREA SISTEMULUI",

      "core.application.title":
        "Un core. Mai multe domenii de aplicare.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documente \u00b7 Finan\u021be \u00b7 Context \u00b7 Cards",
      "core.application.proof": "DOVAD\u0102",
      "core.application.proofflow": "Dovad\u0103 \u00b7 Audit \u00b7 Semn\u0103tur\u0103 \u00b7 Export",
      "core.application.communication": "COMUNICARE",
      "core.application.voicebridge": "Identitate \u00b7 Consim\u021b\u0103m\u00e2nt \u00b7 Voce \u00b7 \u00cencredere",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Predare \u00b7 Stare \u00b7 Responsabilitate",

      "core.return.title":
        "Core-ul nu este produsul.<br>Este ceea ce conecteaz\u0103 produsele.",

      "core.return.button":
        "\u00cenapoi la sistem"
    },


    /* ==========================================================
       \u7b80\u4f53\u4e2d\u6587
       ========================================================== */

    "zh-Hans": {

      /* Hospitality: release preparation, payments in test, AI planned. */
      "home.products.hospitality": "\u9152\u5e97\u8fd0\u8425\u3001\u9910\u996e\u3001\u5e93\u5b58\u4e0e\u56e2\u961f\u534f\u4f5c\uff0c\u6c47\u805a\u4e8e\u540c\u4e00\u7cfb\u7edf\u30021.0 \u7248\u672c\u6b63\u5728\u51c6\u5907\u53d1\u5e03\u3002",
      "hp.status": "1.0 \u00b7 \u53d1\u5e03\u51c6\u5907\u4e2d",
      "hp.title": "Hospitality \u2014 \u9152\u5e97\u8fd0\u8425\u4e0e\u9910\u996e | ZAL\u2019THERA",
      "hp.hero": "\u9152\u5e97\u8fd0\u8425\uff0c\u56e2\u961f\u5171\u540c\u638c\u63e1\u3002",
      "hp.lead": "\u4ece\u9884\u8ba2\u5230\u70b9\u5355\uff1aHospitality \u5c06\u524d\u53f0\u3001\u5ba2\u623f\u6e05\u6d01\u4e0e\u670d\u52a1\u56e2\u961f\u8fde\u63a5\u5230\u53ef\u8ffd\u6eaf\u7684\u5171\u540c\u72b6\u6001\u3002",
      "hp.explore": "\u4e86\u89e3\u529f\u80fd",
      "hp.contact": "\u54a8\u8be2 Hospitality",
      "hp.operations": "\u4e00\u4e2a\u9152\u5e97\uff0c\u76f8\u4e92\u8fde\u63a5\u7684\u56e2\u961f\u3002",
      "hp.rooms": "\u5ba2\u623f\u4e0e\u4f4f\u5ba2",
      "hp.roomsText": "\u6e05\u6670\u7ba1\u7406\u5ba2\u623f\u72b6\u6001\u3001\u4f4f\u5ba2\u3001\u9884\u8ba2\u3001\u5165\u4f4f\u4e0e\u9000\u623f\u3002",
      "hp.housekeeping": "\u5ba2\u623f\u6e05\u6d01\u4e0e\u635f\u574f",
      "hp.housekeepingText": "\u5206\u914d\u4efb\u52a1\u3001\u8ddf\u8fdb\u6e05\u6d01\uff0c\u5e76\u4ee5\u53ef\u8ffd\u6eaf\u72b6\u6001\u8bb0\u5f55\u635f\u574f\u3002",
      "hp.dining": "\u9910\u5385\u4e0e\u53a8\u623f",
      "hp.diningText": "\u8fde\u63a5\u9910\u684c\u3001\u83dc\u5355\u4e0e\u8ba2\u5355\u3002\u670d\u52a1\u4eba\u5458\u5f55\u5355\uff0c\u53a8\u623f\u8ddf\u8fdb\u5904\u7406\u72b6\u6001\u3002",
      "hp.stock": "\u5e93\u5b58\u4e0e\u6d88\u8017",
      "hp.stockText": "\u8bb0\u5f55\u5165\u5e93\u3001\u6d88\u8017\u4e0e\u8c03\u6574\u3002\u5173\u8054\u8ba2\u5355\u540c\u6b65\u66f4\u65b0\u5e93\u5b58\u3002",
      "hp.sync": "\u56e2\u961f\u4e0e ZAL Sync",
      "hp.syncText": "\u914d\u5bf9\u7684\u5458\u5de5\u8bbe\u5907\u901a\u8fc7\u9152\u5e97\u7f51\u7edc\u4e0e Mac \u4e2d\u5fc3\u534f\u4f5c\u3002\u89d2\u8272\u4e0e\u6388\u6743\u9650\u5b9a\u8bbf\u95ee\u8303\u56f4\u3002",
      "hp.invoices": "\u8d26\u5355\u4e0e\u62a5\u8868",
      "hp.invoicesText": "\u5728\u72ec\u7acb\u65e5\u5fd7\u4e2d\u8ffd\u6eaf\u8d26\u5355\u4e0e\u5df2\u8bb0\u5f55\u4ed8\u6b3e\uff0c\u5e76\u5bfc\u51fa\u62a5\u8868\u3002",
      "hp.roadmap": "\u5f53\u524d\u8fdb\u5c55\u4e0e\u4e0b\u4e00\u6b65\u3002",
      "hp.releaseText": "\u8fd0\u8425\u529f\u80fd\u6b63\u5728\u4e3a 1.0 \u7248\u672c\u505a\u51c6\u5907\u3002\u6b63\u5f0f\u53d1\u5e03\u540e\u5c06\u5728\u6b64\u63d0\u4f9b App Store \u4e0b\u8f7d\u94fe\u63a5\u3002",
      "hp.payments": "\u5728\u7ebf\u652f\u4ed8 \u00b7 \u96c6\u6210\u4e0e\u6d4b\u8bd5",
      "hp.paymentsText": "\u4f4f\u5ba2\u4e8c\u7ef4\u7801\u5165\u53e3\u4e0e\u652f\u4ed8\u96c6\u6210\u6b63\u5728\u6d4b\u8bd5\u3002\u771f\u5b9e\u5728\u7ebf\u652f\u4ed8\u5c1a\u672a\u542f\u7528\u3002",
      "hp.ai": "2.0 \u00b7 \u4e2a\u4eba AI \u89c4\u5212\u4e2d",
      "hp.aiText": "\u89c4\u5212\u5c06\u4f4f\u5ba2\u4e0e\u9152\u5e97\u8fde\u63a5\u8d77\u6765\uff1a\u4e2a\u4eba AI \u5c06\u51c6\u5907\u5e76\u4f20\u9012\u9884\u8ba2\u9700\u6c42\u4e0e\u95ee\u9898\u3002\u5177\u6709\u7ea6\u675f\u529b\u7684\u9884\u8ba2\u4e0e\u4ed8\u6b3e\u4ecd\u9700\u89c4\u5b9a\u7684\u786e\u8ba4\u3002",
      "hp.contactText": "\u60f3\u4e86\u89e3 Hospitality \u5982\u4f55\u7528\u4e8e\u4f60\u7684\u9152\u5e97\uff1f\u8bf7\u544a\u77e5\u9152\u5e97\u89c4\u6a21\u4e0e\u8ba1\u5212\u4f7f\u7528\u7684\u4e1a\u52a1\u8303\u56f4\u3002",
      "hp.note": "\u8d26\u5355\u6a21\u5757\u4e0d\u80fd\u66ff\u4ee3\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u6536\u94f6\u6216\u7a0e\u52a1\u89e3\u51b3\u65b9\u6848\u3002",


      "nav.system": "\u7cfb\u7edf",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "\u667a\u80fd",
      "nav.communication": "\u901a\u4fe1",
      "nav.industry": "\u5de5\u4e1a",
      "nav.products": "\u4ea7\u54c1",
      "nav.about": "\u5173\u4e8e",

      "global.home": "\u9996\u9875",
      "global.explore": "\u63a2\u7d22",
      "global.open": "\u6253\u5f00",
      "global.close": "\u5173\u95ed",
      "global.discover": "\u63a2\u7d22",
      "global.learnMore": "\u4e86\u89e3\u66f4\u591a",
      "global.support": "\u652f\u6301",
      "global.contact": "\u8054\u7cfb",
      "global.available": "\u5df2\u53d1\u5e03",
      "global.development": "\u5f00\u53d1\u4e2d",
      "global.systemModule": "\u7cfb\u7edf\u6a21\u5757",
      "global.architecture": "\u67b6\u6784",
      "global.navOpen": "\u6253\u5f00\u5bfc\u822a",
      "global.mainNavigation": "\u4e3b\u5bfc\u822a",

      "footer.imprint": "\u6cd5\u5f8b\u58f0\u660e",
      "footer.privacy": "\u9690\u79c1",

      "core.hero.kicker":
        "\u7cfb\u7edf\u57fa\u7840",

      "core.hero.title":
        "\u4fe1\u4efb\u4e0d\u5e94\u88ab<br>\u9ed8\u8ba4\u5047\u8bbe\u3002<br>\u5b83\u5e94\u8be5\u88ab\u6784\u5efa\u3002",

      "core.hero.description":
        "ZAL\u2019THERA Core \u5c06\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u89c4\u5219\u3001\u540c\u610f\u3001\u8bc1\u660e\u4e0e\u53d7\u63a7\u6267\u884c\u8fde\u63a5\u6210\u7edf\u4e00\u7684\u4fe1\u4efb\u67b6\u6784\u3002",

      "core.hero.architecture":
        "\u6253\u5f00\u67b6\u6784",

      "core.hero.identityBound":
        "\u8eab\u4efd\u7ed1\u5b9a",

      "core.hero.policyGoverned":
        "\u89c4\u5219\u6cbb\u7406",

      "core.hero.auditable":
        "\u53ef\u5ba1\u8ba1",

      "core.hero.humanAuthorized":
        "\u4eba\u5de5\u6388\u6743",

      "core.status.label":
        "\u6838\u5fc3\u539f\u5219",

      "core.status.identity": "\u8eab\u4efd",
      "core.status.who": "\u8c01",
      "core.status.context": "\u4e0a\u4e0b\u6587",
      "core.status.why": "\u4e3a\u4ec0\u4e48",
      "core.status.policy": "\u89c4\u5219",
      "core.status.what": "\u4ec0\u4e48",
      "core.status.consent": "\u540c\u610f",
      "core.status.allow": "\u5141\u8bb8",
      "core.status.audit": "\u5ba1\u8ba1",
      "core.status.prove": "\u8bc1\u660e",
      "core.status.execution": "\u6267\u884c",
      "core.status.act": "\u884c\u52a8",

      "core.architecture.eyebrow":
        "\u516c\u5f00\u67b6\u6784",

      "core.architecture.title":
        "\u4e94\u4e2a\u5c42\u7ea7\u3002\u4e00\u6761\u53ef\u8ffd\u6eaf\u7684\u51b3\u7b56\u94fe\u3002",

      "core.architecture.lead":
        "\u516c\u5f00\u67b6\u6784\u89e3\u91ca ZAL\u2019THERA \u7684\u57fa\u672c\u903b\u8f91\uff0c\u540c\u65f6\u4e0d\u4f1a\u516c\u5f00\u5185\u90e8\u5b89\u5168\u5b9e\u73b0\u3001\u79c1\u94a5\u7ed3\u6784\u6216\u534f\u8bae\u7ec6\u8282\u3002",

      "core.architecture.identity.title":
        "\u8eab\u4efd",

      "core.architecture.identity.text":
        "\u6bcf\u4e2a\u64cd\u4f5c\u90fd\u4ece\u660e\u786e\u5206\u914d\u7684\u8eab\u4efd\u3001\u89d2\u8272\u6216\u5df2\u6388\u6743\u7cfb\u7edf\u5b9e\u4f8b\u5f00\u59cb\u3002",

      "core.architecture.context.title":
        "\u4e0a\u4e0b\u6587",

      "core.architecture.context.text":
        "\u4fe1\u606f\u4e0d\u4f1a\u88ab\u5b64\u7acb\u7406\u89e3\uff0c\u800c\u662f\u7ed3\u5408\u6765\u6e90\u3001\u65f6\u95f4\u548c\u5173\u7cfb\u8fdb\u884c\u89e3\u91ca\u3002",

      "core.architecture.intelligence.title":
        "\u667a\u80fd",

      "core.architecture.intelligence.text":
        "\u7cfb\u7edf\u53ef\u4ee5\u7ec4\u7ec7\u4fe1\u606f\u3001\u89e3\u91ca\u4fe1\u606f\uff0c\u5e76\u51c6\u5907\u53ef\u80fd\u7684\u4e0b\u4e00\u6b65\u3002",

      "core.architecture.trust.title":
        "\u4fe1\u4efb",

      "core.architecture.trust.text":
        "\u6743\u9650\u3001\u8bc1\u660e\u3001\u540c\u610f\u548c\u5ba1\u8ba1\u5171\u540c\u51b3\u5b9a\u4ec0\u4e48\u53ef\u4ee5\u88ab\u89c6\u4e3a\u53ef\u4fe1\u3002",

      "core.architecture.action.title":
        "\u64cd\u4f5c",

      "core.architecture.action.text":
        "\u91cd\u8981\u64cd\u4f5c\u53ea\u6709\u5728\u6ee1\u8db3\u6240\u9700\u6761\u4ef6\u540e\u624d\u80fd\u6267\u884c\u3002",

      "core.architecture.principle":
        "\u7cfb\u7edf\u539f\u5219",

      "core.architecture.principleText":
        "\u5148\u7406\u89e3\u3002\u518d\u51c6\u5907\u3002\u53ea\u6709\u83b7\u5f97\u8bb8\u53ef\u540e\u624d\u884c\u52a8\u3002",

      "core.architecture.technicalCore":
        "\u6280\u672f\u6838\u5fc3",

      "core.technical.eyebrow":
        "\u6280\u672f\u6838\u5fc3",

      "core.technical.lead":
        "\u5728\u516c\u5f00\u67b6\u6784\u4e4b\u4e0b\u8fd0\u884c\u7740\u4e00\u6761\u66f4\u7cbe\u786e\u7684\u63a7\u5236\u94fe\uff0c\u7528\u4e8e\u786e\u4fdd\u7cfb\u7edf\u64cd\u4f5c\u53ef\u8ffd\u6eaf\u3002",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "\u89c4\u5219\u5b9a\u4e49\u8fb9\u754c\u3001\u72b6\u6001\u3001\u6743\u9650\u548c\u6761\u4ef6\u3002",

      "core.technical.policy.question":
        "\u5141\u8bb8\u4ec0\u4e48\uff1f",

      "core.technical.identity.title":
        "\u8eab\u4efd",

      "core.technical.identity.text":
        "\u64cd\u4f5c\u4f1a\u88ab\u660e\u786e\u5173\u8054\u5230\u4e2a\u4eba\u3001\u89d2\u8272\u3001\u8eab\u4efd\u6216\u5df2\u6388\u6743\u5b9e\u4f8b\u3002",

      "core.technical.identity.question":
        "\u8c01\u5728\u884c\u52a8\uff1f",

      "core.technical.audit.title":
        "\u5ba1\u8ba1",

      "core.technical.audit.text":
        "\u91cd\u8981\u4e8b\u4ef6\u901a\u8fc7\u6765\u6e90\u3001\u65f6\u95f4\u548c\u72b6\u6001\u4fe1\u606f\u88ab\u8bb0\u5f55\uff0c\u4ee5\u4fdd\u6301\u53ef\u8ffd\u6eaf\u6027\u3002",

      "core.technical.audit.question":
        "\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",

      "core.technical.execute.title":
        "\u6267\u884c",

      "core.technical.execute.text":
        "\u53ea\u6709\u6ee1\u8db3\u5fc5\u8981\u6761\u4ef6\u540e\uff0c\u64cd\u4f5c\u624d\u53ef\u4ee5\u6539\u53d8\u53ef\u89c1\u72b6\u6001\u3002",

      "core.technical.execute.question":
        "\u53ef\u4ee5\u6267\u884c\u5417\uff1f",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "\u9762\u5411\u53ef\u9a8c\u8bc1\u4e8b\u4ef6\u7684\u672c\u5730\u4e8b\u5b9e\u6838\u5fc3\u3002",

      "core.ledger.text1":
        "THE LEDGER \u6309\u53ef\u8ffd\u6eaf\u987a\u5e8f\u8bb0\u5f55\u91cd\u8981\u4e8b\u4ef6\u3002\u8bb0\u5f55\u4f1a\u88ab\u8ffd\u52a0\u3001\u5173\u8054\uff0c\u5e76\u53ef\u5728\u4e4b\u540e\u8fdb\u884c\u68c0\u67e5\u3002",

      "core.ledger.text2":
        "\u76ee\u6807\u4e0d\u662f\u96c6\u4e2d\u6536\u96c6\u6240\u6709\u4fe1\u606f\u3002\u76ee\u6807\u662f\u8ba9\u91cd\u8981\u72b6\u6001\u53d8\u5316\u4fdd\u6301\u53ef\u8ffd\u6eaf\u548c\u53ef\u9a8c\u8bc1\u3002",

      "core.ledger.created": "\u5df2\u521b\u5efa",
      "core.ledger.proof": "\u8bc1\u660e",
      "core.ledger.signed": "\u5df2\u7b7e\u7f72",
      "core.ledger.verified": "\u5df2\u9a8c\u8bc1",

      "core.ledger.appendOnly.title":
        "\u4ec5\u8ffd\u52a0",

      "core.ledger.appendOnly.text":
        "\u91cd\u8981\u4e8b\u4ef6\u4f1a\u88ab\u8ffd\u52a0\uff0c\u800c\u4e0d\u662f\u88ab\u6084\u7136\u8986\u76d6\u3002",

      "core.ledger.linked.title":
        "\u5173\u8054",

      "core.ledger.linked.text":
        "\u4e8b\u4ef6\u4e4b\u95f4\u4fdd\u6301\u53ef\u8ffd\u6eaf\u7684\u5173\u7cfb\u3002",

      "core.ledger.verifiable.title":
        "\u53ef\u9a8c\u8bc1",

      "core.ledger.verifiable.text":
        "\u7ed3\u6784\u3001\u5b8c\u6574\u6027\u548c\u6765\u6e90\u90fd\u53ef\u4ee5\u88ab\u68c0\u67e5\u3002",

      "core.trust.eyebrow":
        "\u4fe1\u4efb\u5c42",

      "core.trust.title":
        "\u4fe1\u4efb\u4e0d\u662f\u7b80\u5355\u58f0\u660e\u51fa\u6765\u7684\u3002",

      "core.trust.lead":
        "\u5b83\u6765\u81ea\u53ef\u9a8c\u8bc1\u7684\u72b6\u6001\u3001\u8eab\u4efd\u3001\u6743\u9650\u548c\u8bc1\u660e\u3002",

      "core.trust.proof.title":
        "\u8bc1\u660e\u4fe1\u4efb",

      "core.trust.proof.text":
        "\u58f0\u660e\u7684\u64cd\u4f5c\u662f\u5426\u5b58\u5728\u6709\u6548\u8bc1\u660e\uff1f",

      "core.trust.policy.title":
        "\u89c4\u5219\u4fe1\u4efb",

      "core.trust.policy.text":
        "\u64cd\u4f5c\u662f\u5426\u6309\u7167\u9884\u5b9a\u89c4\u5219\u6267\u884c\uff1f",

      "core.trust.identity.title":
        "\u8eab\u4efd\u4fe1\u4efb",

      "core.trust.identity.text":
        "\u6267\u884c\u64cd\u4f5c\u7684\u8eab\u4efd\u662f\u5426\u660e\u786e\u5e76\u5df2\u83b7\u6388\u6743\uff1f",

      "core.trust.audit.title":
        "\u5ba1\u8ba1\u4fe1\u4efb",

      "core.trust.audit.text":
        "\u6d41\u7a0b\u662f\u5426\u8db3\u591f\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u4e4b\u540e\u88ab\u91cd\u65b0\u8ffd\u6eaf\uff1f",

      "core.authorization.eyebrow":
        "\u4eba\u5de5\u6388\u6743\u95f8\u95e8",

      "core.authorization.title":
        "\u667a\u80fd\u53ef\u4ee5\u51c6\u5907\u3002<br>\u6743\u529b\u5fc5\u987b\u660e\u786e\u3002",

      "core.authorization.text":
        "ZAL\u2019THERA \u53ef\u4ee5\u7406\u89e3\u3001\u7ec4\u7ec7\u548c\u89e3\u91ca\u4fe1\u606f\uff0c\u5e76\u51c6\u5907\u53ef\u80fd\u7684\u64cd\u4f5c\u3002\u4f46\u91cd\u8981\u64cd\u4f5c\u4ecd\u7136\u5fc5\u987b\u53d7\u5fc5\u8981\u7684\u4eba\u5de5\u6388\u6743\u6216\u660e\u786e\u59d4\u6258\u7684\u6388\u6743\u7ea6\u675f\u3002",

      "core.application.eyebrow":
        "\u7cfb\u7edf\u5e94\u7528",

      "core.application.title":
        "\u4e00\u4e2a\u6838\u5fc3\u3002\u591a\u4e2a\u5e94\u7528\u9886\u57df\u3002",

      "core.application.personal":
        "\u4e2a\u4eba",

      "core.application.continuity":
        "\u6587\u6863 \u00b7 \u8d22\u52a1 \u00b7 \u4e0a\u4e0b\u6587 \u00b7 Cards",

      "core.application.proof":
        "\u8bc1\u660e",

      "core.application.proofflow":
        "\u8bc1\u660e \u00b7 \u5ba1\u8ba1 \u00b7 \u7b7e\u540d \u00b7 \u5bfc\u51fa",

      "core.application.communication":
        "\u901a\u4fe1",

      "core.application.voicebridge":
        "\u8eab\u4efd \u00b7 \u540c\u610f \u00b7 \u8bed\u97f3 \u00b7 \u4fe1\u4efb",

      "core.application.industry":
        "\u5de5\u4e1a",

      "core.application.shiftlog":
        "\u4ea4\u63a5 \u00b7 \u72b6\u6001 \u00b7 \u8d23\u4efb",

      "core.return.title":
        "\u6838\u5fc3\u4e0d\u662f\u4ea7\u54c1\u3002<br>\u6838\u5fc3\u8fde\u63a5\u6240\u6709\u4ea7\u54c1\u3002",

      "core.return.button":
        "\u8fd4\u56de\u7cfb\u7edf"
    }
  };



  /* ============================================================
     FINAL WEBSITE TRANSLATIONS v2.0
     Complete page translation rows.
     Order: DE / EN / TR / ES / FR / IT / RO / ZH-HANS
     ============================================================ */

  const FINAL_TRANSLATION_ROWS = [["footer.terms",["AGB","Terms","\u015eartlar","T\u00e9rminos","CGV","Termini","Termeni","\u6761\u6b3e"]],["footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","R\u00e9tractation","Recesso","Retragere","\u64a4\u9500"]],["global.navClose",["Navigation schlie\u00dfen","Close navigation","Navigasyonu kapat","Cerrar navegaci\u00f3n","Fermer la navigation","Chiudi navigazione","\u00cenchide navigarea","\u5173\u95ed\u5bfc\u822a"]],["home.hero.kicker",["SOUVER\u00c4NE DIGITALE ARCHITEKTUR","SOVEREIGN DIGITAL ARCHITECTURE","EGEMEN D\u0130J\u0130TAL M\u0130MAR\u0130","ARQUITECTURA DIGITAL SOBERANA","ARCHITECTURE NUM\u00c9RIQUE SOUVERAINE","ARCHITETTURA DIGITALE SOVRANA","ARHITECTUR\u0102 DIGITAL\u0102 SUVERAN\u0102","\u4e3b\u6743\u6570\u5b57\u67b6\u6784"]],["home.hero.title",["One system.<br>One identity.<br>Connected intelligence.","One system.<br>One identity.<br>Connected intelligence.","Tek sistem.<br>Tek kimlik.<br>Ba\u011flant\u0131l\u0131 zek\u00e2.","Un sistema.<br>Una identidad.<br>Inteligencia conectada.","Un syst\u00e8me.<br>Une identit\u00e9.<br>Une intelligence connect\u00e9e.","Un sistema.<br>Un\u2019identit\u00e0.<br>Intelligenza connessa.","Un sistem.<br>O identitate.<br>Inteligen\u021b\u0103 conectat\u0103.","\u4e00\u4e2a\u7cfb\u7edf\u3002<br>\u4e00\u4e2a\u8eab\u4efd\u3002<br>\u8fde\u63a5\u7684\u667a\u80fd\u3002"]],["home.hero.description",["ZAL\u2019THERA verbindet Identit\u00e4t, Kontext, k\u00fcnstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.","ZAL\u2019THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.","ZAL\u2019THERA; kimlik, ba\u011flam, yapay zek\u00e2, veri, g\u00fcven, ileti\u015fim ve ger\u00e7ek s\u00fcre\u00e7leri ortak bir teknolojik mimaride birle\u015ftirir.","ZAL\u2019THERA conecta identidad, contexto, inteligencia artificial, datos, confianza, comunicaci\u00f3n y procesos reales dentro de una arquitectura tecnol\u00f3gica com\u00fan.","ZAL\u2019THERA relie identit\u00e9, contexte, intelligence artificielle, donn\u00e9es, confiance, communication et processus r\u00e9els dans une architecture technologique commune.","ZAL\u2019THERA collega identit\u00e0, contesto, intelligenza artificiale, dati, fiducia, comunicazione e processi reali in un\u2019unica architettura tecnologica.","ZAL\u2019THERA conecteaz\u0103 identitatea, contextul, inteligen\u021ba artificial\u0103, datele, \u00eencrederea, comunicarea \u0219i procesele reale \u00eentr-o arhitectur\u0103 tehnologic\u0103 comun\u0103.","ZAL\u2019THERA \u5c06\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u4eba\u5de5\u667a\u80fd\u3001\u6570\u636e\u3001\u4fe1\u4efb\u3001\u901a\u4fe1\u4e0e\u73b0\u5b9e\u6d41\u7a0b\u8fde\u63a5\u5728\u7edf\u4e00\u7684\u6280\u672f\u67b6\u6784\u4e2d\u3002"]],["home.hero.primary",["System entdecken","Discover the system","Sistemi ke\u015ffet","Descubrir el sistema","D\u00e9couvrir le syst\u00e8me","Scopri il sistema","Descoper\u0103 sistemul","\u63a2\u7d22\u7cfb\u7edf"]],["home.hero.core",["ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core","ZAL\u2019THERA Core"]],["home.state.label",["SYSTEMSTATUS","SYSTEM STATE","S\u0130STEM DURUMU","ESTADO DEL SISTEMA","\u00c9TAT DU SYST\u00c8ME","STATO DEL SISTEMA","STAREA SISTEMULUI","\u7cfb\u7edf\u72b6\u6001"]],["home.state.identity",["IDENTIT\u00c4T","IDENTITY","K\u0130ML\u0130K","IDENTIDAD","IDENTIT\u00c9","IDENTIT\u00c0","IDENTITATE","\u8eab\u4efd"]],["home.state.continuity",["CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY"]],["home.state.intelligence",["INTELLIGENCE","INTELLIGENCE","ZEK\u00c2","INTELIGENCIA","INTELLIGENCE","INTELLIGENZA","INTELIGEN\u021a\u0102","\u667a\u80fd"]],["home.state.communication",["COMMUNICATION","COMMUNICATION","\u0130LET\u0130\u015e\u0130M","COMUNICACI\u00d3N","COMMUNICATION","COMUNICAZIONE","COMUNICARE","\u901a\u4fe1"]],["home.state.industry",["INDUSTRY","INDUSTRY","END\u00dcSTR\u0130","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","\u5de5\u4e1a"]],["home.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVAD\u0102","\u8bc1\u660e"]],["home.state.core",["CORE","CORE","CORE","CORE","CORE","CORE","CORE","CORE"]],["home.state.active",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKT\u0130F GEL\u0130\u015eT\u0130RME","DESARROLLO ACTIVO","D\u00c9VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIV\u0102","\u79ef\u6781\u5f00\u53d1\u4e2d"]],["home.state.architecture",["ARCHITEKTUR","ARCHITECTURE","M\u0130MAR\u0130","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTUR\u0102","\u67b6\u6784"]],["home.state.module",["SYSTEMMODUL","SYSTEM MODULE","S\u0130STEM MOD\u00dcL\u00dc","M\u00d3DULO DEL SISTEMA","MODULE SYST\u00c8ME","MODULO DI SISTEMA","MODUL DE SISTEM","\u7cfb\u7edf\u6a21\u5757"]],["home.system.eyebrow",["EIN SYSTEM","ONE SYSTEM","TEK S\u0130STEM","UN SISTEMA","UN SYST\u00c8ME","UN SISTEMA","UN SISTEM","\u4e00\u4e2a\u7cfb\u7edf"]],["home.system.title",["Technologie beginnt nicht mit einer App.","Technology does not begin with an app.","Teknoloji bir uygulamayla ba\u015flamaz.","La tecnolog\u00eda no comienza con una app.","La technologie ne commence pas par une application.","La tecnologia non inizia con un\u2019app.","Tehnologia nu \u00eencepe cu o aplica\u021bie.","\u6280\u672f\u5e76\u4e0d\u662f\u4ece\u4e00\u4e2a\u5e94\u7528\u5f00\u59cb\u3002"]],["home.system.lead",["Sie beginnt mit einer gemeinsamen Logik daf\u00fcr, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tats\u00e4chlich ausgef\u00fchrt werden kann.","It begins with a shared logic for who acts, what is understood, who may be trusted and which action may actually be executed.","Kimin hareket etti\u011fi, neyin anla\u015f\u0131ld\u0131\u011f\u0131, kime g\u00fcvenilebilece\u011fi ve hangi eylemin ger\u00e7ekten y\u00fcr\u00fct\u00fclebilece\u011fine dair ortak bir mant\u0131kla ba\u015flar.","Comienza con una l\u00f3gica com\u00fan sobre qui\u00e9n act\u00faa, qu\u00e9 se comprende, en qui\u00e9n se puede confiar y qu\u00e9 acci\u00f3n puede ejecutarse realmente.","Elle commence par une logique commune : qui agit, ce qui est compris, \u00e0 qui faire confiance et quelle action peut r\u00e9ellement \u00eatre ex\u00e9cut\u00e9e.","Inizia con una logica comune su chi agisce, cosa viene compreso, di chi ci si pu\u00f2 fidare e quale azione pu\u00f2 essere realmente eseguita.","\u00cencepe cu o logic\u0103 comun\u0103 privind cine ac\u021bioneaz\u0103, ce este \u00een\u021beles, \u00een cine se poate avea \u00eencredere \u0219i ce ac\u021biune poate fi executat\u0103.","\u5b83\u59cb\u4e8e\u4e00\u5957\u5171\u540c\u903b\u8f91\uff1a\u8c01\u5728\u884c\u52a8\u3001\u7406\u89e3\u4e86\u4ec0\u4e48\u3001\u53ef\u4ee5\u4fe1\u4efb\u8c01\uff0c\u4ee5\u53ca\u4ec0\u4e48\u64cd\u4f5c\u771f\u6b63\u53ef\u4ee5\u6267\u884c\u3002"]],["home.system.identity.title",["Identit\u00e4t","Identity","Kimlik","Identidad","Identit\u00e9","Identit\u00e0","Identitate","\u8eab\u4efd"]],["home.system.identity.text",["Wer oder welches autorisierte System handelt?","Who or which authorized system is acting?","Kim veya hangi yetkili sistem hareket ediyor?","\u00bfQui\u00e9n o qu\u00e9 sistema autorizado est\u00e1 actuando?","Qui ou quel syst\u00e8me autoris\u00e9 agit ?","Chi o quale sistema autorizzato sta agendo?","Cine sau ce sistem autorizat ac\u021bioneaz\u0103?","\u8c01\u6216\u54ea\u4e2a\u5df2\u6388\u6743\u7cfb\u7edf\u6b63\u5728\u884c\u52a8\uff1f"]],["home.system.context.title",["Kontext","Context","Ba\u011flam","Contexto","Contexte","Contesto","Context","\u4e0a\u4e0b\u6587"]],["home.system.context.text",["In welchem Zusammenhang existieren Information und Handlung?","In what context do information and action exist?","Bilgi ve eylem hangi ba\u011flamda var?","\u00bfEn qu\u00e9 contexto existen la informaci\u00f3n y la acci\u00f3n?","Dans quel contexte existent l\u2019information et l\u2019action ?","In quale contesto esistono informazione e azione?","\u00cen ce context exist\u0103 informa\u021bia \u0219i ac\u021biunea?","\u4fe1\u606f\u4e0e\u884c\u52a8\u5b58\u5728\u4e8e\u4ec0\u4e48\u4e0a\u4e0b\u6587\u4e2d\uff1f"]],["home.system.intelligence.title",["Intelligenz","Intelligence","Zek\u00e2","Inteligencia","Intelligence","Intelligenza","Inteligen\u021b\u0103","\u667a\u80fd"]],["home.system.intelligence.text",["Was l\u00e4sst sich aus dem vorhandenen Kontext verstehen?","What can be understood from the available context?","Mevcut ba\u011flamdan ne anla\u015f\u0131labilir?","\u00bfQu\u00e9 puede comprenderse a partir del contexto disponible?","Que peut-on comprendre \u00e0 partir du contexte disponible ?","Cosa si pu\u00f2 comprendere dal contesto disponibile?","Ce poate fi \u00een\u021beles din contextul disponibil?","\u4ece\u73b0\u6709\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u7406\u89e3\u4ec0\u4e48\uff1f"]],["home.system.trust.title",["Vertrauen","Trust","G\u00fcven","Confianza","Confiance","Fiducia","\u00cencredere","\u4fe1\u4efb"]],["home.system.trust.text",["Was ist erlaubt, belegbar und \u00fcberpr\u00fcfbar?","What is permitted, verifiable and accountable?","Neye izin veriliyor, ne kan\u0131tlanabilir ve do\u011frulanabilir?","\u00bfQu\u00e9 est\u00e1 permitido, puede probarse y verificarse?","Qu\u2019est-ce qui est autoris\u00e9, prouvable et v\u00e9rifiable ?","Cosa \u00e8 consentito, dimostrabile e verificabile?","Ce este permis, demonstrabil \u0219i verificabil?","\u4ec0\u4e48\u662f\u88ab\u5141\u8bb8\u3001\u53ef\u8bc1\u660e\u5e76\u53ef\u9a8c\u8bc1\u7684\uff1f"]],["home.system.action.title",["Aktion","Action","Eylem","Acci\u00f3n","Action","Azione","Ac\u021biune","\u64cd\u4f5c"]],["home.system.action.text",["Was darf tats\u00e4chlich ausgef\u00fchrt werden?","What may actually be executed?","Ger\u00e7ekte ne y\u00fcr\u00fct\u00fclebilir?","\u00bfQu\u00e9 puede ejecutarse realmente?","Qu\u2019est-ce qui peut r\u00e9ellement \u00eatre ex\u00e9cut\u00e9 ?","Cosa pu\u00f2 essere realmente eseguito?","Ce poate fi executat efectiv?","\u4ec0\u4e48\u64cd\u4f5c\u771f\u6b63\u53ef\u4ee5\u6267\u884c\uff1f"]],["home.system.principle",["KERNPRINZIP","CORE PRINCIPLE","TEMEL \u0130LKE","PRINCIPIO CENTRAL","PRINCIPE CENTRAL","PRINCIPIO CENTRALE","PRINCIPIU CENTRAL","\u6838\u5fc3\u539f\u5219"]],["home.system.principleText",["Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.","Understand first. Prepare second. Act only with permission.","\u00d6nce anla. Sonra haz\u0131rla. Yaln\u0131zca izinle hareket et.","Primero comprender. Despu\u00e9s preparar. Actuar solo con permiso.","Comprendre d\u2019abord. Pr\u00e9parer ensuite. Agir uniquement avec autorisation.","Prima comprendere. Poi preparare. Agire solo con autorizzazione.","Mai \u00eent\u00e2i \u00een\u021belege. Apoi preg\u0103te\u0219te. Ac\u021bioneaz\u0103 numai cu permisiune.","\u5148\u7406\u89e3\u3002\u518d\u51c6\u5907\u3002\u53ea\u6709\u83b7\u5f97\u8bb8\u53ef\u540e\u624d\u884c\u52a8\u3002"]],["home.system.openArchitecture",["Architektur \u00f6ffnen","Open architecture","Mimariyi a\u00e7","Abrir arquitectura","Ouvrir l\u2019architecture","Apri architettura","Deschide arhitectura","\u6253\u5f00\u67b6\u6784"]],["home.continuity.eyebrow",["PERS\u00d6NLICHES SOUVER\u00c4NES SYSTEM","PERSONAL SOVEREIGN SYSTEM","K\u0130\u015e\u0130SEL EGEMEN S\u0130STEM","SISTEMA PERSONAL SOBERANO","SYST\u00c8ME PERSONNEL SOUVERAIN","SISTEMA PERSONALE SOVRANO","SISTEM PERSONAL SUVERAN","\u4e2a\u4eba\u4e3b\u6743\u7cfb\u7edf"]],["home.continuity.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKT\u0130F GEL\u0130\u015eT\u0130RME","DESARROLLO ACTIVO","D\u00c9VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIV\u0102","\u79ef\u6781\u5f00\u53d1\u4e2d"]],["home.continuity.tagline",["Dein Lebenskontext. Strukturiert. Verbunden. Verst\u00e4ndlich.","Your life context. Structured. Connected. Understandable.","Ya\u015fam ba\u011flam\u0131n. Yap\u0131land\u0131r\u0131lm\u0131\u015f. Ba\u011flant\u0131l\u0131. Anla\u015f\u0131l\u0131r.","El contexto de tu vida. Estructurado. Conectado. Comprensible.","Le contexte de votre vie. Structur\u00e9. Connect\u00e9. Compr\u00e9hensible.","Il contesto della tua vita. Strutturato. Connesso. Comprensibile.","Contextul vie\u021bii tale. Structurat. Conectat. U\u0219or de \u00een\u021beles.","\u4f60\u7684\u751f\u6d3b\u4e0a\u4e0b\u6587\u3002\u7ed3\u6784\u5316\u3002\u8fde\u63a5\u3002\u53ef\u7406\u89e3\u3002"]],["home.continuity.text1",["CONTINUITY verbindet pers\u00f6nliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souver\u00e4nen pers\u00f6nlichen Umgebung.","CONTINUITY connects personal documents, data, Cards, Timeline, finances, evidence and context within a sovereign personal environment.","CONTINUITY; ki\u015fisel belgeleri, verileri, Cards, Timeline, finans, kan\u0131t ve ba\u011flam\u0131 egemen bir ki\u015fisel ortamda birle\u015ftirir.","CONTINUITY conecta documentos personales, datos, Cards, Timeline, finanzas, pruebas y contexto en un entorno personal soberano.","CONTINUITY relie documents personnels, donn\u00e9es, Cards, Timeline, finances, preuves et contexte dans un environnement personnel souverain.","CONTINUITY collega documenti personali, dati, Cards, Timeline, finanze, prove e contesto in un ambiente personale sovrano.","CONTINUITY conecteaz\u0103 documente personale, date, Cards, Timeline, finan\u021be, dovezi \u0219i context \u00eentr-un mediu personal suveran.","CONTINUITY \u5c06\u4e2a\u4eba\u6587\u6863\u3001\u6570\u636e\u3001Cards\u3001Timeline\u3001\u8d22\u52a1\u3001\u8bc1\u660e\u4e0e\u4e0a\u4e0b\u6587\u8fde\u63a5\u5728\u4e00\u4e2a\u4e2a\u4eba\u4e3b\u6743\u73af\u5883\u4e2d\u3002"]],["home.continuity.text2",["Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im pers\u00f6nlichen System.","Information does not remain as isolated files. It receives context, provenance, temporal reference and a traceable position within the personal system.","Bilgiler yal\u0131t\u0131lm\u0131\u015f dosyalar olarak kalmaz. Ba\u011flam, kaynak, zaman ili\u015fkisi ve ki\u015fisel sistem i\u00e7inde izlenebilir bir konum kazan\u0131r.","La informaci\u00f3n no queda como archivos aislados. Recibe contexto, procedencia, referencia temporal y una posici\u00f3n trazable dentro del sistema personal.","Les informations ne restent pas des fichiers isol\u00e9s. Elles re\u00e7oivent un contexte, une provenance, un rep\u00e8re temporel et une position tra\u00e7able dans le syst\u00e8me personnel.","Le informazioni non restano file isolati. Ricevono contesto, provenienza, riferimento temporale e una posizione tracciabile nel sistema personale.","Informa\u021biile nu r\u0103m\u00e2n fi\u0219iere izolate. Primesc context, provenien\u021b\u0103, referin\u021b\u0103 temporal\u0103 \u0219i o pozi\u021bie trasabil\u0103 \u00een sistemul personal.","\u4fe1\u606f\u4e0d\u4f1a\u505c\u7559\u4e3a\u5b64\u7acb\u6587\u4ef6\uff0c\u800c\u4f1a\u83b7\u5f97\u4e0a\u4e0b\u6587\u3001\u6765\u6e90\u3001\u65f6\u95f4\u5173\u8054\u4ee5\u53ca\u5728\u4e2a\u4eba\u7cfb\u7edf\u4e2d\u7684\u53ef\u8ffd\u6eaf\u4f4d\u7f6e\u3002"]],["home.continuity.documents",["Dokumente","Documents","Belgeler","Documentos","Documents","Documenti","Documente","\u6587\u6863"]],["home.continuity.cards",["Cards","Cards","Cards","Cards","Cards","Cards","Cards","Cards"]],["home.continuity.timeline",["Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline"]],["home.continuity.finance",["Finanzen","Finance","Finans","Finanzas","Finances","Finanze","Finan\u021be","\u8d22\u52a1"]],["home.continuity.context",["Kontext","Context","Ba\u011flam","Contexto","Contexte","Contesto","Context","\u4e0a\u4e0b\u6587"]],["home.continuity.audit",["Audit","Audit","Denetim","Auditor\u00eda","Audit","Audit","Audit","\u5ba1\u8ba1"]],["home.intelligence.eyebrow",["KONTEXTUELLE INTELLIGENZ","CONTEXTUAL INTELLIGENCE","BA\u011eLAMSAL ZEK\u00c2","INTELIGENCIA CONTEXTUAL","INTELLIGENCE CONTEXTUELLE","INTELLIGENZA CONTESTUALE","INTELIGEN\u021a\u0102 CONTEXTUAL\u0102","\u4e0a\u4e0b\u6587\u667a\u80fd"]],["home.intelligence.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKT\u0130F GEL\u0130\u015eT\u0130RME","DESARROLLO ACTIVO","D\u00c9VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIV\u0102","\u79ef\u6781\u5f00\u53d1\u4e2d"]],["home.intelligence.title",["ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence","ZAL\u2019THERA Intelligence"]],["home.intelligence.tagline",["Intelligenz, die ihre Grenzen kennt.","Intelligence that knows its limits.","S\u0131n\u0131rlar\u0131n\u0131 bilen zek\u00e2.","Inteligencia que conoce sus l\u00edmites.","Une intelligence qui conna\u00eet ses limites.","Intelligenza che conosce i propri limiti.","Inteligen\u021b\u0103 care \u00ee\u0219i cunoa\u0219te limitele.","\u77e5\u9053\u81ea\u8eab\u8fb9\u754c\u7684\u667a\u80fd\u3002"]],["home.intelligence.text1",["Die Intelligenzschicht arbeitet nicht losgel\u00f6st vom Menschen. Sie versteht verf\u00fcgbaren Kontext, erkennt Zusammenh\u00e4nge, erkl\u00e4rt Informationen und bereitet m\u00f6gliche Aktionen vor.","The intelligence layer does not operate independently of the human. It understands available context, identifies relationships, explains information and prepares possible actions.","Zek\u00e2 katman\u0131 insandan ba\u011f\u0131ms\u0131z \u00e7al\u0131\u015fmaz. Mevcut ba\u011flam\u0131 anlar, ili\u015fkileri fark eder, bilgiyi a\u00e7\u0131klar ve olas\u0131 eylemleri haz\u0131rlar.","La capa de inteligencia no funciona separada de la persona. Comprende el contexto disponible, identifica relaciones, explica informaci\u00f3n y prepara posibles acciones.","La couche d\u2019intelligence n\u2019agit pas ind\u00e9pendamment de l\u2019humain. Elle comprend le contexte disponible, identifie les relations, explique l\u2019information et pr\u00e9pare des actions possibles.","Il livello di intelligenza non opera separato dalla persona. Comprende il contesto disponibile, riconosce relazioni, spiega informazioni e prepara possibili azioni.","Stratul de inteligen\u021b\u0103 nu func\u021bioneaz\u0103 separat de om. \u00cen\u021belege contextul disponibil, identific\u0103 rela\u021bii, explic\u0103 informa\u021bii \u0219i preg\u0103te\u0219te ac\u021biuni posibile.","\u667a\u80fd\u5c42\u5e76\u4e0d\u8131\u79bb\u4eba\u72ec\u7acb\u8fd0\u884c\u3002\u5b83\u7406\u89e3\u53ef\u7528\u4e0a\u4e0b\u6587\u3001\u8bc6\u522b\u5173\u8054\u3001\u89e3\u91ca\u4fe1\u606f\u5e76\u51c6\u5907\u53ef\u80fd\u7684\u64cd\u4f5c\u3002"]],["home.intelligence.text2",["Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.","Consequential actions remain bound to authorization, context and human approval.","Sonu\u00e7 do\u011furan eylemler yetki, ba\u011flam ve insan onay\u0131na ba\u011fl\u0131 kal\u0131r.","Las acciones con consecuencias permanecen vinculadas a autorizaci\u00f3n, contexto y aprobaci\u00f3n humana.","Les actions \u00e0 cons\u00e9quence restent li\u00e9es \u00e0 l\u2019autorisation, au contexte et \u00e0 l\u2019approbation humaine.","Le azioni con conseguenze restano vincolate ad autorizzazione, contesto e approvazione umana.","Ac\u021biunile cu consecin\u021be r\u0103m\u00e2n legate de autorizare, context \u0219i aprobarea uman\u0103.","\u4f1a\u4ea7\u751f\u540e\u679c\u7684\u64cd\u4f5c\u4ecd\u53d7\u6743\u9650\u3001\u4e0a\u4e0b\u6587\u4e0e\u4eba\u5de5\u6388\u6743\u7ea6\u675f\u3002"]],["home.communication.eyebrow",["IDENTIT\u00c4T-ZU-IDENTIT\u00c4T","IDENTITY-TO-IDENTITY","K\u0130ML\u0130KTEN K\u0130ML\u0130\u011eE","IDENTIDAD A IDENTIDAD","IDENTIT\u00c9 \u00c0 IDENTIT\u00c9","IDENTIT\u00c0 A IDENTIT\u00c0","IDENTITATE LA IDENTITATE","\u8eab\u4efd\u5230\u8eab\u4efd"]],["home.communication.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKT\u0130F GEL\u0130\u015eT\u0130RME","DESARROLLO ACTIVO","D\u00c9VELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIV\u0102","\u79ef\u6781\u5f00\u53d1\u4e2d"]],["home.communication.title",["Communication","Communication","\u0130leti\u015fim","Comunicaci\u00f3n","Communication","Comunicazione","Comunicare","\u901a\u4fe1"]],["home.communication.tagline",["Verbindung beginnt mit Identit\u00e4t und Zustimmung.","Connection begins with identity and consent.","Ba\u011flant\u0131 kimlik ve onayla ba\u015flar.","La conexi\u00f3n comienza con identidad y consentimiento.","La connexion commence par l\u2019identit\u00e9 et le consentement.","La connessione inizia con identit\u00e0 e consenso.","Conexiunea \u00eencepe cu identitate \u0219i consim\u021b\u0103m\u00e2nt.","\u8fde\u63a5\u59cb\u4e8e\u8eab\u4efd\u4e0e\u540c\u610f\u3002"]],["home.communication.text1",["ZAL\u2019THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten Identit\u00e4ten.","ZAL\u2019THERA Communication is developing a secure communication layer between authorized identities.","ZAL\u2019THERA Communication, yetkili kimlikler aras\u0131nda g\u00fcvenli bir ileti\u015fim katman\u0131 geli\u015ftirir.","ZAL\u2019THERA Communication desarrolla una capa de comunicaci\u00f3n segura entre identidades autorizadas.","ZAL\u2019THERA Communication d\u00e9veloppe une couche de communication s\u00e9curis\u00e9e entre identit\u00e9s autoris\u00e9es.","ZAL\u2019THERA Communication sviluppa un livello di comunicazione sicuro tra identit\u00e0 autorizzate.","ZAL\u2019THERA Communication dezvolt\u0103 un strat sigur de comunicare \u00eentre identit\u0103\u021bi autorizate.","ZAL\u2019THERA Communication \u6b63\u5728\u6784\u5efa\u5df2\u6388\u6743\u8eab\u4efd\u4e4b\u95f4\u7684\u5b89\u5168\u901a\u4fe1\u5c42\u3002"]],["home.communication.text2",["Sprache, sp\u00e4ter Video, Dateien und vertrauensbasierte Zustellung werden nicht \u00fcber \u00f6ffentliche Profile definiert, sondern \u00fcber Identit\u00e4t, Beziehung und Berechtigung.","Voice, later video, files and trusted delivery are defined not through public profiles, but through identity, relationship and authorization.","Ses, daha sonra video, dosyalar ve g\u00fcvene dayal\u0131 teslimat; herkese a\u00e7\u0131k profillerle de\u011fil kimlik, ili\u015fki ve yetkiyle tan\u0131mlan\u0131r.","La voz, m\u00e1s adelante el v\u00eddeo, los archivos y la entrega de confianza no se definen mediante perfiles p\u00fablicos, sino mediante identidad, relaci\u00f3n y autorizaci\u00f3n.","La voix, puis la vid\u00e9o, les fichiers et la livraison de confiance ne sont pas d\u00e9finis par des profils publics, mais par l\u2019identit\u00e9, la relation et l\u2019autorisation.","Voce, in seguito video, file e consegna basata sulla fiducia non sono definiti tramite profili pubblici, ma tramite identit\u00e0, relazione e autorizzazione.","Vocea, ulterior video, fi\u0219ierele \u0219i livrarea bazat\u0103 pe \u00eencredere nu sunt definite prin profiluri publice, ci prin identitate, rela\u021bie \u0219i autorizare.","\u8bed\u97f3\u3001\u540e\u7eed\u7684\u89c6\u9891\u3001\u6587\u4ef6\u4e0e\u53ef\u4fe1\u6295\u9012\u4e0d\u7531\u516c\u5f00\u8d44\u6599\u5b9a\u4e49\uff0c\u800c\u7531\u8eab\u4efd\u3001\u5173\u7cfb\u4e0e\u6388\u6743\u5b9a\u4e49\u3002"]],["home.communication.voice",["SPRACHE","VOICE","SES","VOZ","VOIX","VOCE","VOCE","\u8bed\u97f3"]],["home.communication.video",["VIDEO","VIDEO","V\u0130DEO","V\u00cdDEO","VID\u00c9O","VIDEO","VIDEO","\u89c6\u9891"]],["home.communication.files",["DATEIEN","FILES","DOSYALAR","ARCHIVOS","FICHIERS","FILE","FI\u0218IERE","\u6587\u4ef6"]],["home.communication.trust",["VERTRAUEN","TRUST","G\u00dcVEN","CONFIANZA","CONFIANCE","FIDUCIA","\u00ceNCREDERE","\u4fe1\u4efb"]],["home.communication.consent",["ZUSTIMMUNG","CONSENT","ONAY","CONSENTIMIENTO","CONSENTEMENT","CONSENSO","CONSIM\u021a\u0102M\u00c2NT","\u540c\u610f"]],["home.communication.connectionRule",["ZUSTIMMUNG VOR VERBINDUNG","CONSENT BEFORE CONNECTION","BA\u011eLANTIDAN \u00d6NCE ONAY","CONSENTIMIENTO ANTES DE LA CONEXI\u00d3N","CONSENTEMENT AVANT CONNEXION","CONSENSO PRIMA DELLA CONNESSIONE","CONSIM\u021a\u0102M\u00c2NT \u00ceNAINTE DE CONECTARE","\u8fde\u63a5\u524d\u5148\u83b7\u5f97\u540c\u610f"]],["home.industry.eyebrow",["REALE SYSTEME","REAL-WORLD SYSTEMS","GER\u00c7EK D\u00dcNYA S\u0130STEMLER\u0130","SISTEMAS DEL MUNDO REAL","SYST\u00c8MES DU MONDE R\u00c9EL","SISTEMI DEL MONDO REALE","SISTEME DIN LUMEA REAL\u0102","\u73b0\u5b9e\u4e16\u754c\u7cfb\u7edf"]],["home.industry.status",["ENTWICKLUNG & ARCHITEKTUR","DEVELOPMENT & ARCHITECTURE","GEL\u0130\u015eT\u0130RME & M\u0130MAR\u0130","DESARROLLO & ARQUITECTURA","D\u00c9VELOPPEMENT & ARCHITECTURE","SVILUPPO & ARCHITETTURA","DEZVOLTARE & ARHITECTUR\u0102","\u5f00\u53d1\u4e0e\u67b6\u6784"]],["home.industry.title",["ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry","ZAL\u2019THERA Industry"]],["home.industry.tagline",["Reale Prozesse werden zu verst\u00e4ndlichen Systemen.","Real processes become understandable systems.","Ger\u00e7ek s\u00fcre\u00e7ler anla\u015f\u0131l\u0131r sistemlere d\u00f6n\u00fc\u015f\u00fcr.","Los procesos reales se convierten en sistemas comprensibles.","Les processus r\u00e9els deviennent des syst\u00e8mes compr\u00e9hensibles.","I processi reali diventano sistemi comprensibili.","Procesele reale devin sisteme u\u0219or de \u00een\u021beles.","\u73b0\u5b9e\u6d41\u7a0b\u8f6c\u5316\u4e3a\u53ef\u7406\u89e3\u7684\u7cfb\u7edf\u3002"]],["home.industry.text",["Die industrielle Schicht verbindet operative \u00dcbergaben, Prozesszust\u00e4nde, Sensordaten, Messwerte und zuk\u00fcnftige Maschinenanbindungen.","The industrial layer connects operational handovers, process states, sensor data, measurements and future machine integrations.","End\u00fcstriyel katman; operasyonel devirleri, s\u00fcre\u00e7 durumlar\u0131n\u0131, sens\u00f6r verilerini, \u00f6l\u00e7\u00fcmleri ve gelecekteki makine entegrasyonlar\u0131n\u0131 ba\u011flar.","La capa industrial conecta relevos operativos, estados de proceso, datos de sensores, mediciones y futuras integraciones de m\u00e1quinas.","La couche industrielle relie transmissions op\u00e9rationnelles, \u00e9tats de processus, donn\u00e9es de capteurs, mesures et futures int\u00e9grations de machines.","Il livello industriale collega passaggi operativi, stati di processo, dati sensore, misurazioni e future integrazioni macchina.","Stratul industrial conecteaz\u0103 pred\u0103ri opera\u021bionale, st\u0103ri de proces, date de senzori, m\u0103sur\u0103tori \u0219i viitoare integr\u0103ri de utilaje.","\u5de5\u4e1a\u5c42\u8fde\u63a5\u64cd\u4f5c\u4ea4\u63a5\u3001\u6d41\u7a0b\u72b6\u6001\u3001\u4f20\u611f\u5668\u6570\u636e\u3001\u6d4b\u91cf\u503c\u4e0e\u672a\u6765\u7684\u673a\u5668\u96c6\u6210\u3002"]],["home.industry.shift",["Schicht\u00fcbergabe & operative Zust\u00e4nde","Shift handover & operational states","Vardiya devri & operasyonel durumlar","Relevo de turno & estados operativos","Transmission de poste & \u00e9tats op\u00e9rationnels","Passaggio turno & stati operativi","Predare schimb & st\u0103ri opera\u021bionale","\u73ed\u6b21\u4ea4\u63a5\u4e0e\u8fd0\u884c\u72b6\u6001"]],["home.industry.gate",["Sensorik, Messwerte & Maschinenprozesse","Sensors, measurements & machine processes","Sens\u00f6rler, \u00f6l\u00e7\u00fcmler & makine s\u00fcre\u00e7leri","Sensores, mediciones & procesos de m\u00e1quina","Capteurs, mesures & processus machine","Sensori, misurazioni & processi macchina","Senzori, m\u0103sur\u0103tori & procese de utilaje","\u4f20\u611f\u5668\u3001\u6d4b\u91cf\u503c\u4e0e\u673a\u5668\u6d41\u7a0b"]],["home.industry.process",["Analyse & nachvollziehbare Prozesszust\u00e4nde","Analysis & traceable process states","Analiz & izlenebilir s\u00fcre\u00e7 durumlar\u0131","An\u00e1lisis & estados de proceso trazables","Analyse & \u00e9tats de processus tra\u00e7ables","Analisi & stati di processo tracciabili","Analiz\u0103 & st\u0103ri de proces trasabile","\u5206\u6790\u4e0e\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u72b6\u6001"]],["home.proof.eyebrow",["NACHWEIS & VERTRAUEN","PROOF & TRUST","KANIT & G\u00dcVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVAD\u0102 & \u00ceNCREDERE","\u8bc1\u660e\u4e0e\u4fe1\u4efb"]],["home.proof.title",["Nachweis vor Annahme.","Evidence before assumption.","Varsay\u0131mdan \u00f6nce kan\u0131t.","Prueba antes que suposici\u00f3n.","La preuve avant l\u2019hypoth\u00e8se.","La prova prima dell\u2019ipotesi.","Dovada \u00eenaintea presupunerii.","\u5148\u6709\u8bc1\u636e\uff0c\u518d\u4f5c\u5224\u65ad\u3002"]],["home.proof.text",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow; g\u00f6revleri, kan\u0131tlar\u0131, foto\u011fraflar\u0131, notlar\u0131, imzalar\u0131, denetimi ve d\u0131\u015fa aktarmay\u0131 izlenebilir bir ak\u0131\u015fta birle\u015ftirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditor\u00eda y exportaci\u00f3n en un flujo trazable.","ProofFlow relie t\u00e2ches, preuves, photos, notes, signatures, audit et export dans un flux tra\u00e7able.","ProofFlow collega attivit\u00e0, prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conecteaz\u0103 sarcini, dovezi, fotografii, note, semn\u0103turi, audit \u0219i export \u00eentr-un flux trasabil.","ProofFlow \u5c06\u4efb\u52a1\u3001\u8bc1\u660e\u3001\u7167\u7247\u3001\u5907\u6ce8\u3001\u7b7e\u540d\u3001\u5ba1\u8ba1\u4e0e\u5bfc\u51fa\u8fde\u63a5\u6210\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u3002"]],["home.proof.open",["ProofFlow \u00f6ffnen","Open ProofFlow","ProofFlow\u2019u a\u00e7","Abrir ProofFlow","Ouvrir ProofFlow","Apri ProofFlow","Deschide ProofFlow","\u6253\u5f00 ProofFlow"]],["home.products.eyebrow",["SYSTEMPORTFOLIO","SYSTEM PORTFOLIO","S\u0130STEM PORTF\u00d6Y\u00dc","PORTAFOLIO DEL SISTEMA","PORTEFEUILLE SYST\u00c8ME","PORTAFOGLIO SISTEMA","PORTOFOLIU DE SISTEM","\u7cfb\u7edf\u7ec4\u5408"]],["home.products.title",["Ein \u00d6kosystem. Unterschiedliche Reifegrade.","One ecosystem. Different levels of maturity.","Tek ekosistem. Farkl\u0131 olgunluk d\u00fczeyleri.","Un ecosistema. Distintos niveles de madurez.","Un \u00e9cosyst\u00e8me. Diff\u00e9rents niveaux de maturit\u00e9.","Un ecosistema. Diversi livelli di maturit\u00e0.","Un ecosistem. Niveluri diferite de maturitate.","\u4e00\u4e2a\u751f\u6001\u7cfb\u7edf\u3002\u4e0d\u540c\u6210\u719f\u5ea6\u3002"]],["home.products.lead",["ZAL\u2019THERA trennt klar zwischen verf\u00fcgbaren Produkten, aktiver Entwicklung, Systemmodulen und zuk\u00fcnftiger Architektur.","ZAL\u2019THERA clearly distinguishes between available products, active development, system modules and future architecture.","ZAL\u2019THERA; mevcut \u00fcr\u00fcnleri, aktif geli\u015ftirmeyi, sistem mod\u00fcllerini ve gelecekteki mimariyi a\u00e7\u0131k\u00e7a ay\u0131r\u0131r.","ZAL\u2019THERA distingue claramente entre productos disponibles, desarrollo activo, m\u00f3dulos del sistema y arquitectura futura.","ZAL\u2019THERA distingue clairement les produits disponibles, le d\u00e9veloppement actif, les modules syst\u00e8me et l\u2019architecture future.","ZAL\u2019THERA distingue chiaramente tra prodotti disponibili, sviluppo attivo, moduli di sistema e architettura futura.","ZAL\u2019THERA separ\u0103 clar produsele disponibile, dezvoltarea activ\u0103, modulele de sistem \u0219i arhitectura viitoare.","ZAL\u2019THERA \u660e\u786e\u533a\u5206\u5df2\u53d1\u5e03\u4ea7\u54c1\u3001\u79ef\u6781\u5f00\u53d1\u3001\u7cfb\u7edf\u6a21\u5757\u4e0e\u672a\u6765\u67b6\u6784\u3002"]],["home.products.lifeflow",["Kosten, Vertr\u00e4ge, Fristen und pers\u00f6nliche Finanz\u00fcbersicht.","Costs, contracts, deadlines and personal financial overview.","Maliyetler, s\u00f6zle\u015fmeler, s\u00fcreler ve ki\u015fisel finans g\u00f6r\u00fcn\u00fcm\u00fc.","Costes, contratos, plazos y visi\u00f3n financiera personal.","Co\u00fbts, contrats, \u00e9ch\u00e9ances et vue financi\u00e8re personnelle.","Costi, contratti, scadenze e panoramica finanziaria personale.","Costuri, contracte, termene \u0219i vedere financiar\u0103 personal\u0103.","\u6210\u672c\u3001\u5408\u540c\u3001\u671f\u9650\u4e0e\u4e2a\u4eba\u8d22\u52a1\u6982\u89c8\u3002"]],["home.products.continuity",["Pers\u00f6nliche souver\u00e4ne Umgebung f\u00fcr Dokumente, Daten, Kontext und Intelligenz.","A personal sovereign environment for documents, data, context and intelligence.","Belgeler, veriler, ba\u011flam ve zek\u00e2 i\u00e7in ki\u015fisel egemen ortam.","Un entorno personal soberano para documentos, datos, contexto e inteligencia.","Un environnement personnel souverain pour documents, donn\u00e9es, contexte et intelligence.","Un ambiente personale sovrano per documenti, dati, contesto e intelligenza.","Un mediu personal suveran pentru documente, date, context \u0219i inteligen\u021b\u0103.","\u9762\u5411\u6587\u6863\u3001\u6570\u636e\u3001\u4e0a\u4e0b\u6587\u4e0e\u667a\u80fd\u7684\u4e2a\u4eba\u4e3b\u6743\u73af\u5883\u3002"]],["home.products.proofflow",["Nachweise, Audit, Signatur und \u00fcberpr\u00fcfbare Abl\u00e4ufe.","Evidence, audit, signatures and verifiable workflows.","Kan\u0131t, denetim, imza ve do\u011frulanabilir i\u015f ak\u0131\u015flar\u0131.","Pruebas, auditor\u00eda, firmas y flujos verificables.","Preuves, audit, signatures et flux v\u00e9rifiables.","Prove, audit, firme e flussi verificabili.","Dovezi, audit, semn\u0103turi \u0219i fluxuri verificabile.","\u8bc1\u660e\u3001\u5ba1\u8ba1\u3001\u7b7e\u540d\u4e0e\u53ef\u9a8c\u8bc1\u6d41\u7a0b\u3002"]],["home.products.shiftlog",["Digitale Schicht\u00fcbergabe f\u00fcr operative Zust\u00e4nde und Verantwortlichkeiten.","Digital shift handover for operational states and responsibilities.","Operasyonel durumlar ve sorumluluklar i\u00e7in dijital vardiya devri.","Relevo digital de turno para estados operativos y responsabilidades.","Transmission num\u00e9rique de poste pour \u00e9tats op\u00e9rationnels et responsabilit\u00e9s.","Passaggio turno digitale per stati operativi e responsabilit\u00e0.","Predare digital\u0103 de schimb pentru st\u0103ri opera\u021bionale \u0219i responsabilit\u0103\u021bi.","\u9762\u5411\u8fd0\u884c\u72b6\u6001\u4e0e\u8d23\u4efb\u7684\u6570\u5b57\u73ed\u6b21\u4ea4\u63a5\u3002"]],["home.products.voicebridge",["Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten Identit\u00e4ten.","Development of a trust-based direct voice connection between authorized identities.","Yetkili kimlikler aras\u0131nda g\u00fcvene dayal\u0131 do\u011frudan ses ba\u011flant\u0131s\u0131 geli\u015ftirme.","Desarrollo de una conexi\u00f3n de voz directa basada en confianza entre identidades autorizadas.","D\u00e9veloppement d\u2019une connexion vocale directe fond\u00e9e sur la confiance entre identit\u00e9s autoris\u00e9es.","Sviluppo di una connessione vocale diretta basata sulla fiducia tra identit\u00e0 autorizzate.","Dezvoltarea unei conexiuni vocale directe bazate pe \u00eencredere \u00eentre identit\u0103\u021bi autorizate.","\u5f00\u53d1\u5df2\u6388\u6743\u8eab\u4efd\u4e4b\u95f4\u57fa\u4e8e\u4fe1\u4efb\u7684\u76f4\u63a5\u8bed\u97f3\u8fde\u63a5\u3002"]],["home.products.zalgate",["Architektur f\u00fcr die Verbindung von Sensorik, Messwerten, Maschinen und Prozesszust\u00e4nden.","Architecture connecting sensors, measurements, machines and process states.","Sens\u00f6rleri, \u00f6l\u00e7\u00fcmleri, makineleri ve s\u00fcre\u00e7 durumlar\u0131n\u0131 ba\u011flayan mimari.","Arquitectura que conecta sensores, mediciones, m\u00e1quinas y estados de proceso.","Architecture reliant capteurs, mesures, machines et \u00e9tats de processus.","Architettura che collega sensori, misurazioni, macchine e stati di processo.","Arhitectur\u0103 care conecteaz\u0103 senzori, m\u0103sur\u0103tori, utilaje \u0219i st\u0103ri de proces.","\u8fde\u63a5\u4f20\u611f\u5668\u3001\u6d4b\u91cf\u503c\u3001\u673a\u5668\u4e0e\u6d41\u7a0b\u72b6\u6001\u7684\u67b6\u6784\u3002"]],["home.products.open",["\u00d6ffnen \u2192","Open \u2192","A\u00e7 \u2192","Abrir \u2192","Ouvrir \u2192","Apri \u2192","Deschide \u2192","\u6253\u5f00 \u2192"]],["home.products.viewSystem",["System ansehen \u2192","View system \u2192","Sistemi g\u00f6r\u00fcnt\u00fcle \u2192","Ver sistema \u2192","Voir le syst\u00e8me \u2192","Vedi sistema \u2192","Vezi sistemul \u2192","\u67e5\u770b\u7cfb\u7edf \u2192"]],["home.products.viewDevelopment",["Entwicklung ansehen \u2192","View development \u2192","Geli\u015ftirmeyi g\u00f6r\u00fcnt\u00fcle \u2192","Ver desarrollo \u2192","Voir le d\u00e9veloppement \u2192","Vedi sviluppo \u2192","Vezi dezvoltarea \u2192","\u67e5\u770b\u5f00\u53d1 \u2192"]],["home.products.viewArchitecture",["Architektur \u2192","Architecture \u2192","Mimari \u2192","Arquitectura \u2192","Architecture \u2192","Architettura \u2192","Arhitectur\u0103 \u2192","\u67b6\u6784 \u2192"]],["home.pilot.eyebrow",["KONTROLLIERTER REALER EINSTIEG","CONTROLLED REAL-WORLD ENTRY","KONTROLL\u00dc GER\u00c7EK D\u00dcNYA G\u0130R\u0130\u015e\u0130","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTR\u00c9E CONTR\u00d4L\u00c9E DANS LE R\u00c9EL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLAT\u0102 \u00ceN LUMEA REAL\u0102","\u53d7\u63a7\u7684\u73b0\u5b9e\u4e16\u754c\u5207\u5165"]],["home.pilot.title",["ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot","ZAL\u2019THERA Pilot"]],["home.pilot.text",["Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tats\u00e4chlichen Nutzen pr\u00fcfen \u2013 ohne den bestehenden Betrieb sofort vollst\u00e4ndig zu ersetzen.","Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.","A\u00e7\u0131k\u00e7a s\u0131n\u0131rland\u0131r\u0131lm\u0131\u015f ger\u00e7ek bir s\u00fcreci anlay\u0131n, kontroll\u00fc test edin ve mevcut i\u015fletmeyi hemen tamamen de\u011fi\u015ftirmeden ger\u00e7ek fayday\u0131 do\u011frulay\u0131n.","Comprender un proceso real claramente delimitado, probarlo de forma controlada y verificar su valor sin sustituir de inmediato la operaci\u00f3n existente.","Comprendre un processus r\u00e9el clairement d\u00e9limit\u00e9, le tester de mani\u00e8re contr\u00f4l\u00e9e et v\u00e9rifier sa valeur sans remplacer imm\u00e9diatement l\u2019existant.","Comprendere un processo reale ben delimitato, testarlo in modo controllato e verificarne il valore senza sostituire subito l\u2019operativit\u00e0 esistente.","\u00cen\u021belege un proces real clar delimitat, testeaz\u0103-l controlat \u0219i verific\u0103 valoarea f\u0103r\u0103 a \u00eenlocui imediat opera\u021biunea existent\u0103.","\u7406\u89e3\u4e00\u4e2a\u8fb9\u754c\u6e05\u6670\u7684\u73b0\u5b9e\u6d41\u7a0b\uff0c\u4ee5\u53d7\u63a7\u65b9\u5f0f\u6d4b\u8bd5\u5e76\u9a8c\u8bc1\u5b9e\u9645\u4ef7\u503c\uff0c\u800c\u65e0\u9700\u7acb\u5373\u5168\u9762\u66ff\u6362\u73b0\u6709\u8fd0\u884c\u3002"]],["home.pilot.discover",["Pilot entdecken","Discover Pilot","Pilot\u2019u ke\u015ffet","Descubrir Pilot","D\u00e9couvrir Pilot","Scopri Pilot","Descoper\u0103 Pilot","\u63a2\u7d22 Pilot"]],["home.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicit\u0103 Pilot","\u7533\u8bf7 Pilot"]],["home.core.eyebrow",["UNTER JEDEM SYSTEM","BENEATH EVERY SYSTEM","HER S\u0130STEM\u0130N ALTINDA","DEBAJO DE CADA SISTEMA","SOUS CHAQUE SYST\u00c8ME","SOTTO OGNI SISTEMA","SUB FIECARE SISTEM","\u6bcf\u4e2a\u7cfb\u7edf\u4e4b\u4e0b"]],["home.core.title",["ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE"]],["home.core.text",["Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausf\u00fchrung bilden den technischen Kern hinter dem \u00d6kosystem.","Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.","Kimlik, Policy, Onay, Denetim, Ledger, G\u00fcven ve kontroll\u00fc y\u00fcr\u00fctme ekosistemin teknik \u00e7ekirde\u011fini olu\u015fturur.","Identity, Policy, Consent, Audit, Ledger, Trust y la ejecuci\u00f3n controlada forman el n\u00facleo t\u00e9cnico del ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust et l\u2019ex\u00e9cution contr\u00f4l\u00e9e forment le noyau technique de l\u2019\u00e9cosyst\u00e8me.","Identity, Policy, Consent, Audit, Ledger, Trust ed esecuzione controllata formano il nucleo tecnico dell\u2019ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust \u0219i execu\u021bia controlat\u0103 formeaz\u0103 nucleul tehnic al ecosistemului.","Identity\u3001Policy\u3001Consent\u3001Audit\u3001Ledger\u3001Trust \u4e0e\u53d7\u63a7\u6267\u884c\u6784\u6210\u751f\u6001\u7cfb\u7edf\u80cc\u540e\u7684\u6280\u672f\u6838\u5fc3\u3002"]],["home.core.discover",["Core entdecken","Discover Core","Core\u2019u ke\u015ffet","Descubrir Core","D\u00e9couvrir Core","Scopri Core","Descoper\u0103 Core","\u63a2\u7d22 Core"]],["home.contact.eyebrow",["KONTAKT","CONTACT","\u0130LET\u0130\u015e\u0130M","CONTACTO","CONTACT","CONTATTO","CONTACT","\u8054\u7cfb"]],["home.contact.title",["ZAL\u2019THERA kontaktieren","Contact ZAL\u2019THERA","ZAL\u2019THERA ile ileti\u015fime ge\u00e7","Contactar con ZAL\u2019THERA","Contacter ZAL\u2019THERA","Contatta ZAL\u2019THERA","Contacteaz\u0103 ZAL\u2019THERA","\u8054\u7cfb ZAL\u2019THERA"]],["home.contact.text",["Fragen zu ZAL\u2019THERA, einem System oder bestehenden Modulen?","Questions about ZAL\u2019THERA, a system or existing modules?","ZAL\u2019THERA, bir sistem veya mevcut mod\u00fcller hakk\u0131nda sorular\u0131n\u0131z m\u0131 var?","\u00bfPreguntas sobre ZAL\u2019THERA, un sistema o m\u00f3dulos existentes?","Des questions sur ZAL\u2019THERA, un syst\u00e8me ou des modules existants ?","Domande su ZAL\u2019THERA, un sistema o moduli esistenti?","\u00centreb\u0103ri despre ZAL\u2019THERA, un sistem sau module existente?","\u5bf9 ZAL\u2019THERA\u3001\u67d0\u4e2a\u7cfb\u7edf\u6216\u73b0\u6709\u6a21\u5757\u6709\u7591\u95ee\uff1f"]],["home.contact.name",["Name","Name","Ad","Nombre","Nom","Nome","Nume","\u59d3\u540d"]],["home.contact.namePlaceholder",["Dein Name","Your name","Ad\u0131n\u0131z","Tu nombre","Votre nom","Il tuo nome","Numele t\u0103u","\u4f60\u7684\u59d3\u540d"]],["home.contact.email",["E-Mail","Email","E-posta","Correo electr\u00f3nico","E-mail","E-mail","E-mail","\u7535\u5b50\u90ae\u4ef6"]],["home.contact.emailPlaceholder",["deine@email.de","your@email.com","eposta@ornek.com","tu@email.com","votre@email.com","tua@email.com","email@exemplu.ro","you@example.com"]],["home.contact.message",["Nachricht","Message","Mesaj","Mensaje","Message","Messaggio","Mesaj","\u6d88\u606f"]],["home.contact.messagePlaceholder",["Deine Nachricht \u2026","Your message \u2026","Mesaj\u0131n\u0131z \u2026","Tu mensaje \u2026","Votre message \u2026","Il tuo messaggio \u2026","Mesajul t\u0103u \u2026","\u4f60\u7684\u6d88\u606f\u2026"]],["home.contact.send",["Senden","Send","G\u00f6nder","Enviar","Envoyer","Invia","Trimite","\u53d1\u9001"]],["home.contact.privacyPrefix",["Mit dem Absenden akzeptierst du unsere","By submitting, you accept our","G\u00f6ndererek \u015funu kabul edersiniz:","Al enviar, aceptas nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accep\u021bi","\u63d0\u4ea4\u5373\u8868\u793a\u4f60\u63a5\u53d7\u6211\u4eec\u7684"]],["home.contact.privacy",["Datenschutzerkl\u00e4rung","Privacy Policy","Gizlilik Politikas\u0131","Pol\u00edtica de privacidad","Politique de confidentialit\u00e9","Informativa sulla privacy","Politica de confiden\u021bialitate","\u9690\u79c1\u653f\u7b56"]],["about.header.chip",["About","About","Hakk\u0131nda","Acerca de","\u00c0 propos","Chi siamo","Despre","\u5173\u4e8e"]],["about.hero.kicker",["WHY ZAL\u2019THERA EXISTS","WHY ZAL\u2019THERA EXISTS","ZAL\u2019THERA NEDEN VAR","POR QU\u00c9 EXISTE ZAL\u2019THERA","POURQUOI ZAL\u2019THERA EXISTE","PERCH\u00c9 ESISTE ZAL\u2019THERA","DE CE EXIST\u0102 ZAL\u2019THERA","ZAL\u2019THERA \u4e3a\u4f55\u5b58\u5728"]],["about.hero.product",["BUILT FROM FIRST PRINCIPLES","BUILT FROM FIRST PRINCIPLES","\u0130LK \u0130LKELERDEN \u0130N\u015eA ED\u0130LD\u0130","CONSTRUIDO DESDE PRIMEROS PRINCIPIOS","CONSTRUIT \u00c0 PARTIR DE PRINCIPES FONDAMENTAUX","COSTRUITO DAI PRINCIPI FONDAMENTALI","CONSTRUIT DIN PRINCIPII FUNDAMENTALE","\u4ece\u7b2c\u4e00\u6027\u539f\u7406\u6784\u5efa"]],["about.hero.title",["Technology should<br>understand responsibility.","Technology should<br>understand responsibility.","Teknoloji<br>sorumlulu\u011fu anlamal\u0131.","La tecnolog\u00eda deber\u00eda<br>comprender la responsabilidad.","La technologie devrait<br>comprendre la responsabilit\u00e9.","La tecnologia dovrebbe<br>comprendere la responsabilit\u00e0.","Tehnologia ar trebui<br>s\u0103 \u00een\u021beleag\u0103 responsabilitatea.","\u6280\u672f\u5e94\u8be5<br>\u7406\u89e3\u8d23\u4efb\u3002"]],["about.hero.lead",["ZAL\u2019THERA entsteht aus einer einfachen Frage: Wie k\u00f6nnen digitale Systeme intelligenter werden, ohne Identit\u00e4t, Verantwortung, Nachvollziehbarkeit und menschliche Kontrolle zu verlieren?","ZAL\u2019THERA begins with a simple question: How can digital systems become more intelligent without losing identity, responsibility, traceability and human control?","ZAL\u2019THERA basit bir sorudan do\u011far: Dijital sistemler kimlik, sorumluluk, izlenebilirlik ve insan kontrol\u00fcn\u00fc kaybetmeden nas\u0131l daha ak\u0131ll\u0131 olabilir?","ZAL\u2019THERA nace de una pregunta sencilla: \u00bfC\u00f3mo pueden los sistemas digitales ser m\u00e1s inteligentes sin perder identidad, responsabilidad, trazabilidad y control humano?","ZAL\u2019THERA part d\u2019une question simple : comment rendre les syst\u00e8mes num\u00e9riques plus intelligents sans perdre identit\u00e9, responsabilit\u00e9, tra\u00e7abilit\u00e9 et contr\u00f4le humain ?","ZAL\u2019THERA nasce da una domanda semplice: come possono i sistemi digitali diventare pi\u00f9 intelligenti senza perdere identit\u00e0, responsabilit\u00e0, tracciabilit\u00e0 e controllo umano?","ZAL\u2019THERA porne\u0219te de la o \u00eentrebare simpl\u0103: cum pot sistemele digitale deveni mai inteligente f\u0103r\u0103 a pierde identitatea, responsabilitatea, trasabilitatea \u0219i controlul uman?","ZAL\u2019THERA \u59cb\u4e8e\u4e00\u4e2a\u7b80\u5355\u7684\u95ee\u9898\uff1a\u6570\u5b57\u7cfb\u7edf\u5982\u4f55\u5728\u4e0d\u5931\u53bb\u8eab\u4efd\u3001\u8d23\u4efb\u3001\u53ef\u8ffd\u6eaf\u6027\u4e0e\u4eba\u5de5\u63a7\u5236\u7684\u524d\u63d0\u4e0b\u53d8\u5f97\u66f4\u667a\u80fd\uff1f"]],["about.hero.principles",["Prinzipien entdecken","Discover principles","\u0130lkeleri ke\u015ffet","Descubrir principios","D\u00e9couvrir les principes","Scopri i principi","Descoper\u0103 principiile","\u63a2\u7d22\u539f\u5219"]],["about.hero.founder",["Founder","Founder","Kurucu","Fundador","Fondateur","Fondatore","Fondator","\u521b\u59cb\u4eba"]],["about.hero.localFirst",["LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","\u672c\u5730\u4f18\u5148"]],["about.hero.sovereign",["SOVEREIGN","SOVEREIGN","EGEMEN","SOBERANO","SOUVERAIN","SOVRANO","SUVERAN","\u4e3b\u6743"]],["about.hero.traceable",["TRACEABLE","TRACEABLE","\u0130ZLENEB\u0130L\u0130R","TRAZABLE","TRA\u00c7ABLE","TRACCIABILE","TRASABIL","\u53ef\u8ffd\u6eaf"]],["about.hero.humanAuthorized",["HUMAN-AUTHORIZED","HUMAN-AUTHORIZED","\u0130NSAN TARAFINDAN YETK\u0130L\u0130","AUTORIZADO POR PERSONAS","AUTORIS\u00c9 PAR L\u2019HUMAIN","AUTORIZZATO DALL\u2019UOMO","AUTORIZAT DE OM","\u4eba\u5de5\u6388\u6743"]],["about.principles.eyebrow",["FIRST PRINCIPLES","FIRST PRINCIPLES","\u0130LK \u0130LKELER","PRIMEROS PRINCIPIOS","PRINCIPES FONDAMENTAUX","PRINCIPI FONDAMENTALI","PRINCIPII FUNDAMENTALE","\u7b2c\u4e00\u6027\u539f\u7406"]],["about.principles.title",["Digitale Systeme sollten Menschen nicht entm\u00fcndigen.","Digital systems should not disempower people.","Dijital sistemler insanlar\u0131n yetkisini elinden almamal\u0131.","Los sistemas digitales no deber\u00edan restar autonom\u00eda a las personas.","Les syst\u00e8mes num\u00e9riques ne devraient pas retirer leur autonomie aux personnes.","I sistemi digitali non dovrebbero togliere autonomia alle persone.","Sistemele digitale nu ar trebui s\u0103 diminueze autonomia oamenilor.","\u6570\u5b57\u7cfb\u7edf\u4e0d\u5e94\u524a\u5f31\u4eba\u7684\u81ea\u4e3b\u6743\u3002"]],["about.principles.lead",["Je mehr Systeme wissen und vorbereiten k\u00f6nnen, desto wichtiger werden Identit\u00e4t, Kontext, Berechtigung, Nachweis und klare Verantwortlichkeit.","The more systems can know and prepare, the more important identity, context, authorization, evidence and clear accountability become.","Sistemler ne kadar \u00e7ok bilir ve haz\u0131rl\u0131k yapabilirse kimlik, ba\u011flam, yetki, kan\u0131t ve a\u00e7\u0131k sorumluluk o kadar \u00f6nemli olur.","Cuanto m\u00e1s pueden saber y preparar los sistemas, m\u00e1s importantes son la identidad, el contexto, la autorizaci\u00f3n, la evidencia y la responsabilidad clara.","Plus les syst\u00e8mes peuvent savoir et pr\u00e9parer, plus l\u2019identit\u00e9, le contexte, l\u2019autorisation, la preuve et la responsabilit\u00e9 claire deviennent essentiels.","Pi\u00f9 i sistemi possono sapere e preparare, pi\u00f9 diventano importanti identit\u00e0, contesto, autorizzazione, prova e responsabilit\u00e0 chiara.","Cu c\u00e2t sistemele pot \u0219ti \u0219i preg\u0103ti mai mult, cu at\u00e2t identitatea, contextul, autorizarea, dovada \u0219i responsabilitatea clar\u0103 devin mai importante.","\u7cfb\u7edf\u77e5\u9053\u548c\u51c6\u5907\u5f97\u8d8a\u591a\uff0c\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u6388\u6743\u3001\u8bc1\u636e\u4e0e\u6e05\u6670\u8d23\u4efb\u5c31\u8d8a\u91cd\u8981\u3002"]],["about.principles.identity.title",["Identity belongs to the person.","Identity belongs to the person.","Kimlik ki\u015fiye aittir.","La identidad pertenece a la persona.","L\u2019identit\u00e9 appartient \u00e0 la personne.","L\u2019identit\u00e0 appartiene alla persona.","Identitatea apar\u021bine persoanei.","\u8eab\u4efd\u5c5e\u4e8e\u4e2a\u4eba\u3002"]],["about.principles.identity.text",["Digitale Identit\u00e4t soll nicht von einer einzelnen App, Plattform oder Sitzung abh\u00e4ngig sein.","Digital identity should not depend on a single app, platform or session.","Dijital kimlik tek bir uygulamaya, platforma veya oturuma ba\u011fl\u0131 olmamal\u0131.","La identidad digital no deber\u00eda depender de una sola app, plataforma o sesi\u00f3n.","L\u2019identit\u00e9 num\u00e9rique ne devrait pas d\u00e9pendre d\u2019une seule application, plateforme ou session.","L\u2019identit\u00e0 digitale non dovrebbe dipendere da una singola app, piattaforma o sessione.","Identitatea digital\u0103 nu ar trebui s\u0103 depind\u0103 de o singur\u0103 aplica\u021bie, platform\u0103 sau sesiune.","\u6570\u5b57\u8eab\u4efd\u4e0d\u5e94\u4f9d\u8d56\u67d0\u4e2a\u5355\u4e00\u5e94\u7528\u3001\u5e73\u53f0\u6216\u4f1a\u8bdd\u3002"]],["about.principles.context.title",["Context must remain understandable.","Context must remain understandable.","Ba\u011flam anla\u015f\u0131l\u0131r kalmal\u0131.","El contexto debe seguir siendo comprensible.","Le contexte doit rester compr\u00e9hensible.","Il contesto deve restare comprensibile.","Contextul trebuie s\u0103 r\u0103m\u00e2n\u0103 u\u0219or de \u00een\u021beles.","\u4e0a\u4e0b\u6587\u5fc5\u987b\u4fdd\u6301\u53ef\u7406\u89e3\u3002"]],["about.principles.context.text",["Information gewinnt Bedeutung durch Herkunft, Beziehung, Zeitpunkt und Zusammenhang.","Information gains meaning through provenance, relationship, time and context.","Bilgi; kaynak, ili\u015fki, zaman ve ba\u011flamla anlam kazan\u0131r.","La informaci\u00f3n adquiere significado mediante procedencia, relaci\u00f3n, tiempo y contexto.","L\u2019information prend du sens par sa provenance, sa relation, son moment et son contexte.","L\u2019informazione acquista significato tramite provenienza, relazione, tempo e contesto.","Informa\u021bia cap\u0103t\u0103 sens prin provenien\u021b\u0103, rela\u021bie, timp \u0219i context.","\u4fe1\u606f\u901a\u8fc7\u6765\u6e90\u3001\u5173\u7cfb\u3001\u65f6\u95f4\u4e0e\u4e0a\u4e0b\u6587\u83b7\u5f97\u610f\u4e49\u3002"]],["about.principles.trust.title",["Trust should be verifiable.","Trust should be verifiable.","G\u00fcven do\u011frulanabilir olmal\u0131.","La confianza debe ser verificable.","La confiance doit \u00eatre v\u00e9rifiable.","La fiducia dovrebbe essere verificabile.","\u00cencrederea ar trebui s\u0103 fie verificabil\u0103.","\u4fe1\u4efb\u5e94\u5f53\u53ef\u9a8c\u8bc1\u3002"]],["about.principles.trust.text",["Vertrauen soll aus nachvollziehbaren Zust\u00e4nden, Berechtigungen und Nachweisen entstehen.","Trust should emerge from traceable states, permissions and evidence.","G\u00fcven, izlenebilir durumlar, yetkiler ve kan\u0131tlardan do\u011fmal\u0131.","La confianza debe surgir de estados, permisos y pruebas trazables.","La confiance doit na\u00eetre d\u2019\u00e9tats, de permissions et de preuves tra\u00e7ables.","La fiducia dovrebbe nascere da stati, autorizzazioni e prove tracciabili.","\u00cencrederea ar trebui s\u0103 rezulte din st\u0103ri, permisiuni \u0219i dovezi trasabile.","\u4fe1\u4efb\u5e94\u6765\u81ea\u53ef\u8ffd\u6eaf\u72b6\u6001\u3001\u6743\u9650\u4e0e\u8bc1\u636e\u3002"]],["about.principles.authority.title",["Authority remains explicit.","Authority remains explicit.","Yetki a\u00e7\u0131k kal\u0131r.","La autoridad permanece expl\u00edcita.","L\u2019autorit\u00e9 reste explicite.","L\u2019autorit\u00e0 resta esplicita.","Autoritatea r\u0103m\u00e2ne explicit\u0103.","\u6743\u529b\u5fc5\u987b\u660e\u786e\u3002"]],["about.principles.authority.text",["Intelligenz darf vorbereiten. Konsequente Aktionen ben\u00f6tigen Autorisierung.","Intelligence may prepare. Consequential actions require authorization.","Zek\u00e2 haz\u0131rlayabilir. Sonu\u00e7 do\u011furan eylemler yetki gerektirir.","La inteligencia puede preparar. Las acciones con consecuencias requieren autorizaci\u00f3n.","L\u2019intelligence peut pr\u00e9parer. Les actions \u00e0 cons\u00e9quence n\u00e9cessitent une autorisation.","L\u2019intelligenza pu\u00f2 preparare. Le azioni con conseguenze richiedono autorizzazione.","Inteligen\u021ba poate preg\u0103ti. Ac\u021biunile cu consecin\u021be necesit\u0103 autorizare.","\u667a\u80fd\u53ef\u4ee5\u51c6\u5907\u3002\u4f1a\u4ea7\u751f\u540e\u679c\u7684\u64cd\u4f5c\u9700\u8981\u6388\u6743\u3002"]],["about.architecture.eyebrow",["ONE ARCHITECTURE","ONE ARCHITECTURE","TEK M\u0130MAR\u0130","UNA ARQUITECTURA","UNE ARCHITECTURE","UN\u2019ARCHITETTURA","O ARHITECTUR\u0102","\u7edf\u4e00\u67b6\u6784"]],["about.architecture.title",["ZAL\u2019THERA ist nicht als Sammlung isolierter Apps gedacht.","ZAL\u2019THERA is not designed as a collection of isolated apps.","ZAL\u2019THERA, birbirinden kopuk uygulamalar koleksiyonu olarak tasarlanmad\u0131.","ZAL\u2019THERA no est\u00e1 concebido como una colecci\u00f3n de apps aisladas.","ZAL\u2019THERA n\u2019est pas con\u00e7u comme une collection d\u2019applications isol\u00e9es.","ZAL\u2019THERA non \u00e8 pensato come una raccolta di app isolate.","ZAL\u2019THERA nu este conceput ca o colec\u021bie de aplica\u021bii izolate.","ZAL\u2019THERA \u5e76\u975e\u88ab\u8bbe\u8ba1\u6210\u4e00\u7ec4\u5b64\u7acb\u5e94\u7528\u3002"]],["about.architecture.text",["CONTINUITY, Proof, Communication, Intelligence und industrielle Systeme folgen einer gemeinsamen Logik: Identit\u00e4t, Kontext, Vertrauen, Audit und kontrollierte Aktion.","CONTINUITY, Proof, Communication, Intelligence and industrial systems follow a shared logic: identity, context, trust, audit and controlled action.","CONTINUITY, Proof, Communication, Intelligence ve end\u00fcstriyel sistemler ortak bir mant\u0131\u011f\u0131 izler: kimlik, ba\u011flam, g\u00fcven, denetim ve kontroll\u00fc eylem.","CONTINUITY, Proof, Communication, Intelligence y los sistemas industriales siguen una l\u00f3gica com\u00fan: identidad, contexto, confianza, auditor\u00eda y acci\u00f3n controlada.","CONTINUITY, Proof, Communication, Intelligence et les syst\u00e8mes industriels suivent une logique commune : identit\u00e9, contexte, confiance, audit et action contr\u00f4l\u00e9e.","CONTINUITY, Proof, Communication, Intelligence e i sistemi industriali seguono una logica comune: identit\u00e0, contesto, fiducia, audit e azione controllata.","CONTINUITY, Proof, Communication, Intelligence \u0219i sistemele industriale urmeaz\u0103 o logic\u0103 comun\u0103: identitate, context, \u00eencredere, audit \u0219i ac\u021biune controlat\u0103.","CONTINUITY\u3001Proof\u3001Communication\u3001Intelligence \u4e0e\u5de5\u4e1a\u7cfb\u7edf\u9075\u5faa\u5171\u540c\u903b\u8f91\uff1a\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u4fe1\u4efb\u3001\u5ba1\u8ba1\u4e0e\u53d7\u63a7\u64cd\u4f5c\u3002"]],["about.architecture.systems",["Systeme ansehen","View systems","Sistemleri g\u00f6r\u00fcnt\u00fcle","Ver sistemas","Voir les syst\u00e8mes","Vedi sistemi","Vezi sistemele","\u67e5\u770b\u7cfb\u7edf"]],["about.founder.eyebrow",["FOUNDER","FOUNDER","KURUCU","FUNDADOR","FONDATEUR","FONDATORE","FONDATOR","\u521b\u59cb\u4eba"]],["about.founder.tagline",["Founder and builder of ZAL\u2019THERA.","Founder and builder of ZAL\u2019THERA.","ZAL\u2019THERA\u2019n\u0131n kurucusu ve geli\u015ftiricisi.","Fundador y creador de ZAL\u2019THERA.","Fondateur et b\u00e2tisseur de ZAL\u2019THERA.","Fondatore e costruttore di ZAL\u2019THERA.","Fondator \u0219i creator al ZAL\u2019THERA.","ZAL\u2019THERA \u7684\u521b\u59cb\u4eba\u4e0e\u6784\u5efa\u8005\u3002"]],["about.founder.text1",["ZAL\u2019THERA entsteht aus dem Ziel, digitale Systeme nicht nur leistungsf\u00e4higer, sondern verst\u00e4ndlicher, verantwortlicher und souver\u00e4ner zu machen.","ZAL\u2019THERA is built with the goal of making digital systems not only more capable, but also more understandable, responsible and sovereign.","ZAL\u2019THERA, dijital sistemleri yaln\u0131zca daha g\u00fc\u00e7l\u00fc de\u011fil, daha anla\u015f\u0131l\u0131r, sorumlu ve egemen hale getirme hedefiyle geli\u015ftiriliyor.","ZAL\u2019THERA nace con el objetivo de hacer los sistemas digitales no solo m\u00e1s capaces, sino tambi\u00e9n m\u00e1s comprensibles, responsables y soberanos.","ZAL\u2019THERA est construit avec l\u2019objectif de rendre les syst\u00e8mes num\u00e9riques non seulement plus puissants, mais aussi plus compr\u00e9hensibles, responsables et souverains.","ZAL\u2019THERA nasce con l\u2019obiettivo di rendere i sistemi digitali non solo pi\u00f9 capaci, ma anche pi\u00f9 comprensibili, responsabili e sovrani.","ZAL\u2019THERA este construit cu scopul de a face sistemele digitale nu doar mai capabile, ci \u0219i mai u\u0219or de \u00een\u021beles, responsabile \u0219i suverane.","ZAL\u2019THERA \u7684\u76ee\u6807\u4e0d\u4ec5\u662f\u8ba9\u6570\u5b57\u7cfb\u7edf\u66f4\u5f3a\u5927\uff0c\u4e5f\u8ba9\u5b83\u4eec\u66f4\u53ef\u7406\u89e3\u3001\u66f4\u8d1f\u8d23\u4efb\u3001\u66f4\u5177\u4e3b\u6743\u6027\u3002"]],["about.founder.text2",["Der Schwerpunkt liegt auf Systemarchitekturen, die pers\u00f6nliche Daten, Identit\u00e4t, k\u00fcnstliche Intelligenz, Kommunikation, Nachweise und reale Prozesse miteinander verbinden, ohne menschliche Autorit\u00e4t unsichtbar zu ersetzen.","The focus is on system architectures that connect personal data, identity, artificial intelligence, communication, evidence and real-world processes without invisibly replacing human authority.","Odak; ki\u015fisel verileri, kimli\u011fi, yapay zek\u00e2y\u0131, ileti\u015fimi, kan\u0131tlar\u0131 ve ger\u00e7ek s\u00fcre\u00e7leri insan yetkisini g\u00f6r\u00fcnmez bi\u00e7imde de\u011fi\u015ftirmeden ba\u011flayan sistem mimarileridir.","El foco est\u00e1 en arquitecturas de sistemas que conectan datos personales, identidad, inteligencia artificial, comunicaci\u00f3n, pruebas y procesos reales sin sustituir de forma invisible la autoridad humana.","L\u2019accent porte sur des architectures qui relient donn\u00e9es personnelles, identit\u00e9, intelligence artificielle, communication, preuves et processus r\u00e9els sans remplacer invisiblement l\u2019autorit\u00e9 humaine.","L\u2019attenzione \u00e8 su architetture di sistema che collegano dati personali, identit\u00e0, intelligenza artificiale, comunicazione, prove e processi reali senza sostituire invisibilmente l\u2019autorit\u00e0 umana.","Accentul este pus pe arhitecturi de sistem care conecteaz\u0103 date personale, identitate, inteligen\u021b\u0103 artificial\u0103, comunicare, dovezi \u0219i procese reale f\u0103r\u0103 a \u00eenlocui invizibil autoritatea uman\u0103.","\u91cd\u70b9\u662f\u6784\u5efa\u80fd\u591f\u8fde\u63a5\u4e2a\u4eba\u6570\u636e\u3001\u8eab\u4efd\u3001\u4eba\u5de5\u667a\u80fd\u3001\u901a\u4fe1\u3001\u8bc1\u660e\u4e0e\u73b0\u5b9e\u6d41\u7a0b\u7684\u7cfb\u7edf\u67b6\u6784\uff0c\u540c\u65f6\u4e0d\u4ee5\u4e0d\u53ef\u89c1\u65b9\u5f0f\u53d6\u4ee3\u4eba\u7684\u6743\u529b\u3002"]],["about.founder.discover",["ZAL\u2019THERA entdecken","Discover ZAL\u2019THERA","ZAL\u2019THERA\u2019y\u0131 ke\u015ffet","Descubrir ZAL\u2019THERA","D\u00e9couvrir ZAL\u2019THERA","Scopri ZAL\u2019THERA","Descoper\u0103 ZAL\u2019THERA","\u63a2\u7d22 ZAL\u2019THERA"]],["about.founder.role",["Founder \u00b7 Systems Architecture","Founder \u00b7 Systems Architecture","Kurucu \u00b7 Sistem Mimarisi","Fundador \u00b7 Arquitectura de Sistemas","Fondateur \u00b7 Architecture des Syst\u00e8mes","Fondatore \u00b7 Architettura dei Sistemi","Fondator \u00b7 Arhitectur\u0103 de Sisteme","\u521b\u59cb\u4eba \u00b7 \u7cfb\u7edf\u67b6\u6784"]],["about.direction.eyebrow",["THE DIRECTION","THE DIRECTION","Y\u00d6N","LA DIRECCI\u00d3N","LA DIRECTION","LA DIREZIONE","DIREC\u021aIA","\u65b9\u5411"]],["about.direction.title",["Intelligence should increase capability without removing accountability.","Intelligence should increase capability without removing accountability.","Zek\u00e2, hesap verebilirli\u011fi ortadan kald\u0131rmadan yetene\u011fi art\u0131rmal\u0131.","La inteligencia deber\u00eda aumentar la capacidad sin eliminar la responsabilidad.","L\u2019intelligence devrait accro\u00eetre les capacit\u00e9s sans supprimer la responsabilit\u00e9.","L\u2019intelligenza dovrebbe aumentare le capacit\u00e0 senza eliminare la responsabilit\u00e0.","Inteligen\u021ba ar trebui s\u0103 creasc\u0103 capacitatea f\u0103r\u0103 a elimina responsabilitatea.","\u667a\u80fd\u5e94\u63d0\u5347\u80fd\u529b\uff0c\u800c\u4e0d\u53d6\u6d88\u8d23\u4efb\u3002"]],["about.direction.text",["Je m\u00e4chtiger ein digitales System wird, desto wichtiger werden nachvollziehbare Grenzen, klare Identit\u00e4t und bewusste Autorisierung.","The more powerful a digital system becomes, the more important traceable boundaries, clear identity and deliberate authorization become.","Dijital bir sistem ne kadar g\u00fc\u00e7l\u00fc olursa izlenebilir s\u0131n\u0131rlar, a\u00e7\u0131k kimlik ve bilin\u00e7li yetkilendirme o kadar \u00f6nemli olur.","Cuanto m\u00e1s potente es un sistema digital, m\u00e1s importantes son los l\u00edmites trazables, la identidad clara y la autorizaci\u00f3n consciente.","Plus un syst\u00e8me num\u00e9rique devient puissant, plus les limites tra\u00e7ables, l\u2019identit\u00e9 claire et l\u2019autorisation consciente deviennent importantes.","Pi\u00f9 un sistema digitale diventa potente, pi\u00f9 diventano importanti limiti tracciabili, identit\u00e0 chiara e autorizzazione consapevole.","Cu c\u00e2t un sistem digital devine mai puternic, cu at\u00e2t limitele trasabile, identitatea clar\u0103 \u0219i autorizarea con\u0219tient\u0103 devin mai importante.","\u6570\u5b57\u7cfb\u7edf\u8d8a\u5f3a\u5927\uff0c\u53ef\u8ffd\u6eaf\u8fb9\u754c\u3001\u6e05\u6670\u8eab\u4efd\u4e0e\u6709\u610f\u8bc6\u7684\u6388\u6743\u5c31\u8d8a\u91cd\u8981\u3002"]],["about.direction.back",["Zur\u00fcck zum System","Back to the system","Sisteme d\u00f6n","Volver al sistema","Retour au syst\u00e8me","Torna al sistema","\u00cenapoi la sistem","\u8fd4\u56de\u7cfb\u7edf"]],["lifeflow.hero.kicker",["PERSONAL FINANCE CLARITY","PERSONAL FINANCE CLARITY","K\u0130\u015e\u0130SEL F\u0130NANS NETL\u0130\u011e\u0130","CLARIDAD FINANCIERA PERSONAL","CLART\u00c9 FINANCI\u00c8RE PERSONNELLE","CHIAREZZA FINANZIARIA PERSONALE","CLARITATE FINANCIAR\u0102 PERSONAL\u0102","\u4e2a\u4eba\u8d22\u52a1\u6e05\u6670\u5ea6"]],["lifeflow.hero.title",["See what comes in.<br>See what goes out.<br>Know what remains.","See what comes in.<br>See what goes out.<br>Know what remains.","Ne geliyor g\u00f6r.<br>Ne gidiyor g\u00f6r.<br>Ne kald\u0131\u011f\u0131n\u0131 bil.","Ve lo que entra.<br>Ve lo que sale.<br>Sabe lo que queda.","Voyez ce qui entre.<br>Voyez ce qui sort.<br>Sachez ce qui reste.","Vedi cosa entra.<br>Vedi cosa esce.<br>Saprai cosa resta.","Vezi ce intr\u0103.<br>Vezi ce iese.<br>\u0218tii ce r\u0103m\u00e2ne.","\u770b\u6e05\u6536\u5165\u3002<br>\u770b\u6e05\u652f\u51fa\u3002<br>\u77e5\u9053\u8fd8\u5269\u591a\u5c11\u3002"]],["lifeflow.hero.lead",["LifeFlow macht laufende Kosten, Vertr\u00e4ge, Fristen und finanzielle Verpflichtungen sichtbar \u2013 fokussiert, verst\u00e4ndlich und ohne unn\u00f6tige Komplexit\u00e4t.","LifeFlow makes recurring costs, contracts, deadlines and financial obligations visible \u2014 focused, understandable and without unnecessary complexity.","LifeFlow; d\u00fczenli maliyetleri, s\u00f6zle\u015fmeleri, s\u00fcreleri ve finansal y\u00fck\u00fcml\u00fcl\u00fckleri g\u00f6r\u00fcn\u00fcr k\u0131lar \u2014 odakl\u0131, anla\u015f\u0131l\u0131r ve gereksiz karma\u015f\u0131kl\u0131k olmadan.","LifeFlow hace visibles los costes recurrentes, contratos, plazos y obligaciones financieras, de forma enfocada, comprensible y sin complejidad innecesaria.","LifeFlow rend visibles les co\u00fbts r\u00e9currents, contrats, \u00e9ch\u00e9ances et obligations financi\u00e8res \u2014 de fa\u00e7on cibl\u00e9e, compr\u00e9hensible et sans complexit\u00e9 inutile.","LifeFlow rende visibili costi ricorrenti, contratti, scadenze e obblighi finanziari \u2014 in modo focalizzato, comprensibile e senza complessit\u00e0 inutile.","LifeFlow face vizibile costurile recurente, contractele, termenele \u0219i obliga\u021biile financiare \u2014 clar, concentrat \u0219i f\u0103r\u0103 complexitate inutil\u0103.","LifeFlow \u8ba9\u6301\u7eed\u6210\u672c\u3001\u5408\u540c\u3001\u671f\u9650\u4e0e\u8d22\u52a1\u4e49\u52a1\u6e05\u6670\u53ef\u89c1\u2014\u2014\u805a\u7126\u3001\u6613\u61c2\u4e14\u6ca1\u6709\u4e0d\u5fc5\u8981\u7684\u590d\u6742\u6027\u3002"]],["lifeflow.hero.view",["LifeFlow ansehen","View LifeFlow","LifeFlow\u2019u g\u00f6r\u00fcnt\u00fcle","Ver LifeFlow","Voir LifeFlow","Vedi LifeFlow","Vezi LifeFlow","\u67e5\u770b LifeFlow"]],["lifeflow.hero.understand",["System verstehen","Understand the system","Sistemi anla","Entender el sistema","Comprendre le syst\u00e8me","Comprendi il sistema","\u00cen\u021belege sistemul","\u7406\u89e3\u7cfb\u7edf"]],["lifeflow.hero.costs",["COSTS","COSTS","MAL\u0130YETLER","COSTES","CO\u00dbTS","COSTI","COSTURI","\u6210\u672c"]],["lifeflow.hero.contracts",["CONTRACTS","CONTRACTS","S\u00d6ZLE\u015eMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","\u5408\u540c"]],["lifeflow.hero.deadlines",["DEADLINES","DEADLINES","S\u00dcRELER","PLAZOS","\u00c9CH\u00c9ANCES","SCADENZE","TERMENE","\u671f\u9650"]],["lifeflow.hero.moneyView",["MONEY VIEW","MONEY VIEW","PARA G\u00d6R\u00dcN\u00dcM\u00dc","VISTA FINANCIERA","VUE FINANCI\u00c8RE","VISTA FINANZIARIA","VIZIUNE FINANCIAR\u0102","\u8d44\u91d1\u89c6\u56fe"]],["lifeflow.state.label",["FINANCE VIEW","FINANCE VIEW","F\u0130NANS G\u00d6R\u00dcN\u00dcM\u00dc","VISTA FINANCIERA","VUE FINANCI\u00c8RE","VISTA FINANZIARIA","VIZIUNE FINANCIAR\u0102","\u8d22\u52a1\u89c6\u56fe"]],["lifeflow.state.income",["INCOME","INCOME","GEL\u0130R","INGRESOS","REVENUS","ENTRATE","VENIT","\u6536\u5165"]],["lifeflow.state.visible",["VISIBLE","VISIBLE","G\u00d6R\u00dcN\u00dcR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","\u53ef\u89c1"]],["lifeflow.state.costs",["COSTS","COSTS","MAL\u0130YETLER","COSTES","CO\u00dbTS","COSTI","COSTURI","\u6210\u672c"]],["lifeflow.state.tracked",["TRACKED","TRACKED","TAK\u0130P ED\u0130L\u0130YOR","REGISTRADOS","SUIVIS","TRACCIATI","URM\u0102RITE","\u5df2\u8ddf\u8e2a"]],["lifeflow.state.contracts",["CONTRACTS","CONTRACTS","S\u00d6ZLE\u015eMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","\u5408\u540c"]],["lifeflow.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMI\u015e","ESTRUCTURADOS","STRUCTUR\u00c9S","STRUTTURATI","STRUCTURATE","\u5df2\u7ed3\u6784\u5316"]],["lifeflow.state.deadlines",["DEADLINES","DEADLINES","S\u00dcRELER","PLAZOS","\u00c9CH\u00c9ANCES","SCADENZE","TERMENE","\u671f\u9650"]],["lifeflow.state.known",["KNOWN","KNOWN","B\u0130L\u0130N\u0130YOR","CONOCIDOS","CONNUES","NOTE","CUNOSCUTE","\u5df2\u77e5"]],["lifeflow.state.remainder",["REMAINDER","REMAINDER","KALAN","RESTANTE","RESTE","RESIDUO","REST","\u4f59\u989d"]],["lifeflow.state.calculated",["CALCULATED","CALCULATED","HESAPLANDI","CALCULADO","CALCUL\u00c9","CALCOLATO","CALCULAT","\u5df2\u8ba1\u7b97"]],["lifeflow.problem.eyebrow",["FINANCIAL VISIBILITY","FINANCIAL VISIBILITY","F\u0130NANSAL G\u00d6R\u00dcN\u00dcRL\u00dcK","VISIBILIDAD FINANCIERA","VISIBILIT\u00c9 FINANCI\u00c8RE","VISIBILIT\u00c0 FINANZIARIA","VIZIBILITATE FINANCIAR\u0102","\u8d22\u52a1\u53ef\u89c1\u6027"]],["lifeflow.problem.title",["Kleine Verpflichtungen werden gro\u00df, wenn sie unsichtbar bleiben.","Small obligations become large when they remain invisible.","K\u00fc\u00e7\u00fck y\u00fck\u00fcml\u00fcl\u00fckler g\u00f6r\u00fcnmez kald\u0131\u011f\u0131nda b\u00fcy\u00fcr.","Las peque\u00f1as obligaciones se vuelven grandes cuando permanecen invisibles.","Les petites obligations deviennent importantes lorsqu\u2019elles restent invisibles.","I piccoli impegni diventano grandi quando restano invisibili.","Obliga\u021biile mici devin mari c\u00e2nd r\u0103m\u00e2n invizibile.","\u5c0f\u4e49\u52a1\u5728\u770b\u4e0d\u89c1\u65f6\u4f1a\u53d8\u6210\u5927\u95ee\u9898\u3002"]],["lifeflow.problem.lead",["Viele laufende Kosten sind einzeln \u00fcberschaubar. Das Problem entsteht, wenn Vertr\u00e4ge, Fristen und wiederkehrende Zahlungen keinen gemeinsamen \u00dcberblick haben.","Many recurring costs are manageable on their own. The problem begins when contracts, deadlines and recurring payments lack a shared overview.","Bir\u00e7ok d\u00fczenli maliyet tek ba\u015f\u0131na y\u00f6netilebilir. Sorun, s\u00f6zle\u015fmelerin, s\u00fcrelerin ve tekrarlayan \u00f6demelerin ortak bir g\u00f6r\u00fcn\u00fcm\u00fc olmad\u0131\u011f\u0131nda ba\u015flar.","Muchos costes recurrentes son manejables por separado. El problema aparece cuando contratos, plazos y pagos recurrentes no comparten una visi\u00f3n com\u00fan.","De nombreux co\u00fbts r\u00e9currents sont g\u00e9rables isol\u00e9ment. Le probl\u00e8me appara\u00eet lorsque contrats, \u00e9ch\u00e9ances et paiements r\u00e9currents n\u2019ont pas de vue d\u2019ensemble.","Molti costi ricorrenti sono gestibili singolarmente. Il problema nasce quando contratti, scadenze e pagamenti ricorrenti non hanno una vista comune.","Multe costuri recurente sunt gestionabile separat. Problema apare c\u00e2nd contractele, termenele \u0219i pl\u0103\u021bile recurente nu au o imagine comun\u0103.","\u8bb8\u591a\u6301\u7eed\u6210\u672c\u5355\u72ec\u770b\u90fd\u53ef\u63a7\u3002\u95ee\u9898\u5728\u4e8e\u5408\u540c\u3001\u671f\u9650\u4e0e\u91cd\u590d\u4ed8\u6b3e\u7f3a\u5c11\u7edf\u4e00\u89c6\u56fe\u3002"]],["lifeflow.problem.overview.title",["Kein Gesamtbild","No complete picture","Genel g\u00f6r\u00fcn\u00fcm yok","Sin visi\u00f3n global","Pas de vue d\u2019ensemble","Nessun quadro completo","F\u0103r\u0103 imagine complet\u0103","\u6ca1\u6709\u5168\u5c40\u89c6\u56fe"]],["lifeflow.problem.overview.text",["Einkommen und Ausgaben werden getrennt wahrgenommen, statt gemeinsam betrachtet.","Income and expenses are perceived separately instead of being viewed together.","Gelir ve giderler birlikte de\u011fil ayr\u0131 alg\u0131lan\u0131r.","Ingresos y gastos se perciben por separado en vez de verse juntos.","Revenus et d\u00e9penses sont per\u00e7us s\u00e9par\u00e9ment au lieu d\u2019\u00eatre vus ensemble.","Entrate e uscite vengono percepite separatamente invece che insieme.","Veniturile \u0219i cheltuielile sunt percepute separat, nu \u00eempreun\u0103.","\u6536\u5165\u4e0e\u652f\u51fa\u88ab\u5206\u5f00\u770b\u5f85\uff0c\u800c\u4e0d\u662f\u7edf\u4e00\u7406\u89e3\u3002"]],["lifeflow.problem.deadlines.title",["Fristen verschwinden","Deadlines disappear","S\u00fcreler g\u00f6zden kaybolur","Los plazos desaparecen","Les \u00e9ch\u00e9ances disparaissent","Le scadenze spariscono","Termenele dispar","\u671f\u9650\u88ab\u5ffd\u7565"]],["lifeflow.problem.deadlines.text",["Vertrags- und K\u00fcndigungsdaten werden erst relevant, wenn es bereits zu sp\u00e4t ist.","Contract and cancellation dates become relevant only when it is already too late.","S\u00f6zle\u015fme ve iptal tarihleri ancak \u00e7ok ge\u00e7 oldu\u011funda fark edilir.","Las fechas de contrato y cancelaci\u00f3n se vuelven relevantes cuando ya es demasiado tarde.","Les dates de contrat et de r\u00e9siliation deviennent importantes lorsqu\u2019il est d\u00e9j\u00e0 trop tard.","Le date di contratto e disdetta diventano rilevanti quando \u00e8 gi\u00e0 troppo tardi.","Datele contractuale \u0219i de reziliere devin relevante c\u00e2nd este deja prea t\u00e2rziu.","\u5408\u540c\u4e0e\u53d6\u6d88\u65e5\u671f\u5f80\u5f80\u5728\u5df2\u7ecf\u592a\u665a\u65f6\u624d\u53d7\u5230\u91cd\u89c6\u3002"]],["lifeflow.problem.remainder.title",["Restbetrag bleibt Gef\u00fchl","Remainder remains a feeling","Kalan tutar bir his olarak kal\u0131r","El restante queda como una sensaci\u00f3n","Le reste demeure une impression","Il residuo resta una sensazione","Restul r\u0103m\u00e2ne o impresie","\u5269\u4f59\u91d1\u989d\u53ea\u662f\u611f\u89c9"]],["lifeflow.problem.remainder.text",["Ohne klare \u00dcbersicht ist schwer einzusch\u00e4tzen, wie viel finanzieller Spielraum tats\u00e4chlich bleibt.","Without a clear overview, it is difficult to know how much financial flexibility actually remains.","A\u00e7\u0131k bir g\u00f6r\u00fcn\u00fcm olmadan ger\u00e7ekte ne kadar finansal alan kald\u0131\u011f\u0131n\u0131 de\u011ferlendirmek zordur.","Sin una visi\u00f3n clara, es dif\u00edcil saber cu\u00e1nto margen financiero queda realmente.","Sans vue claire, il est difficile de savoir quelle marge financi\u00e8re reste r\u00e9ellement.","Senza una vista chiara \u00e8 difficile capire quanto margine finanziario rimanga davvero.","F\u0103r\u0103 o imagine clar\u0103 este greu de estimat c\u00e2t spa\u021biu financiar r\u0103m\u00e2ne efectiv.","\u6ca1\u6709\u6e05\u6670\u89c6\u56fe\uff0c\u5c31\u5f88\u96be\u5224\u65ad\u771f\u6b63\u8fd8\u5269\u591a\u5c11\u8d22\u52a1\u7a7a\u95f4\u3002"]],["lifeflow.system.eyebrow",["LIFEFLOW SYSTEM","LIFEFLOW SYSTEM","LIFEFLOW S\u0130STEM\u0130","SISTEMA LIFEFLOW","SYST\u00c8ME LIFEFLOW","SISTEMA LIFEFLOW","SISTEM LIFEFLOW","LIFEFLOW \u7cfb\u7edf"]],["lifeflow.system.title",["Finanzielle Alltagsrealit\u00e4t an einem Ort.","Everyday financial reality in one place.","G\u00fcnl\u00fck finansal ger\u00e7eklik tek yerde.","La realidad financiera diaria en un solo lugar.","La r\u00e9alit\u00e9 financi\u00e8re quotidienne en un seul endroit.","La realt\u00e0 finanziaria quotidiana in un unico posto.","Realitatea financiar\u0103 de zi cu zi \u00eentr-un singur loc.","\u65e5\u5e38\u8d22\u52a1\u73b0\u5b9e\u96c6\u4e2d\u5728\u4e00\u4e2a\u5730\u65b9\u3002"]],["lifeflow.system.lead",["LifeFlow konzentriert sich bewusst auf das, was regelm\u00e4\u00dfig sichtbar sein muss.","LifeFlow deliberately focuses on what needs to stay visible regularly.","LifeFlow bilin\u00e7li olarak d\u00fczenli bi\u00e7imde g\u00f6r\u00fcn\u00fcr kalmas\u0131 gerekenlere odaklan\u0131r.","LifeFlow se centra deliberadamente en lo que debe permanecer visible de forma regular.","LifeFlow se concentre volontairement sur ce qui doit rester visible r\u00e9guli\u00e8rement.","LifeFlow si concentra volutamente su ci\u00f2 che deve restare visibile con regolarit\u00e0.","LifeFlow se concentreaz\u0103 \u00een mod deliberat pe ceea ce trebuie s\u0103 r\u0103m\u00e2n\u0103 vizibil regulat.","LifeFlow \u6709\u610f\u8bc6\u5730\u805a\u7126\u4e8e\u9700\u8981\u6301\u7eed\u4fdd\u6301\u53ef\u89c1\u7684\u5185\u5bb9\u3002"]],["lifeflow.system.contracts.title",["Contracts","Contracts","S\u00f6zle\u015fmeler","Contratos","Contrats","Contratti","Contracte","\u5408\u540c"]],["lifeflow.system.contracts.text",["Laufende Vertr\u00e4ge, Startdaten, Enddaten und Fristen im Blick behalten.","Keep recurring contracts, start dates, end dates and deadlines in view.","Devam eden s\u00f6zle\u015fmeleri, ba\u015flang\u0131\u00e7 ve biti\u015f tarihlerini ve s\u00fcreleri takip edin.","Mant\u00e9n a la vista contratos, fechas de inicio y fin y plazos.","Gardez \u00e0 l\u2019\u0153il contrats, dates de d\u00e9but et de fin et \u00e9ch\u00e9ances.","Tieni sotto controllo contratti, date di inizio e fine e scadenze.","\u021aine sub control contractele, datele de \u00eenceput \u0219i sf\u00e2r\u0219it \u0219i termenele.","\u6301\u7eed\u638c\u63e1\u5408\u540c\u3001\u5f00\u59cb\u65e5\u671f\u3001\u7ed3\u675f\u65e5\u671f\u4e0e\u671f\u9650\u3002"]],["lifeflow.system.costs.title",["Costs","Costs","Maliyetler","Costes","Co\u00fbts","Costi","Costuri","\u6210\u672c"]],["lifeflow.system.costs.text",["Wiederkehrende finanzielle Verpflichtungen strukturiert sichtbar machen.","Make recurring financial obligations visible in a structured way.","Tekrarlayan finansal y\u00fck\u00fcml\u00fcl\u00fckleri yap\u0131land\u0131r\u0131lm\u0131\u015f bi\u00e7imde g\u00f6r\u00fcn\u00fcr k\u0131l\u0131n.","Haz visibles de forma estructurada las obligaciones financieras recurrentes.","Rendez visibles de fa\u00e7on structur\u00e9e les obligations financi\u00e8res r\u00e9currentes.","Rendi visibili in modo strutturato gli obblighi finanziari ricorrenti.","F\u0103 vizibile structurat obliga\u021biile financiare recurente.","\u4ee5\u7ed3\u6784\u5316\u65b9\u5f0f\u5448\u73b0\u91cd\u590d\u8d22\u52a1\u4e49\u52a1\u3002"]],["lifeflow.system.money.title",["Money View","Money View","Para G\u00f6r\u00fcn\u00fcm\u00fc","Vista financiera","Vue financi\u00e8re","Vista finanziaria","Viziune financiar\u0103","\u8d44\u91d1\u89c6\u56fe"]],["lifeflow.system.money.text",["Einkommen, Kosten, Schulden und verbleibenden Betrag zusammen betrachten.","View income, costs, debt and remaining amount together.","Gelir, maliyet, bor\u00e7 ve kalan tutar\u0131 birlikte g\u00f6r\u00fcnt\u00fcleyin.","Consulta juntos ingresos, costes, deudas y cantidad restante.","Visualisez ensemble revenus, co\u00fbts, dettes et montant restant.","Guarda insieme entrate, costi, debiti e importo rimanente.","Prive\u0219te \u00eempreun\u0103 veniturile, costurile, datoriile \u0219i suma r\u0103mas\u0103.","\u5c06\u6536\u5165\u3001\u6210\u672c\u3001\u503a\u52a1\u4e0e\u5269\u4f59\u91d1\u989d\u653e\u5728\u4e00\u8d77\u67e5\u770b\u3002"]],["lifeflow.system.status.title",["Status","Status","Durum","Estado","Statut","Stato","Stare","\u72b6\u6001"]],["lifeflow.system.status.text",["Finanzielle Lage schneller und verst\u00e4ndlicher einsch\u00e4tzen.","Assess your financial situation faster and more clearly.","Finansal durumu daha h\u0131zl\u0131 ve anla\u015f\u0131l\u0131r de\u011ferlendirin.","Eval\u00faa la situaci\u00f3n financiera m\u00e1s r\u00e1pido y con mayor claridad.","\u00c9valuez plus rapidement et clairement la situation financi\u00e8re.","Valuta la situazione finanziaria pi\u00f9 rapidamente e con maggiore chiarezza.","Evalueaz\u0103 situa\u021bia financiar\u0103 mai rapid \u0219i mai clar.","\u66f4\u5feb\u3001\u66f4\u6e05\u6670\u5730\u8bc4\u4f30\u8d22\u52a1\u72b6\u51b5\u3002"]],["lifeflow.continuity.eyebrow",["FROM LIFEFLOW TO CONTINUITY","FROM LIFEFLOW TO CONTINUITY","LIFEFLOW\u2019DAN CONTINUITY\u2019YE","DE LIFEFLOW A CONTINUITY","DE LIFEFLOW \u00c0 CONTINUITY","DA LIFEFLOW A CONTINUITY","DE LA LIFEFLOW LA CONTINUITY","\u4ece LIFEFLOW \u5230 CONTINUITY"]],["lifeflow.continuity.title",["LifeFlow bleibt fokussiert. CONTINUITY geht weiter.","LifeFlow stays focused. CONTINUITY goes further.","LifeFlow odakl\u0131 kal\u0131r. CONTINUITY daha ileri gider.","LifeFlow se mantiene enfocado. CONTINUITY va m\u00e1s all\u00e1.","LifeFlow reste cibl\u00e9. CONTINUITY va plus loin.","LifeFlow resta focalizzato. CONTINUITY va oltre.","LifeFlow r\u0103m\u00e2ne concentrat. CONTINUITY merge mai departe.","LifeFlow \u4fdd\u6301\u805a\u7126\uff0cCONTINUITY \u66f4\u8fdb\u4e00\u6b65\u3002"]],["lifeflow.continuity.text",["LifeFlow ist ein eigenst\u00e4ndig nutzbares, fokussiertes Produkt f\u00fcr Kosten, Vertr\u00e4ge und Fristen. CONTINUITY entwickelt daraus eine wesentlich gr\u00f6\u00dfere pers\u00f6nliche Umgebung f\u00fcr Dokumente, Finance, Cards, Timeline, Herkunft und Kontext.","LifeFlow is a focused standalone product for costs, contracts and deadlines. CONTINUITY expands this into a much broader personal environment for documents, finance, Cards, Timeline, provenance and context.","LifeFlow maliyetler, s\u00f6zle\u015fmeler ve s\u00fcreler i\u00e7in ba\u011f\u0131ms\u0131z, odakl\u0131 bir \u00fcr\u00fcnd\u00fcr. CONTINUITY bunu belgeler, finans, Cards, Timeline, kaynak ve ba\u011flam i\u00e7in \u00e7ok daha geni\u015f bir ki\u015fisel ortama d\u00f6n\u00fc\u015ft\u00fcr\u00fcr.","LifeFlow es un producto independiente y enfocado para costes, contratos y plazos. CONTINUITY lo ampl\u00eda a un entorno personal mucho mayor para documentos, finanzas, Cards, Timeline, procedencia y contexto.","LifeFlow est un produit autonome et cibl\u00e9 pour co\u00fbts, contrats et \u00e9ch\u00e9ances. CONTINUITY l\u2019\u00e9tend \u00e0 un environnement personnel beaucoup plus vaste pour documents, finances, Cards, Timeline, provenance et contexte.","LifeFlow \u00e8 un prodotto autonomo e focalizzato per costi, contratti e scadenze. CONTINUITY lo estende a un ambiente personale molto pi\u00f9 ampio per documenti, finanze, Cards, Timeline, provenienza e contesto.","LifeFlow este un produs autonom \u0219i focalizat pentru costuri, contracte \u0219i termene. CONTINUITY \u00eel extinde \u00eentr-un mediu personal mult mai amplu pentru documente, finan\u021be, Cards, Timeline, provenien\u021b\u0103 \u0219i context.","LifeFlow \u662f\u9762\u5411\u6210\u672c\u3001\u5408\u540c\u4e0e\u671f\u9650\u7684\u72ec\u7acb\u805a\u7126\u4ea7\u54c1\u3002CONTINUITY \u5c06\u5176\u6269\u5c55\u4e3a\u66f4\u5927\u7684\u4e2a\u4eba\u73af\u5883\uff0c\u6db5\u76d6\u6587\u6863\u3001\u8d22\u52a1\u3001Cards\u3001Timeline\u3001\u6765\u6e90\u4e0e\u4e0a\u4e0b\u6587\u3002"]],["lifeflow.continuity.view",["CONTINUITY ansehen","View CONTINUITY","CONTINUITY\u2019yi g\u00f6r\u00fcnt\u00fcle","Ver CONTINUITY","Voir CONTINUITY","Vedi CONTINUITY","Vezi CONTINUITY","\u67e5\u770b CONTINUITY"]],["lifeflow.offer.eyebrow",["AVAILABLE","AVAILABLE","MEVCUT","DISPONIBLE","DISPONIBLE","DISPONIBILE","DISPONIBIL","\u5df2\u53d1\u5e03"]],["lifeflow.offer.text",["Ein fokussierter Einstieg in pers\u00f6nliche Finanz\u00fcbersicht.","A focused entry point into personal financial overview.","Ki\u015fisel finans g\u00f6r\u00fcn\u00fcm\u00fcne odakl\u0131 bir giri\u015f.","Una entrada enfocada a la visi\u00f3n financiera personal.","Une entr\u00e9e cibl\u00e9e dans la vue financi\u00e8re personnelle.","Un ingresso focalizzato nella panoramica finanziaria personale.","Un punct de intrare concentrat \u00een imaginea financiar\u0103 personal\u0103.","\u4e2a\u4eba\u8d22\u52a1\u6982\u89c8\u7684\u805a\u7126\u5165\u53e3\u3002"]],["lifeflow.offer.appStore",["Im App Store ansehen","View in the App Store","App Store\u2019da g\u00f6r\u00fcnt\u00fcle","Ver en App Store","Voir dans l\u2019App Store","Vedi su App Store","Vezi \u00een App Store","\u5728 App Store \u67e5\u770b"]],["lifeflow.offer.legalPrefix",["Mit dem Kauf gelten unsere","By purchasing, our","Sat\u0131n alma ile \u015fu \u015fartlar ge\u00e7erlidir:","Con la compra se aplican nuestros","Avec l\u2019achat s\u2019appliquent nos","Con l\u2019acquisto si applicano i nostri","Prin cump\u0103rare se aplic\u0103","\u8d2d\u4e70\u5373\u9002\u7528\u6211\u4eec\u7684"]],["lifeflow.offer.terms",["AGB","Terms","\u015eartlar","T\u00e9rminos","CGV","Termini","Termeni","\u6761\u6b3e"]],["lifeflow.offer.legalMiddle",["und unsere","and our","ve","y nuestra","et notre","e la nostra","\u0219i","\u4ee5\u53ca\u6211\u4eec\u7684"]],["lifeflow.offer.withdrawal",["Widerrufsbelehrung","Withdrawal Policy","Cayma Politikas\u0131","Pol\u00edtica de desistimiento","Politique de r\u00e9tractation","Informativa sul recesso","Politica de retragere","\u64a4\u9500\u8bf4\u660e"]],["lifeflow.offer.legalAnd",[".",".",".",".",".",".",".","\u3002"]],["lifeflow.offer.model",["MODELL","MODEL","MODEL","MODELO","MOD\u00c8LE","MODELLO","MODEL","\u6a21\u5f0f"]],["lifeflow.offer.oneTime",["Einmalkauf","One-time purchase","Tek seferlik sat\u0131n alma","Compra \u00fanica","Achat unique","Acquisto una tantum","Achizi\u021bie unic\u0103","\u4e00\u6b21\u6027\u8d2d\u4e70"]],["lifeflow.offer.subscription",["ABO","SUBSCRIPTION","ABONEL\u0130K","SUSCRIPCI\u00d3N","ABONNEMENT","ABBONAMENTO","ABONAMENT","\u8ba2\u9605"]],["lifeflow.offer.none",["Kein Abo","No subscription","Abonelik yok","Sin suscripci\u00f3n","Sans abonnement","Nessun abbonamento","F\u0103r\u0103 abonament","\u65e0\u8ba2\u9605"]],["lifeflow.offer.platform",["PLATTFORM","PLATFORM","PLATFORM","PLATAFORMA","PLATEFORME","PIATTAFORMA","PLATFORM\u0102","\u5e73\u53f0"]],["lifeflow.offer.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","\u72b6\u6001"]],["lifeflow.faq.title",["FAQ","FAQ","SSS","FAQ","FAQ","FAQ","FAQ","\u5e38\u89c1\u95ee\u9898"]],["lifeflow.faq.subscription.question",["Gibt es ein Abo?","Is there a subscription?","Abonelik var m\u0131?","\u00bfHay suscripci\u00f3n?","Y a-t-il un abonnement ?","C\u2019\u00e8 un abbonamento?","Exist\u0103 abonament?","\u6709\u8ba2\u9605\u5417\uff1f"]],["lifeflow.faq.subscription.answer",["Nein. LifeFlow ist als Einmalkauf vorgesehen.","No. LifeFlow is intended as a one-time purchase.","Hay\u0131r. LifeFlow tek seferlik sat\u0131n alma olarak tasarlanm\u0131\u015ft\u0131r.","No. LifeFlow est\u00e1 previsto como compra \u00fanica.","Non. LifeFlow est pr\u00e9vu comme achat unique.","No. LifeFlow \u00e8 previsto come acquisto una tantum.","Nu. LifeFlow este conceput ca achizi\u021bie unic\u0103.","\u6ca1\u6709\u3002LifeFlow \u8bbe\u8ba1\u4e3a\u4e00\u6b21\u6027\u8d2d\u4e70\u3002"]],["lifeflow.faq.continuity.question",["Ist LifeFlow dasselbe wie CONTINUITY?","Is LifeFlow the same as CONTINUITY?","LifeFlow, CONTINUITY ile ayn\u0131 m\u0131?","\u00bfLifeFlow es lo mismo que CONTINUITY?","LifeFlow est-il identique \u00e0 CONTINUITY ?","LifeFlow \u00e8 lo stesso di CONTINUITY?","LifeFlow este acela\u0219i lucru cu CONTINUITY?","LifeFlow \u548c CONTINUITY \u662f\u540c\u4e00\u4e2a\u4e1c\u897f\u5417\uff1f"]],["lifeflow.faq.continuity.answer",["Nein. LifeFlow bleibt ein fokussiertes Produkt. CONTINUITY entwickelt eine deutlich umfassendere pers\u00f6nliche Systemumgebung.","No. LifeFlow remains a focused product. CONTINUITY is developing a much broader personal system environment.","Hay\u0131r. LifeFlow odakl\u0131 bir \u00fcr\u00fcn olarak kal\u0131r. CONTINUITY \u00e7ok daha kapsaml\u0131 bir ki\u015fisel sistem ortam\u0131 geli\u015ftirir.","No. LifeFlow sigue siendo un producto enfocado. CONTINUITY desarrolla un entorno de sistema personal mucho m\u00e1s amplio.","Non. LifeFlow reste un produit cibl\u00e9. CONTINUITY d\u00e9veloppe un environnement personnel beaucoup plus large.","No. LifeFlow resta un prodotto focalizzato. CONTINUITY sviluppa un ambiente personale molto pi\u00f9 ampio.","Nu. LifeFlow r\u0103m\u00e2ne un produs focalizat. CONTINUITY dezvolt\u0103 un mediu personal mult mai amplu.","\u4e0d\u662f\u3002LifeFlow \u4fdd\u6301\u4e3a\u805a\u7126\u4ea7\u54c1\uff0cCONTINUITY \u6b63\u5728\u6784\u5efa\u66f4\u5e7f\u6cdb\u7684\u4e2a\u4eba\u7cfb\u7edf\u73af\u5883\u3002"]],["lifeflow.faq.platform.question",["Auf welcher Plattform ist LifeFlow verf\u00fcgbar?","Which platform is LifeFlow available on?","LifeFlow hangi platformda mevcut?","\u00bfEn qu\u00e9 plataforma est\u00e1 disponible LifeFlow?","Sur quelle plateforme LifeFlow est-il disponible ?","Su quale piattaforma \u00e8 disponibile LifeFlow?","Pe ce platform\u0103 este disponibil LifeFlow?","LifeFlow \u5728\u54ea\u4e2a\u5e73\u53f0\u53ef\u7528\uff1f"]],["lifeflow.faq.platform.answer",["LifeFlow ist f\u00fcr iPhone / iOS vorgesehen.","LifeFlow is intended for iPhone / iOS.","LifeFlow iPhone / iOS i\u00e7in tasarlanm\u0131\u015ft\u0131r.","LifeFlow est\u00e1 previsto para iPhone / iOS.","LifeFlow est pr\u00e9vu pour iPhone / iOS.","LifeFlow \u00e8 previsto per iPhone / iOS.","LifeFlow este destinat pentru iPhone / iOS.","LifeFlow \u9762\u5411 iPhone / iOS\u3002"]],["lifeflow.contact.title",["Fragen zu LifeFlow?","Questions about LifeFlow?","LifeFlow hakk\u0131nda sorular\u0131n\u0131z m\u0131 var?","\u00bfPreguntas sobre LifeFlow?","Des questions sur LifeFlow ?","Domande su LifeFlow?","\u00centreb\u0103ri despre LifeFlow?","\u5bf9 LifeFlow \u6709\u7591\u95ee\uff1f"]],["lifeflow.contact.text",["Schreib uns direkt.","Write to us directly.","Bize do\u011frudan yaz\u0131n.","Escr\u00edbenos directamente.","\u00c9crivez-nous directement.","Scrivici direttamente.","Scrie-ne direct.","\u76f4\u63a5\u8054\u7cfb\u6211\u4eec\u3002"]],["lifeflow.contact.question",["Frage zu LifeFlow","Question about LifeFlow","LifeFlow hakk\u0131nda soru","Pregunta sobre LifeFlow","Question sur LifeFlow","Domanda su LifeFlow","\u00centrebare despre LifeFlow","\u5173\u4e8e LifeFlow \u7684\u95ee\u9898"]],["lifeflow.contact.messagePlaceholder",["Deine Frage zu LifeFlow \u2026","Your question about LifeFlow \u2026","LifeFlow hakk\u0131ndaki sorunuz \u2026","Tu pregunta sobre LifeFlow \u2026","Votre question sur LifeFlow \u2026","La tua domanda su LifeFlow \u2026","\u00centrebarea ta despre LifeFlow \u2026","\u4f60\u5173\u4e8e LifeFlow \u7684\u95ee\u9898\u2026"]],["lifeflow.footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","R\u00e9tractation","Recesso","Retragere","\u64a4\u9500"]],["pilot.header.chip",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.hero.kicker",["CONTROLLED REAL-WORLD ENTRY","CONTROLLED REAL-WORLD ENTRY","KONTROLL\u00dc GER\u00c7EK D\u00dcNYA G\u0130R\u0130\u015e\u0130","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTR\u00c9E CONTR\u00d4L\u00c9E DANS LE R\u00c9EL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLAT\u0102 \u00ceN LUMEA REAL\u0102","\u53d7\u63a7\u7684\u73b0\u5b9e\u4e16\u754c\u5207\u5165"]],["pilot.hero.title",["ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT","ZAL\u2019THERA PILOT"]],["pilot.hero.lead",["Start small. Test reality. Prove value.","Start small. Test reality. Prove value.","K\u00fc\u00e7\u00fck ba\u015fla. Ger\u00e7e\u011fi test et. De\u011feri kan\u0131tla.","Empieza peque\u00f1o. Prueba la realidad. Demuestra valor.","Commencez petit. Testez le r\u00e9el. Prouvez la valeur.","Inizia in piccolo. Testa la realt\u00e0. Dimostra il valore.","\u00cencepe mic. Testeaz\u0103 realitatea. Dovede\u0219te valoarea.","\u4ece\u5c0f\u5904\u5f00\u59cb\u3002\u6d4b\u8bd5\u73b0\u5b9e\u3002\u8bc1\u660e\u4ef7\u503c\u3002"]],["pilot.hero.understand",["Pilot verstehen","Understand Pilot","Pilot\u2019u anla","Entender Pilot","Comprendre Pilot","Comprendi Pilot","\u00cen\u021belege Pilot","\u4e86\u89e3 Pilot"]],["pilot.hero.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicit\u0103 Pilot","\u7533\u8bf7 Pilot"]],["pilot.hero.scoped",["SCOPED","SCOPED","SINIRLI","DELIMITADO","D\u00c9LIMIT\u00c9","DELIMITATO","DELIMITAT","\u8303\u56f4\u660e\u786e"]],["pilot.hero.controlled",["CONTROLLED","CONTROLLED","KONTROLL\u00dc","CONTROLADO","CONTR\u00d4L\u00c9","CONTROLLATO","CONTROLAT","\u53d7\u63a7"]],["pilot.hero.measurable",["MEASURABLE","MEASURABLE","\u00d6L\u00c7\u00dcLEB\u0130L\u0130R","MEDIBLE","MESURABLE","MISURABILE","M\u0102SURABIL","\u53ef\u8861\u91cf"]],["pilot.hero.reviewable",["REVIEWABLE","REVIEWABLE","\u0130NCELENEB\u0130L\u0130R","REVISABLE","R\u00c9EXAMINABLE","REVISIONABILE","REVIZUIBIL","\u53ef\u8bc4\u5ba1"]],["pilot.state.label",["PILOT STATE","PILOT STATE","P\u0130LOT DURUMU","ESTADO DEL PILOT","\u00c9TAT DU PILOT","STATO DEL PILOT","STAREA PILOTULUI","Pilot \u72b6\u6001"]],["pilot.state.realProcess",["REAL PROCESS","REAL PROCESS","GER\u00c7EK S\u00dcRE\u00c7","PROCESO REAL","PROCESSUS R\u00c9EL","PROCESSO REALE","PROCES REAL","\u73b0\u5b9e\u6d41\u7a0b"]],["pilot.state.scope",["SCOPE","SCOPE","KAPSAM","ALCANCE","P\u00c9RIM\u00c8TRE","AMBITO","SCOP","\u8303\u56f4"]],["pilot.state.defined",["DEFINED","DEFINED","TANIMLI","DEFINIDO","D\u00c9FINI","DEFINITO","DEFINIT","\u5df2\u5b9a\u4e49"]],["pilot.state.model",["MODEL","MODEL","MODEL","MODELO","MOD\u00c8LE","MODELLO","MODEL","\u6a21\u578b"]],["pilot.state.prepared",["PREPARED","PREPARED","HAZIR","PREPARADO","PR\u00c9PAR\u00c9","PREPARATO","PREG\u0102TIT","\u5df2\u51c6\u5907"]],["pilot.state.test",["TEST","TEST","TEST","PRUEBA","TEST","TEST","TEST","\u6d4b\u8bd5"]],["pilot.state.controlled",["CONTROLLED","CONTROLLED","KONTROLL\u00dc","CONTROLADO","CONTR\u00d4L\u00c9","CONTROLLATO","CONTROLAT","\u53d7\u63a7"]],["pilot.state.result",["RESULT","RESULT","SONU\u00c7","RESULTADO","R\u00c9SULTAT","RISULTATO","REZULTAT","\u7ed3\u679c"]],["pilot.state.measured",["MEASURED","MEASURED","\u00d6L\u00c7\u00dcLD\u00dc","MEDIDO","MESUR\u00c9","MISURATO","M\u0102SURAT","\u5df2\u8861\u91cf"]],["pilot.state.decision",["DECISION","DECISION","KARAR","DECISI\u00d3N","D\u00c9CISION","DECISIONE","DECIZIE","\u51b3\u7b56"]],["pilot.state.reviewed",["REVIEWED","REVIEWED","\u0130NCELEND\u0130","REVISADA","EXAMIN\u00c9E","REVISIONATA","REVIZUIT\u0102","\u5df2\u8bc4\u5ba1"]],["pilot.focus.eyebrow",["PILOT FOCUS","PILOT FOCUS","P\u0130LOT ODA\u011eI","ENFOQUE DEL PILOT","FOCUS DU PILOT","FOCUS DEL PILOT","FOCUS PILOT","Pilot \u805a\u7126"]],["pilot.focus.title",["Nicht das ganze Unternehmen muss sich \u00e4ndern.","The whole company does not have to change.","T\u00fcm \u015firketin de\u011fi\u015fmesi gerekmez.","No tiene que cambiar toda la empresa.","Toute l\u2019entreprise n\u2019a pas besoin de changer.","Non deve cambiare tutta l\u2019azienda.","Nu trebuie s\u0103 se schimbe \u00eentreaga companie.","\u4e0d\u9700\u8981\u6574\u4e2a\u4f01\u4e1a\u90fd\u6539\u53d8\u3002"]],["pilot.focus.lead",["Ein Pilot begrenzt das Problem, den Prozess und die Messung des tats\u00e4chlichen Nutzens.","A pilot limits the problem, process and measurement of actual value.","Pilot; problemi, s\u00fcreci ve ger\u00e7ek faydan\u0131n \u00f6l\u00e7\u00fcm\u00fcn\u00fc s\u0131n\u0131rlar.","Un pilot delimita el problema, el proceso y la medici\u00f3n del valor real.","Un pilot d\u00e9limite le probl\u00e8me, le processus et la mesure de la valeur r\u00e9elle.","Un pilot delimita problema, processo e misurazione del valore reale.","Un pilot delimiteaz\u0103 problema, procesul \u0219i m\u0103surarea valorii reale.","Pilot \u4f1a\u9650\u5236\u95ee\u9898\u3001\u6d41\u7a0b\u4ee5\u53ca\u5b9e\u9645\u4ef7\u503c\u7684\u8861\u91cf\u8303\u56f4\u3002"]],["pilot.focus.proof.title",["Proof","Proof","Kan\u0131t","Prueba","Preuve","Prova","Dovad\u0103","\u8bc1\u660e"]],["pilot.focus.proof.text",["Was muss sp\u00e4ter nachvollziehbar oder \u00fcberpr\u00fcfbar sein?","What must later be traceable or verifiable?","Daha sonra neyin izlenebilir veya do\u011frulanabilir olmas\u0131 gerekir?","\u00bfQu\u00e9 debe poder rastrearse o verificarse despu\u00e9s?","Qu\u2019est-ce qui doit \u00eatre tra\u00e7able ou v\u00e9rifiable ensuite ?","Cosa deve essere tracciabile o verificabile in seguito?","Ce trebuie s\u0103 poat\u0103 fi trasat sau verificat ulterior?","\u4e4b\u540e\u4ec0\u4e48\u5fc5\u987b\u53ef\u8ffd\u6eaf\u6216\u53ef\u9a8c\u8bc1\uff1f"]],["pilot.focus.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","\u4ea4\u63a5"]],["pilot.focus.handover.text",["Wo gehen Informationen, Zust\u00e4nde oder Verantwortung verloren?","Where are information, states or responsibility lost?","Bilgi, durum veya sorumluluk nerede kayboluyor?","\u00bfD\u00f3nde se pierden informaci\u00f3n, estados o responsabilidad?","O\u00f9 se perdent informations, \u00e9tats ou responsabilit\u00e9 ?","Dove si perdono informazioni, stati o responsabilit\u00e0?","Unde se pierd informa\u021bii, st\u0103ri sau responsabilitate?","\u4fe1\u606f\u3001\u72b6\u6001\u6216\u8d23\u4efb\u5728\u54ea\u91cc\u4e22\u5931\uff1f"]],["pilot.focus.control.title",["Control","Control","Kontrol","Control","Contr\u00f4le","Controllo","Control","\u63a7\u5236"]],["pilot.focus.control.text",["Welche Grenzen, Freigaben und Zust\u00e4nde m\u00fcssen sichtbar bleiben?","Which boundaries, approvals and states must remain visible?","Hangi s\u0131n\u0131rlar, onaylar ve durumlar g\u00f6r\u00fcn\u00fcr kalmal\u0131?","\u00bfQu\u00e9 l\u00edmites, aprobaciones y estados deben seguir visibles?","Quelles limites, validations et \u00e9tats doivent rester visibles ?","Quali limiti, approvazioni e stati devono restare visibili?","Ce limite, aprob\u0103ri \u0219i st\u0103ri trebuie s\u0103 r\u0103m\u00e2n\u0103 vizibile?","\u54ea\u4e9b\u8fb9\u754c\u3001\u6279\u51c6\u4e0e\u72b6\u6001\u5fc5\u987b\u4fdd\u6301\u53ef\u89c1\uff1f"]],["pilot.process.eyebrow",["PILOT PROCESS","PILOT PROCESS","P\u0130LOT S\u00dcREC\u0130","PROCESO PILOT","PROCESSUS PILOT","PROCESSO PILOT","PROCES PILOT","Pilot \u6d41\u7a0b"]],["pilot.process.title",["Vom realen Problem zur \u00fcberpr\u00fcfbaren Entscheidung.","From a real problem to a verifiable decision.","Ger\u00e7ek bir problemden do\u011frulanabilir bir karara.","Del problema real a una decisi\u00f3n verificable.","Du probl\u00e8me r\u00e9el \u00e0 une d\u00e9cision v\u00e9rifiable.","Dal problema reale a una decisione verificabile.","De la o problem\u0103 real\u0103 la o decizie verificabil\u0103.","\u4ece\u73b0\u5b9e\u95ee\u9898\u5230\u53ef\u9a8c\u8bc1\u7684\u51b3\u7b56\u3002"]],["pilot.process.lead",["Der Pilot bleibt bewusst begrenzt. Erst wenn der Nutzen sichtbar ist, wird \u00fcber den n\u00e4chsten Schritt entschieden.","The pilot remains deliberately limited. Only when value is visible is the next step decided.","Pilot bilin\u00e7li olarak s\u0131n\u0131rl\u0131 kal\u0131r. De\u011fer g\u00f6r\u00fcn\u00fcr oldu\u011funda sonraki ad\u0131m kararla\u015ft\u0131r\u0131l\u0131r.","El pilot se mantiene deliberadamente limitado. Solo cuando el valor es visible se decide el siguiente paso.","Le pilot reste volontairement limit\u00e9. Le prochain pas n\u2019est d\u00e9cid\u00e9 qu\u2019une fois la valeur visible.","Il pilot resta volutamente limitato. Solo quando il valore \u00e8 visibile si decide il passo successivo.","Pilotul r\u0103m\u00e2ne inten\u021bionat limitat. Abia c\u00e2nd valoarea este vizibil\u0103 se decide pasul urm\u0103tor.","Pilot \u6709\u610f\u8bc6\u5730\u4fdd\u6301\u6709\u9650\u3002\u53ea\u6709\u5f53\u4ef7\u503c\u53ef\u89c1\u65f6\uff0c\u624d\u51b3\u5b9a\u4e0b\u4e00\u6b65\u3002"]],["pilot.process.scope.title",["Scope","Scope","Kapsam","Alcance","P\u00e9rim\u00e8tre","Ambito","Scop","\u8303\u56f4"]],["pilot.process.scope.text",["Ein konkreter Prozess, Bereich oder Anwendungsfall wird abgegrenzt.","A specific process, area or use case is defined.","Belirli bir s\u00fcre\u00e7, alan veya kullan\u0131m senaryosu s\u0131n\u0131rland\u0131r\u0131l\u0131r.","Se delimita un proceso, \u00e1rea o caso de uso concreto.","Un processus, domaine ou cas d\u2019usage pr\u00e9cis est d\u00e9limit\u00e9.","Viene delimitato un processo, un\u2019area o un caso d\u2019uso specifico.","Este delimitat un proces, domeniu sau caz de utilizare concret.","\u660e\u786e\u754c\u5b9a\u4e00\u4e2a\u5177\u4f53\u6d41\u7a0b\u3001\u9886\u57df\u6216\u4f7f\u7528\u573a\u666f\u3002"]],["pilot.process.understand.title",["Understand","Understand","Anla","Comprender","Comprendre","Comprendere","\u00cen\u021belege","\u7406\u89e3"]],["pilot.process.understand.text",["Der bestehende Ablauf und seine relevanten Zust\u00e4nde werden verstanden.","The existing workflow and its relevant states are understood.","Mevcut ak\u0131\u015f ve ilgili durumlar\u0131 anla\u015f\u0131l\u0131r.","Se comprende el flujo existente y sus estados relevantes.","Le flux existant et ses \u00e9tats pertinents sont compris.","Si comprendono il flusso esistente e i suoi stati rilevanti.","Sunt \u00een\u021belese fluxul existent \u0219i st\u0103rile sale relevante.","\u7406\u89e3\u73b0\u6709\u6d41\u7a0b\u53ca\u5176\u76f8\u5173\u72b6\u6001\u3002"]],["pilot.process.model.title",["Model","Model","Model","Modelo","Mod\u00e8le","Modello","Model","\u5efa\u6a21"]],["pilot.process.model.text",["Das ben\u00f6tigte ZAL\u2019THERA-System wird auf den Prozess zugeschnitten.","The required ZAL\u2019THERA system is tailored to the process.","Gerekli ZAL\u2019THERA sistemi s\u00fcrece uyarlan\u0131r.","El sistema ZAL\u2019THERA necesario se adapta al proceso.","Le syst\u00e8me ZAL\u2019THERA n\u00e9cessaire est adapt\u00e9 au processus.","Il sistema ZAL\u2019THERA necessario viene adattato al processo.","Sistemul ZAL\u2019THERA necesar este adaptat procesului.","\u6240\u9700\u7684 ZAL\u2019THERA \u7cfb\u7edf\u6309\u6d41\u7a0b\u8fdb\u884c\u9002\u914d\u3002"]],["pilot.process.pilot.title",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.process.pilot.text",["Das System wird begrenzt im realen Ablauf eingesetzt.","The system is used on a limited basis in the real workflow.","Sistem ger\u00e7ek ak\u0131\u015fta s\u0131n\u0131rl\u0131 olarak kullan\u0131l\u0131r.","El sistema se utiliza de forma limitada en el flujo real.","Le syst\u00e8me est utilis\u00e9 de mani\u00e8re limit\u00e9e dans le flux r\u00e9el.","Il sistema viene usato in modo limitato nel flusso reale.","Sistemul este utilizat limitat \u00een fluxul real.","\u7cfb\u7edf\u5728\u73b0\u5b9e\u6d41\u7a0b\u4e2d\u4ee5\u6709\u9650\u8303\u56f4\u6295\u5165\u4f7f\u7528\u3002"]],["pilot.process.review.title",["Review","Review","\u0130nceleme","Revisi\u00f3n","Revue","Revisione","Revizuire","\u8bc4\u5ba1"]],["pilot.process.review.text",["Nutzen, Grenzen und n\u00e4chster Schritt werden gemeinsam bewertet.","Value, limits and the next step are reviewed together.","Fayda, s\u0131n\u0131rlar ve sonraki ad\u0131m birlikte de\u011ferlendirilir.","Se eval\u00faan conjuntamente el valor, los l\u00edmites y el siguiente paso.","La valeur, les limites et l\u2019\u00e9tape suivante sont \u00e9valu\u00e9es ensemble.","Valore, limiti e passo successivo vengono valutati insieme.","Valoarea, limitele \u0219i pasul urm\u0103tor sunt evaluate \u00eempreun\u0103.","\u5171\u540c\u8bc4\u4f30\u4ef7\u503c\u3001\u8fb9\u754c\u4e0e\u4e0b\u4e00\u6b65\u3002"]],["pilot.modules.eyebrow",["PILOT ENTRY POINTS","PILOT ENTRY POINTS","P\u0130LOT G\u0130R\u0130\u015e NOKTALARI","PUNTOS DE ENTRADA DEL PILOT","POINTS D\u2019ENTR\u00c9E DU PILOT","PUNTI DI INGRESSO DEL PILOT","PUNCTE DE INTRARE PILOT","Pilot \u5165\u53e3"]],["pilot.modules.title",["Unterschiedliche Probleme. Gemeinsamer Systemkern.","Different problems. One shared system core.","Farkl\u0131 problemler. Ortak sistem \u00e7ekirde\u011fi.","Problemas distintos. Un n\u00facleo de sistema com\u00fan.","Des probl\u00e8mes diff\u00e9rents. Un noyau syst\u00e8me commun.","Problemi diversi. Un core di sistema comune.","Probleme diferite. Un nucleu de sistem comun.","\u4e0d\u540c\u95ee\u9898\uff0c\u5171\u540c\u7684\u7cfb\u7edf\u6838\u5fc3\u3002"]],["pilot.modules.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVAD\u0102","\u8bc1\u660e"]],["pilot.modules.proofflow",["Evidence \u00b7 Audit \u00b7 Signature \u00b7 Export","Evidence \u00b7 Audit \u00b7 Signature \u00b7 Export","Kan\u0131t \u00b7 Denetim \u00b7 \u0130mza \u00b7 D\u0131\u015fa Aktarma","Prueba \u00b7 Auditor\u00eda \u00b7 Firma \u00b7 Exportaci\u00f3n","Preuve \u00b7 Audit \u00b7 Signature \u00b7 Export","Prova \u00b7 Audit \u00b7 Firma \u00b7 Esportazione","Dovad\u0103 \u00b7 Audit \u00b7 Semn\u0103tur\u0103 \u00b7 Export","\u8bc1\u660e \u00b7 \u5ba1\u8ba1 \u00b7 \u7b7e\u540d \u00b7 \u5bfc\u51fa"]],["pilot.modules.industry",["INDUSTRY","INDUSTRY","END\u00dcSTR\u0130","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","\u5de5\u4e1a"]],["pilot.modules.shiftlog",["Handover \u00b7 State \u00b7 Responsibility","Handover \u00b7 State \u00b7 Responsibility","Devir \u00b7 Durum \u00b7 Sorumluluk","Relevo \u00b7 Estado \u00b7 Responsabilidad","Transmission \u00b7 \u00c9tat \u00b7 Responsabilit\u00e9","Passaggio \u00b7 Stato \u00b7 Responsabilit\u00e0","Predare \u00b7 Stare \u00b7 Responsabilitate","\u4ea4\u63a5 \u00b7 \u72b6\u6001 \u00b7 \u8d23\u4efb"]],["pilot.modules.trust",["TRUST","TRUST","G\u00dcVEN","CONFIANZA","CONFIANCE","FIDUCIA","\u00ceNCREDERE","\u4fe1\u4efb"]],["pilot.modules.ledger",["Events \u00b7 Traceability \u00b7 Verification","Events \u00b7 Traceability \u00b7 Verification","Olaylar \u00b7 \u0130zlenebilirlik \u00b7 Do\u011frulama","Eventos \u00b7 Trazabilidad \u00b7 Verificaci\u00f3n","\u00c9v\u00e9nements \u00b7 Tra\u00e7abilit\u00e9 \u00b7 V\u00e9rification","Eventi \u00b7 Tracciabilit\u00e0 \u00b7 Verifica","Evenimente \u00b7 Trasabilitate \u00b7 Verificare","\u4e8b\u4ef6 \u00b7 \u53ef\u8ffd\u6eaf\u6027 \u00b7 \u9a8c\u8bc1"]],["pilot.modules.architecture",["ARCHITECTURE","ARCHITECTURE","M\u0130MAR\u0130","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTUR\u0102","\u67b6\u6784"]],["pilot.modules.industryText",["Process \u00b7 Data \u00b7 Sensors \u00b7 Future Integration","Process \u00b7 Data \u00b7 Sensors \u00b7 Future Integration","S\u00fcre\u00e7 \u00b7 Veri \u00b7 Sens\u00f6rler \u00b7 Gelecek Entegrasyonu","Proceso \u00b7 Datos \u00b7 Sensores \u00b7 Integraci\u00f3n futura","Processus \u00b7 Donn\u00e9es \u00b7 Capteurs \u00b7 Int\u00e9gration future","Processo \u00b7 Dati \u00b7 Sensori \u00b7 Integrazione futura","Proces \u00b7 Date \u00b7 Senzori \u00b7 Integrare viitoare","\u6d41\u7a0b \u00b7 \u6570\u636e \u00b7 \u4f20\u611f\u5668 \u00b7 \u672a\u6765\u96c6\u6210"]],["pilot.principle.eyebrow",["CONTROLLED ENTRY","CONTROLLED ENTRY","KONTROLL\u00dc G\u0130R\u0130\u015e","ENTRADA CONTROLADA","ENTR\u00c9E CONTR\u00d4L\u00c9E","INGRESSO CONTROLLATO","INTRARE CONTROLAT\u0102","\u53d7\u63a7\u5207\u5165"]],["pilot.principle.title",["A pilot should reduce uncertainty, not create dependency.","A pilot should reduce uncertainty, not create dependency.","Pilot belirsizli\u011fi azaltmal\u0131, ba\u011f\u0131ml\u0131l\u0131k yaratmamal\u0131.","Un pilot debe reducir la incertidumbre, no crear dependencia.","Un pilot doit r\u00e9duire l\u2019incertitude, pas cr\u00e9er de d\u00e9pendance.","Un pilot deve ridurre l\u2019incertezza, non creare dipendenza.","Un pilot ar trebui s\u0103 reduc\u0103 incertitudinea, nu s\u0103 creeze dependen\u021b\u0103.","Pilot \u5e94\u51cf\u5c11\u4e0d\u786e\u5b9a\u6027\uff0c\u800c\u4e0d\u662f\u5236\u9020\u4f9d\u8d56\u3002"]],["pilot.principle.text",["Der Pilot dient nicht dazu, einen bestehenden Prozess blind zu ersetzen. Er soll zeigen, ob ein klar definiertes Systemproblem tats\u00e4chlich besser gel\u00f6st werden kann.","The pilot is not intended to blindly replace an existing process. It should show whether a clearly defined system problem can actually be solved better.","Pilot mevcut bir s\u00fcreci k\u00f6r\u00fc k\u00f6r\u00fcne de\u011fi\u015ftirmek i\u00e7in de\u011fildir. A\u00e7\u0131k\u00e7a tan\u0131mlanm\u0131\u015f bir sistem probleminin ger\u00e7ekten daha iyi \u00e7\u00f6z\u00fcl\u00fcp \u00e7\u00f6z\u00fclemeyece\u011fini g\u00f6stermelidir.","El pilot no pretende sustituir a ciegas un proceso existente. Debe mostrar si un problema de sistema claramente definido puede resolverse mejor.","Le pilot n\u2019a pas pour but de remplacer aveugl\u00e9ment un processus existant. Il doit montrer si un probl\u00e8me syst\u00e8me clairement d\u00e9fini peut r\u00e9ellement \u00eatre mieux r\u00e9solu.","Il pilot non serve a sostituire ciecamente un processo esistente. Deve mostrare se un problema di sistema chiaramente definito pu\u00f2 davvero essere risolto meglio.","Pilotul nu are rolul de a \u00eenlocui orbe\u0219te un proces existent. Trebuie s\u0103 arate dac\u0103 o problem\u0103 de sistem clar definit\u0103 poate fi rezolvat\u0103 mai bine.","Pilot \u4e0d\u662f\u4e3a\u4e86\u76f2\u76ee\u66ff\u6362\u73b0\u6709\u6d41\u7a0b\uff0c\u800c\u662f\u8981\u8bc1\u660e\u4e00\u4e2a\u6e05\u6670\u5b9a\u4e49\u7684\u7cfb\u7edf\u95ee\u9898\u662f\u5426\u771f\u7684\u80fd\u591f\u88ab\u66f4\u597d\u5730\u89e3\u51b3\u3002"]],["pilot.principle.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicit\u0103 Pilot","\u7533\u8bf7 Pilot"]],["pilot.contact.title",["Pilotprojekt anfragen","Request a pilot project","Pilot projesi talep et","Solicitar proyecto pilot","Demander un projet pilot","Richiedi un progetto pilot","Solicit\u0103 un proiect pilot","\u7533\u8bf7 Pilot \u9879\u76ee"]],["pilot.contact.text",["Beschreibe kurz den realen Prozess oder das Problem, das kontrolliert getestet werden soll.","Briefly describe the real process or problem to be tested in a controlled way.","Kontroll\u00fc olarak test edilecek ger\u00e7ek s\u00fcreci veya problemi k\u0131saca a\u00e7\u0131klay\u0131n.","Describe brevemente el proceso real o problema que debe probarse de forma controlada.","D\u00e9crivez bri\u00e8vement le processus r\u00e9el ou le probl\u00e8me \u00e0 tester de mani\u00e8re contr\u00f4l\u00e9e.","Descrivi brevemente il processo reale o il problema da testare in modo controllato.","Descrie pe scurt procesul real sau problema care trebuie testat\u0103 controlat.","\u7b80\u8981\u63cf\u8ff0\u9700\u8981\u4ee5\u53d7\u63a7\u65b9\u5f0f\u6d4b\u8bd5\u7684\u73b0\u5b9e\u6d41\u7a0b\u6216\u95ee\u9898\u3002"]],["pilot.contact.namePlaceholder",["Ihr Name","Your name","Ad\u0131n\u0131z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","\u60a8\u7684\u59d3\u540d"]],["pilot.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["pilot.contact.messagePlaceholder",["Welcher Prozess soll als Pilot getestet werden?","Which process should be tested as a pilot?","Hangi s\u00fcre\u00e7 pilot olarak test edilmeli?","\u00bfQu\u00e9 proceso deber\u00eda probarse como pilot?","Quel processus doit \u00eatre test\u00e9 en pilot ?","Quale processo dovrebbe essere testato come pilot?","Ce proces ar trebui testat ca pilot?","\u54ea\u4e2a\u6d41\u7a0b\u5e94\u4f5c\u4e3a Pilot \u8fdb\u884c\u6d4b\u8bd5\uff1f"]],["pilot.contact.send",["Anfrage senden","Send request","Talep g\u00f6nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","\u53d1\u9001\u7533\u8bf7"]],["pilot.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","G\u00f6ndererek \u015funu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accepta\u021bi","\u63d0\u4ea4\u5373\u8868\u793a\u60a8\u63a5\u53d7\u6211\u4eec\u7684"]],["proofflow.header.pilot",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["proofflow.hero.kicker",["PROOF \u00b7 AUDIT \u00b7 TRACEABILITY","PROOF \u00b7 AUDIT \u00b7 TRACEABILITY","KANIT \u00b7 DENET\u0130M \u00b7 \u0130ZLENEB\u0130L\u0130RL\u0130K","PRUEBA \u00b7 AUDITOR\u00cdA \u00b7 TRAZABILIDAD","PREUVE \u00b7 AUDIT \u00b7 TRA\u00c7ABILIT\u00c9","PROVA \u00b7 AUDIT \u00b7 TRACCIABILIT\u00c0","DOVAD\u0102 \u00b7 AUDIT \u00b7 TRASABILITATE","\u8bc1\u660e \u00b7 \u5ba1\u8ba1 \u00b7 \u53ef\u8ffd\u6eaf\u6027"]],["proofflow.hero.title",["Evidence before<br>assumption.","Evidence before<br>assumption.","Varsay\u0131mdan \u00f6nce<br>kan\u0131t.","Prueba antes que<br>suposici\u00f3n.","La preuve avant<br>l\u2019hypoth\u00e8se.","La prova prima<br>dell\u2019ipotesi.","Dovada \u00eenaintea<br>presupunerii.","\u5148\u6709\u8bc1\u636e\uff0c<br>\u518d\u4f5c\u5224\u65ad\u3002"]],["proofflow.hero.lead",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow g\u00f6revleri, kan\u0131tlar\u0131, foto\u011fraflar\u0131, notlar\u0131, imzalar\u0131, denetimi ve d\u0131\u015fa aktarmay\u0131 izlenebilir bir ak\u0131\u015fta birle\u015ftirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditor\u00eda y exportaci\u00f3n en un flujo trazable.","ProofFlow relie t\u00e2ches, preuves, photos, notes, signatures, audit et export dans un flux tra\u00e7able.","ProofFlow collega attivit\u00e0, prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conecteaz\u0103 sarcini, dovezi, fotografii, note, semn\u0103turi, audit \u0219i export \u00eentr-un flux trasabil.","ProofFlow \u5c06\u4efb\u52a1\u3001\u8bc1\u660e\u3001\u7167\u7247\u3001\u5907\u6ce8\u3001\u7b7e\u540d\u3001\u5ba1\u8ba1\u4e0e\u5bfc\u51fa\u8fde\u63a5\u6210\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u3002"]],["proofflow.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le syst\u00e8me","Comprendi il sistema","\u00cen\u021belege sistemul","\u7406\u89e3\u7cfb\u7edf"]],["proofflow.hero.requestPilot",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicit\u0103 Pilot","\u7533\u8bf7 Pilot"]],["proofflow.hero.provenance",["PROVENANCE","PROVENANCE","KAYNAK","PROCEDENCIA","PROVENANCE","PROVENIENZA","PROVENIEN\u021a\u0102","\u6765\u6e90"]],["proofflow.hero.identity",["IDENTITY","IDENTITY","K\u0130ML\u0130K","IDENTIDAD","IDENTIT\u00c9","IDENTIT\u00c0","IDENTITATE","\u8eab\u4efd"]],["proofflow.hero.audit",["AUDIT","AUDIT","DENET\u0130M","AUDITOR\u00cdA","AUDIT","AUDIT","AUDIT","\u5ba1\u8ba1"]],["proofflow.hero.export",["EXPORT","EXPORT","DI\u015eA AKTARMA","EXPORTACI\u00d3N","EXPORT","ESPORTAZIONE","EXPORT","\u5bfc\u51fa"]],["proofflow.state.label",["PROOF FLOW","PROOF FLOW","KANIT AKI\u015eI","FLUJO DE PRUEBA","FLUX DE PREUVE","FLUSSO DI PROVA","FLUX DE DOVAD\u0102","\u8bc1\u660e\u6d41\u7a0b"]],["proofflow.state.job",["JOB","JOB","\u0130\u015e","TRABAJO","T\u00c2CHE","ATTIVIT\u00c0","SARCIN\u0102","\u4efb\u52a1"]],["proofflow.state.context",["CONTEXT","CONTEXT","BA\u011eLAM","CONTEXTO","CONTEXTE","CONTESTO","CONTEXT","\u4e0a\u4e0b\u6587"]],["proofflow.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVAD\u0102","\u8bc1\u660e"]],["proofflow.state.capture",["CAPTURE","CAPTURE","YAKALAMA","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTUR\u0102","\u91c7\u96c6"]],["proofflow.state.sign",["SIGN","SIGN","\u0130MZA","FIRMA","SIGNER","FIRMA","SEMNARE","\u7b7e\u540d"]],["proofflow.state.identity",["IDENTITY","IDENTITY","K\u0130ML\u0130K","IDENTIDAD","IDENTIT\u00c9","IDENTIT\u00c0","IDENTITATE","\u8eab\u4efd"]],["proofflow.state.audit",["AUDIT","AUDIT","DENET\u0130M","AUDITOR\u00cdA","AUDIT","AUDIT","AUDIT","\u5ba1\u8ba1"]],["proofflow.state.trace",["TRACE","TRACE","\u0130Z","TRAZA","TRACE","TRACCIA","URM\u0102","\u8ffd\u8e2a"]],["proofflow.state.export",["EXPORT","EXPORT","DI\u015eA AKTARMA","EXPORTACI\u00d3N","EXPORT","ESPORTAZIONE","EXPORT","\u5bfc\u51fa"]],["proofflow.state.output",["OUTPUT","OUTPUT","\u00c7IKTI","SALIDA","SORTIE","OUTPUT","IE\u0218IRE","\u8f93\u51fa"]],["proofflow.problem.eyebrow",["THE PROBLEM","THE PROBLEM","PROBLEM","EL PROBLEMA","LE PROBL\u00c8ME","IL PROBLEMA","PROBLEMA","\u95ee\u9898"]],["proofflow.problem.title",["Erinnerung ist kein Nachweis.","Memory is not evidence.","Hat\u0131ra kan\u0131t de\u011fildir.","La memoria no es una prueba.","La m\u00e9moire n\u2019est pas une preuve.","La memoria non \u00e8 una prova.","Memoria nu este dovad\u0103.","\u8bb0\u5fc6\u4e0d\u662f\u8bc1\u636e\u3002"]],["proofflow.problem.lead",["Wenn Vorf\u00e4lle, Ma\u00dfnahmen und Entscheidungen nicht strukturiert dokumentiert werden, entstehen sp\u00e4ter Interpretationen statt \u00fcberpr\u00fcfbarer Abl\u00e4ufe.","When incidents, actions and decisions are not documented in a structured way, later interpretations replace verifiable workflows.","Olaylar, \u00f6nlemler ve kararlar yap\u0131land\u0131r\u0131lm\u0131\u015f bi\u00e7imde belgelenmezse daha sonra do\u011frulanabilir ak\u0131\u015flar yerine yorumlar olu\u015fur.","Si incidentes, medidas y decisiones no se documentan de forma estructurada, despu\u00e9s surgen interpretaciones en vez de procesos verificables.","Si incidents, mesures et d\u00e9cisions ne sont pas document\u00e9s de fa\u00e7on structur\u00e9e, des interpr\u00e9tations remplacent ensuite les processus v\u00e9rifiables.","Se eventi, misure e decisioni non vengono documentati in modo strutturato, in seguito emergono interpretazioni invece di processi verificabili.","Dac\u0103 incidentele, m\u0103surile \u0219i deciziile nu sunt documentate structurat, ulterior apar interpret\u0103ri \u00een locul fluxurilor verificabile.","\u5982\u679c\u4e8b\u4ef6\u3001\u63aa\u65bd\u4e0e\u51b3\u7b56\u6ca1\u6709\u7ed3\u6784\u5316\u8bb0\u5f55\uff0c\u4e4b\u540e\u5c31\u4f1a\u51fa\u73b0\u89e3\u91ca\u800c\u4e0d\u662f\u53ef\u9a8c\u8bc1\u6d41\u7a0b\u3002"]],["proofflow.problem.process.title",["Unklarer Ablauf","Unclear workflow","Belirsiz ak\u0131\u015f","Flujo poco claro","Processus flou","Flusso poco chiaro","Flux neclar","\u6d41\u7a0b\u4e0d\u6e05"]],["proofflow.problem.process.text",["Was ist tats\u00e4chlich passiert und in welcher Reihenfolge?","What actually happened and in what order?","Ger\u00e7ekte ne oldu ve hangi s\u0131rayla?","\u00bfQu\u00e9 ocurri\u00f3 realmente y en qu\u00e9 orden?","Que s\u2019est-il r\u00e9ellement pass\u00e9 et dans quel ordre ?","Cosa \u00e8 successo davvero e in quale ordine?","Ce s-a \u00eent\u00e2mplat de fapt \u0219i \u00een ce ordine?","\u5b9e\u9645\u53d1\u751f\u4e86\u4ec0\u4e48\uff0c\u987a\u5e8f\u5982\u4f55\uff1f"]],["proofflow.problem.responsibility.title",["Unklare Verantwortung","Unclear responsibility","Belirsiz sorumluluk","Responsabilidad poco clara","Responsabilit\u00e9 floue","Responsabilit\u00e0 poco chiara","Responsabilitate neclar\u0103","\u8d23\u4efb\u4e0d\u6e05"]],["proofflow.problem.responsibility.text",["Wer hat wann gehandelt, best\u00e4tigt oder entschieden?","Who acted, confirmed or decided, and when?","Kim ne zaman hareket etti, onaylad\u0131 veya karar verdi?","\u00bfQui\u00e9n actu\u00f3, confirm\u00f3 o decidi\u00f3 y cu\u00e1ndo?","Qui a agi, confirm\u00e9 ou d\u00e9cid\u00e9, et quand ?","Chi ha agito, confermato o deciso e quando?","Cine a ac\u021bionat, confirmat sau decis \u0219i c\u00e2nd?","\u8c01\u5728\u4f55\u65f6\u884c\u52a8\u3001\u786e\u8ba4\u6216\u505a\u51fa\u51b3\u5b9a\uff1f"]],["proofflow.problem.evidence.title",["Fehlender Nachweis","Missing evidence","Eksik kan\u0131t","Falta de prueba","Preuve manquante","Prova mancante","Dovad\u0103 lips\u0103","\u7f3a\u5c11\u8bc1\u636e"]],["proofflow.problem.evidence.text",["Ohne belegbare Informationen bleiben sp\u00e4ter Aussagen gegeneinander stehen.","Without verifiable information, later statements remain opposed to one another.","Do\u011frulanabilir bilgi olmadan daha sonra ifadeler kar\u015f\u0131 kar\u015f\u0131ya kal\u0131r.","Sin informaci\u00f3n verificable, despu\u00e9s quedan afirmaciones enfrentadas.","Sans information v\u00e9rifiable, les d\u00e9clarations restent ensuite oppos\u00e9es.","Senza informazioni verificabili, in seguito restano dichiarazioni contrapposte.","F\u0103r\u0103 informa\u021bii verificabile, ulterior r\u0103m\u00e2n afirma\u021bii opuse.","\u6ca1\u6709\u53ef\u9a8c\u8bc1\u4fe1\u606f\uff0c\u4e4b\u540e\u53ea\u5269\u76f8\u4e92\u5bf9\u7acb\u7684\u8bf4\u6cd5\u3002"]],["proofflow.system.eyebrow",["PROOF SYSTEM","PROOF SYSTEM","KANIT S\u0130STEM\u0130","SISTEMA DE PRUEBA","SYST\u00c8ME DE PREUVE","SISTEMA DI PROVA","SISTEM DE DOVAD\u0102","\u8bc1\u660e\u7cfb\u7edf"]],["proofflow.system.title",["Ein nachvollziehbarer Ablauf statt isolierter Dateien.","A traceable workflow instead of isolated files.","Yal\u0131t\u0131lm\u0131\u015f dosyalar yerine izlenebilir bir ak\u0131\u015f.","Un flujo trazable en vez de archivos aislados.","Un flux tra\u00e7able plut\u00f4t que des fichiers isol\u00e9s.","Un flusso tracciabile invece di file isolati.","Un flux trasabil \u00een locul fi\u0219ierelor izolate.","\u7528\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u66ff\u4ee3\u5b64\u7acb\u6587\u4ef6\u3002"]],["proofflow.system.lead",["ProofFlow strukturiert den Weg von einem Vorgang bis zu einem \u00fcberpr\u00fcfbaren Ergebnis.","ProofFlow structures the path from an event to a verifiable result.","ProofFlow bir olaydan do\u011frulanabilir sonuca giden yolu yap\u0131land\u0131r\u0131r.","ProofFlow estructura el camino desde un proceso hasta un resultado verificable.","ProofFlow structure le chemin d\u2019un \u00e9v\u00e9nement jusqu\u2019\u00e0 un r\u00e9sultat v\u00e9rifiable.","ProofFlow struttura il percorso da un evento a un risultato verificabile.","ProofFlow structureaz\u0103 drumul de la un eveniment la un rezultat verificabil.","ProofFlow \u5c06\u4e00\u4e2a\u4e8b\u4ef6\u5230\u53ef\u9a8c\u8bc1\u7ed3\u679c\u7684\u8def\u5f84\u7ed3\u6784\u5316\u3002"]],["proofflow.system.job.title",["Job","Job","\u0130\u015f","Trabajo","T\u00e2che","Attivit\u00e0","Sarcin\u0103","\u4efb\u52a1"]],["proofflow.system.job.text",["Der Vorgang erh\u00e4lt einen klaren Kontext und Ausgangspunkt.","The event receives a clear context and starting point.","Olay a\u00e7\u0131k bir ba\u011flam ve ba\u015flang\u0131\u00e7 noktas\u0131 kazan\u0131r.","El proceso recibe un contexto y punto de partida claros.","L\u2019\u00e9v\u00e9nement re\u00e7oit un contexte et un point de d\u00e9part clairs.","L\u2019evento riceve un contesto e un punto di partenza chiari.","Evenimentul prime\u0219te un context \u0219i un punct de pornire clar.","\u4e8b\u4ef6\u83b7\u5f97\u6e05\u6670\u7684\u4e0a\u4e0b\u6587\u4e0e\u8d77\u70b9\u3002"]],["proofflow.system.proof.title",["Proof","Proof","Kan\u0131t","Prueba","Preuve","Prova","Dovad\u0103","\u8bc1\u660e"]],["proofflow.system.proof.text",["Relevante Nachweise werden dem Vorgang zugeordnet.","Relevant evidence is assigned to the event.","\u0130lgili kan\u0131tlar olaya atan\u0131r.","Las pruebas relevantes se asignan al proceso.","Les preuves pertinentes sont rattach\u00e9es \u00e0 l\u2019\u00e9v\u00e9nement.","Le prove rilevanti vengono associate all\u2019evento.","Dovezile relevante sunt asociate evenimentului.","\u76f8\u5173\u8bc1\u660e\u88ab\u5173\u8054\u5230\u8be5\u4e8b\u4ef6\u3002"]],["proofflow.system.sign.title",["Sign","Sign","\u0130mza","Firma","Signer","Firma","Semnare","\u7b7e\u540d"]],["proofflow.system.sign.text",["Best\u00e4tigung oder Signatur wird mit Identit\u00e4t verbunden.","Confirmation or signature is linked to identity.","Onay veya imza kimlikle ba\u011flan\u0131r.","La confirmaci\u00f3n o firma se vincula a la identidad.","La confirmation ou signature est li\u00e9e \u00e0 l\u2019identit\u00e9.","La conferma o firma viene collegata all\u2019identit\u00e0.","Confirmarea sau semn\u0103tura este legat\u0103 de identitate.","\u786e\u8ba4\u6216\u7b7e\u540d\u4e0e\u8eab\u4efd\u5173\u8054\u3002"]],["proofflow.system.audit.title",["Audit","Audit","Denetim","Auditor\u00eda","Audit","Audit","Audit","\u5ba1\u8ba1"]],["proofflow.system.audit.text",["Relevante Zustands\u00e4nderungen bleiben nachvollziehbar.","Relevant state changes remain traceable.","\u0130lgili durum de\u011fi\u015fiklikleri izlenebilir kal\u0131r.","Los cambios de estado relevantes siguen siendo trazables.","Les changements d\u2019\u00e9tat pertinents restent tra\u00e7ables.","I cambiamenti di stato rilevanti restano tracciabili.","Modific\u0103rile relevante de stare r\u0103m\u00e2n trasabile.","\u76f8\u5173\u72b6\u6001\u53d8\u5316\u4fdd\u6301\u53ef\u8ffd\u6eaf\u3002"]],["proofflow.system.export.title",["Export","Export","D\u0131\u015fa Aktarma","Exportaci\u00f3n","Export","Esportazione","Export","\u5bfc\u51fa"]],["proofflow.system.export.text",["Der dokumentierte Ablauf kann strukturiert ausgegeben werden.","The documented workflow can be exported in a structured way.","Belgelenen ak\u0131\u015f yap\u0131land\u0131r\u0131lm\u0131\u015f bi\u00e7imde d\u0131\u015fa aktar\u0131labilir.","El flujo documentado puede exportarse de forma estructurada.","Le flux document\u00e9 peut \u00eatre export\u00e9 de mani\u00e8re structur\u00e9e.","Il flusso documentato pu\u00f2 essere esportato in modo strutturato.","Fluxul documentat poate fi exportat structurat.","\u8bb0\u5f55\u7684\u6d41\u7a0b\u53ef\u4ee5\u7ed3\u6784\u5316\u5bfc\u51fa\u3002"]],["proofflow.trust.eyebrow",["PROOF & TRUST","PROOF & TRUST","KANIT & G\u00dcVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVAD\u0102 & \u00ceNCREDERE","\u8bc1\u660e\u4e0e\u4fe1\u4efb"]],["proofflow.trust.title",["Ein Nachweis ist mehr als ein Foto.","Evidence is more than a photo.","Kan\u0131t bir foto\u011fraftan fazlas\u0131d\u0131r.","Una prueba es m\u00e1s que una foto.","Une preuve est plus qu\u2019une photo.","Una prova \u00e8 pi\u00f9 di una foto.","O dovad\u0103 este mai mult dec\u00e2t o fotografie.","\u8bc1\u660e\u4e0d\u53ea\u662f\u4e00\u5f20\u7167\u7247\u3002"]],["proofflow.trust.lead",["Entscheidend ist der Zusammenhang zwischen Herkunft, Zeitpunkt, Identit\u00e4t und Prozess.","What matters is the relationship between provenance, time, identity and process.","\u00d6nemli olan kaynak, zaman, kimlik ve s\u00fcre\u00e7 aras\u0131ndaki ili\u015fkidir.","Lo decisivo es la relaci\u00f3n entre procedencia, tiempo, identidad y proceso.","L\u2019essentiel est la relation entre provenance, temps, identit\u00e9 et processus.","Conta il rapporto tra provenienza, tempo, identit\u00e0 e processo.","Conteaz\u0103 rela\u021bia dintre provenien\u021b\u0103, timp, identitate \u0219i proces.","\u5173\u952e\u662f\u6765\u6e90\u3001\u65f6\u95f4\u3001\u8eab\u4efd\u4e0e\u6d41\u7a0b\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"]],["proofflow.trust.context.title",["Context","Context","Ba\u011flam","Contexto","Contexte","Contesto","Context","\u4e0a\u4e0b\u6587"]],["proofflow.trust.context.text",["Zu welchem Vorgang geh\u00f6rt der Nachweis?","Which event does the evidence belong to?","Kan\u0131t hangi olaya ait?","\u00bfA qu\u00e9 proceso pertenece la prueba?","\u00c0 quel \u00e9v\u00e9nement appartient la preuve ?","A quale evento appartiene la prova?","C\u0103rui eveniment \u00eei apar\u021bine dovada?","\u8be5\u8bc1\u660e\u5c5e\u4e8e\u54ea\u4e2a\u4e8b\u4ef6\uff1f"]],["proofflow.trust.identity.title",["Identity","Identity","Kimlik","Identidad","Identit\u00e9","Identit\u00e0","Identitate","\u8eab\u4efd"]],["proofflow.trust.identity.text",["Wer hat dokumentiert, best\u00e4tigt oder gehandelt?","Who documented, confirmed or acted?","Kim belgeledi, onaylad\u0131 veya hareket etti?","\u00bfQui\u00e9n document\u00f3, confirm\u00f3 o actu\u00f3?","Qui a document\u00e9, confirm\u00e9 ou agi ?","Chi ha documentato, confermato o agito?","Cine a documentat, confirmat sau ac\u021bionat?","\u8c01\u8fdb\u884c\u4e86\u8bb0\u5f55\u3001\u786e\u8ba4\u6216\u64cd\u4f5c\uff1f"]],["proofflow.trust.time.title",["Time","Time","Zaman","Tiempo","Temps","Tempo","Timp","\u65f6\u95f4"]],["proofflow.trust.time.text",["Wann entstand der relevante Zustand oder Nachweis?","When did the relevant state or evidence arise?","\u0130lgili durum veya kan\u0131t ne zaman olu\u015ftu?","\u00bfCu\u00e1ndo surgi\u00f3 el estado o la prueba relevante?","Quand l\u2019\u00e9tat ou la preuve pertinente est-il apparu ?","Quando \u00e8 nato lo stato o la prova rilevante?","C\u00e2nd a ap\u0103rut starea sau dovada relevant\u0103?","\u76f8\u5173\u72b6\u6001\u6216\u8bc1\u660e\u4f55\u65f6\u4ea7\u751f\uff1f"]],["proofflow.trust.audit.title",["Audit","Audit","Denetim","Auditor\u00eda","Audit","Audit","Audit","\u5ba1\u8ba1"]],["proofflow.trust.audit.text",["Ist die Entwicklung des Vorgangs sp\u00e4ter nachvollziehbar?","Can the development of the event be traced later?","Olay\u0131n geli\u015fimi daha sonra izlenebilir mi?","\u00bfPuede rastrearse despu\u00e9s la evoluci\u00f3n del proceso?","L\u2019\u00e9volution de l\u2019\u00e9v\u00e9nement peut-elle \u00eatre retrac\u00e9e ensuite ?","L\u2019evoluzione dell\u2019evento pu\u00f2 essere ricostruita in seguito?","Poate fi urm\u0103rit\u0103 ulterior evolu\u021bia evenimentului?","\u4e4b\u540e\u80fd\u5426\u8ffd\u6eaf\u8be5\u4e8b\u4ef6\u7684\u53d1\u5c55\u8fc7\u7a0b\uff1f"]],["proofflow.pilot.eyebrow",["PILOT","PILOT","P\u0130LOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.title",["ProofFlow wird an einem realen Prozess gepr\u00fcft.","ProofFlow is tested on a real process.","ProofFlow ger\u00e7ek bir s\u00fcre\u00e7 \u00fczerinde test edilir.","ProofFlow se prueba en un proceso real.","ProofFlow est test\u00e9 sur un processus r\u00e9el.","ProofFlow viene testato su un processo reale.","ProofFlow este testat pe un proces real.","ProofFlow \u5728\u73b0\u5b9e\u6d41\u7a0b\u4e2d\u8fdb\u884c\u6d4b\u8bd5\u3002"]],["proofflow.pilot.text",["F\u00fcr einen Pilot wird ein konkreter Vorgang ausgew\u00e4hlt, strukturiert und mit den ben\u00f6tigten Nachweis- und Audit-Schritten abgebildet.","For a pilot, a concrete event is selected, structured and mapped with the required evidence and audit steps.","Pilot i\u00e7in belirli bir olay se\u00e7ilir, yap\u0131land\u0131r\u0131l\u0131r ve gerekli kan\u0131t ve denetim ad\u0131mlar\u0131yla modellenir.","Para un pilot se selecciona un proceso concreto, se estructura y se representa con los pasos de prueba y auditor\u00eda necesarios.","Pour un pilot, un \u00e9v\u00e9nement concret est choisi, structur\u00e9 et mod\u00e9lis\u00e9 avec les \u00e9tapes de preuve et d\u2019audit n\u00e9cessaires.","Per un pilot viene selezionato un evento concreto, strutturato e rappresentato con i passaggi di prova e audit necessari.","Pentru un pilot este ales un eveniment concret, structurat \u0219i modelat cu pa\u0219ii necesari de dovad\u0103 \u0219i audit.","Pilot \u4f1a\u9009\u62e9\u4e00\u4e2a\u5177\u4f53\u4e8b\u4ef6\uff0c\u5bf9\u5176\u7ed3\u6784\u5316\uff0c\u5e76\u6620\u5c04\u6240\u9700\u7684\u8bc1\u660e\u4e0e\u5ba1\u8ba1\u6b65\u9aa4\u3002"]],["proofflow.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicit\u0103 Pilot","\u7533\u8bf7 Pilot"]],["proofflow.pilot.email",["E-Mail senden","Send email","E-posta g\u00f6nder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","\u53d1\u9001\u90ae\u4ef6"]],["proofflow.pilot.phase1",["PHASE 01","PHASE 01","A\u015eAMA 01","FASE 01","PHASE 01","FASE 01","FAZA 01","\u9636\u6bb5 01"]],["proofflow.pilot.analysis",["ANALYSE","ANALYSIS","ANAL\u0130Z","AN\u00c1LISIS","ANALYSE","ANALISI","ANALIZ\u0102","\u5206\u6790"]],["proofflow.pilot.phase2",["PHASE 02","PHASE 02","A\u015eAMA 02","FASE 02","PHASE 02","FASE 02","FAZA 02","\u9636\u6bb5 02"]],["proofflow.pilot.model",["MODEL","MODEL","MODEL","MODELO","MOD\u00c8LE","MODELLO","MODEL","\u6a21\u578b"]],["proofflow.pilot.phase3",["PHASE 03","PHASE 03","A\u015eAMA 03","FASE 03","PHASE 03","FASE 03","FAZA 03","\u9636\u6bb5 03"]],["proofflow.pilot.pilot",["PILOT","PILOT","P\u0130LOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.phase4",["PHASE 04","PHASE 04","A\u015eAMA 04","FASE 04","PHASE 04","FASE 04","FAZA 04","\u9636\u6bb5 04"]],["proofflow.pilot.review",["REVIEW","REVIEW","\u0130NCELEME","REVISI\u00d3N","REVUE","REVISIONE","REVIZUIRE","\u8bc4\u5ba1"]],["proofflow.core.eyebrow",["ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE","ZAL\u2019THERA CORE"]],["proofflow.core.title",["ProofFlow nutzt denselben Vertrauenskern.","ProofFlow uses the same trust core.","ProofFlow ayn\u0131 g\u00fcven \u00e7ekirde\u011fini kullan\u0131r.","ProofFlow utiliza el mismo n\u00facleo de confianza.","ProofFlow utilise le m\u00eame noyau de confiance.","ProofFlow usa lo stesso core di fiducia.","ProofFlow folose\u0219te acela\u0219i nucleu de \u00eencredere.","ProofFlow \u4f7f\u7528\u540c\u4e00\u4e2a\u4fe1\u4efb\u6838\u5fc3\u3002"]],["proofflow.core.text",["Identit\u00e4t, Kontext, Nachweis, Audit und kontrollierte Ausf\u00fchrung bleiben Teil derselben ZAL\u2019THERA-Architektur.","Identity, context, evidence, audit and controlled execution remain part of the same ZAL\u2019THERA architecture.","Kimlik, ba\u011flam, kan\u0131t, denetim ve kontroll\u00fc y\u00fcr\u00fctme ayn\u0131 ZAL\u2019THERA mimarisinin par\u00e7as\u0131 olarak kal\u0131r.","Identidad, contexto, prueba, auditor\u00eda y ejecuci\u00f3n controlada siguen formando parte de la misma arquitectura ZAL\u2019THERA.","Identit\u00e9, contexte, preuve, audit et ex\u00e9cution contr\u00f4l\u00e9e restent dans la m\u00eame architecture ZAL\u2019THERA.","Identit\u00e0, contesto, prova, audit ed esecuzione controllata restano parte della stessa architettura ZAL\u2019THERA.","Identitatea, contextul, dovada, auditul \u0219i execu\u021bia controlat\u0103 r\u0103m\u00e2n parte din aceea\u0219i arhitectur\u0103 ZAL\u2019THERA.","\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u8bc1\u660e\u3001\u5ba1\u8ba1\u4e0e\u53d7\u63a7\u6267\u884c\u4ecd\u5c5e\u4e8e\u540c\u4e00 ZAL\u2019THERA \u67b6\u6784\u3002"]],["proofflow.contact.title",["ProofFlow Pilot anfragen","Request a ProofFlow pilot","ProofFlow pilot talep et","Solicitar un pilot de ProofFlow","Demander un pilot ProofFlow","Richiedi un pilot ProofFlow","Solicit\u0103 un pilot ProofFlow","\u7533\u8bf7 ProofFlow Pilot"]],["proofflow.contact.text",["Beschreibe kurz den Prozess, der nachvollziehbarer werden soll.","Briefly describe the process that should become more traceable.","Daha izlenebilir hale gelmesi gereken s\u00fcreci k\u0131saca a\u00e7\u0131klay\u0131n.","Describe brevemente el proceso que debe ser m\u00e1s trazable.","D\u00e9crivez bri\u00e8vement le processus qui doit devenir plus tra\u00e7able.","Descrivi brevemente il processo che deve diventare pi\u00f9 tracciabile.","Descrie pe scurt procesul care trebuie s\u0103 devin\u0103 mai trasabil.","\u7b80\u8981\u63cf\u8ff0\u9700\u8981\u53d8\u5f97\u66f4\u53ef\u8ffd\u6eaf\u7684\u6d41\u7a0b\u3002"]],["proofflow.contact.namePlaceholder",["Ihr Name","Your name","Ad\u0131n\u0131z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","\u60a8\u7684\u59d3\u540d"]],["proofflow.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["proofflow.contact.messagePlaceholder",["Welcher Prozess soll nachvollziehbarer werden?","Which process should become more traceable?","Hangi s\u00fcre\u00e7 daha izlenebilir olmal\u0131?","\u00bfQu\u00e9 proceso deber\u00eda ser m\u00e1s trazable?","Quel processus doit devenir plus tra\u00e7able ?","Quale processo dovrebbe diventare pi\u00f9 tracciabile?","Ce proces ar trebui s\u0103 devin\u0103 mai trasabil?","\u54ea\u4e2a\u6d41\u7a0b\u9700\u8981\u53d8\u5f97\u66f4\u53ef\u8ffd\u6eaf\uff1f"]],["proofflow.contact.send",["Anfrage senden","Send request","Talep g\u00f6nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","\u53d1\u9001\u7533\u8bf7"]],["proofflow.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","G\u00f6ndererek \u015funu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accepta\u021bi","\u63d0\u4ea4\u5373\u8868\u793a\u60a8\u63a5\u53d7\u6211\u4eec\u7684"]],["shiftlog.hero.kicker",["ZAL\u2019THERA INDUSTRY","ZAL\u2019THERA INDUSTRY","ZAL\u2019THERA END\u00dcSTR\u0130","ZAL\u2019THERA INDUSTRIA","ZAL\u2019THERA INDUSTRIE","ZAL\u2019THERA INDUSTRIA","ZAL\u2019THERA INDUSTRIE","ZAL\u2019THERA \u5de5\u4e1a"]],["shiftlog.hero.title",["Shift handover.<br>Without information loss.","Shift handover.<br>Without information loss.","Vardiya devri.<br>Bilgi kayb\u0131 olmadan.","Relevo de turno.<br>Sin p\u00e9rdida de informaci\u00f3n.","Transmission de poste.<br>Sans perte d\u2019information.","Passaggio turno.<br>Senza perdita di informazioni.","Predare de schimb.<br>F\u0103r\u0103 pierdere de informa\u021bii.","\u73ed\u6b21\u4ea4\u63a5\u3002<br>\u4e0d\u4e22\u5931\u4fe1\u606f\u3002"]],["shiftlog.hero.lead",["ShiftLog macht operative Zust\u00e4nde, offene Punkte und Verantwortlichkeiten \u00fcber Schichtgrenzen hinweg nachvollziehbar.","ShiftLog makes operational states, open points and responsibilities traceable across shift boundaries.","ShiftLog operasyonel durumlar\u0131, a\u00e7\u0131k noktalar\u0131 ve sorumluluklar\u0131 vardiyalar aras\u0131nda izlenebilir k\u0131lar.","ShiftLog hace trazables los estados operativos, puntos abiertos y responsabilidades entre turnos.","ShiftLog rend tra\u00e7ables les \u00e9tats op\u00e9rationnels, points ouverts et responsabilit\u00e9s entre les postes.","ShiftLog rende tracciabili stati operativi, punti aperti e responsabilit\u00e0 tra i turni.","ShiftLog face trasabile st\u0103rile opera\u021bionale, punctele deschise \u0219i responsabilit\u0103\u021bile \u00eentre schimburi.","ShiftLog \u8ba9\u8fd0\u884c\u72b6\u6001\u3001\u672a\u51b3\u4e8b\u9879\u4e0e\u8d23\u4efb\u8de8\u73ed\u6b21\u4fdd\u6301\u53ef\u8ffd\u6eaf\u3002"]],["shiftlog.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le syst\u00e8me","Comprendi il sistema","\u00cen\u021belege sistemul","\u7406\u89e3\u7cfb\u7edf"]],["shiftlog.hero.interest",["Interesse melden","Register interest","\u0130lgi bildir","Mostrar inter\u00e9s","Signaler son int\u00e9r\u00eat","Segnala interesse","Exprim\u0103 interesul","\u8868\u8fbe\u5174\u8da3"]],["shiftlog.hero.handover",["HANDOVER","HANDOVER","DEV\u0130R","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","\u4ea4\u63a5"]],["shiftlog.hero.state",["STATE","STATE","DURUM","ESTADO","\u00c9TAT","STATO","STARE","\u72b6\u6001"]],["shiftlog.hero.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILIT\u00c9","RESPONSABILIT\u00c0","RESPONSABILITATE","\u8d23\u4efb"]],["shiftlog.hero.traceability",["TRACEABILITY","TRACEABILITY","\u0130ZLENEB\u0130L\u0130RL\u0130K","TRAZABILIDAD","TRA\u00c7ABILIT\u00c9","TRACCIABILIT\u00c0","TRASABILITATE","\u53ef\u8ffd\u6eaf\u6027"]],["shiftlog.state.label",["SHIFT STATE","SHIFT STATE","VARD\u0130YA DURUMU","ESTADO DEL TURNO","\u00c9TAT DU POSTE","STATO DEL TURNO","STAREA SCHIMBULUI","\u73ed\u6b21\u72b6\u6001"]],["shiftlog.state.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","\u72b6\u6001"]],["shiftlog.state.capture",["CAPTURE","CAPTURE","KAYIT","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTUR\u0102","\u8bb0\u5f55"]],["shiftlog.state.openPoints",["OPEN POINTS","OPEN POINTS","A\u00c7IK NOKTALAR","PUNTOS ABIERTOS","POINTS OUVERTS","PUNTI APERTI","PUNCTE DESCHISE","\u672a\u51b3\u4e8b\u9879"]],["shiftlog.state.visible",["VISIBLE","VISIBLE","G\u00d6R\u00dcN\u00dcR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","\u53ef\u89c1"]],["shiftlog.state.handover",["HANDOVER","HANDOVER","DEV\u0130R","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","\u4ea4\u63a5"]],["shiftlog.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMI\u015e","ESTRUCTURADO","STRUCTUR\u00c9","STRUTTURATO","STRUCTURAT","\u5df2\u7ed3\u6784\u5316"]],["shiftlog.state.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILIT\u00c9","RESPONSABILIT\u00c0","RESPONSABILITATE","\u8d23\u4efb"]],["shiftlog.state.assigned",["ASSIGNED","ASSIGNED","ATANDI","ASIGNADA","ATTRIBU\u00c9E","ASSEGNATA","ATRIBUIT\u0102","\u5df2\u5206\u914d"]],["shiftlog.state.history",["HISTORY","HISTORY","GE\u00c7M\u0130\u015e","HISTORIAL","HISTORIQUE","STORICO","ISTORIC","\u5386\u53f2"]],["shiftlog.state.traceable",["TRACEABLE","TRACEABLE","\u0130ZLENEB\u0130L\u0130R","TRAZABLE","TRA\u00c7ABLE","TRACCIABILE","TRASABIL","\u53ef\u8ffd\u6eaf"]],["shiftlog.problem.eyebrow",["SHIFT REALITY","SHIFT REALITY","VARD\u0130YA GER\u00c7E\u011e\u0130","REALIDAD DEL TURNO","R\u00c9ALIT\u00c9 DU POSTE","REALT\u00c0 DEL TURNO","REALITATEA SCHIMBULUI","\u73ed\u6b21\u73b0\u5b9e"]],["shiftlog.problem.title",["Information darf nicht an der Schichtgrenze enden.","Information must not stop at the shift boundary.","Bilgi vardiya s\u0131n\u0131r\u0131nda bitmemeli.","La informaci\u00f3n no debe terminar en el cambio de turno.","L\u2019information ne doit pas s\u2019arr\u00eater au changement de poste.","Le informazioni non devono fermarsi al cambio turno.","Informa\u021bia nu trebuie s\u0103 se opreasc\u0103 la schimbul de tur\u0103.","\u4fe1\u606f\u4e0d\u5e94\u5728\u73ed\u6b21\u8fb9\u754c\u7ec8\u6b62\u3002"]],["shiftlog.problem.lead",["Offene Punkte, Maschinenzust\u00e4nde und Verantwortlichkeiten verlieren schnell Kontext, wenn \u00dcbergaben nur m\u00fcndlich oder unstrukturiert erfolgen.","Open points, machine states and responsibilities quickly lose context when handovers are only verbal or unstructured.","A\u00e7\u0131k noktalar, makine durumlar\u0131 ve sorumluluklar devirler yaln\u0131zca s\u00f6zl\u00fc veya yap\u0131land\u0131r\u0131lmam\u0131\u015f oldu\u011funda h\u0131zla ba\u011flam kaybeder.","Puntos abiertos, estados de m\u00e1quina y responsabilidades pierden contexto r\u00e1pidamente cuando los relevos son solo verbales o no estructurados.","Points ouverts, \u00e9tats machine et responsabilit\u00e9s perdent vite leur contexte lorsque les transmissions sont seulement orales ou non structur\u00e9es.","Punti aperti, stati macchina e responsabilit\u00e0 perdono rapidamente contesto quando i passaggi sono solo verbali o non strutturati.","Punctele deschise, st\u0103rile utilajelor \u0219i responsabilit\u0103\u021bile pierd rapid context c\u00e2nd pred\u0103rile sunt doar verbale sau nestructurate.","\u5f53\u4ea4\u63a5\u4ec5\u9760\u53e3\u5934\u6216\u7f3a\u4e4f\u7ed3\u6784\u65f6\uff0c\u672a\u51b3\u4e8b\u9879\u3001\u673a\u5668\u72b6\u6001\u4e0e\u8d23\u4efb\u4f1a\u8fc5\u901f\u5931\u53bb\u4e0a\u4e0b\u6587\u3002"]],["shiftlog.problem.overlooked.title",["Offene Punkte werden \u00fcbersehen","Open points are overlooked","A\u00e7\u0131k noktalar g\u00f6zden ka\u00e7ar","Se pasan por alto puntos abiertos","Des points ouverts sont oubli\u00e9s","I punti aperti vengono trascurati","Punctele deschise sunt omise","\u672a\u51b3\u4e8b\u9879\u88ab\u5ffd\u7565"]],["shiftlog.problem.overlooked.text",["Was nicht klar \u00fcbergeben wird, kann in der n\u00e4chsten Schicht verschwinden.","What is not handed over clearly can disappear in the next shift.","A\u00e7\u0131k\u00e7a devredilmeyen \u015fey sonraki vardiyada kaybolabilir.","Lo que no se entrega con claridad puede desaparecer en el siguiente turno.","Ce qui n\u2019est pas transmis clairement peut dispara\u00eetre au poste suivant.","Ci\u00f2 che non viene passato chiaramente pu\u00f2 perdersi nel turno successivo.","Ceea ce nu este predat clar poate disp\u0103rea \u00een schimbul urm\u0103tor.","\u672a\u88ab\u6e05\u6670\u4ea4\u63a5\u7684\u4fe1\u606f\u53ef\u80fd\u5728\u4e0b\u4e00\u73ed\u6b21\u4e2d\u6d88\u5931\u3002"]],["shiftlog.problem.states.title",["Zust\u00e4nde werden uneindeutig","States become ambiguous","Durumlar belirsizle\u015fir","Los estados se vuelven ambiguos","Les \u00e9tats deviennent ambigus","Gli stati diventano ambigui","St\u0103rile devin ambigue","\u72b6\u6001\u53d8\u5f97\u6a21\u7cca"]],["shiftlog.problem.states.text",["Ohne strukturierten Status ist schwer zu erkennen, was offen, \u00fcbernommen oder erledigt ist.","Without structured status, it is hard to see what is open, taken over or completed.","Yap\u0131land\u0131r\u0131lm\u0131\u015f durum olmadan neyin a\u00e7\u0131k, devral\u0131nm\u0131\u015f veya tamamlanm\u0131\u015f oldu\u011funu g\u00f6rmek zordur.","Sin estado estructurado es dif\u00edcil ver qu\u00e9 est\u00e1 abierto, asumido o completado.","Sans statut structur\u00e9, il est difficile de voir ce qui est ouvert, repris ou termin\u00e9.","Senza stato strutturato \u00e8 difficile capire cosa \u00e8 aperto, preso in carico o completato.","F\u0103r\u0103 stare structurat\u0103 este greu de v\u0103zut ce este deschis, preluat sau finalizat.","\u6ca1\u6709\u7ed3\u6784\u5316\u72b6\u6001\uff0c\u5c31\u96be\u4ee5\u770b\u6e05\u4ec0\u4e48\u662f\u672a\u51b3\u3001\u5df2\u63a5\u624b\u6216\u5df2\u5b8c\u6210\u3002"]],["shiftlog.problem.context.title",["Kontext geht verloren","Context is lost","Ba\u011flam kaybolur","Se pierde el contexto","Le contexte se perd","Il contesto si perde","Contextul se pierde","\u4e0a\u4e0b\u6587\u4e22\u5931"]],["shiftlog.problem.context.text",["Maschine, Bereich, Zeitpunkt und Verantwortlichkeit m\u00fcssen zusammen sichtbar bleiben.","Machine, area, time and responsibility must remain visible together.","Makine, alan, zaman ve sorumluluk birlikte g\u00f6r\u00fcn\u00fcr kalmal\u0131.","M\u00e1quina, \u00e1rea, momento y responsabilidad deben seguir visibles juntos.","Machine, zone, moment et responsabilit\u00e9 doivent rester visibles ensemble.","Macchina, area, tempo e responsabilit\u00e0 devono restare visibili insieme.","Utilajul, zona, timpul \u0219i responsabilitatea trebuie s\u0103 r\u0103m\u00e2n\u0103 vizibile \u00eempreun\u0103.","\u673a\u5668\u3001\u533a\u57df\u3001\u65f6\u95f4\u4e0e\u8d23\u4efb\u5fc5\u987b\u4e00\u8d77\u4fdd\u6301\u53ef\u89c1\u3002"]],["shiftlog.system.eyebrow",["SHIFTLOG SYSTEM","SHIFTLOG SYSTEM","SHIFTLOG S\u0130STEM\u0130","SISTEMA SHIFTLOG","SYST\u00c8ME SHIFTLOG","SISTEMA SHIFTLOG","SISTEM SHIFTLOG","SHIFTLOG \u7cfb\u7edf"]],["shiftlog.system.title",["\u00dcbergabe wird zu einem nachvollziehbaren Prozess.","Handover becomes a traceable process.","Devir izlenebilir bir s\u00fcrece d\u00f6n\u00fc\u015f\u00fcr.","El relevo se convierte en un proceso trazable.","La transmission devient un processus tra\u00e7able.","Il passaggio diventa un processo tracciabile.","Predarea devine un proces trasabil.","\u4ea4\u63a5\u53d8\u6210\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u3002"]],["shiftlog.system.lead",["ShiftLog strukturiert operative Informationen so, dass Zustand, \u00dcbergabe und Verantwortung \u00fcber Schichten hinweg sichtbar bleiben.","ShiftLog structures operational information so that state, handover and responsibility remain visible across shifts.","ShiftLog operasyonel bilgiyi, durum, devir ve sorumlulu\u011fun vardiyalar boyunca g\u00f6r\u00fcn\u00fcr kalaca\u011f\u0131 \u015fekilde yap\u0131land\u0131r\u0131r.","ShiftLog estructura la informaci\u00f3n operativa para que estado, relevo y responsabilidad sigan visibles entre turnos.","ShiftLog structure les informations op\u00e9rationnelles pour que l\u2019\u00e9tat, la transmission et la responsabilit\u00e9 restent visibles entre les postes.","ShiftLog struttura le informazioni operative affinch\u00e9 stato, passaggio e responsabilit\u00e0 restino visibili tra i turni.","ShiftLog structureaz\u0103 informa\u021bia opera\u021bional\u0103 astfel \u00eenc\u00e2t starea, predarea \u0219i responsabilitatea s\u0103 r\u0103m\u00e2n\u0103 vizibile \u00eentre schimburi.","ShiftLog \u5bf9\u8fd0\u884c\u4fe1\u606f\u8fdb\u884c\u7ed3\u6784\u5316\uff0c\u4f7f\u72b6\u6001\u3001\u4ea4\u63a5\u4e0e\u8d23\u4efb\u8de8\u73ed\u6b21\u4fdd\u6301\u53ef\u89c1\u3002"]],["shiftlog.system.capture.title",["Capture","Capture","Kay\u0131t","Captura","Capture","Acquisizione","Captur\u0103","\u8bb0\u5f55"]],["shiftlog.system.capture.text",["Relevante Zust\u00e4nde und offene Punkte werden strukturiert erfasst.","Relevant states and open points are captured in a structured way.","\u0130lgili durumlar ve a\u00e7\u0131k noktalar yap\u0131land\u0131r\u0131lm\u0131\u015f bi\u00e7imde kaydedilir.","Los estados relevantes y puntos abiertos se registran de forma estructurada.","Les \u00e9tats pertinents et points ouverts sont saisis de mani\u00e8re structur\u00e9e.","Stati rilevanti e punti aperti vengono registrati in modo strutturato.","St\u0103rile relevante \u0219i punctele deschise sunt capturate structurat.","\u76f8\u5173\u72b6\u6001\u4e0e\u672a\u51b3\u4e8b\u9879\u88ab\u7ed3\u6784\u5316\u8bb0\u5f55\u3002"]],["shiftlog.system.state.title",["State","State","Durum","Estado","\u00c9tat","Stato","Stare","\u72b6\u6001"]],["shiftlog.system.state.text",["Der aktuelle operative Zustand bleibt sichtbar.","The current operational state remains visible.","Mevcut operasyonel durum g\u00f6r\u00fcn\u00fcr kal\u0131r.","El estado operativo actual sigue visible.","L\u2019\u00e9tat op\u00e9rationnel actuel reste visible.","Lo stato operativo attuale resta visibile.","Starea opera\u021bional\u0103 curent\u0103 r\u0103m\u00e2ne vizibil\u0103.","\u5f53\u524d\u8fd0\u884c\u72b6\u6001\u4fdd\u6301\u53ef\u89c1\u3002"]],["shiftlog.system.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","\u4ea4\u63a5"]],["shiftlog.system.handover.text",["Offene Punkte werden gezielt an die n\u00e4chste Schicht \u00fcbergeben.","Open points are deliberately handed over to the next shift.","A\u00e7\u0131k noktalar bilin\u00e7li bi\u00e7imde sonraki vardiyaya devredilir.","Los puntos abiertos se entregan de forma intencional al siguiente turno.","Les points ouverts sont transmis explicitement au poste suivant.","I punti aperti vengono passati intenzionalmente al turno successivo.","Punctele deschise sunt predate explicit schimbului urm\u0103tor.","\u672a\u51b3\u4e8b\u9879\u88ab\u660e\u786e\u4ea4\u7ed9\u4e0b\u4e00\u73ed\u6b21\u3002"]],["shiftlog.system.responsibility.title",["Responsibility","Responsibility","Sorumluluk","Responsabilidad","Responsabilit\u00e9","Responsabilit\u00e0","Responsabilitate","\u8d23\u4efb"]],["shiftlog.system.responsibility.text",["Zust\u00e4ndigkeit und \u00dcbernahme werden klarer nachvollziehbar.","Responsibility and acceptance become more traceable.","Sorumluluk ve devralma daha a\u00e7\u0131k izlenebilir olur.","La responsabilidad y la aceptaci\u00f3n se vuelven m\u00e1s trazables.","La responsabilit\u00e9 et la prise en charge deviennent plus tra\u00e7ables.","Responsabilit\u00e0 e presa in carico diventano pi\u00f9 tracciabili.","Responsabilitatea \u0219i preluarea devin mai trasabile.","\u8d23\u4efb\u4e0e\u63a5\u624b\u53d8\u5f97\u66f4\u53ef\u8ffd\u6eaf\u3002"]],["shiftlog.system.history.title",["History","History","Ge\u00e7mi\u015f","Historial","Historique","Storico","Istoric","\u5386\u53f2"]],["shiftlog.system.history.text",["Relevante \u00c4nderungen und \u00dcbergaben bleiben sp\u00e4ter nachvollziehbar.","Relevant changes and handovers remain traceable later.","\u0130lgili de\u011fi\u015fiklikler ve devirler daha sonra izlenebilir kal\u0131r.","Los cambios y relevos relevantes siguen siendo trazables despu\u00e9s.","Les changements et transmissions pertinents restent tra\u00e7ables ensuite.","Cambiamenti e passaggi rilevanti restano tracciabili in seguito.","Modific\u0103rile \u0219i pred\u0103rile relevante r\u0103m\u00e2n trasabile ulterior.","\u76f8\u5173\u53d8\u5316\u4e0e\u4ea4\u63a5\u4e4b\u540e\u4ecd\u53ef\u8ffd\u6eaf\u3002"]],["shiftlog.industry.title",["Teil von ZAL\u2019THERA Industry.","Part of ZAL\u2019THERA Industry.","ZAL\u2019THERA Industry\u2019nin bir par\u00e7as\u0131.","Parte de ZAL\u2019THERA Industry.","Partie de ZAL\u2019THERA Industry.","Parte di ZAL\u2019THERA Industry.","Parte din ZAL\u2019THERA Industry.","ZAL\u2019THERA Industry \u7684\u4e00\u90e8\u5206\u3002"]],["shiftlog.industry.text",["ShiftLog ist ein operativer Einstieg in die industrielle ZAL\u2019THERA-Architektur.","ShiftLog is an operational entry point into the industrial ZAL\u2019THERA architecture.","ShiftLog end\u00fcstriyel ZAL\u2019THERA mimarisine operasyonel bir giri\u015f noktas\u0131d\u0131r.","ShiftLog es una entrada operativa a la arquitectura industrial ZAL\u2019THERA.","ShiftLog est un point d\u2019entr\u00e9e op\u00e9rationnel dans l\u2019architecture industrielle ZAL\u2019THERA.","ShiftLog \u00e8 un punto di ingresso operativo nell\u2019architettura industriale ZAL\u2019THERA.","ShiftLog este un punct opera\u021bional de intrare \u00een arhitectura industrial\u0103 ZAL\u2019THERA.","ShiftLog \u662f\u8fdb\u5165 ZAL\u2019THERA \u5de5\u4e1a\u67b6\u6784\u7684\u64cd\u4f5c\u5165\u53e3\u3002"]],["shiftlog.industry.view",["Industry ansehen","View Industry","Industry\u2019yi g\u00f6r\u00fcnt\u00fcle","Ver Industry","Voir Industry","Vedi Industry","Vezi Industry","\u67e5\u770b Industry"]],["shiftlog.use.eyebrow",["REAL-WORLD USE","REAL-WORLD USE","GER\u00c7EK D\u00dcNYA KULLANIMI","USO REAL","USAGE R\u00c9EL","USO REALE","UTILIZARE REAL\u0102","\u73b0\u5b9e\u4f7f\u7528"]],["shiftlog.use.title",["F\u00fcr reale \u00dcbergaben gebaut.","Built for real handovers.","Ger\u00e7ek devirler i\u00e7in \u00fcretildi.","Construido para relevos reales.","Con\u00e7u pour de vraies transmissions.","Costruito per passaggi reali.","Construit pentru pred\u0103ri reale.","\u4e3a\u771f\u5b9e\u4ea4\u63a5\u800c\u6784\u5efa\u3002"]],["shiftlog.use.text",["ShiftLog soll in klar abgegrenzten betrieblichen Abl\u00e4ufen getestet und schrittweise weiterentwickelt werden.","ShiftLog is intended to be tested in clearly defined operational workflows and developed step by step.","ShiftLog a\u00e7\u0131k\u00e7a tan\u0131mlanm\u0131\u015f i\u015fletme ak\u0131\u015flar\u0131nda test edilip ad\u0131m ad\u0131m geli\u015ftirilecektir.","ShiftLog est\u00e1 pensado para probarse en flujos operativos claramente definidos y desarrollarse paso a paso.","ShiftLog doit \u00eatre test\u00e9 dans des flux op\u00e9rationnels clairement d\u00e9finis et d\u00e9velopp\u00e9 progressivement.","ShiftLog \u00e8 pensato per essere testato in flussi operativi chiaramente definiti e sviluppato passo dopo passo.","ShiftLog este destinat test\u0103rii \u00een fluxuri opera\u021bionale clar definite \u0219i dezvolt\u0103rii treptate.","ShiftLog \u5c06\u5728\u8fb9\u754c\u6e05\u6670\u7684\u8fd0\u884c\u6d41\u7a0b\u4e2d\u6d4b\u8bd5\uff0c\u5e76\u9010\u6b65\u53d1\u5c55\u3002"]],["shiftlog.use.interest",["Interesse melden","Register interest","\u0130lgi bildir","Mostrar inter\u00e9s","Signaler son int\u00e9r\u00eat","Segnala interesse","Exprim\u0103 interesul","\u8868\u8fbe\u5174\u8da3"]],["shiftlog.use.email",["E-Mail senden","Send email","E-posta g\u00f6nder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","\u53d1\u9001\u90ae\u4ef6"]],["shiftlog.use.state1",["STATE 01","STATE 01","DURUM 01","ESTADO 01","\u00c9TAT 01","STATO 01","STARE 01","\u72b6\u6001 01"]],["shiftlog.use.captured",["CAPTURED","CAPTURED","KAYDED\u0130LD\u0130","CAPTURADO","SAISI","ACQUISITO","CAPTURAT","\u5df2\u8bb0\u5f55"]],["shiftlog.use.state2",["STATE 02","STATE 02","DURUM 02","ESTADO 02","\u00c9TAT 02","STATO 02","STARE 02","\u72b6\u6001 02"]],["shiftlog.use.open",["OPEN","OPEN","A\u00c7IK","ABIERTO","OUVERT","APERTO","DESCHIS","\u672a\u51b3"]],["shiftlog.use.state3",["STATE 03","STATE 03","DURUM 03","ESTADO 03","\u00c9TAT 03","STATO 03","STARE 03","\u72b6\u6001 03"]],["shiftlog.use.handedOver",["HANDED OVER","HANDED OVER","DEVRED\u0130LD\u0130","ENTREGADO","TRANSMIS","PASSATO","PREDAT","\u5df2\u4ea4\u63a5"]],["shiftlog.use.state4",["STATE 04","STATE 04","DURUM 04","ESTADO 04","\u00c9TAT 04","STATO 04","STARE 04","\u72b6\u6001 04"]],["shiftlog.use.resolved",["RESOLVED","RESOLVED","\u00c7\u00d6Z\u00dcLD\u00dc","RESUELTO","R\u00c9SOLU","RISOLTO","REZOLVAT","\u5df2\u89e3\u51b3"]],["shiftlog.contact.title",["Interesse an ShiftLog?","Interested in ShiftLog?","ShiftLog ile ilgileniyor musunuz?","\u00bfInter\u00e9s en ShiftLog?","Int\u00e9ress\u00e9 par ShiftLog ?","Interessato a ShiftLog?","Interesat de ShiftLog?","\u5bf9 ShiftLog \u611f\u5174\u8da3\uff1f"]],["shiftlog.contact.text",["Beschreibe kurz den betrieblichen Ablauf, in dem \u00dcbergaben oder offene Punkte besser strukturiert werden sollen.","Briefly describe the operational workflow in which handovers or open points should be structured better.","Devirlerin veya a\u00e7\u0131k noktalar\u0131n daha iyi yap\u0131land\u0131r\u0131lmas\u0131 gereken i\u015fletme ak\u0131\u015f\u0131n\u0131 k\u0131saca a\u00e7\u0131klay\u0131n.","Describe brevemente el flujo operativo en el que los relevos o puntos abiertos deben estructurarse mejor.","D\u00e9crivez bri\u00e8vement le flux op\u00e9rationnel o\u00f9 les transmissions ou points ouverts doivent \u00eatre mieux structur\u00e9s.","Descrivi brevemente il flusso operativo in cui passaggi o punti aperti devono essere strutturati meglio.","Descrie pe scurt fluxul opera\u021bional \u00een care pred\u0103rile sau punctele deschise trebuie structurate mai bine.","\u7b80\u8981\u63cf\u8ff0\u9700\u8981\u66f4\u597d\u7ed3\u6784\u5316\u4ea4\u63a5\u6216\u672a\u51b3\u4e8b\u9879\u7684\u8fd0\u884c\u6d41\u7a0b\u3002"]],["shiftlog.contact.namePlaceholder",["Ihr Name","Your name","Ad\u0131n\u0131z","Su nombre","Votre nom","Il tuo nome","Numele dvs.","\u60a8\u7684\u59d3\u540d"]],["shiftlog.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["shiftlog.contact.messagePlaceholder",["Wo entstehen heute Informationsverluste bei \u00dcbergaben?","Where do information losses occur in handovers today?","Bug\u00fcn devirlerde bilgi kayb\u0131 nerede olu\u015fuyor?","\u00bfD\u00f3nde se producen hoy p\u00e9rdidas de informaci\u00f3n en los relevos?","O\u00f9 se produisent aujourd\u2019hui les pertes d\u2019information lors des transmissions ?","Dove si verificano oggi perdite di informazioni nei passaggi?","Unde apar ast\u0103zi pierderi de informa\u021bii la pred\u0103ri?","\u5982\u4eca\u4ea4\u63a5\u4e2d\u7684\u4fe1\u606f\u4e22\u5931\u53d1\u751f\u5728\u54ea\u91cc\uff1f"]],["shiftlog.contact.send",["Anfrage senden","Send request","Talep g\u00f6nder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","\u53d1\u9001\u7533\u8bf7"]],["shiftlog.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","G\u00f6ndererek \u015funu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accepta\u021bi","\u63d0\u4ea4\u5373\u8868\u793a\u60a8\u63a5\u53d7\u6211\u4eec\u7684"]],["support.hero.eyebrow",["SUPPORT","SUPPORT","DESTEK","SOPORTE","SUPPORT","SUPPORTO","SUPORT","\u652f\u6301"]],["support.hero.title",["ZAL\u2019THERA Support","ZAL\u2019THERA Support","ZAL\u2019THERA Destek","Soporte ZAL\u2019THERA","Support ZAL\u2019THERA","Supporto ZAL\u2019THERA","Suport ZAL\u2019THERA","ZAL\u2019THERA \u652f\u6301"]],["support.hero.text",["Hilfe zu ZAL\u2019THERA Produkten, Systemen und bestehenden Anwendungen.","Help with ZAL\u2019THERA products, systems and existing applications.","ZAL\u2019THERA \u00fcr\u00fcnleri, sistemleri ve mevcut uygulamalar\u0131 i\u00e7in yard\u0131m.","Ayuda sobre productos, sistemas y aplicaciones existentes de ZAL\u2019THERA.","Aide concernant les produits, syst\u00e8mes et applications existantes de ZAL\u2019THERA.","Aiuto per prodotti, sistemi e applicazioni esistenti ZAL\u2019THERA.","Ajutor pentru produsele, sistemele \u0219i aplica\u021biile existente ZAL\u2019THERA.","\u5173\u4e8e ZAL\u2019THERA \u4ea7\u54c1\u3001\u7cfb\u7edf\u4e0e\u73b0\u6709\u5e94\u7528\u7684\u5e2e\u52a9\u3002"]],["support.contact.title",["Kontakt","Contact","\u0130leti\u015fim","Contacto","Contact","Contatto","Contact","\u8054\u7cfb"]],["support.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","\u7535\u5b50\u90ae\u4ef6\uff1a"]],["support.apps.title",["Apps & Systeme","Apps & Systems","Uygulamalar & Sistemler","Apps & Sistemas","Applications & Syst\u00e8mes","App & Sistemi","Aplica\u021bii & Sisteme","\u5e94\u7528\u4e0e\u7cfb\u7edf"]],["support.apps.lifeflow",["LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow"]],["support.apps.easyproof",["EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro"]],["support.apps.lifeshield",["LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield"]],["support.apps.deliveryCore",["Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core"]],["support.apps.origin",["Origin","Origin","Origin","Origin","Origin","Origin","Origin","Origin"]],["support.apps.other.title",["Andere Produkte oder Systeme","Other products or systems","Di\u011fer \u00fcr\u00fcnler veya sistemler","Otros productos o sistemas","Autres produits ou syst\u00e8mes","Altri prodotti o sistemi","Alte produse sau sisteme","\u5176\u4ed6\u4ea7\u54c1\u6216\u7cfb\u7edf"]],["support.apps.other.text",["Nenne bitte den Produkt- oder Systemnamen in deiner Nachricht.","Please include the product or system name in your message.","Mesaj\u0131n\u0131zda \u00fcr\u00fcn veya sistem ad\u0131n\u0131 belirtin.","Indica el nombre del producto o sistema en tu mensaje.","Indiquez le nom du produit ou syst\u00e8me dans votre message.","Indica il nome del prodotto o sistema nel messaggio.","Men\u021bioneaz\u0103 numele produsului sau sistemului \u00een mesaj.","\u8bf7\u5728\u6d88\u606f\u4e2d\u6ce8\u660e\u4ea7\u54c1\u6216\u7cfb\u7edf\u540d\u79f0\u3002"]],["support.message.title",["Damit wir schnell helfen k\u00f6nnen","To help you quickly","H\u0131zl\u0131 yard\u0131mc\u0131 olabilmemiz i\u00e7in","Para poder ayudarte r\u00e1pido","Pour vous aider rapidement","Per poterti aiutare rapidamente","Pentru a te ajuta rapid","\u4e3a\u4e86\u66f4\u5feb\u5e2e\u52a9\u4f60"]],["support.message.app",["App oder System nennen","Name the app or system","Uygulama veya sistemi belirtin","Indica la app o el sistema","Indiquez l\u2019application ou le syst\u00e8me","Indica app o sistema","Men\u021bioneaz\u0103 aplica\u021bia sau sistemul","\u6ce8\u660e\u5e94\u7528\u6216\u7cfb\u7edf"]],["support.message.problem",["Problem m\u00f6glichst genau beschreiben","Describe the problem as precisely as possible","Sorunu m\u00fcmk\u00fcn oldu\u011funca ayr\u0131nt\u0131l\u0131 a\u00e7\u0131klay\u0131n","Describe el problema con la mayor precisi\u00f3n posible","D\u00e9crivez le probl\u00e8me aussi pr\u00e9cis\u00e9ment que possible","Descrivi il problema nel modo pi\u00f9 preciso possibile","Descrie problema c\u00e2t mai exact posibil","\u5c3d\u53ef\u80fd\u51c6\u786e\u63cf\u8ff0\u95ee\u9898"]],["support.message.device",["Ger\u00e4t und Betriebssystem nennen","Include device and operating system","Cihaz\u0131 ve i\u015fletim sistemini belirtin","Indica dispositivo y sistema operativo","Indiquez l\u2019appareil et le syst\u00e8me d\u2019exploitation","Indica dispositivo e sistema operativo","Men\u021bioneaz\u0103 dispozitivul \u0219i sistemul de operare","\u6ce8\u660e\u8bbe\u5907\u4e0e\u64cd\u4f5c\u7cfb\u7edf"]],["support.message.screenshot",["Wenn m\u00f6glich Screenshot anh\u00e4ngen","Attach a screenshot if possible","M\u00fcmk\u00fcnse ekran g\u00f6r\u00fcnt\u00fcs\u00fc ekleyin","Adjunta una captura si es posible","Ajoutez une capture d\u2019\u00e9cran si possible","Allega uno screenshot se possibile","Ata\u0219eaz\u0103 o captur\u0103 dac\u0103 este posibil","\u5982\u53ef\u80fd\u8bf7\u9644\u622a\u56fe"]],["support.responseTime",["Wir antworten so schnell wie m\u00f6glich.","We reply as quickly as possible.","M\u00fcmk\u00fcn oldu\u011funca h\u0131zl\u0131 yan\u0131t veririz.","Respondemos lo antes posible.","Nous r\u00e9pondons aussi rapidement que possible.","Rispondiamo il prima possibile.","R\u0103spundem c\u00e2t mai repede posibil.","\u6211\u4eec\u4f1a\u5c3d\u5feb\u56de\u590d\u3002"]],["support.actions.contact",["Support kontaktieren","Contact support","Destekle ileti\u015fime ge\u00e7","Contactar soporte","Contacter le support","Contatta il supporto","Contacteaz\u0103 suportul","\u8054\u7cfb\u652f\u6301"]],["support.actions.home",["Zur Startseite","Back to home","Ana sayfaya d\u00f6n","Volver al inicio","Retour \u00e0 l\u2019accueil","Torna alla home","\u00cenapoi acas\u0103","\u8fd4\u56de\u9996\u9875"]],["imprint.hero.eyebrow",["LEGAL","LEGAL","YASAL","LEGAL","JURIDIQUE","LEGALE","LEGAL","\u6cd5\u5f8b"]],["imprint.hero.title",["Impressum","Legal Notice","Yasal Bilgiler","Aviso legal","Mentions l\u00e9gales","Note legali","Informa\u021bii legale","\u6cd5\u5f8b\u58f0\u660e"]],["imprint.hero.lead",["Rechtliche Anbieterinformationen zu ZAL\u2019THERA.","Legal provider information for ZAL\u2019THERA.","ZAL\u2019THERA i\u00e7in yasal sa\u011flay\u0131c\u0131 bilgileri.","Informaci\u00f3n legal del proveedor de ZAL\u2019THERA.","Informations l\u00e9gales sur le fournisseur de ZAL\u2019THERA.","Informazioni legali sul fornitore ZAL\u2019THERA.","Informa\u021bii legale despre furnizorul ZAL\u2019THERA.","ZAL\u2019THERA \u7684\u6cd5\u5f8b\u63d0\u4f9b\u8005\u4fe1\u606f\u3002"]],["imprint.provider.title",["Angaben gem\u00e4\u00df \u00a7 5 DDG","Information pursuant to \u00a7 5 DDG","\u00a7 5 DDG uyar\u0131nca bilgiler","Informaci\u00f3n conforme al \u00a7 5 DDG","Informations conform\u00e9ment au \u00a7 5 DDG","Informazioni ai sensi del \u00a7 5 DDG","Informa\u021bii conform \u00a7 5 DDG","\u6839\u636e\u5fb7\u56fd DDG \u7b2c 5 \u6761\u7684\u4fe1\u606f"]],["imprint.contact.title",["Kontakt","Contact","\u0130leti\u015fim","Contacto","Contact","Contatto","Contact","\u8054\u7cfb"]],["imprint.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","\u7535\u5b50\u90ae\u4ef6\uff1a"]],["imprint.responsibility.title",["Verantwortlich f\u00fcr den Inhalt","Responsible for content","\u0130\u00e7erikten sorumlu","Responsable del contenido","Responsable du contenu","Responsabile dei contenuti","Responsabil pentru con\u021binut","\u5185\u5bb9\u8d1f\u8d23\u4eba"]],["imprint.project.title",["Projekt / Marke","Project / Brand","Proje / Marka","Proyecto / Marca","Projet / Marque","Progetto / Marchio","Proiect / Marc\u0103","\u9879\u76ee / \u54c1\u724c"]],["imprint.project.text",["ZAL\u2019THERA ist ein digitales System f\u00fcr Ordnung, Nachweis, Schutz, \u00dcbergabe, Vertrauen und nachvollziehbare Aktionen.","ZAL\u2019THERA is a digital system for organization, evidence, protection, handover, trust and traceable actions.","ZAL\u2019THERA; d\u00fczen, kan\u0131t, koruma, devir, g\u00fcven ve izlenebilir eylemler i\u00e7in dijital bir sistemdir.","ZAL\u2019THERA es un sistema digital para organizaci\u00f3n, prueba, protecci\u00f3n, relevo, confianza y acciones trazables.","ZAL\u2019THERA est un syst\u00e8me num\u00e9rique pour l\u2019organisation, la preuve, la protection, la transmission, la confiance et les actions tra\u00e7ables.","ZAL\u2019THERA \u00e8 un sistema digitale per organizzazione, prova, protezione, passaggio, fiducia e azioni tracciabili.","ZAL\u2019THERA este un sistem digital pentru organizare, dovad\u0103, protec\u021bie, predare, \u00eencredere \u0219i ac\u021biuni trasabile.","ZAL\u2019THERA \u662f\u7528\u4e8e\u7ec4\u7ec7\u3001\u8bc1\u660e\u3001\u4fdd\u62a4\u3001\u4ea4\u63a5\u3001\u4fe1\u4efb\u4e0e\u53ef\u8ffd\u6eaf\u64cd\u4f5c\u7684\u6570\u5b57\u7cfb\u7edf\u3002"]],["imprint.contentLiability.title",["Haftung f\u00fcr Inhalte","Liability for content","\u0130\u00e7erik sorumlulu\u011fu","Responsabilidad por contenidos","Responsabilit\u00e9 du contenu","Responsabilit\u00e0 per i contenuti","R\u0103spundere pentru con\u021binut","\u5185\u5bb9\u8d23\u4efb"]],["imprint.contentLiability.text",["Als Diensteanbieter sind wir f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.","As a service provider, we are responsible for our own content on these pages under general law.","Hizmet sa\u011flay\u0131c\u0131 olarak bu sayfalardaki kendi i\u00e7eriklerimizden genel yasalar uyar\u0131nca sorumluyuz.","Como proveedor de servicios somos responsables de nuestros propios contenidos en estas p\u00e1ginas conforme a la legislaci\u00f3n general.","En tant que fournisseur de services, nous sommes responsables de nos propres contenus sur ces pages conform\u00e9ment au droit g\u00e9n\u00e9ral.","In qualit\u00e0 di fornitore di servizi siamo responsabili dei nostri contenuti su queste pagine secondo la legge generale.","Ca furnizor de servicii suntem responsabili pentru propriul con\u021binut de pe aceste pagini conform legisla\u021biei generale.","\u4f5c\u4e3a\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6211\u4eec\u4f9d\u636e\u4e00\u822c\u6cd5\u5f8b\u5bf9\u672c\u7f51\u7ad9\u81ea\u8eab\u5185\u5bb9\u8d1f\u8d23\u3002"]],["imprint.linkLiability.title",["Haftung f\u00fcr Links","Liability for links","Ba\u011flant\u0131 sorumlulu\u011fu","Responsabilidad por enlaces","Responsabilit\u00e9 des liens","Responsabilit\u00e0 per i link","R\u0103spundere pentru linkuri","\u94fe\u63a5\u8d23\u4efb"]],["imprint.linkLiability.text",["Unser Angebot enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.","Our website contains links to external third-party websites over whose content we have no control.","Sitemiz, i\u00e7erikleri \u00fczerinde kontrol\u00fcm\u00fcz olmayan \u00fc\u00e7\u00fcnc\u00fc taraf harici web sitelerine ba\u011flant\u0131lar i\u00e7erir.","Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyos contenidos no tenemos control.","Notre site contient des liens vers des sites externes tiers dont nous ne contr\u00f4lons pas le contenu.","Il nostro sito contiene link a siti esterni di terzi sui cui contenuti non abbiamo controllo.","Site-ul nostru con\u021bine linkuri c\u0103tre site-uri externe ter\u021be asupra c\u0103rora nu avem control.","\u6211\u4eec\u7684\u7f51\u7ad9\u5305\u542b\u6307\u5411\u7b2c\u4e09\u65b9\u5916\u90e8\u7f51\u7ad9\u7684\u94fe\u63a5\uff0c\u6211\u4eec\u65e0\u6cd5\u63a7\u5236\u5176\u5185\u5bb9\u3002"]],["imprint.copyright.title",["Urheberrecht","Copyright","Telif hakk\u0131","Derechos de autor","Droit d\u2019auteur","Diritto d\u2019autore","Drepturi de autor","\u7248\u6743"]],["imprint.copyright.text",["Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.","The content and works created by the site operator on these pages are subject to German copyright law.","Site i\u015fletmecisi taraf\u0131ndan olu\u015fturulan i\u00e7erik ve eserler Alman telif hakk\u0131 yasas\u0131na tabidir.","Los contenidos y obras creados por el operador del sitio est\u00e1n sujetos al derecho de autor alem\u00e1n.","Les contenus et \u0153uvres cr\u00e9\u00e9s par l\u2019exploitant du site sont soumis au droit d\u2019auteur allemand.","I contenuti e le opere creati dal gestore del sito sono soggetti al diritto d\u2019autore tedesco.","Con\u021binuturile \u0219i operele create de operatorul site-ului sunt supuse dreptului de autor german.","\u7f51\u7ad9\u8fd0\u8425\u8005\u521b\u5efa\u7684\u5185\u5bb9\u4e0e\u4f5c\u54c1\u53d7\u5fb7\u56fd\u7248\u6743\u6cd5\u4fdd\u62a4\u3002"]],["imprint.actions.home",["Zur Startseite","Back to home","Ana sayfaya d\u00f6n","Volver al inicio","Retour \u00e0 l\u2019accueil","Torna alla home","\u00cenapoi acas\u0103","\u8fd4\u56de\u9996\u9875"]],["privacy.hero.eyebrow",["DATENSCHUTZ","PRIVACY","G\u0130ZL\u0130L\u0130K","PRIVACIDAD","CONFIDENTIALIT\u00c9","PRIVACY","CONFIDEN\u021aIALITATE","\u9690\u79c1"]],["privacy.hero.title",["Datenschutzerkl\u00e4rung","Privacy Policy","Gizlilik Politikas\u0131","Pol\u00edtica de privacidad","Politique de confidentialit\u00e9","Informativa sulla privacy","Politica de confiden\u021bialitate","\u9690\u79c1\u653f\u7b56"]],["privacy.hero.lead",["Informationen zur Verarbeitung personenbezogener Daten auf der ZAL\u2019THERA Website und in verbundenen Anwendungen.","Information about the processing of personal data on the ZAL\u2019THERA website and in connected applications.","ZAL\u2019THERA web sitesinde ve ba\u011flant\u0131l\u0131 uygulamalarda ki\u015fisel verilerin i\u015flenmesine ili\u015fkin bilgiler.","Informaci\u00f3n sobre el tratamiento de datos personales en el sitio web ZAL\u2019THERA y aplicaciones conectadas.","Informations sur le traitement des donn\u00e9es personnelles sur le site ZAL\u2019THERA et les applications li\u00e9es.","Informazioni sul trattamento dei dati personali sul sito ZAL\u2019THERA e nelle applicazioni collegate.","Informa\u021bii privind prelucrarea datelor cu caracter personal pe site-ul ZAL\u2019THERA \u0219i \u00een aplica\u021biile conectate.","\u5173\u4e8e ZAL\u2019THERA \u7f51\u7ad9\u53ca\u5173\u8054\u5e94\u7528\u4e2d\u4e2a\u4eba\u6570\u636e\u5904\u7406\u7684\u4fe1\u606f\u3002"]],["privacy.controller.title",["Verantwortlicher","Controller","Veri sorumlusu","Responsable","Responsable du traitement","Titolare del trattamento","Operator","\u63a7\u5236\u8005"]],["privacy.controller.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","\u7535\u5b50\u90ae\u4ef6\uff1a"]],["privacy.website.title",["Websitezugriff","Website access","Web sitesi eri\u015fimi","Acceso al sitio web","Acc\u00e8s au site","Accesso al sito","Accesarea site-ului","\u7f51\u7ad9\u8bbf\u95ee"]],["privacy.website.text",["Beim Aufruf dieser Website k\u00f6nnen technisch notwendige Daten verarbeitet werden, die zur Bereitstellung, Sicherheit und Stabilit\u00e4t der Website erforderlich sind.","When this website is accessed, technically necessary data may be processed to provide, secure and stabilize the website.","Bu web sitesi a\u00e7\u0131ld\u0131\u011f\u0131nda, sitenin sunulmas\u0131, g\u00fcvenli\u011fi ve kararl\u0131l\u0131\u011f\u0131 i\u00e7in gerekli teknik veriler i\u015flenebilir.","Al acceder a este sitio pueden tratarse datos t\u00e9cnicamente necesarios para ofrecer, asegurar y estabilizar el sitio.","Lors de l\u2019acc\u00e8s \u00e0 ce site, des donn\u00e9es techniquement n\u00e9cessaires peuvent \u00eatre trait\u00e9es afin d\u2019assurer sa fourniture, sa s\u00e9curit\u00e9 et sa stabilit\u00e9.","Durante l\u2019accesso al sito possono essere trattati dati tecnicamente necessari per fornire, proteggere e stabilizzare il sito.","La accesarea acestui site pot fi prelucrate date necesare tehnic pentru furnizarea, securitatea \u0219i stabilitatea site-ului.","\u8bbf\u95ee\u672c\u7f51\u7ad9\u65f6\uff0c\u53ef\u80fd\u4f1a\u5904\u7406\u4e3a\u63d0\u4f9b\u3001\u5b89\u5168\u4e0e\u7a33\u5b9a\u8fd0\u884c\u7f51\u7ad9\u6240\u5fc5\u9700\u7684\u6280\u672f\u6570\u636e\u3002"]],["privacy.contact.title",["Kontaktaufnahme","Contact","\u0130leti\u015fim","Contacto","Prise de contact","Contatto","Contact","\u8054\u7cfb"]],["privacy.contact.text1",["Wenn du uns per E-Mail oder Kontaktformular kontaktierst, verarbeiten wir die von dir \u00fcbermittelten Angaben zur Bearbeitung deiner Anfrage.","If you contact us by email or contact form, we process the information you provide in order to handle your request.","E-posta veya ileti\u015fim formu ile bize ula\u015f\u0131rsan\u0131z, talebinizi i\u015flemek i\u00e7in iletti\u011finiz bilgileri i\u015fleriz.","Si nos contactas por correo o formulario, tratamos los datos enviados para gestionar tu solicitud.","Si vous nous contactez par e-mail ou formulaire, nous traitons les informations transmises afin de g\u00e9rer votre demande.","Se ci contatti via e-mail o modulo, trattiamo i dati forniti per gestire la richiesta.","Dac\u0103 ne contactezi prin e-mail sau formular, prelucr\u0103m informa\u021biile furnizate pentru a gestiona solicitarea.","\u5982\u679c\u4f60\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u6216\u8054\u7cfb\u8868\u5355\u8054\u7cfb\u6211\u4eec\uff0c\u6211\u4eec\u4f1a\u5904\u7406\u4f60\u63d0\u4f9b\u7684\u4fe1\u606f\u4ee5\u5904\u7406\u4f60\u7684\u8bf7\u6c42\u3002"]],["privacy.contact.text2",["F\u00fcr Kontaktformulare kann ein technischer Dienst wie Formspree eingesetzt werden. Dabei k\u00f6nnen die eingegebenen Daten an diesen Dienst \u00fcbertragen werden.","A technical service such as Formspree may be used for contact forms. The entered data may therefore be transmitted to that service.","\u0130leti\u015fim formlar\u0131 i\u00e7in Formspree gibi teknik bir hizmet kullan\u0131labilir. Girilen veriler bu hizmete aktar\u0131labilir.","Para formularios de contacto puede utilizarse un servicio t\u00e9cnico como Formspree. Los datos introducidos pueden transmitirse a dicho servicio.","Un service technique tel que Formspree peut \u00eatre utilis\u00e9 pour les formulaires. Les donn\u00e9es saisies peuvent alors \u00eatre transmises \u00e0 ce service.","Per i moduli di contatto pu\u00f2 essere utilizzato un servizio tecnico come Formspree. I dati inseriti possono quindi essere trasmessi a tale servizio.","Pentru formularele de contact poate fi folosit un serviciu tehnic precum Formspree. Datele introduse pot fi transmise acestui serviciu.","\u8054\u7cfb\u8868\u5355\u53ef\u80fd\u4f7f\u7528 Formspree \u7b49\u6280\u672f\u670d\u52a1\uff0c\u8f93\u5165\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u4f20\u8f93\u7ed9\u8be5\u670d\u52a1\u3002"]],["privacy.apps.title",["ZAL\u2019THERA Apps","ZAL\u2019THERA Apps","ZAL\u2019THERA Uygulamalar\u0131","Apps ZAL\u2019THERA","Applications ZAL\u2019THERA","App ZAL\u2019THERA","Aplica\u021bii ZAL\u2019THERA","ZAL\u2019THERA \u5e94\u7528"]],["privacy.apps.text1",["Daten in ZAL\u2019THERA Anwendungen werden grunds\u00e4tzlich lokal auf dem jeweiligen Ger\u00e4t verarbeitet, soweit bei einer Funktion nicht ausdr\u00fccklich etwas anderes angegeben wird.","Data in ZAL\u2019THERA applications is generally processed locally on the respective device unless a feature explicitly states otherwise.","ZAL\u2019THERA uygulamalar\u0131ndaki veriler, bir \u00f6zellikte aksi a\u00e7\u0131k\u00e7a belirtilmedik\u00e7e temel olarak ilgili cihazda yerel i\u015flenir.","Los datos de las aplicaciones ZAL\u2019THERA se procesan en principio localmente en el dispositivo, salvo que una funci\u00f3n indique expresamente lo contrario.","Les donn\u00e9es des applications ZAL\u2019THERA sont en principe trait\u00e9es localement sur l\u2019appareil, sauf indication explicite contraire d\u2019une fonction.","I dati nelle applicazioni ZAL\u2019THERA vengono generalmente elaborati localmente sul dispositivo, salvo diversa indicazione esplicita di una funzione.","Datele din aplica\u021biile ZAL\u2019THERA sunt procesate \u00een principal local pe dispozitiv, dac\u0103 o func\u021bie nu indic\u0103 explicit altceva.","ZAL\u2019THERA \u5e94\u7528\u4e2d\u7684\u6570\u636e\u539f\u5219\u4e0a\u5728\u76f8\u5e94\u8bbe\u5907\u672c\u5730\u5904\u7406\uff0c\u9664\u975e\u67d0\u9879\u529f\u80fd\u660e\u786e\u8bf4\u660e\u5176\u4ed6\u5904\u7406\u65b9\u5f0f\u3002"]],["privacy.apps.text2",["Einzelne zuk\u00fcnftige Funktionen k\u00f6nnen externe Dienste verwenden. In diesem Fall wird die jeweilige Verarbeitung transparent beschrieben.","Individual future features may use external services. In that case, the relevant processing will be described transparently.","Gelecekteki baz\u0131 \u00f6zellikler harici hizmetler kullanabilir. Bu durumda ilgili i\u015fleme \u015feffaf bi\u00e7imde a\u00e7\u0131klan\u0131r.","Algunas funciones futuras pueden utilizar servicios externos. En ese caso, el tratamiento correspondiente se describir\u00e1 de forma transparente.","Certaines fonctions futures peuvent utiliser des services externes. Le traitement concern\u00e9 sera alors d\u00e9crit de mani\u00e8re transparente.","Alcune funzioni future possono utilizzare servizi esterni. In tal caso il relativo trattamento sar\u00e0 descritto in modo trasparente.","Unele func\u021bii viitoare pot utiliza servicii externe. \u00cen acest caz, prelucrarea va fi descris\u0103 transparent.","\u672a\u6765\u90e8\u5206\u529f\u80fd\u53ef\u80fd\u4f7f\u7528\u5916\u90e8\u670d\u52a1\uff1b\u5c4a\u65f6\u76f8\u5173\u5904\u7406\u4f1a\u900f\u660e\u8bf4\u660e\u3002"]],["privacy.files.title",["Kamera, Fotos und Dateien","Camera, photos and files","Kamera, foto\u011fraflar ve dosyalar","C\u00e1mara, fotos y archivos","Cam\u00e9ra, photos et fichiers","Fotocamera, foto e file","Camer\u0103, fotografii \u0219i fi\u0219iere","\u76f8\u673a\u3001\u7167\u7247\u4e0e\u6587\u4ef6"]],["privacy.files.text",["Wenn eine App Zugriff auf Kamera, Fotos oder Dateien ben\u00f6tigt, erfolgt dieser Zugriff nur im Rahmen der jeweiligen Funktion und nach den Berechtigungen des Betriebssystems.","If an app requires access to the camera, photos or files, that access occurs only for the relevant feature and according to operating-system permissions.","Bir uygulama kamera, foto\u011fraf veya dosyalara eri\u015fim gerektiriyorsa bu eri\u015fim yaln\u0131zca ilgili \u00f6zellik kapsam\u0131nda ve i\u015fletim sistemi izinlerine g\u00f6re ger\u00e7ekle\u015fir.","Si una app necesita acceso a c\u00e1mara, fotos o archivos, ese acceso se realiza solo para la funci\u00f3n correspondiente y seg\u00fan los permisos del sistema operativo.","Si une application n\u00e9cessite l\u2019acc\u00e8s \u00e0 la cam\u00e9ra, aux photos ou aux fichiers, cet acc\u00e8s n\u2019a lieu que pour la fonction concern\u00e9e et selon les autorisations du syst\u00e8me.","Se un\u2019app richiede accesso a fotocamera, foto o file, l\u2019accesso avviene solo per la funzione interessata e secondo i permessi del sistema operativo.","Dac\u0103 o aplica\u021bie necesit\u0103 acces la camer\u0103, fotografii sau fi\u0219iere, accesul are loc doar pentru func\u021bia respectiv\u0103 \u0219i conform permisiunilor sistemului.","\u5982\u679c\u5e94\u7528\u9700\u8981\u8bbf\u95ee\u76f8\u673a\u3001\u7167\u7247\u6216\u6587\u4ef6\uff0c\u8be5\u8bbf\u95ee\u4ec5\u7528\u4e8e\u76f8\u5e94\u529f\u80fd\uff0c\u5e76\u9075\u5faa\u64cd\u4f5c\u7cfb\u7edf\u6743\u9650\u3002"]],["privacy.tracking.title",["Tracking und Werbung","Tracking and advertising","Takip ve reklam","Seguimiento y publicidad","Suivi et publicit\u00e9","Tracciamento e pubblicit\u00e0","Urm\u0103rire \u0219i publicitate","\u8ddf\u8e2a\u4e0e\u5e7f\u544a"]],["privacy.tracking.text",["ZAL\u2019THERA verwendet keine werbebasierten Tracking-Systeme, sofern nicht ausdr\u00fccklich anders angegeben.","ZAL\u2019THERA does not use advertising-based tracking systems unless explicitly stated otherwise.","ZAL\u2019THERA, a\u00e7\u0131k\u00e7a aksi belirtilmedik\u00e7e reklam temelli takip sistemleri kullanmaz.","ZAL\u2019THERA no utiliza sistemas de seguimiento publicitario salvo indicaci\u00f3n expresa en contrario.","ZAL\u2019THERA n\u2019utilise pas de syst\u00e8mes de suivi publicitaire sauf indication explicite contraire.","ZAL\u2019THERA non utilizza sistemi di tracciamento pubblicitario salvo diversa indicazione esplicita.","ZAL\u2019THERA nu utilizeaz\u0103 sisteme de urm\u0103rire bazate pe publicitate, dac\u0103 nu se indic\u0103 explicit altfel.","\u9664\u975e\u660e\u786e\u53e6\u6709\u8bf4\u660e\uff0cZAL\u2019THERA \u4e0d\u4f7f\u7528\u57fa\u4e8e\u5e7f\u544a\u7684\u8ddf\u8e2a\u7cfb\u7edf\u3002"]],["privacy.purposes.title",["Zwecke der Verarbeitung","Purposes of processing","\u0130\u015fleme ama\u00e7lar\u0131","Finalidades del tratamiento","Finalit\u00e9s du traitement","Finalit\u00e0 del trattamento","Scopurile prelucr\u0103rii","\u5904\u7406\u76ee\u7684"]],["privacy.purposes.website",["Bereitstellung und Sicherheit der Website","Providing and securing the website","Web sitesinin sunulmas\u0131 ve g\u00fcvenli\u011fi","Prestaci\u00f3n y seguridad del sitio web","Fourniture et s\u00e9curit\u00e9 du site","Fornitura e sicurezza del sito","Furnizarea \u0219i securitatea site-ului","\u63d0\u4f9b\u4e0e\u4fdd\u969c\u7f51\u7ad9\u5b89\u5168"]],["privacy.purposes.support",["Bearbeitung von Support- und Kontaktanfragen","Handling support and contact requests","Destek ve ileti\u015fim taleplerinin i\u015flenmesi","Gesti\u00f3n de solicitudes de soporte y contacto","Traitement des demandes de support et de contact","Gestione delle richieste di supporto e contatto","Gestionarea solicit\u0103rilor de suport \u0219i contact","\u5904\u7406\u652f\u6301\u4e0e\u8054\u7cfb\u8bf7\u6c42"]],["privacy.purposes.features",["Bereitstellung von App-Funktionen","Providing app features","Uygulama \u00f6zelliklerinin sunulmas\u0131","Prestaci\u00f3n de funciones de la app","Fourniture des fonctions de l\u2019application","Fornitura delle funzioni dell\u2019app","Furnizarea func\u021biilor aplica\u021biei","\u63d0\u4f9b\u5e94\u7528\u529f\u80fd"]],["privacy.purposes.storage",["Lokale Speicherung und Verarbeitung, soweit vorgesehen","Local storage and processing where intended","\u00d6ng\u00f6r\u00fcld\u00fc\u011f\u00fc \u00f6l\u00e7\u00fcde yerel depolama ve i\u015fleme","Almacenamiento y tratamiento local cuando est\u00e9 previsto","Stockage et traitement locaux lorsque pr\u00e9vus","Archiviazione ed elaborazione locale ove previste","Stocare \u0219i prelucrare local\u0103, unde este prev\u0103zut","\u6309\u8bbe\u8ba1\u8fdb\u884c\u672c\u5730\u5b58\u50a8\u4e0e\u5904\u7406"]],["privacy.purposes.improvement",["Technische Stabilit\u00e4t und Verbesserung","Technical stability and improvement","Teknik kararl\u0131l\u0131k ve geli\u015ftirme","Estabilidad t\u00e9cnica y mejora","Stabilit\u00e9 technique et am\u00e9lioration","Stabilit\u00e0 tecnica e miglioramento","Stabilitate tehnic\u0103 \u0219i \u00eembun\u0103t\u0103\u021bire","\u6280\u672f\u7a33\u5b9a\u4e0e\u6539\u8fdb"]],["privacy.legalBasis.title",["Rechtsgrundlagen","Legal bases","Hukuki dayanaklar","Bases jur\u00eddicas","Bases l\u00e9gales","Basi giuridiche","Temeiuri juridice","\u6cd5\u5f8b\u4f9d\u636e"]],["privacy.legalBasis.text",["Je nach Verarbeitung kommen insbesondere Art. 6 Abs. 1 lit. b und lit. f DSGVO sowie \u2013 sofern erforderlich \u2013 eine Einwilligung als Rechtsgrundlage in Betracht.","Depending on the processing, Art. 6(1)(b) and (f) GDPR in particular, and consent where required, may serve as legal bases.","\u0130\u015flemeye ba\u011fl\u0131 olarak \u00f6zellikle GDPR Madde 6(1)(b) ve (f) ile gerekti\u011finde r\u0131za hukuki dayanak olabilir.","Seg\u00fan el tratamiento, pueden ser aplicables en particular el art. 6.1.b y f del RGPD y, cuando sea necesario, el consentimiento.","Selon le traitement, l\u2019art. 6, par. 1, b et f du RGPD ainsi que, si n\u00e9cessaire, le consentement peuvent notamment constituer la base l\u00e9gale.","A seconda del trattamento, possono costituire base giuridica in particolare l\u2019art. 6(1)(b) e (f) GDPR e, se necessario, il consenso.","\u00cen func\u021bie de prelucrare, \u00een special art. 6 alin. (1) lit. b \u0219i f GDPR \u0219i, dac\u0103 este necesar, consim\u021b\u0103m\u00e2ntul pot constitui temeiuri juridice.","\u6839\u636e\u5904\u7406\u60c5\u5f62\uff0cGDPR \u7b2c 6(1)(b) \u4e0e (f) \u6761\uff0c\u4ee5\u53ca\u5728\u5fc5\u8981\u65f6\u7684\u540c\u610f\uff0c\u53ef\u4f5c\u4e3a\u76f8\u5173\u6cd5\u5f8b\u4f9d\u636e\u3002"]],["privacy.storage.title",["Speicherdauer","Storage period","Saklama s\u00fcresi","Plazo de conservaci\u00f3n","Dur\u00e9e de conservation","Periodo di conservazione","Perioada de stocare","\u5b58\u50a8\u671f\u9650"]],["privacy.storage.text",["Personenbezogene Daten werden nur so lange gespeichert, wie dies f\u00fcr den jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten dies verlangen.","Personal data is stored only for as long as necessary for the relevant purpose or as required by law.","Ki\u015fisel veriler yaln\u0131zca ilgili ama\u00e7 i\u00e7in gerekli oldu\u011fu veya yasal y\u00fck\u00fcml\u00fcl\u00fckler gerektirdi\u011fi s\u00fcre boyunca saklan\u0131r.","Los datos personales se conservan solo mientras sea necesario para la finalidad correspondiente o lo exija la ley.","Les donn\u00e9es personnelles ne sont conserv\u00e9es que pendant la dur\u00e9e n\u00e9cessaire \u00e0 la finalit\u00e9 concern\u00e9e ou impos\u00e9e par la loi.","I dati personali sono conservati solo per il tempo necessario allo scopo pertinente o richiesto dalla legge.","Datele cu caracter personal sunt stocate doar at\u00e2t timp c\u00e2t este necesar scopului respectiv sau impus de lege.","\u4e2a\u4eba\u6570\u636e\u4ec5\u5728\u76f8\u5173\u76ee\u7684\u6240\u9700\u671f\u95f4\u6216\u6cd5\u5f8b\u8981\u6c42\u7684\u671f\u9650\u5185\u4fdd\u5b58\u3002"]],["privacy.rights.title",["Deine Rechte","Your rights","Haklar\u0131n\u0131z","Tus derechos","Vos droits","I tuoi diritti","Drepturile tale","\u4f60\u7684\u6743\u5229"]],["privacy.rights.text1",["Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung, L\u00f6schung, Einschr\u00e4nkung der Verarbeitung, Daten\u00fcbertragbarkeit und Widerspruch.","Subject to legal requirements, you have rights including access, rectification, erasure, restriction of processing, data portability and objection.","Yasal ko\u015fullar \u00e7er\u00e7evesinde eri\u015fim, d\u00fczeltme, silme, i\u015flemenin k\u0131s\u0131tlanmas\u0131, veri ta\u015f\u0131nabilirli\u011fi ve itiraz gibi haklara sahipsiniz.","Dentro de los requisitos legales tienes derechos, entre otros, de acceso, rectificaci\u00f3n, supresi\u00f3n, limitaci\u00f3n del tratamiento, portabilidad y oposici\u00f3n.","Sous r\u00e9serve des conditions l\u00e9gales, vous disposez notamment de droits d\u2019acc\u00e8s, de rectification, d\u2019effacement, de limitation, de portabilit\u00e9 et d\u2019opposition.","Nel rispetto dei requisiti legali hai, tra gli altri, diritti di accesso, rettifica, cancellazione, limitazione, portabilit\u00e0 e opposizione.","\u00cen condi\u021biile legii ai, printre altele, drepturi de acces, rectificare, \u0219tergere, restric\u021bionare, portabilitate \u0219i opozi\u021bie.","\u5728\u6cd5\u5f8b\u89c4\u5b9a\u6761\u4ef6\u4e0b\uff0c\u4f60\u5c24\u5176\u4eab\u6709\u8bbf\u95ee\u3001\u66f4\u6b63\u3001\u5220\u9664\u3001\u9650\u5236\u5904\u7406\u3001\u6570\u636e\u53ef\u643a\u4e0e\u53cd\u5bf9\u7b49\u6743\u5229\u3002"]],["privacy.rights.text2",["Au\u00dferdem besteht das Recht, sich bei einer zust\u00e4ndigen Datenschutzaufsichtsbeh\u00f6rde zu beschweren.","You also have the right to lodge a complaint with a competent data-protection supervisory authority.","Ayr\u0131ca yetkili veri koruma denetim makam\u0131na \u015fik\u00e2yette bulunma hakk\u0131n\u0131z vard\u0131r.","Tambi\u00e9n tienes derecho a presentar una reclamaci\u00f3n ante una autoridad de protecci\u00f3n de datos competente.","Vous avez \u00e9galement le droit d\u2019introduire une r\u00e9clamation aupr\u00e8s d\u2019une autorit\u00e9 de contr\u00f4le comp\u00e9tente.","Hai inoltre il diritto di proporre reclamo a un\u2019autorit\u00e0 di controllo competente.","Ai de asemenea dreptul de a depune o pl\u00e2ngere la o autoritate competent\u0103 de protec\u021bie a datelor.","\u4f60\u8fd8\u6709\u6743\u5411\u6709\u7ba1\u8f96\u6743\u7684\u6570\u636e\u4fdd\u62a4\u76d1\u7ba1\u673a\u6784\u63d0\u51fa\u6295\u8bc9\u3002"]],["privacy.externalLinks.title",["Externe Links","External links","Harici ba\u011flant\u0131lar","Enlaces externos","Liens externes","Link esterni","Linkuri externe","\u5916\u90e8\u94fe\u63a5"]],["privacy.externalLinks.text",["F\u00fcr Inhalte und Datenschutzpraktiken externer Websites gelten die Bestimmungen der jeweiligen Anbieter.","The policies of the respective providers apply to the content and privacy practices of external websites.","Harici web sitelerinin i\u00e7erik ve gizlilik uygulamalar\u0131 i\u00e7in ilgili sa\u011flay\u0131c\u0131lar\u0131n h\u00fck\u00fcmleri ge\u00e7erlidir.","Para el contenido y las pr\u00e1cticas de privacidad de sitios externos se aplican las disposiciones de sus respectivos proveedores.","Les dispositions des fournisseurs concern\u00e9s s\u2019appliquent au contenu et aux pratiques de confidentialit\u00e9 des sites externes.","Per contenuti e pratiche privacy dei siti esterni si applicano le disposizioni dei rispettivi fornitori.","Pentru con\u021binutul \u0219i practicile de confiden\u021bialitate ale site-urilor externe se aplic\u0103 regulile furnizorilor respectivi.","\u5916\u90e8\u7f51\u7ad9\u7684\u5185\u5bb9\u4e0e\u9690\u79c1\u5b9e\u8df5\u9002\u7528\u5404\u81ea\u63d0\u4f9b\u8005\u7684\u89c4\u5b9a\u3002"]],["privacy.actions.home",["Zur Startseite","Back to home","Ana sayfaya d\u00f6n","Volver al inicio","Retour \u00e0 l\u2019accueil","Torna alla home","\u00cenapoi acas\u0103","\u8fd4\u56de\u9996\u9875"]],["terms.hero.eyebrow",["ALLGEMEINE GESCH\u00c4FTSBEDINGUNGEN","TERMS AND CONDITIONS","GENEL \u015eARTLAR VE KO\u015eULLAR","T\u00c9RMINOS Y CONDICIONES","CONDITIONS G\u00c9N\u00c9RALES","TERMINI E CONDIZIONI","TERMENI \u0218I CONDI\u021aII","\u4e00\u822c\u6761\u6b3e\u4e0e\u6761\u4ef6"]],["terms.hero.title",["Allgemeine Gesch\u00e4ftsbedingungen (AGB)","Terms and Conditions","Genel \u015eartlar ve Ko\u015fullar","T\u00e9rminos y Condiciones","Conditions G\u00e9n\u00e9rales","Termini e Condizioni","Termeni \u0219i Condi\u021bii","\u4e00\u822c\u6761\u6b3e\u4e0e\u6761\u4ef6"]],["terms.provider.title",["1. Anbieter","1. Provider","1. Sa\u011flay\u0131c\u0131","1. Proveedor","1. Fournisseur","1. Fornitore","1. Furnizor","1. \u63d0\u4f9b\u8005"]],["terms.provider.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","\u7535\u5b50\u90ae\u4ef6\uff1a"]],["terms.subject.title",["2. Vertragsgegenstand","2. Subject of the contract","2. S\u00f6zle\u015fmenin konusu","2. Objeto del contrato","2. Objet du contrat","2. Oggetto del contratto","2. Obiectul contractului","2. \u5408\u540c\u6807\u7684"]],["terms.subject.text",["Gegenstand ist der Verkauf einer digitalen Anwendung (\u201eLifeFlow\u201c). Es handelt sich aktuell um eine Vorbestellung. Der Zugriff erfolgt nach Ver\u00f6ffentlichung.","The subject is the sale of a digital application (\u201cLifeFlow\u201d). It is currently a pre-order. Access is provided after publication.","S\u00f6zle\u015fmenin konusu dijital bir uygulaman\u0131n (\u201cLifeFlow\u201d) sat\u0131\u015f\u0131d\u0131r. \u015eu anda \u00f6n sipari\u015ftir. Eri\u015fim yay\u0131mland\u0131ktan sonra sa\u011flan\u0131r.","El objeto es la venta de una aplicaci\u00f3n digital (\u201cLifeFlow\u201d). Actualmente se trata de una precompra. El acceso se proporciona tras la publicaci\u00f3n.","L\u2019objet est la vente d\u2019une application num\u00e9rique (\u00ab LifeFlow \u00bb). Il s\u2019agit actuellement d\u2019une pr\u00e9commande. L\u2019acc\u00e8s est fourni apr\u00e8s publication.","Oggetto \u00e8 la vendita di un\u2019applicazione digitale (\u201cLifeFlow\u201d). Attualmente si tratta di un preordine. L\u2019accesso viene fornito dopo la pubblicazione.","Obiectul este v\u00e2nzarea unei aplica\u021bii digitale (\u201eLifeFlow\u201d). \u00cen prezent este o precomand\u0103. Accesul este oferit dup\u0103 publicare.","\u6807\u7684\u662f\u6570\u5b57\u5e94\u7528\u201cLifeFlow\u201d\u7684\u9500\u552e\u3002\u76ee\u524d\u5c5e\u4e8e\u9884\u8d2d\uff0c\u53d1\u5e03\u540e\u63d0\u4f9b\u8bbf\u95ee\u3002"]],["terms.contract.title",["3. Vertragsschluss","3. Conclusion of contract","3. S\u00f6zle\u015fmenin kurulmas\u0131","3. Celebraci\u00f3n del contrato","3. Conclusion du contrat","3. Conclusione del contratto","3. \u00cencheierea contractului","3. \u5408\u540c\u6210\u7acb"]],["terms.contract.text",["Der Vertrag kommt zustande, sobald die Zahlung \u00fcber den bereitgestellten Zahlungsanbieter (z. B. PayPal) erfolgt ist.","The contract is concluded once payment has been made through the provided payment provider (e.g. PayPal).","S\u00f6zle\u015fme, sa\u011flanan \u00f6deme hizmeti (\u00f6r. PayPal) \u00fczerinden \u00f6deme yap\u0131ld\u0131\u011f\u0131nda kurulur.","El contrato se celebra cuando se realiza el pago mediante el proveedor de pago facilitado (p. ej., PayPal).","Le contrat est conclu d\u00e8s que le paiement est effectu\u00e9 via le prestataire de paiement fourni (p. ex. PayPal).","Il contratto si conclude quando il pagamento viene effettuato tramite il fornitore di pagamento messo a disposizione (es. PayPal).","Contractul se \u00eencheie odat\u0103 ce plata este efectuat\u0103 prin furnizorul de pl\u0103\u021bi disponibil (de ex. PayPal).","\u4e00\u65e6\u901a\u8fc7\u63d0\u4f9b\u7684\u652f\u4ed8\u670d\u52a1\u5546\uff08\u4f8b\u5982 PayPal\uff09\u5b8c\u6210\u4ed8\u6b3e\uff0c\u5408\u540c\u5373\u6210\u7acb\u3002"]],["terms.delivery.title",["4. Lieferung","4. Delivery","4. Teslimat","4. Entrega","4. Livraison","4. Consegna","4. Livrare","4. \u4ea4\u4ed8"]],["terms.delivery.text",["Die Lieferung erfolgt digital. Der Zugang zur Anwendung wird nach Ver\u00f6ffentlichung bereitgestellt. Ein genauer Zeitpunkt kann nicht garantiert werden, erfolgt jedoch so schnell wie m\u00f6glich.","Delivery is digital. Access to the application is provided after publication. An exact date cannot be guaranteed, but access will be provided as quickly as possible.","Teslimat dijital olarak yap\u0131l\u0131r. Uygulamaya eri\u015fim yay\u0131mland\u0131ktan sonra sa\u011flan\u0131r. Kesin bir tarih garanti edilemez ancak m\u00fcmk\u00fcn olan en k\u0131sa s\u00fcrede sa\u011flan\u0131r.","La entrega es digital. El acceso a la aplicaci\u00f3n se proporciona tras la publicaci\u00f3n. No puede garantizarse una fecha exacta, pero se facilitar\u00e1 lo antes posible.","La livraison est num\u00e9rique. L\u2019acc\u00e8s \u00e0 l\u2019application est fourni apr\u00e8s publication. Une date pr\u00e9cise ne peut \u00eatre garantie, mais l\u2019acc\u00e8s sera fourni d\u00e8s que possible.","La consegna \u00e8 digitale. L\u2019accesso all\u2019applicazione viene fornito dopo la pubblicazione. Non \u00e8 possibile garantire una data esatta, ma sar\u00e0 fornito il prima possibile.","Livrarea este digital\u0103. Accesul la aplica\u021bie este oferit dup\u0103 publicare. Nu poate fi garantat\u0103 o dat\u0103 exact\u0103, dar accesul va fi oferit c\u00e2t mai repede posibil.","\u4ea4\u4ed8\u4ee5\u6570\u5b57\u65b9\u5f0f\u8fdb\u884c\u3002\u5e94\u7528\u53d1\u5e03\u540e\u63d0\u4f9b\u8bbf\u95ee\u3002\u65e0\u6cd5\u4fdd\u8bc1\u786e\u5207\u65f6\u95f4\uff0c\u4f46\u4f1a\u5c3d\u5feb\u63d0\u4f9b\u3002"]],["terms.prices.title",["5. Preise","5. Prices","5. Fiyatlar","5. Precios","5. Prix","5. Prezzi","5. Pre\u021buri","5. \u4ef7\u683c"]],["terms.prices.text",["Alle Preise sind Endpreise. Gem\u00e4\u00df \u00a719 UStG wird keine Umsatzsteuer berechnet.","All prices are final prices. No VAT is charged pursuant to \u00a719 UStG.","T\u00fcm fiyatlar nihai fiyatlard\u0131r. Alman UStG \u00a719 uyar\u0131nca KDV hesaplanmaz.","Todos los precios son finales. Conforme al \u00a719 UStG no se cobra IVA.","Tous les prix sont des prix finaux. Conform\u00e9ment au \u00a719 UStG, aucune TVA n\u2019est factur\u00e9e.","Tutti i prezzi sono finali. Ai sensi del \u00a719 UStG non viene addebitata IVA.","Toate pre\u021burile sunt finale. Conform \u00a719 UStG nu se percepe TVA.","\u6240\u6709\u4ef7\u683c\u5747\u4e3a\u6700\u7ec8\u4ef7\u683c\u3002\u6839\u636e\u5fb7\u56fd UStG \u7b2c 19 \u6761\uff0c\u4e0d\u6536\u53d6\u589e\u503c\u7a0e\u3002"]],["terms.license.title",["6. Nutzungsrechte","6. Usage rights","6. Kullan\u0131m haklar\u0131","6. Derechos de uso","6. Droits d\u2019utilisation","6. Diritti d\u2019uso","6. Drepturi de utilizare","6. \u4f7f\u7528\u6743"]],["terms.license.text",["Der K\u00e4ufer erh\u00e4lt ein einfaches, nicht \u00fcbertragbares Nutzungsrecht. Weitergabe, Verkauf oder Vervielf\u00e4ltigung der Software ist nicht gestattet.","The buyer receives a simple, non-transferable right of use. Distribution, resale or reproduction of the software is not permitted.","Al\u0131c\u0131 basit ve devredilemez bir kullan\u0131m hakk\u0131 al\u0131r. Yaz\u0131l\u0131m\u0131n da\u011f\u0131t\u0131lmas\u0131, sat\u0131lmas\u0131 veya \u00e7o\u011falt\u0131lmas\u0131 yasakt\u0131r.","El comprador recibe un derecho de uso simple y no transferible. No se permite distribuir, vender o reproducir el software.","L\u2019acheteur re\u00e7oit un droit d\u2019utilisation simple et non transf\u00e9rable. La transmission, la revente ou la reproduction du logiciel ne sont pas autoris\u00e9es.","L\u2019acquirente riceve un diritto d\u2019uso semplice e non trasferibile. Non sono consentiti distribuzione, vendita o riproduzione del software.","Cump\u0103r\u0103torul prime\u0219te un drept de utilizare simplu, netransferabil. Distribuirea, v\u00e2nzarea sau reproducerea software-ului nu sunt permise.","\u8d2d\u4e70\u8005\u83b7\u5f97\u7b80\u5355\u3001\u4e0d\u53ef\u8f6c\u8ba9\u7684\u4f7f\u7528\u6743\u3002\u4e0d\u5f97\u5206\u53d1\u3001\u9500\u552e\u6216\u590d\u5236\u8f6f\u4ef6\u3002"]],["terms.liability.title",["7. Haftung","7. Liability","7. Sorumluluk","7. Responsabilidad","7. Responsabilit\u00e9","7. Responsabilit\u00e0","7. R\u0103spundere","7. \u8d23\u4efb"]],["terms.liability.text",["Die Nutzung erfolgt auf eigene Verantwortung. Es wird keine Haftung f\u00fcr finanzielle Entscheidungen \u00fcbernommen, die auf Basis der App getroffen werden.","Use is at your own responsibility. No liability is assumed for financial decisions made on the basis of the app.","Kullan\u0131m kendi sorumlulu\u011funuzdad\u0131r. Uygulamaya dayanarak al\u0131nan finansal kararlar i\u00e7in sorumluluk kabul edilmez.","El uso es bajo propia responsabilidad. No se asume responsabilidad por decisiones financieras tomadas sobre la base de la app.","L\u2019utilisation se fait sous votre propre responsabilit\u00e9. Aucune responsabilit\u00e9 n\u2019est assum\u00e9e pour les d\u00e9cisions financi\u00e8res prises sur la base de l\u2019application.","L\u2019utilizzo avviene sotto la propria responsabilit\u00e0. Non si assume responsabilit\u00e0 per decisioni finanziarie prese sulla base dell\u2019app.","Utilizarea are loc pe propria r\u0103spundere. Nu se asum\u0103 r\u0103spundere pentru decizii financiare luate pe baza aplica\u021biei.","\u4f7f\u7528\u7531\u7528\u6237\u81ea\u884c\u8d1f\u8d23\u3002\u5bf9\u4e8e\u57fa\u4e8e\u8be5\u5e94\u7528\u505a\u51fa\u7684\u8d22\u52a1\u51b3\u5b9a\uff0c\u4e0d\u627f\u62c5\u8d23\u4efb\u3002"]],["terms.final.title",["8. Schlussbestimmungen","8. Final provisions","8. Son h\u00fck\u00fcmler","8. Disposiciones finales","8. Dispositions finales","8. Disposizioni finali","8. Dispozi\u021bii finale","8. \u6700\u7ec8\u6761\u6b3e"]],["terms.final.text",["Es gilt deutsches Recht.","German law applies.","Alman hukuku uygulan\u0131r.","Se aplica el derecho alem\u00e1n.","Le droit allemand s\u2019applique.","Si applica il diritto tedesco.","Se aplic\u0103 dreptul german.","\u9002\u7528\u5fb7\u56fd\u6cd5\u5f8b\u3002"]],["terms.actions.home",["Zur Startseite","Back to home","Ana sayfaya d\u00f6n","Volver al inicio","Retour \u00e0 l\u2019accueil","Torna alla home","\u00cenapoi acas\u0103","\u8fd4\u56de\u9996\u9875"]],["withdrawal.hero.eyebrow",["WIDERRUF","WITHDRAWAL","CAYMA","DESISTIMIENTO","R\u00c9TRACTATION","RECESSO","RETRAGERE","\u64a4\u9500"]],["withdrawal.hero.title",["Widerrufsbelehrung","Withdrawal Policy","Cayma Hakk\u0131 Bilgilendirmesi","Informaci\u00f3n sobre desistimiento","Information sur le droit de r\u00e9tractation","Informativa sul recesso","Informare privind retragerea","\u64a4\u9500\u6743\u8bf4\u660e"]],["withdrawal.right.title",["Widerrufsrecht","Right of withdrawal","Cayma hakk\u0131","Derecho de desistimiento","Droit de r\u00e9tractation","Diritto di recesso","Drept de retragere","\u64a4\u9500\u6743"]],["withdrawal.right.text1",["Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gr\u00fcnden diesen Vertrag zu widerrufen.","You have the right to withdraw from this contract within fourteen days without giving any reason.","On d\u00f6rt g\u00fcn i\u00e7inde herhangi bir gerek\u00e7e g\u00f6stermeden bu s\u00f6zle\u015fmeden cayma hakk\u0131n\u0131z vard\u0131r.","Tienes derecho a desistir de este contrato en un plazo de catorce d\u00edas sin indicar motivo.","Vous avez le droit de vous r\u00e9tracter de ce contrat dans un d\u00e9lai de quatorze jours sans indiquer de motif.","Hai il diritto di recedere dal presente contratto entro quattordici giorni senza indicarne il motivo.","Ai dreptul s\u0103 te retragi din acest contract \u00een termen de paisprezece zile f\u0103r\u0103 a indica un motiv.","\u4f60\u6709\u6743\u5728\u5341\u56db\u5929\u5185\u65e0\u987b\u8bf4\u660e\u7406\u7531\u64a4\u9500\u672c\u5408\u540c\u3002"]],["withdrawal.right.text2",["Die Widerrufsfrist betr\u00e4gt vierzehn Tage ab dem Tag des Vertragsabschlusses.","The withdrawal period is fourteen days from the day the contract is concluded.","Cayma s\u00fcresi s\u00f6zle\u015fmenin kuruldu\u011fu g\u00fcnden itibaren on d\u00f6rt g\u00fcnd\u00fcr.","El plazo de desistimiento es de catorce d\u00edas desde la celebraci\u00f3n del contrato.","Le d\u00e9lai de r\u00e9tractation est de quatorze jours \u00e0 compter de la conclusion du contrat.","Il termine di recesso \u00e8 di quattordici giorni dalla conclusione del contratto.","Perioada de retragere este de paisprezece zile de la data \u00eencheierii contractului.","\u64a4\u9500\u671f\u9650\u4e3a\u5408\u540c\u6210\u7acb\u4e4b\u65e5\u8d77\u5341\u56db\u5929\u3002"]],["withdrawal.right.text3",["Um dein Widerrufsrecht auszu\u00fcben, musst du uns (Patrick Walker, contact@zalthera.de) mittels einer eindeutigen Erkl\u00e4rung (z. B. E-Mail) \u00fcber deinen Entschluss informieren.","To exercise your right of withdrawal, you must inform us (Patrick Walker, contact@zalthera.de) of your decision by means of a clear statement (e.g. email).","Cayma hakk\u0131n\u0131z\u0131 kullanmak i\u00e7in karar\u0131n\u0131z\u0131 a\u00e7\u0131k bir beyanla (\u00f6r. e-posta) bize (Patrick Walker, contact@zalthera.de) bildirmeniz gerekir.","Para ejercer tu derecho de desistimiento debes informarnos (Patrick Walker, contact@zalthera.de) de tu decisi\u00f3n mediante una declaraci\u00f3n inequ\u00edvoca (p. ej., correo electr\u00f3nico).","Pour exercer votre droit de r\u00e9tractation, vous devez nous informer (Patrick Walker, contact@zalthera.de) de votre d\u00e9cision au moyen d\u2019une d\u00e9claration claire (p. ex. e-mail).","Per esercitare il diritto di recesso devi informarci (Patrick Walker, contact@zalthera.de) della tua decisione mediante una dichiarazione esplicita (ad es. e-mail).","Pentru a-\u021bi exercita dreptul de retragere trebuie s\u0103 ne informezi (Patrick Walker, contact@zalthera.de) despre decizie printr-o declara\u021bie clar\u0103 (de ex. e-mail).","\u4e3a\u884c\u4f7f\u64a4\u9500\u6743\uff0c\u4f60\u5fc5\u987b\u901a\u8fc7\u660e\u786e\u58f0\u660e\uff08\u4f8b\u5982\u7535\u5b50\u90ae\u4ef6\uff09\u901a\u77e5\u6211\u4eec\uff08Patrick Walker, contact@zalthera.de\uff09\u4f60\u7684\u51b3\u5b9a\u3002"]],["withdrawal.consequences.title",["Folgen des Widerrufs","Consequences of withdrawal","Cayman\u0131n sonu\u00e7lar\u0131","Consecuencias del desistimiento","Cons\u00e9quences de la r\u00e9tractation","Conseguenze del recesso","Consecin\u021bele retragerii","\u64a4\u9500\u540e\u679c"]],["withdrawal.consequences.text",["Wenn du diesen Vertrag widerrufst, werden alle Zahlungen unverz\u00fcglich zur\u00fcckerstattet.","If you withdraw from this contract, all payments will be refunded without undue delay.","Bu s\u00f6zle\u015fmeden cayarsan\u0131z t\u00fcm \u00f6demeler gecikmeksizin iade edilir.","Si desistes de este contrato, todos los pagos ser\u00e1n reembolsados sin demora indebida.","Si vous vous r\u00e9tractez de ce contrat, tous les paiements seront rembours\u00e9s sans retard injustifi\u00e9.","Se recedi dal contratto, tutti i pagamenti saranno rimborsati senza indebito ritardo.","Dac\u0103 te retragi din acest contract, toate pl\u0103\u021bile vor fi rambursate f\u0103r\u0103 \u00eent\u00e2rzieri nejustificate.","\u5982\u679c\u4f60\u64a4\u9500\u672c\u5408\u540c\uff0c\u6240\u6709\u4ed8\u6b3e\u5c06\u53ca\u65f6\u9000\u8fd8\u3002"]],["withdrawal.notice.title",["Besonderer Hinweis","Special notice","\u00d6zel not","Aviso especial","Remarque particuli\u00e8re","Avviso speciale","Not\u0103 special\u0103","\u7279\u522b\u8bf4\u660e"]],["withdrawal.notice.text",["Bei digitalen Produkten kann das Widerrufsrecht erl\u00f6schen, sobald der Zugriff auf die Anwendung bereitgestellt wurde und die Nutzung beginnt.","For digital products, the right of withdrawal may expire once access to the application has been provided and use begins.","Dijital \u00fcr\u00fcnlerde, uygulamaya eri\u015fim sa\u011flan\u0131p kullan\u0131m ba\u015flad\u0131\u011f\u0131nda cayma hakk\u0131 sona erebilir.","En productos digitales, el derecho de desistimiento puede extinguirse una vez facilitado el acceso a la aplicaci\u00f3n y comenzado su uso.","Pour les produits num\u00e9riques, le droit de r\u00e9tractation peut s\u2019\u00e9teindre d\u00e8s que l\u2019acc\u00e8s \u00e0 l\u2019application est fourni et que l\u2019utilisation commence.","Per i prodotti digitali, il diritto di recesso pu\u00f2 decadere una volta fornito l\u2019accesso all\u2019applicazione e iniziato l\u2019utilizzo.","Pentru produsele digitale, dreptul de retragere poate \u00eenceta odat\u0103 ce accesul la aplica\u021bie este furnizat \u0219i utilizarea \u00eencepe.","\u5bf9\u4e8e\u6570\u5b57\u4ea7\u54c1\uff0c\u4e00\u65e6\u63d0\u4f9b\u5e94\u7528\u8bbf\u95ee\u5e76\u5f00\u59cb\u4f7f\u7528\uff0c\u64a4\u9500\u6743\u53ef\u80fd\u7ec8\u6b62\u3002"]],["withdrawal.actions.home",["Zur Startseite","Back to home","Ana sayfaya d\u00f6n","Volver al inicio","Retour \u00e0 l\u2019accueil","Torna alla home","\u00cenapoi acas\u0103","\u8fd4\u56de\u9996\u9875"]]];

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
            \u2713
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

