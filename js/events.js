/* =========================================================
   Izvorul Vieții — SURSA UNICĂ DE EVENIMENTE
   ---------------------------------------------------------
   Aici adaugi / editezi / ștergi evenimentele. Atât pagina
   "Evenimente", cât și caruselul de pe prima pagină se
   actualizează AUTOMAT. Cel mai nou eveniment (după data „iso")
   apare mereu primul.

   Ca să adaugi un eveniment nou, copiază un obiect { ... } de
   mai jos și pune-l în listă. Câmpul "iso" (an-lună-zi) decide
   ordinea — cel mai mare = cel mai nou = primul afișat.

   icon poate fi: "clock", "pin", "calendar" sau "globe".
   ========================================================= */
window.IZVOR_EVENTS = [
  {
    id: "botez",
    category: "Arhivă evenimente",
    title: "Botez",
    iso: "2026-07-19",
    meta1: { icon: "clock", text: "19 Iulie 2026, Ora 10:00" },
    meta2: { icon: "pin", text: "Str. Nucului nr. 13" },
    cta: "Vezi album foto",
    image: "images/eveniment-botez.jpg",
    album: [
      "images/album-botez/pozabotez-01.jpg",
      "images/album-botez/pozabotez-02.jpg",
      "images/album-botez/pozabotez-03.jpg",
      "images/album-botez/pozabotez-04.jpg",
      "images/album-botez/pozabotez-05.jpg",
      "images/album-botez/pozabotez-06.jpg",
      "images/album-botez/pozabotez-07.jpg",
      "images/album-botez/pozabotez-08.jpg",
      "images/album-botez/pozabotez-09.jpg",
      "images/album-botez/pozabotez-10.jpg",
      "images/album-botez/pozabotez-11.jpg",
      "images/album-botez/pozabotez-12.jpg",
      "images/album-botez/pozabotez-13.jpg"
    ]
  },
  {
    category: "Evenimente viitoare",
    title: "Seară Specială de Laudă și Închinare",
    iso: "2026-03-24",
    meta1: { icon: "clock", text: "24 Martie, Ora 18:00" },
    meta2: { icon: "pin", text: "Sanctuarul Principal" },
    cta: "Detalii eveniment",
    link: "evenimente.html",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "atelier-creativ-de-paste",
    category: "Arhivă evenimente",
    title: "Atelier Creativ de Paște",
    iso: "2026-04-11",
    meta1: { icon: "clock", text: "11 Aprilie 2026, Ora 10:00" },
    meta2: { icon: "pin", text: "Str. Nucului nr. 13" },
    cta: "Vezi album foto",
    link: "evenimente.html",
    image: "images/eveniment-atelier-creativ-paste.jpg",
    album: [
      "images/album-atelier-creativ-paste/_DSC6525.jpg",
      "images/album-atelier-creativ-paste/_DSC6535.jpg",
      "images/album-atelier-creativ-paste/_DSC6548.jpg",
      "images/album-atelier-creativ-paste/_DSC6551.jpg",
      "images/album-atelier-creativ-paste/_DSC6570.jpg",
      "images/album-atelier-creativ-paste/_DSC6621.jpg",
      "images/album-atelier-creativ-paste/_DSC6638.jpg",
      "images/album-atelier-creativ-paste/_DSC6643.jpg",
      "images/album-atelier-creativ-paste/_DSC6671.jpg",
      "images/album-atelier-creativ-paste/_DSC6680.jpg",
      "images/album-atelier-creativ-paste/_DSC6688.jpg",
      "images/album-atelier-creativ-paste/_DSC6697.jpg",
      "images/album-atelier-creativ-paste/_DSC6734.jpg",
      "images/album-atelier-creativ-paste/_DSC6739.jpg",
      "images/album-atelier-creativ-paste/_DSC6750.jpg",
      "images/album-atelier-creativ-paste/_DSC6752.jpg"
    ]
  },
  {
    id: "misiunea-sperantei",
    category: "Arhivă evenimente",
    title: "Retrospectivă: Misiunea Speranței",
    iso: "2023-10-01",
    meta1: { icon: "calendar", text: "Octombrie 2023" },
    meta2: { icon: "globe", text: "Comunitate" },
    cta: "Vezi album foto",
    link: "evenimente.html#album-misiunea-sperantei",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=80",
    album: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=700&q=80"
    ]
  }
];

