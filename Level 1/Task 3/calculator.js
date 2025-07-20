function appendValue(value) {
  document.getElementById('display').value += value;
}

function appendOperator(operator) {
  const display = document.getElementById('display');
  const lastChar = display.value.slice(-1);

  if ("+-*/.".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
