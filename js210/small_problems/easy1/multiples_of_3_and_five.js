/* function multisum
 * input: integer (maxRange)
 * output: integer (sum)
 * rules: - add all numbers from one to maxRange inclusive
 *          - do not add if numbers are not divisible by 3 or 5
 * algorithm:
 * have variable to keep track of sum
 * loop from 1 to maxRange inclusive
 *  if number divisible by 3 or 5
 *    add to sum
 * return sum
 */

let multisum = function(maxRange) {
  let sum = 0;

  for (let number = 1; number <= maxRange; number += 1) {
    if (number % 3 === 0 || number % 5 === 0) sum += number;
  }

  return sum;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
