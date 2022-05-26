const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredient = document.querySelector('#ingredients');

const createIngredients = textArray => {
  return textArray.map(element => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = element;
  ingredientItem.classList.add("item");
  return ingredientItem;
});
}


const ingredientEl = createIngredients(ingredients);
console.log(ingredientEl);
listIngredient.append(...ingredientEl);
