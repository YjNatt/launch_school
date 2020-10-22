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

let signedIntegerToString = function convertSignedIntegerToString(signedNumber) {
  let numberString = integerToString(Math.abs(signedNumber));

  if (signedNumber > 0) {
    numberString = '+' + numberString;
  } else if (signedNumber < 0) {
    numberString = '-' + numberString;
  }

  return numberString;
};

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
