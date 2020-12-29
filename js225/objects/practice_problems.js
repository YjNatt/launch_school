let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({ name, amount });
  },

  totalDue() {
    return this.unpaid.reduce((total, invoice) => total + invoice.amount, 0);
  },

  totalPaid() {
    return this.paid.reduce((total, invoice) => total + invoice.amount, 0);
  },

  payInvoice(name) {
    let unpaid = [];

    for (let index = 0; index < this.unpaid.length; index += 1) {
      let invoice = this.unpaid[index];

      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    }

    this.unpaid = unpaid;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbean Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
