var toggle_display_preferences = document.querySelector('.toggle-display-preferences');
var display_preferences_menu = document.querySelector('.display-preferences-menu');

toggle_display_preferences.onclick = function() {
  if (window.getComputedStyle(display_preferences_menu).display === 'flex') {
    toggle_display_preferences.setAttribute('aria-expanded', false);
    display_preferences_menu.setAttribute('hidden', '');
		display_preferences_menu.style.display='none';
		return;
	} else {
    toggle_display_preferences.setAttribute('aria-expanded', true);
    display_preferences_menu.removeAttribute('hidden');
    display_preferences_menu.style.display='flex';
  }
}
