const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

/* Object literal methods must be called by appending parentheses
 * in order to be executed. Referencing the function name without
 * the parentheses would return the function itself, not the return
 * value of the function.
 */
