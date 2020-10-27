'use strict';
const readlineSync = require('readline-sync');
const numbers = [];

numbers.push(Number(readlineSync.question('Enter the 1st number: ')));
numbers.push(Number(readlineSync.question('Enter the 2nd number: ')));
numbers.push(Number(readlineSync.question('Enter the 3rd number: ')));
numbers.push(Number(readlineSync.question('Enter the 4th number: ')));
numbers.push(Number(readlineSync.question('Enter the 5th number: ')));

let lastNumber = Number(readlineSync.question('Enter the last number: '));

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}

// Further exploration
let greaterThan25 = (number) => number > 25;
console.log(numbers.some(greaterThan25));
