function wordCap(text) {
  let words = text.split(' ');

  return words.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
