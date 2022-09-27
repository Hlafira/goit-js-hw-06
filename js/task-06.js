/* 
Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.
The number of characters in the input is specified in its data-length attribute.
If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
To add styles, use the valid and invalid CSS classes, which you can find in the task source files.
*/
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  const minLength = Number(event.currentTarget.dataset.length);

  switch (true) {
    case event.currentTarget.value.length === 0: {
      event.currentTarget.classList.remove("valid", "invalid");
      break;
    }
    case event.currentTarget.value.length < minLength: {
      event.currentTarget.classList.remove("valid");
      event.currentTarget.classList.add("invalid");
      break;
    }
    default: {
      event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.add("valid");
    }
  }
});
