(function() {
  function objectsHaveSameProperties(obj, comparedObj) {
    let keys = Object.keys(comparedObj);

    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
      let key = keys[keyIndex];

      if (!obj.hasOwnProperty(key) || obj[key] !== comparedObj[key]) {
        return false;
      }
    }

    return true;
  }

  let _ = function(element) {
    u = {
      first() {
        if (!Array.isArray(element)) {
          return 'Invalid method';
        }

        return element.length > 0 === undefined ? null : element[0];
      },

      last() {
        if (!Array.isArray(element)) {
          return 'Invalid method';
        }

        let length = element.length;
        return length > 0 ? element[length - 1] : null;
      },

      without(...values) {
        if (!Array.isArray(element)) {
          return 'Calling object must be an array';
        }

        return element.filter(value => !values.includes(value));
      },

      lastIndexOf(value) {
        if (!Array.isArray(element)) {
          return 'Calling object must be an array';
        }

        for (let index = element.length -1; index >= 0; index -= 1) {
          if (element[index] === value) {
            return index; }
        }

        return null;
      },

      sample(quantity = 1) {
        if (element.length === 0) {
          return null;
        }

        let arrayCopy = [...element];
        let randomValues = [];

        if (quantity > 0) {
          while (randomValues.length < quantity) {
            let index = Math.floor(Math.random() * arrayCopy.length);
            randomValues.push(arrayCopy.splice(index, 1)[0]);
          }

          return quantity > 1 ? randomValues : randomValues.pop();
        } else {
          return 'Invalid Argument';
        }
      },

      findWhere(comparedObj) {
        return element.filter(obj => {
          return objectsHaveSameProperties(obj, comparedObj);
        })[0];
      },

      where(comparedObj) {
        return element.filter(obj => {
          return objectsHaveSameProperties(obj, comparedObj);
        });
      },

      pluck(key) {
        return element.filter(obj => obj.hasOwnProperty(key)).map(obj => obj[key]);
      },

      keys() {
        let keyList = [];

        for (key in element) {
          keyList.push(key);
        }

        return keyList;
      },

      values() {
        let valuesList = [];

        for (key in element) {
          valuesList.push(element[key]);
        }

        return valuesList;
      },

      pick(...properties) {
        return properties.reduce((obj, property) => {
          if (element.hasOwnProperty(property)) {
            obj[property] = element[property];
          }

          return obj;
        }, {});
      },

      omit(...properties) {
        let obj = {};

        for (let prop in element) {
          if (!properties.includes(prop)) {
            obj[prop] = element[prop];
          }
        }

        return obj;
      },

      has(prop) {
        return Object.prototype.hasOwnProperty.call(element, prop);
      },
    };

    ['isArray'].forEach(method => {
      u[method] = function() {
        return _[method].call(u, element);
      };
    });

    return u;
  };

  _.isArray = function(obj) {
    return toString.call(obj) === '[object Array]';
  }

  _.extend = function(...objects) {
    let obj1 = objects[0];

    for (let index = objects.length - 1; index > 0; index -= 1) {
      let obj2 = objects[index]

      for (let key in obj2) {
        obj1[key] = obj2[key];
      }
    }

    return obj1;
  };

  _.range = function(start, end) {
    function invalidArgs(arg1, arg2) {
      return !Number.isInteger(arg1) || (!Number.isInteger(arg2) && arg2 !== undefined);
    }

    if (invalidArgs(start, end)) {
      return 'Invalid arguments';
    }

    if (end === undefined) {
      end = start;
      start = 0;
    }

    let numbers = [];
    if (start < end) {
      for (let count = start; count < end; count += 1) {
        numbers.push(count);
      }
    } else {
      for (let count = start; count > end; count -= 1) {
        numbers.push(count);
      }
    }

    return numbers;
  };

  window._ = _;
})();
