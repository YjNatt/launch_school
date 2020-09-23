function numberRange(number) {
  if (number >= 0 && number <= 50) {
    return `${number} is between 0 and 50`;
  } else if (number >= 51 && number <= 100) {
    return `${number} is between 51 and 100`;
  } else if (number > 100) {
    return `${number} is greater than 100`;
  } else {
    return `${number} is less than 0`;
  }
}

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));
