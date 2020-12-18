/*
 *  input:
 *  - integer
 *
 *  output:
 *  - integer: featured number
 *
 *  rules:
 *  - featured number:
 *    - is odd
 *    - multiple of 7
 *    - each digit in the number occures only once
 *
 *  - return the next featured number greater than the integer
 *  - if there is no next featured number issue an error message
 *  - Largest possible number 9876543201;
 *
 *  questions:
 *    - can input be a negative number?
 *    - can input be a different data type?
 *    - can input be empty?
 *
 *  data structure:
 *    - numbers
 *      - odd
 *      - multiple 7
 *
 *    array
 *      - check if each digit occures only once
 *
 *  algorithm:
 *  first increment input to next multiple of 7
 *
 *  loop until next featured number or number is greater than largest number
 *    if number is odd and digits occure once
 *      return number
 *    else
 *      increment number by 7
 *
 *
 *  throw error
 *
 *  function: areDigitsUnique
 *  input: number
 *  output: boolean
 *  rules: return true if all number digits are unique
 *
 *  data structure:
 *    - initialize an empty array assign to usedDigits
 *    - convert number to a string then split into an array of digits
 *    - iterate digits
 *      - if current digit is not in usedDigits
 *        - push current digit to usedDigits
 *      - else return false
 *
 *    - return true
 */

function nextMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 7 !== 0);

  return number;
}

function areDigitsUnique(number) {
  let usedDigits = [];

  let digits = String(number).split('');

  for (let index = 0; index < digits.length; index += 1) {
    if (usedDigits.includes(digits[index])) {
      return false;
    } else {
      usedDigits.push(digits[index]);
    }
  }
  return true;
}

function isOdd(number) {
  return number % 2 === 1;
}

function featured(number) {
  const LARGEST_FEATURED = 9876543201;
  number = nextMultipleOf7(number);

  while (number <= LARGEST_FEATURED) {
    if (isOdd(number) && areDigitsUnique(number)) {
      return number;
    }

    number += 7;
  }

  throw new Error('No featured number');
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543200));
console.log(featured(9876543201));


