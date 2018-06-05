const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';  // 两线交汇时，创建圆形边角
ctx.lineCap = 'round';  // 线条末端线帽的样式
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 50;  // 起点横坐标
let lastY = 50;  // 起点纵坐标
let hue = 0;
let direction = true;

function draw(e) {
  // stop the fn from running when they are not moused down
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // ctx.lineWidth = hue;
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start to
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // 使画笔是流畅的

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
  //   direction = !direction;
  // }

  // if(direction) {
  //   ctx.lineWidth++;
  // } else {
  //   ctx.lineWidth--;
  // }
}

canvas.addEventListener('mousedown', e => isDrawing = true);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);