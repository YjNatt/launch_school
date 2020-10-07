function indexOf(subjectString, comparatorString) {
  for (let index = 0; index < subjectString.length; index += 1) {
    let subjectChar = subjectString[index];
    let comparatorChar = comparatorString[0];

    if (subjectChar === comparatorChar) {
      let string = subjectChar;
      let count = 1;

      while (count < comparatorString.length) {
        string += subjectString[index + count];
        count += 1;
      }

      if (string === comparatorString) {
        return index;
      }
    }
  }

  return -1;
}

function reverseWord(string) {
  let result = '';

  for (let index = string.length - 1; index >= 0; index -= 1) {
    result += string[index];
  }

  return result;
}

function lastIndexOf(subjectString, comparatorString) {
  let reverseSubject = reverseWord(subjectString);
  let reverseComparator = reverseWord(comparatorString);
  let reverseIndex = indexOf(reverseSubject, reverseComparator);

  if (reverseIndex !== -1) {
    return subjectString.length - (comparatorString.length) - reverseIndex;
  } else {
    return -1;
  }
}

