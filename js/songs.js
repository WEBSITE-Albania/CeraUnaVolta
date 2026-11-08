/* ==========================================================================
   C’era Una Volta – Song suggestions (songs.html)
   --------------------------------------------------------------------------
   The visitor writes a suggestion; on submit, WhatsApp opens with that text
   already typed, addressed to the bar's number (SITE.phoneHref in
   js/main.js). Nothing is sent automatically – the visitor reviews the
   message and presses Send in WhatsApp.
   ========================================================================== */

(function () {
  "use strict";

  const form = document.getElementById("song-form");
  if (!form || !window.CUV) return;

  const field = document.getElementById("song-text");
  const status = document.getElementById("song-status");
  const { t, SITE } = window.CUV;

  /* International number, digits only, as WhatsApp expects: 355695435744 */
  const whatsappNumber = SITE.phoneHref.replace(/\D/g, "");

  /* Status text keeps its translation key, so it follows a language switch */
  function setStatus(key, isError) {
    if (key) {
      status.setAttribute("data-i18n", key);
      status.textContent = t(key);
    } else {
      status.removeAttribute("data-i18n");
      status.textContent = "";
    }
    status.classList.toggle("is-error", Boolean(isError));
    status.classList.toggle("is-ok", Boolean(key) && !isError);
    if (isError) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  }

  field.addEventListener("input", () => {
    if (status.classList.contains("is-error") && field.value.trim() !== "") setStatus(null);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = field.value; // sent exactly as written

    if (message.trim() === "") {
      setStatus("songs.form.empty", true);
      field.focus();
      return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // pop-up blocked: open in this tab instead
    setStatus("songs.form.opened", false);
  });
})();
