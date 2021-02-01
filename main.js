const menuBtn = document.querySelector('.header__btn');
const menuBtnIcon = document.querySelector('.header__btn-icon');
const menu = document.querySelector('.mobile-nav')

const openAndCloseMenu = (e) => {
  if (menu.style.transform) {
    menu.style.transform = "";
    menu.style.display = "none";
    document.body.classList.remove('menu-open');
    menuBtnIcon.setAttribute('src', './images/icon-hamburger.svg');
  } else {
    menu.style.transform = "translateY(0)";
    menu.style.display = "block";
    document.body.classList.add('menu-open');
    menuBtnIcon.setAttribute('src', './images/icon-close.svg');
  }
}

menuBtn.addEventListener("click", openAndCloseMenu);