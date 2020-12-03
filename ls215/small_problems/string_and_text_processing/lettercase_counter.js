/*
 * input: string
 * output: object
 * rules: - return object containing 3 properties
 *          - key: lowercase, value: number
 *          - key: uppercase, value: number
 *          - key: neither, value: number
 *        - the number value represents the number of
 *          characters in the string
 * algorithm:
 * declare variable result and initialize an object with 3 properties
 *   - key: lowercase, value: 0
 *   - key: uppercase, value: 0
 *   - key: neither, value: 0
 * use a forloop to iterate through string
 *   - if current character is a lowercase character
 *     - increment result lowercase property
 *   - else if current character is uppercase character
 *     - increment result uppercase property
 *   - else
 *     - increment result neither property
 * - return result
 */

// let letterCaseCount = function letterCaseCount(string) {
//   let result = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0,
//   };
//
//   for (let index = 0; index < string.length; index += 1) {
//     let currentCharacter = string[index];
//
//     if (/[a-z]/.test(currentCharacter)) {
//       result.lowercase += 1;
//     } else if (/[A-Z]/.test(currentCharacter)) {
//       result.uppercase += 1;
//     } else {
//       result.neither += 1;
//     }
//   }
//
//   return result;
// };

function letterCaseCount(string) {
  const lowerCaseArray = string.match(/[a-z]/g) || [];
  const upperCaseArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerCaseArray.length,
    uppercase: upperCaseArray.length,
    neither: neitherArray.length,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
