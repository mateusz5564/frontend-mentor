const questionBtns = document.querySelectorAll(".faq__question-btn");

questionBtns.forEach(btn => btn.addEventListener('click', toggleAnswer));

function toggleAnswer(e) {
  this.parentElement.querySelector('.faq__answer').classList.toggle('faq__answer--active')
  this.classList.toggle("faq__question-btn--active");
}