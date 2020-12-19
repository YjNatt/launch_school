const fibonacciNthToNumber = { 1: 1, 2: 1 }

function fibonacci(nth) {
  if (fibonacciNthToNumber.hasOwnProperty(nth)) {
    return fibonacciNthToNumber[nth]
  }

  fibonacciNthToNumber[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return fibonacciNthToNumber[nth];
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(50));      // 6765
