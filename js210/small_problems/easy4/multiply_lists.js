// function: multipleList
// input: 2 array of integers
// output: new array of integers
// rules: - each element of the new array
//          - is a product of the pair of numbers at the same index
// algorithm:
//

let multiplyList = function multipleList(numbers1, numbers2) {
  return numbers1.map((number, index) => number * numbers2[index]);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
