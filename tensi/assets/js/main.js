// Mobile nav toggle only — FAQ uses native <details>/<summary>, no JS needed.
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".nav-menu-btn");
  const links = document.querySelector(".nav-links");
  if (!menuBtn || !links) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
});
