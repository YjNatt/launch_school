let numberStringPadding = function numberStringPadding(minute) {
  let numberString = Number.isNaN(minute) ? '00' : String(minute);

  while (numberString.length < 2) {
    numberString = '0' + numberString;
  }

  return numberString;
};

let dms = function degreesMinutesSeconds(angle) {
  if (angle < 0) {
    angle = 360 + (angle % 360);
  } else {
    angle %= 360;
  }

  const DEGREE_TO_MINUTES = 60;
  const MINUTES_TO_SECONDS = 60;
  const degree = Math.floor(angle);
  const minutes = Math.floor(((angle % degree)) * DEGREE_TO_MINUTES);
  const seconds = Math.floor((((angle % degree) * DEGREE_TO_MINUTES)
                  % minutes * MINUTES_TO_SECONDS));
  const DEGREE = '\xB0';

  return `${numberStringPadding(degree) + DEGREE}${numberStringPadding(minutes)}'${numberStringPadding(seconds)}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
