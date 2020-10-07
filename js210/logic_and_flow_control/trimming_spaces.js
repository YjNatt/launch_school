let leftTrim = (str) => {
  let newStr = '';
  let isLeadingSpace = true;

  for (let index = 0; index < str.length; index += 1) {
    let currentChar = str[index];

    if (currentChar !== ' ') isLeadingSpace = false;
    if (!isLeadingSpace) newStr += currentChar;
  }

  return newStr;
}

let rightTrim = (str) => {
  let newStr = '';
  let isTrailingSpace = true;

  for (let index = (str.length - 1); index >= 0; index -= 1) {
    let currentChar = str[index];

    if (currentChar !== ' ') isTrailingSpace = false;
    if (!isTrailingSpace) newStr = currentChar + newStr;
  }

  return newStr;
}

let trim = (str) => {
  return rightTrim(leftTrim(str));
};

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
