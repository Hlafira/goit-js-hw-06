/*
Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTextEl.textContent = color;
});
