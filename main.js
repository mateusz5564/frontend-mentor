const menuBtn = document.querySelector(".header__btn");
const menuBtnIcon = document.querySelector(".header__btn-icon");
const menu = document.querySelector(".mobile-nav");

const openAndCloseMenu = (e) => {
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
  document.removeEventListener("keydown", keyboardListener);
};

const openMenu = () => {
  const focusableEls = [...document.querySelectorAll(".header__btn, .mobile-nav__link"),];
  keyboardListener = (e) => {
    handleKeyboardInput(e, focusableEls);
  }
  document.addEventListener("keydown", keyboardListener);

  menu.classList.add("mobile-nav--open");
  document.body.classList.add("modal-open");
  menuBtnIcon.setAttribute("src", "./images/icon-close.svg");
};

const handleKeyboardInput = (e, focusableEls) => {
  //ARROW UP
  if (e.keyCode === 38) {
    focusElement("previous", focusableEls);
  }
  //ARROW DOWN
  else if (e.keyCode === 40) {
    focusElement("next", focusableEls);
  } 
  //SHIFT AND TAB
  else if (e.shiftKey && e.keyCode === 9) {
    e.preventDefault();
    focusElement("previous", focusableEls);
  } 
  //TAB
  else if (e.keyCode === 9) {
    e.preventDefault();
    focusElement("next", focusableEls);
  }
};

const focusElement = (direction, focusableEls) => {
  let activeEl = document.activeElement;
  let indexOfActiveEl = focusableEls.indexOf(activeEl);
  let previousEl, nextEl;

  if (direction === "next") {
    indexOfActiveEl === focusableEls.length - 1 ? nextEl = focusableEls[0] : nextEl = focusableEls[indexOfActiveEl + 1];
    nextEl.focus();
    
  } else if (direction === "previous") {
    indexOfActiveEl === 0 ? previousEl = focusableEls[focusableEls.length - 1] : previousEl = focusableEls[indexOfActiveEl - 1];
    previousEl.focus();
    
  } else {
    throw Error("Wrong direction!");
  }
};

menuBtn.addEventListener("click", openAndCloseMenu);
