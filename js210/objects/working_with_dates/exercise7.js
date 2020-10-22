function dateSuffix(day) {
  let dayString = String(day);

  let digit;
  if (dayString.length === 1) {
    digit = dayString[0];
  } else if (dayString[0] !== '1') {
    digit = dayString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }  

  return String(day) + suffix;
}

function formattedMonth(monthDigit) {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return MONTHS[monthDigit];
}

function formattedDay(dayDigit) {
  const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return DAYS_OF_WEEK[dayDigit];
}

function formattedDate(date) {
  let day = date.getDate();
  let dayOfWeek = date.getDay();
  let month = date.getMonth();

  console.log(`Today's date is ${formattedDay(dayOfWeek)}, ${formattedMonth(month)} ${dateSuffix(day)}`);
}


let today = new Date();

formattedDate(today);
