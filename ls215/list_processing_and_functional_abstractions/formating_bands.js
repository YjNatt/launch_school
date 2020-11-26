/* input: array of objects
 * output: new array of objects
 * rules: - each object should hav a country set to Canada
 *        - The band names should have all words capitalized
 *        - Remove all dots from band names
 *
 * algorithm:
 * declare newBands variable and initilize it to an empty array
 * iterate through each band in the argument
 *   - declare band and initialize an empty object
 *     format name of current band and set property to new band
 *     set country Canana to new band
 *     set active to current band active property
 *   - push band to newbands
 */

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeString(word) {
  let firstLetter = word.slice(0, 1).toUpperCase();
  let rest = word.slice(1, word.length);
  return firstLetter + rest;
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function removeDotsInString(string) {
  return string.replace(/[.]/g, '');
}

function processBands(data) {
  return data.map( band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
