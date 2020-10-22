const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
    array2[i] = array2[i].toUpperCase();
  }
}

console.log(array2);

/* array2 will still point to array1 old values because the
 * array1 values are string primitives which can only be reassigned
 * and is not mutable.
 */
