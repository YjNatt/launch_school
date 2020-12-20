/*
 *  input:
 *    Array
 *
 *  output:
 *    New array - contains values from input array
 *              - sorted
 *
 *  rules:
 *    - Must sort using the merge sort algorithm
 *      - recursive sorting algorithm
 *      - breaks down an array elements into nested subarrays
 *        - split elements by the middle point
 *        - until most nested subarrays are only one element
 *      - then combines subarrays back together in a sorted order
 *
 *    - Every element of the array will be the same data type
 *      - all strings
 *      - all numbers
 *
 *  data structure:
 *    - Array
 *
 *  question:
 *    Will array always contain elements with more than 1 element?
 *
 *  algorithm:
 *    - find the middle index of the array and assign to midPoint
 *      - if midPoint is a decimal, round decimal point down to nearest integer
 *    - subArray1 is assigned the elements from index 0 upto but not including mid point
 *    - subArray2 is assigned elemented from mid point to end of array
 *
 *    invoke mergeSort recurssively until subArrays contain only 1 element
 *
 *    - merge the two subArrays and return the return value
 */

function merge(list1, list2) {
  let sortedList = [];
  let copy1 = [...list1];
  let copy2 = [...list2];

  while (copy1.length > 0 && copy2.length > 0) {
    sortedList.push(copy1[0] >= copy2[0] ? copy2.shift() : copy1.shift());
  }

  return sortedList.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midPoint = Math.floor((array.length / 2));
  let subArray1 = array.slice(0, midPoint);
  let subArray2 = array.slice(midPoint);

  return merge(mergeSort(subArray1), mergeSort(subArray2));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
