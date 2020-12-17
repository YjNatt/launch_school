/*
 *  input:
 *    - string of any characters
 *    - contains atleast 1 character
 *
 *  output:
 *    - object with 3 properties:
 *      - percentage of characters that are lowercase letters
 *      - percentage of characters that are uppercase letters
 *      - percentage of characters that are neither
 *
 *  rules:
 *    - object percentage value is a string:
 *      - 1 decimal point before the '.'
 *      - 2 decimal point after the '.'
 *
 *  data structure:
 *    - Numbers
 *      - we need to find the average and round to the 2nd decimal place
 *
 *  algorithm:
 *    - assign the total length of the input to totalCharacters
 *
 *    - find the number of lowercase letters in the string and assign to
 *      lowercaseCount
 *
 *    - find the number of uppercase letters in the string and assign to
 *      uppercaseCount
 *
 *    - find the number of neither uppercase nor lowercase
 *      in the string and assign to neitherCount
 *
 *        - find the number of matches in the string with the current regex
 *          and return the length.
 *
 *        - if null return 0
 *
 *    - calculate the percentage of each count and round the the 2nd decimal
 *      place and assign to either lowercaseAvg, uppercaseAvg, or neitherAvg
 *
 *    - return an object with a property of each average and convert the
 *      average to a string as the value.
 */

function letterPercentages(str) {
  const lowercaseCharacters = str.match(/[a-z]/g) || [];
  const uppercaseCharacters = str.match(/[A-Z]/g) || [];
  const neitherCharacters = str.match(/[^a-z]/gi) || [];

  return {
    lowercase: (lowercaseCharacters.length / str.length * 100).toFixed(2),
    uppercase: (uppercaseCharacters.length / str.length * 100).toFixed(2),
    neither: (neitherCharacters.length / str.length * 100).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
