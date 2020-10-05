var display_toggle = document.querySelector('.toggle-display-settings');
var display_menu = document.querySelector('.display-settings-menu');

function toggle_settings() {
  if (display_menu.classList.contains('open')) {
    display_toggle.setAttribute('aria-expanded', false);
    display_toggle.querySelector('.material-icons').innerText = 'settings';
    display_toggle.querySelector('.toggle-prefix').innerText = 'Open ';
    display_toggle.querySelector('.toggle-text').innerText = 'Display';
    display_toggle.querySelector('.toggle-suffix').innerText = ' Settings';

    display_menu.setAttribute('aria-hidden', true);
    display_menu.classList.remove('open');
    display_menu.classList.add('closed');
    return;
  } else {
    display_toggle.setAttribute('aria-expanded', true);
    display_toggle.querySelector('.material-icons').innerText = 'close';
    display_toggle.querySelector('.toggle-prefix').innerText = '';
    display_toggle.querySelector('.toggle-text').innerText = 'Close';
    display_toggle.querySelector('.toggle-suffix').innerText = ' Display Settings';

    display_menu.setAttribute('aria-hidden', false);
    display_menu.removeAttribute('hidden');
    display_menu.classList.remove('closed');
    display_menu.classList.add('open');
    return;
  }
}

display_toggle.addEventListener('click', toggle_settings);
