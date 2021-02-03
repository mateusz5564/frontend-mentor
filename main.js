const menuBtn = document.querySelector(".header__btn");
const menuBtnIcon = document.querySelector(".header__btn-icon");
const menu = document.querySelector(".mobile-nav");


const openAndCloseMenu = (e) => {
  console.log(document.activeElement)
  if (isMenuOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
};

const isMenuOpen = () => menu.classList.contains("mobile-nav--open");

const closeMenu = () => {
  menu.classList.remove("mobile-nav--open");
  
  document.body.classList.remove("modal-open");
  menuBtnIcon.setAttribute("src", "./images/icon-hamburger.svg");
};

const openMenu = () => {
  
  menu.classList.add("mobile-nav--open");
  
  document.body.classList.add("modal-open");
  menuBtnIcon.setAttribute("src", "./images/icon-close.svg");
};

menuBtn.addEventListener("click", openAndCloseMenu);