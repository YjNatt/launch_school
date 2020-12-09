function generateRails(numberOfRails) {
  let rails = [];
  for (let count = 1; count <= numberOfRails; count += 1) {
    rails.push([]);
  }
  return rails;
}

function encodeToRails(elements, numberOfRails) {
  let rails = generateRails(numberOfRails);
  let isIncreasing = true;
  let currentRailIndex = 0;

  elements.forEach(element => {
    rails[currentRailIndex].push(element);

    currentRailIndex += isIncreasing ?  1 : -1;

    if (currentRailIndex % (rails.length - 1) === 0) {
      isIncreasing = !isIncreasing;
    }
  });

  return rails.flat();
}

function encodeRailFence(message, numberOfRails) {
  let letters = message.toUpperCase().match(/[A-Z\d]/g);

  if (numberOfRails === 1) {
    return letters.join('');
  }

  let rails = encodeToRails(letters, numberOfRails);

  return rails.join('');
}

function decodeRailFence(message, numberOfRails) {
  if (numberOfRails === 1) {
    return message;
  }

  let indexes = [];
  for (let index = 0; index < message.length; index += 1) {
    indexes.push(index);
  }

  let encodedIndexes = encodeToRails(indexes, numberOfRails);
  let letters = [];
  for (let index = 0; index < message.length; index += 1) {
    let encodedIndex = encodedIndexes.indexOf(index);
    letters.push(message[encodedIndex]);
  }

  return letters.join('');
}


console.log(encodeRailFence('HELLO', 1)); // HELLO
console.log(encodeRailFence('HELLO', 2)); // HLOEL
console.log(encodeRailFence('WE ARE DISCOVERED FLEE AT ONCE', 3)); // WECRLTEERDSOEEFEAOCAIVDEN
console.log(encodeRailFence('we are discovered flee at once', 3)); // WECRLTEERDSOEEFEAOCAIVDEN
console.log(encodeRailFence('ABCDE FGHIJ KLMN OP', 4)); // AGMBFHLNCEIKODJP

console.log(decodeRailFence('HELLO', 1)); // HELLO
console.log(decodeRailFence('HLOEL', 2)); // HELLO
console.log(decodeRailFence('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // WE ARE DISCOVERED FLEE AT ONCE
console.log(decodeRailFence('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // we are discovered flee at once
console.log(decodeRailFence('AGMBFHLNCEIKODJP', 4)); // ABCDE FGHIJ KLMN OP
