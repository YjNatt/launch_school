let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice(0);

// for (let index = 0; index < myArray.length; index += 1) {
//   myOtherArray.push(myArray[index]);
// }

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
