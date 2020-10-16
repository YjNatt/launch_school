/* function missing
 * input: array
 * output: array
 * rules: - input is a sorted array
 *        - returns an array that includes all the missing
 *          integers between the first and last elements
 *          of the argument
 *        - if none are missing return an empty array
 * algorithm
 * Have a variable missingNumbers reference an empty array
 * loop starting from the first digit
 *  if current digit is in array continue
 *  if current digit is not in array add to missingNumbers
 *  increment currentDigit by one
 *  break if current digit is less than last digit in array
 * return missingNumbers
 */

let missing = function(numbers) {
  let missingNumbers = [];
  let start = numbers[0] + 1;
  let end = numbers[numbers.length - 1] 

  for (let number = start; number < end; number += 1) {
    if (!numbers.includes(number)) missingNumbers.push(number);
  }

  console.log(missingNumbers);
};

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
