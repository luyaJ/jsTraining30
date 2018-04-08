function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // remain to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // 过滤其中一种事件
  e.target.classList.remove('playing'); // 移除高亮的样式
}

const keys = Array.from(document.querySelectorAll('.key')); // 获取页面所有按钮元素
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // 添加 transition 事件监听

window.addEventListener('keydown', playSound);