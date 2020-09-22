
function askName() {
  let rlSync = require('readline-sync');
  let firstName = rlSync.question('What is your first name? ');
  let lastName = rlSync.question('What is your last name?' );

  return firstName + ' ' + lastName;
}

let greetingMessage = 'Good Morning';

function greetPeople(fullName) {
  console.log(greetingMessage + ' ' + fullName);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

greetPeople(askName());
