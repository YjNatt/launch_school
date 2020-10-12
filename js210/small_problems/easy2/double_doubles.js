/* function twice
 * input: integer
 * output: integer
 * rules: - return input multiplied by two
 *        - unless input is a double number then return input as is
 *          - double number are:
 *            - even length number
 *            - left side digits are same as right side digits
 *
 * algorithm:
 * if number is double number
 *  - return number
 * else
 *  - return number * 2
 *
 * function isDoubleNumber
 * input: integer
 * output: integer
 *
 * algorithm:
 * coerce digits to string
 * return falls if the number of digits are odd
 * variable leftSideIndex = 0
 * variable rightSideIndes = length of digits divide by 2
 *
 * while leftSideIndex is less than length of digits divide by 2
 *   return false if digits at leftSideIndex does not match digits of rightSideIndex
 *
 * return true;
 */

let isDoubleNumber = function(digit) {
  let digitString = String(digit);
  
  if (digitString.length % 2 !== 0) return false;

  for (let leftIndex = 0; leftIndex < digitString.length / 2; leftIndex += 1) {
    let rightIndex = (digitString.length / 2) + leftIndex;

    if (digitString[leftIndex] !== digitString[rightIndex]) {
      return false;
    }
  }

  return true;
};

let twice = function(digit) {
  digit = isDoubleNumber(digit) ? digit : digit * 2;
  console.log(digit);
};

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
