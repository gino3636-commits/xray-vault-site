/* X-Ray Vault — vanilla interactions (no framework, GitHub Pages friendly) */
(function () {
  "use strict";

  /* progressive enhancement flags */
  var de = document.documentElement;
  de.classList.add("js");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    de.classList.add("motion");
  }

  /* sticky header state */
  var nav = document.querySelector(".nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  var toggle = document.querySelector(".nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var open = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  /* scroll reveals */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* contact form — visual only, no backend */
  var form = document.querySelector("[data-testid='contact-form']");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form__ok");
      if (ok) ok.classList.add("show");
      form.reset();
    });
  }

  /* smooth momentum scroll via Lenis (loaded from CDN in <head>) */
  function initLenis() {
    if (
      typeof Lenis === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    var lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // anchor links → lenis scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80 });
        }
      });
    });
  }
  initLenis();
})();
