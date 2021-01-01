
function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit(amount) {
        balance += amount;
        transactions.push({ type: 'deposit', amount: amount})
        return amount;
      },

      withdraw(amount) {
        if (amount > balance) amount = balance;

        balance -= amount;
        transactions.push({ type: 'withdraw', amount: amount})
        return amount;
      },

      number() {
        return number;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    };
  };
}
