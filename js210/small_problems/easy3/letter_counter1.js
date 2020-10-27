/* function: wordSizes
 * input: String
 * output: Object
 * rules: - keys: the length of a word,
 *        - values: are the number of times that length appears in string
 *        - Words consist of any sequence of non-space characters
 *          example: what's length is 6
 *        - return empty object if string is empty
 * algorithm:
 * - Initialize variable lengthsToOccurances and assign an empty object
 * - split the string into an array of words
 * - iterate throw the words array
 *   - if length is in the lengthsToOccurances object
 *    - increment by 1
 *   - else
 *    - initialize key of length and value of 1
 * return the lengthsToOccurances
 */

let wordSizes = function lengthOfWordToNumberOfOccurances(string) {
  if (string.length < 1) return {};

  let lengthsToOccurances = {};
  const words = string.split(' ');

  words.forEach((word) => {
    let lengthString = String(word.length);
    if (lengthsToOccurances[lengthString]) {
      lengthsToOccurances[lengthString] += 1;
    } else {
      lengthsToOccurances[lengthString] = 1;
    }
  });

  return lengthsToOccurances;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
