const inputRef = document.querySelector('#font-size-control');
const minFontSize = parseInt(inputRef.min);
const maxFontSize = parseInt(inputRef.max);

const textRef = document.querySelector('#text');

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
    const currentFontSize = inputRef.value;
    textRef.style.fontSize = currentFontSize + "px";  
}

