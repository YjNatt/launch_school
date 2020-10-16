let oddElementsOf = function(arr) {
  let oddElements = []

  for (let index = 1; index < arr.length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
};

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]
