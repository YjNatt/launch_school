// function: sequence
// input: integer
// output: array of integers
// rules: array contains all integers between 1 and the input (inclusive)
//        - integers are always positive
// algorithm
// initialize numbers and assign empty array to numbers
// loop from 1 to input
//   - push number to numbers
// return numbers.

let sequence = function sequenceOfNumbers(number) {
  let numbers = [];

  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    numbers.push(currentNumber);
  }

  return numbers;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
