function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const firstBoxSize = 30;
let collectionSize =0;

inputRef.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  console.log(collectionSize);
  const oneBoxSize = firstBoxSize;
  const boxCollection = createOneElement(oneBoxSize);

  boxesRef.append(boxCollection);
}
function onDestroyBtnClick() {

}
function onInputChange(event) {
  // console.log(event.currentTarget.value);
  // console.log(typeof event.currentTarget.value);
  collectionSize = (event.currentTarget.value);
}

function createOneElement(value) {
  const newItem = document.createElement('div');
  const newBgColor = getRandomHexColor();
  newItem.style.backgroundColor = newBgColor;
  newItem.setAttribute('width', value);
  newItem.setAttribute('height', value);
  console.log(newItem);
  return newItem;
}