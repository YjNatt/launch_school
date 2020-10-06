const readlineSync = require('readline-sync');
const PASSWORD = 'password';
const MAX_ATTEMPTS = 3;
let attempts = 0;

do {
  var guess = readlineSync.question('What is the password? ');
  
  if (guess === PASSWORD) break;

  attempts += 1;
} while (attempts < MAX_ATTEMPTS);

let message = attempts === MAX_ATTEMPTS ? 'You have been denied access.' : 'you have successfully logged in.';

console.log(message);
