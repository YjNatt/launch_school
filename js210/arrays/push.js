let push = (array, element) => {
  array[array.length] = element;
  return array.length;
};

let count = [0, 1, 2];
console.log(push(count, 3));
console.log(count);
