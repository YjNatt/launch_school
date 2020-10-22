const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);              // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length);              // 3
console.log(Object.keys(array).length); // 5

// The array length property returns the highest integer index + 1
// An index can only be a non-negative integer which is why on line 3
// and 7 the key value pairs are saved as properties but not as elements
// in the array.
