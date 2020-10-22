function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// On line 2 we are returning the value with the key '-2' which is undefined
// A working solution would be the following.
// function penultimate(string) {
//   let words = string.split(' ');
//   return words[words.length - 2];
// }
