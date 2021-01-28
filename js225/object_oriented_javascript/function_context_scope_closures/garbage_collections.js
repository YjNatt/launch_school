function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
// more code
// No, because the anonymous function's closure returned by makeCounter
// contains a reference to count. As long as the function counter
// exists it needs to have access to that variable, so JavaScript cannot garbage
// collet the value assigned to count
