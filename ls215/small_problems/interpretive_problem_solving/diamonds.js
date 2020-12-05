/*
 * input: odd integer
 * output: four pinted diamond in a n x n grid
 * rules: - each row of the diamond increaments by 2 
 *          until the number of stars reaches n and then
 *          decrements by 2
 *        - starts at 1 star
 *        - log the diamond to the consol
 *        - input is always an odd integer
 *        - spaces on the left side of the diamond
 *          start at n / 2 - 1 and decreases by 1 until 0
 *          then back up to n / 2 - 1
 *
 * datastructure / algorithm
 * - create an array with 1 '*' called stars
 * - create an array with 1 ' ' called spaces
 * - add the appropiate amount of spaces in spaces
 * - while stars length is less than n
 *   - join the stars and spaces into one string and log to the screen
 *   - add 2 * to stars
 *   - delete 1 space from spaces
 *
 * - while stars length is greater than or equal to 1
 *   - join the stars and spaces into one string and log to the screen
 *   - delete 2 * from stars
 *   - add 1 space from spaces
 */

function createSpacesArray(numberOfSpaces) {
  let spaces = [];

  while (spaces.length < numberOfSpaces) {
    spaces.push(' ');
  }

  return spaces;
}

function diamond(numberOfStars) {
  let stars = ['*'];
  let spaces = createSpacesArray(Math.floor(numberOfStars / 2));

  while (stars.length < numberOfStars) {
    console.log(spaces.join('') + stars.join(''));
    stars.push('*');
    stars.push('*');
    spaces.pop();
  }

  while (stars.length >= 1) {
    console.log(spaces.join('') + stars.join(''));
    stars.pop();
    stars.pop();
    spaces.push(' ');
  }
}

diamond(1);
diamond(3);
diamond(9);
