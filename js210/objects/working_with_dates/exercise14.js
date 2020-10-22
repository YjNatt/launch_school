let addZero = (time) => {
  return time.length < 2 ? '0' + time : time;
};

let formatTime = (date) => {
  let minutes = addZero(String(date.getMinutes()));
  let hours = addZero(String(date.getHours()));

  return `${hours}:${minutes}`;
};

let today = new Date();
console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
