/*
 *  input:
 *  - number represented as 'n'
 *
 *  output:
 *  - number
 *
 *  rules:
 *    - return the difference(subtraction) between
 *      - the square of the sum of 1 to 'n' positive integers
 *        if n === 3
 *        (1 + 2 + 3) ** 2
 *
 *      - the sum of the square from 1 to 'n' positive integers
 *        if n === 3
 *        (1**2 + 2**2 + 3**2)
 *
 *    - if n is 1 return 0
 *
 *  questions:
 *    - Should I assume input are always going to be positive integers?
 *
 *  data strucute:
 *    - Array to keep track of all positive integers from 1 to n
 *      - reduce
 *
 *  algorithm:
 *  if n is less than 2 return 0
 *
 *  create an array of number from 1 to n and assign to numbers;
 *
 *  calculate the squre of the sum of 1 to n and assign to squaredSum
 *    - reduce numbers to sum of all numbers
 *    - square the sum
 *
 *  calculate the sum of the squared numbers from 1 to n and assign to sumSquared
 *    - iterate and transform each number to its squared number
 *    - reduce number to sum of all squared numbers
 *
 *  return the difference of squaredSum and sumSquared
 */

function sumSquareDifference(number) {
  let numbers = [];

  for (let currentNum = 1; currentNum <= number; currentNum += 1) {
    numbers.push(currentNum);
  }

  let squaredSum = numbers.reduce((sum, num) => sum + num) ** 2;
  let sumSquared = numbers.map(num => num ** 2).reduce((sum, num) => sum + num);

  return squaredSum - sumSquared;
}


console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
