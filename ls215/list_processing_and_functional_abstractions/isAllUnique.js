function isAllUnique(string) {
  let usedCharacters = [];
  let lowerCasedString = string.toLowerCase();

  for (let index = 0; index < lowerCasedString.length; index += 1) {
    if (lowerCasedString[index] === ' ') continue;

    if (usedCharacters.includes(lowerCasedString[index])) {
      return false;
    } else {
      usedCharacters.push(lowerCasedString[index]);
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
