function objectHasProperty(obj, key) {
  objKeys = Object.keys(obj);
  return objKeys.includes(key);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
