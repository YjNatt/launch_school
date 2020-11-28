'use strict';
/*
 * input: string
 * output: array of strings
 * rules: - return a list of all substrings
 *          - from beginning of the string
 *          - ordered from shortest to longest
 * algorithm:
 * - declare substrings variable and initialize an empty array
 * - iterate through the string and keep track of index
 *   - get substring from 0 to current index and push to substrings variable
 * - return substrings
 */

function leadingSubstrings(string) {
  return string.split('').map((char, index) => {
    return string.slice(0, index) + char;
  });

  // let substrings = [];

  // for (let index = 1; index <= string.length; index += 1) {
  //   substrings.push(string.slice(0, index));
  // }

  // return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
