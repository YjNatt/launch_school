/* Input: integer
 * Output: Integers
 * rules - log only numbers that are odd and
 *         multiples of the argument
 *       - range from 0-100 inclusive
 *       - log values in descending order
 * algorithm: 
 *  variable number assigned to argument
 *  for loop starting at 100
 *    if currentNumber is odd and divisible by number
 *      output currentNumber
 */

function logMultiples(number) {
  let max = Math.floor(100 / number) * number;

  for (let currentNumber = max; currentNumber >= 0; currentNumber -= number) {
    if ((currentNumber % number === 0) && (currentNumber % 2 !== 0)) {
      console.log(currentNumber);
    }
  }
}

logMultiples(17);
