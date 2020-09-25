let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((sum, number) => {
    return (number * number) + sum;
  }, 0);
};

console.log(sumOfSquares(numbers));
