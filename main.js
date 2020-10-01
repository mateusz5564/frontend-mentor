const form = document.querySelector('.form');

const firstNameIn = document.querySelector('#first-name');
const lastNameIn = document.querySelector('#last-name');
const emailIn = document.querySelector('#email');
const passwordIn = document.querySelector('#password');

const firstNameErr = document.querySelector("#first-name-error");
const lastNameErr = document.querySelector("#last-name-error");
const emailErr = document.querySelector("#email-error");
const passwordErr = document.querySelector("#password-error");

form.addEventListener('submit', sendForm);

function sendForm(e) {
  e.preventDefault();
  firstNameIn.value == "" ? addState(firstNameIn, firstNameErr) : removeState(firstNameIn, firstNameErr);
  lastNameIn.value == "" ? addState(lastNameIn, lastNameErr) : removeState(lastNameIn, lastNameErr);
  validateEmail(emailIn.value) != true ? addState(emailIn, emailErr) : removeState(emailIn, emailErr);
  passwordIn.value == "" ? addState(passwordIn, passwordErr) : removeState(passwordIn, passwordErr);
}

function addState(input, errorMsg) {
  errorMsg.classList.add('show');
  input.nextElementSibling.classList.add('show'); //error icon
  input.parentElement.classList.add('error');
  input.id == "email" ? emailIn.classList.add('error') : null;
}

function removeState(input, errorMsg) {
  errorMsg.classList.remove('show');
  input.nextElementSibling.classList.remove('show'); //error icon
  input.parentElement.classList.remove('error');
  input.id == "email" ? emailIn.classList.remove('error') : null;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}