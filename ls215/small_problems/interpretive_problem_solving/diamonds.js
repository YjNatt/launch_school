/*
 *  input:
 *  - number
 *  - always odd
 *  - represents the height and width of diamond
 *
 *  output:
 *  - use '*' and ' ' to display a diamond on console
 *
 *  rules:
 *  - The number of stars displayed on each row
 *    starts at 1 and increments by 2 until it reaches the diamondLength
 *     then decrement by 2 until it reaches 1
 *
 *  - the number of spaces prepended on each row
 *    - starts at (diamondLength / 2) round down, is decrement by 1 until 0
 *      the increments by 1 until it reaches (gridLength / 2) round down
 *
 *  questions
 *  - return value is undefined?
 *  - return a value if input is even?
 *
 *  data structure:
 *  string
 *    - concatenate number of spaces with number of stars
 *
 *  array
 *    - stack to keep track of number of stars, and spaces.
 *
 *  algorith:
 *  Calculate the max number of spaces and assign to maxSpaces
 *    - diamond length / 2 round the answer down
 *
 *  initialize an array with the number of spaces is determined
 *  by maxSpaces and assign to spaces
 *
 *  initialize an array with one * and assign to stars
 *
 *  while the length of stars is less than or equal to the diamond length
 *  - join spaces and stars array to strings and concatenate.
 *    - output the result
 *
 *  - push 2 '*' in stars
 *  - pop 1 ' ' in spaces
 *
 *  while the length of stars is greater than or equal to 1
 *  - pop 2 '*' in stars
 *  - push 1 ' ' in spaces
 *
 *  - join spaces and stars array to strings and concatenate.
 *    - output the result
 *
 */

function diamonds(n) {
  numberSequence(n).forEach(number => {
    let outerSpaces = repeat(' ', (n - number) / 2);
    let innerSpaces = repeat(' ', number - 2);
    let rowString = outerSpaces + '*' + innerSpaces;

    if (number !== 1) {
      rowString += '*';
    }

    console.log(rowString);
  });
}

function numberSequence(n) {
  const result = [];
  let increment = 2;

  for (let number = 1; number > 0; number += increment) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
  }

  return result;
}

function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

diamonds(1);
diamonds(3);
diamonds(7);

