/* ============================================================
   ZAL’THERA WEBSITE 2.2
   SITE INTERACTION LAYER
   ============================================================ */

(() => {
  "use strict";


  /* ============================================================
     YEAR
     ============================================================ */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }


  /* ============================================================
     REDUCED MOTION
     ============================================================ */

  const reducedMotionQuery =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

  const prefersReducedMotion =
    reducedMotionQuery.matches;


  /* ============================================================
     TOPBAR
     ============================================================ */

  const topbar =
    document.querySelector(
      "[data-topbar]"
    );


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
    document.querySelector(
      "[data-nav-toggle]"
    );

  const nav =
    document.querySelector(
      "[data-nav]"
    );


  const closeNavigation = () => {

    if (!navToggle || !nav) {
      return;
    }

    navToggle.classList.remove(
      "is-open"
    );

    nav.classList.remove(
      "is-open"
    );

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    navToggle.setAttribute(
      "aria-label",
      "Navigation öffnen"
    );

    document.body.classList.remove(
      "nav-open"
    );

  };


  const openNavigation = () => {

    if (!navToggle || !nav) {
      return;
    }

    navToggle.classList.add(
      "is-open"
    );

    nav.classList.add(
      "is-open"
    );

    navToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    navToggle.setAttribute(
      "aria-label",
      "Navigation schließen"
    );

    document.body.classList.add(
      "nav-open"
    );

  };


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


    nav
      .querySelectorAll("a")
      .forEach(
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
    document.querySelectorAll(
      ".reveal"
    );


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

        revealObserver.observe(
          element
        );

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


          if (
            visibleEntries.length === 0
          ) {
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

        sectionObserver.observe(
          section
        );

      }
    );

  }


  /* ============================================================
     ZAL FIELD POINTER RESPONSE
     ============================================================ */

  const hero =
    document.querySelector(
      "[data-hero]"
    );

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


    const updatePointer =
      (event) => {

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
     ZAL SEARCH — STYLESHEET LOADER
     ============================================================ */

  const searchStylesheetName =
    "zal-search.css";


  const hasSearchStylesheet =
    Array
      .from(
        document.styleSheets
      )
      .some(
        (stylesheet) =>
          stylesheet.href &&
          stylesheet.href.includes(
            searchStylesheetName
          )
      );


  if (!hasSearchStylesheet) {

    const searchStylesheet =
      document.createElement("link");

    searchStylesheet.rel =
      "stylesheet";

    searchStylesheet.href =
      searchStylesheetName;

    document.head.appendChild(
      searchStylesheet
    );

  }


  /* ============================================================
     ZAL SEARCH — INDEX
     ============================================================ */

  const searchIndex = [

    {
      title: "ZAL’THERA",
      category: "SYSTEM",
      description:
        "Souveräne Architektur für Identität, Kontext, Intelligenz, Vertrauen, Kommunikation und reale Prozesse.",
      href: "index.html",
      keywords:
        "zalthera home startseite system ecosystem architecture"
    },

    {
      title: "ZAL’THERA Core",
      category: "SYSTEM",
      description:
        "Identity, Policy, Consent, Audit, Ledger, Trust und kontrollierte Ausführung.",
      href: "core.html",
      keywords:
        "core identity ledger trust policy consent audit execute system"
    },

    {
      title: "CONTINUITY",
      category: "PERSONAL SYSTEM",
      description:
        "Persönliche souveräne Umgebung für Dokumente, Cards, Timeline, Finanzen, Kontext und Nachweise.",
      href: "index.html#continuity",
      keywords:
        "continuity documents dokumente cards timeline finance finanzen personal context audit"
    },

    {
      title: "ZAL’THERA Intelligence",
      category: "INTELLIGENCE",
      description:
        "Kontextgebundene Intelligenz, die versteht, erklärt und Aktionen vorbereitet.",
      href: "index.html#intelligence",
      keywords:
        "intelligence ai künstliche intelligenz context agent known inferred uncertain unknown"
    },

    {
      title: "Communication",
      category: "COMMUNICATION",
      description:
        "Sichere Kommunikation zwischen autorisierten Identitäten auf Basis von Vertrauen und Zustimmung.",
      href: "index.html#communication",
      keywords:
        "communication voice voicebridge video files zal id trust consent sprache kommunikation"
    },

    {
      title: "VoiceBridge",
      category: "COMMUNICATION",
      description:
        "Direkte vertrauensbasierte Sprachkommunikation zwischen autorisierten ZAL-Identitäten.",
      href: "index.html#communication",
      keywords:
        "voicebridge voice push to talk ptt communication audio zal id"
    },

    {
      title: "ZAL’THERA Industry",
      category: "INDUSTRY",
      description:
        "Operative Prozesse, Übergaben, Sensorik, Messwerte und zukünftige Maschinenanbindungen.",
      href: "index.html#industry",
      keywords:
        "industry industrie machine process sensor zalgate shiftlog shiftlock"
    },

    {
      title: "ShiftLog",
      category: "INDUSTRY",
      description:
        "Digitale Schichtübergabe für operative Zustände, Wissen und Verantwortlichkeiten.",
      href: "shiftlog.html",
      keywords:
        "shiftlog shift schicht übergabe schichtübergabe handover industrie knowledge"
    },

    {
      title: "ShiftLock",
      category: "INDUSTRY",
      description:
        "Industrielle Systemlogik für operative Zustände und kontrollierte Prozesse.",
      href: "shiftlog.html",
      keywords:
        "shiftlock shift industry industrie process operational"
    },

    {
      title: "ZALgate",
      category: "INDUSTRY",
      description:
        "Architektur für Sensorik, Messwerte, Maschinen und reale Prozesszustände.",
      href: "index.html#industry",
      keywords:
        "zalgate sensors sensorik machine maschine measurements messwerte process"
    },

    {
      title: "LifeFlow",
      category: "PRODUCT",
      description:
        "Kosten, Verträge, Fristen und persönliche Finanzübersicht.",
      href: "lifeflow.html",
      keywords:
        "lifeflow finance finanzen kosten verträge contracts deadlines geld money"
    },

    {
      title: "ProofFlow",
      category: "PROOF & TRUST",
      description:
        "Nachweise, Fotos, Signaturen, Audit und nachvollziehbare Abläufe.",
      href: "proofflow.html",
      keywords:
        "proofflow proof evidence nachweis audit signature sign export job"
    },

    {
      title: "ZAL’THERA Pilot",
      category: "PILOT",
      description:
        "Einen realen Prozess kontrolliert in das ZAL’THERA-System überführen und testen.",
      href: "pilot.html",
      keywords:
        "pilot business b2b testen proof shiftlog core ledger trust real process"
    },

    {
      title: "Products",
      category: "ECOSYSTEM",
      description:
        "Produkte, Systemmodule, aktive Entwicklungen und zukünftige Architektur.",
      href: "index.html#products",
      keywords:
        "products produkte portfolio lifeflow continuity proofflow shiftlog voicebridge zalgate"
    },

    {
      title: "About ZAL’THERA",
      category: "ABOUT",
      description:
        "Hintergrund, Systemphilosophie und Entwicklung von ZAL’THERA.",
      href: "about.html",
      keywords:
        "about über zalthera founder philosophy patrick system"
    },

    {
      title: "Support",
      category: "SUPPORT",
      description:
        "Unterstützung und Kontakt zu ZAL’THERA.",
      href: "support.html",
      keywords:
        "support hilfe help kontakt contact"
    },

    {
      title: "Kontakt",
      category: "CONTACT",
      description:
        "ZAL’THERA direkt kontaktieren.",
      href: "index.html#contact",
      keywords:
        "contact kontakt email anfrage support"
    }

  ];


  /* ============================================================
     ZAL SEARCH — HELPERS
     ============================================================ */

  const normalizeSearchValue =
    (value) => {

      return value
        .toLocaleLowerCase("de")
        .normalize("NFD")
        .replace(
          /[\u0300-\u036f]/g,
          ""
        )
        .replace(
          /[’']/g,
          ""
        )
        .trim();

    };


  const isHomePage = () => {

    const path =
      window.location.pathname;

    return (
      path.endsWith("/") ||
      path.endsWith("/index.html")
    );

  };


  const resolveNavigationHref =
    (href) => {

      if (
        isHomePage() &&
        href.startsWith(
          "index.html#"
        )
      ) {

        return href.replace(
          "index.html",
          ""
        );

      }

      return href;

    };


  /* ============================================================
     ZAL SEARCH — CREATE TOPBAR TRIGGER
     ============================================================ */

  const topbarCTA =
    document.querySelector(
      ".topbar-cta"
    );


  if (topbarCTA) {

    const existingSearchTrigger =
      topbarCTA.querySelector(
        "[data-search-trigger]"
      );


    if (!existingSearchTrigger) {

      const searchTrigger =
        document.createElement(
          "button"
        );

      searchTrigger.type =
        "button";

      searchTrigger.className =
        "zal-search-trigger";

      searchTrigger.setAttribute(
        "data-search-trigger",
        ""
      );

      searchTrigger.setAttribute(
        "aria-label",
        "ZAL’THERA Suche öffnen"
      );


      searchTrigger.innerHTML = `
        <span
          class="zal-search-trigger-icon"
          aria-hidden="true"
        ></span>

        <span
          class="zal-search-trigger-shortcut"
          aria-hidden="true"
        >
          ⌘K
        </span>
      `;


      topbarCTA.insertBefore(
        searchTrigger,
        topbarCTA.firstChild
      );

    }

  }


  /* ============================================================
     ZAL SEARCH — CREATE DIALOG
     ============================================================ */

  const searchRoot =
    document.createElement(
      "div"
    );


  searchRoot.className =
    "zal-search";

  searchRoot.setAttribute(
    "data-zal-search",
    ""
  );

  searchRoot.setAttribute(
    "aria-hidden",
    "true"
  );


  searchRoot.innerHTML = `

    <div
      class="zal-search-backdrop"
      data-search-close
      aria-hidden="true"
    ></div>

    <section
      class="zal-search-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="zal-search-title"
    >

      <div class="zal-search-header">

        <div class="zal-search-brand">

          <span
            class="zal-search-brand-dot"
            aria-hidden="true"
          ></span>

          <div>
            <span class="zal-search-label">
              ZAL SEARCH
            </span>

            <strong id="zal-search-title">
              Explore the system
            </strong>
          </div>

        </div>


        <button
          class="zal-search-close"
          type="button"
          data-search-close
          aria-label="Suche schließen"
        >
          ESC
        </button>

      </div>


      <div class="zal-search-input-wrap">

        <span
          class="zal-search-input-icon"
          aria-hidden="true"
        ></span>

        <input
          class="zal-search-input"
          type="search"
          placeholder="System, Produkt oder Bereich suchen …"
          autocomplete="off"
          spellcheck="false"
          aria-label="ZAL’THERA durchsuchen"
          data-search-input
        />

        <span
          class="zal-search-input-key"
          aria-hidden="true"
        >
          ↵
        </span>

      </div>


      <div
        class="zal-search-meta"
        data-search-meta
      >
        QUICK ACCESS
      </div>


      <div
        class="zal-search-results"
        role="listbox"
        data-search-results
        aria-label="Suchergebnisse"
      ></div>


      <div class="zal-search-footer">

        <div>
          <span>↑</span>
          <span>↓</span>
          Navigieren
        </div>

        <div>
          <span>↵</span>
          Öffnen
        </div>

        <div>
          <span>ESC</span>
          Schließen
        </div>

      </div>

    </section>
  `;


  document.body.appendChild(
    searchRoot
  );


  /* ============================================================
     ZAL SEARCH — REFERENCES
     ============================================================ */

  const searchInput =
    searchRoot.querySelector(
      "[data-search-input]"
    );

  const searchResults =
    searchRoot.querySelector(
      "[data-search-results]"
    );

  const searchMeta =
    searchRoot.querySelector(
      "[data-search-meta]"
    );


  let currentResults = [];

  let activeResultIndex = 0;

  let lastFocusedElement = null;


  /* ============================================================
     ZAL SEARCH — SCORING
     ============================================================ */

  const scoreSearchItem =
    (item, query) => {

      const title =
        normalizeSearchValue(
          item.title
        );

      const category =
        normalizeSearchValue(
          item.category
        );

      const description =
        normalizeSearchValue(
          item.description
        );

      const keywords =
        normalizeSearchValue(
          item.keywords
        );


      let score = 0;


      if (title === query) {
        score += 100;
      }


      if (
        title.startsWith(query)
      ) {
        score += 60;
      }


      if (
        title.includes(query)
      ) {
        score += 40;
      }


      if (
        category.includes(query)
      ) {
        score += 22;
      }


      if (
        keywords.includes(query)
      ) {
        score += 18;
      }


      if (
        description.includes(query)
      ) {
        score += 10;
      }


      const terms =
        query.split(/\s+/);


      terms.forEach(
        (term) => {

          if (
            title.includes(term)
          ) {
            score += 8;
          }

          if (
            keywords.includes(term)
          ) {
            score += 5;
          }

        }
      );


      return score;

    };


  /* ============================================================
     ZAL SEARCH — QUICK ACCESS
     ============================================================ */

  const quickAccessTitles = [
    "CONTINUITY",
    "ZAL’THERA Core",
    "ZAL’THERA Pilot",
    "LifeFlow",
    "ShiftLog",
    "ProofFlow"
  ];


  const getQuickAccess =
    () => {

      return quickAccessTitles
        .map(
          (title) =>
            searchIndex.find(
              (item) =>
                item.title === title
            )
        )
        .filter(Boolean);

    };


  /* ============================================================
     ZAL SEARCH — FIND RESULTS
     ============================================================ */

  const findSearchResults =
    (queryValue) => {

      const query =
        normalizeSearchValue(
          queryValue
        );


      if (!query) {
        return getQuickAccess();
      }


      return searchIndex
        .map(
          (item) => ({
            ...item,
            score:
              scoreSearchItem(
                item,
                query
              )
          })
        )
        .filter(
          (item) =>
            item.score > 0
        )
        .sort(
          (a, b) =>
            b.score - a.score
        )
        .slice(
          0,
          8
        );

    };


  /* ============================================================
     ZAL SEARCH — RENDER RESULTS
     ============================================================ */

  const renderSearchResults =
    () => {

      if (
        !searchInput ||
        !searchResults ||
        !searchMeta
      ) {
        return;
      }


      currentResults =
        findSearchResults(
          searchInput.value
        );


      activeResultIndex = 0;


      const hasQuery =
        normalizeSearchValue(
          searchInput.value
        ).length > 0;


      searchMeta.textContent =
        hasQuery
          ? `${currentResults.length} RESULT${
              currentResults.length === 1
                ? ""
                : "S"
            }`
          : "QUICK ACCESS";


      searchResults.innerHTML = "";


      if (
        currentResults.length === 0
      ) {

        const empty =
          document.createElement(
            "div"
          );

        empty.className =
          "zal-search-empty";

        empty.innerHTML = `
          <strong>
            Kein Systembereich gefunden.
          </strong>

          <span>
            Versuche zum Beispiel
            „Continuity“, „Pilot“,
            „Voice“, „Shift“ oder
            „Finance“.
          </span>
        `;

        searchResults.appendChild(
          empty
        );

        return;

      }


      currentResults.forEach(
        (item, index) => {

          const result =
            document.createElement(
              "button"
            );


          result.type =
            "button";

          result.className =
            "zal-search-result";

          result.setAttribute(
            "role",
            "option"
          );

          result.setAttribute(
            "data-search-result",
            String(index)
          );

          result.setAttribute(
            "aria-selected",
            index === 0
              ? "true"
              : "false"
          );


          if (index === 0) {

            result.classList.add(
              "is-active"
            );

          }


          result.innerHTML = `

            <span class="zal-search-result-main">

              <span class="zal-search-result-category">
                ${item.category}
              </span>

              <strong>
                ${item.title}
              </strong>

              <small>
                ${item.description}
              </small>

            </span>

            <span
              class="zal-search-result-arrow"
              aria-hidden="true"
            >
              →
            </span>
          `;


          result.addEventListener(
            "pointerenter",
            () => {

              setActiveSearchResult(
                index
              );

            }
          );


          result.addEventListener(
            "click",
            () => {

              navigateToSearchResult(
                item
              );

            }
          );


          searchResults.appendChild(
            result
          );

        }
      );

    };


  /* ============================================================
     ZAL SEARCH — ACTIVE RESULT
     ============================================================ */

  const setActiveSearchResult =
    (index) => {

      if (
        currentResults.length === 0
      ) {
        return;
      }


      if (index < 0) {

        activeResultIndex =
          currentResults.length - 1;

      } else if (
        index >=
        currentResults.length
      ) {

        activeResultIndex = 0;

      } else {

        activeResultIndex =
          index;

      }


      const resultElements =
        searchRoot.querySelectorAll(
          "[data-search-result]"
        );


      resultElements.forEach(
        (element, elementIndex) => {

          const isActive =
            elementIndex ===
            activeResultIndex;


          element.classList.toggle(
            "is-active",
            isActive
          );


          element.setAttribute(
            "aria-selected",
            isActive
              ? "true"
              : "false"
          );


          if (isActive) {

            element.scrollIntoView({
              block: "nearest"
            });

          }

        }
      );

    };


  /* ============================================================
     ZAL SEARCH — NAVIGATION
     ============================================================ */

  const navigateToSearchResult =
    (item) => {

      const href =
        resolveNavigationHref(
          item.href
        );


      closeSearch();


      if (
        href.startsWith("#")
      ) {

        const target =
          document.querySelector(
            href
          );


        if (target) {

          target.scrollIntoView({
            behavior:
              prefersReducedMotion
                ? "auto"
                : "smooth",
            block: "start"
          });


          if (
            history.replaceState
          ) {

            history.replaceState(
              null,
              "",
              href
            );

          }


          return;

        }

      }


      window.location.href =
        href;

    };


  /* ============================================================
     ZAL SEARCH — OPEN / CLOSE
     ============================================================ */

  function openSearch() {

    lastFocusedElement =
      document.activeElement;


    closeNavigation();


    searchRoot.classList.add(
      "is-open"
    );

    searchRoot.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "zal-search-open"
    );


    if (searchInput) {

      searchInput.value = "";

    }


    renderSearchResults();


    window.setTimeout(
      () => {

        if (searchInput) {

          searchInput.focus();

        }

      },
      prefersReducedMotion
        ? 0
        : 60
    );

  }


  function closeSearch() {

    if (
      !searchRoot.classList.contains(
        "is-open"
      )
    ) {
      return;
    }


    searchRoot.classList.remove(
      "is-open"
    );

    searchRoot.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "zal-search-open"
    );


    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus ===
        "function"
    ) {

      lastFocusedElement.focus();

    }

  }


  /* ============================================================
     ZAL SEARCH — TRIGGERS
     ============================================================ */

  const bindSearchTriggers =
    () => {

      document
        .querySelectorAll(
          "[data-search-trigger], [data-command-open]"
        )
        .forEach(
          (trigger) => {

            if (
              trigger.dataset
                .zalSearchBound ===
              "true"
            ) {
              return;
            }


            trigger.dataset
              .zalSearchBound =
              "true";


            trigger.addEventListener(
              "click",
              (event) => {

                event.preventDefault();

                openSearch();

              }
            );

          }
        );

    };


  bindSearchTriggers();


  /* ============================================================
     ZAL SEARCH — INPUT
     ============================================================ */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderSearchResults
    );


    searchInput.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key ===
          "ArrowDown"
        ) {

          event.preventDefault();

          setActiveSearchResult(
            activeResultIndex + 1
          );

          return;

        }


        if (
          event.key ===
          "ArrowUp"
        ) {

          event.preventDefault();

          setActiveSearchResult(
            activeResultIndex - 1
          );

          return;

        }


        if (
          event.key ===
          "Enter"
        ) {

          if (
            currentResults.length === 0
          ) {
            return;
          }


          event.preventDefault();


          navigateToSearchResult(
            currentResults[
              activeResultIndex
            ]
          );

        }

      }
    );

  }


  /* ============================================================
     ZAL SEARCH — CLOSE BUTTONS
     ============================================================ */

  searchRoot
    .querySelectorAll(
      "[data-search-close]"
    )
    .forEach(
      (element) => {

        element.addEventListener(
          "click",
          closeSearch
        );

      }
    );


  /* ============================================================
     GLOBAL KEYBOARD
     ============================================================ */

  document.addEventListener(
    "keydown",
    (event) => {

      const key =
        event.key.toLowerCase();


      const commandSearch =
        (
          event.metaKey ||
          event.ctrlKey
        ) &&
        key === "k";


      if (commandSearch) {

        event.preventDefault();


        if (
          searchRoot.classList.contains(
            "is-open"
          )
        ) {

          closeSearch();

        } else {

          openSearch();

        }


        return;

      }


      if (
        event.key === "Escape"
      ) {

        if (
          searchRoot.classList.contains(
            "is-open"
          )
        ) {

          event.preventDefault();

          closeSearch();

          return;

        }


        closeNavigation();

      }


      if (
        event.key === "Tab" &&
        searchRoot.classList.contains(
          "is-open"
        )
      ) {

        const focusable =
          searchRoot.querySelectorAll(
            'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          );


        if (
          focusable.length === 0
        ) {
          return;
        }


        const first =
          focusable[0];

        const last =
          focusable[
            focusable.length - 1
          ];


        if (
          event.shiftKey &&
          document.activeElement ===
            first
        ) {

          event.preventDefault();

          last.focus();

        } else if (
          !event.shiftKey &&
          document.activeElement ===
            last
        ) {

          event.preventDefault();

          first.focus();

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

        if (
          anchor.hasAttribute(
            "data-command-open"
          )
        ) {
          return;
        }


        anchor.addEventListener(
          "click",
          (event) => {

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
