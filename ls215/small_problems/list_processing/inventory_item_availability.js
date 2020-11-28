'use strict';
function transactionsFor(transactionId, transactions) {
  return transactions.filter(({id}) => id === transactionId);
}

function isItemAvailable(id, transactions) {
  const quantity = transactionsFor(id, transactions).reduce((quantity, transaction) => {
    if (transaction.movement === 'in') {
      return quantity + transaction.quantity;
    } else {
      return quantity - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
