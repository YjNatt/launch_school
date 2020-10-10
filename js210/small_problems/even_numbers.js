let evenNumbers = function(min=1, max=99) {
  for (let number = min; number <= max; number += 1) {
    if (number % 2 === 0) console.log(number);
  }
};

evenNumbers(5, 15);
