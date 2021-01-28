'use strict';
// 1.

/*
 * The two disadvantages of working with factory functions are,
 * they create a full copy of every function within each object and
 * we are unable to determine if an object was created by a factory function or not.
 */

// 2.
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// 3.
//function createInvoice(services = {}) {
//  return {
//    phone: services.phone || 3000,
//    internet: services.internet || 5500,
//    total() {
//      return this.phone + this.internet;
//    },
//  };
//}

// 4.
function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

// 5.
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      payments.forEach(payment => {
        this.payments.push(payment);
      }, this);
    },

    amountDue() {
      let totalPaid = this.payments.reduce((total, payment) => total + payment.total(), 0);
      return this.total() - totalPaid;
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
