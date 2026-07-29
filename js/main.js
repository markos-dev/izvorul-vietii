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

  const hlBlocks = Array.prototype.slice.call(document.querySelectorAll(".highlight-text"));
  if (hlBlocks.length) {
    const updateHighlight = function () {
      const vh = window.innerHeight;
      hlBlocks.forEach(function (block) {
        const ws = block.querySelectorAll(".w");
        if (!ws.length) return;
        const rect = block.getBoundingClientRect();
        // progres de la 0 (blocul intră în ecran) la 1 (blocul a fost parcurs)
        const travel = vh * 0.55 + rect.height;
        const scrolled = vh * 0.82 - rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / travel));
        // aprinde cuvintele progresiv, în ordinea citirii (nu tot rândul deodată)
        const lit = Math.round(progress * ws.length);
        for (let i = 0; i < ws.length; i++) {
          if (i < lit) ws[i].classList.add("on");
          else ws[i].classList.remove("on");
        }
      });
    };
    window.addEventListener("scroll", updateHighlight, { passive: true });
    window.addEventListener("resize", updateHighlight);
    updateHighlight();
  }

  /* ---------- Micro-parallax pe cardul hero (pointer) ----------
     Urmărește mișcarea mouse-ului pe tot ecranul (nu doar peste
     panou), ca efectul de tilt să continue lin indiferent unde e
     cursorul. Se resetează doar când mouse-ul chiar iese din fereastră. */
  const card = document.querySelector(".glass-card[data-tilt]");
  if (card && window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", function (e) {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      card.style.transform = "perspective(1000px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
    });
    document.addEventListener("mouseleave", function () { card.style.transform = ""; });
  }

  /* ---------- Countdown până la următorul serviciu (Duminică 10:00) ---------- */
  var cd = document.getElementById("countdown");
  if (cd) {
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var nextService = function () {
      var now = new Date();
      var d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0);
      var add = (7 - d.getDay()) % 7;               // 0 = Duminică
      if (add === 0 && now.getTime() >= d.getTime()) add = 7;
      d.setDate(d.getDate() + add);
      return d;
    };
    var target = nextService();
    var setUnit = function (k, v) {
      var el = cd.querySelector('[data-cd="' + k + '"]');
      if (el) el.textContent = v;
    };
    var tick = function () {
      var now = new Date();
      if (now.getTime() >= target.getTime()) target = nextService();
      var s = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
      setUnit("days", pad(Math.floor(s / 86400)));
      setUnit("hours", pad(Math.floor((s % 86400) / 3600)));
      setUnit("mins", pad(Math.floor((s % 3600) / 60)));
      setUnit("secs", pad(s % 60));
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Versetul zilei ---------- */
  var verseEl = document.getElementById("dailyVerse");
  if (verseEl) {
    var verses = [
      ["Domnul este Păstorul meu: nu voi duce lipsă de nimic.", "Psalmul 23:1"],
      ["Eu sunt Calea, Adevărul și Viața.", "Ioan 14:6"],
      ["Toate lucrurile sunt cu putință celui ce crede.", "Marcu 9:23"],
      ["Dumnezeu este dragoste.", "1 Ioan 4:8"],
      ["Bucurați-vă totdeauna în Domnul!", "Filipeni 4:4"],
      ["Cereți, și vi se va da; căutați, și veți găsi.", "Matei 7:7"],
      ["Domnul este lumina și mântuirea mea: de cine să mă tem?", "Psalmul 27:1"]
    ];
    var d0 = new Date();
    var start = new Date(d0.getFullYear(), 0, 0);
    var dayOfYear = Math.floor((d0.getTime() - start.getTime()) / 86400000);
    var v = verses[dayOfYear % verses.length];
    verseEl.innerHTML = "„" + v[0] + "”<cite>" + v[1] + "</cite>";
  }

  /* ---------- Anul curent în footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
