let readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ');
let isScreaming = name.endsWith('!');

if (isScreaming) {
  name = name.replace('!', '');
  console.log(`Hello ${name}. Why are we screaming?`.toUpperCase());
} else {
  console.log(`Hello ${name}.`);
}
