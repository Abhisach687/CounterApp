const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

resetButtonEl.addEventListener("click", function () {
  //set counter value to 0
  counterValueEl.textContent = 0;
});

function incrementCounter() {
  //get current value of the counter
  const currentValue = counterValueEl.textContent;
  //convert to number type
  const currentValueAsNumber = +currentValue;
  //increment by 1
  const newValue = currentValueAsNumber + 1;
  //set counter element with new value
  counterValueEl.textContent = newValue;
}
decreaseButtonEl.addEventListener("click", function () {
  //get current value
  const currentValue = counterValueEl.textContent;
  //convert to number
  const currentValueAsNumber = +currentValue;
  //decrement by 1
  let newValue = currentValueAsNumber - 1;
  //check if new value is less than 0
  if (newValue < 0) {
    newValue = 0;
  }
  //update counter value with new value
  counterValueEl.textContent = newValue;
});

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
