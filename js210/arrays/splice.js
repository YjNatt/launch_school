let push = (array, element) => {
  array[array.length] = element;
  return array.length;
};

let splice = function(array, startIndex, number) {
  let removedElements = [];
  for (let index = startIndex; index < array.length; index += 1) {
    if (index < startIndex + number) {
      push(removedElements, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedElements.length;
  return removedElements;
};

let count = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
