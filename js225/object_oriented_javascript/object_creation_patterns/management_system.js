const ItemCreator = function() {
  function createSKUCode(name, category) {
    let namePart = name.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase();
    let categoryPart = category.slice(0, 2).toUpperCase();

    return namePart + categoryPart;
  }

  function isNameValid(itemName) {
    return itemName.replace(/[^a-z]/gi, '').length >= 5;
  }

  function isCategoryValid(category) {
    return category.split(/\s/).length === 1 && category.length >= 5;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }

  return function(itemName, category, quantity) {
    if (isNameValid(itemName) && isCategoryValid(category) && isQuantityProvided(quantity)) {
      this.SKU = createSKUCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
}();
const ItemManager = function() {

  return {
    items: [],

    create(itemName, category, quantity) {
      const item = new ItemCreator(itemName, category, quantity);
      if (item.notValid) {
        return false;
      } else {
        this.items.push(item);
      }
    },

    update(SKUCode, updates) {
      const item = this.getItemBySKU(SKUCode);
      Object.assign(item, updates);
    },

    delete(SKUCode) {
      const index = this.items.findIndex(item => item.SKU === SKUCode);
      this.items.splice(index, 1);
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    },

    getItemBySKU(SKUCode) {
      return this.items.find(item => item.SKU === SKUCode);
    }
  };
}();

const ReportManager = function() {
  let items;

  return {
    init(itemManager) {
      items = itemManager;
    },

    createReporter(SKUCode) {
      console.log(items);
      const item = items.getItemBySKU(SKUCode);

      return {
        itemInfo() {
          for (let property in item) {
            console.log(`${property}: ${item[property]}`);
          }
        },
      };
    },

    reportInStock() {
      console.log(items.inStock().map(({ itemName }) => itemName).join(', '));
    }
  };
}();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;       
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
