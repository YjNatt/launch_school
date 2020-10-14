function lastNOf(array, count) {
  return array.slice(array.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 13));    // returns [16, 23, 42]
