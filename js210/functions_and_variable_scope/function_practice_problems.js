function sum(number1, number2, number3) {
  return number1 + number2 + number3;
}

function average(numbers) {
  let total = 0;
  for(let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }

  return total / numbers.length;
}

console.log(average([54, 34, 12]));
