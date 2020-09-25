let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr){
  let filteredNumbersArray = arr.map( function(str) {
    return str.length;
  }).filter( function(length) {
    return length % 2 !== 0;
  });

  return filteredNumbersArray;
}

let newArray = oddLengths(array);
console.log(newArray);
