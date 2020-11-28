/* input: array of integers
 * output: sorted array of integers
 * rules: - input is an array of integers from 0 to 19 unsorted
 *        - sort the integers based on the english word for each number
 *        - return sorted integers
 * algorithm:
 * declare NUMBERS variable and assign an object
 *   - with the keys as numbers and the values as english word for each number
 * transform each number to their word counterpart
 * sort the words
 * return sorted words
 */

let alphabeticNumberSort = function alphabeticNumberSort(numbers) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return numbers.sort((num1, num2) => {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else {
      return 0;
    }
  });
};

// let alphabeticNumberSort = function alphabeticNumberSort(numbers) {
//   const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
//  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
//
//   return numbers.map((number) => NUMBER_WORDS[number])
//     .sort()
//     .map((numberWord) => NUMBER_WORDS.indexOf(numberWord));
// };

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
