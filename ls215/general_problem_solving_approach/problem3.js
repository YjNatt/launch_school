/*
 *  input:
 *  Word
 *    - String
 *    - uppercase and lowercase letters
 *
 *  output:
 *  Boolean
 *    - return true if word can be spelled with blocks
 *    - return false otherwise
 *
 *  Rules:
 *  Check if word can be spelled with the blocks
 *  - 2 letters per block
 *  - block can only be used once
 *  - case insensitive
 *
 *  Questions:
 *  Can input contain non-letter characters?
 *  Can input be empty?
 *
 *  Data Structures:
 *  - Object
 *    - keys are letters
 *    - values is boolean to check if it has been used
 *    - default value is false and if used then becomes true
 *
 *  - Nested Array
 *    - inner array contain letters
 *    - use pop to remove the letters to keep track of what
 *      blocks have been used
 *
 *  - Array of Strings
 *    - each element will be a 2 letter string,
 *    - pop to remove the letters to keep track
 *
 *  Algorithm
 *  - Initialize an array of 2 letter strings and assign to blocks;
 *  - loop through the word by characters
 *    - uppercase each characters
 *    - loop through blocks
 *      - check if any string includes the current character
 *      - if true
 *        - find index and remove from index
 *      - if not return false
 *  - return true if we finished the loop
 */

function isBlockWord(word) {
  let blocks = [
    'BO', 'XL', 'DQ', 'CP',
    'NA', 'GT', 'RE', 'FS',
    'JW', 'HU', 'VI', 'LY',
    'ZM'
  ];

  for (let index = 0; index < word.length; index += 1) {
    let letter = word[index].toUpperCase();
    let deleteAtIndex = blocks.findIndex((block => block.includes(letter)));

    if (deleteAtIndex >= 0) {
      blocks.splice(deleteAtIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('JeSt')); // true
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('BaATCH')); // false
console.log(isBlockWord('BAATCH')); // false
console.log(isBlockWord('BUTCH')); // false
