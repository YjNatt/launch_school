/* input:
 *   - Phone number
 *   - string
 *   - contains digits
 *   - special characters should be ignore(spaces, dash, dot, parentheses)
 *
 * output:
 *   - Phone number only containing digits
 *   - String
 *
 * rules:
 *   - Good phone numbers:
 *     - If a phone number is 10 digits.
 *     - If a phone number is 11 digits and the first number is 1,
 *       trim the 1 and use last 10 digits
 *   - Bad phone numbers:
 *     - If a phone number is less than 10 digits
 *     - If a phone number is 11 digits and the first number is not 1
 *     - If a phone number is more than 11 digits
 *     - Return a string of ten 0's for bad numbers.
 *
 * questions:
 *   - What if the Phone number contains letters and
 *     other characters not mentioned?
 *   - What if the Phone number contains other data types?
 *   - What if the Phone number contains no arguments, or too many arguments?
 *
 * data structure:
 *   - String to check if input is valid and to clean up phone number
 *
 * algorithm:
 *   - Check if input is valid
 *     - if invalid return '0000000000'
 *   - Remove all special characters and assign to phoneNumber;
 *   - Check if phoneNumber length is 11
 *     - if True then slice off the first number
 *   - return phoneNumber
 */

const MIN_LENGTH = 10;
const MAX_LENGTH = 11;
const DEFAULT = '0'.repeat(10);

function validPhoneNumber(phoneNumber) {
  return phoneNumber.length === MIN_LENGTH ||
  (phoneNumber.length === MAX_LENGTH && phoneNumber[0] === '1');
}

function cleanPhoneNumber(phoneNumber) {
  let cleanedPhoneNumber = phoneNumber.replace(/[\D]/g, '');
  let length = cleanedPhoneNumber.length;

  if (!validPhoneNumber(cleanedPhoneNumber)) {
    return DEFAULT;
  } else if (length === MAX_LENGTH) {
    return cleanedPhoneNumber.slice(1);
  } else {
    return cleanedPhoneNumber;
  }
}

// Test cases
console.log(cleanPhoneNumber('123-456-7890'));      // '1234567890'
console.log(cleanPhoneNumber('(123) 456 7890'));    // '1234567890'
console.log(cleanPhoneNumber('1 (123) 456 7890'));  // '1234567890'
console.log(cleanPhoneNumber('123.456.7890'));      // '1234567890'
console.log(cleanPhoneNumber('1123.456.7890'));     // '1234567890'
console.log(cleanPhoneNumber('123abc456-7890'));    // '1234567890'
console.log(cleanPhoneNumber('(123) 123-123'));     // '0000000000'
console.log(cleanPhoneNumber('2 (123) 123-1234'));  // '0000000000'
console.log(cleanPhoneNumber('1 (123) 123-12345')); // '0000000000'
