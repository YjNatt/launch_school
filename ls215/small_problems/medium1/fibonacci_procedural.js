/*
 *  input:
 *    nth - number
 *
 *  output:
 *    number
 *
 *  rules:
 *    - Return the nth fibonacci number
 *    - Fibonacci number is a sequence of numbers
 *      - each number is the sum of the previous two numbers
 *      - the first two numbers are 1, 1
 *
 *    - write a procedural function to calculate the return value.
 *
 *  data structure:
 *    array of two numbers to keep track
 *
 *  algorithm:
 *    return 1 if nth is 1 or 2
 *
 *    initialize an array containing 2 elements, two number 1 assign to currentNumbers
 *
 *    loop from 2 to nth
 *      reassign the first number as the second number
 *      reassign the second number as the sum of the first and second number
 *
 *    return the sum of current numbers
 */


function fibonacci(nth) {
  let previousNumbers = [1, 1];

  for (let count = 3; count <= nth; count += 1) {
    let sum = previousNumbers.reduce((sum, num) => sum + num);
    previousNumbers = [previousNumbers[1], sum];
  }

  return previousNumbers[1];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
