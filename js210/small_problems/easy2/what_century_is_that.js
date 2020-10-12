/* function century
 * input: integer (year)
 * output: string (century)
 * rules: century should end with either:
 *          - st
 *          - nd
 *          - rd
 *          - th
 *        Centuries begin in years that end in 01
 *          - 1901 - 2000 is the 20th century
 *          - 1900 is the 19th century.
 * algorithm
 * find out what century the year is
 *   - year divided by 100
 *   - ceil the result
 * add the appropriate suffix
 *   - convert number to string
 *   - use switch statement
 *    - if last number is 1
 *      - concat 'st' with number
 *    - if last number is 2
 *      - concat 'nd' with number
 *    - if last number is 3
 *      - concat 'rd' with number
 *    - else
 *      - conat 'th' with number
 */

let century = function(year) {
  let whatCentury = String(Math.ceil(year / 100));
  let centuryEndingDigits = parseInt(whatCentury.substr(whatCentury.length - 2), 10);

  if (centuryEndingDigits >= 11 && centuryEndingDigits <= 13) {
    whatCentury += 'th';
  } else if (centuryEndingDigits % 10 === 1) {
    whatCentury += 'st';
  } else if (centuryEndingDigits % 10 === 2) {
    whatCentury += 'nd';
  } else if (centuryEndingDigits % 10 === 3) {
    whatCentury += 'rd';
  } else {
    whatCentury += 'st';
  }

  console.log(whatCentury);
};

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
