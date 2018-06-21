const player = document.querySelector('#video_wrapper');
const videoPlayer = document.querySelector('#video');
const toggleBtn = document.querySelector('.toggle');
const duration_time = document.querySelector('.duration_time');
const current_time = document.querySelector('.current_time');
const skipBtns = document.querySelectorAll('[data-skip]');

const rate_range = document.querySelector('.rate_range');
const volumn_range = document.querySelector('.volumn_range');
const rate_num = document.querySelector('.rate_num');
const volumn_num = document.querySelector('.volumn_num');

const progress = document.querySelector('.progress');
const progress_fill = document.querySelector('.progress_fill');

// 播放 暂停 视频
function playVideo() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

// 播放 暂停 按钮
function playBtn() {
  const key = videoPlayer.paused ? '▶' : '❚ ❚';
  toggleBtn.textContent = key;
}

// 时间
function playTime() {
  let duration = videoPlayer.duration; // 获得秒
  let hour = parseInt(duration / 3600);
  let minu = parseInt(duration / 60);
  let seconds = parseInt(duration % 60);

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minu < 10) {
    minu = '0' + minu;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  duration_time.innerHTML = (hour > 0) ? `${hour}:${minu}:${seconds}` : `${minu}:${seconds}`;

  // 当前运行时间
  setInterval(() => {
    let current = videoPlayer.currentTime;
    let hour = parseInt(current / 3600);
    let minu = parseInt(current / 60);
    let seconds = parseInt(current % 60);

    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minu < 10) {
      minu = '0' + minu;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    current_time.innerHTML = (hour > 0) ? `${hour}:${minu}:${seconds} ` : `${minu}:${seconds} `;
  }, 500);
}

// 快进 后退
function skip() {
  videoPlayer.currentTime += parseFloat(this.dataset.skip);
}

// 倍速 
function handleRateRange() {
  videoPlayer.playbackRate = this.value;
  rate_num.innerHTML = this.value;
}

// 音量
function handleVolumnRange() {
  videoPlayer.volumn = this.value;
  volumn_num.innerHTML = parseInt(this.value * 100);
}

// 进度条
function handleProgress() {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progress_fill.style.flexBasis = `${percent}%`;
}

// 进度条拖拉
function scrub(e) {
  // progress.offsetWidth 等于 640px 
  // scrubTime 的最大时间为 duration
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  videoPlayer.currentTime = scrubTime;
}

videoPlayer.addEventListener('click', playVideo);
videoPlayer.addEventListener('click', playBtn);
toggleBtn.addEventListener('click', playVideo);
toggleBtn.addEventListener('click', playBtn);

videoPlayer.addEventListener('play', playTime);

skipBtns.forEach(btn => btn.addEventListener('click', skip));
rate_range.addEventListener('change', handleRateRange);
rate_range.addEventListener('mousemove', handleRateRange);
volumn_range.addEventListener('change', handleVolumnRange);
volumn_range.addEventListener('mousemove', handleVolumnRange);

videoPlayer.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);