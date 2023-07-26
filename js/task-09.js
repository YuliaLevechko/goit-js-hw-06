function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const buttonElem = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

buttonElem.addEventListener('click', onchangeColor);
function onchangeColor(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
}