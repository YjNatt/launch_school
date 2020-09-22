let rlSync = require('readline-sync');
let getNumber1 = () => parseFloat(rlSync.question('Enter number one: '));
let getNumber2 = () => parseFloat(rlSync.question('Enter number two: '));
let multiply = (a, b) => a * b;

let num1 = getNumber1();
let num2 = getNumber2();

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

