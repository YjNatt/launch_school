/* function repeat
 * input: string, integer
 * output: string or undefined
 * rules: - repeate string, integer times
 *        - if second argument is not a number or negative undefined is returned.
 *        - if integer is 0 return empty string.
 *
 * Algorithm:
 * have a variable to hold the potential return value
 * if integer is greater than or equal to 0
 *   - loop integer times
 *     - concat and reassign the return value
 *     - return return value
 * else
 *   - return undefined.
 */

let repeat = function(string, times) {
  if (times >= 0 && typeof(times) === 'number') {
    let repeatedString = ''

    for(let count = 0; count < times; count += 1) {
      repeatedString += string;
    }

    return repeatedString;
  } else {
    return undefined;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
