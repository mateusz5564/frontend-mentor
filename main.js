const form = document.querySelector('.form');
const emailIn = document.querySelector('.form__input');
const emailErr = document.querySelector('.form__input-error');


emailIn.addEventListener('input', validateEmailIn);
form.addEventListener('submit', sendForm);


function validateEmailIn(e) {
  if(!validateEmail(emailIn.value)) {
    emailErr.classList.add('open');
    emailIn.classList.add('form__input--invalid');
    emailIn.setAttribute("aria-invalid", "true");
    return false;
  } else {
    emailErr.classList.remove('open');
    emailIn.classList.remove('form__input--invalid');
    emailIn.setAttribute("aria-invalid", "false");
    return true;
  }
}

function sendForm(e) {
  e.preventDefault();
  if(!validateEmailIn()) {
    console.log("form invalid")
  } else {
    //form valid
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}