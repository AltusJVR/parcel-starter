const burger = document.querySelector('.burger');
const navlinks = document.querySelectorAll('.navbar__links a');
const navbar = document.querySelector('.navbar__links');
const nav = document.querySelector('.navbar');

/* Toggle mobile navbar fade in. Toggle Navbar burger animation */
const toggle = () => {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });
  });
};

/* Toggle navbar opacity */
const navOpacity = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY <= 150) {
      nav.classList.add('navOpacity')
    } else {
      nav.classList.remove('navOpacity')
    }
  })
}


navOpacity();
toggle();