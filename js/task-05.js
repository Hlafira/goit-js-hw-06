/**
 Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.
 */
const nameInput = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutputEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value;
});
