let randomBetween = function randomNumbersBetweenInclusive(min, max) {
  if (min > max) [min, max] = [max, min];

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let age = randomBetween(200, 20);
console.log(`Teddy is ${age} years old!`);
