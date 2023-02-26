let display = document.querySelector('.display');
let value1 = '';
let value2 = '';
let operator = '';

function clearDisplay() {
  display.textContent = '';
  value1 = '';
  value2 = '';
  operator = '';
}

function appendValue(num) {
  if (operator === '') {
    value1 += num;
    display.textContent = value1;
  } else {
    value2 += num;
    display.textContent = value2;
  }
}

function calculate() {
  let result;
 