/* ---------- Randare (nu e nevoie să modifici mai jos) ---------- */
(function () {
  "use strict";

  var ICONS = {
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 3.2 2.6 14.8 0 18M12 3c-2.6 3.2-2.6 14.8 0 18"/></svg>'
  };
  function ic(k) { return ICONS[k] || ""; }
  function metaRow(e) {
    return '<div class="ec__meta">' +
      '<span>' + ic(e.meta1.icon) + ' ' + e.meta1.text + '</span>' +
      '<span>' + ic(e.meta2.icon) + ' ' + e.meta2.text + '</span>' +
      '</div>';
  }
  // Linkul butonului: dacă evenimentul are album, duce automat la ancora albumului
  // de pe pagina Evenimente (funcționează dinamic pentru orice eveniment nou).
  function hrefFor(e) {
    if (e.album && e.album.length && e.id) return "evenimente.html#album-" + e.id;
    return e.link || "evenimente.html";
  }

  var EVENTS = (window.IZVOR_EVENTS || []).slice();
  // sortare descrescătoare după dată (cel mai nou primul)
  EVENTS.sort(function (a, b) { return String(b.iso || "").localeCompare(String(a.iso || "")); });

  /* --- Caruselul de pe prima pagină --- */
  var viewport = document.getElementById("ecViewport");
  if (viewport && EVENTS.length) {
    viewport.innerHTML = EVENTS.map(function (e, i) {
      return '<article class="ec__slide' + (i === 0 ? ' is-active' : '') +
        '" style="background-image:url(\'' + e.image + '\');">' +
        '<div class="ec__overlay"></div>' +
        '<div class="ec__inner"><div class="ec__card">' +
        '<span class="ec__eyebrow">' + e.category + '</span>' +
        '<h2 class="ec__title">' + e.title + '</h2>' +
        metaRow(e) +
        '<a class="ec__btn" href="' + hrefFor(e) + '">' + e.cta + ' <span>&rarr;</span></a>' +
        '</div></div></article>';
    }).join("");

    var carousel = document.getElementById("eventsCarousel");
    var slides = Array.prototype.slice.call(viewport.querySelectorAll(".ec__slide"));
    if (slides.length > 1 && carousel) {
      var idx = 0;
      var go = function (n) {
        slides[idx].classList.remove("is-active");
        idx = (n + slides.length) % slides.length;
        slides[idx].classList.add("is-active");
      };
      carousel.querySelectorAll(".ec__arrow").forEach(function (btn) {
        btn.addEventListener("click", function () {
          go(btn.getAttribute("data-dir") === "next" ? idx + 1 : idx - 1);
        });
      });
    } else if (carousel) {
      var nav = carousel.querySelector(".ec__nav");
      if (nav) nav.style.display = "none";
    }
  }

  /* --- Lista de pe pagina Evenimente --- */
  var list = document.getElementById("eventsList");
  if (list && EVENTS.length) {
    list.innerHTML = EVENTS.map(function (e, i) {
      var delay = i === 1 ? " d1" : (i >= 2 ? " d2" : "");
      return '<article class="event-card reveal' + delay + '">' +
        '<div class="event-card__img" style="background-image:url(\'' + e.image + '\');"></div>' +
        '<div class="event-card__body">' +
        '<span class="event-badge">' + e.category + '</span>' +
        '<h3>' + e.title + '</h3>' +
        '<div class="event-meta">' +
        '<span>' + ic(e.meta1.icon) + ' ' + e.meta1.text + '</span>' +
        '<span>' + ic(e.meta2.icon) + ' ' + e.meta2.text + '</span>' +
        '</div>' +
        '<a class="btn-cta" href="' + hrefFor(e) + '">' + e.cta + '</a>' +
        '</div></article>';
    }).join("");
  }

  /* --- Albume foto (evenimentele din arhivă, pe pagina Evenimente) --- */
  var albums = document.getElementById("eventsAlbums");
  if (albums) {
    var withAlbum = EVENTS.filter(function (e) { return e.album && e.album.length; });
    albums.innerHTML = withAlbum.map(function (e) {
      return '<section class="section" id="album-' + (e.id || "") + '">' +
        '<div class="wrap">' +
        '<div class="reveal" style="margin-bottom:6px;">' +
        '<span class="eyebrow">Album foto</span>' +
        '<h2 class="h-serif" style="margin-bottom:8px;">' + e.title + '</h2>' +
        '<p class="lead" style="color:var(--muted);">' + e.meta1.text + ' · ' + e.meta2.text + '</p>' +
        '</div>' +
        '<div class="gallery reveal" data-album-id="' + (e.id || "") + '">' +
        e.album.map(function (src, i) {
          return '<img src="' + src + '" alt="' + e.title + '" loading="lazy" data-idx="' + i + '">';
        }).join("") +
        '</div>' +
        '</div></section>';
    }).join("");

    // Dacă URL-ul conține o ancoră către un album (ex. #album-misiunea-sperantei),
    // derulează la el DUPĂ ce albumele au fost generate.
    var hash = window.location.hash;
    if (hash && hash.indexOf("#album-") === 0) {
      window.setTimeout(function () {
        var t = document.getElementById(hash.slice(1));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 90);
    }

    /* --- Lightbox: click pe o poză din album → se mărește, navigare stânga/dreapta --- */
    var albumMap = {};
    withAlbum.forEach(function (e) { albumMap[e.id || ""] = e.album; });

    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML =
      '<button class="lightbox__close" aria-label="Închide">&times;</button>' +
      '<button class="lightbox__arrow lightbox__arrow--prev" aria-label="Poza anterioară">&larr;</button>' +
      '<img class="lightbox__img" alt="">' +
      '<button class="lightbox__arrow lightbox__arrow--next" aria-label="Poza următoare">&rarr;</button>' +
      '<div class="lightbox__counter"></div>';
    document.body.appendChild(lightbox);

    var lbImg = lightbox.querySelector(".lightbox__img");
    var lbCounter = lightbox.querySelector(".lightbox__counter");
    var currentAlbum = [];
    var currentIdx = 0;

    function updateLightbox() {
      if (!currentAlbum.length) return;
      lbImg.src = currentAlbum[currentIdx];
      lbCounter.textContent = (currentIdx + 1) + " / " + currentAlbum.length;
    }
    function openLightbox(albumId, idx) {
      currentAlbum = albumMap[albumId] || [];
      currentIdx = idx;
      if (!currentAlbum.length) return;
      updateLightbox();
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function navLightbox(delta) {
      if (!currentAlbum.length) return;
      currentIdx = (currentIdx + delta + currentAlbum.length) % currentAlbum.length;
      updateLightbox();
    }

    albums.addEventListener("click", function (ev) {
      var img = ev.target.closest("img[data-idx]");
      if (!img) return;
      var galleryEl = img.closest(".gallery");
      var albumId = galleryEl ? galleryEl.getAttribute("data-album-id") : "";
      openLightbox(albumId, parseInt(img.getAttribute("data-idx"), 10) || 0);
    });
    lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox__arrow--prev").addEventListener("click", function () { navLightbox(-1); });
    lightbox.querySelector(".lightbox__arrow--next").addEventListener("click", function () { navLightbox(1); });
    lightbox.addEventListener("click", function (ev) {
      if (ev.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (ev) {
      if (!lightbox.classList.contains("is-open")) return;
      if (ev.key === "Escape") closeLightbox();
      else if (ev.key === "ArrowLeft") navLightbox(-1);
      else if (ev.key === "ArrowRight") navLightbox(1);
    });
  }
})();
