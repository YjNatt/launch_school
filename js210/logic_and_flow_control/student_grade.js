let inputGrades = function() {
  const readlineSync = require('readline-sync');
  let count = 1;
  let grades = [];

  while(true) {
    let grade = Number(readlineSync.question('Enter score ' + count + ': '));

    if (isNaN(grade) || grade <= 0 || grade > 100) {
      break;
    } else {
      grades.push(grade);
    }

    count += 1;
  }

  return grades
}

let grades = inputGrades();
let average = (grades.reduce((sum, currentNumber) => sum + currentNumber)) / grades.length;
let letterGrade = 'F';

if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);

