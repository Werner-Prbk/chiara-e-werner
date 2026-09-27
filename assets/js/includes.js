(function () {
  "use strict";

  const currentPath = window.location.pathname.replace(/\/$/, "/index.html");

  document.querySelectorAll("[data-include]").forEach(async (element) => {
    try {
      const response = await fetch(element.dataset.include);
      if (!response.ok) {
        throw new Error(`Could not load ${element.dataset.include}: ${response.status}`);
      }
      element.innerHTML = await response.text();

      const links = element.querySelector(".site-nav ul");
      const mobileMenu = element.querySelector(".nav-menu__panel");
      if (links && mobileMenu) {
        mobileMenu.append(links.cloneNode(true));
      }

      element.querySelectorAll("nav a[href]").forEach((link) => {
        if (new URL(link.href).pathname === currentPath) {
          link.setAttribute("aria-current", "page");
        }
      });
    } catch (error) {
      // Keep the original fallback content if a snippet cannot be loaded.
      console.error(error);
    }
  });
}());
