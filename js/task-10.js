function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const firstBoxSize = 30;
let collectionSize;

inputRef.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBtnClick(event) {
  createBoxes(collectionSize);
}

function createBoxes(amount) {
    const collectionArray = [];
  let counter = 0;
while (counter < Number(amount)) {
  counter += 1;
  const oneBoxSize = firstBoxSize + counter*10;
  const boxCollection = createOneElement(oneBoxSize); 
  collectionArray.push(boxCollection);
  }
    boxesRef.append(...collectionArray);
}

function destroyBoxes() {
  const collectionsItem = document.querySelectorAll('.new-div');
  let counter = 0;
  while (counter < collectionsItem.length) {
    counter += 1;
    const remItem = document.querySelector('.new-div');
      remItem.remove();
  }
}

function onInputChange(event) {
   collectionSize = (event.currentTarget.value);
}

function createOneElement(value) {
  const newItem = document.createElement('div');
  const newBgColor = getRandomHexColor();
  newItem.style.backgroundColor = newBgColor;
  newItem.style.width = value +'px';
  newItem.style.height = value + 'px';
  newItem.classList.add('new-div');
  return newItem;
}

 
