let showMultiplicativeAverage = function showMultiplicativeAverage(numbers) {
  const product = numbers.reduce((sum, number) => sum * number);
  return (product / numbers.length).toFixed(3);
};

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
