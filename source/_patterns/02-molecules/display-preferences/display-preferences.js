var toggle_display_preferences = document.querySelector('.toggle-display-preferences');
var display_preferences_menu = document.querySelector('.display-preferences-menu');

toggle_display_preferences.onclick = function() {
  if (display_preferences_menu.classList.contains('open')) {
    toggle_display_preferences.setAttribute('aria-expanded', false);
    toggle_display_preferences.querySelector('.material-icons').innerText = 'settings';
    toggle_display_preferences.querySelector('.toggle-prefix').innerText = 'Open ';
    toggle_display_preferences.querySelector('.icon-text').innerText = 'Display Preferences';

    display_preferences_menu.setAttribute('aria-hidden', true);
    display_preferences_menu.classList.remove('open');
    display_preferences_menu.classList.add('closed');
    return;
  } else {
    toggle_display_preferences.setAttribute('aria-expanded', true);
    toggle_display_preferences.querySelector('.material-icons').innerText = 'close';
    toggle_display_preferences.querySelector('.toggle-prefix').innerText = '';
    toggle_display_preferences.querySelector('.icon-text').innerText = 'Close Preferences';

    display_preferences_menu.setAttribute('aria-hidden', false);
    display_preferences_menu.removeAttribute('hidden');
    display_preferences_menu.classList.remove('closed');
    display_preferences_menu.classList.add('open');
    return;
  }
}
