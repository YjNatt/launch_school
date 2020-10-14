function unshift(array, element) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    array[index + 1] = array[index];
  }

  array[0] = element;

  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);
