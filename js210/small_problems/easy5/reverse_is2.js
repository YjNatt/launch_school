// function: reverseWords
// input: String
// output: string
// rules: - Returns String where all five or more letter words are reveresed
//        - other words are left alone
//        - input only contains of letters and spaces
//        - words are separated by a single space
// algorithm:
// split sentence into an array of words
// iterate and transform through words array
//    - if length of word is >= 5
//      - return reverse word
//    - else
//      - return word
//  join words together with space

let reverseWord = function reverseWord(word) {
  return word.split('').reverse().join('');
};

let reverseWords = function reverseWords(text) {
  let words = text.split(' ');
  return words.map((word) => {
    return word.length >= 5 ? reverseWord(word) : word;
  }).join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
