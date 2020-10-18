let incrementProperty = function(obj, key) {
  if (obj[key]) {
    obj[key] = obj[key] + 1
  } else {
    obj[key] = 1;
  }

  return obj[key];
};

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
