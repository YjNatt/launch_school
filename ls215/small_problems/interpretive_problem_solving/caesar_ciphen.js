'use strict';
/*
 *  input:
 *    plaintext: any sequence of characters.
 *
 *    key: number an integer grater than or equal to 0, its value can be
 *         greater than the number of letters in the alphabet
 *
 *  output:
 *    ciphertext: is a string with the same number of characters as plaintext.
 *                It is the encrypted version of plain text.
 *
 *  rules:
 *    To encrypt the plaintext, shift each position of the letter to the right
 *    indicated by the key value.
 *
 *    If the key is greater than the length of the alphabet or if the current position of the
 *    letter added to the key is greater than the length of the alphabet, it wraps around to 
 *    the beginning. Example if the key is 3: a -> d, A -> D, z -> c
 *
 *    Keep each encryted letter case as the original letter.
 *
 *    Encrypt only letters (uppercase and lowercase) any other character is left the same.
 *
 *  question:
 *    - What if the key is a negative number?
 *    - What if the key is a special number or is ommitted?
 *    - What if text is empty string
 *    - what if there is invalid data types as input
 *
 *  Data structure:
 *  Array
 *    - Use map to transform each letter 
 *    - join to a string at the end
 *    
 *  String
 *    - keep the alphabet as a string since we only need
 *      the index of a current letter and the index of the
 *      encoded letter
 *
 *  Algorithm:
 *  Initialize LOWER_CASE_ALPHABET and assign a string of
 *    lowecase letters from 'a' - 'z'
 *  
 *  Split the plainText into an array of characters
 *  Iterate and transform through an array of characters with map
 *    - If current character is not a letter
 *      - return character
 *    - else
 *      - transform letter to lowercase
 *      - find the index of the current letter in LOWER_CASE_ALPHABET
 *      - add key to the current index, divide by 26 and assign the remainder to newIndex
 *      
 *      - if current character is uppercase
 *        - return the letter in LOWER_CASE_ALPHABET at the index of newIndex, uppercased
 *      - else
 *        - return the letter in LOWER_CASE_ALPHABET at the index of newIndex, lowercased.
 *
 *  join the array and return the value.
 */

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(plainText, key) {
  return plainText.replace(/[a-z]/gi, letter => {
    return encryptLetter(letter, key);
  });
}

function encryptLetter(letter, key) {
  let index = ALPHABET.indexOf(letter.toLowerCase());
  let newIndex = (index + key) % ALPHABET.length;
  let encryptedLetter = ALPHABET[newIndex];

  if (letter.toLowerCase() === letter) {
    return encryptedLetter;
  } else {
    return encryptedLetter.toUpperCase();
  }
}


// caesarEncrypt('', 5); // ''

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('.', 3));       // "."

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
