const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const listIngredients = ingredients.map(ingredient => {
  const listItems = document.createElement('li');
  listItems.classList.add("item");
  listItems.textContent = ingredient;
  return listItems;
});
list.append(...listIngredients);
console.log(list);