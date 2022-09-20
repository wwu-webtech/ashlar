var second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
var days_left, hours_left, minutes_left, seconds_left;

function findTimeLeft() {
  var now = new Date().getTime(),
    distance = countDown - now;

  (days_left = Math.floor(distance / day)),
    (hours_left = Math.floor((distance % day) / hour)),
    (minutes_left = Math.floor((distance % hour) / minute));
  seconds_left = Math.floor((distance % minute) / second);
}

function setDays() {
  document.getElementById("days").innerText = days_left;
}
function setHours() {
  document.getElementById("hours").innerText = hours_left;
}
function setMinutes() {
  document.getElementById("minutes").innerText = minutes_left;
}
function setSeconds() {
  document.getElementById("seconds").innerText = seconds_left;
}
function setMinuteAnnouncement() {
  if (minutes_left == 1) {
    document.getElementById("announced-time").innerText =
      String(minutes_left) + " minute left";
  } else {
    document.getElementById("announced-time").innerText =
      String(minutes_left) + " minutes left";
  }
}
function setSecondAnnouncement() {
  document.getElementById("announced-time").innerText = String(seconds_left);
}

function initializeCountDown() {
  findTimeLeft();

  /* Only set days & hours if there are any, otherwise hide those blocks */
  if (days_left > 0) {
    setDays();
  } else {
    document.getElementById("days-item").classList.add("hidden");
  }
  if (days_left > 0 || hours_left > 0) {
    setHours();
  } else {
    document.getElementById("hours-item").classList.add("hidden");
  }

  /* Minutes & seconds should always show */
  if (minutes_left >= 0) {
    setMinutes();
  }
  if (seconds_left >= 0) {
    setSeconds();
  }
}

var countDownSeconds = setInterval(function () {
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

  /* Only announce last 10 minutes, and only when the minute is about to change */
  if (
    days_left <= 0 &&
    hours_left <= 0 &&
    minutes_left <= 10 &&
    minutes_left >= 1 &&
    seconds_left == 0
  ) {
    setMinuteAnnouncement();
  }
  /* Only announce last 10 seconds */
  if (
    days_left <= 0 &&
    hours_left <= 0 &&
    minutes_left <= 0 &&
    seconds_left <= 10 &&
    seconds_left > 0
  ) {
    setSecondAnnouncement();
  }
}, second);

try {
  var countDown = new Date(
    document.getElementById("countdown_date").innerText
  ).getTime();

  if (countDown) {
    initializeCountDown();
  }
} catch (err) {
  console.log("No countdown found");
}
