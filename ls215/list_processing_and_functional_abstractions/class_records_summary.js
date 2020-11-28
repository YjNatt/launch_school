'use strict';
function calculateSum(numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}

function calculatePercent(averageExamScore, exercisesTotalScore) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;

  let examPercentage = averageExamScore * EXAM_WEIGHT;
  let exercisePercentage = exercisesTotalScore * EXERCISE_WEIGHT;
  return Math.round(examPercentage + exercisePercentage);
}

function convertToLetterGrade(percentage) {
  if (percentage >= 93) {
    return 'A';
  } else if (percentage >= 85) {
    return 'B';
  } else if (percentage >= 77) {
    return 'C';
  } else if (percentage >= 69) {
    return 'D';
  } else if (percentage >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let averageExamScore = calculateAverage(scoreObj.exams);
  let exercisesTotalScore = calculateSum(scoreObj.exercises);
  let percentGrade = calculatePercent(averageExamScore, exercisesTotalScore);
  let letterGrade = convertToLetterGrade(percentGrade);

  return `${percentGrade} (${letterGrade})`;
}

function transposeArray(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function getExamSummary(examData) {
  let listOfExamScores = transposeArray(examData);
  return listOfExamScores.map(examScores => {
    return {
      average: calculateAverage(examScores),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    };
  });
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
