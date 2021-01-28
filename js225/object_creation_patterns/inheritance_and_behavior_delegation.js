// 1.
// 1 will be logged to the console because JavaScript will first look
// for the property `a` on the object assigned to `bar` and since it can't
// find it, it will then look at the object's prototype which is the object
// assigned to `foo` which does have a property of `a` assigned to the value 1.

// 2.
// 2 will be logged to the console because JavaScript will first look at the calling object
// for the property before it looks at the object's prototype.

// 3.
// No because there could be a property created on `far` in the omitted code.
far.hasOwnProperty('myProp');
