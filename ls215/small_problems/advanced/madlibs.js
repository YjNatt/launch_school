/*
 *  input:
 *    - template string.
 *
 *  output:
 *    - String
 *
 *  rules:
 *    - program contains:
 *      - nouns
 *      - verbs
 *      - adjectives
 *      - adverbs
 *
 *    - Place random words of the appropriate types
 *      and return result
 *
 *  data structure:
 *    - Strings
 *    - Arrays
 *
 *  questions:
 *    - can input be empty or invalid?
 *    - am I outputting the result to the console or return a string.
 *    - can replacement texts be used only once?
 *
 *  algorithm:
 *    - Declare nouns and assign an array of string that are nouns
 *    - Declare verbs and assign an array of string that are verbs
 *    - Declare adjectives and assign an array of string that are adjectives
 *    - Declare adverbs and assign an array of string that are adverbs
 *
 *    - replace the input
 *      - if any words match NOUN
 *        - replace with a random nouns word.
 *      - if any words match verbs
 *        - replace with a random nouns verbs.
 *      - if any words match adjecteives
 *        - replace with a random nouns adjecteives.
 *      - if any words match adverbs
 *        - replace with a random nouns adverbs.
 *
 *    - return the string
 *
 *  function getRandomWord
 *  input: array of strings
 *  output: string
 *  rules: return a string and do not mutate input array
 *  algorthim:
 *    Return the 
 */

function getRandomWord(words) {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

function madlibs(template) {
  const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];
  const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const REPLACE_REGEX = /(NOUN|VERB|ADVERB|ADJECTIVE)/g

  return template.replace(REPLACE_REGEX, word => {
    switch (word) {
      case 'NOUN':
        return getRandomWord(NOUNS);
      case 'VERB':
        return getRandomWord(VERBS);
      case 'ADVERB':
        return getRandomWord(ADVERBS);
      case 'ADJECTIVE':
        return getRandomWord(ADJECTIVES);
    }
  });
}

let template1 = 'The ADJECTIVE brown NOUN ADVERB\n' +
  'VERB the ADJECTIVE yellow\n' + 
  'NOUN, who ADVERB VERB his\n' +
  'NOUN and looks around.'

let template2 = "The NOUN VERB the NOUN's tail"

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));
