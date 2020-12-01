function parseEmailString(email) {
  let parts = email.split('#/#');

  return {
    sender: parts[0],
    subject: parts[1],
    date: parts[2],
    recipient: parts[3],
    body: parts[4],
  };
}

function emailsToDates(email) {
  let dateString = email.date.match(/\d{2}-\d{2}-\d{4}/)[0];
  return new Date(dateString);
}

function mailCount(emailData) {
  let emails = emailData.split('##||##').map(parseEmailString);
  let dates = emails.map(emailsToDates);

  dates.sort((date1, date2) => {
    return date1 - date2;
  });

  console.log('Count of Email: ' + emails.length);
  console.log('Date Range: ' + dates[0].toDateString() + ' - ' + dates[dates.length - 1].toDateString());
}

mailCount(emailData);
