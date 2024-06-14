const d = document;

const $navMenu = d.querySelector('.nav-menu');

d.addEventListener('click', e => {
  if(e.target.matches('.menu-btn') || e.target.matches(`.menu-btn *`)) {
    $navMenu.classList.toggle('show');
  }
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
