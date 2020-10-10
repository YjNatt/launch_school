/* function logInBox
 * input: string
 * output: string
 * rules: - log input in a "box"
 *          - horizontal characters are '+' and '-'
 *          - vertical characters are '|'
 *          - if input is empty still display box
 * algorith:
 * make top and bottom row
 *  - length of input multiply by '-' character then add corners
 *    - corners are '+-' or '-+' character
 * make middle row with text
 *  - concat walls with text
 * make blank rows
 *
 * log: toprow, blankrow, textrow, blankrow, bottomrow
 */

let makeSolidRow = function(length) {
  let row = '+-';

  for (let number = 1; number <= length; number += 1) {
    row += '-';
  }

  row += '-+';

  return row;
};


let makeBlankRow = function(length) {
  let row = '| ';

  for (let number = 1; number <= length; number += 1) {
    row += ' ';
  }

  row += ' |';

  return row;
};

let makeTextRow = function(text, size) {
  let textRows = [];
  let textRow = '';

  for (let index = 0; index < text.length; index += 1) {
    textRow += text[index];

    if (textRow.length === size) {
      textRows.push(textRow);
      textRow = ''
    }
  }

  if (textRow !== '') {
    while (textRow.length < size) {
      textRow += ' ';
    }

    textRows.push(textRow);
  }

  return `| ${textRows.join(' |\n| ')} |`
}

let logInBox = function(text, size) {
  size = size || text.length;

  let topRow = makeSolidRow(size);
  let bottomRow = makeSolidRow(size);
  let blankRow = makeBlankRow(size);
  let textRow = makeTextRow(text, size)

  console.log(topRow);
  console.log(blankRow);
  console.log(textRow);
  console.log(blankRow);
  console.log(bottomRow);
};

logInBox('To boldly go where no one has gone before.', 5);
logInBox('To boldly go where no one has gone before.');
