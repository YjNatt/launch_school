/*
 *  input:
 *    - 2 objects
 *
 *  output:
 *    - boolean
 *
 *  rules:
 *    - if both objects have the same value return true
 *    - if one object have more properties than the other object return false
 *
 *  algorithm:
 *    - get keys from first object and assign to keys1
 *    - get keys from second object and assign to keys2
 *
 *    - iterate through keys1
 *      - if currentKey is not included in keys2 return false
 *
 *    - iterate through keys2
 *      - if currentKey is not included in keys1 return false
 *
 *    - iterate through keys1
 *      - object1 property of current key is !== to object2 property of current key
 *        - return false
 *
 *    return true;
 */

function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  for (let index = 0; index < keys1.length; index += 1) {
    if (!keys2.includes(keys1[index])) return false;
  }

  for (let index = 0; index < keys2.length; index += 1) {
    if (!keys1.includes(keys2[index])) return false;
  }

  for (let index = 0; index < keys1.length; index += 1) {
    if (obj1[keys1[index]] !== obj2[keys2[index]]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
