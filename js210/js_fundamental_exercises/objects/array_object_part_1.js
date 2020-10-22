const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // [ 'a', 'b', 'c', 'f', -1: 'd', e: 5 ]

/* Line 3 we log 'a' because we access the first index of myArray
 * 
 * Line 4 we log 'undefined' because there is no property with the
 * key '-1'.
 *
 * line 10 we log 'd' because on line 6 we assigned the string
 * 'd' to the key '-1'.
 *
 * Line 11 we log '5' because on line 7 we assigned the integer 5
 * to the key 'e'
 *
 * Line 12 we log the entire Array including all of the arrays properties.
 */
