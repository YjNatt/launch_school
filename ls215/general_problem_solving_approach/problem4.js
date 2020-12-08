/*
 *  input:
 *  - String
 *    - digits
 *    - seperated by ','
 *    - ranges are shown by ':', '-', '..'
 *
 *  output:
 *  - Array
 *    - numbers
 *
 *  rules:
 *  - Short-hand range is when only the significant part of the next
 *    number is shown example: '4, 5, 4' --- > [4, 5, 14]
 *
 *  - Range are inclusive and start with the number on the left hand side of
 *    either ':', '-' or '..' and end with the number on the right hand side
 *    example: '4:8' ---> [4, 5, 6, 7, 8]
 *
 *  - Range can chain with the end of another range
 *
 *  - the start and end of the range can be a short hand number
 *
 *  questions:
 *  What if input is an empty string?
 *  What if input contains other characters such as spaces?
 *  What if the range ends with the same number is currently at?
 *  What if string ends with a range character?
 *
 *  data structure:
 *  - Array
 *    - output is an array
 *    - map to iterate and transform each digit
 *    - flatten a nested array to a single array
 *
 *  - String
 *    - regex
 *
 *  Algorithm
 *  Seperate string into an array assign to parts
 *    - numbers
 *    - if the numbers is part of a range include the range on the right hand number
 *
 *  assign an empty array to numbers;
 *
 *  Iterate each part of parts
 *    - if number does not include range
 *      - find the next highest number
 *      - push to numbers
 *
 *    - if number does include range
 *      - find the next highest number
 *      - find all numbers in range starting from last number in numbers to highest number
 *        inclusive
 *      - push all numbers to numbers
 *
 *   return numbers.
 */

function nextNumber(number, sigPart) {
  do {
    number += 1;
  } while (String(number).slice(-sigPart.length) !== sigPart);

  return number;
}

function rangeExpansion(num, endNum) {
  let numbers = [];

  for (let currentNum = num + 1; currentNum <= endNum; currentNum += 1) {
    numbers.push(currentNum);
  }

  return numbers;
}


function expandNumberString(numbersString) {
  let parts = numbersString.match(/([:-]?|[.]{2})\d+/g);
  let numbers = [];

  parts.forEach(part => {
    let lastNumber = numbers[numbers.length - 1] || 0;
    if (/[:.-]/.test(part)) {
      let sigPart = part.replace(/\D/g, '');
      let endRangeNumber = nextNumber(lastNumber, sigPart);

      rangeExpansion(lastNumber, endRangeNumber).forEach(number => {
        numbers.push(number);
      });

    } else {
      numbers.push(nextNumber(lastNumber, part));
    }
  });

  return numbers;
}

console.log(expandNumberString('1,3,7,2,4,1'));
console.log(expandNumberString('1..9'));
console.log(expandNumberString('1-3, 1-2'));
console.log(expandNumberString('1:5:2'));
console.log(expandNumberString('104-2'));
console.log(expandNumberString('104-02'));
console.log(expandNumberString('545,64:11'));
console.log(expandNumberString('1,1'));
