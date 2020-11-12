const darkModeBtn = document.querySelector('.switch__button');
const page = document.querySelector('body');

darkModeBtn.addEventListener('click', handleSwitch);
window.addEventListener('DOMContentLoaded', handleSwitch);

function handleSwitch(e) {
  darkModeBtn.checked ? page.classList.add('page--dark') : page.classList.remove('page--dark');
}