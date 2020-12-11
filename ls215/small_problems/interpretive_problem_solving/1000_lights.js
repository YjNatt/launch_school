/*
 *  input:
 *  - number: total number of switches
 *  
 *  output:
 *  - array of numbers
 *  - numbers represents how many lights are still on
 *
 *  rules:
 *  - a list of switches labled from 1 to n
 *    - each switch default is off
 *
 *  - loop through the switches n times
 *    - Each iteration you toggle each switch that is a multiple
 *      of each iterations.
 *    - example: first iteration, each light is toggled
 *               second iteration, every 2nd light is toggled
 *               third iteration, every 3rd light is toggled
 *
 *   - return an array of numbers indicating what light is still on
 *     after after finish iterating
 *
 *  questions:
 *  - what if the input is 0 or negative?
 *  - what if the input is infinity or NaN?
 *  - what if the input is a different type? String? Undefined? Null?
 *
 *  data structure:
 *  Object
 *    - each key is a number, each value is a boolean indicating which lights are on
 *    - get values for all objects easily
 *
 *  Array
 *    - easy to iterate with forEach
 *
 *  Algorithm
 *
 *  - initialize an array of false booleans and assign to lights
 *    - Use a loop to push false booleans into the array, numberOfSwitches times
 *
 *  - loop numberOfSwitches times
 *  - within the loop
 *    - use a for loop to keep track of the current lights index and increment
 *      by the number of the current iteration, start at the number of the current iteration
 *      - reassign each element to the opposite boolean of its current value
 *
 *  - reduce lights to only keep the index + 1 of all lights that are true
 *  - and return the reduced return value.
 */

function lightsOn(numberOfSwitches) {
  let lights = Array(Math.abs(numberOfSwitches)).fill(false);

  for (let currentPass = 1; currentPass <= numberOfSwitches; currentPass += 1) {
    for (let index = currentPass - 1; index < numberOfSwitches; index += currentPass) {
      lights[index] = !lights[index];
    }
  }

  return lights.reduce((lightsOn, isOn, index) => {
    if (isOn) {
      lightsOn.push(index + 1);
    }

    return lightsOn;
  }, []);
}

// Generic cases
console.log(lightsOn(1)); // [1]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Edge cases
console.log(lightsOn(0)); // []
console.log(lightsOn(-1)); // []
