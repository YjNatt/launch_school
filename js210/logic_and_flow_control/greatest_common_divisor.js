let gcd = (numbers) => {

  while (numbers.length > 1) {
    let num1 = numbers.pop();
    let num2 = numbers.pop();

    while (true) {
      remainder = num1 % num2
      if (remainder === 0) break; 
      num1 = num2;
      num2 = remainder;
    }

    numbers.push(num2);
  }

  return numbers[0];
};

console.log(gcd([48, 18]));
console.log(gcd([4, 12, 8]));
console.log(gcd([10, 15]));
console.log(gcd([2, 9]));
