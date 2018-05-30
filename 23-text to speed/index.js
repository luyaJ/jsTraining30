// 文字转化成语音
const msg = new SpeechSynthesisUtterance('[name="voice"]');
let voices = [];
const voiceDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopBtn = document.querySelector('#stop');
const speakBtn = document.querySelector('#speak');

msg.text = document.querySelector('[name="text"]').value;

function populateVoice() {
  voices = this.getVoices();
  voiceDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('')
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value)
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoice);
voiceDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakBtn.addEventListener('click', toggle);
stopBtn.addEventListener('click', () => toggle(false));
