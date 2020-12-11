/*
 *  input:
 *  - n: is a odd integer, greater than or equal to 7.
 *      n is also the length and max width of the star.
 *
 *  output:
 *  - An 8-pointed star is logged to the console.
 *  - Length of the row is n long
 *  - The middle row contains a row of only stars equal to n.
 *  - Other rows always contain 3 stars with spaces between
 *    the stars or around the stars.
 *
 *  rules:
 *
 *
 *  - The first row starts with a star at index: 0, (n / 2) round down , n - 1
 *    The second row starts with a star at index: 1, (n / 2) round down , n - 2
 *    The thrid row starts with a star at index: 2, (n / 2) round down , n - 3
 *
 *  - The star on the left hand side, index is always incremented by 1
 *
 *  - The star on the right hand side, index is always decremented by 1
 *
 *  - The star in the center is at the same index.
 *
 *  data structure:
 *  Array of spaces
 *    - transform with map, appropriate indexes to '*' character
 *    - join array back into a string
 *
 *  Numbers to keep track of stars indexes
 *
 *  algorithm:
 *  assign 0 to leftStarIndex
 *  assign return value of (n / 2) round down to centerStarIndex
 *  assign n - 1  to rightStarIndex
 *
 *  loop n times
 *    - insert the stars appropriately
 *    - initialize an array of spaces the size of n and assign to row
 *      - if 3 stars are all same number insert stars at every column
 *      - else insert starts at the current star index.
 *
 *    - log the star
 *    - increment leftStarIndex by 1
 *    - decrement rightStarIndex by 1
 */

function createRow(length, left, center, right) {
  let row = Array(length);

  if (left === right) {
    return row.fill('*').join('');
  } else {
    row.fill(' ');
  }

  row[left] = '*';
  row[center] = '*';
  row[right] = '*';

  return row.join('');
}

function star(length) {
  let centerStarIndex = Math.floor((length / 2));

  for (let count = 0; count < length; count += 1) {
    let leftStarIndex = count;
    let rightStarIndex = length - count - 1;
    let row = createRow(length, leftStarIndex, centerStarIndex, rightStarIndex);

    console.log(row);
  }
}

star(7);
star(9);
