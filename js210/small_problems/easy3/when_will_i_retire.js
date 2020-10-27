'use strict';
const readlineSync = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();
const age = Number(readlineSync.question('What is your age? '));
const retireBy = Number(readlineSync.question('At what age would you like to retire? '));

console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + retireBy}`);
console.log(`You have only ${retireBy - age} years of work to go!`);
