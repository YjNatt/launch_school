function matrixSums(arr) {
  return arr.map((innerArr) => {
    return innerArr.reduce((sum, number) => sum + number);
  });
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
