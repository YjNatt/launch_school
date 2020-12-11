/*
 *  input:
 *  - plaintext:     is a string of any characters
 *
 *  - keyword:       is string of uppercase and lowercase letters
 *
 *  output:
 *  - encryptedtext: is a string where all letters are encrypted and
 *                   special characters are kept in place
 *
 *  rules:
 *  - Each letter in plaintext is shifted to the right
 *    depending on the corresponding letter in the keyword.
 *
 *  - The keyword is repeated until all letters in plaintext are encoded
 *
 *  - The key value does not move foward if the character is not a letter
 *
 *  - Each letter in the keyword is a shift value.
 *
 *  - The letter shifts to the right is equal to its index
 *    value in the alphabet.
 *
 *  - a shifts to the right 0 times
 *  - b shifts to the right 1 time
 *  - z shifts to the right 25 times
 *
 *  - Uppercase and lowercase letters in the keyword have
 *    the same shift value.
 *
 *  - If the letter shifts goes pass the end of the alphabet,
 *    it wraps around starting at 'a' or 'A'
 *
 *  - Keep the letter case.
 *
 *  questions:
 *  - can keyword include spaces or other non letter characters?
 *  - what if keyword is empty string?
 *
 *  data structure:
 *
 *  Use an array to keep track of what keyword letter to use.
 *  Use a string to hold the encryted letter.
 *
 *  Algorithm:
 *
 *  initialize alphabet and assign a string from letters 'a' to 'z'
 *
 *  turn the keyword to lowercase and Split the keyword into an array of letters
 *  Transform each letter to a number representing its index in the alphabet
 *  assign the list of numbers to shiftValues
 *
 *  initialize currentShiftIndex and assign it to 0
 *  initialize encryptedText and assign an empty string
 *
 *  loop through the plaintext
 *    - if current character is not a letter
 *      concatenate character to encrytedText
 *    - else
 *      - find the current shift value and
 *        shift current letter appropriately
 *      - upper case encrypted letter if current letter is upper case
 *      - concatenate character to encrytedText
 *      - reassign currentShiftIndex to remainder of
 *        currentShiftIndex + 1 divide by keyword length
 *
 *  return encryptedText
 */
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function shiftLetter(letter, key) {
  let index = ALPHABET.indexOf(letter.toLowerCase());
  let newIndex = (index + key) % ALPHABET.length;
  let encryptedLetter = ALPHABET[newIndex];

  if (letter === letter.toUpperCase()) {
    encryptedLetter = encryptedLetter.toUpperCase();
  }

  return encryptedLetter;
}

function vingenerCipher(plainText, keyword) {
  let shiftValues = [...keyword.toLowerCase()].map(letter => {
    return ALPHABET.indexOf(letter);
  });

  let currentShiftIndex = 0;
  let encryptedText = '';

  for (let index = 0; index < plainText.length; index += 1) {
    let char = plainText[index];

    if (/[a-z]/i.test(char)) {
      char = shiftLetter(char, shiftValues[currentShiftIndex]);
      currentShiftIndex = (currentShiftIndex + 1) % shiftValues.length;
    }

    encryptedText += char;
  }

  return encryptedText;
}

console.log(vingenerCipher('Pineapples', 'Aa')); // Pineapples
console.log(vingenerCipher('Pineapples', 'meat')); // Bmnxmtpeqw
console.log(vingenerCipher('Pineapples', 'mEaT')); // Bmnxmtpeqw
console.log(vingenerCipher('Pi', 'mEaT')); // Bm
console.log(vingenerCipher('Pine! apples', 'meat')); // Bmnx! mtpeqw
console.log(vingenerCipher('Dog', 'Rabbit')); // Uoh


// edge cases
// console.log(vingenerCipher('', 'meat')); // Bmnxmtpeqw
// console.log(vingenerCipher('Pineapples', '')); // Bmnxmtpeqw
