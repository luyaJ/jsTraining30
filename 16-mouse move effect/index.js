const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;  // 200px

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  // console.log(this, e.target);
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const xwalk = Math.round((x / width * walk) - (walk / 2));
  const ywalk = Math.round((y / height * walk) - (walk / 2));
  
  text.style.textShadow = `
    ${xwalk}px ${ywalk}px 0 rgba(245, 0, 233, 0.7),
    ${xwalk * -1}px ${ywalk}px 0 rgba(0, 255, 255, 0.7)
  `;
}

hero.addEventListener('mousemove', shadow);