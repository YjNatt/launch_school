let pop = function(array) {
  if (array.length === 0) return undefined;

  let element = array[array.length - 1];
  array.length = array.length - 1;
  return element;
};

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);

let example = [];
console.log(pop(example));
