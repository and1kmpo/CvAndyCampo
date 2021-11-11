<<<<<<< HEAD
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

=======
const navToggle = document.querySelector(".navToggle");
const navMenu = document.querySelector(".items_nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
>>>>>>> 0f2f45453741010a8b476988bc2a576752c3f2a4
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
<<<<<<< HEAD
});


=======
  
});
>>>>>>> 0f2f45453741010a8b476988bc2a576752c3f2a4
