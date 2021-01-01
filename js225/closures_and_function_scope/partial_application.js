// 1.
function greet(greeting, name) {
  let capitalizedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(capitalizedGreeting + ', ' + name + '!');
}

// 2.
function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  };
}


let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');
let sayBye = greet.bind(null, 'bye');

sayHello('Brandon');
sayHi('Sarah');
sayBye('John');
