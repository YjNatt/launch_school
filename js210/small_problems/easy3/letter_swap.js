// function: swap
// input: string
// output: string
// rules: - swap the first and last letter of every word
//        - string only contains words and spaces
// algorithm:
// split string into an array of words
//  split words into a nested array of characters
// iterate through the nested words
//  replace the first index with the last index and vice versa

let swapIndexes = function swapFirstIndexWithLastIndex(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
};

let swap = function letterSwap(string) {
  let words = string.split(' ');
  let splitWord = (word) => word.split('');
  return words.map(splitWord).map((chars) => swapIndexes(chars).join('')).join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
