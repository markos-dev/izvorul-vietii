/* =========================================================
   Izvorul Vieții — CONFIGURARE DONAȚII (Stripe)
   ---------------------------------------------------------
   Cum funcționează:
   1. Biserica își face cont pe https://stripe.com (sau alt
      procesator care emite „Payment Links").
   2. În Stripe → Payment Links → creezi câte un link pentru
      fiecare sumă de mai jos (cu Google Pay / card activate).
   3. Copiezi adresa fiecărui link (începe cu https://buy.stripe.com/...)
      și o pui în dreptul sumei potrivite, între ghilimele.

   Cât timp un câmp e gol (""), butonul afișează un mesaj că
   donațiile online nu sunt încă active — nimic nu se strică.
   ========================================================= */
window.DONATION_LINKS = {
  "10-lei":   "",   // ex: "https://buy.stripe.com/xxxxxxxx"
  "50-lei":   "",
  "100-lei":  "",
  "1000-lei": "",
  "5000-lei": "",
  "10-eur":   "",
  "50-eur":   "",
  "100-eur":  "",
  "1000-eur": ""
};

(function () {
  "use strict";
  var links = window.DONATION_LINKS || {};
  var note = document.getElementById("donate-note");
  var buttons = document.querySelectorAll(".donate-btn[data-plan]");
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    var plan = btn.getAttribute("data-plan");
    var url = links[plan];
    if (url) {
      btn.setAttribute("href", url);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    } else {
      btn.classList.add("is-pending");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (note) {
          note.textContent = "Donațiile online vor fi disponibile în curând. Îți mulțumim pentru inimă bună — până atunci ne poți contacta direct.";
          note.style.display = "block";
          note.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    }
  });
})();
