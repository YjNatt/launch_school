/* 
 * This implicit context within a function invocation refers to the global object
 */

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    const self = this;

    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

