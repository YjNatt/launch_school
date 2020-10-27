let copyNonDupsTo = function copyNonDupsTo(resultArray, array) {
  array.forEach((number) => {
    if (!resultArray.includes(number)) {
      resultArray.push(number);
    }
  });
};

let union = function union(...arrays) {
  let unionArray = [];
  arrays.forEach((array) => copyNonDupsTo(unionArray, array));
  return unionArray;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
