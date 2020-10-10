let stringy = (length) => {
  let isOne = true;
  let text = ''

  while (text.length < length) {
    isOne ? text += '1' : text += '0';
    isOne = !isOne;
  }

  console.log(text);
};

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
