/*
 *  input:
 *    - Two sorted arrays
 *
 *  output:
 *    - One merged sorted array
 *
 *  rules:
 *    - Do not mutate the input arrays.
 *    - Do not sort the new results array.
 *    - Build the result array one element at a time.
 *    - Input array may be empty.
 *
 *  questions:
 *    - Can both arrays be empty?
 *    - Can input arrays contain additional properties?
 *
 *  data structure:
 *    - Array
 *    - Numbers to keep track of indexes
 *
 *  algorithm:
 *    initialize a new array and assign to sortedList
 *    assign 0 to index1
 *    assign 0 to index2
 *
 *    loop
 *      - assign element1 the element at list1 index1
 *      - assign element2 the element at list2 index2
 *
 *      if element1 is undefined
 *        push remaining elements from list2 at index2
 *        break out loop
 *      if element2 is undefined
 *        push remaining elements from list1 at index1
 *        break out loop
 *
 *      if element1 >= element2
 *        push element2 to sortedList
 *        increment index2 by 1
 *      if element1 < element2
 *        push element1
 *        increment index1 by 1
 *
 */

//function merge(list1, list2) {
//  let sortedList = [];
//  let index1 = 0;
//  let index2 = 0;
//
//  while (true) {
//    let element1 = list1[index1];
//    let element2 = list2[index2];
//
//    if (element1 === undefined) {
//      sortedList.push(...list2.slice(index2));
//      break;
//    }
//
//    if (element2 === undefined) {
//      sortedList.push(...list1.slice(index1));
//      break;
//    }
//
//    if (element1 >= element2) {
//      sortedList.push(element2);
//      index2 += 1;
//    } else {
//      sortedList.push(element1);
//      index1 += 1;
//    }
//  }
//
//  return sortedList;
//}

function merge(list1, list2) {
  let sortedList = [];
  let copy1 = [...list1];
  let copy2 = [...list2];

  while (copy1.length > 0 && copy2.length > 0) {
    sortedList.push(copy1[0] >= copy2[0] ? copy2.shift() : copy1.shift());
  }

  return sortedList.concat(copy1.length === 0 ? copy2 : copy1);
}

// [1, 2, 5, 6, 8, 9]
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []
