/*
 *  `this` implicit context is the global object.
 *  The global object does not have the property firstName or lastName
 *  undefined + undefined = NaN which explains the output.
 *
 *  Anywhere outside a function the keyword `this` is bound to the global object.
 */

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
