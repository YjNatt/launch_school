let concat = (...args) => {
  let concatArray = [];

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];

    if (Array.isArray(currentArg)) {
      for (let index = 0; index < currentArg.length; index += 1) {
        concatArray.push(currentArg[index]);
      }
    } else {
      concatArray.push(currentArg);
    }
  }


  return concatArray;
};

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
