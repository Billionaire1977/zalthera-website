/* ============================================================
   ZAL’THERA WEBSITE
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
    tr: { short: "TR", name: "Türkçe" },
    es: { short: "ES", name: "Español" },
    fr: { short: "FR", name: "Français" },
    it: { short: "IT", name: "Italiano" },
    ro: { short: "RO", name: "Română" },
    "zh-Hans": { short: "中文", name: "简体中文" }
  };


  /* ============================================================
     TRANSLATIONS
     ============================================================ */

  const TRANSLATIONS = {

    /* ==========================================================
       DEUTSCH
       ========================================================== */

    de: {

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
      "global.open": "Öffnen",
      "global.close": "Schließen",
      "global.discover": "Entdecken",
      "global.learnMore": "Mehr erfahren",
      "global.support": "Support",
      "global.contact": "Kontakt",
      "global.available": "AVAILABLE",
      "global.development": "DEVELOPMENT",
      "global.systemModule": "SYSTEM MODULE",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Navigation öffnen",
      "global.mainNavigation": "Hauptnavigation",

      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",


      /* ========================================================
         HOME
         ======================================================== */

      "home.hero.kicker":
        "SOUVERÄNE DIGITALE ARCHITEKTUR",

      "home.hero.title":
        "One system.<br>One identity.<br>Connected intelligence.",

      "home.hero.description":
        "ZAL’THERA verbindet Identität, Kontext, künstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.",

      "home.hero.primary":
        "System entdecken",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "SYSTEMSTATUS",

      "home.state.identity":
        "IDENTITÄT",

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
        "Sie beginnt mit einer gemeinsamen Logik dafür, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tatsächlich ausgeführt werden kann.",

      "home.system.identity.title":
        "Identität",

      "home.system.identity.text":
        "Wer oder welches autorisierte System handelt?",

      "home.system.context.title":
        "Kontext",

      "home.system.context.text":
        "In welchem Zusammenhang existieren Information und Handlung?",

      "home.system.intelligence.title":
        "Intelligenz",

      "home.system.intelligence.text":
        "Was lässt sich aus dem vorhandenen Kontext verstehen?",

      "home.system.trust.title":
        "Vertrauen",

      "home.system.trust.text":
        "Was ist erlaubt, belegbar und überprüfbar?",

      "home.system.action.title":
        "Aktion",

      "home.system.action.text":
        "Was darf tatsächlich ausgeführt werden?",

      "home.system.principle":
        "KERNPRINZIP",

      "home.system.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "home.system.openArchitecture":
        "Architektur öffnen",

      "home.continuity.eyebrow":
        "PERSÖNLICHES SOUVERÄNES SYSTEM",

      "home.continuity.status":
        "AKTIVE ENTWICKLUNG",

      "home.continuity.tagline":
        "Dein Lebenskontext. Strukturiert. Verbunden. Verständlich.",

      "home.continuity.text1":
        "CONTINUITY verbindet persönliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souveränen persönlichen Umgebung.",

      "home.continuity.text2":
        "Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im persönlichen System.",

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
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Intelligenz, die ihre Grenzen kennt.",

      "home.intelligence.text1":
        "Die Intelligenzschicht arbeitet nicht losgelöst vom Menschen. Sie versteht verfügbaren Kontext, erkennt Zusammenhänge, erklärt Informationen und bereitet mögliche Aktionen vor.",

      "home.intelligence.text2":
        "Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.",

      "home.communication.eyebrow":
        "IDENTITÄT-ZU-IDENTITÄT",

      "home.communication.status":
        "AKTIVE ENTWICKLUNG",

      "home.communication.title":
        "Communication",

      "home.communication.tagline":
        "Verbindung beginnt mit Identität und Zustimmung.",

      "home.communication.text1":
        "ZAL’THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten Identitäten.",

      "home.communication.text2":
        "Sprache, später Video, Dateien und vertrauensbasierte Zustellung werden nicht über öffentliche Profile definiert, sondern über Identität, Beziehung und Berechtigung.",

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
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Reale Prozesse werden zu verständlichen Systemen.",

      "home.industry.text":
        "Die industrielle Schicht verbindet operative Übergaben, Prozesszustände, Sensordaten, Messwerte und zukünftige Maschinenanbindungen.",

      "home.industry.shift":
        "Schichtübergabe & operative Zustände",

      "home.industry.gate":
        "Sensorik, Messwerte & Maschinenprozesse",

      "home.industry.process":
        "Analyse & nachvollziehbare Prozesszustände",

      "home.proof.eyebrow":
        "NACHWEIS & VERTRAUEN",

      "home.proof.title":
        "Nachweis vor Annahme.",

      "home.proof.text":
        "ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.",

      "home.proof.open":
        "ProofFlow öffnen",

      "home.products.eyebrow":
        "SYSTEMPORTFOLIO",

      "home.products.title":
        "Ein Ökosystem. Unterschiedliche Reifegrade.",

      "home.products.lead":
        "ZAL’THERA trennt klar zwischen verfügbaren Produkten, aktiver Entwicklung, Systemmodulen und zukünftiger Architektur.",

      "home.products.lifeflow":
        "Kosten, Verträge, Fristen und persönliche Finanzübersicht.",

      "home.products.continuity":
        "Persönliche souveräne Umgebung für Dokumente, Daten, Kontext und Intelligenz.",

      "home.products.proofflow":
        "Nachweise, Audit, Signatur und überprüfbare Abläufe.",

      "home.products.shiftlog":
        "Digitale Schichtübergabe für operative Zustände und Verantwortlichkeiten.",

      "home.products.voicebridge":
        "Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten Identitäten.",

      "home.products.zalgate":
        "Architektur für die Verbindung von Sensorik, Messwerten, Maschinen und Prozesszuständen.",

      "home.products.open": "Öffnen →",
      "home.products.viewSystem": "System ansehen →",
      "home.products.viewDevelopment": "Entwicklung ansehen →",
      "home.products.viewArchitecture": "Architektur →",

      "home.pilot.eyebrow":
        "KONTROLLIERTER REALER EINSTIEG",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tatsächlichen Nutzen prüfen – ohne den bestehenden Betrieb sofort vollständig zu ersetzen.",

      "home.pilot.discover":
        "Pilot entdecken",

      "home.pilot.request":
        "Pilot anfragen",

      "home.core.eyebrow":
        "UNTER JEDEM SYSTEM",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausführung bilden den technischen Kern hinter dem Ökosystem.",

      "home.core.discover":
        "Core entdecken",

      "home.contact.eyebrow": "KONTAKT",
      "home.contact.title": "ZAL’THERA kontaktieren",

      "home.contact.text":
        "Fragen zu ZAL’THERA, einem System oder bestehenden Modulen?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Dein Name",
      "home.contact.email": "E-Mail",
      "home.contact.emailPlaceholder": "deine@email.de",
      "home.contact.message": "Nachricht",
      "home.contact.messagePlaceholder": "Deine Nachricht …",
      "home.contact.send": "Senden",

      "home.contact.privacyPrefix":
        "Mit dem Absenden akzeptierst du unsere",

      "home.contact.privacy":
        "Datenschutzerklärung",


      /* ========================================================
         CORE
         ======================================================== */

      "core.hero.kicker":
        "SYSTEMGRUNDLAGE",

      "core.hero.title":
        "Vertrauen sollte nicht<br>vorausgesetzt werden.<br>Es sollte konstruiert werden.",

      "core.hero.description":
        "ZAL’THERA Core verbindet Identität, Kontext, Regeln, Zustimmung, Nachweis und kontrollierte Ausführung zu einer gemeinsamen Vertrauensarchitektur.",

      "core.hero.architecture":
        "Architektur öffnen",

      "core.hero.identityBound":
        "IDENTITÄTSGEBUNDEN",

      "core.hero.policyGoverned":
        "REGELGESTEUERT",

      "core.hero.auditable":
        "NACHVOLLZIEHBAR",

      "core.hero.humanAuthorized":
        "MENSCHLICH AUTORISIERT",

      "core.status.label":
        "KERNPRINZIPIEN",

      "core.status.identity":
        "IDENTITÄT",

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
        "AUSFÜHRUNG",

      "core.status.act":
        "HANDELN",

      "core.architecture.eyebrow":
        "ÖFFENTLICHE ARCHITEKTUR",

      "core.architecture.title":
        "Fünf Ebenen. Eine nachvollziehbare Entscheidungskette.",

      "core.architecture.lead":
        "Die öffentliche Architektur erklärt die Grundlogik von ZAL’THERA, ohne interne Sicherheitsimplementierungen, private Schlüsselstrukturen oder Protokolldetails offenzulegen.",

      "core.architecture.identity.title":
        "Identität",

      "core.architecture.identity.text":
        "Eine Handlung beginnt mit einer eindeutig zugeordneten Identität, Rolle oder autorisierten Systeminstanz.",

      "core.architecture.context.title":
        "Kontext",

      "core.architecture.context.text":
        "Informationen werden nicht isoliert betrachtet, sondern mit Herkunft, Zeit und Beziehung verstanden.",

      "core.architecture.intelligence.title":
        "Intelligenz",

      "core.architecture.intelligence.text":
        "Systeme dürfen Informationen strukturieren, erklären und mögliche nächste Schritte vorbereiten.",

      "core.architecture.trust.title":
        "Vertrauen",

      "core.architecture.trust.text":
        "Berechtigungen, Nachweise, Consent und Audit bestimmen, was als vertrauenswürdig gelten darf.",

      "core.architecture.action.title":
        "Aktion",

      "core.architecture.action.text":
        "Konsequente Aktionen werden erst ausgeführt, wenn die erforderlichen Bedingungen erfüllt sind.",

      "core.architecture.principle":
        "SYSTEMPRINZIP",

      "core.architecture.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "core.architecture.technicalCore":
        "Technischer Kern",

      "core.technical.eyebrow":
        "TECHNISCHER KERN",

      "core.technical.lead":
        "Unterhalb der öffentlichen Architektur arbeitet eine präzisere Kontrollkette für nachvollziehbare Systemaktionen.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Regeln definieren Grenzen, Zustände, Berechtigungen und Bedingungen.",

      "core.technical.policy.question":
        "WAS IST ERLAUBT?",

      "core.technical.identity.title":
        "Identität",

      "core.technical.identity.text":
        "Aktionen werden einer Person, Rolle, Identität oder autorisierten Instanz zugeordnet.",

      "core.technical.identity.question":
        "WER HANDELT?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Relevante Ereignisse werden mit Herkunft, Zeitpunkt und Zustand nachvollziehbar dokumentiert.",

      "core.technical.audit.question":
        "WAS IST PASSIERT?",

      "core.technical.execute.title":
        "Ausführen",

      "core.technical.execute.text":
        "Eine Aktion darf den sichtbaren Zustand erst verändern, wenn die notwendigen Bedingungen erfüllt sind.",

      "core.technical.execute.question":
        "DARF ES GESCHEHEN?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Ein lokaler Wahrheitskern für überprüfbare Ereignisse.",

      "core.ledger.text1":
        "THE LEDGER hält relevante Ereignisse in nachvollziehbarer Reihenfolge fest. Einträge werden ergänzt, miteinander verbunden und können später geprüft werden.",

      "core.ledger.text2":
        "Das Ziel ist nicht, sämtliche Information zentral zu sammeln. Das Ziel ist, relevante Zustandsänderungen nachvollziehbar und überprüfbar zu machen.",

      "core.ledger.created":
        "ERSTELLT",

      "core.ledger.proof":
        "NACHWEIS",

      "core.ledger.signed":
        "SIGNIERT",

      "core.ledger.verified":
        "VERIFIZIERT",

      "core.ledger.appendOnly.title":
        "Nur ergänzend",

      "core.ledger.appendOnly.text":
        "Relevante Ereignisse werden ergänzt, nicht unbemerkt überschrieben.",

      "core.ledger.linked.title":
        "Verknüpft",

      "core.ledger.linked.text":
        "Ereignisse erhalten eine nachvollziehbare Beziehung zueinander.",

      "core.ledger.verifiable.title":
        "Überprüfbar",

      "core.ledger.verifiable.text":
        "Struktur, Integrität und Herkunft können geprüft werden.",

      "core.trust.eyebrow":
        "VERTRAUENSSCHICHT",

      "core.trust.title":
        "Vertrauen wird nicht behauptet.",

      "core.trust.lead":
        "Es entsteht aus überprüfbaren Zuständen, Identitäten, Berechtigungen und Nachweisen.",

      "core.trust.proof.title":
        "Nachweisvertrauen",

      "core.trust.proof.text":
        "Existiert ein gültiger Nachweis für die behauptete Aktion?",

      "core.trust.policy.title":
        "Regelvertrauen",

      "core.trust.policy.text":
        "Wurde innerhalb der vorgesehenen Regeln gehandelt?",

      "core.trust.identity.title":
        "Identitätsvertrauen",

      "core.trust.identity.text":
        "Ist die handelnde Identität eindeutig und autorisiert?",

      "core.trust.audit.title":
        "Audit-Vertrauen",

      "core.trust.audit.text":
        "Ist der Ablauf vollständig genug, um später nachvollzogen zu werden?",

      "core.authorization.eyebrow":
        "MENSCHLICHES AUTORISIERUNGSTOR",

      "core.authorization.title":
        "Intelligenz darf vorbereiten.<br>Autorität bleibt ausdrücklich.",

      "core.authorization.text":
        "ZAL’THERA kann Informationen verstehen, strukturieren, erklären und Handlungsmöglichkeiten vorbereiten. Konsequente Aktionen bleiben jedoch an die erforderliche menschliche oder ausdrücklich delegierte Autorisierung gebunden.",

      "core.application.eyebrow":
        "SYSTEMANWENDUNG",

      "core.application.title":
        "Ein Kern. Mehrere Anwendungswelten.",

      "core.application.personal":
        "PERSÖNLICH",

      "core.application.continuity":
        "Dokumente · Finanzen · Kontext · Cards",

      "core.application.proof":
        "NACHWEIS",

      "core.application.proofflow":
        "Nachweis · Audit · Signatur · Export",

      "core.application.communication":
        "KOMMUNIKATION",

      "core.application.voicebridge":
        "Identität · Zustimmung · Sprache · Vertrauen",

      "core.application.industry":
        "INDUSTRIE",

      "core.application.shiftlog":
        "Übergabe · Zustand · Verantwortung",

      "core.return.title":
        "Der Kern ist nicht das Produkt.<br>Er verbindet die Produkte.",

      "core.return.button":
        "Zurück zum System"
    },


    /* ==========================================================
       ENGLISH
       ========================================================== */

    en: {

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
        "ZAL’THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.",

      "home.hero.primary":
        "Discover the system",

      "home.hero.core":
        "ZAL’THERA Core",

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
      "home.intelligence.title": "ZAL’THERA Intelligence",
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
        "ZAL’THERA Communication is developing a secure communication layer between authorized identities.",

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
      "home.industry.title": "ZAL’THERA Industry",
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
        "ZAL’THERA clearly distinguishes between available products, active development, system modules and future architecture.",

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

      "home.products.open": "Open →",
      "home.products.viewSystem": "View system →",
      "home.products.viewDevelopment": "View development →",
      "home.products.viewArchitecture": "Architecture →",

      "home.pilot.eyebrow": "CONTROLLED REAL-WORLD ENTRY",
      "home.pilot.title": "ZAL’THERA Pilot",

      "home.pilot.text":
        "Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.",

      "home.pilot.discover": "Discover Pilot",
      "home.pilot.request": "Request Pilot",

      "home.core.eyebrow": "BENEATH EVERY SYSTEM",
      "home.core.title": "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.",

      "home.core.discover": "Discover Core",

      "home.contact.eyebrow": "CONTACT",
      "home.contact.title": "Contact ZAL’THERA",

      "home.contact.text":
        "Questions about ZAL’THERA, a system or existing modules?",

      "home.contact.name": "Name",
      "home.contact.namePlaceholder": "Your name",
      "home.contact.email": "Email",
      "home.contact.emailPlaceholder": "your@email.com",
      "home.contact.message": "Message",
      "home.contact.messagePlaceholder": "Your message …",
      "home.contact.send": "Send",
      "home.contact.privacyPrefix": "By submitting, you accept our",
      "home.contact.privacy": "Privacy Policy",


      /* CORE */

      "core.hero.kicker":
        "SYSTEM FOUNDATION",

      "core.hero.title":
        "Trust should not<br>be assumed.<br>It should be constructed.",

      "core.hero.description":
        "ZAL’THERA Core connects identity, context, policy, consent, evidence and controlled execution into one shared trust architecture.",

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
        "The public architecture explains the fundamental logic of ZAL’THERA without exposing internal security implementations, private key structures or protocol details.",

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
        "ZAL’THERA may understand, structure and explain information and prepare possible actions. Consequential actions remain bound to the required human or explicitly delegated authorization.",

      "core.application.eyebrow":
        "SYSTEM APPLICATION",

      "core.application.title":
        "One core. Multiple application worlds.",

      "core.application.personal":
        "PERSONAL",

      "core.application.continuity":
        "Documents · Finance · Context · Cards",

      "core.application.proof":
        "PROOF",

      "core.application.proofflow":
        "Evidence · Audit · Signature · Export",

      "core.application.communication":
        "COMMUNICATION",

      "core.application.voicebridge":
        "Identity · Consent · Voice · Trust",

      "core.application.industry":
        "INDUSTRY",

      "core.application.shiftlog":
        "Handover · State · Responsibility",

      "core.return.title":
        "The core is not the product.<br>It is what connects the products.",

      "core.return.button":
        "Back to the system"
    },


    /* ==========================================================
       TÜRKÇE
       ========================================================== */

    tr: {

      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Zekâ",
      "nav.communication": "İletişim",
      "nav.industry": "Endüstri",
      "nav.products": "Ürünler",
      "nav.about": "Hakkında",

      "global.home": "Ana Sayfa",
      "global.explore": "Keşfet",
      "global.open": "Aç",
      "global.close": "Kapat",
      "global.discover": "Keşfet",
      "global.learnMore": "Daha fazla bilgi",
      "global.support": "Destek",
      "global.contact": "İletişim",
      "global.available": "MEVCUT",
      "global.development": "GELİŞTİRME",
      "global.systemModule": "SİSTEM MODÜLÜ",
      "global.architecture": "MİMARİ",
      "global.navOpen": "Navigasyonu aç",
      "global.mainNavigation": "Ana navigasyon",

      "footer.imprint": "Yasal Bilgiler",
      "footer.privacy": "Gizlilik",

      "core.hero.kicker":
        "SİSTEM TEMELİ",

      "core.hero.title":
        "Güven varsayılmamalı.<br>İnşa edilmelidir.",

      "core.hero.description":
        "ZAL’THERA Core; kimlik, bağlam, kurallar, onay, kanıt ve kontrollü yürütmeyi ortak bir güven mimarisinde birleştirir.",

      "core.hero.architecture":
        "Mimariyi aç",

      "core.hero.identityBound":
        "KİMLİĞE BAĞLI",

      "core.hero.policyGoverned":
        "KURALLARLA YÖNETİLEN",

      "core.hero.auditable":
        "DENETLENEBİLİR",

      "core.hero.humanAuthorized":
        "İNSAN TARAFINDAN YETKİLENDİRİLMİŞ",

      "core.status.label":
        "TEMEL İLKELER",

      "core.status.identity": "KİMLİK",
      "core.status.who": "KİM",
      "core.status.context": "BAĞLAM",
      "core.status.why": "NEDEN",
      "core.status.policy": "POLİTİKA",
      "core.status.what": "NE",
      "core.status.consent": "ONAY",
      "core.status.allow": "İZİN",
      "core.status.audit": "DENETİM",
      "core.status.prove": "KANIT",
      "core.status.execution": "YÜRÜTME",
      "core.status.act": "HAREKET",

      "core.architecture.eyebrow":
        "KAMUSAL MİMARİ",

      "core.architecture.title":
        "Beş katman. Tek izlenebilir karar zinciri.",

      "core.architecture.lead":
        "Kamusal mimari, dahili güvenlik uygulamalarını, özel anahtar yapılarını veya protokol ayrıntılarını açığa çıkarmadan ZAL’THERA’nın temel mantığını açıklar.",

      "core.architecture.identity.title":
        "Kimlik",

      "core.architecture.identity.text":
        "Bir eylem açıkça atanmış bir kimlik, rol veya yetkili sistem örneğiyle başlar.",

      "core.architecture.context.title":
        "Bağlam",

      "core.architecture.context.text":
        "Bilgi yalıtılmış olarak değil, kaynak, zaman ve ilişkiyle birlikte anlaşılır.",

      "core.architecture.intelligence.title":
        "Zekâ",

      "core.architecture.intelligence.text":
        "Sistemler bilgiyi yapılandırabilir, açıklayabilir ve olası sonraki adımları hazırlayabilir.",

      "core.architecture.trust.title":
        "Güven",

      "core.architecture.trust.text":
        "Yetkiler, kanıtlar, onay ve denetim, neyin güvenilir kabul edilebileceğini belirler.",

      "core.architecture.action.title":
        "Eylem",

      "core.architecture.action.text":
        "Önemli eylemler yalnızca gerekli koşullar sağlandığında gerçekleştirilir.",

      "core.architecture.principle":
        "SİSTEM İLKESİ",

      "core.architecture.principleText":
        "Önce anla. Sonra hazırla. Yalnızca izinle hareket et.",

      "core.architecture.technicalCore":
        "Teknik Çekirdek",

      "core.technical.eyebrow":
        "TEKNİK ÇEKİRDEK",

      "core.technical.lead":
        "Kamusal mimarinin altında, izlenebilir sistem eylemleri için daha hassas bir kontrol zinciri çalışır.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Kurallar sınırları, durumları, yetkileri ve koşulları tanımlar.",

      "core.technical.policy.question":
        "NEYE İZİN VAR?",

      "core.technical.identity.title":
        "Kimlik",

      "core.technical.identity.text":
        "Eylemler bir kişiye, role, kimliğe veya yetkili örneğe atanır.",

      "core.technical.identity.question":
        "KİM HAREKET EDİYOR?",

      "core.technical.audit.title":
        "Denetim",

      "core.technical.audit.text":
        "İlgili olaylar kaynak, zaman ve durum bilgileriyle izlenebilir biçimde belgelenir.",

      "core.technical.audit.question":
        "NE OLDU?",

      "core.technical.execute.title":
        "Yürütme",

      "core.technical.execute.text":
        "Bir eylem yalnızca gerekli koşullar sağlandıktan sonra görünür durumu değiştirebilir.",

      "core.technical.execute.question":
        "GERÇEKLEŞEBİLİR Mİ?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Doğrulanabilir olaylar için yerel bir gerçeklik çekirdeği.",

      "core.ledger.text1":
        "THE LEDGER ilgili olayları izlenebilir bir sırayla kaydeder. Kayıtlar eklenir, birbirine bağlanır ve daha sonra incelenebilir.",

      "core.ledger.text2":
        "Amaç tüm bilgileri merkezi olarak toplamak değildir. Amaç önemli durum değişikliklerini izlenebilir ve doğrulanabilir hale getirmektir.",

      "core.ledger.created": "OLUŞTURULDU",
      "core.ledger.proof": "KANIT",
      "core.ledger.signed": "İMZALANDI",
      "core.ledger.verified": "DOĞRULANDI",

      "core.ledger.appendOnly.title":
        "Yalnızca ekleme",

      "core.ledger.appendOnly.text":
        "İlgili olaylar sessizce üzerine yazılmak yerine eklenir.",

      "core.ledger.linked.title":
        "Bağlantılı",

      "core.ledger.linked.text":
        "Olaylar birbirleriyle izlenebilir ilişkiler taşır.",

      "core.ledger.verifiable.title":
        "Doğrulanabilir",

      "core.ledger.verifiable.text":
        "Yapı, bütünlük ve kaynak doğrulanabilir.",

      "core.trust.eyebrow":
        "GÜVEN KATMANI",

      "core.trust.title":
        "Güven yalnızca iddia edilmez.",

      "core.trust.lead":
        "Doğrulanabilir durumlar, kimlikler, yetkiler ve kanıtlardan oluşur.",

      "core.trust.proof.title":
        "Kanıt Güveni",

      "core.trust.proof.text":
        "İddia edilen eylem için geçerli bir kanıt mevcut mu?",

      "core.trust.policy.title":
        "Politika Güveni",

      "core.trust.policy.text":
        "Eylem öngörülen kurallar içinde mi gerçekleştirildi?",

      "core.trust.identity.title":
        "Kimlik Güveni",

      "core.trust.identity.text":
        "Hareket eden kimlik açıkça belirlenmiş ve yetkili mi?",

      "core.trust.audit.title":
        "Denetim Güveni",

      "core.trust.audit.text":
        "Süreç daha sonra yeniden anlaşılabilecek kadar eksiksiz mi?",

      "core.authorization.eyebrow":
        "İNSAN YETKİLENDİRME KAPISI",

      "core.authorization.title":
        "Zekâ hazırlayabilir.<br>Yetki açık kalır.",

      "core.authorization.text":
        "ZAL’THERA bilgiyi anlayabilir, yapılandırabilir, açıklayabilir ve olası eylemleri hazırlayabilir. Önemli eylemler gerekli insan veya açıkça devredilmiş yetkilendirmeye bağlı kalır.",

      "core.application.eyebrow":
        "SİSTEM UYGULAMASI",

      "core.application.title":
        "Tek çekirdek. Birden fazla uygulama alanı.",

      "core.application.personal": "KİŞİSEL",

      "core.application.continuity":
        "Belgeler · Finans · Bağlam · Cards",

      "core.application.proof": "KANIT",

      "core.application.proofflow":
        "Kanıt · Denetim · İmza · Dışa Aktarma",

      "core.application.communication":
        "İLETİŞİM",

      "core.application.voicebridge":
        "Kimlik · Onay · Ses · Güven",

      "core.application.industry":
        "ENDÜSTRİ",

      "core.application.shiftlog":
        "Devir · Durum · Sorumluluk",

      "core.return.title":
        "Çekirdek ürün değildir.<br>Ürünleri birbirine bağlayan yapıdır.",

      "core.return.button":
        "Sisteme dön"
    },


    /* ==========================================================
       ESPAÑOL
       ========================================================== */

    es: {

      "nav.system": "Sistema",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligencia",
      "nav.communication": "Comunicación",
      "nav.industry": "Industria",
      "nav.products": "Productos",
      "nav.about": "Acerca de",

      "global.home": "Inicio",
      "global.explore": "Explorar",
      "global.open": "Abrir",
      "global.close": "Cerrar",
      "global.discover": "Descubrir",
      "global.learnMore": "Más información",
      "global.support": "Soporte",
      "global.contact": "Contacto",
      "global.available": "DISPONIBLE",
      "global.development": "DESARROLLO",
      "global.systemModule": "MÓDULO DEL SISTEMA",
      "global.architecture": "ARQUITECTURA",
      "global.navOpen": "Abrir navegación",
      "global.mainNavigation": "Navegación principal",

      "footer.imprint": "Aviso legal",
      "footer.privacy": "Privacidad",

      "core.hero.kicker":
        "BASE DEL SISTEMA",

      "core.hero.title":
        "La confianza no debería<br>darse por sentada.<br>Debe construirse.",

      "core.hero.description":
        "ZAL’THERA Core conecta identidad, contexto, reglas, consentimiento, evidencia y ejecución controlada en una arquitectura común de confianza.",

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
        "PRINCIPIOS DEL NÚCLEO",

      "core.status.identity": "IDENTIDAD",
      "core.status.who": "QUIÉN",
      "core.status.context": "CONTEXTO",
      "core.status.why": "POR QUÉ",
      "core.status.policy": "POLÍTICA",
      "core.status.what": "QUÉ",
      "core.status.consent": "CONSENTIMIENTO",
      "core.status.allow": "PERMITIR",
      "core.status.audit": "AUDITORÍA",
      "core.status.prove": "PROBAR",
      "core.status.execution": "EJECUCIÓN",
      "core.status.act": "ACTUAR",

      "core.architecture.eyebrow":
        "ARQUITECTURA PÚBLICA",

      "core.architecture.title":
        "Cinco capas. Una cadena de decisiones trazable.",

      "core.architecture.lead":
        "La arquitectura pública explica la lógica fundamental de ZAL’THERA sin revelar implementaciones internas de seguridad, estructuras de claves privadas ni detalles de protocolos.",

      "core.architecture.identity.title":
        "Identidad",

      "core.architecture.identity.text":
        "Una acción comienza con una identidad, función o instancia de sistema autorizada claramente asignada.",

      "core.architecture.context.title":
        "Contexto",

      "core.architecture.context.text":
        "La información no se analiza de forma aislada, sino junto con su procedencia, tiempo y relación.",

      "core.architecture.intelligence.title":
        "Inteligencia",

      "core.architecture.intelligence.text":
        "Los sistemas pueden estructurar información, explicarla y preparar posibles pasos siguientes.",

      "core.architecture.trust.title":
        "Confianza",

      "core.architecture.trust.text":
        "Los permisos, las pruebas, el consentimiento y la auditoría determinan qué puede considerarse confiable.",

      "core.architecture.action.title":
        "Acción",

      "core.architecture.action.text":
        "Las acciones importantes solo se ejecutan cuando se cumplen las condiciones necesarias.",

      "core.architecture.principle":
        "PRINCIPIO DEL SISTEMA",

      "core.architecture.principleText":
        "Primero comprender. Después preparar. Actuar solo con permiso.",

      "core.architecture.technicalCore":
        "Núcleo técnico",

      "core.technical.eyebrow":
        "NÚCLEO TÉCNICO",

      "core.technical.lead":
        "Por debajo de la arquitectura pública funciona una cadena de control más precisa para acciones trazables del sistema.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Las reglas definen límites, estados, permisos y condiciones.",

      "core.technical.policy.question":
        "¿QUÉ ESTÁ PERMITIDO?",

      "core.technical.identity.title":
        "Identidad",

      "core.technical.identity.text":
        "Las acciones se asignan a una persona, función, identidad o instancia autorizada.",

      "core.technical.identity.question":
        "¿QUIÉN ACTÚA?",

      "core.technical.audit.title":
        "Auditoría",

      "core.technical.audit.text":
        "Los eventos relevantes se documentan con procedencia, momento y estado para permitir su trazabilidad.",

      "core.technical.audit.question":
        "¿QUÉ OCURRIÓ?",

      "core.technical.execute.title":
        "Ejecutar",

      "core.technical.execute.text":
        "Una acción solo puede modificar el estado visible cuando se hayan cumplido las condiciones necesarias.",

      "core.technical.execute.question":
        "¿PUEDE OCURRIR?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un núcleo local de verdad para eventos verificables.",

      "core.ledger.text1":
        "THE LEDGER registra eventos relevantes en una secuencia trazable. Las entradas se añaden, se vinculan y pueden examinarse posteriormente.",

      "core.ledger.text2":
        "El objetivo no es recopilar toda la información de forma centralizada. El objetivo es hacer trazables y verificables los cambios de estado relevantes.",

      "core.ledger.created": "CREADO",
      "core.ledger.proof": "PRUEBA",
      "core.ledger.signed": "FIRMADO",
      "core.ledger.verified": "VERIFICADO",

      "core.ledger.appendOnly.title":
        "Solo añadir",

      "core.ledger.appendOnly.text":
        "Los eventos relevantes se añaden en lugar de sobrescribirse silenciosamente.",

      "core.ledger.linked.title":
        "Vinculado",

      "core.ledger.linked.text":
        "Los eventos mantienen relaciones trazables entre sí.",

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
        "¿Existe una prueba válida de la acción declarada?",

      "core.trust.policy.title":
        "Confianza en las reglas",

      "core.trust.policy.text":
        "¿La acción se realizó dentro de las reglas previstas?",

      "core.trust.identity.title":
        "Confianza en la identidad",

      "core.trust.identity.text":
        "¿La identidad que actúa está claramente establecida y autorizada?",

      "core.trust.audit.title":
        "Confianza de auditoría",

      "core.trust.audit.text":
        "¿El proceso está lo suficientemente completo como para reconstruirse posteriormente?",

      "core.authorization.eyebrow":
        "PUERTA DE AUTORIZACIÓN HUMANA",

      "core.authorization.title":
        "La inteligencia puede preparar.<br>La autoridad permanece explícita.",

      "core.authorization.text":
        "ZAL’THERA puede comprender, estructurar y explicar información, y preparar posibles acciones. Las acciones importantes permanecen vinculadas a la autorización humana necesaria o expresamente delegada.",

      "core.application.eyebrow":
        "APLICACIÓN DEL SISTEMA",

      "core.application.title":
        "Un núcleo. Varios ámbitos de aplicación.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documentos · Finanzas · Contexto · Cards",
      "core.application.proof": "PRUEBA",
      "core.application.proofflow": "Evidencia · Auditoría · Firma · Exportación",
      "core.application.communication": "COMUNICACIÓN",
      "core.application.voicebridge": "Identidad · Consentimiento · Voz · Confianza",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Relevo · Estado · Responsabilidad",

      "core.return.title":
        "El núcleo no es el producto.<br>Es lo que conecta los productos.",

      "core.return.button":
        "Volver al sistema"
    },


    /* ==========================================================
       FRANÇAIS
       ========================================================== */

    fr: {

      "nav.system": "Système",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industrie",
      "nav.products": "Produits",
      "nav.about": "À propos",

      "global.home": "Accueil",
      "global.explore": "Explorer",
      "global.open": "Ouvrir",
      "global.close": "Fermer",
      "global.discover": "Découvrir",
      "global.learnMore": "En savoir plus",
      "global.support": "Support",
      "global.contact": "Contact",
      "global.available": "DISPONIBLE",
      "global.development": "DÉVELOPPEMENT",
      "global.systemModule": "MODULE SYSTÈME",
      "global.architecture": "ARCHITECTURE",
      "global.navOpen": "Ouvrir la navigation",
      "global.mainNavigation": "Navigation principale",

      "footer.imprint": "Mentions légales",
      "footer.privacy": "Confidentialité",

      "core.hero.kicker":
        "FONDATION DU SYSTÈME",

      "core.hero.title":
        "La confiance ne devrait pas<br>être supposée.<br>Elle devrait être construite.",

      "core.hero.description":
        "ZAL’THERA Core relie identité, contexte, règles, consentement, preuve et exécution contrôlée dans une architecture de confiance commune.",

      "core.hero.architecture":
        "Ouvrir l’architecture",

      "core.hero.identityBound":
        "LIÉ À L’IDENTITÉ",

      "core.hero.policyGoverned":
        "GOUVERNÉ PAR DES RÈGLES",

      "core.hero.auditable":
        "AUDITABLE",

      "core.hero.humanAuthorized":
        "AUTORISÉ PAR L’HUMAIN",

      "core.status.label":
        "PRINCIPES DU CORE",

      "core.status.identity": "IDENTITÉ",
      "core.status.who": "QUI",
      "core.status.context": "CONTEXTE",
      "core.status.why": "POURQUOI",
      "core.status.policy": "POLITIQUE",
      "core.status.what": "QUOI",
      "core.status.consent": "CONSENTEMENT",
      "core.status.allow": "AUTORISER",
      "core.status.audit": "AUDIT",
      "core.status.prove": "PROUVER",
      "core.status.execution": "EXÉCUTION",
      "core.status.act": "AGIR",

      "core.architecture.eyebrow":
        "ARCHITECTURE PUBLIQUE",

      "core.architecture.title":
        "Cinq niveaux. Une chaîne de décision traçable.",

      "core.architecture.lead":
        "L’architecture publique explique la logique fondamentale de ZAL’THERA sans révéler les implémentations internes de sécurité, les structures de clés privées ou les détails de protocole.",

      "core.architecture.identity.title":
        "Identité",

      "core.architecture.identity.text":
        "Une action commence par une identité, un rôle ou une instance système autorisée clairement attribuée.",

      "core.architecture.context.title":
        "Contexte",

      "core.architecture.context.text":
        "Les informations ne sont pas examinées isolément, mais comprises avec leur provenance, leur temporalité et leurs relations.",

      "core.architecture.intelligence.title":
        "Intelligence",

      "core.architecture.intelligence.text":
        "Les systèmes peuvent structurer les informations, les expliquer et préparer les étapes suivantes possibles.",

      "core.architecture.trust.title":
        "Confiance",

      "core.architecture.trust.text":
        "Les permissions, preuves, consentements et audits déterminent ce qui peut être considéré comme fiable.",

      "core.architecture.action.title":
        "Action",

      "core.architecture.action.text":
        "Les actions importantes ne sont exécutées que lorsque les conditions requises sont satisfaites.",

      "core.architecture.principle":
        "PRINCIPE SYSTÈME",

      "core.architecture.principleText":
        "Comprendre d’abord. Préparer ensuite. Agir uniquement avec autorisation.",

      "core.architecture.technicalCore":
        "Core technique",

      "core.technical.eyebrow":
        "CORE TECHNIQUE",

      "core.technical.lead":
        "Sous l’architecture publique fonctionne une chaîne de contrôle plus précise pour les actions système traçables.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Les règles définissent les limites, les états, les permissions et les conditions.",

      "core.technical.policy.question":
        "QU’EST-CE QUI EST AUTORISÉ ?",

      "core.technical.identity.title":
        "Identité",

      "core.technical.identity.text":
        "Les actions sont attribuées à une personne, un rôle, une identité ou une instance autorisée.",

      "core.technical.identity.question":
        "QUI AGIT ?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Les événements pertinents sont documentés avec provenance, date et état afin de rester traçables.",

      "core.technical.audit.question":
        "QUE S’EST-IL PASSÉ ?",

      "core.technical.execute.title":
        "Exécuter",

      "core.technical.execute.text":
        "Une action ne peut modifier l’état visible qu’après satisfaction des conditions nécessaires.",

      "core.technical.execute.question":
        "CELA PEUT-IL ARRIVER ?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un noyau local de vérité pour des événements vérifiables.",

      "core.ledger.text1":
        "THE LEDGER enregistre les événements pertinents dans une séquence traçable. Les entrées sont ajoutées, liées et peuvent être examinées ultérieurement.",

      "core.ledger.text2":
        "L’objectif n’est pas de centraliser toutes les informations. Il est de rendre les changements d’état pertinents traçables et vérifiables.",

      "core.ledger.created": "CRÉÉ",
      "core.ledger.proof": "PREUVE",
      "core.ledger.signed": "SIGNÉ",
      "core.ledger.verified": "VÉRIFIÉ",

      "core.ledger.appendOnly.title":
        "Ajout uniquement",

      "core.ledger.appendOnly.text":
        "Les événements pertinents sont ajoutés plutôt que remplacés discrètement.",

      "core.ledger.linked.title":
        "Lié",

      "core.ledger.linked.text":
        "Les événements conservent une relation traçable entre eux.",

      "core.ledger.verifiable.title":
        "Vérifiable",

      "core.ledger.verifiable.text":
        "La structure, l’intégrité et la provenance peuvent être contrôlées.",

      "core.trust.eyebrow":
        "COUCHE DE CONFIANCE",

      "core.trust.title":
        "La confiance ne se décrète pas.",

      "core.trust.lead":
        "Elle naît d’états, d’identités, de permissions et de preuves vérifiables.",

      "core.trust.proof.title":
        "Confiance par la preuve",

      "core.trust.proof.text":
        "Existe-t-il une preuve valide de l’action déclarée ?",

      "core.trust.policy.title":
        "Confiance par les règles",

      "core.trust.policy.text":
        "L’action a-t-elle été réalisée conformément aux règles prévues ?",

      "core.trust.identity.title":
        "Confiance d’identité",

      "core.trust.identity.text":
        "L’identité qui agit est-elle clairement établie et autorisée ?",

      "core.trust.audit.title":
        "Confiance d’audit",

      "core.trust.audit.text":
        "Le processus est-il suffisamment complet pour être reconstitué ultérieurement ?",

      "core.authorization.eyebrow":
        "PASSAGE D’AUTORISATION HUMAINE",

      "core.authorization.title":
        "L’intelligence peut préparer.<br>L’autorité reste explicite.",

      "core.authorization.text":
        "ZAL’THERA peut comprendre, structurer et expliquer les informations et préparer des actions possibles. Les actions importantes restent liées à l’autorisation humaine requise ou explicitement déléguée.",

      "core.application.eyebrow":
        "APPLICATION DU SYSTÈME",

      "core.application.title":
        "Un core. Plusieurs domaines d’application.",

      "core.application.personal": "PERSONNEL",
      "core.application.continuity": "Documents · Finances · Contexte · Cards",
      "core.application.proof": "PREUVE",
      "core.application.proofflow": "Preuve · Audit · Signature · Export",
      "core.application.communication": "COMMUNICATION",
      "core.application.voicebridge": "Identité · Consentement · Voix · Confiance",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Transmission · État · Responsabilité",

      "core.return.title":
        "Le core n’est pas le produit.<br>C’est ce qui relie les produits.",

      "core.return.button":
        "Retour au système"
    },


    /* ==========================================================
       ITALIANO
       ========================================================== */

    it: {

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
      "global.learnMore": "Scopri di più",
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
        "ZAL’THERA Core collega identità, contesto, regole, consenso, prova ed esecuzione controllata in un’unica architettura di fiducia.",

      "core.hero.architecture":
        "Apri architettura",

      "core.hero.identityBound":
        "LEGATO ALL’IDENTITÀ",

      "core.hero.policyGoverned":
        "GOVERNATO DA REGOLE",

      "core.hero.auditable":
        "VERIFICABILE",

      "core.hero.humanAuthorized":
        "AUTORIZZATO DALL’UOMO",

      "core.status.label":
        "PRINCIPI DEL CORE",

      "core.status.identity": "IDENTITÀ",
      "core.status.who": "CHI",
      "core.status.context": "CONTESTO",
      "core.status.why": "PERCHÉ",
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
        "L’architettura pubblica spiega la logica fondamentale di ZAL’THERA senza esporre implementazioni interne di sicurezza, strutture di chiavi private o dettagli dei protocolli.",

      "core.architecture.identity.title":
        "Identità",

      "core.architecture.identity.text":
        "Un’azione inizia con un’identità, un ruolo o un’istanza di sistema autorizzata chiaramente assegnata.",

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
        "Autorizzazioni, prove, consenso e audit determinano ciò che può essere considerato affidabile.",

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
        "Sotto l’architettura pubblica opera una catena di controllo più precisa per azioni di sistema tracciabili.",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "Le regole definiscono limiti, stati, autorizzazioni e condizioni.",

      "core.technical.policy.question":
        "COSA È CONSENTITO?",

      "core.technical.identity.title":
        "Identità",

      "core.technical.identity.text":
        "Le azioni vengono assegnate a una persona, un ruolo, un’identità o un’istanza autorizzata.",

      "core.technical.identity.question":
        "CHI AGISCE?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Gli eventi rilevanti vengono documentati con provenienza, momento e stato affinché restino tracciabili.",

      "core.technical.audit.question":
        "COSA È SUCCESSO?",

      "core.technical.execute.title":
        "Esecuzione",

      "core.technical.execute.text":
        "Un’azione può modificare lo stato visibile solo dopo che le condizioni necessarie sono state soddisfatte.",

      "core.technical.execute.question":
        "PUÒ AVVENIRE?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleo locale di verità per eventi verificabili.",

      "core.ledger.text1":
        "THE LEDGER registra gli eventi rilevanti in una sequenza tracciabile. Le voci vengono aggiunte, collegate e possono essere esaminate in seguito.",

      "core.ledger.text2":
        "L’obiettivo non è raccogliere centralmente tutte le informazioni. L’obiettivo è rendere tracciabili e verificabili i cambiamenti di stato rilevanti.",

      "core.ledger.created": "CREATO",
      "core.ledger.proof": "PROVA",
      "core.ledger.signed": "FIRMATO",
      "core.ledger.verified": "VERIFICATO",

      "core.ledger.appendOnly.title":
        "Solo aggiunta",

      "core.ledger.appendOnly.text":
        "Gli eventi rilevanti vengono aggiunti anziché sovrascritti silenziosamente.",

      "core.ledger.linked.title":
        "Collegato",

      "core.ledger.linked.text":
        "Gli eventi mantengono relazioni tracciabili tra loro.",

      "core.ledger.verifiable.title":
        "Verificabile",

      "core.ledger.verifiable.text":
        "Struttura, integrità e provenienza possono essere controllate.",

      "core.trust.eyebrow":
        "LIVELLO DI FIDUCIA",

      "core.trust.title":
        "La fiducia non viene semplicemente dichiarata.",

      "core.trust.lead":
        "Nasce da stati, identità, autorizzazioni e prove verificabili.",

      "core.trust.proof.title":
        "Fiducia nella prova",

      "core.trust.proof.text":
        "Esiste una prova valida dell’azione dichiarata?",

      "core.trust.policy.title":
        "Fiducia nelle regole",

      "core.trust.policy.text":
        "L’azione è stata eseguita secondo le regole previste?",

      "core.trust.identity.title":
        "Fiducia nell’identità",

      "core.trust.identity.text":
        "L’identità che agisce è chiaramente stabilita e autorizzata?",

      "core.trust.audit.title":
        "Fiducia nell’audit",

      "core.trust.audit.text":
        "Il processo è sufficientemente completo da poter essere ricostruito successivamente?",

      "core.authorization.eyebrow":
        "GATE DI AUTORIZZAZIONE UMANA",

      "core.authorization.title":
        "L’intelligenza può preparare.<br>L’autorità resta esplicita.",

      "core.authorization.text":
        "ZAL’THERA può comprendere, strutturare e spiegare informazioni e preparare possibili azioni. Le azioni rilevanti restano vincolate alla necessaria autorizzazione umana o esplicitamente delegata.",

      "core.application.eyebrow":
        "APPLICAZIONE DEL SISTEMA",

      "core.application.title":
        "Un core. Più ambiti applicativi.",

      "core.application.personal": "PERSONALE",
      "core.application.continuity": "Documenti · Finanze · Contesto · Cards",
      "core.application.proof": "PROVA",
      "core.application.proofflow": "Prova · Audit · Firma · Esportazione",
      "core.application.communication": "COMUNICAZIONE",
      "core.application.voicebridge": "Identità · Consenso · Voce · Fiducia",
      "core.application.industry": "INDUSTRIA",
      "core.application.shiftlog": "Passaggio · Stato · Responsabilità",

      "core.return.title":
        "Il core non è il prodotto.<br>È ciò che collega i prodotti.",

      "core.return.button":
        "Torna al sistema"
    },


    /* ==========================================================
       ROMÂNĂ
       ========================================================== */

    ro: {

      "nav.system": "Sistem",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Inteligență",
      "nav.communication": "Comunicare",
      "nav.industry": "Industrie",
      "nav.products": "Produse",
      "nav.about": "Despre",

      "global.home": "Acasă",
      "global.explore": "Explorează",
      "global.open": "Deschide",
      "global.close": "Închide",
      "global.discover": "Descoperă",
      "global.learnMore": "Află mai multe",
      "global.support": "Suport",
      "global.contact": "Contact",
      "global.available": "DISPONIBIL",
      "global.development": "DEZVOLTARE",
      "global.systemModule": "MODUL DE SISTEM",
      "global.architecture": "ARHITECTURĂ",
      "global.navOpen": "Deschide navigarea",
      "global.mainNavigation": "Navigare principală",

      "footer.imprint": "Informații legale",
      "footer.privacy": "Confidențialitate",

      "core.hero.kicker":
        "FUNDAȚIA SISTEMULUI",

      "core.hero.title":
        "Încrederea nu ar trebui<br>presupusă.<br>Ar trebui construită.",

      "core.hero.description":
        "ZAL’THERA Core conectează identitatea, contextul, regulile, consimțământul, dovada și execuția controlată într-o arhitectură comună de încredere.",

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
      "core.status.policy": "POLITICĂ",
      "core.status.what": "CE",
      "core.status.consent": "CONSIMȚĂMÂNT",
      "core.status.allow": "PERMITE",
      "core.status.audit": "AUDIT",
      "core.status.prove": "DOVADĂ",
      "core.status.execution": "EXECUȚIE",
      "core.status.act": "ACȚIUNE",

      "core.architecture.eyebrow":
        "ARHITECTURĂ PUBLICĂ",

      "core.architecture.title":
        "Cinci niveluri. Un lanț decizional trasabil.",

      "core.architecture.lead":
        "Arhitectura publică explică logica fundamentală ZAL’THERA fără a expune implementări interne de securitate, structuri de chei private sau detalii de protocol.",

      "core.architecture.identity.title":
        "Identitate",

      "core.architecture.identity.text":
        "O acțiune începe cu o identitate, un rol sau o instanță autorizată de sistem clar atribuită.",

      "core.architecture.context.title":
        "Context",

      "core.architecture.context.text":
        "Informația nu este analizată izolat, ci împreună cu proveniența, timpul și relația sa.",

      "core.architecture.intelligence.title":
        "Inteligență",

      "core.architecture.intelligence.text":
        "Sistemele pot structura informațiile, le pot explica și pot pregăti posibili pași următori.",

      "core.architecture.trust.title":
        "Încredere",

      "core.architecture.trust.text":
        "Permisiunile, dovezile, consimțământul și auditul determină ce poate fi considerat de încredere.",

      "core.architecture.action.title":
        "Acțiune",

      "core.architecture.action.text":
        "Acțiunile importante sunt executate numai atunci când condițiile necesare sunt îndeplinite.",

      "core.architecture.principle":
        "PRINCIPIU DE SISTEM",

      "core.architecture.principleText":
        "Mai întâi înțelege. Apoi pregătește. Acționează numai cu permisiune.",

      "core.architecture.technicalCore":
        "Core tehnic",

      "core.technical.eyebrow":
        "CORE TEHNIC",

      "core.technical.lead":
        "Sub arhitectura publică funcționează un lanț de control mai precis pentru acțiuni de sistem trasabile.",

      "core.technical.policy.title": "Policy",

      "core.technical.policy.text":
        "Regulile definesc limite, stări, permisiuni și condiții.",

      "core.technical.policy.question":
        "CE ESTE PERMIS?",

      "core.technical.identity.title":
        "Identitate",

      "core.technical.identity.text":
        "Acțiunile sunt atribuite unei persoane, unui rol, unei identități sau unei instanțe autorizate.",

      "core.technical.identity.question":
        "CINE ACȚIONEAZĂ?",

      "core.technical.audit.title":
        "Audit",

      "core.technical.audit.text":
        "Evenimentele relevante sunt documentate cu proveniență, timp și stare pentru a rămâne trasabile.",

      "core.technical.audit.question":
        "CE S-A ÎNTÂMPLAT?",

      "core.technical.execute.title":
        "Executare",

      "core.technical.execute.text":
        "O acțiune poate modifica starea vizibilă numai după îndeplinirea condițiilor necesare.",

      "core.technical.execute.question":
        "POATE AVEA LOC?",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "Un nucleu local de adevăr pentru evenimente verificabile.",

      "core.ledger.text1":
        "THE LEDGER înregistrează evenimentele relevante într-o secvență trasabilă. Înregistrările sunt adăugate, legate și pot fi examinate ulterior.",

      "core.ledger.text2":
        "Scopul nu este colectarea centralizată a tuturor informațiilor. Scopul este ca modificările relevante de stare să devină trasabile și verificabile.",

      "core.ledger.created": "CREAT",
      "core.ledger.proof": "DOVADĂ",
      "core.ledger.signed": "SEMNAT",
      "core.ledger.verified": "VERIFICAT",

      "core.ledger.appendOnly.title":
        "Doar adăugare",

      "core.ledger.appendOnly.text":
        "Evenimentele relevante sunt adăugate în loc să fie suprascrise în mod ascuns.",

      "core.ledger.linked.title":
        "Conectat",

      "core.ledger.linked.text":
        "Evenimentele păstrează relații trasabile între ele.",

      "core.ledger.verifiable.title":
        "Verificabil",

      "core.ledger.verifiable.text":
        "Structura, integritatea și proveniența pot fi verificate.",

      "core.trust.eyebrow":
        "STRAT DE ÎNCREDERE",

      "core.trust.title":
        "Încrederea nu este doar declarată.",

      "core.trust.lead":
        "Ea rezultă din stări, identități, permisiuni și dovezi verificabile.",

      "core.trust.proof.title":
        "Încredere prin dovadă",

      "core.trust.proof.text":
        "Există o dovadă validă pentru acțiunea declarată?",

      "core.trust.policy.title":
        "Încredere în reguli",

      "core.trust.policy.text":
        "Acțiunea a fost realizată conform regulilor prevăzute?",

      "core.trust.identity.title":
        "Încredere în identitate",

      "core.trust.identity.text":
        "Identitatea care acționează este clar stabilită și autorizată?",

      "core.trust.audit.title":
        "Încredere în audit",

      "core.trust.audit.text":
        "Procesul este suficient de complet pentru a putea fi reconstruit ulterior?",

      "core.authorization.eyebrow":
        "POARTĂ DE AUTORIZARE UMANĂ",

      "core.authorization.title":
        "Inteligența poate pregăti.<br>Autoritatea rămâne explicită.",

      "core.authorization.text":
        "ZAL’THERA poate înțelege, structura și explica informațiile și poate pregăti acțiuni posibile. Acțiunile importante rămân legate de autorizarea umană necesară sau delegată explicit.",

      "core.application.eyebrow":
        "APLICAREA SISTEMULUI",

      "core.application.title":
        "Un core. Mai multe domenii de aplicare.",

      "core.application.personal": "PERSONAL",
      "core.application.continuity": "Documente · Finanțe · Context · Cards",
      "core.application.proof": "DOVADĂ",
      "core.application.proofflow": "Dovadă · Audit · Semnătură · Export",
      "core.application.communication": "COMUNICARE",
      "core.application.voicebridge": "Identitate · Consimțământ · Voce · Încredere",
      "core.application.industry": "INDUSTRIE",
      "core.application.shiftlog": "Predare · Stare · Responsabilitate",

      "core.return.title":
        "Core-ul nu este produsul.<br>Este ceea ce conectează produsele.",

      "core.return.button":
        "Înapoi la sistem"
    },


    /* ==========================================================
       简体中文
       ========================================================== */

    "zh-Hans": {

      "nav.system": "系统",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "智能",
      "nav.communication": "通信",
      "nav.industry": "工业",
      "nav.products": "产品",
      "nav.about": "关于",

      "global.home": "首页",
      "global.explore": "探索",
      "global.open": "打开",
      "global.close": "关闭",
      "global.discover": "探索",
      "global.learnMore": "了解更多",
      "global.support": "支持",
      "global.contact": "联系",
      "global.available": "已发布",
      "global.development": "开发中",
      "global.systemModule": "系统模块",
      "global.architecture": "架构",
      "global.navOpen": "打开导航",
      "global.mainNavigation": "主导航",

      "footer.imprint": "法律声明",
      "footer.privacy": "隐私",

      "core.hero.kicker":
        "系统基础",

      "core.hero.title":
        "信任不应被<br>默认假设。<br>它应该被构建。",

      "core.hero.description":
        "ZAL’THERA Core 将身份、上下文、规则、同意、证明与受控执行连接成统一的信任架构。",

      "core.hero.architecture":
        "打开架构",

      "core.hero.identityBound":
        "身份绑定",

      "core.hero.policyGoverned":
        "规则治理",

      "core.hero.auditable":
        "可审计",

      "core.hero.humanAuthorized":
        "人工授权",

      "core.status.label":
        "核心原则",

      "core.status.identity": "身份",
      "core.status.who": "谁",
      "core.status.context": "上下文",
      "core.status.why": "为什么",
      "core.status.policy": "规则",
      "core.status.what": "什么",
      "core.status.consent": "同意",
      "core.status.allow": "允许",
      "core.status.audit": "审计",
      "core.status.prove": "证明",
      "core.status.execution": "执行",
      "core.status.act": "行动",

      "core.architecture.eyebrow":
        "公开架构",

      "core.architecture.title":
        "五个层级。一条可追溯的决策链。",

      "core.architecture.lead":
        "公开架构解释 ZAL’THERA 的基本逻辑，同时不会公开内部安全实现、私钥结构或协议细节。",

      "core.architecture.identity.title":
        "身份",

      "core.architecture.identity.text":
        "每个操作都从明确分配的身份、角色或已授权系统实例开始。",

      "core.architecture.context.title":
        "上下文",

      "core.architecture.context.text":
        "信息不会被孤立理解，而是结合来源、时间和关系进行解释。",

      "core.architecture.intelligence.title":
        "智能",

      "core.architecture.intelligence.text":
        "系统可以组织信息、解释信息，并准备可能的下一步。",

      "core.architecture.trust.title":
        "信任",

      "core.architecture.trust.text":
        "权限、证明、同意和审计共同决定什么可以被视为可信。",

      "core.architecture.action.title":
        "操作",

      "core.architecture.action.text":
        "重要操作只有在满足所需条件后才能执行。",

      "core.architecture.principle":
        "系统原则",

      "core.architecture.principleText":
        "先理解。再准备。只有获得许可后才行动。",

      "core.architecture.technicalCore":
        "技术核心",

      "core.technical.eyebrow":
        "技术核心",

      "core.technical.lead":
        "在公开架构之下运行着一条更精确的控制链，用于确保系统操作可追溯。",

      "core.technical.policy.title":
        "Policy",

      "core.technical.policy.text":
        "规则定义边界、状态、权限和条件。",

      "core.technical.policy.question":
        "允许什么？",

      "core.technical.identity.title":
        "身份",

      "core.technical.identity.text":
        "操作会被明确关联到个人、角色、身份或已授权实例。",

      "core.technical.identity.question":
        "谁在行动？",

      "core.technical.audit.title":
        "审计",

      "core.technical.audit.text":
        "重要事件通过来源、时间和状态信息被记录，以保持可追溯性。",

      "core.technical.audit.question":
        "发生了什么？",

      "core.technical.execute.title":
        "执行",

      "core.technical.execute.text":
        "只有满足必要条件后，操作才可以改变可见状态。",

      "core.technical.execute.question":
        "可以执行吗？",

      "core.ledger.eyebrow":
        "THE LEDGER",

      "core.ledger.title":
        "面向可验证事件的本地事实核心。",

      "core.ledger.text1":
        "THE LEDGER 按可追溯顺序记录重要事件。记录会被追加、关联，并可在之后进行检查。",

      "core.ledger.text2":
        "目标不是集中收集所有信息。目标是让重要状态变化保持可追溯和可验证。",

      "core.ledger.created": "已创建",
      "core.ledger.proof": "证明",
      "core.ledger.signed": "已签署",
      "core.ledger.verified": "已验证",

      "core.ledger.appendOnly.title":
        "仅追加",

      "core.ledger.appendOnly.text":
        "重要事件会被追加，而不是被悄然覆盖。",

      "core.ledger.linked.title":
        "关联",

      "core.ledger.linked.text":
        "事件之间保持可追溯的关系。",

      "core.ledger.verifiable.title":
        "可验证",

      "core.ledger.verifiable.text":
        "结构、完整性和来源都可以被检查。",

      "core.trust.eyebrow":
        "信任层",

      "core.trust.title":
        "信任不是简单声明出来的。",

      "core.trust.lead":
        "它来自可验证的状态、身份、权限和证明。",

      "core.trust.proof.title":
        "证明信任",

      "core.trust.proof.text":
        "声明的操作是否存在有效证明？",

      "core.trust.policy.title":
        "规则信任",

      "core.trust.policy.text":
        "操作是否按照预定规则执行？",

      "core.trust.identity.title":
        "身份信任",

      "core.trust.identity.text":
        "执行操作的身份是否明确并已获授权？",

      "core.trust.audit.title":
        "审计信任",

      "core.trust.audit.text":
        "流程是否足够完整，可以在之后被重新追溯？",

      "core.authorization.eyebrow":
        "人工授权闸门",

      "core.authorization.title":
        "智能可以准备。<br>权力必须明确。",

      "core.authorization.text":
        "ZAL’THERA 可以理解、组织和解释信息，并准备可能的操作。但重要操作仍然必须受必要的人工授权或明确委托的授权约束。",

      "core.application.eyebrow":
        "系统应用",

      "core.application.title":
        "一个核心。多个应用领域。",

      "core.application.personal":
        "个人",

      "core.application.continuity":
        "文档 · 财务 · 上下文 · Cards",

      "core.application.proof":
        "证明",

      "core.application.proofflow":
        "证明 · 审计 · 签名 · 导出",

      "core.application.communication":
        "通信",

      "core.application.voicebridge":
        "身份 · 同意 · 语音 · 信任",

      "core.application.industry":
        "工业",

      "core.application.shiftlog":
        "交接 · 状态 · 责任",

      "core.return.title":
        "核心不是产品。<br>核心连接所有产品。",

      "core.return.button":
        "返回系统"
    }
  };



  /* ============================================================
     FINAL WEBSITE TRANSLATIONS v2.0
     Complete page translation rows.
     Order: DE / EN / TR / ES / FR / IT / RO / ZH-HANS
     ============================================================ */

  const FINAL_TRANSLATION_ROWS = [["footer.terms",["AGB","Terms","Şartlar","Términos","CGV","Termini","Termeni","条款"]],["footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","Rétractation","Recesso","Retragere","撤销"]],["global.navClose",["Navigation schließen","Close navigation","Navigasyonu kapat","Cerrar navegación","Fermer la navigation","Chiudi navigazione","Închide navigarea","关闭导航"]],["home.hero.kicker",["SOUVERÄNE DIGITALE ARCHITEKTUR","SOVEREIGN DIGITAL ARCHITECTURE","EGEMEN DİJİTAL MİMARİ","ARQUITECTURA DIGITAL SOBERANA","ARCHITECTURE NUMÉRIQUE SOUVERAINE","ARCHITETTURA DIGITALE SOVRANA","ARHITECTURĂ DIGITALĂ SUVERANĂ","主权数字架构"]],["home.hero.title",["One system.<br>One identity.<br>Connected intelligence.","One system.<br>One identity.<br>Connected intelligence.","Tek sistem.<br>Tek kimlik.<br>Bağlantılı zekâ.","Un sistema.<br>Una identidad.<br>Inteligencia conectada.","Un système.<br>Une identité.<br>Une intelligence connectée.","Un sistema.<br>Un’identità.<br>Intelligenza connessa.","Un sistem.<br>O identitate.<br>Inteligență conectată.","一个系统。<br>一个身份。<br>连接的智能。"]],["home.hero.description",["ZAL’THERA verbindet Identität, Kontext, künstliche Intelligenz, Daten, Vertrauen, Kommunikation und reale Prozesse in einer gemeinsamen technologischen Architektur.","ZAL’THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.","ZAL’THERA; kimlik, bağlam, yapay zekâ, veri, güven, iletişim ve gerçek süreçleri ortak bir teknolojik mimaride birleştirir.","ZAL’THERA conecta identidad, contexto, inteligencia artificial, datos, confianza, comunicación y procesos reales dentro de una arquitectura tecnológica común.","ZAL’THERA relie identité, contexte, intelligence artificielle, données, confiance, communication et processus réels dans une architecture technologique commune.","ZAL’THERA collega identità, contesto, intelligenza artificiale, dati, fiducia, comunicazione e processi reali in un’unica architettura tecnologica.","ZAL’THERA conectează identitatea, contextul, inteligența artificială, datele, încrederea, comunicarea și procesele reale într-o arhitectură tehnologică comună.","ZAL’THERA 将身份、上下文、人工智能、数据、信任、通信与现实流程连接在统一的技术架构中。"]],["home.hero.primary",["System entdecken","Discover the system","Sistemi keşfet","Descubrir el sistema","Découvrir le système","Scopri il sistema","Descoperă sistemul","探索系统"]],["home.hero.core",["ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core","ZAL’THERA Core"]],["home.state.label",["SYSTEMSTATUS","SYSTEM STATE","SİSTEM DURUMU","ESTADO DEL SISTEMA","ÉTAT DU SYSTÈME","STATO DEL SISTEMA","STAREA SISTEMULUI","系统状态"]],["home.state.identity",["IDENTITÄT","IDENTITY","KİMLİK","IDENTIDAD","IDENTITÉ","IDENTITÀ","IDENTITATE","身份"]],["home.state.continuity",["CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY","CONTINUITY"]],["home.state.intelligence",["INTELLIGENCE","INTELLIGENCE","ZEKÂ","INTELIGENCIA","INTELLIGENCE","INTELLIGENZA","INTELIGENȚĂ","智能"]],["home.state.communication",["COMMUNICATION","COMMUNICATION","İLETİŞİM","COMUNICACIÓN","COMMUNICATION","COMUNICAZIONE","COMUNICARE","通信"]],["home.state.industry",["INDUSTRY","INDUSTRY","ENDÜSTRİ","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","工业"]],["home.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADĂ","证明"]],["home.state.core",["CORE","CORE","CORE","CORE","CORE","CORE","CORE","CORE"]],["home.state.active",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTİF GELİŞTİRME","DESARROLLO ACTIVO","DÉVELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVĂ","积极开发中"]],["home.state.architecture",["ARCHITEKTUR","ARCHITECTURE","MİMARİ","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTURĂ","架构"]],["home.state.module",["SYSTEMMODUL","SYSTEM MODULE","SİSTEM MODÜLÜ","MÓDULO DEL SISTEMA","MODULE SYSTÈME","MODULO DI SISTEMA","MODUL DE SISTEM","系统模块"]],["home.system.eyebrow",["EIN SYSTEM","ONE SYSTEM","TEK SİSTEM","UN SISTEMA","UN SYSTÈME","UN SISTEMA","UN SISTEM","一个系统"]],["home.system.title",["Technologie beginnt nicht mit einer App.","Technology does not begin with an app.","Teknoloji bir uygulamayla başlamaz.","La tecnología no comienza con una app.","La technologie ne commence pas par une application.","La tecnologia non inizia con un’app.","Tehnologia nu începe cu o aplicație.","技术并不是从一个应用开始。"]],["home.system.lead",["Sie beginnt mit einer gemeinsamen Logik dafür, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tatsächlich ausgeführt werden kann.","It begins with a shared logic for who acts, what is understood, who may be trusted and which action may actually be executed.","Kimin hareket ettiği, neyin anlaşıldığı, kime güvenilebileceği ve hangi eylemin gerçekten yürütülebileceğine dair ortak bir mantıkla başlar.","Comienza con una lógica común sobre quién actúa, qué se comprende, en quién se puede confiar y qué acción puede ejecutarse realmente.","Elle commence par une logique commune : qui agit, ce qui est compris, à qui faire confiance et quelle action peut réellement être exécutée.","Inizia con una logica comune su chi agisce, cosa viene compreso, di chi ci si può fidare e quale azione può essere realmente eseguita.","Începe cu o logică comună privind cine acționează, ce este înțeles, în cine se poate avea încredere și ce acțiune poate fi executată.","它始于一套共同逻辑：谁在行动、理解了什么、可以信任谁，以及什么操作真正可以执行。"]],["home.system.identity.title",["Identität","Identity","Kimlik","Identidad","Identité","Identità","Identitate","身份"]],["home.system.identity.text",["Wer oder welches autorisierte System handelt?","Who or which authorized system is acting?","Kim veya hangi yetkili sistem hareket ediyor?","¿Quién o qué sistema autorizado está actuando?","Qui ou quel système autorisé agit ?","Chi o quale sistema autorizzato sta agendo?","Cine sau ce sistem autorizat acționează?","谁或哪个已授权系统正在行动？"]],["home.system.context.title",["Kontext","Context","Bağlam","Contexto","Contexte","Contesto","Context","上下文"]],["home.system.context.text",["In welchem Zusammenhang existieren Information und Handlung?","In what context do information and action exist?","Bilgi ve eylem hangi bağlamda var?","¿En qué contexto existen la información y la acción?","Dans quel contexte existent l’information et l’action ?","In quale contesto esistono informazione e azione?","În ce context există informația și acțiunea?","信息与行动存在于什么上下文中？"]],["home.system.intelligence.title",["Intelligenz","Intelligence","Zekâ","Inteligencia","Intelligence","Intelligenza","Inteligență","智能"]],["home.system.intelligence.text",["Was lässt sich aus dem vorhandenen Kontext verstehen?","What can be understood from the available context?","Mevcut bağlamdan ne anlaşılabilir?","¿Qué puede comprenderse a partir del contexto disponible?","Que peut-on comprendre à partir du contexte disponible ?","Cosa si può comprendere dal contesto disponibile?","Ce poate fi înțeles din contextul disponibil?","从现有上下文中可以理解什么？"]],["home.system.trust.title",["Vertrauen","Trust","Güven","Confianza","Confiance","Fiducia","Încredere","信任"]],["home.system.trust.text",["Was ist erlaubt, belegbar und überprüfbar?","What is permitted, verifiable and accountable?","Neye izin veriliyor, ne kanıtlanabilir ve doğrulanabilir?","¿Qué está permitido, puede probarse y verificarse?","Qu’est-ce qui est autorisé, prouvable et vérifiable ?","Cosa è consentito, dimostrabile e verificabile?","Ce este permis, demonstrabil și verificabil?","什么是被允许、可证明并可验证的？"]],["home.system.action.title",["Aktion","Action","Eylem","Acción","Action","Azione","Acțiune","操作"]],["home.system.action.text",["Was darf tatsächlich ausgeführt werden?","What may actually be executed?","Gerçekte ne yürütülebilir?","¿Qué puede ejecutarse realmente?","Qu’est-ce qui peut réellement être exécuté ?","Cosa può essere realmente eseguito?","Ce poate fi executat efectiv?","什么操作真正可以执行？"]],["home.system.principle",["KERNPRINZIP","CORE PRINCIPLE","TEMEL İLKE","PRINCIPIO CENTRAL","PRINCIPE CENTRAL","PRINCIPIO CENTRALE","PRINCIPIU CENTRAL","核心原则"]],["home.system.principleText",["Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.","Understand first. Prepare second. Act only with permission.","Önce anla. Sonra hazırla. Yalnızca izinle hareket et.","Primero comprender. Después preparar. Actuar solo con permiso.","Comprendre d’abord. Préparer ensuite. Agir uniquement avec autorisation.","Prima comprendere. Poi preparare. Agire solo con autorizzazione.","Mai întâi înțelege. Apoi pregătește. Acționează numai cu permisiune.","先理解。再准备。只有获得许可后才行动。"]],["home.system.openArchitecture",["Architektur öffnen","Open architecture","Mimariyi aç","Abrir arquitectura","Ouvrir l’architecture","Apri architettura","Deschide arhitectura","打开架构"]],["home.continuity.eyebrow",["PERSÖNLICHES SOUVERÄNES SYSTEM","PERSONAL SOVEREIGN SYSTEM","KİŞİSEL EGEMEN SİSTEM","SISTEMA PERSONAL SOBERANO","SYSTÈME PERSONNEL SOUVERAIN","SISTEMA PERSONALE SOVRANO","SISTEM PERSONAL SUVERAN","个人主权系统"]],["home.continuity.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTİF GELİŞTİRME","DESARROLLO ACTIVO","DÉVELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVĂ","积极开发中"]],["home.continuity.tagline",["Dein Lebenskontext. Strukturiert. Verbunden. Verständlich.","Your life context. Structured. Connected. Understandable.","Yaşam bağlamın. Yapılandırılmış. Bağlantılı. Anlaşılır.","El contexto de tu vida. Estructurado. Conectado. Comprensible.","Le contexte de votre vie. Structuré. Connecté. Compréhensible.","Il contesto della tua vita. Strutturato. Connesso. Comprensibile.","Contextul vieții tale. Structurat. Conectat. Ușor de înțeles.","你的生活上下文。结构化。连接。可理解。"]],["home.continuity.text1",["CONTINUITY verbindet persönliche Dokumente, Daten, Cards, Timeline, Finanzen, Nachweise und Kontext in einer souveränen persönlichen Umgebung.","CONTINUITY connects personal documents, data, Cards, Timeline, finances, evidence and context within a sovereign personal environment.","CONTINUITY; kişisel belgeleri, verileri, Cards, Timeline, finans, kanıt ve bağlamı egemen bir kişisel ortamda birleştirir.","CONTINUITY conecta documentos personales, datos, Cards, Timeline, finanzas, pruebas y contexto en un entorno personal soberano.","CONTINUITY relie documents personnels, données, Cards, Timeline, finances, preuves et contexte dans un environnement personnel souverain.","CONTINUITY collega documenti personali, dati, Cards, Timeline, finanze, prove e contesto in un ambiente personale sovrano.","CONTINUITY conectează documente personale, date, Cards, Timeline, finanțe, dovezi și context într-un mediu personal suveran.","CONTINUITY 将个人文档、数据、Cards、Timeline、财务、证明与上下文连接在一个个人主权环境中。"]],["home.continuity.text2",["Informationen bleiben nicht als isolierte Dateien liegen. Sie erhalten Kontext, Herkunft, Zeitbezug und eine nachvollziehbare Position im persönlichen System.","Information does not remain as isolated files. It receives context, provenance, temporal reference and a traceable position within the personal system.","Bilgiler yalıtılmış dosyalar olarak kalmaz. Bağlam, kaynak, zaman ilişkisi ve kişisel sistem içinde izlenebilir bir konum kazanır.","La información no queda como archivos aislados. Recibe contexto, procedencia, referencia temporal y una posición trazable dentro del sistema personal.","Les informations ne restent pas des fichiers isolés. Elles reçoivent un contexte, une provenance, un repère temporel et une position traçable dans le système personnel.","Le informazioni non restano file isolati. Ricevono contesto, provenienza, riferimento temporale e una posizione tracciabile nel sistema personale.","Informațiile nu rămân fișiere izolate. Primesc context, proveniență, referință temporală și o poziție trasabilă în sistemul personal.","信息不会停留为孤立文件，而会获得上下文、来源、时间关联以及在个人系统中的可追溯位置。"]],["home.continuity.documents",["Dokumente","Documents","Belgeler","Documentos","Documents","Documenti","Documente","文档"]],["home.continuity.cards",["Cards","Cards","Cards","Cards","Cards","Cards","Cards","Cards"]],["home.continuity.timeline",["Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline","Timeline"]],["home.continuity.finance",["Finanzen","Finance","Finans","Finanzas","Finances","Finanze","Finanțe","财务"]],["home.continuity.context",["Kontext","Context","Bağlam","Contexto","Contexte","Contesto","Context","上下文"]],["home.continuity.audit",["Audit","Audit","Denetim","Auditoría","Audit","Audit","Audit","审计"]],["home.intelligence.eyebrow",["KONTEXTUELLE INTELLIGENZ","CONTEXTUAL INTELLIGENCE","BAĞLAMSAL ZEKÂ","INTELIGENCIA CONTEXTUAL","INTELLIGENCE CONTEXTUELLE","INTELLIGENZA CONTESTUALE","INTELIGENȚĂ CONTEXTUALĂ","上下文智能"]],["home.intelligence.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTİF GELİŞTİRME","DESARROLLO ACTIVO","DÉVELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVĂ","积极开发中"]],["home.intelligence.title",["ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence","ZAL’THERA Intelligence"]],["home.intelligence.tagline",["Intelligenz, die ihre Grenzen kennt.","Intelligence that knows its limits.","Sınırlarını bilen zekâ.","Inteligencia que conoce sus límites.","Une intelligence qui connaît ses limites.","Intelligenza che conosce i propri limiti.","Inteligență care își cunoaște limitele.","知道自身边界的智能。"]],["home.intelligence.text1",["Die Intelligenzschicht arbeitet nicht losgelöst vom Menschen. Sie versteht verfügbaren Kontext, erkennt Zusammenhänge, erklärt Informationen und bereitet mögliche Aktionen vor.","The intelligence layer does not operate independently of the human. It understands available context, identifies relationships, explains information and prepares possible actions.","Zekâ katmanı insandan bağımsız çalışmaz. Mevcut bağlamı anlar, ilişkileri fark eder, bilgiyi açıklar ve olası eylemleri hazırlar.","La capa de inteligencia no funciona separada de la persona. Comprende el contexto disponible, identifica relaciones, explica información y prepara posibles acciones.","La couche d’intelligence n’agit pas indépendamment de l’humain. Elle comprend le contexte disponible, identifie les relations, explique l’information et prépare des actions possibles.","Il livello di intelligenza non opera separato dalla persona. Comprende il contesto disponibile, riconosce relazioni, spiega informazioni e prepara possibili azioni.","Stratul de inteligență nu funcționează separat de om. Înțelege contextul disponibil, identifică relații, explică informații și pregătește acțiuni posibile.","智能层并不脱离人独立运行。它理解可用上下文、识别关联、解释信息并准备可能的操作。"]],["home.intelligence.text2",["Konsequente Aktionen bleiben an Berechtigung, Kontext und menschliche Autorisierung gebunden.","Consequential actions remain bound to authorization, context and human approval.","Sonuç doğuran eylemler yetki, bağlam ve insan onayına bağlı kalır.","Las acciones con consecuencias permanecen vinculadas a autorización, contexto y aprobación humana.","Les actions à conséquence restent liées à l’autorisation, au contexte et à l’approbation humaine.","Le azioni con conseguenze restano vincolate ad autorizzazione, contesto e approvazione umana.","Acțiunile cu consecințe rămân legate de autorizare, context și aprobarea umană.","会产生后果的操作仍受权限、上下文与人工授权约束。"]],["home.communication.eyebrow",["IDENTITÄT-ZU-IDENTITÄT","IDENTITY-TO-IDENTITY","KİMLİKTEN KİMLİĞE","IDENTIDAD A IDENTIDAD","IDENTITÉ À IDENTITÉ","IDENTITÀ A IDENTITÀ","IDENTITATE LA IDENTITATE","身份到身份"]],["home.communication.status",["AKTIVE ENTWICKLUNG","ACTIVE DEVELOPMENT","AKTİF GELİŞTİRME","DESARROLLO ACTIVO","DÉVELOPPEMENT ACTIF","SVILUPPO ATTIVO","DEZVOLTARE ACTIVĂ","积极开发中"]],["home.communication.title",["Communication","Communication","İletişim","Comunicación","Communication","Comunicazione","Comunicare","通信"]],["home.communication.tagline",["Verbindung beginnt mit Identität und Zustimmung.","Connection begins with identity and consent.","Bağlantı kimlik ve onayla başlar.","La conexión comienza con identidad y consentimiento.","La connexion commence par l’identité et le consentement.","La connessione inizia con identità e consenso.","Conexiunea începe cu identitate și consimțământ.","连接始于身份与同意。"]],["home.communication.text1",["ZAL’THERA Communication entwickelt eine sichere Kommunikationsschicht zwischen autorisierten Identitäten.","ZAL’THERA Communication is developing a secure communication layer between authorized identities.","ZAL’THERA Communication, yetkili kimlikler arasında güvenli bir iletişim katmanı geliştirir.","ZAL’THERA Communication desarrolla una capa de comunicación segura entre identidades autorizadas.","ZAL’THERA Communication développe une couche de communication sécurisée entre identités autorisées.","ZAL’THERA Communication sviluppa un livello di comunicazione sicuro tra identità autorizzate.","ZAL’THERA Communication dezvoltă un strat sigur de comunicare între identități autorizate.","ZAL’THERA Communication 正在构建已授权身份之间的安全通信层。"]],["home.communication.text2",["Sprache, später Video, Dateien und vertrauensbasierte Zustellung werden nicht über öffentliche Profile definiert, sondern über Identität, Beziehung und Berechtigung.","Voice, later video, files and trusted delivery are defined not through public profiles, but through identity, relationship and authorization.","Ses, daha sonra video, dosyalar ve güvene dayalı teslimat; herkese açık profillerle değil kimlik, ilişki ve yetkiyle tanımlanır.","La voz, más adelante el vídeo, los archivos y la entrega de confianza no se definen mediante perfiles públicos, sino mediante identidad, relación y autorización.","La voix, puis la vidéo, les fichiers et la livraison de confiance ne sont pas définis par des profils publics, mais par l’identité, la relation et l’autorisation.","Voce, in seguito video, file e consegna basata sulla fiducia non sono definiti tramite profili pubblici, ma tramite identità, relazione e autorizzazione.","Vocea, ulterior video, fișierele și livrarea bazată pe încredere nu sunt definite prin profiluri publice, ci prin identitate, relație și autorizare.","语音、后续的视频、文件与可信投递不由公开资料定义，而由身份、关系与授权定义。"]],["home.communication.voice",["SPRACHE","VOICE","SES","VOZ","VOIX","VOCE","VOCE","语音"]],["home.communication.video",["VIDEO","VIDEO","VİDEO","VÍDEO","VIDÉO","VIDEO","VIDEO","视频"]],["home.communication.files",["DATEIEN","FILES","DOSYALAR","ARCHIVOS","FICHIERS","FILE","FIȘIERE","文件"]],["home.communication.trust",["VERTRAUEN","TRUST","GÜVEN","CONFIANZA","CONFIANCE","FIDUCIA","ÎNCREDERE","信任"]],["home.communication.consent",["ZUSTIMMUNG","CONSENT","ONAY","CONSENTIMIENTO","CONSENTEMENT","CONSENSO","CONSIMȚĂMÂNT","同意"]],["home.communication.connectionRule",["ZUSTIMMUNG VOR VERBINDUNG","CONSENT BEFORE CONNECTION","BAĞLANTIDAN ÖNCE ONAY","CONSENTIMIENTO ANTES DE LA CONEXIÓN","CONSENTEMENT AVANT CONNEXION","CONSENSO PRIMA DELLA CONNESSIONE","CONSIMȚĂMÂNT ÎNAINTE DE CONECTARE","连接前先获得同意"]],["home.industry.eyebrow",["REALE SYSTEME","REAL-WORLD SYSTEMS","GERÇEK DÜNYA SİSTEMLERİ","SISTEMAS DEL MUNDO REAL","SYSTÈMES DU MONDE RÉEL","SISTEMI DEL MONDO REALE","SISTEME DIN LUMEA REALĂ","现实世界系统"]],["home.industry.status",["ENTWICKLUNG & ARCHITEKTUR","DEVELOPMENT & ARCHITECTURE","GELİŞTİRME & MİMARİ","DESARROLLO & ARQUITECTURA","DÉVELOPPEMENT & ARCHITECTURE","SVILUPPO & ARCHITETTURA","DEZVOLTARE & ARHITECTURĂ","开发与架构"]],["home.industry.title",["ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry","ZAL’THERA Industry"]],["home.industry.tagline",["Reale Prozesse werden zu verständlichen Systemen.","Real processes become understandable systems.","Gerçek süreçler anlaşılır sistemlere dönüşür.","Los procesos reales se convierten en sistemas comprensibles.","Les processus réels deviennent des systèmes compréhensibles.","I processi reali diventano sistemi comprensibili.","Procesele reale devin sisteme ușor de înțeles.","现实流程转化为可理解的系统。"]],["home.industry.text",["Die industrielle Schicht verbindet operative Übergaben, Prozesszustände, Sensordaten, Messwerte und zukünftige Maschinenanbindungen.","The industrial layer connects operational handovers, process states, sensor data, measurements and future machine integrations.","Endüstriyel katman; operasyonel devirleri, süreç durumlarını, sensör verilerini, ölçümleri ve gelecekteki makine entegrasyonlarını bağlar.","La capa industrial conecta relevos operativos, estados de proceso, datos de sensores, mediciones y futuras integraciones de máquinas.","La couche industrielle relie transmissions opérationnelles, états de processus, données de capteurs, mesures et futures intégrations de machines.","Il livello industriale collega passaggi operativi, stati di processo, dati sensore, misurazioni e future integrazioni macchina.","Stratul industrial conectează predări operaționale, stări de proces, date de senzori, măsurători și viitoare integrări de utilaje.","工业层连接操作交接、流程状态、传感器数据、测量值与未来的机器集成。"]],["home.industry.shift",["Schichtübergabe & operative Zustände","Shift handover & operational states","Vardiya devri & operasyonel durumlar","Relevo de turno & estados operativos","Transmission de poste & états opérationnels","Passaggio turno & stati operativi","Predare schimb & stări operaționale","班次交接与运行状态"]],["home.industry.gate",["Sensorik, Messwerte & Maschinenprozesse","Sensors, measurements & machine processes","Sensörler, ölçümler & makine süreçleri","Sensores, mediciones & procesos de máquina","Capteurs, mesures & processus machine","Sensori, misurazioni & processi macchina","Senzori, măsurători & procese de utilaje","传感器、测量值与机器流程"]],["home.industry.process",["Analyse & nachvollziehbare Prozesszustände","Analysis & traceable process states","Analiz & izlenebilir süreç durumları","Análisis & estados de proceso trazables","Analyse & états de processus traçables","Analisi & stati di processo tracciabili","Analiză & stări de proces trasabile","分析与可追溯流程状态"]],["home.proof.eyebrow",["NACHWEIS & VERTRAUEN","PROOF & TRUST","KANIT & GÜVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVADĂ & ÎNCREDERE","证明与信任"]],["home.proof.title",["Nachweis vor Annahme.","Evidence before assumption.","Varsayımdan önce kanıt.","Prueba antes que suposición.","La preuve avant l’hypothèse.","La prova prima dell’ipotesi.","Dovada înaintea presupunerii.","先有证据，再作判断。"]],["home.proof.text",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow; görevleri, kanıtları, fotoğrafları, notları, imzaları, denetimi ve dışa aktarmayı izlenebilir bir akışta birleştirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditoría y exportación en un flujo trazable.","ProofFlow relie tâches, preuves, photos, notes, signatures, audit et export dans un flux traçable.","ProofFlow collega attività, prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conectează sarcini, dovezi, fotografii, note, semnături, audit și export într-un flux trasabil.","ProofFlow 将任务、证明、照片、备注、签名、审计与导出连接成可追溯流程。"]],["home.proof.open",["ProofFlow öffnen","Open ProofFlow","ProofFlow’u aç","Abrir ProofFlow","Ouvrir ProofFlow","Apri ProofFlow","Deschide ProofFlow","打开 ProofFlow"]],["home.products.eyebrow",["SYSTEMPORTFOLIO","SYSTEM PORTFOLIO","SİSTEM PORTFÖYÜ","PORTAFOLIO DEL SISTEMA","PORTEFEUILLE SYSTÈME","PORTAFOGLIO SISTEMA","PORTOFOLIU DE SISTEM","系统组合"]],["home.products.title",["Ein Ökosystem. Unterschiedliche Reifegrade.","One ecosystem. Different levels of maturity.","Tek ekosistem. Farklı olgunluk düzeyleri.","Un ecosistema. Distintos niveles de madurez.","Un écosystème. Différents niveaux de maturité.","Un ecosistema. Diversi livelli di maturità.","Un ecosistem. Niveluri diferite de maturitate.","一个生态系统。不同成熟度。"]],["home.products.lead",["ZAL’THERA trennt klar zwischen verfügbaren Produkten, aktiver Entwicklung, Systemmodulen und zukünftiger Architektur.","ZAL’THERA clearly distinguishes between available products, active development, system modules and future architecture.","ZAL’THERA; mevcut ürünleri, aktif geliştirmeyi, sistem modüllerini ve gelecekteki mimariyi açıkça ayırır.","ZAL’THERA distingue claramente entre productos disponibles, desarrollo activo, módulos del sistema y arquitectura futura.","ZAL’THERA distingue clairement les produits disponibles, le développement actif, les modules système et l’architecture future.","ZAL’THERA distingue chiaramente tra prodotti disponibili, sviluppo attivo, moduli di sistema e architettura futura.","ZAL’THERA separă clar produsele disponibile, dezvoltarea activă, modulele de sistem și arhitectura viitoare.","ZAL’THERA 明确区分已发布产品、积极开发、系统模块与未来架构。"]],["home.products.lifeflow",["Kosten, Verträge, Fristen und persönliche Finanzübersicht.","Costs, contracts, deadlines and personal financial overview.","Maliyetler, sözleşmeler, süreler ve kişisel finans görünümü.","Costes, contratos, plazos y visión financiera personal.","Coûts, contrats, échéances et vue financière personnelle.","Costi, contratti, scadenze e panoramica finanziaria personale.","Costuri, contracte, termene și vedere financiară personală.","成本、合同、期限与个人财务概览。"]],["home.products.continuity",["Persönliche souveräne Umgebung für Dokumente, Daten, Kontext und Intelligenz.","A personal sovereign environment for documents, data, context and intelligence.","Belgeler, veriler, bağlam ve zekâ için kişisel egemen ortam.","Un entorno personal soberano para documentos, datos, contexto e inteligencia.","Un environnement personnel souverain pour documents, données, contexte et intelligence.","Un ambiente personale sovrano per documenti, dati, contesto e intelligenza.","Un mediu personal suveran pentru documente, date, context și inteligență.","面向文档、数据、上下文与智能的个人主权环境。"]],["home.products.proofflow",["Nachweise, Audit, Signatur und überprüfbare Abläufe.","Evidence, audit, signatures and verifiable workflows.","Kanıt, denetim, imza ve doğrulanabilir iş akışları.","Pruebas, auditoría, firmas y flujos verificables.","Preuves, audit, signatures et flux vérifiables.","Prove, audit, firme e flussi verificabili.","Dovezi, audit, semnături și fluxuri verificabile.","证明、审计、签名与可验证流程。"]],["home.products.shiftlog",["Digitale Schichtübergabe für operative Zustände und Verantwortlichkeiten.","Digital shift handover for operational states and responsibilities.","Operasyonel durumlar ve sorumluluklar için dijital vardiya devri.","Relevo digital de turno para estados operativos y responsabilidades.","Transmission numérique de poste pour états opérationnels et responsabilités.","Passaggio turno digitale per stati operativi e responsabilità.","Predare digitală de schimb pentru stări operaționale și responsabilități.","面向运行状态与责任的数字班次交接。"]],["home.products.voicebridge",["Entwicklung einer vertrauensbasierten direkten Sprachverbindung zwischen autorisierten Identitäten.","Development of a trust-based direct voice connection between authorized identities.","Yetkili kimlikler arasında güvene dayalı doğrudan ses bağlantısı geliştirme.","Desarrollo de una conexión de voz directa basada en confianza entre identidades autorizadas.","Développement d’une connexion vocale directe fondée sur la confiance entre identités autorisées.","Sviluppo di una connessione vocale diretta basata sulla fiducia tra identità autorizzate.","Dezvoltarea unei conexiuni vocale directe bazate pe încredere între identități autorizate.","开发已授权身份之间基于信任的直接语音连接。"]],["home.products.zalgate",["Architektur für die Verbindung von Sensorik, Messwerten, Maschinen und Prozesszuständen.","Architecture connecting sensors, measurements, machines and process states.","Sensörleri, ölçümleri, makineleri ve süreç durumlarını bağlayan mimari.","Arquitectura que conecta sensores, mediciones, máquinas y estados de proceso.","Architecture reliant capteurs, mesures, machines et états de processus.","Architettura che collega sensori, misurazioni, macchine e stati di processo.","Arhitectură care conectează senzori, măsurători, utilaje și stări de proces.","连接传感器、测量值、机器与流程状态的架构。"]],["home.products.open",["Öffnen →","Open →","Aç →","Abrir →","Ouvrir →","Apri →","Deschide →","打开 →"]],["home.products.viewSystem",["System ansehen →","View system →","Sistemi görüntüle →","Ver sistema →","Voir le système →","Vedi sistema →","Vezi sistemul →","查看系统 →"]],["home.products.viewDevelopment",["Entwicklung ansehen →","View development →","Geliştirmeyi görüntüle →","Ver desarrollo →","Voir le développement →","Vedi sviluppo →","Vezi dezvoltarea →","查看开发 →"]],["home.products.viewArchitecture",["Architektur →","Architecture →","Mimari →","Arquitectura →","Architecture →","Architettura →","Arhitectură →","架构 →"]],["home.pilot.eyebrow",["KONTROLLIERTER REALER EINSTIEG","CONTROLLED REAL-WORLD ENTRY","KONTROLLÜ GERÇEK DÜNYA GİRİŞİ","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTRÉE CONTRÔLÉE DANS LE RÉEL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLATĂ ÎN LUMEA REALĂ","受控的现实世界切入"]],["home.pilot.title",["ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot","ZAL’THERA Pilot"]],["home.pilot.text",["Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tatsächlichen Nutzen prüfen – ohne den bestehenden Betrieb sofort vollständig zu ersetzen.","Understand a clearly defined real-world process, test it in a controlled way and verify actual value without immediately replacing the existing operation.","Açıkça sınırlandırılmış gerçek bir süreci anlayın, kontrollü test edin ve mevcut işletmeyi hemen tamamen değiştirmeden gerçek faydayı doğrulayın.","Comprender un proceso real claramente delimitado, probarlo de forma controlada y verificar su valor sin sustituir de inmediato la operación existente.","Comprendre un processus réel clairement délimité, le tester de manière contrôlée et vérifier sa valeur sans remplacer immédiatement l’existant.","Comprendere un processo reale ben delimitato, testarlo in modo controllato e verificarne il valore senza sostituire subito l’operatività esistente.","Înțelege un proces real clar delimitat, testează-l controlat și verifică valoarea fără a înlocui imediat operațiunea existentă.","理解一个边界清晰的现实流程，以受控方式测试并验证实际价值，而无需立即全面替换现有运行。"]],["home.pilot.discover",["Pilot entdecken","Discover Pilot","Pilot’u keşfet","Descubrir Pilot","Découvrir Pilot","Scopri Pilot","Descoperă Pilot","探索 Pilot"]],["home.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicită Pilot","申请 Pilot"]],["home.core.eyebrow",["UNTER JEDEM SYSTEM","BENEATH EVERY SYSTEM","HER SİSTEMİN ALTINDA","DEBAJO DE CADA SISTEMA","SOUS CHAQUE SYSTÈME","SOTTO OGNI SISTEMA","SUB FIECARE SISTEM","每个系统之下"]],["home.core.title",["ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE"]],["home.core.text",["Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausführung bilden den technischen Kern hinter dem Ökosystem.","Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical core behind the ecosystem.","Kimlik, Policy, Onay, Denetim, Ledger, Güven ve kontrollü yürütme ekosistemin teknik çekirdeğini oluşturur.","Identity, Policy, Consent, Audit, Ledger, Trust y la ejecución controlada forman el núcleo técnico del ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust et l’exécution contrôlée forment le noyau technique de l’écosystème.","Identity, Policy, Consent, Audit, Ledger, Trust ed esecuzione controllata formano il nucleo tecnico dell’ecosistema.","Identity, Policy, Consent, Audit, Ledger, Trust și execuția controlată formează nucleul tehnic al ecosistemului.","Identity、Policy、Consent、Audit、Ledger、Trust 与受控执行构成生态系统背后的技术核心。"]],["home.core.discover",["Core entdecken","Discover Core","Core’u keşfet","Descubrir Core","Découvrir Core","Scopri Core","Descoperă Core","探索 Core"]],["home.contact.eyebrow",["KONTAKT","CONTACT","İLETİŞİM","CONTACTO","CONTACT","CONTATTO","CONTACT","联系"]],["home.contact.title",["ZAL’THERA kontaktieren","Contact ZAL’THERA","ZAL’THERA ile iletişime geç","Contactar con ZAL’THERA","Contacter ZAL’THERA","Contatta ZAL’THERA","Contactează ZAL’THERA","联系 ZAL’THERA"]],["home.contact.text",["Fragen zu ZAL’THERA, einem System oder bestehenden Modulen?","Questions about ZAL’THERA, a system or existing modules?","ZAL’THERA, bir sistem veya mevcut modüller hakkında sorularınız mı var?","¿Preguntas sobre ZAL’THERA, un sistema o módulos existentes?","Des questions sur ZAL’THERA, un système ou des modules existants ?","Domande su ZAL’THERA, un sistema o moduli esistenti?","Întrebări despre ZAL’THERA, un sistem sau module existente?","对 ZAL’THERA、某个系统或现有模块有疑问？"]],["home.contact.name",["Name","Name","Ad","Nombre","Nom","Nome","Nume","姓名"]],["home.contact.namePlaceholder",["Dein Name","Your name","Adınız","Tu nombre","Votre nom","Il tuo nome","Numele tău","你的姓名"]],["home.contact.email",["E-Mail","Email","E-posta","Correo electrónico","E-mail","E-mail","E-mail","电子邮件"]],["home.contact.emailPlaceholder",["deine@email.de","your@email.com","eposta@ornek.com","tu@email.com","votre@email.com","tua@email.com","email@exemplu.ro","you@example.com"]],["home.contact.message",["Nachricht","Message","Mesaj","Mensaje","Message","Messaggio","Mesaj","消息"]],["home.contact.messagePlaceholder",["Deine Nachricht …","Your message …","Mesajınız …","Tu mensaje …","Votre message …","Il tuo messaggio …","Mesajul tău …","你的消息…"]],["home.contact.send",["Senden","Send","Gönder","Enviar","Envoyer","Invia","Trimite","发送"]],["home.contact.privacyPrefix",["Mit dem Absenden akzeptierst du unsere","By submitting, you accept our","Göndererek şunu kabul edersiniz:","Al enviar, aceptas nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere accepți","提交即表示你接受我们的"]],["home.contact.privacy",["Datenschutzerklärung","Privacy Policy","Gizlilik Politikası","Política de privacidad","Politique de confidentialité","Informativa sulla privacy","Politica de confidențialitate","隐私政策"]],["about.header.chip",["About","About","Hakkında","Acerca de","À propos","Chi siamo","Despre","关于"]],["about.hero.kicker",["WHY ZAL’THERA EXISTS","WHY ZAL’THERA EXISTS","ZAL’THERA NEDEN VAR","POR QUÉ EXISTE ZAL’THERA","POURQUOI ZAL’THERA EXISTE","PERCHÉ ESISTE ZAL’THERA","DE CE EXISTĂ ZAL’THERA","ZAL’THERA 为何存在"]],["about.hero.product",["BUILT FROM FIRST PRINCIPLES","BUILT FROM FIRST PRINCIPLES","İLK İLKELERDEN İNŞA EDİLDİ","CONSTRUIDO DESDE PRIMEROS PRINCIPIOS","CONSTRUIT À PARTIR DE PRINCIPES FONDAMENTAUX","COSTRUITO DAI PRINCIPI FONDAMENTALI","CONSTRUIT DIN PRINCIPII FUNDAMENTALE","从第一性原理构建"]],["about.hero.title",["Technology should<br>understand responsibility.","Technology should<br>understand responsibility.","Teknoloji<br>sorumluluğu anlamalı.","La tecnología debería<br>comprender la responsabilidad.","La technologie devrait<br>comprendre la responsabilité.","La tecnologia dovrebbe<br>comprendere la responsabilità.","Tehnologia ar trebui<br>să înțeleagă responsabilitatea.","技术应该<br>理解责任。"]],["about.hero.lead",["ZAL’THERA entsteht aus einer einfachen Frage: Wie können digitale Systeme intelligenter werden, ohne Identität, Verantwortung, Nachvollziehbarkeit und menschliche Kontrolle zu verlieren?","ZAL’THERA begins with a simple question: How can digital systems become more intelligent without losing identity, responsibility, traceability and human control?","ZAL’THERA basit bir sorudan doğar: Dijital sistemler kimlik, sorumluluk, izlenebilirlik ve insan kontrolünü kaybetmeden nasıl daha akıllı olabilir?","ZAL’THERA nace de una pregunta sencilla: ¿Cómo pueden los sistemas digitales ser más inteligentes sin perder identidad, responsabilidad, trazabilidad y control humano?","ZAL’THERA part d’une question simple : comment rendre les systèmes numériques plus intelligents sans perdre identité, responsabilité, traçabilité et contrôle humain ?","ZAL’THERA nasce da una domanda semplice: come possono i sistemi digitali diventare più intelligenti senza perdere identità, responsabilità, tracciabilità e controllo umano?","ZAL’THERA pornește de la o întrebare simplă: cum pot sistemele digitale deveni mai inteligente fără a pierde identitatea, responsabilitatea, trasabilitatea și controlul uman?","ZAL’THERA 始于一个简单的问题：数字系统如何在不失去身份、责任、可追溯性与人工控制的前提下变得更智能？"]],["about.hero.principles",["Prinzipien entdecken","Discover principles","İlkeleri keşfet","Descubrir principios","Découvrir les principes","Scopri i principi","Descoperă principiile","探索原则"]],["about.hero.founder",["Founder","Founder","Kurucu","Fundador","Fondateur","Fondatore","Fondator","创始人"]],["about.hero.localFirst",["LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","LOCAL-FIRST","本地优先"]],["about.hero.sovereign",["SOVEREIGN","SOVEREIGN","EGEMEN","SOBERANO","SOUVERAIN","SOVRANO","SUVERAN","主权"]],["about.hero.traceable",["TRACEABLE","TRACEABLE","İZLENEBİLİR","TRAZABLE","TRAÇABLE","TRACCIABILE","TRASABIL","可追溯"]],["about.hero.humanAuthorized",["HUMAN-AUTHORIZED","HUMAN-AUTHORIZED","İNSAN TARAFINDAN YETKİLİ","AUTORIZADO POR PERSONAS","AUTORISÉ PAR L’HUMAIN","AUTORIZZATO DALL’UOMO","AUTORIZAT DE OM","人工授权"]],["about.principles.eyebrow",["FIRST PRINCIPLES","FIRST PRINCIPLES","İLK İLKELER","PRIMEROS PRINCIPIOS","PRINCIPES FONDAMENTAUX","PRINCIPI FONDAMENTALI","PRINCIPII FUNDAMENTALE","第一性原理"]],["about.principles.title",["Digitale Systeme sollten Menschen nicht entmündigen.","Digital systems should not disempower people.","Dijital sistemler insanların yetkisini elinden almamalı.","Los sistemas digitales no deberían restar autonomía a las personas.","Les systèmes numériques ne devraient pas retirer leur autonomie aux personnes.","I sistemi digitali non dovrebbero togliere autonomia alle persone.","Sistemele digitale nu ar trebui să diminueze autonomia oamenilor.","数字系统不应削弱人的自主权。"]],["about.principles.lead",["Je mehr Systeme wissen und vorbereiten können, desto wichtiger werden Identität, Kontext, Berechtigung, Nachweis und klare Verantwortlichkeit.","The more systems can know and prepare, the more important identity, context, authorization, evidence and clear accountability become.","Sistemler ne kadar çok bilir ve hazırlık yapabilirse kimlik, bağlam, yetki, kanıt ve açık sorumluluk o kadar önemli olur.","Cuanto más pueden saber y preparar los sistemas, más importantes son la identidad, el contexto, la autorización, la evidencia y la responsabilidad clara.","Plus les systèmes peuvent savoir et préparer, plus l’identité, le contexte, l’autorisation, la preuve et la responsabilité claire deviennent essentiels.","Più i sistemi possono sapere e preparare, più diventano importanti identità, contesto, autorizzazione, prova e responsabilità chiara.","Cu cât sistemele pot ști și pregăti mai mult, cu atât identitatea, contextul, autorizarea, dovada și responsabilitatea clară devin mai importante.","系统知道和准备得越多，身份、上下文、授权、证据与清晰责任就越重要。"]],["about.principles.identity.title",["Identity belongs to the person.","Identity belongs to the person.","Kimlik kişiye aittir.","La identidad pertenece a la persona.","L’identité appartient à la personne.","L’identità appartiene alla persona.","Identitatea aparține persoanei.","身份属于个人。"]],["about.principles.identity.text",["Digitale Identität soll nicht von einer einzelnen App, Plattform oder Sitzung abhängig sein.","Digital identity should not depend on a single app, platform or session.","Dijital kimlik tek bir uygulamaya, platforma veya oturuma bağlı olmamalı.","La identidad digital no debería depender de una sola app, plataforma o sesión.","L’identité numérique ne devrait pas dépendre d’une seule application, plateforme ou session.","L’identità digitale non dovrebbe dipendere da una singola app, piattaforma o sessione.","Identitatea digitală nu ar trebui să depindă de o singură aplicație, platformă sau sesiune.","数字身份不应依赖某个单一应用、平台或会话。"]],["about.principles.context.title",["Context must remain understandable.","Context must remain understandable.","Bağlam anlaşılır kalmalı.","El contexto debe seguir siendo comprensible.","Le contexte doit rester compréhensible.","Il contesto deve restare comprensibile.","Contextul trebuie să rămână ușor de înțeles.","上下文必须保持可理解。"]],["about.principles.context.text",["Information gewinnt Bedeutung durch Herkunft, Beziehung, Zeitpunkt und Zusammenhang.","Information gains meaning through provenance, relationship, time and context.","Bilgi; kaynak, ilişki, zaman ve bağlamla anlam kazanır.","La información adquiere significado mediante procedencia, relación, tiempo y contexto.","L’information prend du sens par sa provenance, sa relation, son moment et son contexte.","L’informazione acquista significato tramite provenienza, relazione, tempo e contesto.","Informația capătă sens prin proveniență, relație, timp și context.","信息通过来源、关系、时间与上下文获得意义。"]],["about.principles.trust.title",["Trust should be verifiable.","Trust should be verifiable.","Güven doğrulanabilir olmalı.","La confianza debe ser verificable.","La confiance doit être vérifiable.","La fiducia dovrebbe essere verificabile.","Încrederea ar trebui să fie verificabilă.","信任应当可验证。"]],["about.principles.trust.text",["Vertrauen soll aus nachvollziehbaren Zuständen, Berechtigungen und Nachweisen entstehen.","Trust should emerge from traceable states, permissions and evidence.","Güven, izlenebilir durumlar, yetkiler ve kanıtlardan doğmalı.","La confianza debe surgir de estados, permisos y pruebas trazables.","La confiance doit naître d’états, de permissions et de preuves traçables.","La fiducia dovrebbe nascere da stati, autorizzazioni e prove tracciabili.","Încrederea ar trebui să rezulte din stări, permisiuni și dovezi trasabile.","信任应来自可追溯状态、权限与证据。"]],["about.principles.authority.title",["Authority remains explicit.","Authority remains explicit.","Yetki açık kalır.","La autoridad permanece explícita.","L’autorité reste explicite.","L’autorità resta esplicita.","Autoritatea rămâne explicită.","权力必须明确。"]],["about.principles.authority.text",["Intelligenz darf vorbereiten. Konsequente Aktionen benötigen Autorisierung.","Intelligence may prepare. Consequential actions require authorization.","Zekâ hazırlayabilir. Sonuç doğuran eylemler yetki gerektirir.","La inteligencia puede preparar. Las acciones con consecuencias requieren autorización.","L’intelligence peut préparer. Les actions à conséquence nécessitent une autorisation.","L’intelligenza può preparare. Le azioni con conseguenze richiedono autorizzazione.","Inteligența poate pregăti. Acțiunile cu consecințe necesită autorizare.","智能可以准备。会产生后果的操作需要授权。"]],["about.architecture.eyebrow",["ONE ARCHITECTURE","ONE ARCHITECTURE","TEK MİMARİ","UNA ARQUITECTURA","UNE ARCHITECTURE","UN’ARCHITETTURA","O ARHITECTURĂ","统一架构"]],["about.architecture.title",["ZAL’THERA ist nicht als Sammlung isolierter Apps gedacht.","ZAL’THERA is not designed as a collection of isolated apps.","ZAL’THERA, birbirinden kopuk uygulamalar koleksiyonu olarak tasarlanmadı.","ZAL’THERA no está concebido como una colección de apps aisladas.","ZAL’THERA n’est pas conçu comme une collection d’applications isolées.","ZAL’THERA non è pensato come una raccolta di app isolate.","ZAL’THERA nu este conceput ca o colecție de aplicații izolate.","ZAL’THERA 并非被设计成一组孤立应用。"]],["about.architecture.text",["CONTINUITY, Proof, Communication, Intelligence und industrielle Systeme folgen einer gemeinsamen Logik: Identität, Kontext, Vertrauen, Audit und kontrollierte Aktion.","CONTINUITY, Proof, Communication, Intelligence and industrial systems follow a shared logic: identity, context, trust, audit and controlled action.","CONTINUITY, Proof, Communication, Intelligence ve endüstriyel sistemler ortak bir mantığı izler: kimlik, bağlam, güven, denetim ve kontrollü eylem.","CONTINUITY, Proof, Communication, Intelligence y los sistemas industriales siguen una lógica común: identidad, contexto, confianza, auditoría y acción controlada.","CONTINUITY, Proof, Communication, Intelligence et les systèmes industriels suivent une logique commune : identité, contexte, confiance, audit et action contrôlée.","CONTINUITY, Proof, Communication, Intelligence e i sistemi industriali seguono una logica comune: identità, contesto, fiducia, audit e azione controllata.","CONTINUITY, Proof, Communication, Intelligence și sistemele industriale urmează o logică comună: identitate, context, încredere, audit și acțiune controlată.","CONTINUITY、Proof、Communication、Intelligence 与工业系统遵循共同逻辑：身份、上下文、信任、审计与受控操作。"]],["about.architecture.systems",["Systeme ansehen","View systems","Sistemleri görüntüle","Ver sistemas","Voir les systèmes","Vedi sistemi","Vezi sistemele","查看系统"]],["about.founder.eyebrow",["FOUNDER","FOUNDER","KURUCU","FUNDADOR","FONDATEUR","FONDATORE","FONDATOR","创始人"]],["about.founder.tagline",["Founder and builder of ZAL’THERA.","Founder and builder of ZAL’THERA.","ZAL’THERA’nın kurucusu ve geliştiricisi.","Fundador y creador de ZAL’THERA.","Fondateur et bâtisseur de ZAL’THERA.","Fondatore e costruttore di ZAL’THERA.","Fondator și creator al ZAL’THERA.","ZAL’THERA 的创始人与构建者。"]],["about.founder.text1",["ZAL’THERA entsteht aus dem Ziel, digitale Systeme nicht nur leistungsfähiger, sondern verständlicher, verantwortlicher und souveräner zu machen.","ZAL’THERA is built with the goal of making digital systems not only more capable, but also more understandable, responsible and sovereign.","ZAL’THERA, dijital sistemleri yalnızca daha güçlü değil, daha anlaşılır, sorumlu ve egemen hale getirme hedefiyle geliştiriliyor.","ZAL’THERA nace con el objetivo de hacer los sistemas digitales no solo más capaces, sino también más comprensibles, responsables y soberanos.","ZAL’THERA est construit avec l’objectif de rendre les systèmes numériques non seulement plus puissants, mais aussi plus compréhensibles, responsables et souverains.","ZAL’THERA nasce con l’obiettivo di rendere i sistemi digitali non solo più capaci, ma anche più comprensibili, responsabili e sovrani.","ZAL’THERA este construit cu scopul de a face sistemele digitale nu doar mai capabile, ci și mai ușor de înțeles, responsabile și suverane.","ZAL’THERA 的目标不仅是让数字系统更强大，也让它们更可理解、更负责任、更具主权性。"]],["about.founder.text2",["Der Schwerpunkt liegt auf Systemarchitekturen, die persönliche Daten, Identität, künstliche Intelligenz, Kommunikation, Nachweise und reale Prozesse miteinander verbinden, ohne menschliche Autorität unsichtbar zu ersetzen.","The focus is on system architectures that connect personal data, identity, artificial intelligence, communication, evidence and real-world processes without invisibly replacing human authority.","Odak; kişisel verileri, kimliği, yapay zekâyı, iletişimi, kanıtları ve gerçek süreçleri insan yetkisini görünmez biçimde değiştirmeden bağlayan sistem mimarileridir.","El foco está en arquitecturas de sistemas que conectan datos personales, identidad, inteligencia artificial, comunicación, pruebas y procesos reales sin sustituir de forma invisible la autoridad humana.","L’accent porte sur des architectures qui relient données personnelles, identité, intelligence artificielle, communication, preuves et processus réels sans remplacer invisiblement l’autorité humaine.","L’attenzione è su architetture di sistema che collegano dati personali, identità, intelligenza artificiale, comunicazione, prove e processi reali senza sostituire invisibilmente l’autorità umana.","Accentul este pus pe arhitecturi de sistem care conectează date personale, identitate, inteligență artificială, comunicare, dovezi și procese reale fără a înlocui invizibil autoritatea umană.","重点是构建能够连接个人数据、身份、人工智能、通信、证明与现实流程的系统架构，同时不以不可见方式取代人的权力。"]],["about.founder.discover",["ZAL’THERA entdecken","Discover ZAL’THERA","ZAL’THERA’yı keşfet","Descubrir ZAL’THERA","Découvrir ZAL’THERA","Scopri ZAL’THERA","Descoperă ZAL’THERA","探索 ZAL’THERA"]],["about.founder.role",["Founder · Systems Architecture","Founder · Systems Architecture","Kurucu · Sistem Mimarisi","Fundador · Arquitectura de Sistemas","Fondateur · Architecture des Systèmes","Fondatore · Architettura dei Sistemi","Fondator · Arhitectură de Sisteme","创始人 · 系统架构"]],["about.direction.eyebrow",["THE DIRECTION","THE DIRECTION","YÖN","LA DIRECCIÓN","LA DIRECTION","LA DIREZIONE","DIRECȚIA","方向"]],["about.direction.title",["Intelligence should increase capability without removing accountability.","Intelligence should increase capability without removing accountability.","Zekâ, hesap verebilirliği ortadan kaldırmadan yeteneği artırmalı.","La inteligencia debería aumentar la capacidad sin eliminar la responsabilidad.","L’intelligence devrait accroître les capacités sans supprimer la responsabilité.","L’intelligenza dovrebbe aumentare le capacità senza eliminare la responsabilità.","Inteligența ar trebui să crească capacitatea fără a elimina responsabilitatea.","智能应提升能力，而不取消责任。"]],["about.direction.text",["Je mächtiger ein digitales System wird, desto wichtiger werden nachvollziehbare Grenzen, klare Identität und bewusste Autorisierung.","The more powerful a digital system becomes, the more important traceable boundaries, clear identity and deliberate authorization become.","Dijital bir sistem ne kadar güçlü olursa izlenebilir sınırlar, açık kimlik ve bilinçli yetkilendirme o kadar önemli olur.","Cuanto más potente es un sistema digital, más importantes son los límites trazables, la identidad clara y la autorización consciente.","Plus un système numérique devient puissant, plus les limites traçables, l’identité claire et l’autorisation consciente deviennent importantes.","Più un sistema digitale diventa potente, più diventano importanti limiti tracciabili, identità chiara e autorizzazione consapevole.","Cu cât un sistem digital devine mai puternic, cu atât limitele trasabile, identitatea clară și autorizarea conștientă devin mai importante.","数字系统越强大，可追溯边界、清晰身份与有意识的授权就越重要。"]],["about.direction.back",["Zurück zum System","Back to the system","Sisteme dön","Volver al sistema","Retour au système","Torna al sistema","Înapoi la sistem","返回系统"]],["lifeflow.hero.kicker",["PERSONAL FINANCE CLARITY","PERSONAL FINANCE CLARITY","KİŞİSEL FİNANS NETLİĞİ","CLARIDAD FINANCIERA PERSONAL","CLARTÉ FINANCIÈRE PERSONNELLE","CHIAREZZA FINANZIARIA PERSONALE","CLARITATE FINANCIARĂ PERSONALĂ","个人财务清晰度"]],["lifeflow.hero.title",["See what comes in.<br>See what goes out.<br>Know what remains.","See what comes in.<br>See what goes out.<br>Know what remains.","Ne geliyor gör.<br>Ne gidiyor gör.<br>Ne kaldığını bil.","Ve lo que entra.<br>Ve lo que sale.<br>Sabe lo que queda.","Voyez ce qui entre.<br>Voyez ce qui sort.<br>Sachez ce qui reste.","Vedi cosa entra.<br>Vedi cosa esce.<br>Saprai cosa resta.","Vezi ce intră.<br>Vezi ce iese.<br>Știi ce rămâne.","看清收入。<br>看清支出。<br>知道还剩多少。"]],["lifeflow.hero.lead",["LifeFlow macht laufende Kosten, Verträge, Fristen und finanzielle Verpflichtungen sichtbar – fokussiert, verständlich und ohne unnötige Komplexität.","LifeFlow makes recurring costs, contracts, deadlines and financial obligations visible — focused, understandable and without unnecessary complexity.","LifeFlow; düzenli maliyetleri, sözleşmeleri, süreleri ve finansal yükümlülükleri görünür kılar — odaklı, anlaşılır ve gereksiz karmaşıklık olmadan.","LifeFlow hace visibles los costes recurrentes, contratos, plazos y obligaciones financieras, de forma enfocada, comprensible y sin complejidad innecesaria.","LifeFlow rend visibles les coûts récurrents, contrats, échéances et obligations financières — de façon ciblée, compréhensible et sans complexité inutile.","LifeFlow rende visibili costi ricorrenti, contratti, scadenze e obblighi finanziari — in modo focalizzato, comprensibile e senza complessità inutile.","LifeFlow face vizibile costurile recurente, contractele, termenele și obligațiile financiare — clar, concentrat și fără complexitate inutilă.","LifeFlow 让持续成本、合同、期限与财务义务清晰可见——聚焦、易懂且没有不必要的复杂性。"]],["lifeflow.hero.view",["LifeFlow ansehen","View LifeFlow","LifeFlow’u görüntüle","Ver LifeFlow","Voir LifeFlow","Vedi LifeFlow","Vezi LifeFlow","查看 LifeFlow"]],["lifeflow.hero.understand",["System verstehen","Understand the system","Sistemi anla","Entender el sistema","Comprendre le système","Comprendi il sistema","Înțelege sistemul","理解系统"]],["lifeflow.hero.costs",["COSTS","COSTS","MALİYETLER","COSTES","COÛTS","COSTI","COSTURI","成本"]],["lifeflow.hero.contracts",["CONTRACTS","CONTRACTS","SÖZLEŞMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","合同"]],["lifeflow.hero.deadlines",["DEADLINES","DEADLINES","SÜRELER","PLAZOS","ÉCHÉANCES","SCADENZE","TERMENE","期限"]],["lifeflow.hero.moneyView",["MONEY VIEW","MONEY VIEW","PARA GÖRÜNÜMÜ","VISTA FINANCIERA","VUE FINANCIÈRE","VISTA FINANZIARIA","VIZIUNE FINANCIARĂ","资金视图"]],["lifeflow.state.label",["FINANCE VIEW","FINANCE VIEW","FİNANS GÖRÜNÜMÜ","VISTA FINANCIERA","VUE FINANCIÈRE","VISTA FINANZIARIA","VIZIUNE FINANCIARĂ","财务视图"]],["lifeflow.state.income",["INCOME","INCOME","GELİR","INGRESOS","REVENUS","ENTRATE","VENIT","收入"]],["lifeflow.state.visible",["VISIBLE","VISIBLE","GÖRÜNÜR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","可见"]],["lifeflow.state.costs",["COSTS","COSTS","MALİYETLER","COSTES","COÛTS","COSTI","COSTURI","成本"]],["lifeflow.state.tracked",["TRACKED","TRACKED","TAKİP EDİLİYOR","REGISTRADOS","SUIVIS","TRACCIATI","URMĂRITE","已跟踪"]],["lifeflow.state.contracts",["CONTRACTS","CONTRACTS","SÖZLEŞMELER","CONTRATOS","CONTRATS","CONTRATTI","CONTRACTE","合同"]],["lifeflow.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMIŞ","ESTRUCTURADOS","STRUCTURÉS","STRUTTURATI","STRUCTURATE","已结构化"]],["lifeflow.state.deadlines",["DEADLINES","DEADLINES","SÜRELER","PLAZOS","ÉCHÉANCES","SCADENZE","TERMENE","期限"]],["lifeflow.state.known",["KNOWN","KNOWN","BİLİNİYOR","CONOCIDOS","CONNUES","NOTE","CUNOSCUTE","已知"]],["lifeflow.state.remainder",["REMAINDER","REMAINDER","KALAN","RESTANTE","RESTE","RESIDUO","REST","余额"]],["lifeflow.state.calculated",["CALCULATED","CALCULATED","HESAPLANDI","CALCULADO","CALCULÉ","CALCOLATO","CALCULAT","已计算"]],["lifeflow.problem.eyebrow",["FINANCIAL VISIBILITY","FINANCIAL VISIBILITY","FİNANSAL GÖRÜNÜRLÜK","VISIBILIDAD FINANCIERA","VISIBILITÉ FINANCIÈRE","VISIBILITÀ FINANZIARIA","VIZIBILITATE FINANCIARĂ","财务可见性"]],["lifeflow.problem.title",["Kleine Verpflichtungen werden groß, wenn sie unsichtbar bleiben.","Small obligations become large when they remain invisible.","Küçük yükümlülükler görünmez kaldığında büyür.","Las pequeñas obligaciones se vuelven grandes cuando permanecen invisibles.","Les petites obligations deviennent importantes lorsqu’elles restent invisibles.","I piccoli impegni diventano grandi quando restano invisibili.","Obligațiile mici devin mari când rămân invizibile.","小义务在看不见时会变成大问题。"]],["lifeflow.problem.lead",["Viele laufende Kosten sind einzeln überschaubar. Das Problem entsteht, wenn Verträge, Fristen und wiederkehrende Zahlungen keinen gemeinsamen Überblick haben.","Many recurring costs are manageable on their own. The problem begins when contracts, deadlines and recurring payments lack a shared overview.","Birçok düzenli maliyet tek başına yönetilebilir. Sorun, sözleşmelerin, sürelerin ve tekrarlayan ödemelerin ortak bir görünümü olmadığında başlar.","Muchos costes recurrentes son manejables por separado. El problema aparece cuando contratos, plazos y pagos recurrentes no comparten una visión común.","De nombreux coûts récurrents sont gérables isolément. Le problème apparaît lorsque contrats, échéances et paiements récurrents n’ont pas de vue d’ensemble.","Molti costi ricorrenti sono gestibili singolarmente. Il problema nasce quando contratti, scadenze e pagamenti ricorrenti non hanno una vista comune.","Multe costuri recurente sunt gestionabile separat. Problema apare când contractele, termenele și plățile recurente nu au o imagine comună.","许多持续成本单独看都可控。问题在于合同、期限与重复付款缺少统一视图。"]],["lifeflow.problem.overview.title",["Kein Gesamtbild","No complete picture","Genel görünüm yok","Sin visión global","Pas de vue d’ensemble","Nessun quadro completo","Fără imagine completă","没有全局视图"]],["lifeflow.problem.overview.text",["Einkommen und Ausgaben werden getrennt wahrgenommen, statt gemeinsam betrachtet.","Income and expenses are perceived separately instead of being viewed together.","Gelir ve giderler birlikte değil ayrı algılanır.","Ingresos y gastos se perciben por separado en vez de verse juntos.","Revenus et dépenses sont perçus séparément au lieu d’être vus ensemble.","Entrate e uscite vengono percepite separatamente invece che insieme.","Veniturile și cheltuielile sunt percepute separat, nu împreună.","收入与支出被分开看待，而不是统一理解。"]],["lifeflow.problem.deadlines.title",["Fristen verschwinden","Deadlines disappear","Süreler gözden kaybolur","Los plazos desaparecen","Les échéances disparaissent","Le scadenze spariscono","Termenele dispar","期限被忽略"]],["lifeflow.problem.deadlines.text",["Vertrags- und Kündigungsdaten werden erst relevant, wenn es bereits zu spät ist.","Contract and cancellation dates become relevant only when it is already too late.","Sözleşme ve iptal tarihleri ancak çok geç olduğunda fark edilir.","Las fechas de contrato y cancelación se vuelven relevantes cuando ya es demasiado tarde.","Les dates de contrat et de résiliation deviennent importantes lorsqu’il est déjà trop tard.","Le date di contratto e disdetta diventano rilevanti quando è già troppo tardi.","Datele contractuale și de reziliere devin relevante când este deja prea târziu.","合同与取消日期往往在已经太晚时才受到重视。"]],["lifeflow.problem.remainder.title",["Restbetrag bleibt Gefühl","Remainder remains a feeling","Kalan tutar bir his olarak kalır","El restante queda como una sensación","Le reste demeure une impression","Il residuo resta una sensazione","Restul rămâne o impresie","剩余金额只是感觉"]],["lifeflow.problem.remainder.text",["Ohne klare Übersicht ist schwer einzuschätzen, wie viel finanzieller Spielraum tatsächlich bleibt.","Without a clear overview, it is difficult to know how much financial flexibility actually remains.","Açık bir görünüm olmadan gerçekte ne kadar finansal alan kaldığını değerlendirmek zordur.","Sin una visión clara, es difícil saber cuánto margen financiero queda realmente.","Sans vue claire, il est difficile de savoir quelle marge financière reste réellement.","Senza una vista chiara è difficile capire quanto margine finanziario rimanga davvero.","Fără o imagine clară este greu de estimat cât spațiu financiar rămâne efectiv.","没有清晰视图，就很难判断真正还剩多少财务空间。"]],["lifeflow.system.eyebrow",["LIFEFLOW SYSTEM","LIFEFLOW SYSTEM","LIFEFLOW SİSTEMİ","SISTEMA LIFEFLOW","SYSTÈME LIFEFLOW","SISTEMA LIFEFLOW","SISTEM LIFEFLOW","LIFEFLOW 系统"]],["lifeflow.system.title",["Finanzielle Alltagsrealität an einem Ort.","Everyday financial reality in one place.","Günlük finansal gerçeklik tek yerde.","La realidad financiera diaria en un solo lugar.","La réalité financière quotidienne en un seul endroit.","La realtà finanziaria quotidiana in un unico posto.","Realitatea financiară de zi cu zi într-un singur loc.","日常财务现实集中在一个地方。"]],["lifeflow.system.lead",["LifeFlow konzentriert sich bewusst auf das, was regelmäßig sichtbar sein muss.","LifeFlow deliberately focuses on what needs to stay visible regularly.","LifeFlow bilinçli olarak düzenli biçimde görünür kalması gerekenlere odaklanır.","LifeFlow se centra deliberadamente en lo que debe permanecer visible de forma regular.","LifeFlow se concentre volontairement sur ce qui doit rester visible régulièrement.","LifeFlow si concentra volutamente su ciò che deve restare visibile con regolarità.","LifeFlow se concentrează în mod deliberat pe ceea ce trebuie să rămână vizibil regulat.","LifeFlow 有意识地聚焦于需要持续保持可见的内容。"]],["lifeflow.system.contracts.title",["Contracts","Contracts","Sözleşmeler","Contratos","Contrats","Contratti","Contracte","合同"]],["lifeflow.system.contracts.text",["Laufende Verträge, Startdaten, Enddaten und Fristen im Blick behalten.","Keep recurring contracts, start dates, end dates and deadlines in view.","Devam eden sözleşmeleri, başlangıç ve bitiş tarihlerini ve süreleri takip edin.","Mantén a la vista contratos, fechas de inicio y fin y plazos.","Gardez à l’œil contrats, dates de début et de fin et échéances.","Tieni sotto controllo contratti, date di inizio e fine e scadenze.","Ține sub control contractele, datele de început și sfârșit și termenele.","持续掌握合同、开始日期、结束日期与期限。"]],["lifeflow.system.costs.title",["Costs","Costs","Maliyetler","Costes","Coûts","Costi","Costuri","成本"]],["lifeflow.system.costs.text",["Wiederkehrende finanzielle Verpflichtungen strukturiert sichtbar machen.","Make recurring financial obligations visible in a structured way.","Tekrarlayan finansal yükümlülükleri yapılandırılmış biçimde görünür kılın.","Haz visibles de forma estructurada las obligaciones financieras recurrentes.","Rendez visibles de façon structurée les obligations financières récurrentes.","Rendi visibili in modo strutturato gli obblighi finanziari ricorrenti.","Fă vizibile structurat obligațiile financiare recurente.","以结构化方式呈现重复财务义务。"]],["lifeflow.system.money.title",["Money View","Money View","Para Görünümü","Vista financiera","Vue financière","Vista finanziaria","Viziune financiară","资金视图"]],["lifeflow.system.money.text",["Einkommen, Kosten, Schulden und verbleibenden Betrag zusammen betrachten.","View income, costs, debt and remaining amount together.","Gelir, maliyet, borç ve kalan tutarı birlikte görüntüleyin.","Consulta juntos ingresos, costes, deudas y cantidad restante.","Visualisez ensemble revenus, coûts, dettes et montant restant.","Guarda insieme entrate, costi, debiti e importo rimanente.","Privește împreună veniturile, costurile, datoriile și suma rămasă.","将收入、成本、债务与剩余金额放在一起查看。"]],["lifeflow.system.status.title",["Status","Status","Durum","Estado","Statut","Stato","Stare","状态"]],["lifeflow.system.status.text",["Finanzielle Lage schneller und verständlicher einschätzen.","Assess your financial situation faster and more clearly.","Finansal durumu daha hızlı ve anlaşılır değerlendirin.","Evalúa la situación financiera más rápido y con mayor claridad.","Évaluez plus rapidement et clairement la situation financière.","Valuta la situazione finanziaria più rapidamente e con maggiore chiarezza.","Evaluează situația financiară mai rapid și mai clar.","更快、更清晰地评估财务状况。"]],["lifeflow.continuity.eyebrow",["FROM LIFEFLOW TO CONTINUITY","FROM LIFEFLOW TO CONTINUITY","LIFEFLOW’DAN CONTINUITY’YE","DE LIFEFLOW A CONTINUITY","DE LIFEFLOW À CONTINUITY","DA LIFEFLOW A CONTINUITY","DE LA LIFEFLOW LA CONTINUITY","从 LIFEFLOW 到 CONTINUITY"]],["lifeflow.continuity.title",["LifeFlow bleibt fokussiert. CONTINUITY geht weiter.","LifeFlow stays focused. CONTINUITY goes further.","LifeFlow odaklı kalır. CONTINUITY daha ileri gider.","LifeFlow se mantiene enfocado. CONTINUITY va más allá.","LifeFlow reste ciblé. CONTINUITY va plus loin.","LifeFlow resta focalizzato. CONTINUITY va oltre.","LifeFlow rămâne concentrat. CONTINUITY merge mai departe.","LifeFlow 保持聚焦，CONTINUITY 更进一步。"]],["lifeflow.continuity.text",["LifeFlow ist ein eigenständig nutzbares, fokussiertes Produkt für Kosten, Verträge und Fristen. CONTINUITY entwickelt daraus eine wesentlich größere persönliche Umgebung für Dokumente, Finance, Cards, Timeline, Herkunft und Kontext.","LifeFlow is a focused standalone product for costs, contracts and deadlines. CONTINUITY expands this into a much broader personal environment for documents, finance, Cards, Timeline, provenance and context.","LifeFlow maliyetler, sözleşmeler ve süreler için bağımsız, odaklı bir üründür. CONTINUITY bunu belgeler, finans, Cards, Timeline, kaynak ve bağlam için çok daha geniş bir kişisel ortama dönüştürür.","LifeFlow es un producto independiente y enfocado para costes, contratos y plazos. CONTINUITY lo amplía a un entorno personal mucho mayor para documentos, finanzas, Cards, Timeline, procedencia y contexto.","LifeFlow est un produit autonome et ciblé pour coûts, contrats et échéances. CONTINUITY l’étend à un environnement personnel beaucoup plus vaste pour documents, finances, Cards, Timeline, provenance et contexte.","LifeFlow è un prodotto autonomo e focalizzato per costi, contratti e scadenze. CONTINUITY lo estende a un ambiente personale molto più ampio per documenti, finanze, Cards, Timeline, provenienza e contesto.","LifeFlow este un produs autonom și focalizat pentru costuri, contracte și termene. CONTINUITY îl extinde într-un mediu personal mult mai amplu pentru documente, finanțe, Cards, Timeline, proveniență și context.","LifeFlow 是面向成本、合同与期限的独立聚焦产品。CONTINUITY 将其扩展为更大的个人环境，涵盖文档、财务、Cards、Timeline、来源与上下文。"]],["lifeflow.continuity.view",["CONTINUITY ansehen","View CONTINUITY","CONTINUITY’yi görüntüle","Ver CONTINUITY","Voir CONTINUITY","Vedi CONTINUITY","Vezi CONTINUITY","查看 CONTINUITY"]],["lifeflow.offer.eyebrow",["AVAILABLE","AVAILABLE","MEVCUT","DISPONIBLE","DISPONIBLE","DISPONIBILE","DISPONIBIL","已发布"]],["lifeflow.offer.text",["Ein fokussierter Einstieg in persönliche Finanzübersicht.","A focused entry point into personal financial overview.","Kişisel finans görünümüne odaklı bir giriş.","Una entrada enfocada a la visión financiera personal.","Une entrée ciblée dans la vue financière personnelle.","Un ingresso focalizzato nella panoramica finanziaria personale.","Un punct de intrare concentrat în imaginea financiară personală.","个人财务概览的聚焦入口。"]],["lifeflow.offer.appStore",["Im App Store ansehen","View in the App Store","App Store’da görüntüle","Ver en App Store","Voir dans l’App Store","Vedi su App Store","Vezi în App Store","在 App Store 查看"]],["lifeflow.offer.legalPrefix",["Mit dem Kauf gelten unsere","By purchasing, our","Satın alma ile şu şartlar geçerlidir:","Con la compra se aplican nuestros","Avec l’achat s’appliquent nos","Con l’acquisto si applicano i nostri","Prin cumpărare se aplică","购买即适用我们的"]],["lifeflow.offer.terms",["AGB","Terms","Şartlar","Términos","CGV","Termini","Termeni","条款"]],["lifeflow.offer.legalMiddle",["und unsere","and our","ve","y nuestra","et notre","e la nostra","și","以及我们的"]],["lifeflow.offer.withdrawal",["Widerrufsbelehrung","Withdrawal Policy","Cayma Politikası","Política de desistimiento","Politique de rétractation","Informativa sul recesso","Politica de retragere","撤销说明"]],["lifeflow.offer.legalAnd",[".",".",".",".",".",".",".","。"]],["lifeflow.offer.model",["MODELL","MODEL","MODEL","MODELO","MODÈLE","MODELLO","MODEL","模式"]],["lifeflow.offer.oneTime",["Einmalkauf","One-time purchase","Tek seferlik satın alma","Compra única","Achat unique","Acquisto una tantum","Achiziție unică","一次性购买"]],["lifeflow.offer.subscription",["ABO","SUBSCRIPTION","ABONELİK","SUSCRIPCIÓN","ABONNEMENT","ABBONAMENTO","ABONAMENT","订阅"]],["lifeflow.offer.none",["Kein Abo","No subscription","Abonelik yok","Sin suscripción","Sans abonnement","Nessun abbonamento","Fără abonament","无订阅"]],["lifeflow.offer.platform",["PLATTFORM","PLATFORM","PLATFORM","PLATAFORMA","PLATEFORME","PIATTAFORMA","PLATFORMĂ","平台"]],["lifeflow.offer.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","状态"]],["lifeflow.faq.title",["FAQ","FAQ","SSS","FAQ","FAQ","FAQ","FAQ","常见问题"]],["lifeflow.faq.subscription.question",["Gibt es ein Abo?","Is there a subscription?","Abonelik var mı?","¿Hay suscripción?","Y a-t-il un abonnement ?","C’è un abbonamento?","Există abonament?","有订阅吗？"]],["lifeflow.faq.subscription.answer",["Nein. LifeFlow ist als Einmalkauf vorgesehen.","No. LifeFlow is intended as a one-time purchase.","Hayır. LifeFlow tek seferlik satın alma olarak tasarlanmıştır.","No. LifeFlow está previsto como compra única.","Non. LifeFlow est prévu comme achat unique.","No. LifeFlow è previsto come acquisto una tantum.","Nu. LifeFlow este conceput ca achiziție unică.","没有。LifeFlow 设计为一次性购买。"]],["lifeflow.faq.continuity.question",["Ist LifeFlow dasselbe wie CONTINUITY?","Is LifeFlow the same as CONTINUITY?","LifeFlow, CONTINUITY ile aynı mı?","¿LifeFlow es lo mismo que CONTINUITY?","LifeFlow est-il identique à CONTINUITY ?","LifeFlow è lo stesso di CONTINUITY?","LifeFlow este același lucru cu CONTINUITY?","LifeFlow 和 CONTINUITY 是同一个东西吗？"]],["lifeflow.faq.continuity.answer",["Nein. LifeFlow bleibt ein fokussiertes Produkt. CONTINUITY entwickelt eine deutlich umfassendere persönliche Systemumgebung.","No. LifeFlow remains a focused product. CONTINUITY is developing a much broader personal system environment.","Hayır. LifeFlow odaklı bir ürün olarak kalır. CONTINUITY çok daha kapsamlı bir kişisel sistem ortamı geliştirir.","No. LifeFlow sigue siendo un producto enfocado. CONTINUITY desarrolla un entorno de sistema personal mucho más amplio.","Non. LifeFlow reste un produit ciblé. CONTINUITY développe un environnement personnel beaucoup plus large.","No. LifeFlow resta un prodotto focalizzato. CONTINUITY sviluppa un ambiente personale molto più ampio.","Nu. LifeFlow rămâne un produs focalizat. CONTINUITY dezvoltă un mediu personal mult mai amplu.","不是。LifeFlow 保持为聚焦产品，CONTINUITY 正在构建更广泛的个人系统环境。"]],["lifeflow.faq.platform.question",["Auf welcher Plattform ist LifeFlow verfügbar?","Which platform is LifeFlow available on?","LifeFlow hangi platformda mevcut?","¿En qué plataforma está disponible LifeFlow?","Sur quelle plateforme LifeFlow est-il disponible ?","Su quale piattaforma è disponibile LifeFlow?","Pe ce platformă este disponibil LifeFlow?","LifeFlow 在哪个平台可用？"]],["lifeflow.faq.platform.answer",["LifeFlow ist für iPhone / iOS vorgesehen.","LifeFlow is intended for iPhone / iOS.","LifeFlow iPhone / iOS için tasarlanmıştır.","LifeFlow está previsto para iPhone / iOS.","LifeFlow est prévu pour iPhone / iOS.","LifeFlow è previsto per iPhone / iOS.","LifeFlow este destinat pentru iPhone / iOS.","LifeFlow 面向 iPhone / iOS。"]],["lifeflow.contact.title",["Fragen zu LifeFlow?","Questions about LifeFlow?","LifeFlow hakkında sorularınız mı var?","¿Preguntas sobre LifeFlow?","Des questions sur LifeFlow ?","Domande su LifeFlow?","Întrebări despre LifeFlow?","对 LifeFlow 有疑问？"]],["lifeflow.contact.text",["Schreib uns direkt.","Write to us directly.","Bize doğrudan yazın.","Escríbenos directamente.","Écrivez-nous directement.","Scrivici direttamente.","Scrie-ne direct.","直接联系我们。"]],["lifeflow.contact.question",["Frage zu LifeFlow","Question about LifeFlow","LifeFlow hakkında soru","Pregunta sobre LifeFlow","Question sur LifeFlow","Domanda su LifeFlow","Întrebare despre LifeFlow","关于 LifeFlow 的问题"]],["lifeflow.contact.messagePlaceholder",["Deine Frage zu LifeFlow …","Your question about LifeFlow …","LifeFlow hakkındaki sorunuz …","Tu pregunta sobre LifeFlow …","Votre question sur LifeFlow …","La tua domanda su LifeFlow …","Întrebarea ta despre LifeFlow …","你关于 LifeFlow 的问题…"]],["lifeflow.footer.withdrawal",["Widerruf","Withdrawal","Cayma","Desistimiento","Rétractation","Recesso","Retragere","撤销"]],["pilot.header.chip",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.hero.kicker",["CONTROLLED REAL-WORLD ENTRY","CONTROLLED REAL-WORLD ENTRY","KONTROLLÜ GERÇEK DÜNYA GİRİŞİ","ENTRADA CONTROLADA EN EL MUNDO REAL","ENTRÉE CONTRÔLÉE DANS LE RÉEL","INGRESSO CONTROLLATO NEL MONDO REALE","INTRARE CONTROLATĂ ÎN LUMEA REALĂ","受控的现实世界切入"]],["pilot.hero.title",["ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT","ZAL’THERA PILOT"]],["pilot.hero.lead",["Start small. Test reality. Prove value.","Start small. Test reality. Prove value.","Küçük başla. Gerçeği test et. Değeri kanıtla.","Empieza pequeño. Prueba la realidad. Demuestra valor.","Commencez petit. Testez le réel. Prouvez la valeur.","Inizia in piccolo. Testa la realtà. Dimostra il valore.","Începe mic. Testează realitatea. Dovedește valoarea.","从小处开始。测试现实。证明价值。"]],["pilot.hero.understand",["Pilot verstehen","Understand Pilot","Pilot’u anla","Entender Pilot","Comprendre Pilot","Comprendi Pilot","Înțelege Pilot","了解 Pilot"]],["pilot.hero.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicită Pilot","申请 Pilot"]],["pilot.hero.scoped",["SCOPED","SCOPED","SINIRLI","DELIMITADO","DÉLIMITÉ","DELIMITATO","DELIMITAT","范围明确"]],["pilot.hero.controlled",["CONTROLLED","CONTROLLED","KONTROLLÜ","CONTROLADO","CONTRÔLÉ","CONTROLLATO","CONTROLAT","受控"]],["pilot.hero.measurable",["MEASURABLE","MEASURABLE","ÖLÇÜLEBİLİR","MEDIBLE","MESURABLE","MISURABILE","MĂSURABIL","可衡量"]],["pilot.hero.reviewable",["REVIEWABLE","REVIEWABLE","İNCELENEBİLİR","REVISABLE","RÉEXAMINABLE","REVISIONABILE","REVIZUIBIL","可评审"]],["pilot.state.label",["PILOT STATE","PILOT STATE","PİLOT DURUMU","ESTADO DEL PILOT","ÉTAT DU PILOT","STATO DEL PILOT","STAREA PILOTULUI","Pilot 状态"]],["pilot.state.realProcess",["REAL PROCESS","REAL PROCESS","GERÇEK SÜREÇ","PROCESO REAL","PROCESSUS RÉEL","PROCESSO REALE","PROCES REAL","现实流程"]],["pilot.state.scope",["SCOPE","SCOPE","KAPSAM","ALCANCE","PÉRIMÈTRE","AMBITO","SCOP","范围"]],["pilot.state.defined",["DEFINED","DEFINED","TANIMLI","DEFINIDO","DÉFINI","DEFINITO","DEFINIT","已定义"]],["pilot.state.model",["MODEL","MODEL","MODEL","MODELO","MODÈLE","MODELLO","MODEL","模型"]],["pilot.state.prepared",["PREPARED","PREPARED","HAZIR","PREPARADO","PRÉPARÉ","PREPARATO","PREGĂTIT","已准备"]],["pilot.state.test",["TEST","TEST","TEST","PRUEBA","TEST","TEST","TEST","测试"]],["pilot.state.controlled",["CONTROLLED","CONTROLLED","KONTROLLÜ","CONTROLADO","CONTRÔLÉ","CONTROLLATO","CONTROLAT","受控"]],["pilot.state.result",["RESULT","RESULT","SONUÇ","RESULTADO","RÉSULTAT","RISULTATO","REZULTAT","结果"]],["pilot.state.measured",["MEASURED","MEASURED","ÖLÇÜLDÜ","MEDIDO","MESURÉ","MISURATO","MĂSURAT","已衡量"]],["pilot.state.decision",["DECISION","DECISION","KARAR","DECISIÓN","DÉCISION","DECISIONE","DECIZIE","决策"]],["pilot.state.reviewed",["REVIEWED","REVIEWED","İNCELENDİ","REVISADA","EXAMINÉE","REVISIONATA","REVIZUITĂ","已评审"]],["pilot.focus.eyebrow",["PILOT FOCUS","PILOT FOCUS","PİLOT ODAĞI","ENFOQUE DEL PILOT","FOCUS DU PILOT","FOCUS DEL PILOT","FOCUS PILOT","Pilot 聚焦"]],["pilot.focus.title",["Nicht das ganze Unternehmen muss sich ändern.","The whole company does not have to change.","Tüm şirketin değişmesi gerekmez.","No tiene que cambiar toda la empresa.","Toute l’entreprise n’a pas besoin de changer.","Non deve cambiare tutta l’azienda.","Nu trebuie să se schimbe întreaga companie.","不需要整个企业都改变。"]],["pilot.focus.lead",["Ein Pilot begrenzt das Problem, den Prozess und die Messung des tatsächlichen Nutzens.","A pilot limits the problem, process and measurement of actual value.","Pilot; problemi, süreci ve gerçek faydanın ölçümünü sınırlar.","Un pilot delimita el problema, el proceso y la medición del valor real.","Un pilot délimite le problème, le processus et la mesure de la valeur réelle.","Un pilot delimita problema, processo e misurazione del valore reale.","Un pilot delimitează problema, procesul și măsurarea valorii reale.","Pilot 会限制问题、流程以及实际价值的衡量范围。"]],["pilot.focus.proof.title",["Proof","Proof","Kanıt","Prueba","Preuve","Prova","Dovadă","证明"]],["pilot.focus.proof.text",["Was muss später nachvollziehbar oder überprüfbar sein?","What must later be traceable or verifiable?","Daha sonra neyin izlenebilir veya doğrulanabilir olması gerekir?","¿Qué debe poder rastrearse o verificarse después?","Qu’est-ce qui doit être traçable ou vérifiable ensuite ?","Cosa deve essere tracciabile o verificabile in seguito?","Ce trebuie să poată fi trasat sau verificat ulterior?","之后什么必须可追溯或可验证？"]],["pilot.focus.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","交接"]],["pilot.focus.handover.text",["Wo gehen Informationen, Zustände oder Verantwortung verloren?","Where are information, states or responsibility lost?","Bilgi, durum veya sorumluluk nerede kayboluyor?","¿Dónde se pierden información, estados o responsabilidad?","Où se perdent informations, états ou responsabilité ?","Dove si perdono informazioni, stati o responsabilità?","Unde se pierd informații, stări sau responsabilitate?","信息、状态或责任在哪里丢失？"]],["pilot.focus.control.title",["Control","Control","Kontrol","Control","Contrôle","Controllo","Control","控制"]],["pilot.focus.control.text",["Welche Grenzen, Freigaben und Zustände müssen sichtbar bleiben?","Which boundaries, approvals and states must remain visible?","Hangi sınırlar, onaylar ve durumlar görünür kalmalı?","¿Qué límites, aprobaciones y estados deben seguir visibles?","Quelles limites, validations et états doivent rester visibles ?","Quali limiti, approvazioni e stati devono restare visibili?","Ce limite, aprobări și stări trebuie să rămână vizibile?","哪些边界、批准与状态必须保持可见？"]],["pilot.process.eyebrow",["PILOT PROCESS","PILOT PROCESS","PİLOT SÜRECİ","PROCESO PILOT","PROCESSUS PILOT","PROCESSO PILOT","PROCES PILOT","Pilot 流程"]],["pilot.process.title",["Vom realen Problem zur überprüfbaren Entscheidung.","From a real problem to a verifiable decision.","Gerçek bir problemden doğrulanabilir bir karara.","Del problema real a una decisión verificable.","Du problème réel à une décision vérifiable.","Dal problema reale a una decisione verificabile.","De la o problemă reală la o decizie verificabilă.","从现实问题到可验证的决策。"]],["pilot.process.lead",["Der Pilot bleibt bewusst begrenzt. Erst wenn der Nutzen sichtbar ist, wird über den nächsten Schritt entschieden.","The pilot remains deliberately limited. Only when value is visible is the next step decided.","Pilot bilinçli olarak sınırlı kalır. Değer görünür olduğunda sonraki adım kararlaştırılır.","El pilot se mantiene deliberadamente limitado. Solo cuando el valor es visible se decide el siguiente paso.","Le pilot reste volontairement limité. Le prochain pas n’est décidé qu’une fois la valeur visible.","Il pilot resta volutamente limitato. Solo quando il valore è visibile si decide il passo successivo.","Pilotul rămâne intenționat limitat. Abia când valoarea este vizibilă se decide pasul următor.","Pilot 有意识地保持有限。只有当价值可见时，才决定下一步。"]],["pilot.process.scope.title",["Scope","Scope","Kapsam","Alcance","Périmètre","Ambito","Scop","范围"]],["pilot.process.scope.text",["Ein konkreter Prozess, Bereich oder Anwendungsfall wird abgegrenzt.","A specific process, area or use case is defined.","Belirli bir süreç, alan veya kullanım senaryosu sınırlandırılır.","Se delimita un proceso, área o caso de uso concreto.","Un processus, domaine ou cas d’usage précis est délimité.","Viene delimitato un processo, un’area o un caso d’uso specifico.","Este delimitat un proces, domeniu sau caz de utilizare concret.","明确界定一个具体流程、领域或使用场景。"]],["pilot.process.understand.title",["Understand","Understand","Anla","Comprender","Comprendre","Comprendere","Înțelege","理解"]],["pilot.process.understand.text",["Der bestehende Ablauf und seine relevanten Zustände werden verstanden.","The existing workflow and its relevant states are understood.","Mevcut akış ve ilgili durumları anlaşılır.","Se comprende el flujo existente y sus estados relevantes.","Le flux existant et ses états pertinents sont compris.","Si comprendono il flusso esistente e i suoi stati rilevanti.","Sunt înțelese fluxul existent și stările sale relevante.","理解现有流程及其相关状态。"]],["pilot.process.model.title",["Model","Model","Model","Modelo","Modèle","Modello","Model","建模"]],["pilot.process.model.text",["Das benötigte ZAL’THERA-System wird auf den Prozess zugeschnitten.","The required ZAL’THERA system is tailored to the process.","Gerekli ZAL’THERA sistemi sürece uyarlanır.","El sistema ZAL’THERA necesario se adapta al proceso.","Le système ZAL’THERA nécessaire est adapté au processus.","Il sistema ZAL’THERA necessario viene adattato al processo.","Sistemul ZAL’THERA necesar este adaptat procesului.","所需的 ZAL’THERA 系统按流程进行适配。"]],["pilot.process.pilot.title",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["pilot.process.pilot.text",["Das System wird begrenzt im realen Ablauf eingesetzt.","The system is used on a limited basis in the real workflow.","Sistem gerçek akışta sınırlı olarak kullanılır.","El sistema se utiliza de forma limitada en el flujo real.","Le système est utilisé de manière limitée dans le flux réel.","Il sistema viene usato in modo limitato nel flusso reale.","Sistemul este utilizat limitat în fluxul real.","系统在现实流程中以有限范围投入使用。"]],["pilot.process.review.title",["Review","Review","İnceleme","Revisión","Revue","Revisione","Revizuire","评审"]],["pilot.process.review.text",["Nutzen, Grenzen und nächster Schritt werden gemeinsam bewertet.","Value, limits and the next step are reviewed together.","Fayda, sınırlar ve sonraki adım birlikte değerlendirilir.","Se evalúan conjuntamente el valor, los límites y el siguiente paso.","La valeur, les limites et l’étape suivante sont évaluées ensemble.","Valore, limiti e passo successivo vengono valutati insieme.","Valoarea, limitele și pasul următor sunt evaluate împreună.","共同评估价值、边界与下一步。"]],["pilot.modules.eyebrow",["PILOT ENTRY POINTS","PILOT ENTRY POINTS","PİLOT GİRİŞ NOKTALARI","PUNTOS DE ENTRADA DEL PILOT","POINTS D’ENTRÉE DU PILOT","PUNTI DI INGRESSO DEL PILOT","PUNCTE DE INTRARE PILOT","Pilot 入口"]],["pilot.modules.title",["Unterschiedliche Probleme. Gemeinsamer Systemkern.","Different problems. One shared system core.","Farklı problemler. Ortak sistem çekirdeği.","Problemas distintos. Un núcleo de sistema común.","Des problèmes différents. Un noyau système commun.","Problemi diversi. Un core di sistema comune.","Probleme diferite. Un nucleu de sistem comun.","不同问题，共同的系统核心。"]],["pilot.modules.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADĂ","证明"]],["pilot.modules.proofflow",["Evidence · Audit · Signature · Export","Evidence · Audit · Signature · Export","Kanıt · Denetim · İmza · Dışa Aktarma","Prueba · Auditoría · Firma · Exportación","Preuve · Audit · Signature · Export","Prova · Audit · Firma · Esportazione","Dovadă · Audit · Semnătură · Export","证明 · 审计 · 签名 · 导出"]],["pilot.modules.industry",["INDUSTRY","INDUSTRY","ENDÜSTRİ","INDUSTRIA","INDUSTRIE","INDUSTRIA","INDUSTRIE","工业"]],["pilot.modules.shiftlog",["Handover · State · Responsibility","Handover · State · Responsibility","Devir · Durum · Sorumluluk","Relevo · Estado · Responsabilidad","Transmission · État · Responsabilité","Passaggio · Stato · Responsabilità","Predare · Stare · Responsabilitate","交接 · 状态 · 责任"]],["pilot.modules.trust",["TRUST","TRUST","GÜVEN","CONFIANZA","CONFIANCE","FIDUCIA","ÎNCREDERE","信任"]],["pilot.modules.ledger",["Events · Traceability · Verification","Events · Traceability · Verification","Olaylar · İzlenebilirlik · Doğrulama","Eventos · Trazabilidad · Verificación","Événements · Traçabilité · Vérification","Eventi · Tracciabilità · Verifica","Evenimente · Trasabilitate · Verificare","事件 · 可追溯性 · 验证"]],["pilot.modules.architecture",["ARCHITECTURE","ARCHITECTURE","MİMARİ","ARQUITECTURA","ARCHITECTURE","ARCHITETTURA","ARHITECTURĂ","架构"]],["pilot.modules.industryText",["Process · Data · Sensors · Future Integration","Process · Data · Sensors · Future Integration","Süreç · Veri · Sensörler · Gelecek Entegrasyonu","Proceso · Datos · Sensores · Integración futura","Processus · Données · Capteurs · Intégration future","Processo · Dati · Sensori · Integrazione futura","Proces · Date · Senzori · Integrare viitoare","流程 · 数据 · 传感器 · 未来集成"]],["pilot.principle.eyebrow",["CONTROLLED ENTRY","CONTROLLED ENTRY","KONTROLLÜ GİRİŞ","ENTRADA CONTROLADA","ENTRÉE CONTRÔLÉE","INGRESSO CONTROLLATO","INTRARE CONTROLATĂ","受控切入"]],["pilot.principle.title",["A pilot should reduce uncertainty, not create dependency.","A pilot should reduce uncertainty, not create dependency.","Pilot belirsizliği azaltmalı, bağımlılık yaratmamalı.","Un pilot debe reducir la incertidumbre, no crear dependencia.","Un pilot doit réduire l’incertitude, pas créer de dépendance.","Un pilot deve ridurre l’incertezza, non creare dipendenza.","Un pilot ar trebui să reducă incertitudinea, nu să creeze dependență.","Pilot 应减少不确定性，而不是制造依赖。"]],["pilot.principle.text",["Der Pilot dient nicht dazu, einen bestehenden Prozess blind zu ersetzen. Er soll zeigen, ob ein klar definiertes Systemproblem tatsächlich besser gelöst werden kann.","The pilot is not intended to blindly replace an existing process. It should show whether a clearly defined system problem can actually be solved better.","Pilot mevcut bir süreci körü körüne değiştirmek için değildir. Açıkça tanımlanmış bir sistem probleminin gerçekten daha iyi çözülüp çözülemeyeceğini göstermelidir.","El pilot no pretende sustituir a ciegas un proceso existente. Debe mostrar si un problema de sistema claramente definido puede resolverse mejor.","Le pilot n’a pas pour but de remplacer aveuglément un processus existant. Il doit montrer si un problème système clairement défini peut réellement être mieux résolu.","Il pilot non serve a sostituire ciecamente un processo esistente. Deve mostrare se un problema di sistema chiaramente definito può davvero essere risolto meglio.","Pilotul nu are rolul de a înlocui orbește un proces existent. Trebuie să arate dacă o problemă de sistem clar definită poate fi rezolvată mai bine.","Pilot 不是为了盲目替换现有流程，而是要证明一个清晰定义的系统问题是否真的能够被更好地解决。"]],["pilot.principle.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicită Pilot","申请 Pilot"]],["pilot.contact.title",["Pilotprojekt anfragen","Request a pilot project","Pilot projesi talep et","Solicitar proyecto pilot","Demander un projet pilot","Richiedi un progetto pilot","Solicită un proiect pilot","申请 Pilot 项目"]],["pilot.contact.text",["Beschreibe kurz den realen Prozess oder das Problem, das kontrolliert getestet werden soll.","Briefly describe the real process or problem to be tested in a controlled way.","Kontrollü olarak test edilecek gerçek süreci veya problemi kısaca açıklayın.","Describe brevemente el proceso real o problema que debe probarse de forma controlada.","Décrivez brièvement le processus réel ou le problème à tester de manière contrôlée.","Descrivi brevemente il processo reale o il problema da testare in modo controllato.","Descrie pe scurt procesul real sau problema care trebuie testată controlat.","简要描述需要以受控方式测试的现实流程或问题。"]],["pilot.contact.namePlaceholder",["Ihr Name","Your name","Adınız","Su nombre","Votre nom","Il tuo nome","Numele dvs.","您的姓名"]],["pilot.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["pilot.contact.messagePlaceholder",["Welcher Prozess soll als Pilot getestet werden?","Which process should be tested as a pilot?","Hangi süreç pilot olarak test edilmeli?","¿Qué proceso debería probarse como pilot?","Quel processus doit être testé en pilot ?","Quale processo dovrebbe essere testato come pilot?","Ce proces ar trebui testat ca pilot?","哪个流程应作为 Pilot 进行测试？"]],["pilot.contact.send",["Anfrage senden","Send request","Talep gönder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","发送申请"]],["pilot.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","Göndererek şunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptați","提交即表示您接受我们的"]],["proofflow.header.pilot",["Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot","Pilot"]],["proofflow.hero.kicker",["PROOF · AUDIT · TRACEABILITY","PROOF · AUDIT · TRACEABILITY","KANIT · DENETİM · İZLENEBİLİRLİK","PRUEBA · AUDITORÍA · TRAZABILIDAD","PREUVE · AUDIT · TRAÇABILITÉ","PROVA · AUDIT · TRACCIABILITÀ","DOVADĂ · AUDIT · TRASABILITATE","证明 · 审计 · 可追溯性"]],["proofflow.hero.title",["Evidence before<br>assumption.","Evidence before<br>assumption.","Varsayımdan önce<br>kanıt.","Prueba antes que<br>suposición.","La preuve avant<br>l’hypothèse.","La prova prima<br>dell’ipotesi.","Dovada înaintea<br>presupunerii.","先有证据，<br>再作判断。"]],["proofflow.hero.lead",["ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.","ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into a traceable workflow.","ProofFlow görevleri, kanıtları, fotoğrafları, notları, imzaları, denetimi ve dışa aktarmayı izlenebilir bir akışta birleştirir.","ProofFlow conecta tareas, pruebas, fotos, notas, firmas, auditoría y exportación en un flujo trazable.","ProofFlow relie tâches, preuves, photos, notes, signatures, audit et export dans un flux traçable.","ProofFlow collega attività, prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.","ProofFlow conectează sarcini, dovezi, fotografii, note, semnături, audit și export într-un flux trasabil.","ProofFlow 将任务、证明、照片、备注、签名、审计与导出连接成可追溯流程。"]],["proofflow.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le système","Comprendi il sistema","Înțelege sistemul","理解系统"]],["proofflow.hero.requestPilot",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicită Pilot","申请 Pilot"]],["proofflow.hero.provenance",["PROVENANCE","PROVENANCE","KAYNAK","PROCEDENCIA","PROVENANCE","PROVENIENZA","PROVENIENȚĂ","来源"]],["proofflow.hero.identity",["IDENTITY","IDENTITY","KİMLİK","IDENTIDAD","IDENTITÉ","IDENTITÀ","IDENTITATE","身份"]],["proofflow.hero.audit",["AUDIT","AUDIT","DENETİM","AUDITORÍA","AUDIT","AUDIT","AUDIT","审计"]],["proofflow.hero.export",["EXPORT","EXPORT","DIŞA AKTARMA","EXPORTACIÓN","EXPORT","ESPORTAZIONE","EXPORT","导出"]],["proofflow.state.label",["PROOF FLOW","PROOF FLOW","KANIT AKIŞI","FLUJO DE PRUEBA","FLUX DE PREUVE","FLUSSO DI PROVA","FLUX DE DOVADĂ","证明流程"]],["proofflow.state.job",["JOB","JOB","İŞ","TRABAJO","TÂCHE","ATTIVITÀ","SARCINĂ","任务"]],["proofflow.state.context",["CONTEXT","CONTEXT","BAĞLAM","CONTEXTO","CONTEXTE","CONTESTO","CONTEXT","上下文"]],["proofflow.state.proof",["PROOF","PROOF","KANIT","PRUEBA","PREUVE","PROVA","DOVADĂ","证明"]],["proofflow.state.capture",["CAPTURE","CAPTURE","YAKALAMA","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTURĂ","采集"]],["proofflow.state.sign",["SIGN","SIGN","İMZA","FIRMA","SIGNER","FIRMA","SEMNARE","签名"]],["proofflow.state.identity",["IDENTITY","IDENTITY","KİMLİK","IDENTIDAD","IDENTITÉ","IDENTITÀ","IDENTITATE","身份"]],["proofflow.state.audit",["AUDIT","AUDIT","DENETİM","AUDITORÍA","AUDIT","AUDIT","AUDIT","审计"]],["proofflow.state.trace",["TRACE","TRACE","İZ","TRAZA","TRACE","TRACCIA","URMĂ","追踪"]],["proofflow.state.export",["EXPORT","EXPORT","DIŞA AKTARMA","EXPORTACIÓN","EXPORT","ESPORTAZIONE","EXPORT","导出"]],["proofflow.state.output",["OUTPUT","OUTPUT","ÇIKTI","SALIDA","SORTIE","OUTPUT","IEȘIRE","输出"]],["proofflow.problem.eyebrow",["THE PROBLEM","THE PROBLEM","PROBLEM","EL PROBLEMA","LE PROBLÈME","IL PROBLEMA","PROBLEMA","问题"]],["proofflow.problem.title",["Erinnerung ist kein Nachweis.","Memory is not evidence.","Hatıra kanıt değildir.","La memoria no es una prueba.","La mémoire n’est pas une preuve.","La memoria non è una prova.","Memoria nu este dovadă.","记忆不是证据。"]],["proofflow.problem.lead",["Wenn Vorfälle, Maßnahmen und Entscheidungen nicht strukturiert dokumentiert werden, entstehen später Interpretationen statt überprüfbarer Abläufe.","When incidents, actions and decisions are not documented in a structured way, later interpretations replace verifiable workflows.","Olaylar, önlemler ve kararlar yapılandırılmış biçimde belgelenmezse daha sonra doğrulanabilir akışlar yerine yorumlar oluşur.","Si incidentes, medidas y decisiones no se documentan de forma estructurada, después surgen interpretaciones en vez de procesos verificables.","Si incidents, mesures et décisions ne sont pas documentés de façon structurée, des interprétations remplacent ensuite les processus vérifiables.","Se eventi, misure e decisioni non vengono documentati in modo strutturato, in seguito emergono interpretazioni invece di processi verificabili.","Dacă incidentele, măsurile și deciziile nu sunt documentate structurat, ulterior apar interpretări în locul fluxurilor verificabile.","如果事件、措施与决策没有结构化记录，之后就会出现解释而不是可验证流程。"]],["proofflow.problem.process.title",["Unklarer Ablauf","Unclear workflow","Belirsiz akış","Flujo poco claro","Processus flou","Flusso poco chiaro","Flux neclar","流程不清"]],["proofflow.problem.process.text",["Was ist tatsächlich passiert und in welcher Reihenfolge?","What actually happened and in what order?","Gerçekte ne oldu ve hangi sırayla?","¿Qué ocurrió realmente y en qué orden?","Que s’est-il réellement passé et dans quel ordre ?","Cosa è successo davvero e in quale ordine?","Ce s-a întâmplat de fapt și în ce ordine?","实际发生了什么，顺序如何？"]],["proofflow.problem.responsibility.title",["Unklare Verantwortung","Unclear responsibility","Belirsiz sorumluluk","Responsabilidad poco clara","Responsabilité floue","Responsabilità poco chiara","Responsabilitate neclară","责任不清"]],["proofflow.problem.responsibility.text",["Wer hat wann gehandelt, bestätigt oder entschieden?","Who acted, confirmed or decided, and when?","Kim ne zaman hareket etti, onayladı veya karar verdi?","¿Quién actuó, confirmó o decidió y cuándo?","Qui a agi, confirmé ou décidé, et quand ?","Chi ha agito, confermato o deciso e quando?","Cine a acționat, confirmat sau decis și când?","谁在何时行动、确认或做出决定？"]],["proofflow.problem.evidence.title",["Fehlender Nachweis","Missing evidence","Eksik kanıt","Falta de prueba","Preuve manquante","Prova mancante","Dovadă lipsă","缺少证据"]],["proofflow.problem.evidence.text",["Ohne belegbare Informationen bleiben später Aussagen gegeneinander stehen.","Without verifiable information, later statements remain opposed to one another.","Doğrulanabilir bilgi olmadan daha sonra ifadeler karşı karşıya kalır.","Sin información verificable, después quedan afirmaciones enfrentadas.","Sans information vérifiable, les déclarations restent ensuite opposées.","Senza informazioni verificabili, in seguito restano dichiarazioni contrapposte.","Fără informații verificabile, ulterior rămân afirmații opuse.","没有可验证信息，之后只剩相互对立的说法。"]],["proofflow.system.eyebrow",["PROOF SYSTEM","PROOF SYSTEM","KANIT SİSTEMİ","SISTEMA DE PRUEBA","SYSTÈME DE PREUVE","SISTEMA DI PROVA","SISTEM DE DOVADĂ","证明系统"]],["proofflow.system.title",["Ein nachvollziehbarer Ablauf statt isolierter Dateien.","A traceable workflow instead of isolated files.","Yalıtılmış dosyalar yerine izlenebilir bir akış.","Un flujo trazable en vez de archivos aislados.","Un flux traçable plutôt que des fichiers isolés.","Un flusso tracciabile invece di file isolati.","Un flux trasabil în locul fișierelor izolate.","用可追溯流程替代孤立文件。"]],["proofflow.system.lead",["ProofFlow strukturiert den Weg von einem Vorgang bis zu einem überprüfbaren Ergebnis.","ProofFlow structures the path from an event to a verifiable result.","ProofFlow bir olaydan doğrulanabilir sonuca giden yolu yapılandırır.","ProofFlow estructura el camino desde un proceso hasta un resultado verificable.","ProofFlow structure le chemin d’un événement jusqu’à un résultat vérifiable.","ProofFlow struttura il percorso da un evento a un risultato verificabile.","ProofFlow structurează drumul de la un eveniment la un rezultat verificabil.","ProofFlow 将一个事件到可验证结果的路径结构化。"]],["proofflow.system.job.title",["Job","Job","İş","Trabajo","Tâche","Attività","Sarcină","任务"]],["proofflow.system.job.text",["Der Vorgang erhält einen klaren Kontext und Ausgangspunkt.","The event receives a clear context and starting point.","Olay açık bir bağlam ve başlangıç noktası kazanır.","El proceso recibe un contexto y punto de partida claros.","L’événement reçoit un contexte et un point de départ clairs.","L’evento riceve un contesto e un punto di partenza chiari.","Evenimentul primește un context și un punct de pornire clar.","事件获得清晰的上下文与起点。"]],["proofflow.system.proof.title",["Proof","Proof","Kanıt","Prueba","Preuve","Prova","Dovadă","证明"]],["proofflow.system.proof.text",["Relevante Nachweise werden dem Vorgang zugeordnet.","Relevant evidence is assigned to the event.","İlgili kanıtlar olaya atanır.","Las pruebas relevantes se asignan al proceso.","Les preuves pertinentes sont rattachées à l’événement.","Le prove rilevanti vengono associate all’evento.","Dovezile relevante sunt asociate evenimentului.","相关证明被关联到该事件。"]],["proofflow.system.sign.title",["Sign","Sign","İmza","Firma","Signer","Firma","Semnare","签名"]],["proofflow.system.sign.text",["Bestätigung oder Signatur wird mit Identität verbunden.","Confirmation or signature is linked to identity.","Onay veya imza kimlikle bağlanır.","La confirmación o firma se vincula a la identidad.","La confirmation ou signature est liée à l’identité.","La conferma o firma viene collegata all’identità.","Confirmarea sau semnătura este legată de identitate.","确认或签名与身份关联。"]],["proofflow.system.audit.title",["Audit","Audit","Denetim","Auditoría","Audit","Audit","Audit","审计"]],["proofflow.system.audit.text",["Relevante Zustandsänderungen bleiben nachvollziehbar.","Relevant state changes remain traceable.","İlgili durum değişiklikleri izlenebilir kalır.","Los cambios de estado relevantes siguen siendo trazables.","Les changements d’état pertinents restent traçables.","I cambiamenti di stato rilevanti restano tracciabili.","Modificările relevante de stare rămân trasabile.","相关状态变化保持可追溯。"]],["proofflow.system.export.title",["Export","Export","Dışa Aktarma","Exportación","Export","Esportazione","Export","导出"]],["proofflow.system.export.text",["Der dokumentierte Ablauf kann strukturiert ausgegeben werden.","The documented workflow can be exported in a structured way.","Belgelenen akış yapılandırılmış biçimde dışa aktarılabilir.","El flujo documentado puede exportarse de forma estructurada.","Le flux documenté peut être exporté de manière structurée.","Il flusso documentato può essere esportato in modo strutturato.","Fluxul documentat poate fi exportat structurat.","记录的流程可以结构化导出。"]],["proofflow.trust.eyebrow",["PROOF & TRUST","PROOF & TRUST","KANIT & GÜVEN","PRUEBA & CONFIANZA","PREUVE & CONFIANCE","PROVA & FIDUCIA","DOVADĂ & ÎNCREDERE","证明与信任"]],["proofflow.trust.title",["Ein Nachweis ist mehr als ein Foto.","Evidence is more than a photo.","Kanıt bir fotoğraftan fazlasıdır.","Una prueba es más que una foto.","Une preuve est plus qu’une photo.","Una prova è più di una foto.","O dovadă este mai mult decât o fotografie.","证明不只是一张照片。"]],["proofflow.trust.lead",["Entscheidend ist der Zusammenhang zwischen Herkunft, Zeitpunkt, Identität und Prozess.","What matters is the relationship between provenance, time, identity and process.","Önemli olan kaynak, zaman, kimlik ve süreç arasındaki ilişkidir.","Lo decisivo es la relación entre procedencia, tiempo, identidad y proceso.","L’essentiel est la relation entre provenance, temps, identité et processus.","Conta il rapporto tra provenienza, tempo, identità e processo.","Contează relația dintre proveniență, timp, identitate și proces.","关键是来源、时间、身份与流程之间的关系。"]],["proofflow.trust.context.title",["Context","Context","Bağlam","Contexto","Contexte","Contesto","Context","上下文"]],["proofflow.trust.context.text",["Zu welchem Vorgang gehört der Nachweis?","Which event does the evidence belong to?","Kanıt hangi olaya ait?","¿A qué proceso pertenece la prueba?","À quel événement appartient la preuve ?","A quale evento appartiene la prova?","Cărui eveniment îi aparține dovada?","该证明属于哪个事件？"]],["proofflow.trust.identity.title",["Identity","Identity","Kimlik","Identidad","Identité","Identità","Identitate","身份"]],["proofflow.trust.identity.text",["Wer hat dokumentiert, bestätigt oder gehandelt?","Who documented, confirmed or acted?","Kim belgeledi, onayladı veya hareket etti?","¿Quién documentó, confirmó o actuó?","Qui a documenté, confirmé ou agi ?","Chi ha documentato, confermato o agito?","Cine a documentat, confirmat sau acționat?","谁进行了记录、确认或操作？"]],["proofflow.trust.time.title",["Time","Time","Zaman","Tiempo","Temps","Tempo","Timp","时间"]],["proofflow.trust.time.text",["Wann entstand der relevante Zustand oder Nachweis?","When did the relevant state or evidence arise?","İlgili durum veya kanıt ne zaman oluştu?","¿Cuándo surgió el estado o la prueba relevante?","Quand l’état ou la preuve pertinente est-il apparu ?","Quando è nato lo stato o la prova rilevante?","Când a apărut starea sau dovada relevantă?","相关状态或证明何时产生？"]],["proofflow.trust.audit.title",["Audit","Audit","Denetim","Auditoría","Audit","Audit","Audit","审计"]],["proofflow.trust.audit.text",["Ist die Entwicklung des Vorgangs später nachvollziehbar?","Can the development of the event be traced later?","Olayın gelişimi daha sonra izlenebilir mi?","¿Puede rastrearse después la evolución del proceso?","L’évolution de l’événement peut-elle être retracée ensuite ?","L’evoluzione dell’evento può essere ricostruita in seguito?","Poate fi urmărită ulterior evoluția evenimentului?","之后能否追溯该事件的发展过程？"]],["proofflow.pilot.eyebrow",["PILOT","PILOT","PİLOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.title",["ProofFlow wird an einem realen Prozess geprüft.","ProofFlow is tested on a real process.","ProofFlow gerçek bir süreç üzerinde test edilir.","ProofFlow se prueba en un proceso real.","ProofFlow est testé sur un processus réel.","ProofFlow viene testato su un processo reale.","ProofFlow este testat pe un proces real.","ProofFlow 在现实流程中进行测试。"]],["proofflow.pilot.text",["Für einen Pilot wird ein konkreter Vorgang ausgewählt, strukturiert und mit den benötigten Nachweis- und Audit-Schritten abgebildet.","For a pilot, a concrete event is selected, structured and mapped with the required evidence and audit steps.","Pilot için belirli bir olay seçilir, yapılandırılır ve gerekli kanıt ve denetim adımlarıyla modellenir.","Para un pilot se selecciona un proceso concreto, se estructura y se representa con los pasos de prueba y auditoría necesarios.","Pour un pilot, un événement concret est choisi, structuré et modélisé avec les étapes de preuve et d’audit nécessaires.","Per un pilot viene selezionato un evento concreto, strutturato e rappresentato con i passaggi di prova e audit necessari.","Pentru un pilot este ales un eveniment concret, structurat și modelat cu pașii necesari de dovadă și audit.","Pilot 会选择一个具体事件，对其结构化，并映射所需的证明与审计步骤。"]],["proofflow.pilot.request",["Pilot anfragen","Request Pilot","Pilot talep et","Solicitar Pilot","Demander un Pilot","Richiedi Pilot","Solicită Pilot","申请 Pilot"]],["proofflow.pilot.email",["E-Mail senden","Send email","E-posta gönder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","发送邮件"]],["proofflow.pilot.phase1",["PHASE 01","PHASE 01","AŞAMA 01","FASE 01","PHASE 01","FASE 01","FAZA 01","阶段 01"]],["proofflow.pilot.analysis",["ANALYSE","ANALYSIS","ANALİZ","ANÁLISIS","ANALYSE","ANALISI","ANALIZĂ","分析"]],["proofflow.pilot.phase2",["PHASE 02","PHASE 02","AŞAMA 02","FASE 02","PHASE 02","FASE 02","FAZA 02","阶段 02"]],["proofflow.pilot.model",["MODEL","MODEL","MODEL","MODELO","MODÈLE","MODELLO","MODEL","模型"]],["proofflow.pilot.phase3",["PHASE 03","PHASE 03","AŞAMA 03","FASE 03","PHASE 03","FASE 03","FAZA 03","阶段 03"]],["proofflow.pilot.pilot",["PILOT","PILOT","PİLOT","PILOT","PILOT","PILOT","PILOT","PILOT"]],["proofflow.pilot.phase4",["PHASE 04","PHASE 04","AŞAMA 04","FASE 04","PHASE 04","FASE 04","FAZA 04","阶段 04"]],["proofflow.pilot.review",["REVIEW","REVIEW","İNCELEME","REVISIÓN","REVUE","REVISIONE","REVIZUIRE","评审"]],["proofflow.core.eyebrow",["ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE","ZAL’THERA CORE"]],["proofflow.core.title",["ProofFlow nutzt denselben Vertrauenskern.","ProofFlow uses the same trust core.","ProofFlow aynı güven çekirdeğini kullanır.","ProofFlow utiliza el mismo núcleo de confianza.","ProofFlow utilise le même noyau de confiance.","ProofFlow usa lo stesso core di fiducia.","ProofFlow folosește același nucleu de încredere.","ProofFlow 使用同一个信任核心。"]],["proofflow.core.text",["Identität, Kontext, Nachweis, Audit und kontrollierte Ausführung bleiben Teil derselben ZAL’THERA-Architektur.","Identity, context, evidence, audit and controlled execution remain part of the same ZAL’THERA architecture.","Kimlik, bağlam, kanıt, denetim ve kontrollü yürütme aynı ZAL’THERA mimarisinin parçası olarak kalır.","Identidad, contexto, prueba, auditoría y ejecución controlada siguen formando parte de la misma arquitectura ZAL’THERA.","Identité, contexte, preuve, audit et exécution contrôlée restent dans la même architecture ZAL’THERA.","Identità, contesto, prova, audit ed esecuzione controllata restano parte della stessa architettura ZAL’THERA.","Identitatea, contextul, dovada, auditul și execuția controlată rămân parte din aceeași arhitectură ZAL’THERA.","身份、上下文、证明、审计与受控执行仍属于同一 ZAL’THERA 架构。"]],["proofflow.contact.title",["ProofFlow Pilot anfragen","Request a ProofFlow pilot","ProofFlow pilot talep et","Solicitar un pilot de ProofFlow","Demander un pilot ProofFlow","Richiedi un pilot ProofFlow","Solicită un pilot ProofFlow","申请 ProofFlow Pilot"]],["proofflow.contact.text",["Beschreibe kurz den Prozess, der nachvollziehbarer werden soll.","Briefly describe the process that should become more traceable.","Daha izlenebilir hale gelmesi gereken süreci kısaca açıklayın.","Describe brevemente el proceso que debe ser más trazable.","Décrivez brièvement le processus qui doit devenir plus traçable.","Descrivi brevemente il processo che deve diventare più tracciabile.","Descrie pe scurt procesul care trebuie să devină mai trasabil.","简要描述需要变得更可追溯的流程。"]],["proofflow.contact.namePlaceholder",["Ihr Name","Your name","Adınız","Su nombre","Votre nom","Il tuo nome","Numele dvs.","您的姓名"]],["proofflow.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["proofflow.contact.messagePlaceholder",["Welcher Prozess soll nachvollziehbarer werden?","Which process should become more traceable?","Hangi süreç daha izlenebilir olmalı?","¿Qué proceso debería ser más trazable?","Quel processus doit devenir plus traçable ?","Quale processo dovrebbe diventare più tracciabile?","Ce proces ar trebui să devină mai trasabil?","哪个流程需要变得更可追溯？"]],["proofflow.contact.send",["Anfrage senden","Send request","Talep gönder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","发送申请"]],["proofflow.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","Göndererek şunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptați","提交即表示您接受我们的"]],["shiftlog.hero.kicker",["ZAL’THERA INDUSTRY","ZAL’THERA INDUSTRY","ZAL’THERA ENDÜSTRİ","ZAL’THERA INDUSTRIA","ZAL’THERA INDUSTRIE","ZAL’THERA INDUSTRIA","ZAL’THERA INDUSTRIE","ZAL’THERA 工业"]],["shiftlog.hero.title",["Shift handover.<br>Without information loss.","Shift handover.<br>Without information loss.","Vardiya devri.<br>Bilgi kaybı olmadan.","Relevo de turno.<br>Sin pérdida de información.","Transmission de poste.<br>Sans perte d’information.","Passaggio turno.<br>Senza perdita di informazioni.","Predare de schimb.<br>Fără pierdere de informații.","班次交接。<br>不丢失信息。"]],["shiftlog.hero.lead",["ShiftLog macht operative Zustände, offene Punkte und Verantwortlichkeiten über Schichtgrenzen hinweg nachvollziehbar.","ShiftLog makes operational states, open points and responsibilities traceable across shift boundaries.","ShiftLog operasyonel durumları, açık noktaları ve sorumlulukları vardiyalar arasında izlenebilir kılar.","ShiftLog hace trazables los estados operativos, puntos abiertos y responsabilidades entre turnos.","ShiftLog rend traçables les états opérationnels, points ouverts et responsabilités entre les postes.","ShiftLog rende tracciabili stati operativi, punti aperti e responsabilità tra i turni.","ShiftLog face trasabile stările operaționale, punctele deschise și responsabilitățile între schimburi.","ShiftLog 让运行状态、未决事项与责任跨班次保持可追溯。"]],["shiftlog.hero.understand",["System verstehen","Understand system","Sistemi anla","Entender sistema","Comprendre le système","Comprendi il sistema","Înțelege sistemul","理解系统"]],["shiftlog.hero.interest",["Interesse melden","Register interest","İlgi bildir","Mostrar interés","Signaler son intérêt","Segnala interesse","Exprimă interesul","表达兴趣"]],["shiftlog.hero.handover",["HANDOVER","HANDOVER","DEVİR","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","交接"]],["shiftlog.hero.state",["STATE","STATE","DURUM","ESTADO","ÉTAT","STATO","STARE","状态"]],["shiftlog.hero.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILITÉ","RESPONSABILITÀ","RESPONSABILITATE","责任"]],["shiftlog.hero.traceability",["TRACEABILITY","TRACEABILITY","İZLENEBİLİRLİK","TRAZABILIDAD","TRAÇABILITÉ","TRACCIABILITÀ","TRASABILITATE","可追溯性"]],["shiftlog.state.label",["SHIFT STATE","SHIFT STATE","VARDİYA DURUMU","ESTADO DEL TURNO","ÉTAT DU POSTE","STATO DEL TURNO","STAREA SCHIMBULUI","班次状态"]],["shiftlog.state.status",["STATUS","STATUS","DURUM","ESTADO","STATUT","STATO","STARE","状态"]],["shiftlog.state.capture",["CAPTURE","CAPTURE","KAYIT","CAPTURA","CAPTURE","ACQUISIZIONE","CAPTURĂ","记录"]],["shiftlog.state.openPoints",["OPEN POINTS","OPEN POINTS","AÇIK NOKTALAR","PUNTOS ABIERTOS","POINTS OUVERTS","PUNTI APERTI","PUNCTE DESCHISE","未决事项"]],["shiftlog.state.visible",["VISIBLE","VISIBLE","GÖRÜNÜR","VISIBLE","VISIBLE","VISIBILE","VIZIBIL","可见"]],["shiftlog.state.handover",["HANDOVER","HANDOVER","DEVİR","RELEVO","TRANSMISSION","PASSAGGIO","PREDARE","交接"]],["shiftlog.state.structured",["STRUCTURED","STRUCTURED","YAPILANDIRILMIŞ","ESTRUCTURADO","STRUCTURÉ","STRUTTURATO","STRUCTURAT","已结构化"]],["shiftlog.state.responsibility",["RESPONSIBILITY","RESPONSIBILITY","SORUMLULUK","RESPONSABILIDAD","RESPONSABILITÉ","RESPONSABILITÀ","RESPONSABILITATE","责任"]],["shiftlog.state.assigned",["ASSIGNED","ASSIGNED","ATANDI","ASIGNADA","ATTRIBUÉE","ASSEGNATA","ATRIBUITĂ","已分配"]],["shiftlog.state.history",["HISTORY","HISTORY","GEÇMİŞ","HISTORIAL","HISTORIQUE","STORICO","ISTORIC","历史"]],["shiftlog.state.traceable",["TRACEABLE","TRACEABLE","İZLENEBİLİR","TRAZABLE","TRAÇABLE","TRACCIABILE","TRASABIL","可追溯"]],["shiftlog.problem.eyebrow",["SHIFT REALITY","SHIFT REALITY","VARDİYA GERÇEĞİ","REALIDAD DEL TURNO","RÉALITÉ DU POSTE","REALTÀ DEL TURNO","REALITATEA SCHIMBULUI","班次现实"]],["shiftlog.problem.title",["Information darf nicht an der Schichtgrenze enden.","Information must not stop at the shift boundary.","Bilgi vardiya sınırında bitmemeli.","La información no debe terminar en el cambio de turno.","L’information ne doit pas s’arrêter au changement de poste.","Le informazioni non devono fermarsi al cambio turno.","Informația nu trebuie să se oprească la schimbul de tură.","信息不应在班次边界终止。"]],["shiftlog.problem.lead",["Offene Punkte, Maschinenzustände und Verantwortlichkeiten verlieren schnell Kontext, wenn Übergaben nur mündlich oder unstrukturiert erfolgen.","Open points, machine states and responsibilities quickly lose context when handovers are only verbal or unstructured.","Açık noktalar, makine durumları ve sorumluluklar devirler yalnızca sözlü veya yapılandırılmamış olduğunda hızla bağlam kaybeder.","Puntos abiertos, estados de máquina y responsabilidades pierden contexto rápidamente cuando los relevos son solo verbales o no estructurados.","Points ouverts, états machine et responsabilités perdent vite leur contexte lorsque les transmissions sont seulement orales ou non structurées.","Punti aperti, stati macchina e responsabilità perdono rapidamente contesto quando i passaggi sono solo verbali o non strutturati.","Punctele deschise, stările utilajelor și responsabilitățile pierd rapid context când predările sunt doar verbale sau nestructurate.","当交接仅靠口头或缺乏结构时，未决事项、机器状态与责任会迅速失去上下文。"]],["shiftlog.problem.overlooked.title",["Offene Punkte werden übersehen","Open points are overlooked","Açık noktalar gözden kaçar","Se pasan por alto puntos abiertos","Des points ouverts sont oubliés","I punti aperti vengono trascurati","Punctele deschise sunt omise","未决事项被忽略"]],["shiftlog.problem.overlooked.text",["Was nicht klar übergeben wird, kann in der nächsten Schicht verschwinden.","What is not handed over clearly can disappear in the next shift.","Açıkça devredilmeyen şey sonraki vardiyada kaybolabilir.","Lo que no se entrega con claridad puede desaparecer en el siguiente turno.","Ce qui n’est pas transmis clairement peut disparaître au poste suivant.","Ciò che non viene passato chiaramente può perdersi nel turno successivo.","Ceea ce nu este predat clar poate dispărea în schimbul următor.","未被清晰交接的信息可能在下一班次中消失。"]],["shiftlog.problem.states.title",["Zustände werden uneindeutig","States become ambiguous","Durumlar belirsizleşir","Los estados se vuelven ambiguos","Les états deviennent ambigus","Gli stati diventano ambigui","Stările devin ambigue","状态变得模糊"]],["shiftlog.problem.states.text",["Ohne strukturierten Status ist schwer zu erkennen, was offen, übernommen oder erledigt ist.","Without structured status, it is hard to see what is open, taken over or completed.","Yapılandırılmış durum olmadan neyin açık, devralınmış veya tamamlanmış olduğunu görmek zordur.","Sin estado estructurado es difícil ver qué está abierto, asumido o completado.","Sans statut structuré, il est difficile de voir ce qui est ouvert, repris ou terminé.","Senza stato strutturato è difficile capire cosa è aperto, preso in carico o completato.","Fără stare structurată este greu de văzut ce este deschis, preluat sau finalizat.","没有结构化状态，就难以看清什么是未决、已接手或已完成。"]],["shiftlog.problem.context.title",["Kontext geht verloren","Context is lost","Bağlam kaybolur","Se pierde el contexto","Le contexte se perd","Il contesto si perde","Contextul se pierde","上下文丢失"]],["shiftlog.problem.context.text",["Maschine, Bereich, Zeitpunkt und Verantwortlichkeit müssen zusammen sichtbar bleiben.","Machine, area, time and responsibility must remain visible together.","Makine, alan, zaman ve sorumluluk birlikte görünür kalmalı.","Máquina, área, momento y responsabilidad deben seguir visibles juntos.","Machine, zone, moment et responsabilité doivent rester visibles ensemble.","Macchina, area, tempo e responsabilità devono restare visibili insieme.","Utilajul, zona, timpul și responsabilitatea trebuie să rămână vizibile împreună.","机器、区域、时间与责任必须一起保持可见。"]],["shiftlog.system.eyebrow",["SHIFTLOG SYSTEM","SHIFTLOG SYSTEM","SHIFTLOG SİSTEMİ","SISTEMA SHIFTLOG","SYSTÈME SHIFTLOG","SISTEMA SHIFTLOG","SISTEM SHIFTLOG","SHIFTLOG 系统"]],["shiftlog.system.title",["Übergabe wird zu einem nachvollziehbaren Prozess.","Handover becomes a traceable process.","Devir izlenebilir bir sürece dönüşür.","El relevo se convierte en un proceso trazable.","La transmission devient un processus traçable.","Il passaggio diventa un processo tracciabile.","Predarea devine un proces trasabil.","交接变成可追溯流程。"]],["shiftlog.system.lead",["ShiftLog strukturiert operative Informationen so, dass Zustand, Übergabe und Verantwortung über Schichten hinweg sichtbar bleiben.","ShiftLog structures operational information so that state, handover and responsibility remain visible across shifts.","ShiftLog operasyonel bilgiyi, durum, devir ve sorumluluğun vardiyalar boyunca görünür kalacağı şekilde yapılandırır.","ShiftLog estructura la información operativa para que estado, relevo y responsabilidad sigan visibles entre turnos.","ShiftLog structure les informations opérationnelles pour que l’état, la transmission et la responsabilité restent visibles entre les postes.","ShiftLog struttura le informazioni operative affinché stato, passaggio e responsabilità restino visibili tra i turni.","ShiftLog structurează informația operațională astfel încât starea, predarea și responsabilitatea să rămână vizibile între schimburi.","ShiftLog 对运行信息进行结构化，使状态、交接与责任跨班次保持可见。"]],["shiftlog.system.capture.title",["Capture","Capture","Kayıt","Captura","Capture","Acquisizione","Captură","记录"]],["shiftlog.system.capture.text",["Relevante Zustände und offene Punkte werden strukturiert erfasst.","Relevant states and open points are captured in a structured way.","İlgili durumlar ve açık noktalar yapılandırılmış biçimde kaydedilir.","Los estados relevantes y puntos abiertos se registran de forma estructurada.","Les états pertinents et points ouverts sont saisis de manière structurée.","Stati rilevanti e punti aperti vengono registrati in modo strutturato.","Stările relevante și punctele deschise sunt capturate structurat.","相关状态与未决事项被结构化记录。"]],["shiftlog.system.state.title",["State","State","Durum","Estado","État","Stato","Stare","状态"]],["shiftlog.system.state.text",["Der aktuelle operative Zustand bleibt sichtbar.","The current operational state remains visible.","Mevcut operasyonel durum görünür kalır.","El estado operativo actual sigue visible.","L’état opérationnel actuel reste visible.","Lo stato operativo attuale resta visibile.","Starea operațională curentă rămâne vizibilă.","当前运行状态保持可见。"]],["shiftlog.system.handover.title",["Handover","Handover","Devir","Relevo","Transmission","Passaggio","Predare","交接"]],["shiftlog.system.handover.text",["Offene Punkte werden gezielt an die nächste Schicht übergeben.","Open points are deliberately handed over to the next shift.","Açık noktalar bilinçli biçimde sonraki vardiyaya devredilir.","Los puntos abiertos se entregan de forma intencional al siguiente turno.","Les points ouverts sont transmis explicitement au poste suivant.","I punti aperti vengono passati intenzionalmente al turno successivo.","Punctele deschise sunt predate explicit schimbului următor.","未决事项被明确交给下一班次。"]],["shiftlog.system.responsibility.title",["Responsibility","Responsibility","Sorumluluk","Responsabilidad","Responsabilité","Responsabilità","Responsabilitate","责任"]],["shiftlog.system.responsibility.text",["Zuständigkeit und Übernahme werden klarer nachvollziehbar.","Responsibility and acceptance become more traceable.","Sorumluluk ve devralma daha açık izlenebilir olur.","La responsabilidad y la aceptación se vuelven más trazables.","La responsabilité et la prise en charge deviennent plus traçables.","Responsabilità e presa in carico diventano più tracciabili.","Responsabilitatea și preluarea devin mai trasabile.","责任与接手变得更可追溯。"]],["shiftlog.system.history.title",["History","History","Geçmiş","Historial","Historique","Storico","Istoric","历史"]],["shiftlog.system.history.text",["Relevante Änderungen und Übergaben bleiben später nachvollziehbar.","Relevant changes and handovers remain traceable later.","İlgili değişiklikler ve devirler daha sonra izlenebilir kalır.","Los cambios y relevos relevantes siguen siendo trazables después.","Les changements et transmissions pertinents restent traçables ensuite.","Cambiamenti e passaggi rilevanti restano tracciabili in seguito.","Modificările și predările relevante rămân trasabile ulterior.","相关变化与交接之后仍可追溯。"]],["shiftlog.industry.title",["Teil von ZAL’THERA Industry.","Part of ZAL’THERA Industry.","ZAL’THERA Industry’nin bir parçası.","Parte de ZAL’THERA Industry.","Partie de ZAL’THERA Industry.","Parte di ZAL’THERA Industry.","Parte din ZAL’THERA Industry.","ZAL’THERA Industry 的一部分。"]],["shiftlog.industry.text",["ShiftLog ist ein operativer Einstieg in die industrielle ZAL’THERA-Architektur.","ShiftLog is an operational entry point into the industrial ZAL’THERA architecture.","ShiftLog endüstriyel ZAL’THERA mimarisine operasyonel bir giriş noktasıdır.","ShiftLog es una entrada operativa a la arquitectura industrial ZAL’THERA.","ShiftLog est un point d’entrée opérationnel dans l’architecture industrielle ZAL’THERA.","ShiftLog è un punto di ingresso operativo nell’architettura industriale ZAL’THERA.","ShiftLog este un punct operațional de intrare în arhitectura industrială ZAL’THERA.","ShiftLog 是进入 ZAL’THERA 工业架构的操作入口。"]],["shiftlog.industry.view",["Industry ansehen","View Industry","Industry’yi görüntüle","Ver Industry","Voir Industry","Vedi Industry","Vezi Industry","查看 Industry"]],["shiftlog.use.eyebrow",["REAL-WORLD USE","REAL-WORLD USE","GERÇEK DÜNYA KULLANIMI","USO REAL","USAGE RÉEL","USO REALE","UTILIZARE REALĂ","现实使用"]],["shiftlog.use.title",["Für reale Übergaben gebaut.","Built for real handovers.","Gerçek devirler için üretildi.","Construido para relevos reales.","Conçu pour de vraies transmissions.","Costruito per passaggi reali.","Construit pentru predări reale.","为真实交接而构建。"]],["shiftlog.use.text",["ShiftLog soll in klar abgegrenzten betrieblichen Abläufen getestet und schrittweise weiterentwickelt werden.","ShiftLog is intended to be tested in clearly defined operational workflows and developed step by step.","ShiftLog açıkça tanımlanmış işletme akışlarında test edilip adım adım geliştirilecektir.","ShiftLog está pensado para probarse en flujos operativos claramente definidos y desarrollarse paso a paso.","ShiftLog doit être testé dans des flux opérationnels clairement définis et développé progressivement.","ShiftLog è pensato per essere testato in flussi operativi chiaramente definiti e sviluppato passo dopo passo.","ShiftLog este destinat testării în fluxuri operaționale clar definite și dezvoltării treptate.","ShiftLog 将在边界清晰的运行流程中测试，并逐步发展。"]],["shiftlog.use.interest",["Interesse melden","Register interest","İlgi bildir","Mostrar interés","Signaler son intérêt","Segnala interesse","Exprimă interesul","表达兴趣"]],["shiftlog.use.email",["E-Mail senden","Send email","E-posta gönder","Enviar correo","Envoyer un e-mail","Invia e-mail","Trimite e-mail","发送邮件"]],["shiftlog.use.state1",["STATE 01","STATE 01","DURUM 01","ESTADO 01","ÉTAT 01","STATO 01","STARE 01","状态 01"]],["shiftlog.use.captured",["CAPTURED","CAPTURED","KAYDEDİLDİ","CAPTURADO","SAISI","ACQUISITO","CAPTURAT","已记录"]],["shiftlog.use.state2",["STATE 02","STATE 02","DURUM 02","ESTADO 02","ÉTAT 02","STATO 02","STARE 02","状态 02"]],["shiftlog.use.open",["OPEN","OPEN","AÇIK","ABIERTO","OUVERT","APERTO","DESCHIS","未决"]],["shiftlog.use.state3",["STATE 03","STATE 03","DURUM 03","ESTADO 03","ÉTAT 03","STATO 03","STARE 03","状态 03"]],["shiftlog.use.handedOver",["HANDED OVER","HANDED OVER","DEVREDİLDİ","ENTREGADO","TRANSMIS","PASSATO","PREDAT","已交接"]],["shiftlog.use.state4",["STATE 04","STATE 04","DURUM 04","ESTADO 04","ÉTAT 04","STATO 04","STARE 04","状态 04"]],["shiftlog.use.resolved",["RESOLVED","RESOLVED","ÇÖZÜLDÜ","RESUELTO","RÉSOLU","RISOLTO","REZOLVAT","已解决"]],["shiftlog.contact.title",["Interesse an ShiftLog?","Interested in ShiftLog?","ShiftLog ile ilgileniyor musunuz?","¿Interés en ShiftLog?","Intéressé par ShiftLog ?","Interessato a ShiftLog?","Interesat de ShiftLog?","对 ShiftLog 感兴趣？"]],["shiftlog.contact.text",["Beschreibe kurz den betrieblichen Ablauf, in dem Übergaben oder offene Punkte besser strukturiert werden sollen.","Briefly describe the operational workflow in which handovers or open points should be structured better.","Devirlerin veya açık noktaların daha iyi yapılandırılması gereken işletme akışını kısaca açıklayın.","Describe brevemente el flujo operativo en el que los relevos o puntos abiertos deben estructurarse mejor.","Décrivez brièvement le flux opérationnel où les transmissions ou points ouverts doivent être mieux structurés.","Descrivi brevemente il flusso operativo in cui passaggi o punti aperti devono essere strutturati meglio.","Descrie pe scurt fluxul operațional în care predările sau punctele deschise trebuie structurate mai bine.","简要描述需要更好结构化交接或未决事项的运行流程。"]],["shiftlog.contact.namePlaceholder",["Ihr Name","Your name","Adınız","Su nombre","Votre nom","Il tuo nome","Numele dvs.","您的姓名"]],["shiftlog.contact.emailPlaceholder",["name@firma.de","name@company.com","ad@sirket.com","nombre@empresa.com","nom@entreprise.com","nome@azienda.it","nume@firma.ro","name@company.com"]],["shiftlog.contact.messagePlaceholder",["Wo entstehen heute Informationsverluste bei Übergaben?","Where do information losses occur in handovers today?","Bugün devirlerde bilgi kaybı nerede oluşuyor?","¿Dónde se producen hoy pérdidas de información en los relevos?","Où se produisent aujourd’hui les pertes d’information lors des transmissions ?","Dove si verificano oggi perdite di informazioni nei passaggi?","Unde apar astăzi pierderi de informații la predări?","如今交接中的信息丢失发生在哪里？"]],["shiftlog.contact.send",["Anfrage senden","Send request","Talep gönder","Enviar solicitud","Envoyer la demande","Invia richiesta","Trimite solicitarea","发送申请"]],["shiftlog.contact.privacyPrefix",["Mit dem Absenden akzeptieren Sie unsere","By submitting, you accept our","Göndererek şunu kabul edersiniz:","Al enviar, acepta nuestra","En envoyant, vous acceptez notre","Inviando accetti la nostra","Prin trimitere acceptați","提交即表示您接受我们的"]],["support.hero.eyebrow",["SUPPORT","SUPPORT","DESTEK","SOPORTE","SUPPORT","SUPPORTO","SUPORT","支持"]],["support.hero.title",["ZAL’THERA Support","ZAL’THERA Support","ZAL’THERA Destek","Soporte ZAL’THERA","Support ZAL’THERA","Supporto ZAL’THERA","Suport ZAL’THERA","ZAL’THERA 支持"]],["support.hero.text",["Hilfe zu ZAL’THERA Produkten, Systemen und bestehenden Anwendungen.","Help with ZAL’THERA products, systems and existing applications.","ZAL’THERA ürünleri, sistemleri ve mevcut uygulamaları için yardım.","Ayuda sobre productos, sistemas y aplicaciones existentes de ZAL’THERA.","Aide concernant les produits, systèmes et applications existantes de ZAL’THERA.","Aiuto per prodotti, sistemi e applicazioni esistenti ZAL’THERA.","Ajutor pentru produsele, sistemele și aplicațiile existente ZAL’THERA.","关于 ZAL’THERA 产品、系统与现有应用的帮助。"]],["support.contact.title",["Kontakt","Contact","İletişim","Contacto","Contact","Contatto","Contact","联系"]],["support.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","电子邮件："]],["support.apps.title",["Apps & Systeme","Apps & Systems","Uygulamalar & Sistemler","Apps & Sistemas","Applications & Systèmes","App & Sistemi","Aplicații & Sisteme","应用与系统"]],["support.apps.lifeflow",["LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow","LifeFlow"]],["support.apps.easyproof",["EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro","EasyProof / EasyProof Pro"]],["support.apps.lifeshield",["LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield","LifeShield"]],["support.apps.deliveryCore",["Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core","Delivery Core"]],["support.apps.origin",["Origin","Origin","Origin","Origin","Origin","Origin","Origin","Origin"]],["support.apps.other.title",["Andere Produkte oder Systeme","Other products or systems","Diğer ürünler veya sistemler","Otros productos o sistemas","Autres produits ou systèmes","Altri prodotti o sistemi","Alte produse sau sisteme","其他产品或系统"]],["support.apps.other.text",["Nenne bitte den Produkt- oder Systemnamen in deiner Nachricht.","Please include the product or system name in your message.","Mesajınızda ürün veya sistem adını belirtin.","Indica el nombre del producto o sistema en tu mensaje.","Indiquez le nom du produit ou système dans votre message.","Indica il nome del prodotto o sistema nel messaggio.","Menționează numele produsului sau sistemului în mesaj.","请在消息中注明产品或系统名称。"]],["support.message.title",["Damit wir schnell helfen können","To help you quickly","Hızlı yardımcı olabilmemiz için","Para poder ayudarte rápido","Pour vous aider rapidement","Per poterti aiutare rapidamente","Pentru a te ajuta rapid","为了更快帮助你"]],["support.message.app",["App oder System nennen","Name the app or system","Uygulama veya sistemi belirtin","Indica la app o el sistema","Indiquez l’application ou le système","Indica app o sistema","Menționează aplicația sau sistemul","注明应用或系统"]],["support.message.problem",["Problem möglichst genau beschreiben","Describe the problem as precisely as possible","Sorunu mümkün olduğunca ayrıntılı açıklayın","Describe el problema con la mayor precisión posible","Décrivez le problème aussi précisément que possible","Descrivi il problema nel modo più preciso possibile","Descrie problema cât mai exact posibil","尽可能准确描述问题"]],["support.message.device",["Gerät und Betriebssystem nennen","Include device and operating system","Cihazı ve işletim sistemini belirtin","Indica dispositivo y sistema operativo","Indiquez l’appareil et le système d’exploitation","Indica dispositivo e sistema operativo","Menționează dispozitivul și sistemul de operare","注明设备与操作系统"]],["support.message.screenshot",["Wenn möglich Screenshot anhängen","Attach a screenshot if possible","Mümkünse ekran görüntüsü ekleyin","Adjunta una captura si es posible","Ajoutez une capture d’écran si possible","Allega uno screenshot se possibile","Atașează o captură dacă este posibil","如可能请附截图"]],["support.responseTime",["Wir antworten so schnell wie möglich.","We reply as quickly as possible.","Mümkün olduğunca hızlı yanıt veririz.","Respondemos lo antes posible.","Nous répondons aussi rapidement que possible.","Rispondiamo il prima possibile.","Răspundem cât mai repede posibil.","我们会尽快回复。"]],["support.actions.contact",["Support kontaktieren","Contact support","Destekle iletişime geç","Contactar soporte","Contacter le support","Contatta il supporto","Contactează suportul","联系支持"]],["support.actions.home",["Zur Startseite","Back to home","Ana sayfaya dön","Volver al inicio","Retour à l’accueil","Torna alla home","Înapoi acasă","返回首页"]],["imprint.hero.eyebrow",["LEGAL","LEGAL","YASAL","LEGAL","JURIDIQUE","LEGALE","LEGAL","法律"]],["imprint.hero.title",["Impressum","Legal Notice","Yasal Bilgiler","Aviso legal","Mentions légales","Note legali","Informații legale","法律声明"]],["imprint.hero.lead",["Rechtliche Anbieterinformationen zu ZAL’THERA.","Legal provider information for ZAL’THERA.","ZAL’THERA için yasal sağlayıcı bilgileri.","Información legal del proveedor de ZAL’THERA.","Informations légales sur le fournisseur de ZAL’THERA.","Informazioni legali sul fornitore ZAL’THERA.","Informații legale despre furnizorul ZAL’THERA.","ZAL’THERA 的法律提供者信息。"]],["imprint.provider.title",["Angaben gemäß § 5 DDG","Information pursuant to § 5 DDG","§ 5 DDG uyarınca bilgiler","Información conforme al § 5 DDG","Informations conformément au § 5 DDG","Informazioni ai sensi del § 5 DDG","Informații conform § 5 DDG","根据德国 DDG 第 5 条的信息"]],["imprint.contact.title",["Kontakt","Contact","İletişim","Contacto","Contact","Contatto","Contact","联系"]],["imprint.contact.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","电子邮件："]],["imprint.responsibility.title",["Verantwortlich für den Inhalt","Responsible for content","İçerikten sorumlu","Responsable del contenido","Responsable du contenu","Responsabile dei contenuti","Responsabil pentru conținut","内容负责人"]],["imprint.project.title",["Projekt / Marke","Project / Brand","Proje / Marka","Proyecto / Marca","Projet / Marque","Progetto / Marchio","Proiect / Marcă","项目 / 品牌"]],["imprint.project.text",["ZAL’THERA ist ein digitales System für Ordnung, Nachweis, Schutz, Übergabe, Vertrauen und nachvollziehbare Aktionen.","ZAL’THERA is a digital system for organization, evidence, protection, handover, trust and traceable actions.","ZAL’THERA; düzen, kanıt, koruma, devir, güven ve izlenebilir eylemler için dijital bir sistemdir.","ZAL’THERA es un sistema digital para organización, prueba, protección, relevo, confianza y acciones trazables.","ZAL’THERA est un système numérique pour l’organisation, la preuve, la protection, la transmission, la confiance et les actions traçables.","ZAL’THERA è un sistema digitale per organizzazione, prova, protezione, passaggio, fiducia e azioni tracciabili.","ZAL’THERA este un sistem digital pentru organizare, dovadă, protecție, predare, încredere și acțiuni trasabile.","ZAL’THERA 是用于组织、证明、保护、交接、信任与可追溯操作的数字系统。"]],["imprint.contentLiability.title",["Haftung für Inhalte","Liability for content","İçerik sorumluluğu","Responsabilidad por contenidos","Responsabilité du contenu","Responsabilità per i contenuti","Răspundere pentru conținut","内容责任"]],["imprint.contentLiability.text",["Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.","As a service provider, we are responsible for our own content on these pages under general law.","Hizmet sağlayıcı olarak bu sayfalardaki kendi içeriklerimizden genel yasalar uyarınca sorumluyuz.","Como proveedor de servicios somos responsables de nuestros propios contenidos en estas páginas conforme a la legislación general.","En tant que fournisseur de services, nous sommes responsables de nos propres contenus sur ces pages conformément au droit général.","In qualità di fornitore di servizi siamo responsabili dei nostri contenuti su queste pagine secondo la legge generale.","Ca furnizor de servicii suntem responsabili pentru propriul conținut de pe aceste pagini conform legislației generale.","作为服务提供者，我们依据一般法律对本网站自身内容负责。"]],["imprint.linkLiability.title",["Haftung für Links","Liability for links","Bağlantı sorumluluğu","Responsabilidad por enlaces","Responsabilité des liens","Responsabilità per i link","Răspundere pentru linkuri","链接责任"]],["imprint.linkLiability.text",["Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.","Our website contains links to external third-party websites over whose content we have no control.","Sitemiz, içerikleri üzerinde kontrolümüz olmayan üçüncü taraf harici web sitelerine bağlantılar içerir.","Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyos contenidos no tenemos control.","Notre site contient des liens vers des sites externes tiers dont nous ne contrôlons pas le contenu.","Il nostro sito contiene link a siti esterni di terzi sui cui contenuti non abbiamo controllo.","Site-ul nostru conține linkuri către site-uri externe terțe asupra cărora nu avem control.","我们的网站包含指向第三方外部网站的链接，我们无法控制其内容。"]],["imprint.copyright.title",["Urheberrecht","Copyright","Telif hakkı","Derechos de autor","Droit d’auteur","Diritto d’autore","Drepturi de autor","版权"]],["imprint.copyright.text",["Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.","The content and works created by the site operator on these pages are subject to German copyright law.","Site işletmecisi tarafından oluşturulan içerik ve eserler Alman telif hakkı yasasına tabidir.","Los contenidos y obras creados por el operador del sitio están sujetos al derecho de autor alemán.","Les contenus et œuvres créés par l’exploitant du site sont soumis au droit d’auteur allemand.","I contenuti e le opere creati dal gestore del sito sono soggetti al diritto d’autore tedesco.","Conținuturile și operele create de operatorul site-ului sunt supuse dreptului de autor german.","网站运营者创建的内容与作品受德国版权法保护。"]],["imprint.actions.home",["Zur Startseite","Back to home","Ana sayfaya dön","Volver al inicio","Retour à l’accueil","Torna alla home","Înapoi acasă","返回首页"]],["privacy.hero.eyebrow",["DATENSCHUTZ","PRIVACY","GİZLİLİK","PRIVACIDAD","CONFIDENTIALITÉ","PRIVACY","CONFIDENȚIALITATE","隐私"]],["privacy.hero.title",["Datenschutzerklärung","Privacy Policy","Gizlilik Politikası","Política de privacidad","Politique de confidentialité","Informativa sulla privacy","Politica de confidențialitate","隐私政策"]],["privacy.hero.lead",["Informationen zur Verarbeitung personenbezogener Daten auf der ZAL’THERA Website und in verbundenen Anwendungen.","Information about the processing of personal data on the ZAL’THERA website and in connected applications.","ZAL’THERA web sitesinde ve bağlantılı uygulamalarda kişisel verilerin işlenmesine ilişkin bilgiler.","Información sobre el tratamiento de datos personales en el sitio web ZAL’THERA y aplicaciones conectadas.","Informations sur le traitement des données personnelles sur le site ZAL’THERA et les applications liées.","Informazioni sul trattamento dei dati personali sul sito ZAL’THERA e nelle applicazioni collegate.","Informații privind prelucrarea datelor cu caracter personal pe site-ul ZAL’THERA și în aplicațiile conectate.","关于 ZAL’THERA 网站及关联应用中个人数据处理的信息。"]],["privacy.controller.title",["Verantwortlicher","Controller","Veri sorumlusu","Responsable","Responsable du traitement","Titolare del trattamento","Operator","控制者"]],["privacy.controller.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","电子邮件："]],["privacy.website.title",["Websitezugriff","Website access","Web sitesi erişimi","Acceso al sitio web","Accès au site","Accesso al sito","Accesarea site-ului","网站访问"]],["privacy.website.text",["Beim Aufruf dieser Website können technisch notwendige Daten verarbeitet werden, die zur Bereitstellung, Sicherheit und Stabilität der Website erforderlich sind.","When this website is accessed, technically necessary data may be processed to provide, secure and stabilize the website.","Bu web sitesi açıldığında, sitenin sunulması, güvenliği ve kararlılığı için gerekli teknik veriler işlenebilir.","Al acceder a este sitio pueden tratarse datos técnicamente necesarios para ofrecer, asegurar y estabilizar el sitio.","Lors de l’accès à ce site, des données techniquement nécessaires peuvent être traitées afin d’assurer sa fourniture, sa sécurité et sa stabilité.","Durante l’accesso al sito possono essere trattati dati tecnicamente necessari per fornire, proteggere e stabilizzare il sito.","La accesarea acestui site pot fi prelucrate date necesare tehnic pentru furnizarea, securitatea și stabilitatea site-ului.","访问本网站时，可能会处理为提供、安全与稳定运行网站所必需的技术数据。"]],["privacy.contact.title",["Kontaktaufnahme","Contact","İletişim","Contacto","Prise de contact","Contatto","Contact","联系"]],["privacy.contact.text1",["Wenn du uns per E-Mail oder Kontaktformular kontaktierst, verarbeiten wir die von dir übermittelten Angaben zur Bearbeitung deiner Anfrage.","If you contact us by email or contact form, we process the information you provide in order to handle your request.","E-posta veya iletişim formu ile bize ulaşırsanız, talebinizi işlemek için ilettiğiniz bilgileri işleriz.","Si nos contactas por correo o formulario, tratamos los datos enviados para gestionar tu solicitud.","Si vous nous contactez par e-mail ou formulaire, nous traitons les informations transmises afin de gérer votre demande.","Se ci contatti via e-mail o modulo, trattiamo i dati forniti per gestire la richiesta.","Dacă ne contactezi prin e-mail sau formular, prelucrăm informațiile furnizate pentru a gestiona solicitarea.","如果你通过电子邮件或联系表单联系我们，我们会处理你提供的信息以处理你的请求。"]],["privacy.contact.text2",["Für Kontaktformulare kann ein technischer Dienst wie Formspree eingesetzt werden. Dabei können die eingegebenen Daten an diesen Dienst übertragen werden.","A technical service such as Formspree may be used for contact forms. The entered data may therefore be transmitted to that service.","İletişim formları için Formspree gibi teknik bir hizmet kullanılabilir. Girilen veriler bu hizmete aktarılabilir.","Para formularios de contacto puede utilizarse un servicio técnico como Formspree. Los datos introducidos pueden transmitirse a dicho servicio.","Un service technique tel que Formspree peut être utilisé pour les formulaires. Les données saisies peuvent alors être transmises à ce service.","Per i moduli di contatto può essere utilizzato un servizio tecnico come Formspree. I dati inseriti possono quindi essere trasmessi a tale servizio.","Pentru formularele de contact poate fi folosit un serviciu tehnic precum Formspree. Datele introduse pot fi transmise acestui serviciu.","联系表单可能使用 Formspree 等技术服务，输入的数据可能会传输给该服务。"]],["privacy.apps.title",["ZAL’THERA Apps","ZAL’THERA Apps","ZAL’THERA Uygulamaları","Apps ZAL’THERA","Applications ZAL’THERA","App ZAL’THERA","Aplicații ZAL’THERA","ZAL’THERA 应用"]],["privacy.apps.text1",["Daten in ZAL’THERA Anwendungen werden grundsätzlich lokal auf dem jeweiligen Gerät verarbeitet, soweit bei einer Funktion nicht ausdrücklich etwas anderes angegeben wird.","Data in ZAL’THERA applications is generally processed locally on the respective device unless a feature explicitly states otherwise.","ZAL’THERA uygulamalarındaki veriler, bir özellikte aksi açıkça belirtilmedikçe temel olarak ilgili cihazda yerel işlenir.","Los datos de las aplicaciones ZAL’THERA se procesan en principio localmente en el dispositivo, salvo que una función indique expresamente lo contrario.","Les données des applications ZAL’THERA sont en principe traitées localement sur l’appareil, sauf indication explicite contraire d’une fonction.","I dati nelle applicazioni ZAL’THERA vengono generalmente elaborati localmente sul dispositivo, salvo diversa indicazione esplicita di una funzione.","Datele din aplicațiile ZAL’THERA sunt procesate în principal local pe dispozitiv, dacă o funcție nu indică explicit altceva.","ZAL’THERA 应用中的数据原则上在相应设备本地处理，除非某项功能明确说明其他处理方式。"]],["privacy.apps.text2",["Einzelne zukünftige Funktionen können externe Dienste verwenden. In diesem Fall wird die jeweilige Verarbeitung transparent beschrieben.","Individual future features may use external services. In that case, the relevant processing will be described transparently.","Gelecekteki bazı özellikler harici hizmetler kullanabilir. Bu durumda ilgili işleme şeffaf biçimde açıklanır.","Algunas funciones futuras pueden utilizar servicios externos. En ese caso, el tratamiento correspondiente se describirá de forma transparente.","Certaines fonctions futures peuvent utiliser des services externes. Le traitement concerné sera alors décrit de manière transparente.","Alcune funzioni future possono utilizzare servizi esterni. In tal caso il relativo trattamento sarà descritto in modo trasparente.","Unele funcții viitoare pot utiliza servicii externe. În acest caz, prelucrarea va fi descrisă transparent.","未来部分功能可能使用外部服务；届时相关处理会透明说明。"]],["privacy.files.title",["Kamera, Fotos und Dateien","Camera, photos and files","Kamera, fotoğraflar ve dosyalar","Cámara, fotos y archivos","Caméra, photos et fichiers","Fotocamera, foto e file","Cameră, fotografii și fișiere","相机、照片与文件"]],["privacy.files.text",["Wenn eine App Zugriff auf Kamera, Fotos oder Dateien benötigt, erfolgt dieser Zugriff nur im Rahmen der jeweiligen Funktion und nach den Berechtigungen des Betriebssystems.","If an app requires access to the camera, photos or files, that access occurs only for the relevant feature and according to operating-system permissions.","Bir uygulama kamera, fotoğraf veya dosyalara erişim gerektiriyorsa bu erişim yalnızca ilgili özellik kapsamında ve işletim sistemi izinlerine göre gerçekleşir.","Si una app necesita acceso a cámara, fotos o archivos, ese acceso se realiza solo para la función correspondiente y según los permisos del sistema operativo.","Si une application nécessite l’accès à la caméra, aux photos ou aux fichiers, cet accès n’a lieu que pour la fonction concernée et selon les autorisations du système.","Se un’app richiede accesso a fotocamera, foto o file, l’accesso avviene solo per la funzione interessata e secondo i permessi del sistema operativo.","Dacă o aplicație necesită acces la cameră, fotografii sau fișiere, accesul are loc doar pentru funcția respectivă și conform permisiunilor sistemului.","如果应用需要访问相机、照片或文件，该访问仅用于相应功能，并遵循操作系统权限。"]],["privacy.tracking.title",["Tracking und Werbung","Tracking and advertising","Takip ve reklam","Seguimiento y publicidad","Suivi et publicité","Tracciamento e pubblicità","Urmărire și publicitate","跟踪与广告"]],["privacy.tracking.text",["ZAL’THERA verwendet keine werbebasierten Tracking-Systeme, sofern nicht ausdrücklich anders angegeben.","ZAL’THERA does not use advertising-based tracking systems unless explicitly stated otherwise.","ZAL’THERA, açıkça aksi belirtilmedikçe reklam temelli takip sistemleri kullanmaz.","ZAL’THERA no utiliza sistemas de seguimiento publicitario salvo indicación expresa en contrario.","ZAL’THERA n’utilise pas de systèmes de suivi publicitaire sauf indication explicite contraire.","ZAL’THERA non utilizza sistemi di tracciamento pubblicitario salvo diversa indicazione esplicita.","ZAL’THERA nu utilizează sisteme de urmărire bazate pe publicitate, dacă nu se indică explicit altfel.","除非明确另有说明，ZAL’THERA 不使用基于广告的跟踪系统。"]],["privacy.purposes.title",["Zwecke der Verarbeitung","Purposes of processing","İşleme amaçları","Finalidades del tratamiento","Finalités du traitement","Finalità del trattamento","Scopurile prelucrării","处理目的"]],["privacy.purposes.website",["Bereitstellung und Sicherheit der Website","Providing and securing the website","Web sitesinin sunulması ve güvenliği","Prestación y seguridad del sitio web","Fourniture et sécurité du site","Fornitura e sicurezza del sito","Furnizarea și securitatea site-ului","提供与保障网站安全"]],["privacy.purposes.support",["Bearbeitung von Support- und Kontaktanfragen","Handling support and contact requests","Destek ve iletişim taleplerinin işlenmesi","Gestión de solicitudes de soporte y contacto","Traitement des demandes de support et de contact","Gestione delle richieste di supporto e contatto","Gestionarea solicitărilor de suport și contact","处理支持与联系请求"]],["privacy.purposes.features",["Bereitstellung von App-Funktionen","Providing app features","Uygulama özelliklerinin sunulması","Prestación de funciones de la app","Fourniture des fonctions de l’application","Fornitura delle funzioni dell’app","Furnizarea funcțiilor aplicației","提供应用功能"]],["privacy.purposes.storage",["Lokale Speicherung und Verarbeitung, soweit vorgesehen","Local storage and processing where intended","Öngörüldüğü ölçüde yerel depolama ve işleme","Almacenamiento y tratamiento local cuando esté previsto","Stockage et traitement locaux lorsque prévus","Archiviazione ed elaborazione locale ove previste","Stocare și prelucrare locală, unde este prevăzut","按设计进行本地存储与处理"]],["privacy.purposes.improvement",["Technische Stabilität und Verbesserung","Technical stability and improvement","Teknik kararlılık ve geliştirme","Estabilidad técnica y mejora","Stabilité technique et amélioration","Stabilità tecnica e miglioramento","Stabilitate tehnică și îmbunătățire","技术稳定与改进"]],["privacy.legalBasis.title",["Rechtsgrundlagen","Legal bases","Hukuki dayanaklar","Bases jurídicas","Bases légales","Basi giuridiche","Temeiuri juridice","法律依据"]],["privacy.legalBasis.text",["Je nach Verarbeitung kommen insbesondere Art. 6 Abs. 1 lit. b und lit. f DSGVO sowie – sofern erforderlich – eine Einwilligung als Rechtsgrundlage in Betracht.","Depending on the processing, Art. 6(1)(b) and (f) GDPR in particular, and consent where required, may serve as legal bases.","İşlemeye bağlı olarak özellikle GDPR Madde 6(1)(b) ve (f) ile gerektiğinde rıza hukuki dayanak olabilir.","Según el tratamiento, pueden ser aplicables en particular el art. 6.1.b y f del RGPD y, cuando sea necesario, el consentimiento.","Selon le traitement, l’art. 6, par. 1, b et f du RGPD ainsi que, si nécessaire, le consentement peuvent notamment constituer la base légale.","A seconda del trattamento, possono costituire base giuridica in particolare l’art. 6(1)(b) e (f) GDPR e, se necessario, il consenso.","În funcție de prelucrare, în special art. 6 alin. (1) lit. b și f GDPR și, dacă este necesar, consimțământul pot constitui temeiuri juridice.","根据处理情形，GDPR 第 6(1)(b) 与 (f) 条，以及在必要时的同意，可作为相关法律依据。"]],["privacy.storage.title",["Speicherdauer","Storage period","Saklama süresi","Plazo de conservación","Durée de conservation","Periodo di conservazione","Perioada de stocare","存储期限"]],["privacy.storage.text",["Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Pflichten dies verlangen.","Personal data is stored only for as long as necessary for the relevant purpose or as required by law.","Kişisel veriler yalnızca ilgili amaç için gerekli olduğu veya yasal yükümlülükler gerektirdiği süre boyunca saklanır.","Los datos personales se conservan solo mientras sea necesario para la finalidad correspondiente o lo exija la ley.","Les données personnelles ne sont conservées que pendant la durée nécessaire à la finalité concernée ou imposée par la loi.","I dati personali sono conservati solo per il tempo necessario allo scopo pertinente o richiesto dalla legge.","Datele cu caracter personal sunt stocate doar atât timp cât este necesar scopului respectiv sau impus de lege.","个人数据仅在相关目的所需期间或法律要求的期限内保存。"]],["privacy.rights.title",["Deine Rechte","Your rights","Haklarınız","Tus derechos","Vos droits","I tuoi diritti","Drepturile tale","你的权利"]],["privacy.rights.text1",["Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.","Subject to legal requirements, you have rights including access, rectification, erasure, restriction of processing, data portability and objection.","Yasal koşullar çerçevesinde erişim, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz gibi haklara sahipsiniz.","Dentro de los requisitos legales tienes derechos, entre otros, de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición.","Sous réserve des conditions légales, vous disposez notamment de droits d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition.","Nel rispetto dei requisiti legali hai, tra gli altri, diritti di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione.","În condițiile legii ai, printre altele, drepturi de acces, rectificare, ștergere, restricționare, portabilitate și opoziție.","在法律规定条件下，你尤其享有访问、更正、删除、限制处理、数据可携与反对等权利。"]],["privacy.rights.text2",["Außerdem besteht das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.","You also have the right to lodge a complaint with a competent data-protection supervisory authority.","Ayrıca yetkili veri koruma denetim makamına şikâyette bulunma hakkınız vardır.","También tienes derecho a presentar una reclamación ante una autoridad de protección de datos competente.","Vous avez également le droit d’introduire une réclamation auprès d’une autorité de contrôle compétente.","Hai inoltre il diritto di proporre reclamo a un’autorità di controllo competente.","Ai de asemenea dreptul de a depune o plângere la o autoritate competentă de protecție a datelor.","你还有权向有管辖权的数据保护监管机构提出投诉。"]],["privacy.externalLinks.title",["Externe Links","External links","Harici bağlantılar","Enlaces externos","Liens externes","Link esterni","Linkuri externe","外部链接"]],["privacy.externalLinks.text",["Für Inhalte und Datenschutzpraktiken externer Websites gelten die Bestimmungen der jeweiligen Anbieter.","The policies of the respective providers apply to the content and privacy practices of external websites.","Harici web sitelerinin içerik ve gizlilik uygulamaları için ilgili sağlayıcıların hükümleri geçerlidir.","Para el contenido y las prácticas de privacidad de sitios externos se aplican las disposiciones de sus respectivos proveedores.","Les dispositions des fournisseurs concernés s’appliquent au contenu et aux pratiques de confidentialité des sites externes.","Per contenuti e pratiche privacy dei siti esterni si applicano le disposizioni dei rispettivi fornitori.","Pentru conținutul și practicile de confidențialitate ale site-urilor externe se aplică regulile furnizorilor respectivi.","外部网站的内容与隐私实践适用各自提供者的规定。"]],["privacy.actions.home",["Zur Startseite","Back to home","Ana sayfaya dön","Volver al inicio","Retour à l’accueil","Torna alla home","Înapoi acasă","返回首页"]],["terms.hero.eyebrow",["ALLGEMEINE GESCHÄFTSBEDINGUNGEN","TERMS AND CONDITIONS","GENEL ŞARTLAR VE KOŞULLAR","TÉRMINOS Y CONDICIONES","CONDITIONS GÉNÉRALES","TERMINI E CONDIZIONI","TERMENI ȘI CONDIȚII","一般条款与条件"]],["terms.hero.title",["Allgemeine Geschäftsbedingungen (AGB)","Terms and Conditions","Genel Şartlar ve Koşullar","Términos y Condiciones","Conditions Générales","Termini e Condizioni","Termeni și Condiții","一般条款与条件"]],["terms.provider.title",["1. Anbieter","1. Provider","1. Sağlayıcı","1. Proveedor","1. Fournisseur","1. Fornitore","1. Furnizor","1. 提供者"]],["terms.provider.emailLabel",["E-Mail:","Email:","E-posta:","Correo:","E-mail :","E-mail:","E-mail:","电子邮件："]],["terms.subject.title",["2. Vertragsgegenstand","2. Subject of the contract","2. Sözleşmenin konusu","2. Objeto del contrato","2. Objet du contrat","2. Oggetto del contratto","2. Obiectul contractului","2. 合同标的"]],["terms.subject.text",["Gegenstand ist der Verkauf einer digitalen Anwendung („LifeFlow“). Es handelt sich aktuell um eine Vorbestellung. Der Zugriff erfolgt nach Veröffentlichung.","The subject is the sale of a digital application (“LifeFlow”). It is currently a pre-order. Access is provided after publication.","Sözleşmenin konusu dijital bir uygulamanın (“LifeFlow”) satışıdır. Şu anda ön sipariştir. Erişim yayımlandıktan sonra sağlanır.","El objeto es la venta de una aplicación digital (“LifeFlow”). Actualmente se trata de una precompra. El acceso se proporciona tras la publicación.","L’objet est la vente d’une application numérique (« LifeFlow »). Il s’agit actuellement d’une précommande. L’accès est fourni après publication.","Oggetto è la vendita di un’applicazione digitale (“LifeFlow”). Attualmente si tratta di un preordine. L’accesso viene fornito dopo la pubblicazione.","Obiectul este vânzarea unei aplicații digitale („LifeFlow”). În prezent este o precomandă. Accesul este oferit după publicare.","标的是数字应用“LifeFlow”的销售。目前属于预购，发布后提供访问。"]],["terms.contract.title",["3. Vertragsschluss","3. Conclusion of contract","3. Sözleşmenin kurulması","3. Celebración del contrato","3. Conclusion du contrat","3. Conclusione del contratto","3. Încheierea contractului","3. 合同成立"]],["terms.contract.text",["Der Vertrag kommt zustande, sobald die Zahlung über den bereitgestellten Zahlungsanbieter (z. B. PayPal) erfolgt ist.","The contract is concluded once payment has been made through the provided payment provider (e.g. PayPal).","Sözleşme, sağlanan ödeme hizmeti (ör. PayPal) üzerinden ödeme yapıldığında kurulur.","El contrato se celebra cuando se realiza el pago mediante el proveedor de pago facilitado (p. ej., PayPal).","Le contrat est conclu dès que le paiement est effectué via le prestataire de paiement fourni (p. ex. PayPal).","Il contratto si conclude quando il pagamento viene effettuato tramite il fornitore di pagamento messo a disposizione (es. PayPal).","Contractul se încheie odată ce plata este efectuată prin furnizorul de plăți disponibil (de ex. PayPal).","一旦通过提供的支付服务商（例如 PayPal）完成付款，合同即成立。"]],["terms.delivery.title",["4. Lieferung","4. Delivery","4. Teslimat","4. Entrega","4. Livraison","4. Consegna","4. Livrare","4. 交付"]],["terms.delivery.text",["Die Lieferung erfolgt digital. Der Zugang zur Anwendung wird nach Veröffentlichung bereitgestellt. Ein genauer Zeitpunkt kann nicht garantiert werden, erfolgt jedoch so schnell wie möglich.","Delivery is digital. Access to the application is provided after publication. An exact date cannot be guaranteed, but access will be provided as quickly as possible.","Teslimat dijital olarak yapılır. Uygulamaya erişim yayımlandıktan sonra sağlanır. Kesin bir tarih garanti edilemez ancak mümkün olan en kısa sürede sağlanır.","La entrega es digital. El acceso a la aplicación se proporciona tras la publicación. No puede garantizarse una fecha exacta, pero se facilitará lo antes posible.","La livraison est numérique. L’accès à l’application est fourni après publication. Une date précise ne peut être garantie, mais l’accès sera fourni dès que possible.","La consegna è digitale. L’accesso all’applicazione viene fornito dopo la pubblicazione. Non è possibile garantire una data esatta, ma sarà fornito il prima possibile.","Livrarea este digitală. Accesul la aplicație este oferit după publicare. Nu poate fi garantată o dată exactă, dar accesul va fi oferit cât mai repede posibil.","交付以数字方式进行。应用发布后提供访问。无法保证确切时间，但会尽快提供。"]],["terms.prices.title",["5. Preise","5. Prices","5. Fiyatlar","5. Precios","5. Prix","5. Prezzi","5. Prețuri","5. 价格"]],["terms.prices.text",["Alle Preise sind Endpreise. Gemäß §19 UStG wird keine Umsatzsteuer berechnet.","All prices are final prices. No VAT is charged pursuant to §19 UStG.","Tüm fiyatlar nihai fiyatlardır. Alman UStG §19 uyarınca KDV hesaplanmaz.","Todos los precios son finales. Conforme al §19 UStG no se cobra IVA.","Tous les prix sont des prix finaux. Conformément au §19 UStG, aucune TVA n’est facturée.","Tutti i prezzi sono finali. Ai sensi del §19 UStG non viene addebitata IVA.","Toate prețurile sunt finale. Conform §19 UStG nu se percepe TVA.","所有价格均为最终价格。根据德国 UStG 第 19 条，不收取增值税。"]],["terms.license.title",["6. Nutzungsrechte","6. Usage rights","6. Kullanım hakları","6. Derechos de uso","6. Droits d’utilisation","6. Diritti d’uso","6. Drepturi de utilizare","6. 使用权"]],["terms.license.text",["Der Käufer erhält ein einfaches, nicht übertragbares Nutzungsrecht. Weitergabe, Verkauf oder Vervielfältigung der Software ist nicht gestattet.","The buyer receives a simple, non-transferable right of use. Distribution, resale or reproduction of the software is not permitted.","Alıcı basit ve devredilemez bir kullanım hakkı alır. Yazılımın dağıtılması, satılması veya çoğaltılması yasaktır.","El comprador recibe un derecho de uso simple y no transferible. No se permite distribuir, vender o reproducir el software.","L’acheteur reçoit un droit d’utilisation simple et non transférable. La transmission, la revente ou la reproduction du logiciel ne sont pas autorisées.","L’acquirente riceve un diritto d’uso semplice e non trasferibile. Non sono consentiti distribuzione, vendita o riproduzione del software.","Cumpărătorul primește un drept de utilizare simplu, netransferabil. Distribuirea, vânzarea sau reproducerea software-ului nu sunt permise.","购买者获得简单、不可转让的使用权。不得分发、销售或复制软件。"]],["terms.liability.title",["7. Haftung","7. Liability","7. Sorumluluk","7. Responsabilidad","7. Responsabilité","7. Responsabilità","7. Răspundere","7. 责任"]],["terms.liability.text",["Die Nutzung erfolgt auf eigene Verantwortung. Es wird keine Haftung für finanzielle Entscheidungen übernommen, die auf Basis der App getroffen werden.","Use is at your own responsibility. No liability is assumed for financial decisions made on the basis of the app.","Kullanım kendi sorumluluğunuzdadır. Uygulamaya dayanarak alınan finansal kararlar için sorumluluk kabul edilmez.","El uso es bajo propia responsabilidad. No se asume responsabilidad por decisiones financieras tomadas sobre la base de la app.","L’utilisation se fait sous votre propre responsabilité. Aucune responsabilité n’est assumée pour les décisions financières prises sur la base de l’application.","L’utilizzo avviene sotto la propria responsabilità. Non si assume responsabilità per decisioni finanziarie prese sulla base dell’app.","Utilizarea are loc pe propria răspundere. Nu se asumă răspundere pentru decizii financiare luate pe baza aplicației.","使用由用户自行负责。对于基于该应用做出的财务决定，不承担责任。"]],["terms.final.title",["8. Schlussbestimmungen","8. Final provisions","8. Son hükümler","8. Disposiciones finales","8. Dispositions finales","8. Disposizioni finali","8. Dispoziții finale","8. 最终条款"]],["terms.final.text",["Es gilt deutsches Recht.","German law applies.","Alman hukuku uygulanır.","Se aplica el derecho alemán.","Le droit allemand s’applique.","Si applica il diritto tedesco.","Se aplică dreptul german.","适用德国法律。"]],["terms.actions.home",["Zur Startseite","Back to home","Ana sayfaya dön","Volver al inicio","Retour à l’accueil","Torna alla home","Înapoi acasă","返回首页"]],["withdrawal.hero.eyebrow",["WIDERRUF","WITHDRAWAL","CAYMA","DESISTIMIENTO","RÉTRACTATION","RECESSO","RETRAGERE","撤销"]],["withdrawal.hero.title",["Widerrufsbelehrung","Withdrawal Policy","Cayma Hakkı Bilgilendirmesi","Información sobre desistimiento","Information sur le droit de rétractation","Informativa sul recesso","Informare privind retragerea","撤销权说明"]],["withdrawal.right.title",["Widerrufsrecht","Right of withdrawal","Cayma hakkı","Derecho de desistimiento","Droit de rétractation","Diritto di recesso","Drept de retragere","撤销权"]],["withdrawal.right.text1",["Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.","You have the right to withdraw from this contract within fourteen days without giving any reason.","On dört gün içinde herhangi bir gerekçe göstermeden bu sözleşmeden cayma hakkınız vardır.","Tienes derecho a desistir de este contrato en un plazo de catorce días sin indicar motivo.","Vous avez le droit de vous rétracter de ce contrat dans un délai de quatorze jours sans indiquer de motif.","Hai il diritto di recedere dal presente contratto entro quattordici giorni senza indicarne il motivo.","Ai dreptul să te retragi din acest contract în termen de paisprezece zile fără a indica un motiv.","你有权在十四天内无须说明理由撤销本合同。"]],["withdrawal.right.text2",["Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.","The withdrawal period is fourteen days from the day the contract is concluded.","Cayma süresi sözleşmenin kurulduğu günden itibaren on dört gündür.","El plazo de desistimiento es de catorce días desde la celebración del contrato.","Le délai de rétractation est de quatorze jours à compter de la conclusion du contrat.","Il termine di recesso è di quattordici giorni dalla conclusione del contratto.","Perioada de retragere este de paisprezece zile de la data încheierii contractului.","撤销期限为合同成立之日起十四天。"]],["withdrawal.right.text3",["Um dein Widerrufsrecht auszuüben, musst du uns (Patrick Walker, contact@zalthera.de) mittels einer eindeutigen Erklärung (z. B. E-Mail) über deinen Entschluss informieren.","To exercise your right of withdrawal, you must inform us (Patrick Walker, contact@zalthera.de) of your decision by means of a clear statement (e.g. email).","Cayma hakkınızı kullanmak için kararınızı açık bir beyanla (ör. e-posta) bize (Patrick Walker, contact@zalthera.de) bildirmeniz gerekir.","Para ejercer tu derecho de desistimiento debes informarnos (Patrick Walker, contact@zalthera.de) de tu decisión mediante una declaración inequívoca (p. ej., correo electrónico).","Pour exercer votre droit de rétractation, vous devez nous informer (Patrick Walker, contact@zalthera.de) de votre décision au moyen d’une déclaration claire (p. ex. e-mail).","Per esercitare il diritto di recesso devi informarci (Patrick Walker, contact@zalthera.de) della tua decisione mediante una dichiarazione esplicita (ad es. e-mail).","Pentru a-ți exercita dreptul de retragere trebuie să ne informezi (Patrick Walker, contact@zalthera.de) despre decizie printr-o declarație clară (de ex. e-mail).","为行使撤销权，你必须通过明确声明（例如电子邮件）通知我们（Patrick Walker, contact@zalthera.de）你的决定。"]],["withdrawal.consequences.title",["Folgen des Widerrufs","Consequences of withdrawal","Caymanın sonuçları","Consecuencias del desistimiento","Conséquences de la rétractation","Conseguenze del recesso","Consecințele retragerii","撤销后果"]],["withdrawal.consequences.text",["Wenn du diesen Vertrag widerrufst, werden alle Zahlungen unverzüglich zurückerstattet.","If you withdraw from this contract, all payments will be refunded without undue delay.","Bu sözleşmeden cayarsanız tüm ödemeler gecikmeksizin iade edilir.","Si desistes de este contrato, todos los pagos serán reembolsados sin demora indebida.","Si vous vous rétractez de ce contrat, tous les paiements seront remboursés sans retard injustifié.","Se recedi dal contratto, tutti i pagamenti saranno rimborsati senza indebito ritardo.","Dacă te retragi din acest contract, toate plățile vor fi rambursate fără întârzieri nejustificate.","如果你撤销本合同，所有付款将及时退还。"]],["withdrawal.notice.title",["Besonderer Hinweis","Special notice","Özel not","Aviso especial","Remarque particulière","Avviso speciale","Notă specială","特别说明"]],["withdrawal.notice.text",["Bei digitalen Produkten kann das Widerrufsrecht erlöschen, sobald der Zugriff auf die Anwendung bereitgestellt wurde und die Nutzung beginnt.","For digital products, the right of withdrawal may expire once access to the application has been provided and use begins.","Dijital ürünlerde, uygulamaya erişim sağlanıp kullanım başladığında cayma hakkı sona erebilir.","En productos digitales, el derecho de desistimiento puede extinguirse una vez facilitado el acceso a la aplicación y comenzado su uso.","Pour les produits numériques, le droit de rétractation peut s’éteindre dès que l’accès à l’application est fourni et que l’utilisation commence.","Per i prodotti digitali, il diritto di recesso può decadere una volta fornito l’accesso all’applicazione e iniziato l’utilizzo.","Pentru produsele digitale, dreptul de retragere poate înceta odată ce accesul la aplicație este furnizat și utilizarea începe.","对于数字产品，一旦提供应用访问并开始使用，撤销权可能终止。"]],["withdrawal.actions.home",["Zur Startseite","Back to home","Ana sayfaya dön","Volver al inicio","Retour à l’accueil","Torna alla home","Înapoi acasă","返回首页"]]];

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

  let currentLanguage =
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
            ✓
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

