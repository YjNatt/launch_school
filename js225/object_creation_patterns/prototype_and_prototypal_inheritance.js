// 1.
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
};

// 2.
function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(key => {
    copy[key] = object[key];
  });

  return copy;
}

// 3.
function extend(destination) {
  for (let index = 0; index < arguments.length; index += 1) {
    let object = arguments[index];

    for (let property in object) {
      if (Object.hasOwnProperty.call(object, property)) {
        destination[property] = object[property];
      }
    }
  }

  return destination;
}
