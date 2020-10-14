function firstNOf(array, count) {
  return array.slice(0, count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [16, 23, 42]
