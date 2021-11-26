const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLi = document.querySelector(".nav-menu-item");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible"),navMenu.classList.toggle("nav-menu-item");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});