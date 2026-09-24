(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var label = document.querySelector("[data-theme-label]");
  var stored = localStorage.getItem("portfolio-theme");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (systemDark ? "dark" : "light");

  function applyTheme(nextTheme) {
    root.setAttribute("data-theme", nextTheme);
    if (!toggle || !label) return;
    var isDark = nextTheme === "dark";
    label.textContent = isDark ? "Light mode" : "Dark mode";
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", nextTheme);
      applyTheme(nextTheme);
    });
  }
})();