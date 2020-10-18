let randomNumber = function(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomNumber(20, 10));
