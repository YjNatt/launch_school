/* input: string
 * output: new string
 * rules: reverse string
 * algorithm:
 * split string into an array
 * reverse array
 * join string together
 */

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
