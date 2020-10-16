let uniqueElements = (array) => {
  let uniques = []

  for (let index = 0; index < array.length; index += 1) {
    if (!uniques.includes(array[index])) {
      uniques.push(array[index])
    }
  }

  return uniques;
};

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
