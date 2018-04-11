const panel = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleWord(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleWord));
