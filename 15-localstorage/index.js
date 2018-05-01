const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  // 当我们submit时， 会自动的刷新页面，所以我们 阻止默认事件，这样submit时就不会自动刷新了
  e.preventDefault();
  const text = (this.querySelector('[name=item')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();  // reset() 方法可把表单中的元素重置为它们的默认值。
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

// checkbox
function toggleDone(e) {
  if(!e.target.matches('input')) return;  // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;  // data-index
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);  
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);  // 刷新后数据依然在