function sum(numbers) {
  let total = 0;
  for(let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }
  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

let temperatures = [32, 27, 31, 42];

console.log(average(temperatures));
