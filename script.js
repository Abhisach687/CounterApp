const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", function () {
  //set counter value to 0
  counterValueEl.textContent = 0;
  //reset background color
  counterEl.classList.remove("counter--limit");
  //reset counter title
  counterTitleEl.textContent = "Fancy Counter";
  //enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  //unfocus (blur) reset button
  resetButtonEl.blur();
});

function incrementCounter() {
  //get current value of the counter
  const currentValue = counterValueEl.textContent;
  //convert to number type
  const currentValueAsNumber = +currentValue;
  //increment by 1
  let newValue = currentValueAsNumber + 1;
  //check if > 5
  if (newValue >= 5) {
    newValue = 5;
    //visual indicator
    counterEl.classList.add("counter--limit");
    //update counter title to say limit has reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";
    //disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  //set counter element with new value
  counterValueEl.textContent = newValue;
  //unfocus (blur) button
  increaseButtonEl.blur();
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
  //unfocus (blur) button
  decreaseButtonEl.blur();
});

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
