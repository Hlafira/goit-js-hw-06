/*
Write a script that, for each element in the ingredients array:

Will create a separate <li> element. Be sure to use the document.createElement() method.
Will add the ingredient name as its text content.
Will add the item class to the element.
Then will insert all <li> to the ul#ingredients list in a single operation.
*/
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.innerText = ingredient;
  item.classList.add("item");
  return item;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsItemsEl);
