// 1.
// 2 - On line 13
// 2 - On line 15
// 2 - On line 16
// 2 - On line 19
// 2 - On line 20
// 2 - On line 22  

// 2.
// NaN
// NaN
// The width property and height property of `this` on lines 3 and 6
// refer to the current object RECTANGLE however since the current context
// does not have a property of height and width the value returned is undefined
// therefore undefined * undefined is NaN
//
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

// 3.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

// 4.
// true, because the swingSword method is defined on the prototype chain
// associated to the object assigned to ninja

// 5.
// An error is raised because the function Ninja's prototype property is
// reassigned to a completely new object which is not referenced by the object
// referenced by ninja's prototype property

// 6.
function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

// 7.

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

// 8.

let shape = {
  getType() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

Triangle.prototype.constructor = Triangle;

// 9.
function User(first, last) {
  if (!(this instanceof User)) return new User(first, last);
  this.name = first + ' ' + last;
}

// 10.
function createObject(obj) {
  function TempConstructor() {};
  TempConstructor.prototype = obj;
  return new TempConstructor();
}

// 11.
Object.prototype.begetObject = function() {
  function TempConstructor() {};
  TempConstructor.prototype = this;
  return new TempConstructor();
};

// 12.
function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype);
  constructor.apply(newObj, args);
  return newObj;
}
