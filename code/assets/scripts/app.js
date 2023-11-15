const defaultResult = 0;
let currentResult = defaultResult;


function getUserNumberInput() {
  return parseInt(usrInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, clacNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${clacNumber}`
  outputResult(currentResult, calcDescription);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}


addBtn.addEventListener("click", add);
subtractbtn.addEventListener("click", subtract);
multiplybtn.addEventListener("click", multiply);
dividebtn.addEventListener("click", divide);