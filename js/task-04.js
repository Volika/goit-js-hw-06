let counterValue = 0;
const valeuEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick() {
    counterValue = Number(valeuEl.textContent) + 1;
    updateDisplay(counterValue);
}
function onDecrementBtnClick() {
    counterValue = Number(valeuEl.textContent) - 1;
    updateDisplay(counterValue);
}
function updateDisplay(val) {
    valeuEl.innerHTML = val;
}