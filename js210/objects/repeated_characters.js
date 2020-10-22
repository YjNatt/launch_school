let repeatedCharacters = (string) => {
  let letterCount = {};
  let letters = string.toLowerCase().split('');

  letters.forEach((letter) => {
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  });

  for (letter in letterCount) {
    if (letterCount[letter] < 2) delete letterCount[letter];
  }

  return letterCount;
};

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
