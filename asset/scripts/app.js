const defaultResult = 0;

let currentResult = defaultResult;

const standardDays = 365;

// collects user's input
function usrInput() {
  return parseInt(userInput.value);
}

// Description Logic
function createAndWriteDescription(inputEntered, days) {
  const calcDescription = `${inputEntered} * ${days}`;
  outputResult(currentResult, calcDescription);
}

// converts from years to days
function multiplyAgeByDays() {
  let enteredNumber = usrInput();

  let finalResult = enteredNumber * standardDays;

  currentResult = finalResult;

  createAndWriteDescription(enteredNumber, standardDays);
}


ageButton.addEventListener('click', multiplyAgeByDays);
