let getFilteredWordLength = function getFilteredWordLength(word) {
  let filteredWord = '';

  for (let index = 0; index < word.length; index += 1) {
    let letter = word[index];
    if (/[a-z]/i.test(letter)) filteredWord += letter;
  }

  return filteredWord.length;
};

let wordSizes = function lengthOfWordToNumberOfOccurances(string) {
  if (string.length < 1) return {};

  let lengthsToOccurances = {};
  const words = string.split(' ');

  words.forEach((word) => {
    let lengthString = String(getFilteredWordLength(word));
    if (lengthsToOccurances[lengthString]) {
      lengthsToOccurances[lengthString] += 1;
    } else {
      lengthsToOccurances[lengthString] = 1;
    }
  });

  return lengthsToOccurances;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
