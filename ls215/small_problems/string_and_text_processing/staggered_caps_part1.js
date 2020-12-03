function staggeredCase(string) {
  let isUpperCase = true;

  return string.split('').map(character => {
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

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
