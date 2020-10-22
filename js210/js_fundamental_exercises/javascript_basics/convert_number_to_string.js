const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const DIVISOR = 10;

let integerToString = function convertIntegerToString(number) {

  let strings = [];
  do {
    strings.unshift(DIGITS[number % DIVISOR]);
    number = Math.floor(number / DIVISOR);
  } while(number > 0)

  return strings.join('');
};

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
