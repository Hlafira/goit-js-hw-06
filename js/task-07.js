/*
Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.
*/

const controlFontSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
controlFontSize.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
