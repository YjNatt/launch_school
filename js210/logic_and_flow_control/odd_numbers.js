let logOddNumbers = function(endNumber) {
  for (let number = 1; number <= endNumber; number += 1){
    if (number % 2 === 0) {
      continue;
    }

    console.log(number);
  }
};

logOddNumbers(19);
