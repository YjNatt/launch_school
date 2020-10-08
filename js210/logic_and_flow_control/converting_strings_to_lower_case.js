/* function toLowerCase
 * input: string
 * output: new string
 * rules: - convert all input to lower case
 *        - do not change characters that are not letters
 * algorithm:
 * have variable with value of empty string
 * loop through each character in string
 *   - if the ascii numeric of current character between 65 and 90 inclusive
 *     - add 32 to current ascii numeric
 *     - convert ascii numeric back to string character and add to the empty string
 *   - else
 *     - add to empty string
 * return string.
 */

function toLowerCase(str) {
  const CONVERSION_OFFSET = 32;
  let lowerCaseStr = '';

  for (let index = 0; index < str.length; index += 1) {
    let asciiNumeric = str.charCodeAt(index);

    if (str[index] >= 'A' && str[index] <= 'Z') asciiNumeric += CONVERSION_OFFSET;

    lowerCaseStr += String.fromCharCode(asciiNumeric);
  }

  return lowerCaseStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
