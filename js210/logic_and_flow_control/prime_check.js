/* input: Interger
 * output: Boolean
 * rules - if input is a prime number return true
 *       - else return false
 *       - prime number
 *         - are numbers that are only divisible by 1 or themself
 * algorithm:
 *  - loop from 2 upto number
 *    - if input number is divisible by current number return false
 *  - return true otherwise */

let isPrime = (number) => {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) return false;

    divisor += 2;
  }

  return true;
};

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
