let indexOf = (array, element) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
};

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3, 3], 4));
