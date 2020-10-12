/* function triangle
 * input: integer
 * output: log a right angle triangle
 * rules: - the sides of the triange should have input number of stars
 *        - the right angle is on the right side of the triangle
 * algorithm:
 * loop from 1 to input
 *   variable row is empty string
 *   loop from 1 to current number
 *     prepend star into row
 *   loop from current number to input
 *     prepend space to row
 *   output row
 */

// let triangle = (length) => {
//   for (let rowNum = 1; rowNum <= length; rowNum += 1) {
//     let row = '';
// 
//     for (let nStars = 1; nStars <= rowNum; nStars += 1) {
//       row += '*';
//     }
// 
//     while (row.length !== length) {
//       row = ' ' + row;
//     }
// 
//     console.log(row);
//   }
// };

let triangle = (length) => {
  let nStars = 1;
  let nSpace = length - 1;

  for (let count = 0; count < length; count += 1) {
    console.log(repeat(' ', nSpace), repeat('*', nStars));
    nStars += 1;
    nSpace -= 1;
  }
};

let repeat = (char, length) => {
  let str = '';

  while (str.length !== length) {
    str += char;
  }

  return str;
};

triangle(5);
triangle(9);
