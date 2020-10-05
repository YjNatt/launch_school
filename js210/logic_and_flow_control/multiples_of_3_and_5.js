function multiplesOfThreeAndFive(min, max) {
  for (let currentNumber = min; currentNumber <= max; currentNumber += 1) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(String(currentNumber) + '!');
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(String(currentNumber));
    }
  }
}

multiplesOfThreeAndFive(5, 20);
