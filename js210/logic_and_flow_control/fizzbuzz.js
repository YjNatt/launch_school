/* input: nothing
 * output: "fizzbuzz" if number divisible by 3 and 5
 *         "fizz" if number divisible by 3
 *         "buzz" if number divisible by 5
 * algorith:
 * for loop starting at 1
 *  - check if number is divisible by 3 and 5
 *    - if true output "fizzbuzz"
 *  - check if number is divisible by 3
 *    - if true output "fizz"
 *  - check if number is divisible by 5
 *    - if true output "buzz"
 *  - else
 *    - output number
 */

let fizzbuzz = function() {
  for (let number = 1; number <= 100; number += 1) {
    let message = '';

    if (!(number % 3)) message += 'Fizz';

    if (!(number % 5)) message += 'Buzz';

    console.log(message || number);
  }
};

fizzbuzz();
