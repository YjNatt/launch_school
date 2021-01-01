function makeList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    clear() {
      items = [];
      console.log('All Items deleted!');
    },

    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      if (index -= 1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
  };
}
