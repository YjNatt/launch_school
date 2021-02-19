// Array methods
console.log('Array first method');
console.log(_([1,2,3,4]).first()); // 1
console.log(_([]).first());        // null
console.log(_({}).first());        // invalid method
console.log('');


console.log('Array last method');
console.log(_([1,2,3,4]).last()); // 4
console.log(_([]).last());        // null
console.log(_({}).last());        // invalid method
console.log('');


console.log('Array without method');
console.log(_([1,2,3,4]).without(4));    // [1, 2, 3]
console.log(_([1,2,3,4]).without(1, 3)); // [2, 4]
console.log(_([1,2,3,'4']).without(4));  // [1, 2, 3, '4']
console.log(_([4,2,3,4]).without(4));    // [2, 3]
console.log(_([1,2,3]).without(4));      // [1, 2, 3]
console.log(_([]).without(4));           // []
console.log(_({}).without());            // 'Calling object must be an array'
console.log('');

console.log('Range method');
console.log(_.range(5));       // [0, 1, 2, 3, 4]
console.log(_.range(5, 10));   // [5, 6, 7, 8, 9]
console.log(_.range(-5));      // [0, -1, -2, -3, -4]
console.log(_.range(-5, -10)); // [-5, -6, -7, -8, -9]
console.log(_.range(3, -3));   // [3, 2, 1, 0, -1, -2]
console.log(_.range(3, '3'));  // 'Invalid arguments'
console.log(_.range());        // 'Invalid arguments'
console.log('');

console.log('Array lastIndexOf method');
console.log(_([1,2,3,4]).lastIndexOf(4));     // 3
console.log(_([4,2,3,4]).lastIndexOf(4));     // 3
console.log(_([4,2,3,4]).lastIndexOf(5));     // null 
console.log(_([]).lastIndexOf(4));            // null
console.log('');

console.log('Array sample method');
console.log(_([1,2,3,4,5]).sample());   // random value
console.log(_([1,2,3,4,5]).sample(3));  // [random value, random value, random value]
console.log(_([1,2,3,4,5]).sample(0));  // 'Invalid argument'
console.log(_([]).sample());            // null
console.log('');

// Object methods
console.log('Object findWhere method');
console.log(_([{a: 1}, {b: 2}, {c: 3}]).findWhere({b: 2}));                     // {b: 2}
console.log(_([{a: 1}, {b: 2}, {b: 2, c: 3}, {d: 4}]).findWhere({b: 2}));       // {b: 2}
console.log(_([{a: 1}, {b: 2, c: 3}, {b: 2}, {d: 4}]).findWhere({b: 2}));       // {b: 2, c: 3}
console.log(_([{a: 1}, {b: 2}, {b: 2, c: 3}, {d: 4}]).findWhere({b: 2, c: 3})); // {b: 2, c: 3}
console.log(_([{a: 1}, {b: 2}, {b: 2, c: 3}, {d: 4}]).findWhere({b: 4}));       // undefined
console.log(_([{a: 1}, {b: 2}, {b: 2, c: 3}, {d: 4}]).findWhere({}));           // {a: 1}
console.log('');

console.log('Object where method');
console.log(_([{a: 1}, {a: 1, b: 2}, {c: 3}, {d: 4, a: 1}]).where({a: 1}));       // [{a: 1}, {a: 1, b: 2}, {d: 4, a:1}]
console.log(_([{a: 1}, {a: 1, b: 2}, {c: 3}, {d: 4, a: 1}]).where({a: 1, d: 4})); // [{d: 4, a:1}]
console.log(_([{a: 1}, {a: 1, b: 2}, {c: 3}, {d: 4, a: 1}]).where({a: 2}));       // []
console.log('');

console.log('Object pluck method');
console.log(_([{a: 1}, {a: 2}, {c: 1}, {d: 4, a: 3}]).pluck('a'));         // [1, 2, 3]
console.log(_([{a: 1}, {a: 2}, {c: 1}, {d: 4, a: undefined}]).pluck('a')); // [1, 2, undefined]
console.log(_([{a: 1}, {a: 2}, {c: 1}, {d: 4, a: 3}]).pluck('noMatches')); // []
console.log('');

console.log('Object keys method');
console.log(_({a: 1, b: 2, c: undefined}).keys()); // ['a', 'b', 'c']
console.log(_({}).keys());                         // [];
console.log('');

console.log('Object values method');
console.log(_({a: 1, b: 2, c: undefined}).values()); // [1, 2, undefined]
console.log(_({}).values());                         // []
console.log('');

console.log('Object extend method');
let obj1 = {a: 1}
console.log(_.extend(obj1, {b:2, c:3}, {d:4}) === obj1); 
console.log(obj1);
console.log(_.extend({a: 1}, {a: 2})); // {a: 2}
console.log('');

console.log('Object pick method');
obj1 = {a: 1};
console.log(_(obj1).pick('a', 'b') === obj1);
console.log(_(obj1).pick('a', 'b'));
console.log('');

console.log('Object omit method');
console.log(_({a: 1, b: 2, c: 3, d: 4}).omit('a'));           // {b: 2, c: 3, d: 4}
console.log(_({a: 1, b: 2, c: 3, d: 4}).omit('a', 'b', 'e')); // {c: 3, d: 4}
console.log(_({}).omit('a'));                                 // {}
console.log('');

console.log('Object has method');
console.log(_({a: 1, b: 2}).has('a')); // true
console.log(_({a: 1, b: 2}).has('c')); // false
console.log(_({}).has(''));            // false
console.log('');

// Utility methods
console.log('Utility isArray method');
console.log(_.isArray([])); // true
console.log(_([]).isArray()); // true
console.log(_(1).isArray());  // false
console.log(_.isArray('')); // false
console.log('');
