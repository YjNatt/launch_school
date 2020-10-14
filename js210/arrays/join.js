let join = function(array, separator) {
  let string = '';

  for (let index = 0; index < array.length; index += 1) {
    string += String(array[index]);

    if (index < array.length - 1) {
      string += separator;
    }
  }

  return string;
};

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
