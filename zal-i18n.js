/* ============================================================
   ZAL’THERA WEBSITE
   INTERNATIONALIZATION LAYER v1.4

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
     IMPORTANT:
     HOME TRANSLATION FALLBACK FOR TR / ES / FR / IT / RO / ZH

     The existing homepage translations from the previous version
     remain available by inheriting the English dictionary for keys
     that have not yet been duplicated in this file.
     ============================================================ */

  const HOME_COPY_FROM_ENGLISH = [
    "home.hero.kicker",
    "home.hero.title",
    "home.hero.description",
    "home.hero.primary",
    "home.hero.core",

    "home.state.label",
    "home.state.identity",
    "home.state.continuity",
    "home.state.intelligence",
    "home.state.communication",
    "home.state.industry",
    "home.state.proof",
    "home.state.core",
    "home.state.active",
    "home.state.architecture",
    "home.state.module",

    "home.system.eyebrow",
    "home.system.title",
    "home.system.lead",
    "home.system.identity.title",
    "home.system.identity.text",
    "home.system.context.title",
    "home.system.context.text",
    "home.system.intelligence.title",
    "home.system.intelligence.text",
    "home.system.trust.title",
    "home.system.trust.text",
    "home.system.action.title",
    "home.system.action.text",
    "home.system.principle",
    "home.system.principleText",
    "home.system.openArchitecture",

    "home.continuity.eyebrow",
    "home.continuity.status",
    "home.continuity.tagline",
    "home.continuity.text1",
    "home.continuity.text2",
    "home.continuity.documents",
    "home.continuity.cards",
    "home.continuity.timeline",
    "home.continuity.finance",
    "home.continuity.context",
    "home.continuity.audit",

    "home.intelligence.eyebrow",
    "home.intelligence.status",
    "home.intelligence.title",
    "home.intelligence.tagline",
    "home.intelligence.text1",
    "home.intelligence.text2",

    "home.communication.eyebrow",
    "home.communication.status",
    "home.communication.title",
    "home.communication.tagline",
    "home.communication.text1",
    "home.communication.text2",
    "home.communication.voice",
    "home.communication.video",
    "home.communication.files",
    "home.communication.trust",
    "home.communication.consent",
    "home.communication.connectionRule",

    "home.industry.eyebrow",
    "home.industry.status",
    "home.industry.title",
    "home.industry.tagline",
    "home.industry.text",
    "home.industry.shift",
    "home.industry.gate",
    "home.industry.process",

    "home.proof.eyebrow",
    "home.proof.title",
    "home.proof.text",
    "home.proof.open",

    "home.products.eyebrow",
    "home.products.title",
    "home.products.lead",
    "home.products.lifeflow",
    "home.products.continuity",
    "home.products.proofflow",
    "home.products.shiftlog",
    "home.products.voicebridge",
    "home.products.zalgate",
    "home.products.open",
    "home.products.viewSystem",
    "home.products.viewDevelopment",
    "home.products.viewArchitecture",

    "home.pilot.eyebrow",
    "home.pilot.title",
    "home.pilot.text",
    "home.pilot.discover",
    "home.pilot.request",

    "home.core.eyebrow",
    "home.core.title",
    "home.core.text",
    "home.core.discover",

    "home.contact.eyebrow",
    "home.contact.title",
    "home.contact.text",
    "home.contact.name",
    "home.contact.namePlaceholder",
    "home.contact.email",
    "home.contact.emailPlaceholder",
    "home.contact.message",
    "home.contact.messagePlaceholder",
    "home.contact.send",
    "home.contact.privacyPrefix",
    "home.contact.privacy"
  ];


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
