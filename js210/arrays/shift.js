let shift = function(array) {
  let deletedElement = array[0];

  if (array.length === 0) return undefined;

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;

  return deletedElement;
};

let count = [1, 2, 3];
console.log(shift(count));
console.log(count);
