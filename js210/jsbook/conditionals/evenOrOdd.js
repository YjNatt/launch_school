function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Please enter an integer');
    return
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5);
evenOrOdd(8);
evenOrOdd(89);
evenOrOdd('1');
