// Channel 3: Western Alert
var emergency = $.getJSON('https://emergency.wwu.edu/api/alert/3');

// Channel 4: Weather
var weather = $.getJSON('https://emergency.wwu.edu/api/alert/4');

var handler = {

  has: function (obj, key) {
    var skey = String(key);

    return skey in obj || skey.toLowerCase() in obj
  },

  get: function (obj, key) {
    var skey = String(key);
    var lskey = skey.toLowerCase();

    return obj[skey] || obj.getItem(skey) || obj[lskey] || obj.getItem(lskey) || undefined;
  }

};

function is_all_clear(title) {
  return title.trim().toUpperCase() === 'WWU RSS ALL CLEAR';
}

function is_valid_response(data) {
  if (!('Title' in data)) {
    return false;
  }

  if (!('Content' in data)) {
    return false;
  }

  if (!data.Title) {
    return false;
  }

  if (!data.Content) {
    return false;
  }

  return true;
}

function log_error(jqXHR, textStatus, errorThrown) {
  console.log(errorThrown);
}

function display_alert($alert, data) {
  var $title = $alert.children('.alert-header');
  var $content = $alert.children('.alert-body');

  if (!is_all_clear(data.Title)) {
    $title.text(data.Title);
    $content.text(data.Content);
    $alert.show();
  }
}

emergency.done(function (data) {
  var proxy = new Proxy(data, handler);

  if (is_valid_response(proxy)) {
    display_alert($('#alert-emergency', context), proxy);
  }
  else {
    console.log("Alert JSON was not in a valid format.");
  }
});

weather.done(function (data) {
  var proxy = new Proxy(data, handler);

  if (is_valid_response(proxy)) {
    display_alert($('#alert-weather', context), proxy);
  }
  else {
    console.log("Alert JSON was not in a valid format.");
  }
});

emergency.fail(log_error);
weather.fail(log_error);
