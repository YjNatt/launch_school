function rot13(str) {
  const LOWERCASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const OFFSET = 13;
  let cipherText = ''

  for (let index = 0; index < str.length; index += 1) {
    let char = str[index];

    if (LOWERCASE_ALPHABET.includes(char)) {
      char = cipherChar(char, OFFSET, LOWERCASE_ALPHABET);
    } else if (UPPERCASE_ALPHABET.includes(char)) {
      char = cipherChar(char, OFFSET, UPPERCASE_ALPHABET);
    }

    cipherText += char
  }

  return cipherText;
}

function cipherChar(char, offset, alphabet) {
  let index = (alphabet.indexOf(char) + offset) % alphabet.length;
  return alphabet[index]
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
