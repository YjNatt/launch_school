/* function getGrade
 * input: integer, integer, integer
 * output: String
 * rules: - determine the average of the three scores passed to it
 *        - return a letter associated with the grade
 * algorithm:
 * add all integers together
 * divide sum by 3
 * use if statement
 */

let getGrade = (score1, score2, score3) => {
  const score = (score1 + score2 + score3) / 3;

  let grade;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
