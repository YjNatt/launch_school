function dateSuffix(day) {
  let dayString = String(day);
  let suffix;
  
  if (dayString === '11' || dayString === '12' || dayString === '13') {
    suffix = 'th';
  } else if (dayString[dayString.length - 1] === '1') {
    suffix = 'st';
  } else if (dayString[dayString.length - 1] === '2') {
    suffix = 'nd';
  } else if (dayString[dayString.length - 1] === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
    return String(day) + suffix;
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let date = today.getDate();

console.log("Today's date is " + DAYS_OF_WEEK[today.getDay()] + ', the ' + dateSuffix(date));
