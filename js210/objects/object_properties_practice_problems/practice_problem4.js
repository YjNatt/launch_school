function wordCount(str) {
  let count = {};

  let words = str.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];

    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
