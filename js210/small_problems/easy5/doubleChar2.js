// function: doubleConsonants
// input: String
// output: String
// rules: - double only consonants
//        - do not double:
//          - vowels
//          - digits
//          - punctuation
//          - whitespace
// algorithm:
// initialize variable doubledConsonats and assign an empty string
// interate through the string
//   - if current character is consonants
//     - add current character to string
//   - add current character to string
// return doubledConsonats

let doubleConsonants = function doubleConsonants(string) {
  const CONSONANTS_REGEX = /[bcdfghjklmnpqrstvwxyz]/i;
  let doubledConsonants = '';

  for (let index = 0; index < string.length; index += 1) {
    if (CONSONANTS_REGEX.test(string[index])) {
      doubledConsonants += string[index];
    }

    doubledConsonants += string[index];
  }

  return doubledConsonants;
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
