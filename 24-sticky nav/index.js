const nav = document.querySelector('.main');
const topOfNav = nav.offsetTop;

function fixedNav() {
//  console.log(topOfNav, window.scrollY);  // 367 364
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;    
    document.body.classList.remove('fixed-nav');    
  }
}

window.addEventListener('scroll', fixedNav);