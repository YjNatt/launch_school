// function: centerOf
// input: String
// output: String (1 to 2 chars)
// rules: - if input string has odd length
//          - return the middle characters
//        - if input string is even
//          - return the 2 middle characters
// Algorithm:
// Declare variable middleIndex and assign the return value of length of string divide by 2
// if length is odd
//   return inputString index of middleIndex
// else
//   return input string index of middleIndex + string index of middle index + 1
//

let centerOf = function centerOfString(string) {
  let centerIndex = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[centerIndex - 1] + string[centerIndex];
  } else {
    return string[centerIndex];
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
