/* function concat
 * input: array, array or value
 * output: new array
 * rules: - first arg will always be an array
 *        - second arg can either be an array or another value
 *        - function should return a new array
 *        - elements in new array are in the same order as they
 *          appear in the arguments
 *        - copies object references from the arguments into the new array
 *        - copies primitive values.
 *
 * algorithm:
 * create a new array made up of the first array
 * check if 2nd arg is an array
 *   - if true
 *     - loop through second array and push into new array
 *   - if false
 *     - push value into array
 *
 * return new array
 */

let concat = (array, secondArgument) => {
  let concatArray = array.slice();

  if (Array.isArray(secondArgument)) {
    for (let index = 0; index < secondArgument.length; index += 1) {
      concatArray.push(secondArgument[index]);
    }
  } else {
    concatArray.push(secondArgument);
  }

  return concatArray;
};

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5]['b'] = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
