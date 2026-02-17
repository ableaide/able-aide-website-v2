// assets/js/nav-dropdowns.js
(() => {
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  if (!dropdowns.length) return;

  function closeAll(except = null) {
    dropdowns.forEach((dd) => {
      if (dd !== except) {
        dd.classList.remove("is-open");
        const btn = dd.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  dropdowns.forEach((dd) => {
    const btn = dd.querySelector(".dropdown-toggle");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = dd.classList.contains("is-open");
      closeAll(dd);
      dd.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".nav-item.dropdown");
    if (!inside) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();
