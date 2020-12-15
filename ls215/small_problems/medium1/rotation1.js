/*
 *  input:
 *    array of any type of elements
 *
 *  output:
 *    new array
 *
 *  rules:
 *    return undefined if the input is not an array.
 *
 *    return empty array if input is an empty array.
 *
 *    Do not mutate the input array.
 *
 *    The first element of the array is sliced and positioned back
 *    at the end of the array.
 *
 *  Data structure:
 *    Array since the output and input are an array.
 *
 *  algorithm:
 *    check if input is an array
 *      - if false return undefined
 *
 *    check if inputis an empty array
 *      - if true return an empty array
 *
 *    slice the first element of the array and assign to firstElement.
 *    slice the remainder of elements of the array and assign to remainderElements.
 *    concatenate the remainderElements to firstElement and return the return value.
 */

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  let firstElement = array.slice(0, 1);
  let remainderElements = array.slice(1);

  return remainderElements.concat(firstElement);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]/
