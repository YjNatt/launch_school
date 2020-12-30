function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

/*
 *  Use `this` to reference an objects property from within the object.
 *  
 *  Further exploration:
 *  We are able to use the variable `name` without using `this` because the variable `name`
 *  is accessible from the function's closure.
 */
