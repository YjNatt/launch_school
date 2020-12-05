/*
 * input:
 * - 2 version numbers
 * - strings of digits
 * - digits are separated with dots
 *
 * output:
 * - if version1 greater than version2, return 1
 * - if version1 less than version2, return -1
 * - if version1 equal to version2, return 0
 * - if verision number contains characters other
 *   than digits and the dot (.) character, return null
 *
 * datastructure:
 * string - verify if version is valid
 * array  - to compare versions
 *
 * algorithm:
 * - check if both versions are valid
 *   - if not return null
 * - split strings using '.' as delimeter into an array of string digits
 * - iterate through both arrays and transform each digit to a number
 * - iterate through both arrays and compare the 2 numbers
 *   - if version1 is greater than version2
 *   - if version1 has no number and version2 does have number
 *     - return 1
 *   - if version1 is less than version2
 *   - if version2 has no number and version1 does have number
 *     - return -1
 * - return 0
 */

function validVersion(version) {
  return !/[^0-9.]/.test(version) &&
    /[0-9]$/.test(version) &&
    /^[0-9]/.test(version);
}

function compareNumbers(num1, num2) {
  if ((num2 === undefined) || (num1 > num2)) {
    return 1;
  } else if ((num1 === undefined) || (num1 < num2)) {
    return -1;
  } else {
    return 0;
  }
}

function compareVersions(version1, version2) {
  if (!validVersion(version1) || !validVersion(version2)) return null;

  let version1Numbers = version1.split('.').map(Number);
  let version2Numbers = version2.split('.').map(Number);
  let length;

  if (version1Numbers.length > version2Numbers.length) {
    length = version1Numbers.length;
  } else {
    length = version2Numbers.length;
  }

  for (let index = 0; index < length; index += 1) {
    let version1Number = version1Numbers[index];
    let version2Number = version2Numbers[index];

    if (compareNumbers(version1Number, version2Number) !== 0) {
      return compareNumbers(version1Number, version2Number);
    }
  }

  return 0;
}

console.log(compareVersions('0.1', '1')); // -1
console.log(compareVersions('0.1.2.3.4', '0.1.2.3.4')); // 0
console.log(compareVersions('0.2', '0.1')); // 1
console.log(compareVersions('1.2.0.0', '1.18.2')); // -1
console.log(compareVersions('1.18.2', '1.a')); // null
console.log(compareVersions('13.37', '1.18.2')); // 1
console.log(compareVersions('13.37', '13.37.1')); // -1
console.log(compareVersions('1.18.2', '1.2.')); // null
console.log(compareVersions('1.18.2', '.1.2')); // null
