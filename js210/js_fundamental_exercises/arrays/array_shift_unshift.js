function shift(arr) {
  if (arr.length === 0) return undefined;

  let shiftedValue = arr[0];

  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }

  arr.length = arr.length - 1;
  
  return shiftedValue;
}

function unshift(arr, ...values) {
  values = values.flat();

  for (let valueIndex = 0; valueIndex < values.length; valueIndex += 1) {
    for (let index = arr.length; index > 0; index -= 1) {
      arr[index] = arr[index - 1];
    }
    arr[0] = values[valueIndex];
  }

  return arr.length;
}


// function shift(arr) {
//   if (arr.length === 0) return undefined;
//   return arr.splice(0, 1)[0];
// }


// function unshift(arr, ...values) {
//   for (let index = 0; index < values.length; index += 1) {
//     arr.splice(index, 0, values[index]);
//   }
// 
//   return arr.length;
// }

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
