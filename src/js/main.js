const burger = document.querySelector('.burger');
const navlinks = document.querySelectorAll('.navbar__links a');
const navbar = document.querySelector('.navbar__links');

const toggle = () => {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    navlinks.forEach(link, index => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.styles.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });
  });
}

toggle();