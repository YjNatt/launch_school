'use strict';
let isPalindrome = function isStringPalindrome(string) {
  return string === string.split('').reverse().join('');
};

let isRealPalindrome = function isRealPalindrome(string) {
  const nonAlphaNumericRegex = /[^0-9a-z]/gi;
  const filteredString = string.toLowerCase().replace(nonAlphaNumericRegex, '');
  return isPalindrome(filteredString);
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
