/*
 *  Input:
 *    number: A number 
 *    n: number of digits to rotate in number
 *
 *  Output:
 *    rotated number
 *
 *  Rules:
 *    Rotate digits by one digit to the left, the left most digit is moved to the end.
 *
 *    N is the number of digits to move in number starting at the right.
 *    Example. if number is 1234 and n is:
 *             1 the digits rotating is 4.
 *             2 the digits rotating are 3, 4.
 *             3 the digits rotating are 2, 3, 4.
 *             etc.
 *
 *    The digits that are not part of the last n digits are left in the same order
 *  
 *  Questions:
 *    What if n is a negative number?
 *    What if n value is greater than the number of digits in number?
 *    What if n is 0?
 *    What if number or n is a special number? (infinity, NaN)
 *    What if number or n is not a number data type?
 *
 *  Data type:
 *    Array to use the previous exercise function
 *
 *  Algorithm:
 *    Convert the number to a string
 *    '735291'
 *
 *    Split the string into an array of numberStrings;
 *    ['7', '3', '5', '2', '9', '1']
 *
 *    Splice the last n digits of the array and rotate and assign to rotatedNumberStrings
 *    ['7', '3', '5', '2']
 *    ['1', '9']
 *
 *    concat the string of numbersString and the rotated numberStrings and join
 *
 *    ['7', '3', '5', '2', '1', '9']
 *    '735219'
 *
 *    Convert numberString back into a number and return the value.
 */

// rotateRightMostDigits(1234, -1);
// rotateRightMostDigits(1234, 5);
// rotateRightMostDigits(1234, 0);
// rotateRightMostDigits(1234, NaN);
// rotateRightMostDigits(1234, '2');


function rotateRightmostDigits(number, n) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - n)
  let secondPart = numberString.slice(numberString.length - n)
  numberString = firstPart + rotateString(secondPart);
  return Number(numberString);
}

function rotateString(string) {
  return string.slice(1) + string.slice(0, 1);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  let firstElement = array.slice(0, 1);
  let remainderElements = array.slice(1);

  return remainderElements.concat(firstElement);
}
