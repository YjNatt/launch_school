/*  input:
 *  - String
 *    - digits
 *    - other non numeric characters
 *
 *  output:
 *  - boolean
 *  - True if input is valid according to luhn formula
 *
 *  Rules:
 *  - Ignore all non-numeric characters
 *  - Luhn formula
 *    - start from the right most digit
 *    - double every second digit
 *    - if the product is greater than 10 subtract 9 from the product
 *    ex: 8763 --> 7733 (2 * 6 = 12, 12 - 9 = 3 and 2 * 8 = 16, 16 - 9 = 3)
 *    - calculate the sum of digits
 *    - if sum is % 0 return true
 *    - else false
 *
 *  question:
 *  - Are there negative numbers included?
 *
 *  data structure:
 *  - Array:
 *    - Abstraction: map, reduce
 *
 *  algorithm:
 *  remove all non-numeric characters from input
 *  split input into an array of chars
 *  transform the array of chars to an array of numbers
 *  transform every second digit and multiply by 2
 *    - if the product is greater than or equal to 10
 *      subtract 9 and return product
 *    - else
 *      return return product
 *  reduce the array to a single number
 *  if the number divide by 10 is 0 return true
 *  else return false
 */

function getChecksum(input) {
  let numbers = input.match(/\d/g).map(Number).reverse();

  return numbers.reduce((sum, number, index) => {
    if (index % 2 === 0) return sum + number;

    let product = number * 2;
    if (product >= 10) product -= 9;

    return sum + product;
  });
}

function isValidChecksum(input) {
  return getChecksum(input) % 10 === 0;
}


console.log(isValidChecksum('1111')); // false
console.log(isValidChecksum('8763')); // true
console.log(isValidChecksum('0000')); // true
console.log(isValidChecksum('8763 8763 - a cva 8763')); // true
console.log(isValidChecksum('8 7 6 3')); // true
console.log(isValidChecksum('2323 2005 7766 3554')); // true

function makeChecksum(input) {
  if (isValidChecksum(input)) return input;
  let digit = 10 - (getChecksum(input + '0') % 10);
  return input + String(digit);
}

console.log(makeChecksum('2323 2005 7766 355')); // 2323 2005 7766 3554
console.log(makeChecksum('2323/2005.7766-355')); // 2323/2005.7766-3554
console.log(makeChecksum('1111')); // 11114

