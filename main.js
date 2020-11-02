const questionBtns = document.querySelectorAll(".faq__question-btn");
questionBtns.forEach(btn => btn.addEventListener('click', handleButton));

function handleButton(e) {
  const question = this.parentElement.parentElement;
  const questionArrow = question.querySelector('.faq__question-arrow');
  const answer = question.querySelector('.faq__answer');

  closeAllAnswers();

  //question state
  this.classList.toggle("faq__question-btn--active");
  questionArrow.classList.toggle('faq__question-arrow--active');
  this.getAttribute('aria-expanded') == 'true' ? this.setAttribute('aria-expanded', 'false') : this.setAttribute('aria-expanded', 'true');

  //answer state
  toggleAnswer(answer);
}

function toggleAnswer(answer) {
  answer.classList.toggle('faq__answer--active');
  answer.getAttribute('aria-hidden') == 'true' ? answer.setAttribute('aria-hidden', 'false') : answer.setAttribute('aria-hidden', 'true');
}

function closeAllAnswers() {
  const questions = document.querySelectorAll('.faq__question');

  questions.forEach(question => {
    //question
    question.querySelector('.faq__question-btn').classList.remove("faq__question-btn--active");
    question.querySelector('.faq__question-arrow').classList.remove('faq__question-arrow--active');
    question.querySelector('.faq__question-btn').setAttribute('aria-expanded', 'false');

    //answer
    question.querySelector('.faq__answer').classList.remove('faq__answer--active');
    question.querySelector('.faq__answer').setAttribute('aria-hidden', 'true');
  })
}