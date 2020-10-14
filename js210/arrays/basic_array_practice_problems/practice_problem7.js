function lastNOf(array, count) {
  let index = array.length - count;

  if (index < 0) {
    index = 0;
  }

  return array.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 8));    // returns [16, 23, 42]
