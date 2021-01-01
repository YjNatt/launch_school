// 1.
function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

// 2.
function makeSubN(n) {
  return function (a) {
    return subtract(a, n);
  };
}

// 3.
function multiply(a, b) {
  return a* b;
}

function makePartialFunc(func, b) {
  return function (a) {
    return func(a, b);
  }
}

// 4.
// The anonymous function returned by makePartialFunc retains access to
// func and b because of its closure. When a new function is created, it retains
// access to all of the references visible to it in the lexical location of its creation.

// 5.

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
