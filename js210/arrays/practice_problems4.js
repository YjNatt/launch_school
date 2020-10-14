function join(array) {
  let string = '';

  for (let index = 0; index < array.length; index += 1) {
    string += String(array[index]);
  }

  return string;
}

join([1, 'a', 4]);
