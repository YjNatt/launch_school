/* input: string, string
 * output: number
 * rules: - 1st argument is a word
 *        - 2nd argument is a string of text
 *        - return an integer representing the number of times the word appears
 *          in the string of text
 *        - assument the word and text inputs are always provided
 * algorithm:
 * use match to capture an array of words that appear in text
 * return the length of array
 */

function searchWord(word, text) {
  let wordSearchRegex = new RegExp((`\\b${word}\\b`), 'gi');
  let matches = text.match(wordSearchRegex);

  return matches ? matches.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('qui', text));      // 3
