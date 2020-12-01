/* input: string (email)
 * output: boolean
 * rules: - check if string is a valid email
 *        - Valid email address has 2 parts separated by @:
 *          - local part
 *          - domain part
 *        - only one @ sign
 *        - local part can only contain letters and/or digits
 *          - no other characters
 *        - domain part must contain two or more components with a 
 *          single dot
 * algorithm:
 * split the string into a 2 element array
 * - first element is the local part
 * - second element is the domain part
 *
 * check if local part is valid
 * - only contains letters and/or digits
 * 
 * check if domain part is valid
 * - contain two or more components with a single dot
 *
 * if domain and local part is valid return true else false
 */

let isValidEmail = function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i);
};

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
