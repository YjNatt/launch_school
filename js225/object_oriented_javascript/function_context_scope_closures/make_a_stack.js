function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop(value) {
      return stack.pop();
    },

    printStack() {
      stack.forEach(value => console.log(value));
    },
  };
}
