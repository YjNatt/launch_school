function allCaps(phrase) {
  return ((phrase.length > 10) ? phrase.toUpperCase() : phrase )
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));
