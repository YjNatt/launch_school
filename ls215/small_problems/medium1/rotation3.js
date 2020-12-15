/*
 *  input:
 *    number - whole integer
 *
 *  output:
 *    number - input number with digits rotated
 *
 *  rules:
 *    Rotate the number to the left by 1 digit.
 *    Fix the left most digit in place and rotate the remaining digits.
 *    Repeat until all digit are fixed in place.
 *
 *    If number is rotated and contains a leading zero, the zero is dropped.
 *
 *  question:
 *    What if input is other than a number type?
 *    What if input is empty?
 *    What if input is a negative number?
 *
 *  Data structure:
 *    Array: Need to keep track of what index to fix digit in position
 *           Can be mutated
 *
 *  Algorithm:
 *  - initialize an empty string and assign to numberString.
 *
 *  - coerce the number to a string, split the string into characters and assign to digitStrings.
 *  
 *  - while digitStrings is not empty
 *    - rotate digitStrings by 1 and remove the first digitString.
 *      - remove the first digit and push digit back into digitStrings
 *    - concatenate the removed digitString with numberString and reassign numberString
 *      to the return value
 *  
 *  coerce numberString into a number and return the value.
 */

function rotate(elements) {
  let firstElement = elements.shift();
  elements.push(firstElement);
}

function maxRotation(number) {
  let numberString = '';
  let digitStrings = String(number).split('');

  while (digitStrings.length > 0) {
    rotate(digitStrings);
    numberString += digitStrings.shift();
  }

  return Number(numberString);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation(00000));          // 0
