/*
 *  input:
 *    matrix - Array of arrays'
 *           - contains 1 or more of sub-arrays (rows)
 *             - contains 1 or more elements (columns)
 *
 *  output:
 *    transposedMatrix
 *
 *  rules:
 *    - Transpose the matrix
 *      - Each element of the subarray changes its position by
 *        switching the columns and rows
 *
 *    - returning a new array
 *
 *  questions:
 *    - Should I assume that each row contains the same number of columns?
 *
 *  data structure:
 *    Array
 *
 *  algorithm:
 *    - Initialize an Array with the correct number of rows and assign the array
 *      to newArray
 *      - to find the correct number of rows, take the number of element in the 1st row
 *        and use that number to determine how many new rows are necessary
 *      - the fill the array with empty arrays
 *
 *    - Iterate through each row of the matrix and keep track of the rowIndex
 *      - Iterate through each column of the matrix and keep track of the colIndex
 *        - swap the rowIndex and the colIndex
 *        - reassign the newArray at the newRowIndex at the newColIndex with the
 *          current element
 *
 *    - return the new Array
 */

function transpose(matrix) {
  let newArray = [];

  for (let count = 0; count < matrix[0].length; count += 1) {
    newArray.push([]);
  }

  matrix.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
      newArray[colIndex][rowIndex] = element;
    });
  });

  return newArray;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
