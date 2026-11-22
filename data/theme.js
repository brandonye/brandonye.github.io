// Light / dark toggle.
// With no saved choice the site follows the visitor's system setting.
// Clicking the button flips the current look and remembers the choice.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    var chosen = root.getAttribute("data-theme");
    return chosen ? chosen === "dark" : systemDark.matches;
  }

  function sync() {
    button.setAttribute("aria-pressed", isDark() ? "true" : "false");
  }

  button.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });

  if (systemDark.addEventListener) systemDark.addEventListener("change", sync);

  button.hidden = false;
  sync();
})();
