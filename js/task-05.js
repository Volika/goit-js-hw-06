const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if (event.currentTarget.value.length > 0) {
        outputRef.textContent = event.currentTarget.value;
    } else {
        outputRef.textContent = "Anonymous";
    }
    
}