function endsOf(array1, array2) {
  return [array1[0], array2[array2.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
