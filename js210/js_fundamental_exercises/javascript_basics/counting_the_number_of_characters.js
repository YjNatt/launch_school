const readlineSync = require('readline-sync');

var phrase = readlineSync.question('Please enter a phrase: ');
var length = phrase.replace(/[^a-z]/gi, '').length

console.log(`There are ${length} characters in "${phrase}".`);
