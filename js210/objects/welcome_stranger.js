let greetings = function (names, description) {
  let fullName = names.join(' ');
  let title = description.title;
  let occupation = description.occupation;

  console.log(`Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`);
};

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
