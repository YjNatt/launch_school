//const classifications = document.querySelector('#animal-classifications');
//const animals         = document.querySelector('#animals');
//const clearBtn        = document.querySelector('#clear');
//const classificationsToAnimals = {
//  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
//  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
//  'Cold-blooded': ['Salmon', 'Turtle'],
//  'Mammal': ['Bear', 'Whale'],
//  'Bird': ['Ostrich'],
//};
//
//function displayAll(children) {
//  [...children].forEach(child => child.style.display = 'contents');
//}
//
//clearBtn.addEventListener('click', event => {
//  event.preventDefault();
//  animals.firstElementChild.selected = true;
//  classifications.firstElementChild.selected = true;
//  displayAll([...animals.children]);
//  displayAll([...classifications.children]);
//});
//
//classifications.addEventListener('change', event => {
//  displayAll([...animals.children]);
//  const classification = event.target.value;
//  const acceptableAnimals = classificationsToAnimals[classification];
//
//  [...animals.children].forEach(animal => {
//    if (!acceptableAnimals.includes(animal.value)) {
//      animal.style.display = 'none';
//    }
//  });
//});
//
//animals.addEventListener('change', event => {
//  displayAll([...classifications.children]);
//  const animal = event.target.value;
//  const acceptableClassifications = [];
//  
//  for (let classification in classificationsToAnimals) {
//    if (classificationsToAnimals[classification].includes(animal)) {
//      acceptableClassifications.push(classification);
//    }
//  }
//
//  [...classifications.children].forEach(classification => {
//    if (!acceptableClassifications.includes(classification.value)) {
//      classification.style.display = 'none';
//    }
//  });
//});

const linkedOptions = {
  classifications: {
    Vertebrate:      ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded':  ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded':  ['Salmon', 'Turtle'],
    Mammal:          ['Bear', 'Whale'],
    Bird:            ['Ostrich'],
    classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  },
  animals: {
    Bear:    ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle:  ['Vertebrate', 'Cold-blooded'],
    Whale:   ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon:  ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
    Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-Blooded', 'Mammal', 'Bird'],
  },
};

const animalClassifications = document.querySelector('#animal-classifications');
const animals = document.querySelector('#animals');
const clearFiltersBtn = document.querySelector('#clear');
let animalClassificationsValue;
let animalsValue;

function setOptions({options}, filters) {
  options.length = 0;
  filters.forEach((value, index) => {
    options[index] = new Option(value);
  });
}

function setDefault(event) {
  event.preventDefault();
  setOptions(animalClassifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-Blooded', 'Mammal', 'Bird']);
  setOptions(animals, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);
}

animalClassifications.addEventListener('change', event => {
  animalClassificationsValue = animalClassifications.options[animalClassifications.selectedIndex].value
  setOptions(animals, linkedOptions['classifications'][animalClassificationsValue]);
});

animals.addEventListener('change', event => {
  animalsValue= animal.options[animal.selectedIndex].value;
  setOptions(animalClassifications, linkedOptions['animals'][animalsValue]);
});

clearFiltersBtn.addEventListener('click', setDefault);
