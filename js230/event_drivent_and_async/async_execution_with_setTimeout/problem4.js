function afterNSeconds(callback, time) {
  setTimeout(callback, time * 1000);
}

function greet() {
  console.log('Hello');
}

afterNSeconds(greet, 5);
