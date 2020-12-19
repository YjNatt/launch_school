const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift(); // delete todos[0]
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

// On line 17 we use the `delete` operator to delete a todo from an array.
//
// However `delete` only deletes the todo at the specified index and does not
// shift the elements down the indexes.
//
// To fix this we must delete todos properly from an array by using shift.
