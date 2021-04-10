let inventory
(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate() {
      const date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
    },
    cacheTemplate() {
      const source = document.querySelector('#inventory_template');
      this.template = Handlebars.compile(source.innerHTML);
      source.remove();
    },
    add() {
      this.lastId += 1;
      const item = {
        id: this.lastId,
        name: '',
        stock_number: '',
        quantity: 1,
      };
      this.collection.push(item);

      return item;
    },
    remove(id) {
      const index = this.collection.findIndex(item => item.id === id);

      if (index >= 0) {
        this.collection.splice(index, 1);
      }
    },
    get(id) {
      return this.collection.find(item => item.id === id);
    },
    update(itemNode) {
      const id = this.findID(itemNode);
      const item = this.get(id);

      item.name = itemNode.querySelector('[name^="item_name"]').value;
      item.stock_number = itemNode.querySelector('[name^=item_stock_number]').value;
      item.quantity = itemNode.querySelector('[name^="item_quantity"]').value
    },
    newItem(event) {
      event.preventDefault;
      const item = this.add();
      const container = document.querySelector('#inventory > tbody') ||
                        document.querySelector('#inventory');

      container.insertAdjacentHTML('beforeend', this.template(item));
    },
    findParent(event) {
      return event.target.closest('tr');
    },
    findID(item) {
      return Number(item.querySelector('input[type="hidden"]').value)
    },
    deleteItem(event){
      event.preventDefault();
      if (event.target.classList.contains('delete')) {
        const item = this.findParent(event);
        this.remove(this.findID(item));
        item.remove();
      }
    },
    updateItem(event) {
      if (event.target.tagName === 'INPUT') {
        const item = this.findParent(event);
        this.update(item);
      }
    },
    bindEvents() {
      document.querySelector('#add_item').addEventListener('click', this.newItem.bind(this));
      document.querySelector('#inventory')
              .addEventListener('click', this.deleteItem.bind(this));
      document.querySelector('#inventory')
              .addEventListener('focusout', this.updateItem.bind(this));
    },
    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

document.addEventListener('DOMContentLoaded', event => inventory.init.bind(inventory)());
