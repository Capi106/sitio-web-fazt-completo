const d = document;

const $navMenu = d.querySelector('.nav-menu');

d.addEventListener('click', e => {
  if(e.target.matches('.menu-btn') || e.target.matches(`.menu-btn *`)) {
    $navMenu.classList.toggle('show');
  }
})
