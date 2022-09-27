/*Write a script to create and clear a collection of elements.The user enters the number of elements into input and clicks the New button, after which a collection is rendered.When you click on the Clear button, the collection is cleared.
 
Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many <div> as specified in amount and adds them to div#boxes.

The dimensions of the very first <div> are 30px by 30px.
Each element after the first one should be 10px wider and higher than the previous one.
All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.
Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const START_SIZE = 30;

const inputCount = document.querySelector("#controls input");
const boxesElement = document.querySelector("#boxes");

let size = START_SIZE;

function createBoxes(amount) {
  const boxes = Array(amount)
    .fill("")
    .map((item) => {
      const box = document.createElement("div");
      box.style.width = box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      size += 10;
      return box;
    });
  boxesElement.append(...boxes);
}

const btnCreateBoxes = document.querySelector("button[data-create]");
btnCreateBoxes.addEventListener("click", () => {
  const amount = Number(inputCount.value);
  createBoxes(amount);
});

const btnRemoveBoxes = document.querySelector("button[data-destroy]");
btnRemoveBoxes.addEventListener("click", () => {
  document.querySelectorAll("#boxes div").forEach((element) => {
    element.remove();
    size = START_SIZE;
  });
});
