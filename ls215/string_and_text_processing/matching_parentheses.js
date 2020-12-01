let isBalanced = function areParenthesesBalanced(text) {
  let counter = 0;

  for (let index = 0; index < text.length; index += 1) {
    switch (text[index]) {
      case '(':
        counter += 1;
        break;
      case ')':
        counter -= 1;
        break;
    }

    if (counter < 0) return false;
  }

  return counter === 0;
};

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
