var display_pref_toggle = document.querySelector('.toggle-display-preferences');
var display_preferences_menu = document.querySelector('.display-preferences-menu');

function toggle_preferences() {
  if (display_preferences_menu.classList.contains('open')) {
    display_pref_toggle.setAttribute('aria-expanded', false);
    display_pref_toggle.querySelector('.material-icons').innerText = 'settings';
    display_pref_toggle.querySelector('.toggle-prefix').innerText = 'Open ';
    display_pref_toggle.querySelector('.icon-text').innerText = 'Display Preferences';

    display_preferences_menu.setAttribute('aria-hidden', true);
    display_preferences_menu.classList.remove('open');
    display_preferences_menu.classList.add('closed');
    return;
  } else {
    display_pref_toggle.setAttribute('aria-expanded', true);
    display_pref_toggle.querySelector('.material-icons').innerText = 'close';
    display_pref_toggle.querySelector('.toggle-prefix').innerText = '';
    display_pref_toggle.querySelector('.icon-text').innerText = 'Close Preferences';

    display_preferences_menu.setAttribute('aria-hidden', false);
    display_preferences_menu.removeAttribute('hidden');
    display_preferences_menu.classList.remove('closed');
    display_preferences_menu.classList.add('open');
    return;
  }
}

display_pref_toggle.addEventListener('click', toggle_preferences);
