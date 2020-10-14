let push = (array, element) => {
  array[array.length] = element;
  return array.length;
};

let slice = (array, startIndex, endIndex) => {
  let slicedArray = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    push(slicedArray, array[index]);
  }

  return slicedArray;
};

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
