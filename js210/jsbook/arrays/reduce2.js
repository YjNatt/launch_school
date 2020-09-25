let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce((lengths, string) => {
    if (string.length % 2 !== 0) {
      lengths.push(string.length);
    }

    return lengths;
  }, []);
};

console.log(oddLengths(arr)); // => [1, 5, 3]
