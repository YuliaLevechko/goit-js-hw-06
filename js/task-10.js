function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesElements = document.querySelector('#boxes');
const amountInput = document.querySelector('input');
let arrayBox = [];

createButton.addEventListener('click', createBoxes);
function createBoxes(amount) { 
  amount = amountInput.value;
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const box = `<div style="background-color: ${randomColor}; width: ${boxSize}px; height: ${boxSize}px; margin-bottom: 5px"></div>`
    arrayBox.push(box);
    boxSize += 10;
  }
  const boxes = arrayBox.join("");
  boxesElements.innerHTML = boxes;
}

destroyButton.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesElements.innerHTML = "";
  arrayBox = [];
  amountInput.value = 0;
}