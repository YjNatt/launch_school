let generatePattern = function (nStars) {
  let strLength = nStars;

  if (strLength > 9) {
    strLength = (strLength - 9) * 2 + 9;
  }

  for (let number = 1; number <= nStars; number += 1) {
    let result = '';

    for (let nDigits = 1; nDigits <= number; nDigits += 1) {
      result += String(nDigits);
    }

    while (result.length < strLength) {
      result += '*';
    }

    console.log(result);
  }
};

generatePattern(20);
