const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

/* Logs: Bob Bob
 * reason: strings are immutable, so when we invoke toUpperCase(); on line 3
 * the return value is a completely new string object which is not saved to a variable
 * which is why name and saveName still reference the same object Bob */
