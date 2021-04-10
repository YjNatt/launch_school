//document.addEventListener('DOMContentLoaded', () => {
//  function createItemLi({name, quantity}) {
//    const li = document.createElement('li');
//    li.textContent = `${Number(quantity)} ${name}`;
//    return li;
//  }
//
//  const getValue = (selector) => document.querySelector(selector).value;
//  const form = document.querySelector('form');
//  const groceryUl = document.querySelector('#grocery-list');
//  const items = [];
//
//  form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const name = getValue('#name');
//    const quantity = Number(getValue('#quantity') || '1');
//    const item = {name, quantity};
//    items.push(item);
//    groceryUl.appendChild(createItemLi(item));
//    form.reset();
//  });
//});

(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      const listItem = document.createElement('li');
      listItem.textContent = `${quantity} ${name}`;

      this.list.append(listItem);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const myGroceryList = new GroceryList('#grocery-list');
    const getValueOf = (selector) => form.querySelector(selector).value;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = getValueOf('#name');
      const quantity = getValueOf('#quantity') || '1';

      myGroceryList.addItem(name, quantity);
      form.reset();
    });
  });
})();
