/* input: nested array, string and number
 * output: array of strings
 * rules: - each inner array contains a fruit and quantity
 *        - return an array which the fruit appears a number of
 *          times equal to its quantity
 * algorithm:
 * iterate through array and reduce with an array
 *   loop from 0 to quantity
 *     push the word to the reduced array
 *   return array
 * return reduced array
 */

function buyFruit(groceries) {
  return groceries.reduce((list, array) => {
    for (let count = 0; count < array[1]; count += 1) {
      list.push(array[0]);
    }
    return list;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
