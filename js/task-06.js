const textInput = document.getElementById('validation-input');
const inputLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', validationInput);
function validationInput(event) {
    if (event.currentTarget.value.length === inputLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}
