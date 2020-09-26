let array1 = [1, 6, 3, 2]
let array2 = [-1, -6, -3, -2]
let array3 = [2, 2]

function displayLargestNum(numbers) {
  console.log(Math.max(...numbers));
}

displayLargestNum(array1);
displayLargestNum(array2);
displayLargestNum(array3);
