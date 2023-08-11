
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function creareAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


function add() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enterdNumber;
  creareAndWriteOutput("+", initialResult, enterdNumber);
}

function subtract() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enterdNumber;
  creareAndWriteOutput("-", initialResult, enterdNumber);
}


function multiply() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enterdNumber;
  creareAndWriteOutput("*", initialResult, enterdNumber);
}

function divide() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enterdNumber;
  creareAndWriteOutput("/", initialResult, enterdNumber);
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);



