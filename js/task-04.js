let counterValue = 0;
const counter = document.querySelector('#value');

const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

const buttonIncremet = document.querySelector('[data-action="increment"]');
buttonIncremet.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});



