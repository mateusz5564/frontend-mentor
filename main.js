const shareBtn = document.querySelector('.component__sharebtn');
const share = document.querySelector('.component__share');

function toggleShare() {
  share.classList.toggle('open');
  this.classList.toggle('openbtn')
}

shareBtn.addEventListener('click', toggleShare);