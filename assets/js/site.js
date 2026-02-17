// assets/js/site.js
(() => {
  // ---------- Mobile drawer toggle ----------
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // ---------- Dropdown toggles (mobile + click) ----------
  const parents = document.querySelectorAll(".nav-has-children");

  function closeAll(except = null) {
    parents.forEach((li) => {
      if (li !== except) {
        li.classList.remove("open");
        const btn = li.querySelector("button.nav-parent-link");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  parents.forEach((li) => {
    const btn = li.querySelector("button.nav-parent-link");
    const submenu = li.querySelector(".nav-submenu");
    if (!btn || !submenu) return;

    btn.addEventListener("click", (e) => {
      // On desktop hover you already have CSS; click should still work safely.
      e.preventDefault();

      const isOpen = li.classList.contains("open");
      closeAll(li);

      li.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  // Close dropdowns if clicking outside nav items
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-has-children")) {
      closeAll();
    }
  });

  // Close dropdowns on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();
