/*
 * input: string
 * output: number
 * rules: - input is an octal number represented as a string
 *        - output is a decimal number
 *        - to convert octal to decimal
 *          - mutiply 8^0 with the right most digit
 *          - multiply 8^1 with the next digit and so on
 *          - add all digits together
 * algorithm:
 * split the string into an array of characters
 * reverse the array of strings
 * iterate and transform through the string
 *   - explicitly coerce the string to a number
 *   - then multiply by 8 to the power of the current index
 *   - then return the value
 * iterate through the transformed array and reduce to a total
 * return total
 */

let octalToDecimal = function octalStringToDecimalNumber(numberString) {
  const BASE = 8;

  return numberString.split('').reverse().reduce((sum, digitChar, index) => {
    return sum + (Number(digitChar) * Math.pow(BASE, index));
  }, 0);
};

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
