const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

function handleMove(e) {
  const y = e.pageY - this.offsetTop;  // 音量顶部是0
  const percent = y / this.offsetHeight;  
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';

  // 速率
  const playbackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(2) + 'x';

  video.playbackRate = playbackRate;
}
  
speed.addEventListener('mousemove', handleMove);
