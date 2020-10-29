// function: repeater
// input: string
// output: string
// rules: double each character
//        empty strings stay empty
// algorithm:
// let doubleChars get empty string
// iterate through input string
//  - concatenate current charater twice
//  - add concancatenated string to doubleChars
// return doubleChars

let repeater = function doubleEachCharacter(string) {
  let doubledString = '';

  for (let index = 0; index < string.length; index += 1) {
    doubledString += string[index] + string[index];
  }

  return doubledString;
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
