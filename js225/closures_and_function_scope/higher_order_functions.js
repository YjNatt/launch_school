// 1.
// Higher-order functions are functions that take function as an input and/or return a function

// 2.
// The method `filter` is the higher order function because it accepts the function
// `checkEven` as an argument.

// 3.
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  };
}

let checkEven = makeCheckEven();

numbers.filter(checkEven);

// 4.
function execute(func, operand) {
  return func(operand);
}

// 5.
function makeListTransformer(func) {
  return function(list) {
    return list.map(func);
  };
}
