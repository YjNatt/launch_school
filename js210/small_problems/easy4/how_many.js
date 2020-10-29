let countOccurrences = function countOccurrences(array) {
  let elementToCount = {};

  array.forEach((element) => {
    elementToCount[element] = elementToCount[element] || 0;
    elementToCount[element] += 1;
  });

  Object.keys(elementToCount).forEach((element) => {
    console.log(`${element} => ${elementToCount[element]}`);
  });
};

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
