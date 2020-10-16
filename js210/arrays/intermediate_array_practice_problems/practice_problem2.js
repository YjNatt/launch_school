let mirroredArray = (array) => {
  let copiedArray = array.slice(0);

  return array.concat(copiedArray.reverse());
};

console.log(mirroredArray([1, 2, 3]));
