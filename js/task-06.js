const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', onInputChange);
const standartVelueLength = Number(inputRef.dataset.length);

function onInputChange(event) {
    const getInputValue = event.currentTarget.value.trim().replaceAll(" ", "");
    if (inputRef.hasAttribute("class")) {
        inputRef.removeAttribute("class");
    };
    if (getInputValue.length === standartVelueLength) {
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.add("invalid");
    }
}
