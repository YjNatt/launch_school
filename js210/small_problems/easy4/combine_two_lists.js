// function: interleave
// input: 2 arrays
// output: new array
// rules: - new array contains elements from both array
//          - elements are taken in alternation
//        - input have the same number of elements and are not empty
//
// algorith:
// - let variable combinedArray assigned to an empty array
// - let variable index assign to integer 0
// - while index is less than array1 length
//   - push the first array to the combinedArray
//   - push the second array to the combinedArray
//   - increment index
// - return combinedArray

let interleave = function combineArrayInAlternation(array1, array2) {
  let combinedArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    combinedArray.push(array1[index], array2[index]);
  }

  return combinedArray;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
