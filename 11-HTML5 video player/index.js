const player = document.querySelector('.player');
const video = player.querySelector('.player_video');
const toggleButton = player.querySelector('.toggle');
const currentTime = player.querySelector('.current_time');
const durationTime = player.querySelector('.duration_time');
const skipButtons = player.querySelectorAll('[data-skip]');

const volumnImg = player.querySelector('.volumn_img');
const volumnRange = player.querySelector('.volumn_range');

// 播放 暂停 视频
function playVideo() {
  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  const methods = video.paused ? 'play' : 'pause';
  video[methods]();
}

// 播放 暂停 键
function playbtnChange() {
  const key = this.paused ? '▶' : '❚ ❚';
  toggleButton.textContent = key;
}

// 时间
function playTime() {
  let duration = video.duration;  // 获得的是秒
  let hour = parseInt(duration / 3600);
  let minute = parseInt(duration / 60);
  let seconds = parseInt(duration % 60);
  if(hour < 10) {
    hour = '0' + hour;    
  }
  if(minute < 10) {
    minute = '0' + minute;
  }
  if(seconds < 0) {
    seconds = '0' + seconds;
  }
  durationTime.innerHTML = (hour > 0) ? `${hour}:${minute}:${seconds}` : `${minute}:${seconds}`;

  setInterval(() => {
    let current = video.currentTime;
    let c_hour = parseInt(current / 3600);
    let c_minute = parseInt(current / 60);
    let c_seconds = parseInt(current % 60);
    if(c_hour < 10) {
      c_hour = '0' + c_hour;
    }
    if(c_minute < 10) {
      c_minute = '0' + c_minute;
    }
    if(c_seconds < 10) {
      c_seconds = '0' + c_seconds;
    }
    currentTime.innerHTML = (c_hour > 0) ? `${c_hour}:${c_minute}:${c_seconds}` : `${c_minute}:${c_seconds}`;
  }, 500);
}

// 快进 倒退
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// 声音
function handleVolumn() {
  console.log('1');
}

video.addEventListener('click', playVideo);
toggleButton.addEventListener('click', playVideo);

video.addEventListener('play', playbtnChange);
video.addEventListener('play', playTime);
video.addEventListener('pause', playbtnChange);

skipButtons.forEach(button => button.addEventListener('click', skip));

const volumnhandle = volumnRange.addEventListener('change', handleVolumn);
volumnImg.addEventListener('click', volumnhandle)