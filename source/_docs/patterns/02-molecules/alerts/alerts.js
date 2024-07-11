function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

var emergencyPromise = getJSON('https://emergency.wwu.edu/api/alert/3');
var weatherPromise = getJSON('https://emergency.wwu.edu/api/alert/4');

var handler = {
  has: function (obj, key) {
    var skey = String(key);
    var lskey = skey.toLowerCase();
    var uskey = lskey.charAt(0).toUpperCase() + skey.substr(1); // In case of camel case, using original string.
    return skey in obj || lskey in obj || uskey in obj;
  },
  get: function (obj, key) {
    var skey = String(key);
    var lskey = skey.toLowerCase();
    var uskey = lskey.charAt(0).toUpperCase() + skey.substr(1); // In case of camel case, using original string.
    return obj[skey] || obj[lskey] || obj[uskey] || undefined;
  }
};

function log_error(error) {
  console.log(error.message);
}

function valid_response(data) {
  return ('title' in data && 'content' in data && data.title && data.content);
}

function all_clear(data) {
  return data.title.trim().toUpperCase().includes('ALL CLEAR');
}

function display_alert(alertElement, data) {
  var titleElement = alertElement.querySelector('.alert-header');
  var contentElement = alertElement.querySelector('.alert-body');

  titleElement.textContent = data.title;
  contentElement.textContent = data.content;
  alertElement.style.display = 'block';
}

emergencyPromise.then(function (data) {
  var proxy = new Proxy(data, handler);

  if (valid_response(proxy)) {
    if (all_clear(proxy)) {
      console.log("Emergency alert JSON returned ALL CLEAR.");
    }
    else {
      var emergencyAlert = document.getElementById('alert-emergency');
      display_alert(emergencyAlert, proxy);
    }
  }
  else {
    console.log("Emergency alert JSON was not in a valid format.");
  }
}).catch(log_error);

weatherPromise.then(function (data) {
  var proxy = new Proxy(data, handler);

  if (valid_response(proxy)) {
    if (all_clear(proxy)) {
      console.log("Weather alert JSON returned ALL CLEAR.");
    }
    else {
      var weatherAlert = document.getElementById('alert-weather');
      display_alert(weatherAlert, proxy);
    }
  }
  else {
    console.log("Weather alert JSON was not in a valid format.");
  }
}).catch(log_error);
