let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();              
console.log(myArray);       // [ 1, 2, 3 ]
console.log(myOtherArray);  // [ 1, 2, 3 ]

myArray = [1, 2];
console.log(myArray);       // [ 1, 2 ]
console.log(myOtherArray);  // [ 1, 2, 3 ]

/* On line 2 we assign myOtherArray to reference the same
 * array as myArray.
 *
 * On line 4 we call the function pop on the calling object myArray.
 * Since pop mutates the caller myOtherArray is also mutated
 *
 * On line 8 we reassign myArray to point to a completely differend array
 * however reassignment does not mutate the caller which is why 
 * myOtherArray did not change.
 */
