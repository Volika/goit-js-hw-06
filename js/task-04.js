const counterValue = 0;
const valeuEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(decrementBtn.dataset.action);
console.log(incrementBtn.dataset.action);
decrementBtn.addEventListener('click', () => {
    console.log('Click decrement -1');
});
incrementBtn.addEventListener('click', () => {
    console.log('Click increment +1')
});

function incrementBtnClick() {
    console.log('Click increment +1')
    counterValue+=1;
    valeuEl.innerHTML = counterValue;
}

function decrementBtnClick() {
    console.log('Click decrement -1');
    counterValue = counterValue - 1;
    valeuEl.innerHTML = counterValue;
}