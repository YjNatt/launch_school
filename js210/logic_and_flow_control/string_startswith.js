/* function startsWith
 * input: string, string
 * output: boolean
 * rules: - if first string begins with second string return true;
 *        - if second string is empty return true.
 *        - if second string is bigger than first string return false.
 *        - return false if they do not match
 *
 * algorithm:
 * - if second string is greater than first string return false
 * - have variable value of true to keep track whether or not the input are the same
 * - loop through characters of second string
 *   - if the index of the second string character does not match the index of the first
 *     string character reassign boolean to false and break
 * return boolean.
 */

let startsWith = (string, searchString) => {
  for(let index = 0; index < searchString.length; index +=1) {
    if (searchString[index] !== string[index]) return false;
  }

  return true;
};

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
