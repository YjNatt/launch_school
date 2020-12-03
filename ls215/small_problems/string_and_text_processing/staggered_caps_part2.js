function staggeredCase(string) {
  let isUpperCase = true;

  return string.split('').map(character => {
    if (/[^a-z]/i.test(character)) {
      return character;
    }

    let transformChar;
    if (isUpperCase) {
      transformChar = character.toUpperCase();
    } else {
      transformChar = character.toLowerCase();
    }

    isUpperCase = !isUpperCase;
    return transformChar;
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
