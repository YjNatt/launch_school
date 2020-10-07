let isPrime = (number) => {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) return false;

    divisor += 2;
  }

  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  for (let firstNumber = 2; firstNumber < expectedSum; firstNumber += 1){
    let secondNumber = expectedSum - firstNumber;
    if (firstNumber > (expectedSum / 2)) {
      break;
    } else if (isPrime(firstNumber) && isPrime(secondNumber)) {
      console.log(firstNumber, secondNumber);
    }
  }
};

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
