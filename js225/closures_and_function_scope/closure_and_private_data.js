// 1.
function makeCounterLogger(start) {
  return function(end) {
    let number = start;
    if (start > end) {
      for (; number >= end; number -= 1) {
        console.log(number);
      }
    } else {
      for (; number <= end; number += 1) {
        console.log(number);
      }
    }
  };
}

// 2.
/*
 *  input: nothing
 *  output: function
 *  rules:
 *    - when inner function is called with an argument that is not on the list
 *      - add argument to list
 *    - when inner function is called with an argument that is on the list
 *      - remove argument from list
 *    - when inner function is called without arguments,
 *      - if list is empty
 *        - log message 'List is empty'
 *      - else
 *        - log all the items in the list
 *
 *   algorithm
 *    - initialize list to empty array
 *    - initialize a function expression to accept 1 argument
 *    - if argument is provided
 *      - if argument is in list
 *        - remove argument from list
 *      - if argument is not in list
 *        - add argument
 *     - if argument is not provided
 *        - if list is empty log 'List is empty'
 *        - else iterate through list and for each item log to console.
 */

function makeList() {
  let list = [];
  return function(item) {
    if (item !== undefined) {
      let index = list.indexOf(item);

      if (index >= 0) {
        list.splice(index, 1);
        console.log(item + ' removed!');
      } else {
        list.push(item);
        console.log(item + ' added!');
      }
    } else {
      list.length === 0 ? console.log('List is empty') : list.forEach(item => console.log(item)); 
    }
  };
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
