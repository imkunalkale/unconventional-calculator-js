const defaultResult = 0;
let currentResult = defaultResult;


// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, clacNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${clacNumber}`
  outputResult(currentResult, calcDescription); // from vendor file.

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}


addBtn.addEventListener("click", add);
subtractbtn.addEventListener("click", subtract);
multiplybtn.addEventListener("click", multiply);
dividebtn.addEventListener("click", divide);