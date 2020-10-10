/* function isLeapYear
 * input: integer (year),
 * output: boolean;
 * rules: - if year is less than 1752
 *          - if divisible by 4 return true
 *        - if year is greater than or equal to 1752
 *          - return true if year is divisible by 400 
 *          - return false if year is divisible by 100 
 *          - return true if year is divisible by 4 
 *          - else return false
 * algorithm:
 * if year is less than 1752
 *  return if year is divisible by 4
 * else
 *  pass year to gregorian leap year function and return the value
 *    - if year is divisible by 400 or if year is divisible by 4 and not divisible by 100
 */

let isGregorianLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
let isLeapYear = (year) => year >= 1752 ? isGregorianLeapYear(year) : (year % 4 === 0);

console.log(isLeapYear(2016) == true);
console.log(isLeapYear(2015) == false);
console.log(isLeapYear(2100) == false);
console.log(isLeapYear(2400) == true);
console.log(isLeapYear(240000) == true);
console.log(isLeapYear(240001) == false);
console.log(isLeapYear(2000) == true);
console.log(isLeapYear(1900) == false);
console.log(isLeapYear(1752) == true);
console.log(isLeapYear(1700) == true);
console.log(isLeapYear(1) == false);
console.log(isLeapYear(100) == true);
console.log(isLeapYear(400) == true);
