/* ============================================================
   ZAL’THERA WEBSITE 2.1
   SITE INTERACTION LAYER
   ============================================================ */

(() => {
  "use strict";


  /* ============================================================
     YEAR
     ============================================================ */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


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

    navToggle.classList.add("is-open");
    nav.classList.add("is-open");

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


    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
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
              block:"start"
            });

          }
        );

      }
    );

})();
