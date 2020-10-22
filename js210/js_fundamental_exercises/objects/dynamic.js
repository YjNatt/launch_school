const myObject = {
prop1: '123',
prop2: '234',
'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

/* Line 11 will log 678 because on line 9 we
 * are assigning the value '678' to the key variable
 * 'prop2' is pointing too which is '456'.
 * Line 12 will log 456
 */

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/* 
 * The function `myFunc()` return value is the string 'funcProp'
 * which is used as a key to assign 'hello, ' on line 2
 *
 * Then is reassigned on line 9 to the string 'world!'
 */
