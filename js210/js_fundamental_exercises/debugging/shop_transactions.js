const transactionLog = [];

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');
  data = parseFloat(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.');
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i] * 100;
  }

  return total / 100;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
