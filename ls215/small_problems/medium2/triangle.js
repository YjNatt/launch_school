/*
 *  Input:
 *    - 3 numbers, each number represents a side of a triangle.
 *    - can be integer or decimal point
 *
 *  Output:
 *    - String indicating what type of triangle does the 3 sides make.
 *
 *  rules:
 *    - Triangles
 *      - Equilateral: all 3 sides are equal length
 *      - Isosceles: 2 sides are equal length,
 *      - Scalene: all 3 sides are different length
 *      - Invalid: the sum of the lengths of the 2 shorter sides
 *                 are not greater than the length of the longest side.
 *
 *  Questions:
 *    - Should I worry about negative number or any other invalid input?
 *
 *  Data structure:
 *    - Numbers
 *    - Array
 *      - sort array from to find min - max
 *
 *  Algorithm:
 *
 *    - initialize an array with the 3 sides and assign to sides
 *
 *    - sort the sides array from lowest to highest
 *
 *    - Check if triangle is valid, if false return 'invalid';
 *      - all 3 sides are greater than 0
 *      - the sum of the first 2 sides are longer than the 3 side
 *
 *    - if all three sides are equal
 *      - return 'equilateral'
 *
 *    - if the first 2 sides are equal
 *      - return 'isosceles'
 *
 *    - else
 *      - return 'scalene'
 */
function isValidTriangle(sides) {
  return sides.every(side => side > 0) && sides[0] + sides[1] > sides[2];
}

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((side1, side2) => side1 - side2);
  if (!isValidTriangle(sides)) {
    return 'invalid';
  } else if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(5, 3, 4));
console.log(triangle(13, 14, 15));
console.log(triangle(0, 0, 0));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
