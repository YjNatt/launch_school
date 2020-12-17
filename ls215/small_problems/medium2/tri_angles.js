/*
 *  input:
 *  - 3 integers representing 3 different degrees.
 *
 *  output:
 *  - string of triangle's classification.
 *
 *  rules:
 *  - valid triangle is when the sum of the angles equal to 180 degrees,
 *    and each angle is greater than 0 degrees
 *
 *  - right triangle is when one angle is exactly 90 degrees
 *
 *  - acute triangle is when all 3 angles are less than 90 degrees
 *
 *  - obtuse triangle is when one angle is greater than 90 degrees
 *
 *  - input are always integers
 *
 *  data structure
 *  - numbers to determine if triangle is valid and what type of triangle
 *
 *  algorithm:
 *  - check if triangle is valid, triangle is valid if:
 *    - all 3 angles equal to 180
 *    - all 3 angles are greater than 0
 *  - if triangle is invalid return 'invalid'
 *
 *  - if some angle is equal to 90 degrees
 *    return 'right'
 *  - if some angle is greater than 90 degrees
 *    return 'obtuse'
 *  - else
 *    return 'acute'
 */

let validTriangle = function validTriangle(angle1, angle2, angle3) {
  return [angle1, angle2, angle3].every(angle => angle > 0) &&
    angle1 + angle2 + angle3 === 180;
}

let triangle = function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (!validTriangle(...angles)) {
    return 'invalid';
  }

  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
};

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));
console.log(triangle(50, 50, 100));
