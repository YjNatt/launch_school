/* function cleanUp
 * input: string
 * output: string
 * rules: - replace all non alphabetic characters with spaces
 *        - if multiple alphabetic charactes occur in a row
 *          - reduce to only 1 space
 */

function cleanUp(str) {
  const regex = /[^A-Z]+/gi
  console.log(str.replace(regex, ' '));
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
