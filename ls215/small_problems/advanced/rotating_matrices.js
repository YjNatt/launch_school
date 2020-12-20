/*
 *  input:
 *    Matrix - Array of arrays
 *           - Any number of rows
 *           - Any number of columns
 *
 *  output:
 *    New Matrix - Entire matrix rotated by 90 degrees clockwise
 *
 *  rules:
 *
 *  1  5  8      3  4  1
 *  4  7  2 ---> 9  7  5
 *  3  9  6      6  2  8
 *
 *    - first row, first element --> first row, third element
 *    - first row, second element --> second row, thrid element
 *    - first row, third element --> third row, third element
 *
 *    - second row, first element --> first row, second element
 *    - second row, third element --> third row, second element
 *
 *    - to rotate 90 degrees clockwise
 *      - column becomes the row of each element
 *      - (total rows - 1) subtracts current row index becomes
 *        new column
 *
 *  questions:
 *    - Will input always be an array of arrays?
 *    - will each row contain same number of elements?
 *
 *  data structure:
 *    - Array of sub-array
 *
 *  algorithm:
 *  Calculate total rows of matrix and assign to totalRows
 *    - number of elements in the column are number of new rows
 *  initialize an array with subarrays equal to totalRows, assign to newMatrix
 *
 *  iterate each row of the matrix, keep track of rowIndex
 *    iterate each element of the row, keep track of colIndex
 *      newRowIndex is assign the colIndex
 *      newColIndex is assign (totalRows - 1) - rowIndex
 *      element at the newRowIndex and newColIndex is assigned to newMatrix
 *
 *  return the newMatrix
 */

function rotate90(matrix) {
  let totalRows = matrix[0].length;
  let newMatrix = [];

  for (let count = 0; count < totalRows; count += 1) {
    newMatrix.push([]);
  }

  matrix.forEach((row) => {
    row.forEach((element, colIndex) => {
      newMatrix[colIndex].unshift(element);
    });
  });

  return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
