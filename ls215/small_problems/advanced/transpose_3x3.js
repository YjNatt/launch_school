/*
 *  input:
 *    Matrix - Array of 3 Arrays
 *
 *  output:
 *    Transpose the matrix - New Array of 3 Arrays
 *
 *  rules:
 *    - The index for the outer Array represent rows
 *    - the index for the inner Array represent columns
 *    - Transpose the Matrix
 *      - The column and row index are swapped
 *      - Example
 *        - the element at row 0 and column 1 ---> row 1 and column 0
 *
 *  questions:
 *    - will input always be an Array with 3 sub-arrays?
 *
 *  data structure:
 *    - Array
 *
 *  algorithm:
 *  iterate and transform each row in the matrix and keep track row index
 *    iterate and transform each row of the matrix and keep track of column index
 *      - row index becomes column index
 *      - column index becomes row index
 *      return the element and the matrix[column index][row index]
 */

function transpose(matrix) {
  return matrix.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return matrix[colIndex][rowIndex];
    });
  });
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix = transpose(matrix);

console.log(matrix);
// [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
//
// [1, 4, 3]
// [5, 7, 9]
// [8, 2, 6]
//
console.log(newMatrix);
