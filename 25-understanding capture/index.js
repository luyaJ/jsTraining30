const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,  // three two one
  once: true
}));

btn.addEventListener('click', () => {
  console.log('click!!!')
}, {
  once: true
});