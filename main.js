form = document.querySelector('.form');
emailIn = document.querySelector(".form__input");
formError = document.querySelector('.form__error');
formErrorIcn = document.querySelector('.form__error-icon');

form.addEventListener('submit', sendForm);

function sendForm(e) {
  e.preventDefault();
  let isEmailValid = validateEmail(emailIn.value);
  if(isEmailValid) {
    formError.classList.remove('show');
    formErrorIcn.classList.remove('show');
    form.classList.remove('red-border');
    emailIn.value = "";
  } else {
    formError.classList.add('show');
    formErrorIcn.classList.add('show');
    form.classList.add('red-border');
  }

}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}