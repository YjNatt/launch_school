(function() {
  function findObjs(element, props, multiple) {
    let match = multiple ? [] : undefined;

    element.some(obj => {
      let allMatch = true;

      for (let prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  }

  const _ = function(element) {
    const u = {
      first() {
        return element[0];
      },
      last() {
        return element[element.length - 1];
      },
      without(...args) {
        let newArr = [];
        
        element.forEach(el => {
          if (!args.includes(el)) {
            newArr.push(el);
          }
        });

        return newArr;
      },
      lastIndexOf(search) {
        let foundIndex = -1;
        for (let index = element.length - 1; index >= 0; index -= 1) {
          if (element[index] === search) {
            foundIndex = index;
            break;
          }
        }

        return foundIndex;
      },
      sample(quantity) {
        function get() {
          let index = Math.floor(Math.random() * copy.length);
          return copy.splice(index, 1)[0];
        };

        let sampled = [];
        let copy = [...element];

        if(!quantity) {
          return get();
        }

        while(quantity) {
          sampled.push(get());
          quantity -= 1;
        }

        return sampled;
      },
      findWhere(props) {
        return findObjs(element, props, false);
      },
      where(props) {
        return findObjs(element, props, true);
      },
      pluck(query) {
        return element.reduce((values, obj) => {
          if (obj.hasOwnProperty(query)) {
            values.push(obj[query]);
          }

          return values;
        }, []);
      },
      keys() {
        let keys = [];

        for (let prop in element) {
          keys.push(prop);
        }

        return keys;
      },
      values() {
        let values = [];

        for (let prop in element) {
          values.push(element[prop]);
        }

        return values;
      },
      pick(...args) {
        return args.reduce((obj, prop) => {
          if (prop in element) {
            obj[prop] = element[prop];
          }
          return obj;
        }, {});
      },
      omit(...args) {
        let newObj = {};

        for (let prop in element) {
          if (!args.includes(prop)) {
            newObj[prop] = element[prop];
          }
        }

        return newObj;
      },
      has(prop) {
        return {}.hasOwnProperty.call(element, prop);
      },
    };

    (['isElement', 'isArray', 'isObject', 'isFunction',
      'isBoolean', 'isNumber', 'isString']).forEach(method => {
      u[method] = function() { _[method].call(u, element) };
    });

    return u;
  };

  _.range = function(start, stop) {
    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    let range = [];
    for (let index = start; index < stop; index += 1) {
      range.push(index);
    };

    return range;
  };

  _.extend = function(...args) {
    let oldObj = args.pop();
    let newObj = args[args.length - 1];

    for (let prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }

    return args.length === 1 ? newObj : _.extend.apply(null, args);
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  _.isObject = function(obj) {
    const type = typeof obj;

    return type === 'function' || type === 'object' && !!obj;
  };

  _.isFunction = function(obj) {
    const type = typeof obj;

    return type === 'function';
  };

  (['Boolean', 'String', 'Number']).forEach(method => {
    _['is' + method] = function(obj) {
      return toString.call(obj) === '[object ' + method + ']';
    };
  });

  window._ = _;
})();
