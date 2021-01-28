// input: object
// output: array of strings
// rules:
//  - return the prototype chain of a calling object as array of object names
//  - each object has a property name
// ds: array
// algorithm:
//  - initialize objectNames to an empty array
//  - initilize currentObject to objects prototype
//  - while currentObject is not null
//    - push currentObject.name to object Names
//    - reassign currentObject to currentObjects prototype
//  - return objectNames

Object.prototype.ancestors = function ancestors() {
  const objectNames = [];
  let currentObject = Object.getPrototypeOf(this);

  while (currentObject !== null) {
    objectNames.push(currentObject.name || 'Object.prototype');
    currentObject = Object.getPrototypeOf(currentObject);
  }

  return objectNames;
};

// Object.prototype.ancestors = function ancestors() {
//   const objPrototype = Object.getPrototypeOf(this);
// 
//   if (Object.prototype.hasOwnProperty.call(objPrototype, 'name')) {
//     return [objPrototype.name].concat(objPrototype.ancestors());
//   }
// 
//   return ['Object.prototype'];
// };

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
