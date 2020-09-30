const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // logs: Hello; because myBoolean references the boolean true.
}

if (!myString) {
  console.log('World'); // Doesn't work although myString refences a truthy value the ! operation is used to coerce to a
}                       // falsy value

if (!!myArray) {
  console.log('World'); // logs: World; because myArray refences an object with is truthy and we use the double !! operation
}                       // to get a boolean value.

if (myOtherString || myArray) {
  console.log('!'); // logs: ! because myArray refences an object with has a truthy value
}
