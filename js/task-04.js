/*
The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.
Create a variable, counterValue, that will store the current counter value and initialize it with 0.
Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
Update the interface with the new value of the variable counterValue.
*/
let counterValue = 0;
const counterEl = document.querySelector("#value");

const updateData = () => {
  counterEl.textContent = counterValue;
};

document
  .querySelector(`button[data-action = "decrement"]`)
  .addEventListener("click", () => {
    counterValue -= 1;
    updateData();
  });

document
  .querySelector(`button[data-action = "increment"]`)
  .addEventListener("click", () => {
    counterValue += 1;
    updateData();
  });
