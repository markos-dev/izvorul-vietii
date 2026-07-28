/* =========================================================
   Izvorul Vieții — interacțiuni: parallax, highlight la scroll,
   reveal on scroll, meniu mobil, navbar la scroll
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Meniu mobil ---------- */
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
      burger.classList.toggle("is-open");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); });
    });
  }

  /* ---------- Navbar: umbră mai puternică la scroll ---------- */
  const nav = document.querySelector(".nav__inner");
  if (nav) {
    const onScroll = function () {
      if (window.scrollY > 30) nav.style.boxShadow = "0 22px 55px -20px rgba(0,0,0,.7)";
      else nav.style.boxShadow = "";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Text care se evidențiază pe scroll (cuvânt cu cuvânt) ---------- */
  document.querySelectorAll(".highlight-text").forEach(function (block) {
    // împachetează fiecare cuvânt în <span class="w">
    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      const parentBlue = node.parentElement.classList.contains("blue");
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(function (part) {
        if (part.trim() === "") { frag.appendChild(document.createTextNode(part)); return; }
        const span = document.createElement("span");
        span.className = "w" + (parentBlue ? " blue" : "");
        span.textContent = part;
        frag.appendChild(span);
      });
      node.parentNode.replaceChild(frag, node);
    });
  });

  const words = Array.prototype.slice.call(document.querySelectorAll(".highlight-text .w"));
  if (words.length) {
    const updateHighlight = function () {
      const vh = window.innerHeight;
      words.forEach(function (w) {
        const r = w.getBoundingClientRect();
        // aprinde cuvântul când depășește ~68% din înălțimea ecranului
        if (r.top < vh * 0.68) w.classList.add("on");
        else w.classList.remove("on");
      });
    };
    window.addEventListener("scroll", updateHighlight, { passive: true });
    window.addEventListener("resize", updateHighlight);
    updateHighlight();
  }

  /* ---------- Micro-parallax pe cardul hero (pointer) ---------- */
  const card = document.querySelector(".glass-card[data-tilt]");
  if (card && window.matchMedia("(hover: hover)").matches) {
    card.addEventListener("mousemove", function (e) {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(1000px) rotateY(" + (x * 4) + "deg) rotateX(" + (-y * 4) + "deg)";
    });
    card.addEventListener("mouseleave", function () { card.style.transform = ""; });
  }

  /* ---------- Carusel evenimente ---------- */
  var carousel = document.querySelector(".ec");
  if (carousel) {
    var ecSlides = Array.prototype.slice.call(carousel.querySelectorAll(".ec__slide"));
    if (ecSlides.length > 1) {
      var ecIndex = 0;
      ecSlides.forEach(function (s, k) { if (s.classList.contains("is-active")) ecIndex = k; });
      var ecGo = function (n) {
        ecSlides[ecIndex].classList.remove("is-active");
        ecIndex = (n + ecSlides.length) % ecSlides.length;
        ecSlides[ecIndex].classList.add("is-active");
      };
      carousel.querySelectorAll(".ec__arrow").forEach(function (btn) {
        btn.addEventListener("click", function () {
          ecGo(btn.getAttribute("data-dir") === "next" ? ecIndex + 1 : ecIndex - 1);
        });
      });
    }
  }

  /* ---------- Anul curent în footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
