const checkboxs = document.querySelectorAll('.box input[type="checkbox"]');
const checkAll = document.querySelector('.checkAllbox input[type="checkbox"]');

// check if they had the shift key down and check that they are checking it
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.ctrlKey && this.checked) {
    // go ahead and do what we please loop over every single checkbox
    checkboxs.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

function checkAllBox(e) {
  checkboxs.forEach(checkbox => {
    if (this.checked) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
checkAll.addEventListener('click', checkAllBox);