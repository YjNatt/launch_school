// function: average
// input: array of integers
// output: integer
// rules: return the average
//          - add all the integers
//          - divide sum by the number of integers
//        - array is never empty
//        - numbers are always positive integers
// algorithm:
// let varaible sum assign to the sum of all integers
// - use reduce to get the sum
// divide the sum by the number of integer
// - input array length to get the size

let average = function average(numbers) {
  let sum = numbers.reduce((sum, number) => sum + number);
  return Math.floor(sum / numbers.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
