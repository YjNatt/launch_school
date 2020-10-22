const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray)); // 10

/* The function average won't work since
 * we are accessing 4 properties of the array in
 * the for loop however to get the average we must
 * also divide the sum by 4. 'array.lenght' returns
 * the length of the indexes which are non-negative integers
 * which is 2. Thus we get the wrong answer.
 */
