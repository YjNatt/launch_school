function lastIndexOf(array, element) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === element) return index;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));
console.log(lastIndexOf([1, 2, 3, 3], 4));
