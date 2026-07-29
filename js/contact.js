/* =========================================================
   Formularul de contact — pagina Contact
   Trimite mesajele către Formspree (https://formspree.io).

   CUM ACTIVEZI FORMULARUL:
   1. Creează un cont gratuit pe https://formspree.io
   2. Creează un formular nou, copiază adresa de tip
      "https://formspree.io/f/xxxxxxxx"
   3. Lipește adresa mai jos, în locul șirului gol "".
   Până atunci, formularul afișează un mesaj și îndrumă
   vizitatorul să scrie direct pe email.
   ========================================================= */
window.CONTACT_FORM_ENDPOINT = "";

(function () {
  var form = document.getElementById("contactForm");
  var note = document.getElementById("contactFormNote");
  if (!form) return;

  function showNote(text, isSuccess) {
    note.textContent = text;
    note.classList.add("is-visible");
    note.classList.toggle("is-success", !!isSuccess);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!window.CONTACT_FORM_ENDPOINT) {
      showNote("Formularul este în curs de activare. Te rugăm să ne scrii direct la pastor@izvorulvietii.ro — revenim cât mai curând!", false);
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "Se trimite…";
    note.classList.remove("is-visible", "is-success");

    fetch(window.CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          showNote("Mesajul a fost trimis. Îți mulțumim, revenim cât mai curând!", true);
        } else {
          showNote("A apărut o eroare la trimitere. Te rugăm să ne scrii direct la pastor@izvorulvietii.ro.", false);
        }
      })
      .catch(function () {
        showNote("A apărut o eroare de rețea. Te rugăm să ne scrii direct la pastor@izvorulvietii.ro.", false);
      })
      .finally(function () {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
      });
  });
})();
