/*
 * input: positive integer
 * output: number
 * rules: - do not use for, while, do while loops
 *        - return the total sum of digits
 *        - use a series of method calls to perform the sum
 * algorithm:
 * coerce the number to a string
 * split the numberString into characters
 * reduce the numberStrings to the total sum
 */

let sum = function sumOfDigits(number) {
  return String(number)
    .split('')
    .reduce((sum, numberString) => sum + Number(numberString), 0);
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
