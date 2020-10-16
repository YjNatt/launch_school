let areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  let array1Copy = array1.slice();
  let array2Copy = array2.slice();

  while (array1Copy.length > 0) {
    let element = array1Copy.pop();

    if (array2Copy.includes(element)) {
      let index = array2Copy.indexOf(element);
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
