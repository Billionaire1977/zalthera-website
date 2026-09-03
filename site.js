/* ============================================================
   ZAL'THERA WEBSITE 2.4
   SITE INTERACTION + MULTILINGUAL ZAL SEARCH
   FINAL CSS-COMPATIBLE POLISH
   ============================================================ */

(() => {
  "use strict";

  const UI_COPY = {"de":{"navOpen":"Navigation \u00f6ffnen","navClose":"Navigation schlie\u00dfen","searchLabel":"ZAL SEARCH","searchTitle":"Das System erkunden.","searchClose":"Suche schlie\u00dfen","searchPlaceholder":"System, Produkt, Funktion oder Thema suchen \u2026","searchAria":"ZAL\u2019THERA durchsuchen","searchOpenTitle":"Suche \u00f6ffnen (Cmd/Ctrl + K)","systemIndex":"SYSTEMINDEX","resultOne":"ERGEBNIS","resultMany":"ERGEBNISSE","emptyTitle":"Nichts gefunden.","emptyText":"Versuche z. B. \u201econtinuity\u201c, \u201eledger\u201c, \u201evoice\u201c, \u201eshift\u201c, \u201efinance\u201c oder \u201epilot\u201c.","localSearch":"LOKALE SUCHE","external":"KEIN EXTERNER SUCHANBIETER","pilot":"PILOT"},"en":{"navOpen":"Open navigation","navClose":"Close navigation","searchLabel":"ZAL SEARCH","searchTitle":"Explore the system.","searchClose":"Close search","searchPlaceholder":"Search system, product, function or topic \u2026","searchAria":"Search ZAL\u2019THERA","searchOpenTitle":"Open search (Cmd/Ctrl + K)","systemIndex":"SYSTEM INDEX","resultOne":"RESULT","resultMany":"RESULTS","emptyTitle":"Nothing found.","emptyText":"Try \u201ccontinuity\u201d, \u201cledger\u201d, \u201cvoice\u201d, \u201cshift\u201d, \u201cfinance\u201d or \u201cpilot\u201d.","localSearch":"LOCAL SEARCH","external":"NO EXTERNAL SEARCH PROVIDER","pilot":"PILOT"},"tr":{"navOpen":"Navigasyonu a\u00e7","navClose":"Navigasyonu kapat","searchLabel":"ZAL SEARCH","searchTitle":"Sistemi ke\u015ffet.","searchClose":"Aramay\u0131 kapat","searchPlaceholder":"Sistem, \u00fcr\u00fcn, i\u015flev veya konu ara \u2026","searchAria":"ZAL\u2019THERA i\u00e7inde ara","searchOpenTitle":"Aramay\u0131 a\u00e7 (Cmd/Ctrl + K)","systemIndex":"S\u0130STEM D\u0130Z\u0130N\u0130","resultOne":"SONU\u00c7","resultMany":"SONU\u00c7","emptyTitle":"Sonu\u00e7 bulunamad\u0131.","emptyText":"\u00d6rn. \u201ccontinuity\u201d, \u201cledger\u201d, \u201cvoice\u201d, \u201cshift\u201d, \u201cfinance\u201d veya \u201cpilot\u201d deneyin.","localSearch":"YEREL ARAMA","external":"HAR\u0130C\u0130 ARAMA SA\u011eLAYICISI YOK","pilot":"P\u0130LOT"},"es":{"navOpen":"Abrir navegaci\u00f3n","navClose":"Cerrar navegaci\u00f3n","searchLabel":"ZAL SEARCH","searchTitle":"Explora el sistema.","searchClose":"Cerrar b\u00fasqueda","searchPlaceholder":"Buscar sistema, producto, funci\u00f3n o tema \u2026","searchAria":"Buscar en ZAL\u2019THERA","searchOpenTitle":"Abrir b\u00fasqueda (Cmd/Ctrl + K)","systemIndex":"\u00cdNDICE DEL SISTEMA","resultOne":"RESULTADO","resultMany":"RESULTADOS","emptyTitle":"No se encontr\u00f3 nada.","emptyText":"Prueba con \u201ccontinuity\u201d, \u201cledger\u201d, \u201cvoice\u201d, \u201cshift\u201d, \u201cfinance\u201d o \u201cpilot\u201d.","localSearch":"B\u00daSQUEDA LOCAL","external":"SIN PROVEEDOR EXTERNO","pilot":"PILOTO"},"fr":{"navOpen":"Ouvrir la navigation","navClose":"Fermer la navigation","searchLabel":"ZAL SEARCH","searchTitle":"Explorer le syst\u00e8me.","searchClose":"Fermer la recherche","searchPlaceholder":"Rechercher un syst\u00e8me, produit, fonction ou sujet \u2026","searchAria":"Rechercher dans ZAL\u2019THERA","searchOpenTitle":"Ouvrir la recherche (Cmd/Ctrl + K)","systemIndex":"INDEX DU SYST\u00c8ME","resultOne":"R\u00c9SULTAT","resultMany":"R\u00c9SULTATS","emptyTitle":"Aucun r\u00e9sultat.","emptyText":"Essayez \u00ab continuity \u00bb, \u00ab ledger \u00bb, \u00ab voice \u00bb, \u00ab shift \u00bb, \u00ab finance \u00bb ou \u00ab pilot \u00bb.","localSearch":"RECHERCHE LOCALE","external":"AUCUN FOURNISSEUR EXTERNE","pilot":"PILOTE"},"it":{"navOpen":"Apri navigazione","navClose":"Chiudi navigazione","searchLabel":"ZAL SEARCH","searchTitle":"Esplora il sistema.","searchClose":"Chiudi ricerca","searchPlaceholder":"Cerca sistema, prodotto, funzione o argomento \u2026","searchAria":"Cerca in ZAL\u2019THERA","searchOpenTitle":"Apri ricerca (Cmd/Ctrl + K)","systemIndex":"INDICE DEL SISTEMA","resultOne":"RISULTATO","resultMany":"RISULTATI","emptyTitle":"Nessun risultato.","emptyText":"Prova \u201ccontinuity\u201d, \u201cledger\u201d, \u201cvoice\u201d, \u201cshift\u201d, \u201cfinance\u201d o \u201cpilot\u201d.","localSearch":"RICERCA LOCALE","external":"NESSUN PROVIDER ESTERNO","pilot":"PILOTA"},"ro":{"navOpen":"Deschide navigarea","navClose":"\u00cenchide navigarea","searchLabel":"ZAL SEARCH","searchTitle":"Exploreaz\u0103 sistemul.","searchClose":"\u00cenchide c\u0103utarea","searchPlaceholder":"Caut\u0103 sistem, produs, func\u021bie sau subiect \u2026","searchAria":"Caut\u0103 \u00een ZAL\u2019THERA","searchOpenTitle":"Deschide c\u0103utarea (Cmd/Ctrl + K)","systemIndex":"INDEX SISTEM","resultOne":"REZULTAT","resultMany":"REZULTATE","emptyTitle":"Nu s-a g\u0103sit nimic.","emptyText":"\u00cencearc\u0103 \u201econtinuity\u201d, \u201eledger\u201d, \u201evoice\u201d, \u201eshift\u201d, \u201efinance\u201d sau \u201epilot\u201d.","localSearch":"C\u0102UTARE LOCAL\u0102","external":"F\u0102R\u0102 FURNIZOR EXTERN","pilot":"PILOT"},"zh-Hans":{"navOpen":"\u6253\u5f00\u5bfc\u822a","navClose":"\u5173\u95ed\u5bfc\u822a","searchLabel":"ZAL SEARCH","searchTitle":"\u63a2\u7d22\u7cfb\u7edf\u3002","searchClose":"\u5173\u95ed\u641c\u7d22","searchPlaceholder":"\u641c\u7d22\u7cfb\u7edf\u3001\u4ea7\u54c1\u3001\u529f\u80fd\u6216\u4e3b\u9898 \u2026","searchAria":"\u641c\u7d22 ZAL\u2019THERA","searchOpenTitle":"\u6253\u5f00\u641c\u7d22 (Cmd/Ctrl + K)","systemIndex":"\u7cfb\u7edf\u7d22\u5f15","resultOne":"\u4e2a\u7ed3\u679c","resultMany":"\u4e2a\u7ed3\u679c","emptyTitle":"\u672a\u627e\u5230\u7ed3\u679c\u3002","emptyText":"\u53ef\u5c1d\u8bd5\u201ccontinuity\u201d\u201cledger\u201d\u201cvoice\u201d\u201cshift\u201d\u201cfinance\u201d\u6216\u201cpilot\u201d\u3002","localSearch":"\u672c\u5730\u641c\u7d22","external":"\u4e0d\u4f7f\u7528\u5916\u90e8\u641c\u7d22\u670d\u52a1","pilot":"\u8bd5\u70b9"}};
  const SEARCH_ITEMS = [{"id":"core","href":"core.html","title":"ZAL\u2019THERA Core","category":{"de":"SYSTEMGRUNDLAGE","en":"SYSTEM FOUNDATION","tr":"S\u0130STEM TEMEL\u0130","es":"BASE DEL SISTEMA","fr":"FONDATION DU SYST\u00c8ME","it":"FONDAMENTO DEL SISTEMA","ro":"FUNDA\u021aIA SISTEMULUI","zh-Hans":"\u7cfb\u7edf\u57fa\u7840"},"description":{"de":"Identit\u00e4t, Kontext, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausf\u00fchrung.","en":"Identity, context, policy, consent, audit, ledger, trust and controlled execution.","tr":"Kimlik, ba\u011flam, politika, onay, denetim, ledger, g\u00fcven ve kontroll\u00fc y\u00fcr\u00fctme.","es":"Identidad, contexto, pol\u00edticas, consentimiento, auditor\u00eda, ledger, confianza y ejecuci\u00f3n controlada.","fr":"Identit\u00e9, contexte, r\u00e8gles, consentement, audit, ledger, confiance et ex\u00e9cution contr\u00f4l\u00e9e.","it":"Identit\u00e0, contesto, policy, consenso, audit, ledger, fiducia ed esecuzione controllata.","ro":"Identitate, context, politici, consim\u021b\u0103m\u00e2nt, audit, ledger, \u00eencredere \u0219i execu\u021bie controlat\u0103.","zh-Hans":"\u8eab\u4efd\u3001\u4e0a\u4e0b\u6587\u3001\u7b56\u7565\u3001\u540c\u610f\u3001\u5ba1\u8ba1\u3001Ledger\u3001\u4fe1\u4efb\u4e0e\u53d7\u63a7\u6267\u884c\u3002"},"keywords":"system core identity identit\u00e4t kimlik identidad identit\u00e9 identit\u00e0 identitate \u8eab\u4efd policy consent audit trust architecture kern"},{"id":"ledger","href":"core.html#ledger","title":"THE LEDGER","category":{"de":"CORE \u00b7 AUDIT","en":"CORE \u00b7 AUDIT","tr":"CORE \u00b7 DENET\u0130M","es":"CORE \u00b7 AUDITOR\u00cdA","fr":"CORE \u00b7 AUDIT","it":"CORE \u00b7 AUDIT","ro":"CORE \u00b7 AUDIT","zh-Hans":"CORE \u00b7 \u5ba1\u8ba1"},"description":{"de":"Lokaler Wahrheitskern f\u00fcr nachvollziehbare und \u00fcberpr\u00fcfbare Ereignisse.","en":"Local truth core for traceable and verifiable events.","tr":"\u0130zlenebilir ve do\u011frulanabilir olaylar i\u00e7in yerel do\u011fruluk \u00e7ekirde\u011fi.","es":"N\u00facleo local de verdad para eventos trazables y verificables.","fr":"Noyau local de v\u00e9rit\u00e9 pour des \u00e9v\u00e9nements tra\u00e7ables et v\u00e9rifiables.","it":"Nucleo locale di verit\u00e0 per eventi tracciabili e verificabili.","ro":"Nucleu local de adev\u0103r pentru evenimente trasabile \u0219i verificabile.","zh-Hans":"\u7528\u4e8e\u53ef\u8ffd\u6eaf\u3001\u53ef\u9a8c\u8bc1\u4e8b\u4ef6\u7684\u672c\u5730\u4e8b\u5b9e\u6838\u5fc3\u3002"},"keywords":"ledger audit event proof verified append only linked nachweis ereignis denetim prueba preuve prova dovad\u0103 \u5ba1\u8ba1 \u8bc1\u660e"},{"id":"continuity","href":"index.html#continuity","title":"CONTINUITY","category":{"de":"PERS\u00d6NLICHES SOUVER\u00c4NES SYSTEM","en":"PERSONAL SOVEREIGN SYSTEM","tr":"K\u0130\u015e\u0130SEL EGEMEN S\u0130STEM","es":"SISTEMA PERSONAL SOBERANO","fr":"SYST\u00c8ME PERSONNEL SOUVERAIN","it":"SISTEMA PERSONALE SOVRANO","ro":"SISTEM PERSONAL SUVERAN","zh-Hans":"\u4e2a\u4eba\u4e3b\u6743\u7cfb\u7edf"},"description":{"de":"Dokumente, Cards, Timeline, Finance, Herkunft, Kontext und pers\u00f6nliche Systemintelligenz.","en":"Documents, Cards, Timeline, finance, provenance, context and personal system intelligence.","tr":"Belgeler, Cards, Timeline, finans, kaynak, ba\u011flam ve ki\u015fisel sistem zek\u00e2s\u0131.","es":"Documentos, Cards, Timeline, finanzas, procedencia, contexto e inteligencia personal del sistema.","fr":"Documents, Cards, Timeline, finances, provenance, contexte et intelligence personnelle du syst\u00e8me.","it":"Documenti, Cards, Timeline, finanza, provenienza, contesto e intelligenza personale del sistema.","ro":"Documente, Cards, Timeline, finan\u021be, provenien\u021b\u0103, context \u0219i inteligen\u021b\u0103 personal\u0103 a sistemului.","zh-Hans":"\u6587\u6863\u3001Cards\u3001Timeline\u3001\u8d22\u52a1\u3001\u6765\u6e90\u3001\u4e0a\u4e0b\u6587\u4e0e\u4e2a\u4eba\u7cfb\u7edf\u667a\u80fd\u3002"},"keywords":"continuity dokumente documents belgeler documentos finance finanzen finans finanzas finances documente \u6587\u6863 \u8d22\u52a1 cards timeline context"},{"id":"intelligence","href":"index.html#intelligence","title":"ZAL\u2019THERA Intelligence","category":{"de":"KONTEXTUELLE INTELLIGENZ","en":"CONTEXTUAL INTELLIGENCE","tr":"BA\u011eLAMSAL ZEK\u00c2","es":"INTELIGENCIA CONTEXTUAL","fr":"INTELLIGENCE CONTEXTUELLE","it":"INTELLIGENZA CONTESTUALE","ro":"INTELIGEN\u021a\u0102 CONTEXTUAL\u0102","zh-Hans":"\u4e0a\u4e0b\u6587\u667a\u80fd"},"description":{"de":"Kontextgebundene Intelligenz, die versteht, erkl\u00e4rt und vorbereitet, ohne Autorit\u00e4t zu \u00fcbernehmen.","en":"Context-bound intelligence that understands, explains and prepares without taking over authority.","tr":"Yetkiyi devralmadan anlayan, a\u00e7\u0131klayan ve haz\u0131rlayan ba\u011flama ba\u011fl\u0131 zek\u00e2.","es":"Inteligencia ligada al contexto que comprende, explica y prepara sin asumir autoridad.","fr":"Une intelligence li\u00e9e au contexte qui comprend, explique et pr\u00e9pare sans prendre l\u2019autorit\u00e9.","it":"Intelligenza legata al contesto che comprende, spiega e prepara senza assumere autorit\u00e0.","ro":"Inteligen\u021b\u0103 legat\u0103 de context care \u00een\u021belege, explic\u0103 \u0219i preg\u0103te\u0219te f\u0103r\u0103 a prelua autoritatea.","zh-Hans":"\u57fa\u4e8e\u4e0a\u4e0b\u6587\u8fdb\u884c\u7406\u89e3\u3001\u89e3\u91ca\u548c\u51c6\u5907\uff0c\u4f46\u4e0d\u63a5\u7ba1\u4eba\u7684\u6388\u6743\u3002"},"keywords":"ai k\u00fcnstliche intelligenz intelligence yapay zeka inteligencia intelligence intelligenza inteligen\u021b\u0103 \u4eba\u5de5\u667a\u80fd context agent known inferred uncertain unknown"},{"id":"communication","href":"index.html#communication","title":{"de":"Kommunikation","en":"Communication","tr":"\u0130leti\u015fim","es":"Comunicaci\u00f3n","fr":"Communication","it":"Comunicazione","ro":"Comunicare","zh-Hans":"\u901a\u4fe1"},"category":{"de":"IDENTIT\u00c4T-ZU-IDENTIT\u00c4T","en":"IDENTITY-TO-IDENTITY","tr":"K\u0130ML\u0130KTEN K\u0130ML\u0130\u011eE","es":"IDENTIDAD A IDENTIDAD","fr":"IDENTIT\u00c9 \u00c0 IDENTIT\u00c9","it":"IDENTIT\u00c0 A IDENTIT\u00c0","ro":"IDENTITATE LA IDENTITATE","zh-Hans":"\u8eab\u4efd\u5230\u8eab\u4efd"},"description":{"de":"Vertrauensbasierte Kommunikation zwischen autorisierten Identit\u00e4ten.","en":"Trust-based communication between authorized identities.","tr":"Yetkili kimlikler aras\u0131nda g\u00fcvene dayal\u0131 ileti\u015fim.","es":"Comunicaci\u00f3n basada en confianza entre identidades autorizadas.","fr":"Communication fond\u00e9e sur la confiance entre identit\u00e9s autoris\u00e9es.","it":"Comunicazione basata sulla fiducia tra identit\u00e0 autorizzate.","ro":"Comunicare bazat\u0103 pe \u00eencredere \u00eentre identit\u0103\u021bi autorizate.","zh-Hans":"\u6388\u6743\u8eab\u4efd\u4e4b\u95f4\u57fa\u4e8e\u4fe1\u4efb\u7684\u901a\u4fe1\u3002"},"keywords":"communication kommunikation ileti\u015fim comunicaci\u00f3n comunicazione comunicare \u901a\u4fe1 voice video files trust consent zal id"},{"id":"voicebridge","href":"index.html#communication","title":"VoiceBridge","category":{"de":"COMMUNICATION \u00b7 ENTWICKLUNG","en":"COMMUNICATION \u00b7 DEVELOPMENT","tr":"\u0130LET\u0130\u015e\u0130M \u00b7 GEL\u0130\u015eT\u0130RME","es":"COMUNICACI\u00d3N \u00b7 DESARROLLO","fr":"COMMUNICATION \u00b7 D\u00c9VELOPPEMENT","it":"COMUNICAZIONE \u00b7 SVILUPPO","ro":"COMUNICARE \u00b7 DEZVOLTARE","zh-Hans":"\u901a\u4fe1 \u00b7 \u5f00\u53d1\u4e2d"},"description":{"de":"Direkte Sprachkommunikation zwischen autorisierten Identit\u00e4ten.","en":"Direct voice communication between authorized identities.","tr":"Yetkili kimlikler aras\u0131nda do\u011frudan sesli ileti\u015fim.","es":"Comunicaci\u00f3n de voz directa entre identidades autorizadas.","fr":"Communication vocale directe entre identit\u00e9s autoris\u00e9es.","it":"Comunicazione vocale diretta tra identit\u00e0 autorizzate.","ro":"Comunicare vocal\u0103 direct\u0103 \u00eentre identit\u0103\u021bi autorizate.","zh-Hans":"\u6388\u6743\u8eab\u4efd\u4e4b\u95f4\u7684\u76f4\u63a5\u8bed\u97f3\u901a\u4fe1\u3002"},"keywords":"voicebridge voice sprache ses voz voix voce \u8bed\u97f3 push to talk ptt webrtc audio"},{"id":"industry","href":"index.html#industry","title":"ZAL\u2019THERA Industry","category":{"de":"REALE SYSTEME","en":"REAL-WORLD SYSTEMS","tr":"GER\u00c7EK D\u00dcNYA S\u0130STEMLER\u0130","es":"SISTEMAS DEL MUNDO REAL","fr":"SYST\u00c8MES DU MONDE R\u00c9EL","it":"SISTEMI DEL MONDO REALE","ro":"SISTEME DIN LUMEA REAL\u0102","zh-Hans":"\u73b0\u5b9e\u4e16\u754c\u7cfb\u7edf"},"description":{"de":"Operative \u00dcbergaben, Prozesszust\u00e4nde, Sensordaten, Messwerte und zuk\u00fcnftige Maschinenanbindungen.","en":"Operational handovers, process states, sensor data, measurements and future machine connections.","tr":"Operasyonel devirler, s\u00fcre\u00e7 durumlar\u0131, sens\u00f6r verileri, \u00f6l\u00e7\u00fcmler ve gelecekteki makine ba\u011flant\u0131lar\u0131.","es":"Relevos operativos, estados de proceso, datos de sensores, mediciones y futuras conexiones de m\u00e1quinas.","fr":"Rel\u00e8ves op\u00e9rationnelles, \u00e9tats de processus, donn\u00e9es capteurs, mesures et futures connexions machines.","it":"Passaggi operativi, stati di processo, dati sensore, misure e future connessioni macchina.","ro":"Pred\u0103ri opera\u021bionale, st\u0103ri de proces, date de senzori, m\u0103sur\u0103tori \u0219i viitoare conexiuni cu utilaje.","zh-Hans":"\u8fd0\u8425\u4ea4\u63a5\u3001\u6d41\u7a0b\u72b6\u6001\u3001\u4f20\u611f\u5668\u6570\u636e\u3001\u6d4b\u91cf\u503c\u4e0e\u672a\u6765\u673a\u5668\u8fde\u63a5\u3002"},"keywords":"industry industrie end\u00fcstri industria \u5de5\u4e1a sensor machine maschine process messwerte shiftlog zal-gate"},{"id":"zalgate","href":"index.html#industry","title":"ZAL-Gate","category":{"de":"INDUSTRY \u00b7 ARCHITEKTUR","en":"INDUSTRY \u00b7 ARCHITECTURE","tr":"END\u00dcSTR\u0130 \u00b7 M\u0130MAR\u0130","es":"INDUSTRIA \u00b7 ARQUITECTURA","fr":"INDUSTRIE \u00b7 ARCHITECTURE","it":"INDUSTRIA \u00b7 ARCHITETTURA","ro":"INDUSTRIE \u00b7 ARHITECTUR\u0102","zh-Hans":"\u5de5\u4e1a \u00b7 \u67b6\u6784"},"description":{"de":"Verbindung von Sensorik, Messwerten, Maschinen und Prozesszust\u00e4nden.","en":"Connection of sensors, measurements, machines and process states.","tr":"Sens\u00f6rlerin, \u00f6l\u00e7\u00fcmlerin, makinelerin ve s\u00fcre\u00e7 durumlar\u0131n\u0131n ba\u011flant\u0131s\u0131.","es":"Conexi\u00f3n de sensores, mediciones, m\u00e1quinas y estados de proceso.","fr":"Connexion des capteurs, mesures, machines et \u00e9tats de processus.","it":"Connessione di sensori, misure, macchine e stati di processo.","ro":"Conectarea senzorilor, m\u0103sur\u0103torilor, utilajelor \u0219i st\u0103rilor de proces.","zh-Hans":"\u8fde\u63a5\u4f20\u611f\u5668\u3001\u6d4b\u91cf\u503c\u3001\u673a\u5668\u4e0e\u6d41\u7a0b\u72b6\u6001\u3002"},"keywords":"zal-gate zalgate sensorik sensor sens\u00f6r sensores capteur sensori senzori \u4f20\u611f\u5668 messwerte machine maschine process gateway"},{"id":"proofflow","href":"proofflow.html","title":"ProofFlow","category":{"de":"NACHWEIS \u00b7 AUDIT \u00b7 NACHVOLLZIEHBARKEIT","en":"PROOF \u00b7 AUDIT \u00b7 TRACEABILITY","tr":"KANIT \u00b7 DENET\u0130M \u00b7 \u0130ZLENEB\u0130L\u0130RL\u0130K","es":"PRUEBA \u00b7 AUDITOR\u00cdA \u00b7 TRAZABILIDAD","fr":"PREUVE \u00b7 AUDIT \u00b7 TRA\u00c7ABILIT\u00c9","it":"PROVA \u00b7 AUDIT \u00b7 TRACCIABILIT\u00c0","ro":"DOVAD\u0102 \u00b7 AUDIT \u00b7 TRASABILITATE","zh-Hans":"\u8bc1\u660e \u00b7 \u5ba1\u8ba1 \u00b7 \u53ef\u8ffd\u6eaf\u6027"},"description":{"de":"Nachweise, Fotos, Signaturen, Audit und Export in einem nachvollziehbaren Ablauf.","en":"Evidence, photos, signatures, audit and export in a traceable workflow.","tr":"\u0130zlenebilir bir s\u00fcre\u00e7te kan\u0131tlar, foto\u011fraflar, imzalar, denetim ve d\u0131\u015fa aktarma.","es":"Pruebas, fotos, firmas, auditor\u00eda y exportaci\u00f3n en un flujo trazable.","fr":"Preuves, photos, signatures, audit et export dans un processus tra\u00e7able.","it":"Prove, foto, firme, audit ed esportazione in un flusso tracciabile.","ro":"Dovezi, fotografii, semn\u0103turi, audit \u0219i export \u00eentr-un flux trasabil.","zh-Hans":"\u5728\u53ef\u8ffd\u6eaf\u6d41\u7a0b\u4e2d\u6574\u5408\u8bc1\u660e\u3001\u7167\u7247\u3001\u7b7e\u540d\u3001\u5ba1\u8ba1\u4e0e\u5bfc\u51fa\u3002"},"keywords":"proofflow proof evidence audit sign signature export nachweis kan\u0131t prueba preuve prova dovad\u0103 \u8bc1\u660e"},{"id":"shiftlog","href":"shiftlog.html","title":"ShiftLog","category":{"de":"ZAL\u2019THERA INDUSTRY","en":"ZAL\u2019THERA INDUSTRY","tr":"ZAL\u2019THERA END\u00dcSTR\u0130","es":"ZAL\u2019THERA INDUSTRIA","fr":"ZAL\u2019THERA INDUSTRIE","it":"ZAL\u2019THERA INDUSTRIA","ro":"ZAL\u2019THERA INDUSTRIE","zh-Hans":"ZAL\u2019THERA \u5de5\u4e1a"},"description":{"de":"Digitale Schicht\u00fcbergabe f\u00fcr operative Zust\u00e4nde, offene Punkte und Verantwortlichkeiten.","en":"Digital shift handover for operational states, open points and responsibilities.","tr":"Operasyonel durumlar, a\u00e7\u0131k noktalar ve sorumluluklar i\u00e7in dijital vardiya devri.","es":"Relevo digital de turno para estados operativos, puntos abiertos y responsabilidades.","fr":"Rel\u00e8ve num\u00e9rique pour \u00e9tats op\u00e9rationnels, points ouverts et responsabilit\u00e9s.","it":"Passaggio turno digitale per stati operativi, punti aperti e responsabilit\u00e0.","ro":"Predare digital\u0103 a schimbului pentru st\u0103ri opera\u021bionale, puncte deschise \u0219i responsabilit\u0103\u021bi.","zh-Hans":"\u7528\u4e8e\u8fd0\u8425\u72b6\u6001\u3001\u672a\u7ed3\u4e8b\u9879\u4e0e\u8d23\u4efb\u4ea4\u63a5\u7684\u6570\u5b57\u5316\u73ed\u6b21\u4ea4\u63a5\u3002"},"keywords":"shiftlog shift schicht handover vardiya turno rel\u00e8ve passaggio schimb \u73ed\u6b21 \u4ea4\u63a5 state responsibility"},{"id":"lifeflow","href":"lifeflow.html","title":"LifeFlow","category":{"de":"PERS\u00d6NLICHE FINANZKLARHEIT","en":"PERSONAL FINANCE CLARITY","tr":"K\u0130\u015e\u0130SEL F\u0130NANS NETL\u0130\u011e\u0130","es":"CLARIDAD FINANCIERA PERSONAL","fr":"CLART\u00c9 FINANCI\u00c8RE PERSONNELLE","it":"CHIAREZZA FINANZIARIA PERSONALE","ro":"CLARITATE FINANCIAR\u0102 PERSONAL\u0102","zh-Hans":"\u4e2a\u4eba\u8d22\u52a1\u6e05\u6670\u5ea6"},"description":{"de":"Kosten, Vertr\u00e4ge, Fristen und pers\u00f6nliche Finanz\u00fcbersicht.","en":"Costs, contracts, deadlines and personal financial overview.","tr":"Maliyetler, s\u00f6zle\u015fmeler, s\u00fcreler ve ki\u015fisel finans g\u00f6r\u00fcn\u00fcm\u00fc.","es":"Costes, contratos, plazos y visi\u00f3n financiera personal.","fr":"Co\u00fbts, contrats, \u00e9ch\u00e9ances et vue financi\u00e8re personnelle.","it":"Costi, contratti, scadenze e panoramica finanziaria personale.","ro":"Costuri, contracte, termene \u0219i imagine financiar\u0103 personal\u0103.","zh-Hans":"\u6210\u672c\u3001\u5408\u540c\u3001\u671f\u9650\u4e0e\u4e2a\u4eba\u8d22\u52a1\u6982\u89c8\u3002"},"keywords":"lifeflow kosten costs maliyet costes co\u00fbts costi costuri \u6210\u672c contracts vertr\u00e4ge fristen finance money einkommen ausgaben"},{"id":"pilot","href":"pilot.html","title":"ZAL\u2019THERA Pilot","category":{"de":"KONTROLLIERTER REALER EINSTIEG","en":"CONTROLLED REAL-WORLD ENTRY","tr":"KONTROLL\u00dc GER\u00c7EK D\u00dcNYA G\u0130R\u0130\u015e\u0130","es":"ENTRADA CONTROLADA AL MUNDO REAL","fr":"ENTR\u00c9E CONTR\u00d4L\u00c9E DANS LE R\u00c9EL","it":"INGRESSO CONTROLLATO NEL MONDO REALE","ro":"INTRARE CONTROLAT\u0102 \u00ceN LUMEA REAL\u0102","zh-Hans":"\u53d7\u63a7\u73b0\u5b9e\u573a\u666f\u5165\u53e3"},"description":{"de":"Einen realen Prozess klar abgrenzen, kontrolliert testen und den tats\u00e4chlichen Nutzen pr\u00fcfen.","en":"Clearly scope a real process, test it under control and verify actual value.","tr":"Ger\u00e7ek bir s\u00fcreci net bi\u00e7imde s\u0131n\u0131rla, kontroll\u00fc test et ve ger\u00e7ek fayday\u0131 do\u011frula.","es":"Delimitar un proceso real, probarlo de forma controlada y verificar su valor real.","fr":"D\u00e9limiter un processus r\u00e9el, le tester de fa\u00e7on contr\u00f4l\u00e9e et v\u00e9rifier sa valeur r\u00e9elle.","it":"Definire un processo reale, testarlo in modo controllato e verificarne il valore effettivo.","ro":"Delimiteaz\u0103 clar un proces real, testeaz\u0103-l controlat \u0219i verific\u0103 valoarea real\u0103.","zh-Hans":"\u660e\u786e\u9650\u5b9a\u771f\u5b9e\u6d41\u7a0b\uff0c\u5728\u53d7\u63a7\u6761\u4ef6\u4e0b\u6d4b\u8bd5\u5e76\u9a8c\u8bc1\u5b9e\u9645\u4ef7\u503c\u3002"},"keywords":"pilot pilotprojekt project enterprise firma company \u015firket empresa entreprise azienda companie \u4f01\u4e1a test real process"},{"id":"about","href":"about.html","title":{"de":"\u00dcber ZAL\u2019THERA","en":"About ZAL\u2019THERA","tr":"ZAL\u2019THERA Hakk\u0131nda","es":"Acerca de ZAL\u2019THERA","fr":"\u00c0 propos de ZAL\u2019THERA","it":"Informazioni su ZAL\u2019THERA","ro":"Despre ZAL\u2019THERA","zh-Hans":"\u5173\u4e8e ZAL\u2019THERA"},"category":{"de":"GRUNDPRINZIPIEN","en":"FIRST PRINCIPLES","tr":"TEMEL \u0130LKELER","es":"PRINCIPIOS FUNDAMENTALES","fr":"PRINCIPES FONDAMENTAUX","it":"PRINCIPI FONDAMENTALI","ro":"PRINCIPII FUNDAMENTALE","zh-Hans":"\u57fa\u672c\u539f\u5219"},"description":{"de":"Warum ZAL\u2019THERA entsteht und welche Prinzipien die Architektur bestimmen.","en":"Why ZAL\u2019THERA exists and which principles shape its architecture.","tr":"ZAL\u2019THERA\u2019n\u0131n neden var oldu\u011fu ve mimarisini hangi ilkelerin \u015fekillendirdi\u011fi.","es":"Por qu\u00e9 existe ZAL\u2019THERA y qu\u00e9 principios definen su arquitectura.","fr":"Pourquoi ZAL\u2019THERA existe et quels principes structurent son architecture.","it":"Perch\u00e9 esiste ZAL\u2019THERA e quali principi ne guidano l\u2019architettura.","ro":"De ce exist\u0103 ZAL\u2019THERA \u0219i ce principii \u00eei definesc arhitectura.","zh-Hans":"ZAL\u2019THERA \u4e3a\u4f55\u5b58\u5728\uff0c\u4ee5\u53ca\u54ea\u4e9b\u539f\u5219\u5851\u9020\u5176\u67b6\u6784\u3002"},"keywords":"about \u00fcber hakk\u0131nda acerca propos informazioni despre \u5173\u4e8e principles prinzipien vision"},{"id":"support","href":"support.html","title":"Support","category":{"de":"SUPPORT","en":"SUPPORT","tr":"DESTEK","es":"SOPORTE","fr":"SUPPORT","it":"SUPPORTO","ro":"SUPORT","zh-Hans":"\u652f\u6301"},"description":{"de":"Support und Hilfe zu ZAL\u2019THERA-Produkten und Systemen.","en":"Support and help for ZAL\u2019THERA products and systems.","tr":"ZAL\u2019THERA \u00fcr\u00fcn ve sistemleri i\u00e7in destek ve yard\u0131m.","es":"Soporte y ayuda para productos y sistemas ZAL\u2019THERA.","fr":"Assistance pour les produits et syst\u00e8mes ZAL\u2019THERA.","it":"Supporto e assistenza per prodotti e sistemi ZAL\u2019THERA.","ro":"Suport \u0219i ajutor pentru produsele \u0219i sistemele ZAL\u2019THERA.","zh-Hans":"ZAL\u2019THERA \u4ea7\u54c1\u4e0e\u7cfb\u7edf\u7684\u652f\u6301\u548c\u5e2e\u52a9\u3002"},"keywords":"support hilfe help destek soporte assistance supporto suport \u652f\u6301"}];
  const SUPPORTED_LANGUAGES = ["de","en","tr","es","fr","it","ro","zh-Hans"];

  const normalizeLanguage = (value) => {
    const raw = String(value || "").trim();
    if (SUPPORTED_LANGUAGES.includes(raw)) return raw;
    const lower = raw.toLowerCase();
    if (lower.startsWith("zh")) return "zh-Hans";
    const short = lower.split("-")[0];
    return SUPPORTED_LANGUAGES.includes(short) ? short : "de";
  };

  const getLanguage = () =>
    normalizeLanguage(window.ZAL_I18N?.language || document.documentElement.lang || "de");

  const localized = (value, language) => {
    if (typeof value === "string") return value;
    return value?.[language] ?? value?.en ?? value?.de ?? "";
  };

  const normalizeSearch = (value) =>
    String(value || "")
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\u2019']/g, "")
      .trim();

  /* LOAD SEARCH CSS
     The HTML pages do not all link zal-search.css directly,
     so the interaction layer loads it once, just like the original working version. */
  const ensureSearchStylesheet = () => {
    if (
      document.querySelector('link[data-zal-search-styles]') ||
      [...document.styleSheets].some((sheet) => {
        try {
          return String(sheet.href || "").includes("zal-search.css");
        } catch (_) {
          return false;
        }
      })
    ) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "zal-search.css?v=2.2";
    link.dataset.zalSearchStyles = "true";
    document.head.appendChild(link);
  };

  ensureSearchStylesheet();

  const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* YEAR */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* TOPBAR */
  const topbar = document.querySelector("[data-topbar]");
  const updateTopbar = () => {
    if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive:true });

  /* MOBILE NAV */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  const updateNavLabel = () => {
    if (!navToggle) return;
    const ui = UI_COPY[getLanguage()] || UI_COPY.de;
    navToggle.setAttribute(
      "aria-label",
      navToggle.classList.contains("is-open") ? ui.navClose : ui.navOpen
    );
  };

  const closeNavigation = () => {
    if (!navToggle || !nav) return;
    navToggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded","false");
    document.body.classList.remove("nav-open");
    updateNavLabel();
  };

  if (navToggle && nav) {
    updateNavLabel();
    navToggle.addEventListener("click", () => {
      const open = navToggle.classList.toggle("is-open");
      nav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
      updateNavLabel();
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeNavigation();
    });
  }

  /* REVEAL */
  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold:0.12, rootMargin:"0px 0px -8% 0px" });
    revealElements.forEach((el) => observer.observe(el));
  }

  /* HERO FIELD */
  const hero = document.querySelector("[data-hero]");
  const field = document.querySelector("[data-zal-field]");
  if (hero && field && !reducedMotion) {
    let tx=0, ty=0, cx=0, cy=0, frame=0;
    const render = () => {
      cx += (tx-cx)*0.075;
      cy += (ty-cy)*0.075;
      field.style.setProperty("--zal-x", `${cx}px`);
      field.style.setProperty("--zal-y", `${cy}px`);
      frame = requestAnimationFrame(render);
    };
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      tx = (((event.clientX-rect.left)/rect.width)-0.5)*24;
      ty = (((event.clientY-rect.top)/rect.height)-0.5)*18;
    }, { passive:true });
    hero.addEventListener("pointerleave", () => { tx=0; ty=0; });
    frame = requestAnimationFrame(render);
    window.addEventListener("pagehide", () => cancelAnimationFrame(frame));
  }

  /* SEARCH TRIGGER */
  const ensureSearchTrigger = () => {
    const cta = document.querySelector(".topbar-cta");
    if (!cta || cta.querySelector("[data-zal-search-open]")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "zal-search-trigger";
    button.dataset.zalSearchOpen = "true";
    button.innerHTML = `
      <span class="zal-search-trigger-icon" aria-hidden="true"></span>
      <span class="zal-search-trigger-shortcut" aria-hidden="true">CMD K</span>
    `;
    cta.prepend(button);
  };
  ensureSearchTrigger();

  /* SEARCH ROOT: class names match zal-search.css exactly */
  const search = document.createElement("div");
  search.className = "zal-search";
  search.setAttribute("aria-hidden","true");
  search.innerHTML = `
    <div class="zal-search-backdrop" data-zal-search-close></div>
    <section class="zal-search-dialog" role="dialog" aria-modal="true" aria-labelledby="zal-search-title">
      <header class="zal-search-header">
        <div class="zal-search-brand">
          <span class="zal-search-brand-dot" aria-hidden="true"></span>
          <div>
            <span class="zal-search-label" data-search-label></span>
            <strong id="zal-search-title" data-search-title></strong>
          </div>
        </div>
        <button class="zal-search-close" type="button" data-zal-search-close>ESC</button>
      </header>

      <div class="zal-search-input-wrap">
        <span class="zal-search-input-icon" aria-hidden="true"></span>
        <input class="zal-search-input" type="search" autocomplete="off" spellcheck="false" data-search-input>
        <span class="zal-search-input-key" aria-hidden="true">K</span>
      </div>

      <div class="zal-search-meta" data-search-meta></div>
      <div class="zal-search-results" role="listbox" data-search-results></div>

      <footer class="zal-search-footer">
        <div><span>UP</span><span>DN</span><b data-search-footer-select></b></div>
        <div><span>ENT</span><b data-search-footer-open></b></div>
        <div><span>ESC</span><b data-search-footer-close></b></div>
        <div><b data-search-local></b></div>
      </footer>
    </section>
  `;
  document.body.appendChild(search);

  const input = search.querySelector("[data-search-input]");
  const results = search.querySelector("[data-search-results]");
  const meta = search.querySelector("[data-search-meta]");
  let matches = [];
  let selectedIndex = 0;
  let lastFocused = null;

  const getIndex = () => {
    const lang = getLanguage();
    return SEARCH_ITEMS.map((item) => ({
      id:item.id,
      href:item.href,
      title:localized(item.title,lang),
      category:localized(item.category,lang),
      description:localized(item.description,lang),
      keywords:item.keywords || ""
    }));
  };

  const findMatches = (query) => {
    const index = getIndex();
    const q = normalizeSearch(query);

    if (!q) {
      const featured = ["continuity","core","pilot","lifeflow","proofflow","shiftlog","voicebridge","zalgate","about"];
      return featured.map((id) => index.find((item) => item.id===id)).filter(Boolean);
    }

    const terms = q.split(/\s+/).filter(Boolean);
    return index.map((item) => {
      const title = normalizeSearch(item.title);
      const category = normalizeSearch(item.category);
      const description = normalizeSearch(item.description);
      const keywords = normalizeSearch(item.keywords);
      let score = 0;
      terms.forEach((term) => {
        if (title === term) score += 20;
        if (title.startsWith(term)) score += 12;
        if (title.includes(term)) score += 8;
        if (category.includes(term)) score += 5;
        if (keywords.includes(term)) score += 5;
        if (description.includes(term)) score += 2;
      });
      return {...item,score};
    }).filter((item) => item.score>0).sort((a,b) => b.score-a.score).slice(0,10);
  };

  const updateSelection = () => {
    results.querySelectorAll("[data-search-result]").forEach((button,index) => {
      const active = index === selectedIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
      if (active) button.scrollIntoView({ block:"nearest" });
    });
  };

  const navigate = (item) => {
    if (!item) return;
    closeSearch();
    window.location.href = item.href;
  };

  const renderResults = () => {
    const lang = getLanguage();
    const ui = UI_COPY[lang] || UI_COPY.de;
    matches = findMatches(input.value);
    selectedIndex = 0;

    if (input.value.trim()) {
      meta.textContent = lang === "zh-Hans"
        ? `${matches.length}${ui.resultMany}`
        : `${matches.length} ${matches.length===1 ? ui.resultOne : ui.resultMany}`;
    } else {
      meta.textContent = ui.systemIndex;
    }

    if (!matches.length) {
      results.innerHTML = `
        <div class="zal-search-empty">
          <strong>${ui.emptyTitle}</strong>
          <span>${ui.emptyText}</span>
        </div>
      `;
      return;
    }

    results.innerHTML = matches.map((item,index) => `
      <button
        class="zal-search-result${index===0 ? " is-active" : ""}"
        type="button"
        role="option"
        aria-selected="${index===0 ? "true" : "false"}"
        data-search-result="${index}"
      >
        <span class="zal-search-result-main">
          <span class="zal-search-result-category">${item.category}</span>
          <strong>${item.title}</strong>
          <small>${item.description}</small>
        </span>
        <span class="zal-search-result-arrow" aria-hidden="true">-&gt;</span>
      </button>
    `).join("");

    results.querySelectorAll("[data-search-result]").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        selectedIndex = Number(button.dataset.searchResult);
        updateSelection();
      });
      button.addEventListener("click", () => {
        navigate(matches[Number(button.dataset.searchResult)]);
      });
    });
  };

  const updateLanguage = () => {
    const ui = UI_COPY[getLanguage()] || UI_COPY.de;
    search.querySelector("[data-search-label]").textContent = ui.searchLabel;
    search.querySelector("[data-search-title]").textContent = ui.searchTitle;
    search.querySelector(".zal-search-close").setAttribute("aria-label",ui.searchClose);
    input.placeholder = ui.searchPlaceholder;
    input.setAttribute("aria-label",ui.searchAria);

    const trigger = document.querySelector("[data-zal-search-open]");
    if (trigger) {
      trigger.setAttribute("aria-label",ui.searchAria);
      trigger.setAttribute("title",ui.searchOpenTitle);
    }

    search.querySelector("[data-search-footer-select]").textContent =
      getLanguage()==="de" ? "AUSWAEHLEN" : "SELECT";
    search.querySelector("[data-search-footer-open]").textContent =
      getLanguage()==="de" ? "OEFFNEN" : "OPEN";
    search.querySelector("[data-search-footer-close]").textContent =
      getLanguage()==="de" ? "SCHLIESSEN" : "CLOSE";
    search.querySelector("[data-search-local]").textContent =
      `${ui.localSearch} / ${ui.external}`;

    updateNavLabel();
    renderResults();
  };

  const openSearch = () => {
    if (search.classList.contains("is-open")) return;
    lastFocused = document.activeElement;
    closeNavigation();
    search.classList.add("is-open");
    search.setAttribute("aria-hidden","false");
    document.body.classList.add("zal-search-open");
    input.value = "";
    updateLanguage();
    requestAnimationFrame(() => input.focus());
  };

  function closeSearch() {
    if (!search.classList.contains("is-open")) return;
    search.classList.remove("is-open");
    search.setAttribute("aria-hidden","true");
    document.body.classList.remove("zal-search-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  input.addEventListener("input",renderResults);

  document.addEventListener("click",(event) => {
    if (event.target.closest("[data-zal-search-open]")) {
      event.preventDefault();
      openSearch();
      return;
    }
    if (event.target.closest("[data-zal-search-close]")) {
      event.preventDefault();
      closeSearch();
    }
  });

  document.addEventListener("keydown",(event) => {
    const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase()==="k";
    if (shortcut) {
      event.preventDefault();
      search.classList.contains("is-open") ? closeSearch() : openSearch();
      return;
    }

    if (event.key==="Escape") {
      if (search.classList.contains("is-open")) {
        event.preventDefault();
        closeSearch();
      } else {
        closeNavigation();
      }
      return;
    }

    if (!search.classList.contains("is-open") || !matches.length) return;

    if (event.key==="ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex+1)%matches.length;
      updateSelection();
    } else if (event.key==="ArrowUp") {
      event.preventDefault();
      selectedIndex = (selectedIndex-1+matches.length)%matches.length;
      updateSelection();
    } else if (event.key==="Enter" && document.activeElement===input) {
      event.preventDefault();
      navigate(matches[selectedIndex]);
    }
  });

  window.addEventListener("zal:languagechange",updateLanguage);
  updateLanguage();

  /* SMOOTH SAME-PAGE ANCHORS */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click",(event) => {
      const href = anchor.getAttribute("href");
      if (!href || href==="#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block:"start"
      });
    });
  });
})();
