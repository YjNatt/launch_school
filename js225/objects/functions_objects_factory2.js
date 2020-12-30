function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      return this.name + ' is located in ' + this.continent + '. I ' +
        (this.visited ? 'have' : "haven't") +
        ' visited ' + this.name + '.';
    },
  };
};


