function isNegZero(number) {
  return (1 / number) === -Infinity;
}

console.log(isNegZero(0));
console.log(isNegZero(-0));
console.log(isNegZero(-60));
console.log(isNegZero(60));
