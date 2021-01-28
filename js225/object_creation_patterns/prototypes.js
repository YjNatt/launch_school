// 1.
let prot = {};

let foo = Object.create(prot);

// 2.
Object.getPrototypeOf(foo) === prot;

// 3.
prot.isPrototypeOf(foo);

// 4.
// true
// true
// Line 5 returns true because we instantiated the object assigned to foo
// with the object assigned to prot as its prototype.
//
// Line 6 returns true because of prototype chaining. Object.prototype is prots object prototype
// and prot is foo's object prototype.
