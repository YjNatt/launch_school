/* function substring
 * input: string, integer(start index), integer(end index)
 * output: new string
 * rules: - return substring from start index (inclusive), to end index (NOT inclusive)
 *        - if start index is greater than end index than swap the values and follow rule above
 *        - return empty string if start index is equal to end index
 *        - if end index is omitted, make the end index undefined and return a string from the
 *          start index to the end of the string
 *        - if start or end is less than 0 or NaN, set as 0
 *        -  if start or end is greater than the length of the string treat it as equal to the string length
 *
 * Algorith:
 * assign the start index and end index approperatly
 *   - swap values if end index is larger than start index
 *   - if end index is omitted set undefined
 *   - if start or end is negative or NaN assign 0
 *   - if start or end is greater than the length of the string set the length of the string
 * 
 * declare and assign variable to hold the substring
 * loop 
 *   - start at starting index
 *   break if starting index is equal to end index
 *   push character to substring
 * 
 * return substring
 */

let substring = function(str, startIndex, endIndex=undefined) {
  if (endIndex > str.length || typeof(endIndex) === 'undefined') {
    endIndex = str.length;
  } else if (endIndex < 0 || isNaN(endIndex)) {
    endIndex = 0;
  }

  if (startIndex > str.length) {
    startIndex = 0;
  } else if (startIndex < 0 || isNaN(startIndex)) {
    startIndex = 0;
  }

  if (startIndex > endIndex) {
    [startIndex, endIndex] = [endIndex, startIndex];
  }

  let subStr = '';
  for (let index = startIndex; index < endIndex; index += 1) {
    subStr += str[index];
  }

  return subStr;
};

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
