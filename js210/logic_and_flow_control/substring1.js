/* function substr
 * input: string, integer(start), integer(length)
 * output: string
 * rules: - if start integer is negative, than start at stringLenght - start
 *        - if length argument is larger that strings length then return the available characters
 * Algorith
 * have variable with empty string value to hold the substring
 * if start is negatave reassign start strings length - current start integer
 * loop from start to integer length
 *   - if current index has character add the substring
 *   - else break
 * return substring.
 */

let substr = function(str, start, length) {
  if (start < 0) start = str.length + start;

  let substring = ''

  for (let count = 0; count < length; count += 1) {
    let currentChar = str[start + count];

    if (currentChar) {
      substring += currentChar;
    } else {
      break;
    }
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
