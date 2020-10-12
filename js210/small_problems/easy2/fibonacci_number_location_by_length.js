/* function findFibonacciIndexByLength
 * input: integer
 * output: integer
 * rules: - return the index of the first fibonacci number that has the number 
 *          of digits specified by the argument
 *        - fibonacci numbers
 *          - first 2 numbers are one
 *          - each subsequent number is the sum of the two previous numbers.
 * algorithm:
 * variable index to keep track of what index we are at
 * variable num1 set to 1
 * variable num2 set to 1
 * loop until the number of digits are equal to the argument
 * - to compare the number of digits to the argument coerce the digits to a string and check the length
 *   - num2 set to sum of num1 + num2
 *   - num1 set to num2
 *   - increment index
 *
 * return index
 */

function findFibonacciIndexByLength(length) {
  let index = 2;
  let num1 = 1;
  let num2 = 1;

  while (String(num2).length < length) {
    [num2, num1] = [(num2 + num1), num2];
    index += 1;
  }

  console.log(index);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
