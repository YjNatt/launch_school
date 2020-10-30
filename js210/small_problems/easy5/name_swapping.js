// function: swapName
// input: String
// ouput: String
// rules: input consists of a first name, space, last name
//        output consists of a last name, comma, space, first name
// Algorithm:
// split name by space and save the first name and last name to variables
//   firstName lastName
// return string lastName + ', ' + firstName

let swapName = function swapFirstNameWithLastName(fullName) {
  let names = fullName.split(' ');
  let firstNames = names.slice(0, names.length - 1);
  let lastName = names[names.length - 1];
  return lastName + ', ' + firstNames.join(' ');
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Yujohn Yujong John Nattrass'));
