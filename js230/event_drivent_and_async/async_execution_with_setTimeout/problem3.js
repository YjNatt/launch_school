setTimeout(() => {
  setTimeout(() => {
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(() => {
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(() => {
  s(); // 6
}, 20);

setTimeout(() => {
  f(); // 2
});

g(); // 1
