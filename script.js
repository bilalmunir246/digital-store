(() => {
  "use strict";
  const ready = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, { once: true });
    else fn();
  };
  ready(() => {
    const buttons = Array.from(document.querySelectorAll(".category-tabs button"));
    const panels = Array.from(document.querySelectorAll(".category-panel"));
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    const filter = (target) => {
      buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.target === target));
      panels.forEach((panel) => panel.classList.toggle("hidden", target !== "cat-all" && panel.id !== target));
    };

    buttons.forEach((btn) => btn.addEventListener("click", () => filter(btn.dataset.target)));

    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => navLinks.classList.toggle("mobile-open"));
      navLinks.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    }

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach((el) => observer.observe(el));
    } else {
      revealItems.forEach((el) => el.classList.add("visible"));
    }
  });
})();