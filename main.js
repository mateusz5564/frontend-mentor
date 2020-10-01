const form = document.querySelector('.form');
const inputs = [...document.querySelectorAll('.form input')];

form.addEventListener('submit', sendForm);
inputs.forEach(input => input.addEventListener('input', () => validateInputs(input)))

function sendForm(e) {
  e.preventDefault();
  inputs.forEach(input => validateInputs(input))
}

function validateInputs(input) {
  if (input.id == "email") {
    validateEmail(input.value) != true ? addState(input) : removeState(input);
  } else {
    input.value == "" ? addState(input) : removeState(input);
  }
}

function addState(input) {
  input.parentElement.parentElement.querySelector(".form__error-msg").classList.add('show');
  input.nextElementSibling.classList.add('show'); //error icon
  input.parentElement.classList.add('error');
  input.id == "email" ? input.classList.add('error') : null;
}

function removeState(input) {
  input.parentElement.parentElement.querySelector(".form__error-msg").classList.remove('show');
  input.nextElementSibling.classList.remove('show'); //error icon
  input.parentElement.classList.remove('error');
  input.id == "email" ? input.classList.remove('error') : null;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}