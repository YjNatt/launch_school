let readlineSync = require('readline-sync');

function calculateAreaInMeters() {
const SQMETERS_TO_SQFEET = 10.7639;
console.log('Enter the length of the room in meters:')
let length = parseFloat(readlineSync.prompt());

console.log('Enter the width of the room in meters:')
let width = parseFloat(readlineSync.prompt());

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`);
}

function calculateAreaInFeet() {
const SQFEET_TO_SQMETERS = 0.092903;
console.log('Enter the length of the room in feet:')
let length = parseFloat(readlineSync.prompt());

console.log('Enter the width of the room in feet:')
let width = parseFloat(readlineSync.prompt());

let areaInFeet = length * width;
let areaInMeters = areaInFeet * SQFEET_TO_SQMETERS;

console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters)`);
}

console.log('Feet(f) or Meters(m)');
let answer = readlineSync.prompt();

if (answer === 'f') {
  calculateAreaInFeet();
} else if (answer === 'm') {
  calculateAreaInMeters();
}
