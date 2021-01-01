const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies());

// note that it is not possible to bind an arrow function to `this`, because the value
// of `this` is always determined lexically in arrow functions.
