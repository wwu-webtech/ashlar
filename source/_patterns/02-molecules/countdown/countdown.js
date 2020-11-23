var second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

var days_left,
hours_left,
minutes_left,
seconds_left;

var countDown = new Date(document.getElementById('countdown_date').innerText).getTime();

var countDownMinutes = setInterval(function() {
  var now = new Date().getTime(),
  distance = countDown - now;

  days_left = Math.floor(distance / (day)),
  hours_left = Math.floor((distance % (day)) / (hour)),
  minutes_left = Math.floor((distance % (hour)) / (minute));

  if (days_left <= 0) {
    document.getElementById('days-item').classList.add('hidden');
  } else {
    document.getElementById('days').innerText = days_left;
  }

  if (days_left <= 0 && hours_left <= 0) {
    document.getElementById('hours-item').classList.add('hidden');
    //document.getElementById('announced-minutes').innerHTML = "<span class='visually-hidden'>" + minutes_left + "</span> Minutes";
  } else {
    document.getElementById('hours').innerText = hours_left;
  }

  document.getElementById('minutes').innerText = minutes_left;

}, minute);

var countDownSeconds = setInterval(function() {
  var now = new Date().getTime(),
  distance = countDown - now;

  seconds_left = Math.floor((distance % (minute)) / second);

  document.getElementById('seconds').innerText = seconds_left;
}, second);
