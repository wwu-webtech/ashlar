var second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
var days_left,
hours_left,
minutes_left,
seconds_left;

//var countDown = new Date(document.getElementById('countdown_date').innerText).getTime();
var countDown = new Date().getTime() + 135000; /*test countdown with 2:15 on timer */

function findTimeLeft() {
  var now = new Date().getTime(),
  distance = countDown - now;

  days_left = Math.floor(distance / (day)),
  hours_left = Math.floor((distance % (day)) / (hour)),
  minutes_left = Math.floor((distance % (hour)) / (minute));
  seconds_left = Math.floor((distance % (minute)) / second);
}

function setDays() {
  document.getElementById('days').innerText = days_left;
}
function setHours() {
  document.getElementById('hours').innerText = hours_left;
}
function setMinutes() {
  document.getElementById('minutes').innerText = minutes_left;

  /* Only announce last 10 minutes */
  if (days_left <=0 && hours_left <=0 && minutes_left <= 10) {
    document.getElementById('announced-minutes').innerHTML = "<span class='visually-hidden'>" + minutes_left + "</span> Minutes";
  }
}
function setSeconds() {
  document.getElementById('seconds').innerText = seconds_left;

  /* Only announce last 10 seconds */
  if (days_left <=0 && hours_left <=0 && minutes_left <= 0 && seconds_left <=10) {
    document.getElementById('announced-seconds').innerHTML = "<span class='visually-hidden'>" + seconds_left + "</span> Seconds";
  }
}

function initializeCountDown() {
  findTimeLeft();

  /* Only set days & hours if there are any, otherwise hide those blocks */
  if (days_left > 0) {
    setDays();
  } else {
    document.getElementById('days-item').classList.add('hidden');
  }
  if (days_left > 0 || hours_left > 0) {
    setHours();
  } else {
    document.getElementById('hours-item').classList.add('hidden');
  }

  /* Minutes & seconds should always show */
  if (minutes_left >= 0) {
    setMinutes();
  }
  if (seconds_left >= 0 ) {
    setSeconds();
  }
}

var countDownSeconds = setInterval(function() {
  var prev_hours_left = hours_left,
    prev_minutes_left = minutes_left;
  findTimeLeft();

  if (hours_left >= 0 && prev_hours_left != hours_left) {
    setHours();
  }
  if (minutes_left >= 0 && prev_minutes_left != minutes_left) {
    setMinutes();
  }
  if (seconds_left >= 0) {
    setSeconds();
  }
}, second);


initializeCountDown();
