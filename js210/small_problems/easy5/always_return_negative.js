let negative = function negative(number) {
  // return -Math.abs(number);
  return number >= 0 ? number * -1 : number;
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0