/*
 *  input:
 *  Is a word as a string
 *
 *  output:
 *  A boolean value, true or false
 *
 *  rules:
 *  We are given 13 blocks.
 *
 *  Each block has 2 letters and can only be used once.
 *
 *  If a word can be spelled without using a block more than
 *  once return true, else false.
 *
 *  The program is case-insensitive.
 *
 *  questions:
 *  invalid input? undefined, null, empty string, spaces
 *
 *  data structure:
 *  Array of strings for blocks
 *
 *  Algorithm:
 *  Initialize blocks to an array of 2 letter strings
 *
 *  use a for loop to iterate through the current word, letter by letter
 *  if current letter is included in blocks
 *    remove the block from blocks
 *  else
 *    return false
 *
 *  return true
 */

function isBlockWord(word) {
  let blocks = [
    'BO',
    'GT',
    'VI',
    'XK',
    'RE',
    'LY',
    'DQ',
    'FS',
    'ZM',
    'CP',
    'JW',
    'NA',
    'HU'
  ];

  for (let index = 0; index < word.length; index += 1) {
    let letter = word[index].toUpperCase();
    let blockIndex = blocks.findIndex(block => block.includes(letter));

    if (blockIndex >= 0) {
      blocks.splice(blockIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('JeSt'));       // true
console.log(isBlockWord('jeest'));       // false
