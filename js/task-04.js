const counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(decrementBtn.dataset.action);
console.log(incrementBtn.dataset.action);
decrementBtn.addEventListener('click', () => {
    console.log('Click decrement -1')
});
incrementBtn.addEventListener('click', () => {
    console.log('Click increment +1')
});
const valeuEl = document.querySelector('#value');
console.log(valeuEl)