// Shows the button value on the display screen
function appendValue(button) {
  const display = document.querySelector(".display input");
  display.value += button.value;
  console.log(display.value);
}

// Deletes the last character of the display value
function del() {
  const displayInputs = document.querySelector(".display input");
  displayInputs.value = displayInputs.value.slice(0, -1);
}

// Calculates the result in the display and
// change the dispaly value with result
function evaluateResult() {
  const displayInputs = document.querySelector(".display input");
  try {
    displayInputs.value = eval(displayInputs.value);
  } catch {
    displayInputs.value = "Error";
  }
}

// function maximumDigit()
