let halvsies = function splitArrayInTwo(array) {
  const midPoint = Math.ceil(array.length / 2);
  let firstArray = array.slice(0, midPoint);
  let secondArray = array.slice(midPoint);

  return [firstArray, secondArray];
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
