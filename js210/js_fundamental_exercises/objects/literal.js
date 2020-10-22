const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// Line 9 there is no variable defined for `a`
// The expression `myObject[a]` raises a `ReferenceError`
