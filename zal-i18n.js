/* ============================================================
   ZAL’THERA WEBSITE
   INTERNATIONALIZATION LAYER v1.2

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
     TRANSLATIONS
     ============================================================ */

  const translations = {


    /* ==========================================================
       DEUTSCH
       ========================================================== */

    de: {

      /* Navigation */

      "nav.system": "System",
      "nav.continuity": "CONTINUITY",
      "nav.intelligence": "Intelligence",
      "nav.communication": "Communication",
      "nav.industry": "Industry",
      "nav.products": "Products",
      "nav.about": "About",


      /* Global */

      "global.explore": "Explore",
      "global.open": "Öffnen",
      "global.close": "Schließen",
      "global.discover": "Entdecken",
      "global.learnMore": "Mehr erfahren",
      "global.support": "Support",
      "global.contact": "Kontakt",

      "global.available": "VERFÜGBAR",
      "global.development": "ENTWICKLUNG",
      "global.systemModule": "SYSTEMMODUL",
      "global.architecture": "ARCHITEKTUR",


      /* Search */

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

      "search.navigate":
        "Navigieren",

      "search.open":
        "Öffnen",

      "search.close":
        "Schließen",


      /* Language */

      "language.label":
        "Sprache",

      "language.select":
        "Sprache auswählen",

      "language.current":
        "Aktuelle Sprache",


      /* Hero */

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


      /* System State */

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


      /* One System */

      "home.system.eyebrow":
        "EIN SYSTEM",

      "home.system.title":
        "Technologie beginnt nicht mit einer App.",

      "home.system.lead":
        "Sie beginnt mit einer gemeinsamen Logik dafür, wer handelt, was verstanden wird, wem vertraut werden darf und welche Aktion tatsächlich ausgeführt werden kann.",

      "home.system.identity.title":
        "Identity",

      "home.system.identity.text":
        "Wer oder welches autorisierte System handelt?",

      "home.system.context.title":
        "Context",

      "home.system.context.text":
        "In welchem Zusammenhang existieren Information und Handlung?",

      "home.system.intelligence.title":
        "Intelligence",

      "home.system.intelligence.text":
        "Was lässt sich aus dem vorhandenen Kontext verstehen?",

      "home.system.trust.title":
        "Trust",

      "home.system.trust.text":
        "Was ist erlaubt, belegbar und überprüfbar?",

      "home.system.action.title":
        "Action",

      "home.system.action.text":
        "Was darf tatsächlich ausgeführt werden?",

      "home.system.principle":
        "KERNPRINZIP",

      "home.system.principleText":
        "Erst verstehen. Dann vorbereiten. Nur mit Erlaubnis handeln.",

      "home.system.openArchitecture":
        "Architektur öffnen",


      /* CONTINUITY */

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

      "home.continuity.documents":
        "Dokumente",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finanzen",

      "home.continuity.context":
        "Kontext",

      "home.continuity.audit":
        "Audit",


      /* Intelligence */

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


      /* Communication */

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

      "home.communication.voice":
        "SPRACHE",

      "home.communication.video":
        "VIDEO",

      "home.communication.files":
        "DATEIEN",

      "home.communication.trust":
        "VERTRAUEN",

      "home.communication.consent":
        "ZUSTIMMUNG",

      "home.communication.connectionRule":
        "ZUSTIMMUNG VOR VERBINDUNG",


      /* Industry */

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


      /* Proof */

      "home.proof.eyebrow":
        "NACHWEIS & VERTRAUEN",

      "home.proof.title":
        "Nachweis vor Annahme.",

      "home.proof.text":
        "ProofFlow verbindet Aufgaben, Nachweise, Fotos, Notizen, Signaturen, Audit und Export zu einem nachvollziehbaren Ablauf.",

      "home.proof.open":
        "ProofFlow öffnen",


      /* Portfolio */

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

      "home.products.open":
        "Öffnen →",

      "home.products.viewSystem":
        "System ansehen →",

      "home.products.viewDevelopment":
        "Entwicklung ansehen →",

      "home.products.viewArchitecture":
        "Architektur →",


      /* Pilot */

      "home.pilot.eyebrow":
        "KONTROLLIERTER EINSTIEG IN DIE REALE WELT",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Einen klar abgegrenzten realen Prozess verstehen, kontrolliert testen und den tatsächlichen Nutzen prüfen – ohne den bestehenden Betrieb sofort vollständig zu ersetzen.",

      "home.pilot.discover":
        "Pilot entdecken",

      "home.pilot.request":
        "Pilot anfragen",


      /* Core */

      "home.core.eyebrow":
        "UNTER JEDEM SYSTEM",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausführung bilden den technischen Kern hinter dem Ökosystem.",

      "home.core.discover":
        "Core entdecken",


      /* Contact */

      "home.contact.eyebrow":
        "KONTAKT",

      "home.contact.title":
        "ZAL’THERA kontaktieren",

      "home.contact.text":
        "Fragen zu ZAL’THERA, einem System oder bestehenden Modulen?",

      "home.contact.name":
        "Name",

      "home.contact.namePlaceholder":
        "Dein Name",

      "home.contact.email":
        "E-Mail",

      "home.contact.emailPlaceholder":
        "deine@email.de",

      "home.contact.message":
        "Nachricht",

      "home.contact.messagePlaceholder":
        "Deine Nachricht …",

      "home.contact.send":
        "Senden",

      "home.contact.privacyPrefix":
        "Mit dem Absenden akzeptierst du unsere",

      "home.contact.privacy":
        "Datenschutzerklärung",

      "footer.imprint":
        "Impressum",

      "footer.privacy":
        "Datenschutz"

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
      "language.select": "Select language",
      "language.current": "Current language",

      "home.hero.kicker":
        "SOVEREIGN DIGITAL ARCHITECTURE",

      "home.hero.title":
        "One system.<br>One identity.<br>Connected intelligence.",

      "home.hero.description":
        "ZAL’THERA connects identity, context, artificial intelligence, data, trust, communication and real-world processes within one shared technological architecture.",

      "home.hero.primary":
        "Explore the system",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "SYSTEM STATE",

      "home.state.identity":
        "IDENTITY",

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
        "ACTIVE DEVELOPMENT",

      "home.state.architecture":
        "ARCHITECTURE",

      "home.state.module":
        "SYSTEM MODULE",

      "home.system.eyebrow":
        "ONE SYSTEM",

      "home.system.title":
        "Technology does not begin with an app.",

      "home.system.lead":
        "It begins with a shared logic for who acts, what is understood, who may be trusted and which action may actually be executed.",

      "home.system.identity.title":
        "Identity",

      "home.system.identity.text":
        "Who or which authorized system is acting?",

      "home.system.context.title":
        "Context",

      "home.system.context.text":
        "Within which context do information and action exist?",

      "home.system.intelligence.title":
        "Intelligence",

      "home.system.intelligence.text":
        "What can be understood from the available context?",

      "home.system.trust.title":
        "Trust",

      "home.system.trust.text":
        "What is permitted, evidenced and verifiable?",

      "home.system.action.title":
        "Action",

      "home.system.action.text":
        "What may actually be executed?",

      "home.system.principle":
        "CORE PRINCIPLE",

      "home.system.principleText":
        "Understand first. Prepare second. Act only with permission.",

      "home.system.openArchitecture":
        "Open architecture",

      "home.continuity.eyebrow":
        "PERSONAL SOVEREIGN SYSTEM",

      "home.continuity.status":
        "ACTIVE DEVELOPMENT",

      "home.continuity.tagline":
        "Your life context. Structured. Connected. Understandable.",

      "home.continuity.text1":
        "CONTINUITY connects personal documents, data, Cards, Timeline, finances, evidence and context within a sovereign personal environment.",

      "home.continuity.text2":
        "Information does not remain isolated in files. It receives context, provenance, temporal meaning and a traceable position within the personal system.",

      "home.continuity.documents":
        "Documents",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finance",

      "home.continuity.context":
        "Context",

      "home.continuity.audit":
        "Audit",

      "home.intelligence.eyebrow":
        "CONTEXTUAL INTELLIGENCE",

      "home.intelligence.status":
        "ACTIVE DEVELOPMENT",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Intelligence that knows its limits.",

      "home.intelligence.text1":
        "The intelligence layer does not operate independently of the human. It understands available context, identifies relationships, explains information and prepares possible actions.",

      "home.intelligence.text2":
        "Consequential actions remain bound to authorization, context and human approval.",

      "home.communication.eyebrow":
        "IDENTITY-TO-IDENTITY",

      "home.communication.status":
        "ACTIVE DEVELOPMENT",

      "home.communication.title":
        "Communication",

      "home.communication.tagline":
        "Connection begins with identity and consent.",

      "home.communication.text1":
        "ZAL’THERA Communication is developing a secure communication layer between authorized identities.",

      "home.communication.text2":
        "Voice, later video, files and trust-based delivery are defined not through public profiles, but through identity, relationship and authorization.",

      "home.communication.voice":
        "VOICE",

      "home.communication.video":
        "VIDEO",

      "home.communication.files":
        "FILES",

      "home.communication.trust":
        "TRUST",

      "home.communication.consent":
        "CONSENT",

      "home.communication.connectionRule":
        "CONSENT BEFORE CONNECTION",

      "home.industry.eyebrow":
        "REAL-WORLD SYSTEMS",

      "home.industry.status":
        "DEVELOPMENT & ARCHITECTURE",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Real processes become understandable systems.",

      "home.industry.text":
        "The industrial layer connects operational handovers, process states, sensor data, measurements and future machine integrations.",

      "home.industry.shift":
        "Shift handover & operational states",

      "home.industry.gate":
        "Sensors, measurements & machine processes",

      "home.industry.process":
        "Analysis & traceable process states",

      "home.proof.eyebrow":
        "PROOF & TRUST",

      "home.proof.title":
        "Evidence before assumption.",

      "home.proof.text":
        "ProofFlow connects tasks, evidence, photos, notes, signatures, audit and export into one traceable workflow.",

      "home.proof.open":
        "Open ProofFlow",

      "home.products.eyebrow":
        "SYSTEM PORTFOLIO",

      "home.products.title":
        "One ecosystem. Different levels of maturity.",

      "home.products.lead":
        "ZAL’THERA clearly distinguishes between available products, active development, system modules and future architecture.",

      "home.products.lifeflow":
        "Costs, contracts, deadlines and personal financial clarity.",

      "home.products.continuity":
        "A sovereign personal environment for documents, data, context and intelligence.",

      "home.products.proofflow":
        "Evidence, audit, signatures and verifiable workflows.",

      "home.products.shiftlog":
        "Digital shift handover for operational states and responsibilities.",

      "home.products.voicebridge":
        "Development of a trust-based direct voice connection between authorized identities.",

      "home.products.zalgate":
        "Architecture connecting sensors, measurements, machines and process states.",

      "home.products.open":
        "Open →",

      "home.products.viewSystem":
        "View system →",

      "home.products.viewDevelopment":
        "View development →",

      "home.products.viewArchitecture":
        "Architecture →",

      "home.pilot.eyebrow":
        "CONTROLLED REAL-WORLD ENTRY",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Understand a clearly defined real-world process, test it under controlled conditions and evaluate its actual value without immediately replacing the existing operation.",

      "home.pilot.discover":
        "Explore Pilot",

      "home.pilot.request":
        "Request Pilot",

      "home.core.eyebrow":
        "BENEATH EVERY SYSTEM",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust and controlled execution form the technical foundation beneath the ecosystem.",

      "home.core.discover":
        "Explore Core",

      "home.contact.eyebrow":
        "CONTACT",

      "home.contact.title":
        "Contact ZAL’THERA",

      "home.contact.text":
        "Questions about ZAL’THERA, a system or an existing module?",

      "home.contact.name":
        "Name",

      "home.contact.namePlaceholder":
        "Your name",

      "home.contact.email":
        "Email",

      "home.contact.emailPlaceholder":
        "your@email.com",

      "home.contact.message":
        "Message",

      "home.contact.messagePlaceholder":
        "Your message …",

      "home.contact.send":
        "Send",

      "home.contact.privacyPrefix":
        "By submitting, you accept our",

      "home.contact.privacy":
        "Privacy Policy",

      "footer.imprint":
        "Legal notice",

      "footer.privacy":
        "Privacy"

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

      "search.label": "ZAL SEARCH",
      "search.title": "Sistemi keşfet",
      "search.placeholder": "Sistem, ürün veya alan ara …",
      "search.quickAccess": "HIZLI ERİŞİM",
      "search.noResults": "Sistem alanı bulunamadı.",
      "search.noResultsHint": "Örneğin “CONTINUITY”, “Pilot”, “Voice”, “Shift” veya “Finance” aramayı dene.",
      "search.navigate": "Gezin",
      "search.open": "Aç",
      "search.close": "Kapat",

      "language.label": "Dil",
      "language.select": "Dil seç",
      "language.current": "Mevcut dil",

      "home.hero.kicker":
        "EGEMEN DİJİTAL MİMARİ",

      "home.hero.title":
        "Tek sistem.<br>Tek kimlik.<br>Bağlantılı zekâ.",

      "home.hero.description":
        "ZAL’THERA; kimliği, bağlamı, yapay zekâyı, verileri, güveni, iletişimi ve gerçek süreçleri ortak bir teknolojik mimaride birleştirir.",

      "home.hero.primary":
        "Sistemi keşfet",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "SİSTEM DURUMU",

      "home.state.identity":
        "KİMLİK",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "ZEKÂ",

      "home.state.communication":
        "İLETİŞİM",

      "home.state.industry":
        "ENDÜSTRİ",

      "home.state.proof":
        "KANIT",

      "home.state.core":
        "CORE",

      "home.state.active":
        "AKTİF GELİŞTİRME",

      "home.state.architecture":
        "MİMARİ",

      "home.state.module":
        "SİSTEM MODÜLÜ",

      "home.system.eyebrow":
        "TEK SİSTEM",

      "home.system.title":
        "Teknoloji bir uygulamayla başlamaz.",

      "home.system.lead":
        "Kim hareket eder, ne anlaşılır, kime güvenilebilir ve hangi eylemin gerçekten uygulanabileceğini belirleyen ortak bir mantıkla başlar.",

      "home.system.identity.title":
        "Kimlik",

      "home.system.identity.text":
        "Kim veya hangi yetkili sistem hareket ediyor?",

      "home.system.context.title":
        "Bağlam",

      "home.system.context.text":
        "Bilgi ve eylem hangi bağlam içinde bulunuyor?",

      "home.system.intelligence.title":
        "Zekâ",

      "home.system.intelligence.text":
        "Mevcut bağlamdan ne anlaşılabilir?",

      "home.system.trust.title":
        "Güven",

      "home.system.trust.text":
        "Neye izin veriliyor, ne kanıtlanabilir ve doğrulanabilir?",

      "home.system.action.title":
        "Eylem",

      "home.system.action.text":
        "Gerçekte hangi eylem uygulanabilir?",

      "home.system.principle":
        "TEMEL İLKE",

      "home.system.principleText":
        "Önce anla. Sonra hazırla. Yalnızca izinle harekete geç.",

      "home.system.openArchitecture":
        "Mimariyi aç",

      "home.continuity.eyebrow":
        "KİŞİSEL EGEMEN SİSTEM",

      "home.continuity.status":
        "AKTİF GELİŞTİRME",

      "home.continuity.tagline":
        "Yaşam bağlamın. Düzenli. Bağlantılı. Anlaşılır.",

      "home.continuity.text1":
        "CONTINUITY; kişisel belgeleri, verileri, Cards yapısını, Timeline'ı, finansı, kanıtları ve bağlamı egemen bir kişisel ortamda birleştirir.",

      "home.continuity.text2":
        "Bilgiler izole dosyalar olarak kalmaz. Bağlam, kaynak, zaman ilişkisi ve kişisel sistem içinde izlenebilir bir konum kazanır.",

      "home.continuity.documents":
        "Belgeler",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finans",

      "home.continuity.context":
        "Bağlam",

      "home.continuity.audit":
        "Denetim",

      "home.intelligence.eyebrow":
        "BAĞLAMSAL ZEKÂ",

      "home.intelligence.status":
        "AKTİF GELİŞTİRME",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Sınırlarını bilen zekâ.",

      "home.intelligence.text1":
        "Zekâ katmanı insandan bağımsız çalışmaz. Mevcut bağlamı anlar, ilişkileri fark eder, bilgileri açıklar ve olası eylemleri hazırlar.",

      "home.intelligence.text2":
        "Sonuç doğuran eylemler yetki, bağlam ve insan onayına bağlı kalır.",

      "home.communication.eyebrow":
        "KİMLİKTEN KİMLİĞE",

      "home.communication.status":
        "AKTİF GELİŞTİRME",

      "home.communication.title":
        "İletişim",

      "home.communication.tagline":
        "Bağlantı kimlik ve onayla başlar.",

      "home.communication.text1":
        "ZAL’THERA Communication, yetkili kimlikler arasında güvenli bir iletişim katmanı geliştirir.",

      "home.communication.text2":
        "Ses, daha sonra video, dosyalar ve güvene dayalı teslimat; herkese açık profiller yerine kimlik, ilişki ve yetki üzerinden tanımlanır.",

      "home.communication.voice":
        "SES",

      "home.communication.video":
        "VİDEO",

      "home.communication.files":
        "DOSYALAR",

      "home.communication.trust":
        "GÜVEN",

      "home.communication.consent":
        "ONAY",

      "home.communication.connectionRule":
        "BAĞLANTIDAN ÖNCE ONAY",

      "home.industry.eyebrow":
        "GERÇEK DÜNYA SİSTEMLERİ",

      "home.industry.status":
        "GELİŞTİRME & MİMARİ",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Gerçek süreçler anlaşılır sistemlere dönüşür.",

      "home.industry.text":
        "Endüstriyel katman; operasyonel devirleri, süreç durumlarını, sensör verilerini, ölçümleri ve gelecekteki makine bağlantılarını birleştirir.",

      "home.industry.shift":
        "Vardiya devri & operasyonel durumlar",

      "home.industry.gate":
        "Sensörler, ölçümler & makine süreçleri",

      "home.industry.process":
        "Analiz & izlenebilir süreç durumları",

      "home.proof.eyebrow":
        "KANIT & GÜVEN",

      "home.proof.title":
        "Varsayımdan önce kanıt.",

      "home.proof.text":
        "ProofFlow; görevleri, kanıtları, fotoğrafları, notları, imzaları, denetimi ve dışa aktarmayı izlenebilir tek bir akışta birleştirir.",

      "home.proof.open":
        "ProofFlow'u aç",

      "home.products.eyebrow":
        "SİSTEM PORTFÖYÜ",

      "home.products.title":
        "Tek ekosistem. Farklı olgunluk seviyeleri.",

      "home.products.lead":
        "ZAL’THERA; mevcut ürünleri, aktif geliştirmeleri, sistem modüllerini ve gelecekteki mimariyi açıkça birbirinden ayırır.",

      "home.products.lifeflow":
        "Maliyetler, sözleşmeler, son tarihler ve kişisel finans görünümü.",

      "home.products.continuity":
        "Belgeler, veriler, bağlam ve zekâ için egemen kişisel ortam.",

      "home.products.proofflow":
        "Kanıt, denetim, imza ve doğrulanabilir iş akışları.",

      "home.products.shiftlog":
        "Operasyonel durumlar ve sorumluluklar için dijital vardiya devri.",

      "home.products.voicebridge":
        "Yetkili kimlikler arasında güvene dayalı doğrudan ses bağlantısının geliştirilmesi.",

      "home.products.zalgate":
        "Sensörleri, ölçümleri, makineleri ve süreç durumlarını bağlayan mimari.",

      "home.products.open":
        "Aç →",

      "home.products.viewSystem":
        "Sistemi görüntüle →",

      "home.products.viewDevelopment":
        "Geliştirmeyi görüntüle →",

      "home.products.viewArchitecture":
        "Mimari →",

      "home.pilot.eyebrow":
        "KONTROLLÜ GERÇEK DÜNYA GİRİŞİ",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Açıkça sınırlandırılmış gerçek bir süreci anlayın, kontrollü biçimde test edin ve mevcut operasyonu hemen tamamen değiştirmeden gerçek değerini değerlendirin.",

      "home.pilot.discover":
        "Pilotu keşfet",

      "home.pilot.request":
        "Pilot talep et",

      "home.core.eyebrow":
        "HER SİSTEMİN ALTINDA",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust ve kontrollü yürütme ekosistemin teknik temelini oluşturur.",

      "home.core.discover":
        "Core'u keşfet",

      "home.contact.eyebrow":
        "İLETİŞİM",

      "home.contact.title":
        "ZAL’THERA ile iletişime geç",

      "home.contact.text":
        "ZAL’THERA, bir sistem veya mevcut bir modül hakkında sorunuz mu var?",

      "home.contact.name":
        "Ad",

      "home.contact.namePlaceholder":
        "Adınız",

      "home.contact.email":
        "E-posta",

      "home.contact.emailPlaceholder":
        "adiniz@email.com",

      "home.contact.message":
        "Mesaj",

      "home.contact.messagePlaceholder":
        "Mesajınız …",

      "home.contact.send":
        "Gönder",

      "home.contact.privacyPrefix":
        "Göndererek şunları kabul etmiş olursunuz:",

      "home.contact.privacy":
        "Gizlilik Politikası",

      "footer.imprint":
        "Yasal bilgiler",

      "footer.privacy":
        "Gizlilik"

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

      "search.label": "ZAL SEARCH",
      "search.title": "Explora el sistema",
      "search.placeholder": "Buscar sistema, producto o área …",
      "search.quickAccess": "ACCESO RÁPIDO",
      "search.noResults": "No se encontró ningún área del sistema.",
      "search.noResultsHint": "Prueba con “CONTINUITY”, “Pilot”, “Voice”, “Shift” o “Finance”.",
      "search.navigate": "Navegar",
      "search.open": "Abrir",
      "search.close": "Cerrar",

      "language.label": "Idioma",
      "language.select": "Seleccionar idioma",
      "language.current": "Idioma actual",

      "home.hero.kicker":
        "ARQUITECTURA DIGITAL SOBERANA",

      "home.hero.title":
        "Un sistema.<br>Una identidad.<br>Inteligencia conectada.",

      "home.hero.description":
        "ZAL’THERA conecta identidad, contexto, inteligencia artificial, datos, confianza, comunicación y procesos del mundo real dentro de una arquitectura tecnológica común.",

      "home.hero.primary":
        "Explorar el sistema",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "ESTADO DEL SISTEMA",

      "home.state.identity":
        "IDENTIDAD",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "INTELIGENCIA",

      "home.state.communication":
        "COMUNICACIÓN",

      "home.state.industry":
        "INDUSTRIA",

      "home.state.proof":
        "PRUEBA",

      "home.state.core":
        "CORE",

      "home.state.active":
        "DESARROLLO ACTIVO",

      "home.state.architecture":
        "ARQUITECTURA",

      "home.state.module":
        "MÓDULO DEL SISTEMA",

      "home.system.eyebrow":
        "UN SISTEMA",

      "home.system.title":
        "La tecnología no comienza con una aplicación.",

      "home.system.lead":
        "Comienza con una lógica compartida que define quién actúa, qué se entiende, en quién se puede confiar y qué acción puede ejecutarse realmente.",

      "home.system.identity.title":
        "Identidad",

      "home.system.identity.text":
        "¿Quién o qué sistema autorizado está actuando?",

      "home.system.context.title":
        "Contexto",

      "home.system.context.text":
        "¿En qué contexto existen la información y la acción?",

      "home.system.intelligence.title":
        "Inteligencia",

      "home.system.intelligence.text":
        "¿Qué puede entenderse a partir del contexto disponible?",

      "home.system.trust.title":
        "Confianza",

      "home.system.trust.text":
        "¿Qué está permitido, documentado y verificable?",

      "home.system.action.title":
        "Acción",

      "home.system.action.text":
        "¿Qué puede ejecutarse realmente?",

      "home.system.principle":
        "PRINCIPIO CENTRAL",

      "home.system.principleText":
        "Primero comprender. Después preparar. Actuar solo con permiso.",

      "home.system.openArchitecture":
        "Abrir arquitectura",

      "home.continuity.eyebrow":
        "SISTEMA PERSONAL SOBERANO",

      "home.continuity.status":
        "DESARROLLO ACTIVO",

      "home.continuity.tagline":
        "El contexto de tu vida. Estructurado. Conectado. Comprensible.",

      "home.continuity.text1":
        "CONTINUITY conecta documentos personales, datos, Cards, Timeline, finanzas, evidencias y contexto dentro de un entorno personal soberano.",

      "home.continuity.text2":
        "La información no queda aislada en archivos. Recibe contexto, procedencia, referencia temporal y una posición trazable dentro del sistema personal.",

      "home.continuity.documents":
        "Documentos",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finanzas",

      "home.continuity.context":
        "Contexto",

      "home.continuity.audit":
        "Auditoría",

      "home.intelligence.eyebrow":
        "INTELIGENCIA CONTEXTUAL",

      "home.intelligence.status":
        "DESARROLLO ACTIVO",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Inteligencia que conoce sus límites.",

      "home.intelligence.text1":
        "La capa de inteligencia no funciona separada del ser humano. Comprende el contexto disponible, identifica relaciones, explica información y prepara posibles acciones.",

      "home.intelligence.text2":
        "Las acciones con consecuencias permanecen vinculadas a autorización, contexto y aprobación humana.",

      "home.communication.eyebrow":
        "IDENTIDAD A IDENTIDAD",

      "home.communication.status":
        "DESARROLLO ACTIVO",

      "home.communication.title":
        "Comunicación",

      "home.communication.tagline":
        "La conexión comienza con identidad y consentimiento.",

      "home.communication.text1":
        "ZAL’THERA Communication desarrolla una capa de comunicación segura entre identidades autorizadas.",

      "home.communication.text2":
        "La voz, posteriormente el vídeo, los archivos y la entrega basada en confianza se definen por identidad, relación y autorización, no por perfiles públicos.",

      "home.communication.voice":
        "VOZ",

      "home.communication.video":
        "VÍDEO",

      "home.communication.files":
        "ARCHIVOS",

      "home.communication.trust":
        "CONFIANZA",

      "home.communication.consent":
        "CONSENTIMIENTO",

      "home.communication.connectionRule":
        "CONSENTIMIENTO ANTES DE CONECTAR",

      "home.industry.eyebrow":
        "SISTEMAS DEL MUNDO REAL",

      "home.industry.status":
        "DESARROLLO & ARQUITECTURA",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Los procesos reales se convierten en sistemas comprensibles.",

      "home.industry.text":
        "La capa industrial conecta traspasos operativos, estados de procesos, datos de sensores, mediciones y futuras conexiones con máquinas.",

      "home.industry.shift":
        "Traspaso de turno & estados operativos",

      "home.industry.gate":
        "Sensores, mediciones & procesos de máquinas",

      "home.industry.process":
        "Análisis & estados de procesos trazables",

      "home.proof.eyebrow":
        "PRUEBA & CONFIANZA",

      "home.proof.title":
        "Evidencia antes que suposición.",

      "home.proof.text":
        "ProofFlow conecta tareas, evidencias, fotos, notas, firmas, auditoría y exportación en un flujo trazable.",

      "home.proof.open":
        "Abrir ProofFlow",

      "home.products.eyebrow":
        "PORTAFOLIO DEL SISTEMA",

      "home.products.title":
        "Un ecosistema. Diferentes niveles de madurez.",

      "home.products.lead":
        "ZAL’THERA distingue claramente entre productos disponibles, desarrollo activo, módulos del sistema y arquitectura futura.",

      "home.products.lifeflow":
        "Costes, contratos, plazos y claridad financiera personal.",

      "home.products.continuity":
        "Entorno personal soberano para documentos, datos, contexto e inteligencia.",

      "home.products.proofflow":
        "Evidencias, auditoría, firmas y flujos verificables.",

      "home.products.shiftlog":
        "Traspaso digital de turno para estados operativos y responsabilidades.",

      "home.products.voicebridge":
        "Desarrollo de una conexión de voz directa basada en confianza entre identidades autorizadas.",

      "home.products.zalgate":
        "Arquitectura para conectar sensores, mediciones, máquinas y estados de procesos.",

      "home.products.open":
        "Abrir →",

      "home.products.viewSystem":
        "Ver sistema →",

      "home.products.viewDevelopment":
        "Ver desarrollo →",

      "home.products.viewArchitecture":
        "Arquitectura →",

      "home.pilot.eyebrow":
        "ENTRADA CONTROLADA AL MUNDO REAL",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Comprender un proceso real claramente delimitado, probarlo de forma controlada y evaluar su valor real sin reemplazar inmediatamente toda la operación existente.",

      "home.pilot.discover":
        "Explorar Pilot",

      "home.pilot.request":
        "Solicitar Pilot",

      "home.core.eyebrow":
        "DEBAJO DE CADA SISTEMA",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust y la ejecución controlada forman el núcleo técnico del ecosistema.",

      "home.core.discover":
        "Explorar Core",

      "home.contact.eyebrow":
        "CONTACTO",

      "home.contact.title":
        "Contactar con ZAL’THERA",

      "home.contact.text":
        "¿Preguntas sobre ZAL’THERA, un sistema o un módulo existente?",

      "home.contact.name":
        "Nombre",

      "home.contact.namePlaceholder":
        "Tu nombre",

      "home.contact.email":
        "Correo electrónico",

      "home.contact.emailPlaceholder":
        "tu@email.com",

      "home.contact.message":
        "Mensaje",

      "home.contact.messagePlaceholder":
        "Tu mensaje …",

      "home.contact.send":
        "Enviar",

      "home.contact.privacyPrefix":
        "Al enviar aceptas nuestra",

      "home.contact.privacy":
        "Política de privacidad",

      "footer.imprint":
        "Aviso legal",

      "footer.privacy":
        "Privacidad"

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

      "search.label": "ZAL SEARCH",
      "search.title": "Explorer le système",
      "search.placeholder": "Rechercher un système, un produit ou un domaine …",
      "search.quickAccess": "ACCÈS RAPIDE",
      "search.noResults": "Aucun domaine du système trouvé.",
      "search.noResultsHint": "Essayez « CONTINUITY », « Pilot », « Voice », « Shift » ou « Finance ».",
      "search.navigate": "Naviguer",
      "search.open": "Ouvrir",
      "search.close": "Fermer",

      "language.label": "Langue",
      "language.select": "Choisir la langue",
      "language.current": "Langue actuelle",

      "home.hero.kicker":
        "ARCHITECTURE NUMÉRIQUE SOUVERAINE",

      "home.hero.title":
        "Un système.<br>Une identité.<br>Une intelligence connectée.",

      "home.hero.description":
        "ZAL’THERA relie identité, contexte, intelligence artificielle, données, confiance, communication et processus réels au sein d’une architecture technologique commune.",

      "home.hero.primary":
        "Explorer le système",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "ÉTAT DU SYSTÈME",

      "home.state.identity":
        "IDENTITÉ",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "INTELLIGENCE",

      "home.state.communication":
        "COMMUNICATION",

      "home.state.industry":
        "INDUSTRIE",

      "home.state.proof":
        "PREUVE",

      "home.state.core":
        "CORE",

      "home.state.active":
        "DÉVELOPPEMENT ACTIF",

      "home.state.architecture":
        "ARCHITECTURE",

      "home.state.module":
        "MODULE SYSTÈME",

      "home.system.eyebrow":
        "UN SYSTÈME",

      "home.system.title":
        "La technologie ne commence pas par une application.",

      "home.system.lead":
        "Elle commence par une logique commune définissant qui agit, ce qui est compris, à qui l’on peut faire confiance et quelle action peut réellement être exécutée.",

      "home.system.identity.title":
        "Identité",

      "home.system.identity.text":
        "Qui ou quel système autorisé agit ?",

      "home.system.context.title":
        "Contexte",

      "home.system.context.text":
        "Dans quel contexte existent l’information et l’action ?",

      "home.system.intelligence.title":
        "Intelligence",

      "home.system.intelligence.text":
        "Que peut-on comprendre à partir du contexte disponible ?",

      "home.system.trust.title":
        "Confiance",

      "home.system.trust.text":
        "Qu’est-ce qui est autorisé, démontrable et vérifiable ?",

      "home.system.action.title":
        "Action",

      "home.system.action.text":
        "Qu’est-ce qui peut réellement être exécuté ?",

      "home.system.principle":
        "PRINCIPE CENTRAL",

      "home.system.principleText":
        "Comprendre d’abord. Préparer ensuite. Agir uniquement avec autorisation.",

      "home.system.openArchitecture":
        "Ouvrir l’architecture",

      "home.continuity.eyebrow":
        "SYSTÈME PERSONNEL SOUVERAIN",

      "home.continuity.status":
        "DÉVELOPPEMENT ACTIF",

      "home.continuity.tagline":
        "Le contexte de votre vie. Structuré. Connecté. Compréhensible.",

      "home.continuity.text1":
        "CONTINUITY relie documents personnels, données, Cards, Timeline, finances, preuves et contexte au sein d’un environnement personnel souverain.",

      "home.continuity.text2":
        "Les informations ne restent pas isolées dans des fichiers. Elles reçoivent contexte, provenance, dimension temporelle et une position traçable dans le système personnel.",

      "home.continuity.documents":
        "Documents",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finances",

      "home.continuity.context":
        "Contexte",

      "home.continuity.audit":
        "Audit",

      "home.intelligence.eyebrow":
        "INTELLIGENCE CONTEXTUELLE",

      "home.intelligence.status":
        "DÉVELOPPEMENT ACTIF",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Une intelligence qui connaît ses limites.",

      "home.intelligence.text1":
        "La couche d’intelligence ne fonctionne pas indépendamment de l’humain. Elle comprend le contexte disponible, identifie les relations, explique les informations et prépare les actions possibles.",

      "home.intelligence.text2":
        "Les actions ayant des conséquences restent liées aux autorisations, au contexte et à l’approbation humaine.",

      "home.communication.eyebrow":
        "IDENTITÉ À IDENTITÉ",

      "home.communication.status":
        "DÉVELOPPEMENT ACTIF",

      "home.communication.title":
        "Communication",

      "home.communication.tagline":
        "La connexion commence par l’identité et le consentement.",

      "home.communication.text1":
        "ZAL’THERA Communication développe une couche de communication sécurisée entre identités autorisées.",

      "home.communication.text2":
        "La voix, puis la vidéo, les fichiers et la livraison fondée sur la confiance sont définis par l’identité, la relation et l’autorisation, et non par des profils publics.",

      "home.communication.voice":
        "VOIX",

      "home.communication.video":
        "VIDÉO",

      "home.communication.files":
        "FICHIERS",

      "home.communication.trust":
        "CONFIANCE",

      "home.communication.consent":
        "CONSENTEMENT",

      "home.communication.connectionRule":
        "CONSENTEMENT AVANT CONNEXION",

      "home.industry.eyebrow":
        "SYSTÈMES DU MONDE RÉEL",

      "home.industry.status":
        "DÉVELOPPEMENT & ARCHITECTURE",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Les processus réels deviennent des systèmes compréhensibles.",

      "home.industry.text":
        "La couche industrielle relie les transmissions opérationnelles, les états de processus, les données de capteurs, les mesures et les futures connexions machines.",

      "home.industry.shift":
        "Transmission d’équipe & états opérationnels",

      "home.industry.gate":
        "Capteurs, mesures & processus machines",

      "home.industry.process":
        "Analyse & états de processus traçables",

      "home.proof.eyebrow":
        "PREUVE & CONFIANCE",

      "home.proof.title":
        "La preuve avant l’hypothèse.",

      "home.proof.text":
        "ProofFlow relie tâches, preuves, photos, notes, signatures, audit et export dans un flux traçable.",

      "home.proof.open":
        "Ouvrir ProofFlow",

      "home.products.eyebrow":
        "PORTFOLIO SYSTÈME",

      "home.products.title":
        "Un écosystème. Différents niveaux de maturité.",

      "home.products.lead":
        "ZAL’THERA distingue clairement les produits disponibles, le développement actif, les modules système et l’architecture future.",

      "home.products.lifeflow":
        "Coûts, contrats, échéances et visibilité financière personnelle.",

      "home.products.continuity":
        "Environnement personnel souverain pour documents, données, contexte et intelligence.",

      "home.products.proofflow":
        "Preuves, audit, signatures et flux vérifiables.",

      "home.products.shiftlog":
        "Transmission numérique d’équipe pour états opérationnels et responsabilités.",

      "home.products.voicebridge":
        "Développement d’une connexion vocale directe fondée sur la confiance entre identités autorisées.",

      "home.products.zalgate":
        "Architecture reliant capteurs, mesures, machines et états de processus.",

      "home.products.open":
        "Ouvrir →",

      "home.products.viewSystem":
        "Voir le système →",

      "home.products.viewDevelopment":
        "Voir le développement →",

      "home.products.viewArchitecture":
        "Architecture →",

      "home.pilot.eyebrow":
        "ENTRÉE CONTRÔLÉE DANS LE MONDE RÉEL",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Comprendre un processus réel clairement délimité, le tester de manière contrôlée et mesurer sa valeur réelle sans remplacer immédiatement l’exploitation existante.",

      "home.pilot.discover":
        "Découvrir Pilot",

      "home.pilot.request":
        "Demander un Pilot",

      "home.core.eyebrow":
        "SOUS CHAQUE SYSTÈME",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust et l’exécution contrôlée constituent le noyau technique de l’écosystème.",

      "home.core.discover":
        "Découvrir Core",

      "home.contact.eyebrow":
        "CONTACT",

      "home.contact.title":
        "Contacter ZAL’THERA",

      "home.contact.text":
        "Des questions sur ZAL’THERA, un système ou un module existant ?",

      "home.contact.name":
        "Nom",

      "home.contact.namePlaceholder":
        "Votre nom",

      "home.contact.email":
        "E-mail",

      "home.contact.emailPlaceholder":
        "votre@email.com",

      "home.contact.message":
        "Message",

      "home.contact.messagePlaceholder":
        "Votre message …",

      "home.contact.send":
        "Envoyer",

      "home.contact.privacyPrefix":
        "En envoyant ce formulaire, vous acceptez notre",

      "home.contact.privacy":
        "Politique de confidentialité",

      "footer.imprint":
        "Mentions légales",

      "footer.privacy":
        "Confidentialité"

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
      "nav.about": "Informazioni",

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

      "search.label": "ZAL SEARCH",
      "search.title": "Esplora il sistema",
      "search.placeholder": "Cerca un sistema, prodotto o area …",
      "search.quickAccess": "ACCESSO RAPIDO",
      "search.noResults": "Nessuna area del sistema trovata.",
      "search.noResultsHint": "Prova “CONTINUITY”, “Pilot”, “Voice”, “Shift” o “Finance”.",
      "search.navigate": "Naviga",
      "search.open": "Apri",
      "search.close": "Chiudi",

      "language.label": "Lingua",
      "language.select": "Seleziona lingua",
      "language.current": "Lingua attuale",

      "home.hero.kicker":
        "ARCHITETTURA DIGITALE SOVRANA",

      "home.hero.title":
        "Un sistema.<br>Un’identità.<br>Intelligenza connessa.",

      "home.hero.description":
        "ZAL’THERA collega identità, contesto, intelligenza artificiale, dati, fiducia, comunicazione e processi reali in un’unica architettura tecnologica.",

      "home.hero.primary":
        "Esplora il sistema",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "STATO DEL SISTEMA",

      "home.state.identity":
        "IDENTITÀ",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "INTELLIGENZA",

      "home.state.communication":
        "COMUNICAZIONE",

      "home.state.industry":
        "INDUSTRIA",

      "home.state.proof":
        "PROVA",

      "home.state.core":
        "CORE",

      "home.state.active":
        "SVILUPPO ATTIVO",

      "home.state.architecture":
        "ARCHITETTURA",

      "home.state.module":
        "MODULO DI SISTEMA",

      "home.system.eyebrow":
        "UN SISTEMA",

      "home.system.title":
        "La tecnologia non inizia con un’app.",

      "home.system.lead":
        "Inizia con una logica condivisa che definisce chi agisce, cosa viene compreso, di chi ci si può fidare e quale azione può essere realmente eseguita.",

      "home.system.identity.title":
        "Identità",

      "home.system.identity.text":
        "Chi o quale sistema autorizzato sta agendo?",

      "home.system.context.title":
        "Contesto",

      "home.system.context.text":
        "In quale contesto esistono informazione e azione?",

      "home.system.intelligence.title":
        "Intelligenza",

      "home.system.intelligence.text":
        "Cosa può essere compreso dal contesto disponibile?",

      "home.system.trust.title":
        "Fiducia",

      "home.system.trust.text":
        "Cosa è consentito, dimostrabile e verificabile?",

      "home.system.action.title":
        "Azione",

      "home.system.action.text":
        "Cosa può essere realmente eseguito?",

      "home.system.principle":
        "PRINCIPIO CENTRALE",

      "home.system.principleText":
        "Prima comprendere. Poi preparare. Agire solo con autorizzazione.",

      "home.system.openArchitecture":
        "Apri architettura",

      "home.continuity.eyebrow":
        "SISTEMA PERSONALE SOVRANO",

      "home.continuity.status":
        "SVILUPPO ATTIVO",

      "home.continuity.tagline":
        "Il contesto della tua vita. Strutturato. Connesso. Comprensibile.",

      "home.continuity.text1":
        "CONTINUITY collega documenti personali, dati, Cards, Timeline, finanze, prove e contesto in un ambiente personale sovrano.",

      "home.continuity.text2":
        "Le informazioni non restano isolate nei file. Ricevono contesto, provenienza, riferimento temporale e una posizione tracciabile nel sistema personale.",

      "home.continuity.documents":
        "Documenti",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finanze",

      "home.continuity.context":
        "Contesto",

      "home.continuity.audit":
        "Audit",

      "home.intelligence.eyebrow":
        "INTELLIGENZA CONTESTUALE",

      "home.intelligence.status":
        "SVILUPPO ATTIVO",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Intelligenza che conosce i propri limiti.",

      "home.intelligence.text1":
        "Il livello di intelligenza non opera separatamente dall’essere umano. Comprende il contesto disponibile, riconosce le relazioni, spiega le informazioni e prepara possibili azioni.",

      "home.intelligence.text2":
        "Le azioni con conseguenze restano vincolate ad autorizzazione, contesto e approvazione umana.",

      "home.communication.eyebrow":
        "IDENTITÀ A IDENTITÀ",

      "home.communication.status":
        "SVILUPPO ATTIVO",

      "home.communication.title":
        "Comunicazione",

      "home.communication.tagline":
        "La connessione inizia con identità e consenso.",

      "home.communication.text1":
        "ZAL’THERA Communication sviluppa un livello di comunicazione sicuro tra identità autorizzate.",

      "home.communication.text2":
        "Voce, in futuro video, file e consegna basata sulla fiducia sono definiti da identità, relazione e autorizzazione, non da profili pubblici.",

      "home.communication.voice":
        "VOCE",

      "home.communication.video":
        "VIDEO",

      "home.communication.files":
        "FILE",

      "home.communication.trust":
        "FIDUCIA",

      "home.communication.consent":
        "CONSENSO",

      "home.communication.connectionRule":
        "CONSENSO PRIMA DELLA CONNESSIONE",

      "home.industry.eyebrow":
        "SISTEMI DEL MONDO REALE",

      "home.industry.status":
        "SVILUPPO & ARCHITETTURA",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "I processi reali diventano sistemi comprensibili.",

      "home.industry.text":
        "Il livello industriale collega passaggi operativi, stati di processo, dati dei sensori, misurazioni e future connessioni alle macchine.",

      "home.industry.shift":
        "Passaggio turno & stati operativi",

      "home.industry.gate":
        "Sensori, misurazioni & processi macchina",

      "home.industry.process":
        "Analisi & stati di processo tracciabili",

      "home.proof.eyebrow":
        "PROVA & FIDUCIA",

      "home.proof.title":
        "La prova prima dell’ipotesi.",

      "home.proof.text":
        "ProofFlow collega attività, prove, foto, note, firme, audit ed esportazione in un flusso tracciabile.",

      "home.proof.open":
        "Apri ProofFlow",

      "home.products.eyebrow":
        "PORTAFOGLIO DI SISTEMA",

      "home.products.title":
        "Un ecosistema. Diversi livelli di maturità.",

      "home.products.lead":
        "ZAL’THERA distingue chiaramente tra prodotti disponibili, sviluppo attivo, moduli di sistema e architettura futura.",

      "home.products.lifeflow":
        "Costi, contratti, scadenze e chiarezza finanziaria personale.",

      "home.products.continuity":
        "Ambiente personale sovrano per documenti, dati, contesto e intelligenza.",

      "home.products.proofflow":
        "Prove, audit, firme e flussi verificabili.",

      "home.products.shiftlog":
        "Passaggio digitale di turno per stati operativi e responsabilità.",

      "home.products.voicebridge":
        "Sviluppo di una connessione vocale diretta basata sulla fiducia tra identità autorizzate.",

      "home.products.zalgate":
        "Architettura per collegare sensori, misurazioni, macchine e stati di processo.",

      "home.products.open":
        "Apri →",

      "home.products.viewSystem":
        "Visualizza sistema →",

      "home.products.viewDevelopment":
        "Visualizza sviluppo →",

      "home.products.viewArchitecture":
        "Architettura →",

      "home.pilot.eyebrow":
        "INGRESSO CONTROLLATO NEL MONDO REALE",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Comprendere un processo reale chiaramente delimitato, testarlo in modo controllato e valutarne il valore effettivo senza sostituire immediatamente l’operatività esistente.",

      "home.pilot.discover":
        "Scopri Pilot",

      "home.pilot.request":
        "Richiedi Pilot",

      "home.core.eyebrow":
        "SOTTO OGNI SISTEMA",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust ed esecuzione controllata costituiscono il nucleo tecnico dell’ecosistema.",

      "home.core.discover":
        "Scopri Core",

      "home.contact.eyebrow":
        "CONTATTO",

      "home.contact.title":
        "Contatta ZAL’THERA",

      "home.contact.text":
        "Domande su ZAL’THERA, un sistema o un modulo esistente?",

      "home.contact.name":
        "Nome",

      "home.contact.namePlaceholder":
        "Il tuo nome",

      "home.contact.email":
        "E-mail",

      "home.contact.emailPlaceholder":
        "tuo@email.com",

      "home.contact.message":
        "Messaggio",

      "home.contact.messagePlaceholder":
        "Il tuo messaggio …",

      "home.contact.send":
        "Invia",

      "home.contact.privacyPrefix":
        "Inviando accetti la nostra",

      "home.contact.privacy":
        "Informativa sulla privacy",

      "footer.imprint":
        "Note legali",

      "footer.privacy":
        "Privacy"

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

      "search.label": "ZAL SEARCH",
      "search.title": "Explorează sistemul",
      "search.placeholder": "Caută un sistem, produs sau domeniu …",
      "search.quickAccess": "ACCES RAPID",
      "search.noResults": "Nu a fost găsit niciun domeniu al sistemului.",
      "search.noResultsHint": "Încearcă „CONTINUITY”, „Pilot”, „Voice”, „Shift” sau „Finance”.",
      "search.navigate": "Navigare",
      "search.open": "Deschide",
      "search.close": "Închide",

      "language.label": "Limbă",
      "language.select": "Selectează limba",
      "language.current": "Limba curentă",

      "home.hero.kicker":
        "ARHITECTURĂ DIGITALĂ SUVERANĂ",

      "home.hero.title":
        "Un sistem.<br>O identitate.<br>Inteligență conectată.",

      "home.hero.description":
        "ZAL’THERA conectează identitatea, contextul, inteligența artificială, datele, încrederea, comunicarea și procesele reale într-o arhitectură tehnologică comună.",

      "home.hero.primary":
        "Explorează sistemul",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "STAREA SISTEMULUI",

      "home.state.identity":
        "IDENTITATE",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "INTELIGENȚĂ",

      "home.state.communication":
        "COMUNICARE",

      "home.state.industry":
        "INDUSTRIE",

      "home.state.proof":
        "DOVADĂ",

      "home.state.core":
        "CORE",

      "home.state.active":
        "DEZVOLTARE ACTIVĂ",

      "home.state.architecture":
        "ARHITECTURĂ",

      "home.state.module":
        "MODUL DE SISTEM",

      "home.system.eyebrow":
        "UN SISTEM",

      "home.system.title":
        "Tehnologia nu începe cu o aplicație.",

      "home.system.lead":
        "Începe cu o logică comună pentru cine acționează, ce este înțeles, în cine se poate avea încredere și ce acțiune poate fi executată efectiv.",

      "home.system.identity.title":
        "Identitate",

      "home.system.identity.text":
        "Cine sau ce sistem autorizat acționează?",

      "home.system.context.title":
        "Context",

      "home.system.context.text":
        "În ce context există informația și acțiunea?",

      "home.system.intelligence.title":
        "Inteligență",

      "home.system.intelligence.text":
        "Ce poate fi înțeles din contextul disponibil?",

      "home.system.trust.title":
        "Încredere",

      "home.system.trust.text":
        "Ce este permis, demonstrabil și verificabil?",

      "home.system.action.title":
        "Acțiune",

      "home.system.action.text":
        "Ce poate fi executat efectiv?",

      "home.system.principle":
        "PRINCIPIU CENTRAL",

      "home.system.principleText":
        "Înțelege mai întâi. Pregătește apoi. Acționează doar cu permisiune.",

      "home.system.openArchitecture":
        "Deschide arhitectura",

      "home.continuity.eyebrow":
        "SISTEM PERSONAL SUVERAN",

      "home.continuity.status":
        "DEZVOLTARE ACTIVĂ",

      "home.continuity.tagline":
        "Contextul vieții tale. Structurat. Conectat. Ușor de înțeles.",

      "home.continuity.text1":
        "CONTINUITY conectează documente personale, date, Cards, Timeline, finanțe, dovezi și context într-un mediu personal suveran.",

      "home.continuity.text2":
        "Informațiile nu rămân izolate în fișiere. Primesc context, proveniență, referință temporală și o poziție trasabilă în sistemul personal.",

      "home.continuity.documents":
        "Documente",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "Finanțe",

      "home.continuity.context":
        "Context",

      "home.continuity.audit":
        "Audit",

      "home.intelligence.eyebrow":
        "INTELIGENȚĂ CONTEXTUALĂ",

      "home.intelligence.status":
        "DEZVOLTARE ACTIVĂ",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "Inteligență care își cunoaște limitele.",

      "home.intelligence.text1":
        "Stratul de inteligență nu funcționează separat de om. Înțelege contextul disponibil, identifică legături, explică informații și pregătește acțiuni posibile.",

      "home.intelligence.text2":
        "Acțiunile cu consecințe rămân legate de autorizare, context și aprobarea umană.",

      "home.communication.eyebrow":
        "IDENTITATE LA IDENTITATE",

      "home.communication.status":
        "DEZVOLTARE ACTIVĂ",

      "home.communication.title":
        "Comunicare",

      "home.communication.tagline":
        "Conexiunea începe cu identitate și consimțământ.",

      "home.communication.text1":
        "ZAL’THERA Communication dezvoltă un strat de comunicare sigur între identități autorizate.",

      "home.communication.text2":
        "Vocea, ulterior video, fișierele și livrarea bazată pe încredere sunt definite prin identitate, relație și autorizare, nu prin profiluri publice.",

      "home.communication.voice":
        "VOCE",

      "home.communication.video":
        "VIDEO",

      "home.communication.files":
        "FIȘIERE",

      "home.communication.trust":
        "ÎNCREDERE",

      "home.communication.consent":
        "CONSIMȚĂMÂNT",

      "home.communication.connectionRule":
        "CONSIMȚĂMÂNT ÎNAINTE DE CONECTARE",

      "home.industry.eyebrow":
        "SISTEME DIN LUMEA REALĂ",

      "home.industry.status":
        "DEZVOLTARE & ARHITECTURĂ",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "Procesele reale devin sisteme ușor de înțeles.",

      "home.industry.text":
        "Stratul industrial conectează predările operaționale, stările proceselor, datele senzorilor, măsurătorile și viitoarele conexiuni cu utilaje.",

      "home.industry.shift":
        "Predare tură & stări operaționale",

      "home.industry.gate":
        "Senzori, măsurători & procese de utilaje",

      "home.industry.process":
        "Analiză & stări de proces trasabile",

      "home.proof.eyebrow":
        "DOVADĂ & ÎNCREDERE",

      "home.proof.title":
        "Dovadă înainte de presupunere.",

      "home.proof.text":
        "ProofFlow conectează sarcini, dovezi, fotografii, notițe, semnături, audit și export într-un flux trasabil.",

      "home.proof.open":
        "Deschide ProofFlow",

      "home.products.eyebrow":
        "PORTOFOLIU DE SISTEM",

      "home.products.title":
        "Un ecosistem. Niveluri diferite de maturitate.",

      "home.products.lead":
        "ZAL’THERA diferențiază clar între produse disponibile, dezvoltare activă, module de sistem și arhitectură viitoare.",

      "home.products.lifeflow":
        "Costuri, contracte, termene și claritate financiară personală.",

      "home.products.continuity":
        "Mediu personal suveran pentru documente, date, context și inteligență.",

      "home.products.proofflow":
        "Dovezi, audit, semnături și fluxuri verificabile.",

      "home.products.shiftlog":
        "Predare digitală de tură pentru stări operaționale și responsabilități.",

      "home.products.voicebridge":
        "Dezvoltarea unei conexiuni vocale directe bazate pe încredere între identități autorizate.",

      "home.products.zalgate":
        "Arhitectură pentru conectarea senzorilor, măsurătorilor, utilajelor și stărilor de proces.",

      "home.products.open":
        "Deschide →",

      "home.products.viewSystem":
        "Vezi sistemul →",

      "home.products.viewDevelopment":
        "Vezi dezvoltarea →",

      "home.products.viewArchitecture":
        "Arhitectură →",

      "home.pilot.eyebrow":
        "INTRARE CONTROLATĂ ÎN LUMEA REALĂ",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "Înțelege un proces real clar delimitat, testează-l controlat și evaluează-i valoarea reală fără a înlocui imediat întreaga operațiune existentă.",

      "home.pilot.discover":
        "Explorează Pilot",

      "home.pilot.request":
        "Solicită Pilot",

      "home.core.eyebrow":
        "SUB FIECARE SISTEM",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity, Policy, Consent, Audit, Ledger, Trust și execuția controlată formează nucleul tehnic al ecosistemului.",

      "home.core.discover":
        "Explorează Core",

      "home.contact.eyebrow":
        "CONTACT",

      "home.contact.title":
        "Contactează ZAL’THERA",

      "home.contact.text":
        "Întrebări despre ZAL’THERA, un sistem sau un modul existent?",

      "home.contact.name":
        "Nume",

      "home.contact.namePlaceholder":
        "Numele tău",

      "home.contact.email":
        "E-mail",

      "home.contact.emailPlaceholder":
        "nume@email.com",

      "home.contact.message":
        "Mesaj",

      "home.contact.messagePlaceholder":
        "Mesajul tău …",

      "home.contact.send":
        "Trimite",

      "home.contact.privacyPrefix":
        "Prin trimitere accepți",

      "home.contact.privacy":
        "Politica de confidențialitate",

      "footer.imprint":
        "Informații legale",

      "footer.privacy":
        "Confidențialitate"

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

      "search.label": "ZAL SEARCH",
      "search.title": "探索系统",
      "search.placeholder": "搜索系统、产品或领域 …",
      "search.quickAccess": "快速访问",
      "search.noResults": "未找到相关系统领域。",
      "search.noResultsHint": "可以尝试搜索“CONTINUITY”、“Pilot”、“Voice”、“Shift”或“Finance”。",
      "search.navigate": "导航",
      "search.open": "打开",
      "search.close": "关闭",

      "language.label": "语言",
      "language.select": "选择语言",
      "language.current": "当前语言",

      "home.hero.kicker":
        "自主数字架构",

      "home.hero.title":
        "一个系统。<br>一个身份。<br>互联智能。",

      "home.hero.description":
        "ZAL’THERA 将身份、上下文、人工智能、数据、信任、通信与现实流程连接到同一套技术架构中。",

      "home.hero.primary":
        "探索系统",

      "home.hero.core":
        "ZAL’THERA Core",

      "home.state.label":
        "系统状态",

      "home.state.identity":
        "身份",

      "home.state.continuity":
        "CONTINUITY",

      "home.state.intelligence":
        "智能",

      "home.state.communication":
        "通信",

      "home.state.industry":
        "工业",

      "home.state.proof":
        "证明",

      "home.state.core":
        "CORE",

      "home.state.active":
        "积极开发中",

      "home.state.architecture":
        "架构",

      "home.state.module":
        "系统模块",

      "home.system.eyebrow":
        "一个系统",

      "home.system.title":
        "技术并不是从一个应用开始。",

      "home.system.lead":
        "它始于一套共同逻辑：谁可以行动、什么可以被理解、谁值得信任，以及哪些操作真正可以执行。",

      "home.system.identity.title":
        "身份",

      "home.system.identity.text":
        "谁或哪个获授权的系统正在行动？",

      "home.system.context.title":
        "上下文",

      "home.system.context.text":
        "信息和行为存在于什么上下文中？",

      "home.system.intelligence.title":
        "智能",

      "home.system.intelligence.text":
        "可以从现有上下文中理解什么？",

      "home.system.trust.title":
        "信任",

      "home.system.trust.text":
        "哪些内容被允许、可证明并可验证？",

      "home.system.action.title":
        "行动",

      "home.system.action.text":
        "哪些操作真正可以被执行？",

      "home.system.principle":
        "核心原则",

      "home.system.principleText":
        "先理解，再准备。只有获得授权后才执行。",

      "home.system.openArchitecture":
        "查看架构",

      "home.continuity.eyebrow":
        "个人自主系统",

      "home.continuity.status":
        "积极开发中",

      "home.continuity.tagline":
        "你的生活上下文。结构化。互联。可理解。",

      "home.continuity.text1":
        "CONTINUITY 将个人文档、数据、Cards、Timeline、财务、证明和上下文连接到一个自主的个人环境中。",

      "home.continuity.text2":
        "信息不再只是孤立文件。它会获得上下文、来源、时间关系以及在个人系统中的可追溯位置。",

      "home.continuity.documents":
        "文档",

      "home.continuity.cards":
        "Cards",

      "home.continuity.timeline":
        "Timeline",

      "home.continuity.finance":
        "财务",

      "home.continuity.context":
        "上下文",

      "home.continuity.audit":
        "审计",

      "home.intelligence.eyebrow":
        "上下文智能",

      "home.intelligence.status":
        "积极开发中",

      "home.intelligence.title":
        "ZAL’THERA Intelligence",

      "home.intelligence.tagline":
        "了解自身边界的智能。",

      "home.intelligence.text1":
        "智能层不会脱离人而独立运行。它理解可用上下文、识别关联、解释信息并准备可能的操作。",

      "home.intelligence.text2":
        "具有实际后果的操作仍受权限、上下文和人工授权约束。",

      "home.communication.eyebrow":
        "身份到身份",

      "home.communication.status":
        "积极开发中",

      "home.communication.title":
        "通信",

      "home.communication.tagline":
        "连接始于身份与同意。",

      "home.communication.text1":
        "ZAL’THERA Communication 正在开发一个用于授权身份之间安全通信的基础层。",

      "home.communication.text2":
        "语音、未来的视频、文件以及基于信任的传递，不通过公开资料定义，而通过身份、关系和权限进行控制。",

      "home.communication.voice":
        "语音",

      "home.communication.video":
        "视频",

      "home.communication.files":
        "文件",

      "home.communication.trust":
        "信任",

      "home.communication.consent":
        "同意",

      "home.communication.connectionRule":
        "连接前先获得同意",

      "home.industry.eyebrow":
        "现实世界系统",

      "home.industry.status":
        "开发与架构",

      "home.industry.title":
        "ZAL’THERA Industry",

      "home.industry.tagline":
        "让现实流程成为可理解的系统。",

      "home.industry.text":
        "工业层连接运营交接、流程状态、传感器数据、测量值以及未来的机器连接。",

      "home.industry.shift":
        "班次交接与运营状态",

      "home.industry.gate":
        "传感器、测量值与机器流程",

      "home.industry.process":
        "分析与可追溯流程状态",

      "home.proof.eyebrow":
        "证明与信任",

      "home.proof.title":
        "先有证据，再做判断。",

      "home.proof.text":
        "ProofFlow 将任务、证明、照片、备注、签名、审计和导出连接成一个可追溯流程。",

      "home.proof.open":
        "打开 ProofFlow",

      "home.products.eyebrow":
        "系统产品组合",

      "home.products.title":
        "一个生态系统。不同成熟阶段。",

      "home.products.lead":
        "ZAL’THERA 明确区分已发布产品、积极开发项目、系统模块以及未来架构。",

      "home.products.lifeflow":
        "费用、合同、截止日期与个人财务概览。",

      "home.products.continuity":
        "面向文档、数据、上下文和智能的个人自主环境。",

      "home.products.proofflow":
        "证明、审计、签名以及可验证流程。",

      "home.products.shiftlog":
        "面向运营状态和责任的数字班次交接。",

      "home.products.voicebridge":
        "开发授权身份之间基于信任的直接语音连接。",

      "home.products.zalgate":
        "用于连接传感器、测量值、机器和流程状态的架构。",

      "home.products.open":
        "打开 →",

      "home.products.viewSystem":
        "查看系统 →",

      "home.products.viewDevelopment":
        "查看开发 →",

      "home.products.viewArchitecture":
        "查看架构 →",

      "home.pilot.eyebrow":
        "受控现实场景入口",

      "home.pilot.title":
        "ZAL’THERA Pilot",

      "home.pilot.text":
        "理解一个明确限定的现实流程，在受控条件下进行测试，并评估其真实价值，而无需立即完全替换现有运营方式。",

      "home.pilot.discover":
        "探索 Pilot",

      "home.pilot.request":
        "申请 Pilot",

      "home.core.eyebrow":
        "每个系统之下",

      "home.core.title":
        "ZAL’THERA CORE",

      "home.core.text":
        "Identity、Policy、Consent、Audit、Ledger、Trust 与受控执行共同构成整个生态系统的技术核心。",

      "home.core.discover":
        "探索 Core",

      "home.contact.eyebrow":
        "联系",

      "home.contact.title":
        "联系 ZAL’THERA",

      "home.contact.text":
        "对 ZAL’THERA、某个系统或现有模块有疑问？",

      "home.contact.name":
        "姓名",

      "home.contact.namePlaceholder":
        "你的姓名",

      "home.contact.email":
        "电子邮件",

      "home.contact.emailPlaceholder":
        "your@email.com",

      "home.contact.message":
        "消息",

      "home.contact.messagePlaceholder":
        "你的消息 …",

      "home.contact.send":
        "发送",

      "home.contact.privacyPrefix":
        "提交即表示你同意我们的",

      "home.contact.privacy":
        "隐私政策",

      "footer.imprint":
        "法律声明",

      "footer.privacy":
        "隐私"

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

      .zal-language {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        z-index: 1002;
      }


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

        display: inline-flex;
        align-items: center;
        justify-content: center;

        gap: 5px;

        cursor: pointer;

        font: inherit;

        font-size: 10px;
        font-weight: 650;
        letter-spacing: .08em;
        line-height: 1;

        white-space: nowrap;

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

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

        outline-offset: 3px;
      }


      .zal-language-trigger-label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }


      .zal-language-trigger-chevron {
        font-size: 8px;
        opacity: .48;

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


      .zal-language-menu {
        position: absolute;

        top:
          calc(100% + 12px);

        right: 0;

        width: 190px;

        padding: 7px;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius: 16px;

        background:
          linear-gradient(
            180deg,
            rgba(17,23,36,.97),
            rgba(5,8,15,.98)
          );

        box-shadow:
          0 24px 70px
          rgba(0,0,0,.52);

        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);

        opacity: 0;
        visibility: hidden;
        pointer-events: none;

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
        content: "";

        position: absolute;

        left: 16px;
        right: 16px;
        top: 0;

        height: 1px;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(88,224,255,.45),
            rgba(219,177,94,.32),
            transparent
          );

        pointer-events: none;
      }


      .zal-language.is-open
      .zal-language-menu {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;

        transform:
          translateY(0)
          scale(1);
      }


      .zal-language-option {
        appearance: none;
        -webkit-appearance: none;

        width: 100%;
        min-height: 38px;

        margin: 0;
        padding: 0 10px;

        border:
          1px solid transparent;

        border-radius: 10px;

        background: transparent;

        color:
          rgba(238,242,250,.66);

        display: grid;

        grid-template-columns:
          44px 1fr 18px;

        align-items: center;

        gap: 4px;

        text-align: left;

        cursor: pointer;

        font: inherit;

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

        outline: none;
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
        font-size: 9px;
        font-weight: 750;
        letter-spacing: .11em;

        color:
          rgba(88,224,255,.74);
      }


      .zal-language-option-name {
        font-size: 11px;
        font-weight: 520;
        white-space: nowrap;
      }


      .zal-language-option-check {
        opacity: 0;

        color:
          rgba(88,224,255,.85);

        font-size: 11px;
        text-align: right;
      }


      .zal-language-option.is-active
      .zal-language-option-check {
        opacity: 1;
      }


      .topbar-cta {
        position: relative;

        display: flex;

        align-items: center;
        justify-content: flex-end;

        gap: 8px;

        flex: 0 0 auto;

        white-space: nowrap;
      }


      @media (max-width: 820px) {

        .zal-language-trigger {
          width: 40px;
          min-width: 40px;
          height: 40px;

          padding: 0 5px;

          border-radius: 50%;
        }


        .zal-language-trigger-chevron {
          display: none;
        }


        .zal-language-menu {
          position: fixed;

          top: 70px;
          right: 12px;

          width:
            min(
              210px,
              calc(100vw - 24px)
            );
        }

      }


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


      const useHTML =
        element.hasAttribute(
          "data-i18n-html"
        );


      if (useHTML) {

        element.innerHTML =
          value;

      } else {

        element.textContent =
          value;

      }

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
