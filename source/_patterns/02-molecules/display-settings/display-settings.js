var display_toggle = document.querySelector('.toggle-display-settings');
var display_menu = document.querySelector('.display-settings-menu');
var body = document.querySelector('body');

var theme_options = document.querySelector('.theme-selection');
var selected_theme;
var font_options = document.querySelector('.font-selection');
var selected_font;

var reset_preferences = document.getElementById('reset-display-preferences');

var reset_preferences = document.querySelector('reset-display-preferences'); 

// Open display menu
function open_display_settings() {
  display_toggle.setAttribute('aria-expanded', true);
  display_toggle.querySelector('.material-icons').innerText = 'close';
  display_toggle.querySelector('.toggle-prefix').innerText = '';
  display_toggle.querySelector('.toggle-text').innerText = 'Close';
  display_toggle.querySelector('.toggle-suffix').innerText = ' Display Settings';

  display_menu.removeAttribute('hidden');
  display_menu.classList.remove('closed');
  display_menu.classList.add('open');
}

// Close display menu
function close_display_settings() {
  display_toggle.setAttribute('aria-expanded', false);
  display_toggle.querySelector('.material-icons').innerText = 'settings';
  display_toggle.querySelector('.toggle-prefix').innerText = 'Open ';
  display_toggle.querySelector('.toggle-text').innerText = 'Display';
  display_toggle.querySelector('.toggle-suffix').innerText = ' Settings';

  display_menu.classList.remove('open');
  display_menu.classList.add('closed');
}

function toggle_settings() {
  if (display_menu.classList.contains('closed')) {
    open_display_settings();
    return;
  } else {
    close_display_settings();
    return;
  }
}

// Set theme in local storage
function set_initial_theme() {
  if (localStorage.getItem('wwu_preferred_theme')) {
    selected_theme = localStorage.getItem('wwu_preferred_theme');
    var selected_theme_input = document.querySelector('input[value="' + String(selected_theme) + '"]')

    if (selected_theme_input) {
      selected_theme_input.checked = true;
    }

    body.classList.add(selected_theme);
    return;
  } else {
    localStorage.setItem('wwu_preferred_theme', 'default');
    return;
  }
}

// Choose theme from fieldset
function select_theme() {
  var previous_theme = selected_theme;
  selected_theme = document.querySelector('input[name="theme-select"]:checked').value;

  body.classList.remove(previous_theme);
  body.classList.add(selected_theme);

  localStorage.setItem('wwu_preferred_theme', selected_theme);
}

// Set font in local storage
function set_font_preference() {
  if (localStorage.getItem('wwu_preferred_font')) {
    selected_font = localStorage.getItem('wwu_preferred_font');
    var selected_font_input = document.querySelector('input[value="' + String(selected_font) + '"]')

    if (selected_font_input) {
      selected_font_input.checked = true;
    }

    body.classList.add(selected_font);
    return;
  } else {
    localStorage.setItem('wwu_preferred_font', 'default');
    return;
  }
}

// Choose font from fieldset
function select_font() {
  var previous_font = selected_font;
  selected_font = document.querySelector('input[name="font-select"]:checked').value;

  body.classList.remove(previous_font);
  body.classList.add(selected_font);

  localStorage.setItem('wwu_preferred_font', selected_font);
}

function global_reset(e) {
  var current_theme_value = localStorage.getItem('wwu_preferred_theme');
  var current_font_value = localStorage.getItem('wwu_preferred_font');

  if (e.target == reset_preferences) {
    if ((current_theme_value !== 'default-theme') || (current_font_value !== 'default-font')) {
      var theme_default = theme_options.querySelector('input[value="default-theme"]');
      var font_default = font_options.querySelector('input[value="default-font"]');
  
      localStorage.setItem('wwu_preferred_theme', 'default-theme');
      localStorage.setItem('wwu_preferred_font', 'default-font');
      body.classList.add(current_theme_value, current_font_value);
      body.classList.remove('dark-mode', 'opendyslexic', 'open-sans', 'serif');
  
      theme_default.checked = true;
      font_default.checked = true;
    }  
  };
}

// Click events for menu items
if (display_toggle) {
  display_toggle.addEventListener('click', toggle_settings);
  };
if (theme_options) {
  theme_options.addEventListener('click', select_theme);
}
if (font_options) {
  font_options.addEventListener('click', select_font);
}
if (reset_preferences) {
  reset_preferences.addEventListener('click', global_reset);
}

set_initial_theme();
set_font_preference();