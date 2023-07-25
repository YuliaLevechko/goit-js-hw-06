const valueElement = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

function updateValue() {
    valueElement.textContent = counterValue;
}

incrementBtn.addEventListener("click", () => {
    counterValue ++;
    updateValue();
});

decrementBtn.addEventListener("click", () => {
    counterValue --;
    updateValue();
});