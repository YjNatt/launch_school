function copyObj(obj, keys) {
  let newObj = {};

  if (keys) {
    keys.forEach(function(key) {
      newObj[key] = obj[key]
    });

    return newObj;
  } else {
    return Object.assign(obj, newObj);
  }
};

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
