const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const APR = 5;

function getParams(path) {
  let url = new URL(path, `http://localhost:${PORT}/`);
  return url.searchParams;
}

function calculateLoan(amount, duration, apr) {
  let annualInterestRate = apr / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = duration * 12;
  let payment = amount *
          (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate),(-months))));

  return payment.toFixed(2);
}

function formatContent(amount, duration, apr, payment) {
  let content = [];

  content.push(`Amount: $${String(amount)}`);
  content.push(`Duration: ${String(duration)} years`);
  content.push(`APR: ${String(apr)}%`);
  content.push(`Monthly payment: $${String(payment)}`);

  return content.join('\n');
}

function createLoanOffer(params) {
  const APR = 5;
  let amount = Number(params.get('amount'));
  let duration = Number(params.get('duration'));
  let payment = calculateLoan(amount, duration, APR);

  return formatContent(amount, duration, APR, payment);
}

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url

  if (path === '/flavicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = createLoanOffer(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${content}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});