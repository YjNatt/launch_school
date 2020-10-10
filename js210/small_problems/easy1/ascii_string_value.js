/* function asciiValue
 * input: string
 * output: integer
 * rules: return the sum of the ASCII values of every character
 * algoright:
 * variable to hold the current sum and assign 0
 * loop from 0 to the length of the string - 1
 *   get ascii value and add to sum.
 * return sum
 */

function asciiValue(str) {
  let sum = 0;

  for (let index = 0; index < str.length; index += 1) {
    sum += str.charCodeAt(index);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
