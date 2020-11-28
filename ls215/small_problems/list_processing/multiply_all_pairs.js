/*
 * input: 2 arrays of integers
 * output: 1 array of integers
 * rules: - multiple each pair that exist between the two arrays
 *        - return array in sorted asending numerical order
 * algorithm:
 * - declare products and assign an empty array
 * - iterate through the first array of integers
 *   - iterate through the second array of integers
 *     - multiply the two integers and push into products array
 * - sort products on ascending numerical order
 */

function multiplyAllPairs(numbers1, numbers2) {
  let products = [];

  numbers1.forEach(number1 => {
    numbers2.forEach(number2 => products.push(number1 * number2));
  });

  return products.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
