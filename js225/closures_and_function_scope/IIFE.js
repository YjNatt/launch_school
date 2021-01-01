// 1.
// no because you can immediately invoke a function declaration

// 2.
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3.
// Variable sum is first assigned a function and then is reassigned to a number
// line 16 tries to invoke the variable sum however it is not possible.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

// 4.
function countdown(count) {
  (function(num) {
    for (let currentNum = num; currentNum >= 0; currentNum -= 1) {
      console.log(currentNum);
    }

    console.log('Done!');
  })(count);
}

// 5.
// Name function expressions that immediately invoked are not accessible in the global scope.

// 6.
function countdown(start) {
  (function count(number) {
    console.log(number)

    if (number > 0) {
      count(number - 1);
    } else {
      console.log('Done!');
    }
  })(start);
}

countdown(7);
