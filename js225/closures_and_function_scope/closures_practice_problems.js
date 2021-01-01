// 1.
function makeMultiplierLister(multiple) {
  return function() {
    for(let number = multiple; number < 100; number += multiple) {
      console.log(number);
    }
  };
}

// 2.
let total = 0;

function subtract(number) {
  total -= number;
  console.log(total);
}

function subtract(number) {
  total += number;
  console.log(total);
}

// 3.
function later(func, arg) {
  return function() {
    func(arg);
  };
}

// 4.
// There is no way to access the value of the variables from outside the function.
// This technique lets us define private variables.
