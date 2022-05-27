const spanRef = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const newBgColor = getRandomHexColor();
  spanRef.innerHTML = newBgColor;

  changeBackground(newBgColor);
}

function changeBackground(color) {
   document.body.style.background = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
