const inputElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
inputElem.addEventListener('input', fontSizeControl);

function fontSizeControl() {
    textElem.style.fontSize = inputElem.value + 'px';
}