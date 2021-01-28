console.log('last, returns last element in array: ', _([1, 2, 3, 4]).last() === 4);
console.log('first, returns first element in array: ', _([1, 2, 3, 4]).first() === 1);
console.log('without, returns a new array that does not contain the value passed to it: ',
  _([1, 2, 3, 4]).without(2)); // [1, 3, 4]
console.log('without, returns a new array that does not contain the value passed to it: ',
  _([1, 2, 3, 4]).without(5)); // [1, 2, 3, 4]
console.log('range, return an array of values', _.range(5));
console.log('range, return an array of values', _.range(5, 10));
console.log('lastIndexOf, returns the last index of the supplied value', _([1, 2, 3, 1]).lastIndexOf(1));
console.log('lastIndexOf, returns the last index of the supplied value', _([1, 2, 3, 1]).lastIndexOf(5));
console.log('sample, returns a single value from an array when no argument is supplied', _([1, 2, 3, 4]).sample());
console.log('sample, returns an array of multiple, non-repeated elements when a quantity is supplied', _([1, 2, 3, 4, 5, 6, 7, 8]).sample(3));
console.log('findWhere, return the first object with properties that match the argument object', _([{a: 1}, {b: 2, c: 3}, {b: 2}]).findWhere({b: 2}));
console.log('findWhere, return the first object with properties that match the argument object', _([{a: 1}, {b: 2, c: 3}, {b: 2}]).findWhere({b: 2, c: 3}));
console.log('findWhere, return the first object with properties that match the argument object', _([{a: 1}, {b: 2, c: 3}, {b: 2}]).findWhere({d: 5}));
console.log('where', _([{a: 1}, {b: 2}, {b: 2}, {a: 5}, {a: 1}]).where({a: 1}));
console.log('pluck', _([{a: 1}, {b: 2}, {b: 2}, {a: 5}, {a: 1}]).pluck('a'));
console.log('keys', _({a: 1, b: 2, c: 3}).keys());
console.log('values', _({a: 1, b: 2, c: 3}).values());
let obj = {a: 1};
console.log('extend', _.extend(obj, {b: 2}, {c: 3, d: 4}));
console.log('pick', _.pick({a: 1}, {b: 2, c: 3}));
console.log('omit', _({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}).omit(['b', 'd', 'f']));
console.log('has', _({a: 1, b: 2, c: 3}).has('b'));
console.log('has', _({a: 1, b: 2, c: 3}).has('d'));
console.log('isArray', _().isArray({}) === false);
console.log('isArray', _().isArray([]) === true);
console.log('isObject', _.isObject({}))
console.log('isObject', _.isObject([]))
console.log('isObject', _.isObject(isNaN))
console.log('isObject', !_.isObject(1))
