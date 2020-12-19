function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// The function range defined on line 11 - 13 overwrites
// the function defined on line 1 - 9. Therefore on line
// 12 the function is invoking the function defined on lines
// 11 - 13 instead of lines 1 - 9.
