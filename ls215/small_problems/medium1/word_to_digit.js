/*
 *  input: 
 *    Sentence string which contains words and other puncutation.
 *
 *  output:
 *    A senence string with each number word replaced with the correspoding digit.
 *
 *  rules:
 *    - numbers words are the words used to describe a number. ex 'one' === 1.
 *    - Only convert the number word and not any punctution that is attached to the number word.
 *    - number words range from zero to nine.
 *    - number words are seperated by spaces.
 *
 *  questions:
 *    Does case sensitivity matter?
 *    What to return if there are no number words?
 *    Are number words always separated by spaces?
 *
 *  data structure:
 *    String: regex to replace number words
 *    Array: Keep number words as strings in the array
 *
 *  algorithm:
 *  initialize an array of strings and assign to numberWords
 *    - strings start from 'zero' and end at 'nine'
 *
 *  Replace each occurance of a numberWord to its corresponding index in the sentence
 */

function wordToDigit(sentence) {
  let numberWords = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  let numberWordsRegex = new RegExp(`\b(${numberWords.join('|')})\b`, 'gi');

  return sentence.replace(numberWordsRegex, numberWord => {
    return String(numberWords.indexOf(numberWord.toLowerCase()));
  });
}

console.log(wordToDigit('weight'));
console.log(wordToDigit('one two three four five six seven eight nine zero'));
console.log(wordToDigit('One. tWo!'));
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
