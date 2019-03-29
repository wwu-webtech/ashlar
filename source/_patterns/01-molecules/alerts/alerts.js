// Channel 3: Western Alert
var emergency = $.getJSON('https://emergency.wwu.edu/api/alert/3');

// Channel 4: Weather
var weather = $.getJSON('https://emergency.wwu.edu/api/alert/4');

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
  if (is_valid_response(data)) {
    display_alert($('#alert-emergency', context), data);
  }
});

weather.done(function (data) {
  if (is_valid_response(data)) {
    display_alert($('#alert-weather', context), data);
  }
});

emergency.fail(log_error);
weather.fail(log_error);
