// --------------
// --------------
// Hamburger Menu
// --------------
// --------------

const hamburgerIcon = document.getElementById("hamburger");
      const menu = document.getElementById("menu");
      const navLinks = document.querySelectorAll(".nav__links");
      const logo = document.getElementById("logo");

// Toggles the menu
hamburgerIcon.addEventListener("click", () => {
   menu.classList.toggle("nav-active");
})

// Removes menu if a link is clicked
navLinks.forEach(navLinks => {
   navLinks.addEventListener("click", () => {
      menu.classList.remove("nav-active");
   });
});

// Removes menu if logo is clicked
logo.addEventListener("click", () => {
   menu.classList.remove("nav-active");
})

// -------------
// -------------
// Scroll Reveal
// -------------
// -------------

if (screen.width <= 320) {
   console.log("Hello World")
   ScrollReveal({
      mobile: false
   });
} else {
   ScrollReveal({
      origin: 'top',
      distance: '32px',
      duration: 2000,
      delay: 400,
   });
}

ScrollReveal().reveal('.hero__text');

ScrollReveal().reveal('.features__card',
                     {delay: 500, origin: 'bottom'})

ScrollReveal().reveal('.hero__illustration',
            {delay: 1000, origin: 'right'});

ScrollReveal().reveal('.bestSeller__text, .subOnly__image--container, .upComing__text, .signUp__image',
            {delay: 500, origin: 'right'});

ScrollReveal().reveal('.bestSeller__illustration, .subOnly__text, .upComing__image, .signUp__text',
            {delay: 500, origin: 'left'});

ScrollReveal().reveal('.subOnly__text::before, .subOnly__text::after, .signUp__text::before, signUp__text::after',
         {delay: 1000, origin: 'left'});