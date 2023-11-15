const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractbtn = document.getElementById('btn-subtract');
const multiplybtn = document.getElementById('btn-multiply');
const dividebtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
