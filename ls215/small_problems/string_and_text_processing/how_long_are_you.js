/* input: string
 * output: array of strings
 * rules: output array:
 *          - each word followed by a space
 *          - words length
 *        -if argument is an empty string or no argument is passed
 *          - return empty array
 *        -every pair of words is separated by a single space
 * algorithm
 * check if argument is valid
 *    - return empty array if not
 * split the string by empty spaces
 * iterate and transform through the words
 *   - concatenate word, empty space, and word length
 *   - return concatenated word
 */

function wordLengths(string) {
  if (!string) return [];

  return string.split(' ').map(word => {
    return `${word} ${word.length}`;
  });
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
