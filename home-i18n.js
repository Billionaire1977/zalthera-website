/* ZAL’THERA · Zusätzliche Startseiten-Texte · Acht Sprachen */

(() => {
  "use strict";

  const api = window.ZAL_I18N;
  if (!api) return;

  const languages = [
    "de",
    "en",
    "tr",
    "es",
    "fr",
    "it",
    "ro",
    "zh-Hans"
  ];

  const rows = {
    metaTitle: [
      "ZAL’THERA — Deine Welt. Intelligent verbunden.",
      "ZAL’THERA — Your world. Intelligently connected.",
      "ZAL’THERA — Dünyanız. Akıllıca bağlı.",
      "ZAL’THERA — Tu mundo. Conectado con inteligencia.",
      "ZAL’THERA — Votre monde. Intelligemment connecté.",
      "ZAL’THERA — Il tuo mondo. Connesso con intelligenza.",
      "ZAL’THERA — Lumea ta. Conectată inteligent.",
      "ZAL’THERA — 你的世界。智能互联。"
    ],

    metaDescription: [
      "Entdecke die Apps und Systeme von ZAL’THERA für persönliche Organisation, Nachweise und reale Arbeitsabläufe.",
      "Discover ZAL’THERA apps and systems for personal organization, evidence and real-world workflows.",
      "Kişisel düzen, kanıtlar ve gerçek iş akışları için ZAL’THERA uygulamalarını ve sistemlerini keşfedin.",
      "Descubre las apps y sistemas ZAL’THERA para organización personal, pruebas y procesos reales.",
      "Découvrez les apps et systèmes ZAL’THERA pour l’organisation personnelle, les preuves et les processus réels.",
      "Scopri le app e i sistemi ZAL’THERA per organizzazione personale, prove e processi reali.",
      "Descoperă aplicațiile și sistemele ZAL’THERA pentru organizare personală, dovezi și procese reale.",
      "探索 ZAL’THERA 的应用与系统，用于个人整理、证据记录与实际工作流程。"
    ],

    skip: [
      "Zum Inhalt",
      "Skip to content",
      "İçeriğe geç",
      "Saltar al contenido",
      "Aller au contenu",
      "Vai al contenuto",
      "Sari la conținut",
      "跳至内容"
    ],

    navProducts: [
      "Produkte",
      "Products",
      "Ürünler",
      "Productos",
      "Produits",
      "Prodotti",
      "Produse",
      "产品"
    ],

    navAbout: [
      "Über uns",
      "About us",
      "Hakkımızda",
      "Sobre nosotros",
      "À propos",
      "Chi siamo",
      "Despre noi",
      "关于我们"
    ],

    heroOne: [
      "Deine Welt.",
      "Your world.",
      "Dünyanız.",
      "Tu mundo.",
      "Votre monde.",
      "Il tuo mondo.",
      "Lumea ta.",
      "你的世界。"
    ],

    heroTwo: [
      "Intelligent",
      "Intelligently",
      "Akıllıca",
      "Conectado",
      "Intelligemment",
      "Connesso",
      "Conectată",
      "智能"
    ],

    heroThree: [
      "verbunden.",
      "connected.",
      "bağlı.",
      "con inteligencia.",
      "connecté.",
      "con intelligenza.",
      "inteligent.",
      "互联。"
    ],

    heroLead: [
      "Ein System. Deine Kontrolle.",
      "One system. Your control.",
      "Tek sistem. Kontrol sizde.",
      "Un sistema. Tú tienes el control.",
      "Un système. Vous gardez le contrôle.",
      "Un sistema. Il controllo è tuo.",
      "Un sistem. Controlul tău.",
      "一个系统，由你掌控。"
    ],

    discover: [
      "Systeme entdecken",
      "Explore systems",
      "Sistemleri keşfet",
      "Explorar sistemas",
      "Découvrir les systèmes",
      "Esplora i sistemi",
      "Descoperă sistemele",
      "探索系统"
    ],

    productsTitle: [
      "Ein System. Viele Möglichkeiten.",
      "One system. Many possibilities.",
      "Tek sistem. Birçok olanak.",
      "Un sistema. Muchas posibilidades.",
      "Un système. De nombreuses possibilités.",
      "Un sistema. Tante possibilità.",
      "Un sistem. Multe posibilități.",
      "一个系统，多种可能。"
    ],

    development: [
      "In Entwicklung",
      "In development",
      "Geliştirme aşamasında",
      "En desarrollo",
      "En développement",
      "In sviluppo",
      "În dezvoltare",
      "开发中"
    ],

    preparing: [
      "1.0 in Vorbereitung",
      "1.0 preparing for release",
      "1.0 yayıma hazırlanıyor",
      "1.0 en preparación",
      "1.0 en préparation",
      "1.0 in preparazione",
      "1.0 în pregătire",
      "1.0 发布准备中"
    ],

    available: [
      "Im App Store",
      "On the App Store",
      "App Store’da",
      "En el App Store",
      "Sur l’App Store",
      "Su App Store",
      "În App Store",
      "已在 App Store 上架"
    ],

    planned: [
      "Geplant",
      "Planned",
      "Planlanıyor",
      "Previsto",
      "Prévu",
      "Pianificato",
      "Planificat",
      "规划中"
    ],

    continuity: [
      "Dein persönliches System.",
      "Your personal system.",
      "Kişisel sisteminiz.",
      "Tu sistema personal.",
      "Votre système personnel.",
      "Il tuo sistema personale.",
      "Sistemul tău personal.",
      "你的个人系统。"
    ],

    hospitality: [
      "Hotelbetrieb im Blick.",
      "Hotel operations at a glance.",
      "Otel işletimi bir bakışta.",
      "Tu hotel de un vistazo.",
      "L’hôtel en un coup d’œil.",
      "L’hotel a colpo d’occhio.",
      "Hotelul dintr-o privire.",
      "酒店运营，尽在掌握。"
    ],

    shiftlog: [
      "Jede Übergabe zählt.",
      "Every handover counts.",
      "Her devir teslim önemlidir.",
      "Cada relevo cuenta.",
      "Chaque transmission compte.",
      "Ogni passaggio conta.",
      "Fiecare predare contează.",
      "每次交接都重要。"
    ],

    "easyproof-pro": [
      "Beweise, die zählen.",
      "Evidence that counts.",
      "Değer taşıyan kanıtlar.",
      "Pruebas que cuentan.",
      "Des preuves qui comptent.",
      "Prove che contano.",
      "Dovezi care contează.",
      "让证据发挥价值。"
    ],

    lifeshield: [
      "Signal geben. Kontakte erreichen.",
      "Send a signal. Reach your contacts.",
      "Sinyal gönderin. Kişilerinize ulaşın.",
      "Envía una señal. Contacta con los tuyos.",
      "Envoyez un signal. Joignez vos contacts.",
      "Invia un segnale. Raggiungi i tuoi contatti.",
      "Trimite un semnal. Anunță-ți contactele.",
      "发出信号，联系重要的人。"
    ],

    easyproof: [
      "Arbeit mit Nachweisen dokumentieren.",
      "Document work with evidence.",
      "İşi kanıtlarla belgeleyin.",
      "Documenta el trabajo con pruebas.",
      "Documentez le travail avec des preuves.",
      "Documenta il lavoro con prove.",
      "Documentează munca prin dovezi.",
      "用证据记录工作。"
    ],

    "school-ledger": [
      "Scannen. Speichern. Wiederfinden.",
      "Scan. Save. Find again.",
      "Tara. Kaydet. Yeniden bul.",
      "Escanea. Guarda. Recupera.",
      "Scannez. Enregistrez. Retrouvez.",
      "Scansiona. Salva. Ritrova.",
      "Scanează. Salvează. Regăsește.",
      "扫描、保存、轻松找回。"
    ],

    "delivery-core": [
      "Zustellungen nachvollziehbar dokumentieren.",
      "Document deliveries with traceability.",
      "Teslimatları izlenebilir biçimde belgeleyin.",
      "Documenta las entregas con trazabilidad.",
      "Documentez les livraisons avec traçabilité.",
      "Documenta le consegne in modo tracciabile.",
      "Documentează livrările cu trasabilitate.",
      "以可追溯方式记录配送。"
    ],

    lifeflow: [
      "Verträge und Kosten im Blick.",
      "Contracts and costs at a glance.",
      "Sözleşmeler ve giderler bir bakışta.",
      "Contratos y gastos bajo control.",
      "Contrats et dépenses en vue.",
      "Contratti e costi sotto controllo.",
      "Contracte și costuri la vedere.",
      "合同与费用，一目了然。"
    ],

    lifevault: [
      "Dein Leben. Alles im Griff.",
      "Your life. Everything in hand.",
      "Hayatınız. Her şey elinizin altında.",
      "Tu vida. Todo bajo control.",
      "Votre vie. Tout à portée de main.",
      "La tua vita. Tutto sotto controllo.",
      "Viața ta. Totul sub control.",
      "你的生活，井然有序。"
    ],

    "lifevault-sovereign": [
      "Dokumente, Nachweise und Kontrolle.",
      "Documents, evidence and control.",
      "Belgeler, kanıtlar ve kontrol.",
      "Documentos, pruebas y control.",
      "Documents, preuves et contrôle.",
      "Documenti, prove e controllo.",
      "Documente, dovezi și control.",
      "文档、证据与自主掌控。"
    ],

    origin: [
      "Zusammenhänge verstehen.",
      "Understand connections.",
      "Bağlantıları anlayın.",
      "Comprende las conexiones.",
      "Comprendre les liens.",
      "Comprendi le connessioni.",
      "Înțelege conexiunile.",
      "理解事物间的联系。"
    ],

    statusNote: [
      "Veröffentlichte Apps, aktive Entwicklung und geplante Erweiterungen sind jeweils gekennzeichnet.",
      "Released apps, active development and planned extensions are clearly labelled.",
      "Yayımlanan uygulamalar, aktif geliştirmeler ve planlanan eklemeler ayrı işaretlenmiştir.",
      "Las apps publicadas, los desarrollos activos y las ampliaciones previstas están identificados.",
      "Apps publiées, développements en cours et extensions prévues sont indiqués.",
      "App pubblicate, sviluppi in corso ed estensioni previste sono indicati.",
      "Aplicațiile lansate, dezvoltările active și extinderile planificate sunt marcate.",
      "已发布应用、开发中项目与规划中的扩展均有明确标注。"
    ],

    appsTitle: [
      "Deine Apps. Direkt verfügbar.",
      "Your apps. Available now.",
      "Uygulamalarınız. Hemen erişilebilir.",
      "Tus apps. Ya disponibles.",
      "Vos apps. Disponibles maintenant.",
      "Le tue app. Già disponibili.",
      "Aplicațiile tale. Disponibile acum.",
      "你的应用，即刻可用。"
    ],

    appsLead: [
      "Wähle eine App und entdecke ihre Funktionen direkt im App Store.",
      "Choose an app and explore its features on the App Store.",
      "Bir uygulama seçin ve özelliklerini App Store’da keşfedin.",
      "Elige una app y descubre sus funciones en el App Store.",
      "Choisissez une app et découvrez ses fonctions sur l’App Store.",
      "Scegli un’app e scopri le sue funzioni su App Store.",
      "Alege o aplicație și descoperă funcțiile sale în App Store.",
      "选择应用，在 App Store 了解功能。"
    ],

    storeNote: [
      "Die Karten öffnen den App Store. Dort findest du aktuelle Preise, Funktionen und Geräteanforderungen.",
      "Cards open the App Store, where you can find current prices, features and device requirements.",
      "Kartlar App Store’u açar. Güncel fiyatlar, özellikler ve cihaz gereksinimleri oradadır.",
      "Las tarjetas abren el App Store, con precios, funciones y requisitos actuales.",
      "Les cartes ouvrent l’App Store, avec les prix, fonctions et exigences actuels.",
      "Le schede aprono App Store, con prezzi, funzioni e requisiti aggiornati.",
      "Cardurile deschid App Store, cu prețuri, funcții și cerințe actuale.",
      "卡片会打开 App Store，可查看最新价格、功能和设备要求。"
    ],

    systemTitle: [
      "Deine Daten. Deine Entscheidung.",
      "Your data. Your decision.",
      "Verileriniz. Kararınız.",
      "Tus datos. Tu decisión.",
      "Vos données. Votre décision.",
      "I tuoi dati. La tua decisione.",
      "Datele tale. Decizia ta.",
      "你的数据，由你决定。"
    ],

    systemText: [
      "Identität, Kontext und nachvollziehbare Abläufe bilden die gemeinsame Grundlage. CONTINUITY verbindet diese Idee zu einem persönlichen System und befindet sich in Entwicklung.",
      "Identity, context and traceable processes form the shared foundation. CONTINUITY brings this idea into a personal system and is in development.",
      "Kimlik, bağlam ve izlenebilir süreçler ortak temeli oluşturur. CONTINUITY bu fikri kişisel bir sistemde birleştirir ve geliştirme aşamasındadır.",
      "Identidad, contexto y procesos trazables forman la base común. CONTINUITY reúne esta idea en un sistema personal en desarrollo.",
      "Identité, contexte et processus traçables forment la base commune. CONTINUITY les réunit dans un système personnel en développement.",
      "Identità, contesto e processi tracciabili sono la base comune. CONTINUITY li riunisce in un sistema personale in sviluppo.",
      "Identitatea, contextul și procesele trasabile formează baza comună. CONTINUITY le reunește într-un sistem personal aflat în dezvoltare.",
      "身份、上下文与可追溯流程构成共同基础。CONTINUITY 正将这一理念整合为个人系统，目前处于开发阶段。"
    ],

    coreLink: [
      "Die Architektur entdecken →",
      "Explore the architecture →",
      "Mimariyi keşfet →",
      "Explorar la arquitectura →",
      "Découvrir l’architecture →",
      "Esplora l’architettura →",
      "Descoperă arhitectura →",
      "探索架构 →"
    ],

    hotelTitle: [
      "Hotelbetrieb. Gemeinsam im Blick.",
      "Hotel operations. A shared view.",
      "Otel işletimi. Ortak bir bakış.",
      "El hotel. Una visión compartida.",
      "L’hôtel. Une vision partagée.",
      "L’hotel. Una visione condivisa.",
      "Hotelul. O perspectivă comună.",
      "酒店运营，团队共同掌握。"
    ],

    hotelText: [
      "Zimmer, Gäste, Reservierungen, Housekeeping, Gastronomie und Bestand in einem gemeinsamen System. Version 1.0 wird für die Veröffentlichung vorbereitet; Online-Zahlungen befinden sich noch in Integration und Test.",
      "Rooms, guests, reservations, housekeeping, dining and inventory in one shared system. Version 1.0 is being prepared for release; online payments are still in integration and testing.",
      "Odalar, misafirler, rezervasyonlar, kat hizmetleri, restoran ve stok tek sistemde. Sürüm 1.0 yayıma hazırlanıyor; çevrimiçi ödemeler entegrasyon ve test aşamasında.",
      "Habitaciones, huéspedes, reservas, limpieza, restauración e inventario en un sistema. La versión 1.0 está en preparación; los pagos en línea siguen en integración y pruebas.",
      "Chambres, clients, réservations, entretien, restauration et stocks dans un système commun. La version 1.0 est en préparation ; les paiements restent en intégration et test.",
      "Camere, ospiti, prenotazioni, pulizie, ristorazione e scorte in un sistema. La versione 1.0 è in preparazione; i pagamenti online sono ancora in integrazione e test.",
      "Camere, oaspeți, rezervări, curățenie, restaurant și stocuri într-un sistem. Versiunea 1.0 este în pregătire; plățile online sunt încă în integrare și testare.",
      "客房、住客、预订、清洁、餐饮与库存汇聚在共同系统中。1.0 版本正在准备发布，在线支付仍处于集成与测试阶段。"
    ],

    hotelLink: [
      "Hospitality anfragen →",
      "Ask about Hospitality →",
      "Hospitality hakkında bilgi alın →",
      "Consultar sobre Hospitality →",
      "Se renseigner sur Hospitality →",
      "Informazioni su Hospitality →",
      "Solicită informații →",
      "咨询 Hospitality →"
    ],

    aiTitle: [
      "Persönliche KI. Unter deiner Kontrolle.",
      "Personal AI. Under your control.",
      "Kişisel yapay zekâ. Kontrol sizde.",
      "IA personal. Bajo tu control.",
      "IA personnelle. Sous votre contrôle.",
      "IA personale. Sotto il tuo controllo.",
      "IA personală. Sub controlul tău.",
      "个人 AI，由你掌控。"
    ],

    aiText: [
      "Die persönliche KI soll Zusammenhänge erklären und Aktionen vorbereiten. Für Hospitality 2.0 ist die Verbindung zwischen Gast und Hotel geplant. Verbindliche Buchungen und Zahlungen benötigen die vorgesehenen Bestätigungen.",
      "Personal AI is intended to explain context and prepare actions. Hospitality 2.0 plans to connect guest and hotel. Binding bookings and payments require the designated approvals.",
      "Kişisel yapay zekânın bağlamı açıklaması ve işlemleri hazırlaması planlanıyor. Hospitality 2.0 misafir ile oteli bağlayacak. Bağlayıcı rezervasyonlar ve ödemeler gerekli onayları gerektirir.",
      "La IA personal explicará el contexto y preparará acciones. Hospitality 2.0 prevé conectar huésped y hotel. Reservas vinculantes y pagos requieren las confirmaciones previstas.",
      "L’IA personnelle doit expliquer le contexte et préparer les actions. Hospitality 2.0 prévoit de relier client et hôtel. Réservations fermes et paiements nécessitent les validations prévues.",
      "L’IA personale spiegherà il contesto e preparerà le azioni. Hospitality 2.0 prevede di collegare ospite e hotel. Prenotazioni vincolanti e pagamenti richiedono le conferme previste.",
      "IA personală va explica contextul și va pregăti acțiuni. Hospitality 2.0 prevede legătura dintre oaspete și hotel. Rezervările ferme și plățile necesită aprobările prevăzute.",
      "个人 AI 将解释上下文并准备操作。Hospitality 2.0 计划连接住客与酒店。具有约束力的预订和付款仍需规定的确认。"
    ],

    contactTitle: [
      "Lass uns ins Gespräch kommen.",
      "Let’s start a conversation.",
      "Görüşmeye başlayalım.",
      "Hablemos.",
      "Parlons-en.",
      "Parliamone.",
      "Hai să discutăm.",
      "让我们聊聊。"
    ],

    contactText: [
      "Fragen zu einer App oder Interesse an Hospitality? Schreib uns, worum es geht.",
      "Questions about an app or interested in Hospitality? Tell us what you have in mind.",
      "Bir uygulamayla ilgili sorunuz mu var veya Hospitality ile mi ilgileniyorsunuz? Bize yazın.",
      "¿Dudas sobre una app o interés en Hospitality? Cuéntanos qué necesitas.",
      "Une question sur une app ou un intérêt pour Hospitality ? Écrivez-nous.",
      "Domande su un’app o interesse per Hospitality? Scrivici.",
      "Întrebări despre o aplicație sau interes pentru Hospitality? Scrie-ne.",
      "对应用有疑问，或对 Hospitality 感兴趣？欢迎联系我们。"
    ],

    footerNav: [
      "Weitere Informationen",
      "Further information",
      "Diğer bilgiler",
      "Más información",
      "Informations complémentaires",
      "Altre informazioni",
      "Informații suplimentare",
      "更多信息"
    ]
  };

  for (const [key, values] of Object.entries(rows)) {
    languages.forEach((language, index) => {
      api.translations[language] ||= {};
      api.translations[language]["zh." + key] = values[index];
    });
  }

  try {
    const requested = new URLSearchParams(location.search).get("lang");

    if (languages.includes(requested)) {
      api.setLanguage(requested);
    }
  } catch {
    // Texte funktionieren auch ohne URL-Parameter.
  }

  api.refresh();

  window.addEventListener("zal:languagechange", event => {
    try {
      const url = new URL(location.href);

      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", event.detail.language);
        history.replaceState(null, "", url);
      }
    } catch {
      // Sprachwechsel funktioniert auch ohne History-Zugriff.
    }
  });
})();
