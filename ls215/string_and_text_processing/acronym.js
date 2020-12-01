/* input: string
 * output: string
 * rules: - generates and returns an acronym for a string of words
 *        - acronym include only the first letter of each word
 *          that are seperated by:
 *            - space
 *            - hyphen
 * algorithm:
 * split string into array of words
 *   - words consist of only letters, no spaces nor hyphens
 *   - reduce the array to a string of only the first letter of each word
 */

function acronym(string) {
  let words = string.split(/[^a-z]+/gi);
  return words.map(word => word[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
