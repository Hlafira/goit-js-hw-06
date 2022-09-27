/*
Write a script that:

Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
For each li.item element in the ul#categories list, will find and display in the console the element header text (<h2> tag) and the number of elements in the category (all nested <li>).
As a result, the following messages will be displayed in the console.
*/
const categoryItemsEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryItemsEl.length} \n`);
categoryItemsEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
