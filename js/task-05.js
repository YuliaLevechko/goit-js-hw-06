const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', addTextInInput);

function addTextInInput(event) {
    if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.currentTarget.value;
    }
}
