/*
 *  input:
 *    - Array
 *    - searchItem
 *
 *  output:
 *    - Index of the searchItem in the array
 *      - returns -1 if item is not found
 *
 *  rules:
 *    - Binary Search
 *      - Retrieve the middle value of the array
 *        - if middle value is the serachItem
 *          - return index
 *        - if middle value is greater than searchItem
 *          - find the middle value of the second half and repeat
 *        - if middle value is less than searchItem
 *          - find the middle value of the first half and repeat
 *
 *    - input array will always be sorted
 *
 *  questions:
 *    for string does case sensitivity matter?
 *  
 *  data structure:
 *    Numbers to keep track of indexes
 *    Arrays to keep track of sub arrays
 *
 *  algorithm:
 *    - initialize index1 and assign 0
 *    - intiialize index2 and assign length of array - 1
 *
 *    - while index1 does not equal index2
 *      - find the midPoint between index1 and index2
 *        - if element at midPoint is equal to searchItem
 *          - return midPoint
 *        - if element at midPoint is less than searchItem
 *          - index1 = midPoint
 *        - else
 *          - index2 = midPoint
 *   
 *   - return -1
 */

function binarySearch(array, searchItem) {
  let index1 = 0;
  let index2 = array.length - 1;

  while (index1 <= index2) {
    let midPoint = Math.floor(((index2 - index1) / 2)+ index1);
    let element = array[midPoint];

    if (element === searchItem) {
      return midPoint;
    } else if (element < searchItem && midPoint !== index1) {
      index1 = midPoint + 1;
    } else {
      index2 = midPoint - 1;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
