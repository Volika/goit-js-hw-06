const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredient = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(element => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = element;
  ingredientItem.classList.add("item");
  return ingredientItem;
});

console.log(ingredientEl);

listIngredient.append(...ingredientEl);
