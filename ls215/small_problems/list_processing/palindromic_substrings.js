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

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
