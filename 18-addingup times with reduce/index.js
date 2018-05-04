// Array.from 从一个类似数组或可迭代对象中创建一个新的数组实例
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// 显示错误 timeNodes.map is not a function
// 所以我们对document.querySelectorAll('[data-time]');创建一个新的数组
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    // function(str) { return parseFloat(str); }  可以简写成 parseFloat
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);
  })
  .reduce((total, vidSeconds) => total + vidSeconds);  // 累加

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);