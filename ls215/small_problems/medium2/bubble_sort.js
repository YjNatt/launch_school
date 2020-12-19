/*
 *  input:
 *    - unsorted Array
 *      - elements are numbers or strings
 *
 *  output:
 *    - sorted original Array.
 *
 *  rules:
 *    - sort the original array by using bubble sort algorithm:
 *      - Makes multiple iterations through an array
 *      - Each pass compares two consecutive elements
 *        - if the first is greater than second swap the two elements
 *      - repeat until a complete pass is made without any swaps
 *
 *    - Mutate the original array
 *    - Input will always contain at least two elements.
 *
 *  questions:
 *    - Should I assume input will always be numbers or strings?
 *    - What if input array contains both string and numbers?
 *
 *  Data structure:
 *    - Arrays
 *    - Boolean to keep track if a complete pass is made without swapping elements
 *
 *  algorithm:
 *    - initialize isSorted
 *    - do while loop and break if isSorted is true
 *      - assign true to isSorted
 *      - loop through the array to the second last element and keep track of index
 *        - if element at current index is greater than the next element
 *          - swap elements
 *          - assign isSorted to false;
 *    - return array
 */

function bubbleSort(array) {
  let isSorted;

  do {
    isSorted = true;

    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]

        isSorted = false;
      }
    }
  } while (!isSorted);

  return array;
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
