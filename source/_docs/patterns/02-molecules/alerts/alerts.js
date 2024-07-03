var emergency = $.getJSON('https://em.wwu.edu/api/alert/3');
var weather = $.getJSON('https://em.wwu.edu/api/alert/4');

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

function log_error(jqXHR, textStatus, errorThrown) {
  console.log(errorThrown);
}

function valid_response(data) {
  if (!('title' in data)) {
    return false;
  }

  if (!('content' in data)) {
    return false;
  }

  if (!data.title) {
    return false;
  }

  if (!data.content) {
    return false;
  }

  return true;
}

function all_clear(data) {
  return data.title.trim().toUpperCase().includes('ALL CLEAR');
}

function display_alert($alert, data) {
  var $title = $alert.children('.alert-header');
  var $content = $alert.children('.alert-body');

  $title.text(data.title);
  $content.text(data.content);
  $alert.show();
}

emergency.done(function (data) {
  var proxy = new Proxy(data, handler);

  if (valid_response(proxy)) {
    if (all_clear(proxy)) {
      console.log("Emergency alert JSON returned ALL CLEAR.");
    }
    else {
      display_alert($('#alert-emergency', context), proxy);
    }
  }
  else {
    console.log("Emergency alert JSON was not in a valid format.");
  }
});

emergency.fail(log_error);

weather.done(function (data) {
  var proxy = new Proxy(data, handler);

  if (valid_response(proxy)) {
    if (all_clear(proxy)) {
      console.log("Weather alert JSON returned ALL CLEAR.");
    }
    else {
      display_alert($('#alert-weather', context), proxy);
    }
  }
  else {
    console.log("Weather alert JSON was not in a valid format.");
  }
});

weather.fail(log_error);
