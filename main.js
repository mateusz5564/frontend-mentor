const menuBtn = document.querySelector('.header__btn');
const menuBtnIcon = document.querySelector('.header__btn-icon');
const menu = document.querySelector('.mobile-nav')

const handleMenu = (e) => {
  if (menu.style.transform) {
    menu.style.transform = "";
    menuBtnIcon.setAttribute('src', './images/icon-hamburger.svg');
  } else {
    menu.style.transform = "translateY(0)";
    menuBtnIcon.setAttribute('src', './images/icon-close.svg');
  }
}

menuBtn.addEventListener("click", handleMenu);