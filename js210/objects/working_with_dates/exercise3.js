const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();

console.log("Today's date is " + DAYS_OF_WEEK[today.getDay()]);
