var display_toggle = document.querySelector('.toggle-display-settings');
var display_menu = document.querySelector('.display-settings-menu');
var body = document.querySelector('body');
var theme_options = document.querySelector('.theme-selection');
var selected_theme;

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
    open_display_settings()
    return;
  } else {
    close_display_settings()
    return;
  }
}

function set_initial_theme() {
  if (localStorage.getItem('preferred_theme')) {
    selected_theme = localStorage.getItem('preferred_theme');
    
  }
  body.classList.add(selected_theme);
}

function select_theme() {
  var previous_theme = selected_theme;
  selected_theme = document.querySelector('input[name="theme-select"]:checked').value;

  body.classList.remove(previous_theme);
  body.classList.add(selected_theme);

  localStorage.setItem('preferred_theme', selected_theme)
}

set_initial_theme()
display_toggle.addEventListener('click', toggle_settings);
theme_options.addEventListener('click', select_theme);
