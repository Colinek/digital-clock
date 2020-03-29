function clock(){

const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();

var day = todayIs();

var date = fullDate.getDate();
var month = monthIs();
var year = fullDate.getFullYear();

if (hours < 10) {
  hours = "0" + hours
}
if (mins < 10) {
  mins = "0" + mins
}
if (secs < 10) {
  secs = "0" + secs
}
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
document.getElementById('day').innerHTML = day + " " + date + " " + month + " " + year;

function todayIs() {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[fullDate.getDay()];
}

function monthIs() {
  var weekday = new Array(7);
  weekday[0] = "Jan";
  weekday[1] = "Feb";
  weekday[2] = "Mar";
  weekday[3] = "Apr";
  weekday[4] = "May";
  weekday[5] = "Jun";
  weekday[6] = "Jul";
  weekday[7] = "Aug";
  weekday[8] = "Sep";
  weekday[9] = "Oct";
  weekday[10] = "Nov";
  weekday[11] = "Dec";
  return weekday[fullDate.getMonth()];
}

}

setInterval(clock, 1000);
