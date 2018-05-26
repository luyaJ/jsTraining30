let countdown;
const timerDisplay = document.querySelector('.display_time_left');
const endTime = document.querySelector('.display_end_time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing times
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check it we should stop it
    if(secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const RemainerSeconds = seconds % 60;
  const display = `${minutes}:${RemainerSeconds < 10 ? '0' : '' }${RemainerSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

// timestamp 时间戳（1527300866854），使用new Date(1527300866854),可以将时间格式化
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${adjustHour}:${minutes < 10 ? '0' : '' }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});