let nthElementOf = function (array, index) {
  if (index >= array.length) return undefined;

  let element;

  if (index >= 0) {
    element = array[index];
  } else {
    element = array[index + array.length];
  }

  return element
};

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return?
console.log(nthElementOf(digits, -1));  // what does this return?
