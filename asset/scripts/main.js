const userInput = document.getElementById("age-input");

const ageButton = document.getElementById("btn-check");

const resultOutput = document.getElementById("result-output");
const resultCalculation = document.getElementById("result-calculation");


function outputResult(result, text) {
  resultOutput.textContent = result;
  resultCalculation.textContent =  text;
}