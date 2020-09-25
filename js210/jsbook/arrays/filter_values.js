let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function removeNonInteger(array) {
  return array.filter( element => Number.isInteger(element));
}
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
