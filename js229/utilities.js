(function() {
  const _ = function(element) {
    function objectsHaveSamePropertes(obj1, obj2) {
      let properties1 = Object.getOwnPropertyNames(obj1)
      let properties2 = Object.getOwnPropertyNames(obj2)

      for(let index = 0; index < properties1.length; index += 1) {
        let property = properties1[index];

        if (!obj2.hasOwnProperty(property) || obj1[property] !== obj2[property]) {
          return false;
        }
      }

      return true;
    }

    const u = {
      last() {
        return element[element.length - 1];
      },

      first() {
        return element[0];
      },

      without(...values) {
        return element.filter(currentValue => !values.includes(currentValue));
      },


      lastIndexOf(value) {
        for (let index = element.length - 1; index >= 0; index -= 1) {
          if (element[index] === value) {
            return index;
          }
        }

        return -1;
      },

      sample(number) {
        let randomIndex = Math.floor((Math.random() * element.length))

        if (number === undefined) {
          return element[randomIndex];
        } else {
          let elementCopy = [...element];
          let values = [];
          while (values.length < number) {
            values.push(elementCopy.splice(randomIndex, 1)[0]);
            randomIndex = Math.floor((Math.random() * elementCopy.length))
          }
          return values;
        }
      },
      findWhere(object) {
        let returnedObject = undefined;
        for (let index = 0; index < element.length; index += 1) {
          let currentObject = element[index];

          if (objectsHaveSamePropertes(object, currentObject)) {
            returnedObject = currentObject;
            break;
          }
        }

        return returnedObject;
      },
      where(object) {
        let matches = [];

        element.forEach(obj => {
          if (objectsHaveSamePropertes(object, obj)) {
            matches.push(obj);
          }
        });

        return matches;
      },
      pluck(key) {
        return element.reduce((values, obj) => {
          if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
          }
          return values
        }, []);
      },
      keys() {
        return Object.keys(element);
      },
      values() {
        return Object.values(element);
      },
      pick(...propertyNames) {
        return propertyNames.reduce((obj, propName) => {
          if (element.hasOwnProperty(propName)) {
            obj[propName] = element[propName];
          }

          return obj;
        }, {});
      },
      omit(properties) {
        return Object.getOwnPropertyNames(element)
          .filter(prop => !properties.includes(prop))
          .reduce((obj, key) => {
            obj[key] = element[key];
            return obj;
          }, {});
      },
      has(property) {
        return Object.getOwnPropertyNames(element).includes(property);
      },
      isArray() {
        return _.isArray(element);
      },
      isObject() {
        return _.isObject(element);
      },
      isFunction() {
        return _.isFunction(element);
      },
      isString() {
        return _.isString(element);
      },
      isNumber() {
        return _.isNumber(element);
      },
      isBoolean() {
        return _.isBoolean(element);
      },
    };

    return u;
  };

  _.range = function(min, max) {
    if(max === undefined) {
      max = min;
      min = 0;
    }

    const numbers = [];
    for (let currentNum = min; currentNum < max; currentNum += 1) {
      numbers.push(currentNum);
    }
    return numbers;
  };

  _.extend = function(...objects) {
    let obj = objects.shift();

    return objects.reduceRight((obj, currentObj) => {
      let keys = Object.getOwnPropertyNames(currentObj);
      keys.forEach(key => obj[key] = currentObj[key]);
      return obj
    }, obj);
  };

  _.pick = function(...objects) {
    return objects.reduce((obj, currentObj) => {
      let keys = Object.getOwnPropertyNames(currentObj);
      keys.forEach(key => obj[key] = currentObj[key]);
      return obj;
    }, {});
  };

  _.isArray = function(value) {
    return value.constructor === Array;
  };

  _.isObject = function(value) {
    return Object.getPrototypeOf({}).isPrototypeOf(value);
  };

  _.isFunction = function(value) {
    return value.constructor === Function;
  };

  _.isBoolean = function(value) {
    return typeof value === Boolean || value.constructor === Boolean
  };

  _.isString = function(value) {
    return typeof value === String || value.constructor === String
  };

  _.isNumber = function(value) {
    return typeof value === Number || value.constructor === Number
  };

  window._ = _;
})();
