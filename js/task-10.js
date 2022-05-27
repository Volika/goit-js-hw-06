function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const collectionSize = 0;

inputRef.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
   createOneElement()
}
function onDestroyBtnClick() {

}
function onInputChange(event) {
  console.log(event.currentTarget.value);
  console.log(typeof event.currentTarget.value);
  // collectionSize = Number(event.currentTarget.value);
}

function createOneElement() {
  const newItem = document.createElement('div');
  const newBgColor = getRandomHexColor();
  newItem.style.backgroundColor = newBgColor;
  
  console.log(newItem);

}