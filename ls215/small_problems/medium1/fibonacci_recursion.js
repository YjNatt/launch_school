/*
 *  input:
 *    - nth fibonacci number
 *
 *  output:
 *    - Number
 *
 *  rules:
 *  - return the nth fibonacci number
 *    - fibonacci number is a sequence of numbers
 *    - each number is the sum of the previous two numbers
 *    - first two numbers are 1, 1
 *
 *  - must use a recursive function
 *    - f(n) = f(n - 1) + f(n - 2) where n > 2
 *
 *  questions:
 *    - Will input always be a number?
 *    - What if input is infinity or NaN?
 *    - What if input is a negative number or zero?
 *
 *  data structure:
 *    - numbers
 *
 *  algorithm:
 *  if nth is 1 or 2 return the number 1.
 *  if nth is less than 1 return number 0
 *
 *  return the function(nth - 1) + function(nth - 2)
 *
 */

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
