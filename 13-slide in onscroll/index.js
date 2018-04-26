/**
 * debounce 函数去抖
 * @param { scroll function } func 
 * @param { 每20ms计算一次 } wait 
 * @param {*} immediate 
 */
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const silderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // console.log(window.scrollY);
  silderImages.forEach(silderImage => {
    // half way through the image
    const slideInAt = window.scrollY + window.innerHeight - silderImage.height / 2;
    // bottom of the image
    const imageBottom = silderImage.offsetTop + silderImage.height;
    const isHalfShown = slideInAt > silderImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrollPast) {
      silderImage.classList.add('active');
    } else {
      silderImage.classList.remove('active');
    }
  })

}

window.addEventListener('scroll', debounce(checkSlide));