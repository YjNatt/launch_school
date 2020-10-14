function concat(array1, array2) {
  let combinedArray = []

  for (let index = 0; index < array1.length; index += 1) {
    combinedArray[combinedArray.length] = array1[index];
  }

  for (let index = 0; index < array2.length; index += 1) {
    combinedArray[combinedArray.length] = array2[index];
  }

  return combinedArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
