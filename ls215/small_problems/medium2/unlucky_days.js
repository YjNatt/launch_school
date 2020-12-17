/*
 *  input:
 *    number representing 'year'
 *
 *  output:
 *    number
 *
 *  rules:
 *    - The year is greater than 1752
 *    - Return the number of times 'Friday the 13th' are in the input year
 *
 *  Data strucuter:
 *    Number to count the number of Friday the 13th's
 *
 *  Algorithm:
 *  - assign the number 5 to FRIDAY_DAY_OF_WEEK
 *  - initialize an array of months to months
 *  - iterate through months and transform to what day is the 13th of that month
 *    - initialize a date object:
 *      - year is the input year
 *      - day is 13
 *      - month is the current month
 *    - return the current day of the week for the date object
 *  - select only fridays through months and return the length.
 *    - if current day of the week is equal to FRIDAY_DAY_OF_WEEK return true
 */

function isFriday(year, month, day) {
  const FRIDAY_DAY_OF_WEEK = 5;

  let date = new Date(`${month} ${day}, ${year}`);
  return date.getDay() === FRIDAY_DAY_OF_WEEK;
}

function fridayThe13ths(year) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return months.reduce((count, month) => {
    return isFriday(year, month, 13) ? count + 1 : count; 
  }, 0);
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));
