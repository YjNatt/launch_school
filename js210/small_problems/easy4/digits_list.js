let digitList = function digitList(number) {
  let digits = [];

  while (number > 0) {
    digits.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  return digits;
};

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
