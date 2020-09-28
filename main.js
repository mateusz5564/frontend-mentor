const testimonials = [...document.querySelectorAll('.testimonial')];
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let previous, current, next;
current = testimonials[0];
next = testimonials[1];

function setPositions() {
  let currIndex = testimonials.indexOf(current);
  console.log({currIndex});
  currIndex <= 0 ? previous = null : previous = testimonials[currIndex - 1];
  currIndex >= testimonials.length - 1 ? next = null : next = testimonials[currIndex + 1];
  console.log({previous, current, next});
}

function handlePrev() {
  if(!previous) return;
  current.classList.add("hide");
  previous.classList.remove("hide");
  current = previous;
  setPositions();
}

function handleNext() {
  if(!next) return;
  current.classList.add("hide");
  next.classList.remove("hide");
  current = next;
  setPositions();
}

prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);