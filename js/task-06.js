const inputEl = document.querySelector('#validation-input');
const lengthMin = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', event => {
    const val = event.currentTarget.value.length;
  console.log(val);
  console.log(`${val}` === lengthMin);

  if (`${val}` !== lengthMin) {
    inputEl.classList.add('invalid');
    inputEl.classList.replace('valid', 'invalid');
    console.log(inputEl);
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.replace('invalid', 'valid');
    console.log(inputEl);
  }
});














