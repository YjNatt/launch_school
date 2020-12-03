// function isUppercase(text) {
//   return text === text.toUpperCase();
// }

function isUppercase(text) {
  return !/[a-z]/.test(text);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
