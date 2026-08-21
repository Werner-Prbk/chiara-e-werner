(function () {
  "use strict";

  const dateElement = document.getElementById("wedding-date");

  if (!dateElement) {
    return;
  }

  const browserLanguage = (navigator.language || "").toLowerCase();
  const language = browserLanguage.split("-")[0];
  const localizedDates = {
    de: "11. Juni 2027",
    it: "11 giugno 2027",
    en: "11 June 2027"
  };
  const displayLanguage = language === "de" || language === "it" ? language : "en";

  dateElement.textContent = localizedDates[displayLanguage];
  dateElement.lang = displayLanguage;
}());
