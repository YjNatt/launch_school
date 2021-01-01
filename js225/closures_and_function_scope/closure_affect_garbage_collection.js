// 1.
let a = 'abc';

function add(b) {
  a += b;
  // 'abc' is garbage collected as soon as we reassign
  // it with a new value 'abcxyz'
}
// the value assigned to 'b' is a copy of the value 'xyz'
// therefore right after the function add finishes running
// we can garbage collect the value assigned to 'b'

function run() {
  let c = add('xyz');
  // the value of c is eligible for garbage collection when the function run finishes
}

run();
// the value of 'abcxyz' assigned to `a` is eligible
// after the program finishes executing.

// 2.
function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}

let helloSteve = makeHello("Steve");
// the string 'Steve' is eligible for garbage collection after the program
// finishes executing. After JavaScript garbage collects the function reference by
// `helloSteve`
