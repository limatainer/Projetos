var rangeA = null;
var rangeB = null;
var inputA = null;
var inputB = null;
var inputSum = null;
var inputSubtraction = null;
var inputMultiplication = null;
var inputDivision = null;

function start() {
  mapInputs();
  addEvents();
  calculate();
}

function mapInputs() {
  rangeA = document.querySelector('#rangeA');
  rangeB = document.querySelector('#rangeB');
  inputA = document.querySelector('#inputA');
  inputB = document.querySelector('#inputB');
  inputSum = document.querySelector('#inputSum');
  inputSubtraction = document.querySelector('#inputSubtraction');
  inputMultiplication = document.querySelector('#inputMultiplication');
  inputDivision = document.querySelector('#inputDivision');
}

function addEvents() {
  rangeA.addEventListener('input', handleInputAChange);
  rangeB.addEventListener('input', handleInputBChange);
}

function handleInputAChange(event) {
  inputA.value = event.target.value;
  calculate();
}

function handleInputBChange(event) {
  inputB.value = event.target.value;
  calculate();
}

function calculate() {
  var numberA = parseInt(inputA.value, 10);
  var numberB = parseInt(inputB.value, 10);

  inputSum.value = numberA + numberB;
  inputSubtraction.value = numberA - numberB;
  inputMultiplication.value = numberA * numberB;

  if (numberB === 0) {
    inputDivision.value = 'Divisão por 0';
  } else {
    inputDivision.value = (numberA / numberB).toFixed(2);
  }
}

start();
