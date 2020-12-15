/*
 *  input:
 *  - String of commands
 *
 *  output:
 *  - Log an integer to the console when the command is PRINT
 *  - Function returns undefined
 *
 *  rules:
 *  - Stack is an array of numbers which either performs a push or pop
 *  - Register is the current value and is seperate from the stack.
 *  - To perform an operation:
 *    - pop the most recently pushed value from the stack,
 *    - perform the operation with the current value in the register
 *    - the register is reassigned to the return value of the operation.
 *
 *  - All operations are integer operations (DIV may return a decimal number)
 *
 *  data structure:
 *    Array
 *
 *  Algorithm:
 *  Initialize an empty array and assign to stack.
 *  Assign 0 to register.
 *  Split the input into an array of tokens and assign to tokens.
 *
 *  Iterate through the tokens
 *  - if token is a number
 *    - reassign the register to the number
 *  - if the token is an operation
 *    - perform the appropriate operation
 *  - if the toke is PRINT
 *    - print the register
 */

function areAllValidTokens(tokens) {
  return tokens.every(token => {
    return /(PUSH|POP|PRINT|ADD|SUB|MULT|DIV|MOD)/.test(token) ||
      /-?\d+$/.test(token);
  });
}

function minilang(input) {
  let stack = [];
  let register = 0;
  let tokens = input.split(' ');

  tokens.forEach(token => {
    switch (token) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      default:
        register = Number(token);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MLT PRINT');
minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
