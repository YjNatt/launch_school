let readlineSync = require('readline-sync');

let computeSum = (maxNumber) => {
  let sum = 0;

  for (let number = 1; number <= maxNumber; number += 1) {
    sum += number;
  }
}

let computeProduct = (maxNumber) => {
  let product = 1;

  for (let number = 1; number <= maxNumber; number += 1) {
    product *= number;
  }
}

let maxNumber = parseInt(readlineSync.question('Please enter an integer greater than 0: '), 10);
let choice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (choice === 's') {
  let sum = String(computeSum(maxNumber));
  console.log(`\nThe sum of the integers between 1 and ${String(maxNumber)} is ${sum}`);
} else if (choice === 'p') {
  let product = String(computeProduct(maxNumber));
  console.log(`\nThe product of the integers between 1 and ${String(maxNumber)} is ${product}`);
}
