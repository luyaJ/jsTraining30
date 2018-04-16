/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const ranges = player.querySelectorAll('.player_slider');

/* Build out functions */
// 播放 暂停 视频
function togglePlay() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// 播放 暂停 键
function changeButton() {
  const icon = this.paused ? '►' :  '❚ ❚';
  toggle.textContent = icon;
}

// 快进 倒退
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  // console.log(this.dataset.skip);
}

// 声音 速度
function handleRangeChange() {
  video[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.value);
}

// 进度条
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// 拖动进度条
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeChange));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));

video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
