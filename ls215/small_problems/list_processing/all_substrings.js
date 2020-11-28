'use strict';
function leadingSubstrings(string) {
  return [...string].map((char, index) => {
    return string.slice(0, index) + char;
  });
}

function substrings(string) {
  return [...string].flatMap((_, index) => {
    return leadingSubstrings(string.slice(index));
  });
}

console.log(substrings('abcde'));
