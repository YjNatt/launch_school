let push = function(array, ...elements) {
  for (let currentElementIndex = 0; currentElementIndex < elements.length; currentElementIndex += 1) {
    element = elements[currentElementIndex];
    array[array.length] = element;
  }

  return array.length;
};

let pop = function(array) {
  if (array.length === 0) return undefined;
  element = array[array.length - 1];
  array.length = array.length - 1;
  return element;
};

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
