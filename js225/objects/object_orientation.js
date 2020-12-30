function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },

    setPrice(price) {
      if (price < 0) alert('New price is invalid');
      this.price = price;
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill    = createProduct(1, 'Cordless Drill', 15, 45);
let hammer   = createProduct(2, 'Hammer', 1, 5);
let tape     = createProduct(3, 'Tape', 25, 2);
let pen      = createProduct(4, 'Pen', 100, 1);
