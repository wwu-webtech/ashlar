var western_header = document.querySelector('.western-header');
var mobile_menu_toggle = document.querySelector('.toggle-menu');
var mobile_menu_wrapper = document.querySelector('.mobile-menu');
var header_site_name = document.querySelector('.site-name');
var header_display_pref = document.querySelector('.display-preferences');
var header_quick_links = document.querySelector('.western-menu');
var header_main_nav = document.querySelector('.main-navigation');
var screen_width = window.innerWidth;

function position_elements() {
  screen_width = window.innerWidth;

  if (screen_width < 841) {
    mobile_menu_wrapper.appendChild(header_display_pref);
    mobile_menu_wrapper.appendChild(header_quick_links);
    mobile_menu_wrapper.appendChild(header_main_nav);
    return;
  } else {
    western_header.insertBefore(header_display_pref, mobile_menu_toggle);
    western_header.insertBefore(header_quick_links, header_site_name);
    western_header.appendChild(header_main_nav);
    return;
  }
}

position_elements();
window.addEventListener("resize", position_elements);

/*
var $menu_toggle = $('.toggle-menu', context);
var $menu_icon = $menu_toggle.children('.material-icons');
var $toggle_prefix = $menu_toggle.children('.toggle-prefix');
var $toggle_text = $menu_toggle.children('.toggle-text');
var $toggle_suffix = $menu_toggle.children('.toggle-suffix');
var $last_focused;
var $inputs = $(document).find('select, button, a, input, textarea', context);
var $page = $('.skip-link, .splash, .make-waves, .header-navigation .site-name, .toggle-open-menu, .page-content, .region--footer', context);

*/



// Function to toggle menu open/closed

// Function to open menu
// show the menu (add is-expanded), with slide in animation
/* aria stuff
$inputs.not('.toggle-menu, .header-navigation a, .header-navigation button, .ultimenu__flyout a').attr('tabindex', '-1');
$page.not('.header-navigation').attr('aria-hidden', 'true');
$menu_link.removeAttr('aria-hidden aria-expanded tabindex');
$('.has-ultimenu').find($menu_link).attr({
'role': 'button',
'aria-expanded': false
*/

// Function to close the menu
// slide out animation an hide things (remove .is-extended)
/* aria stuff
$page.not('.header-navigation').removeAttr('aria-hidden');
$inputs.not('.header-navigation a, .header-navigation button').removeAttr('tabindex');
$menu_link.attr({'aria-hidden': 'true', 'tabindex': '-1'});
$menu_toggle.on('click', toggle_menu);
$last_focused.focus();
*/

// START desktop/mobile resize toggle
/* This whole thing basically just hides all the menu links if the menu is hidden on mobile??

var $menu_item = $('.ultimenu__item', context);
var $menu_link = $menu_item.children('.ultimenu__link');
var $window = $(window, context);

function ariaMobile() {
var $tablet_breakpoint = 840;

if ($window.width() <= $tablet_breakpoint) {
$menu_link.attr({'aria-hidden': 'true', 'tabindex': '-1'});
}
else {
$menu_link.removeAttr('tabindex aria-hidden');
}
}

function bindHandlers() {
$window.unbind('resize', ariaMobile);

if ($window.width() <= 841) {
$window.resize(ariaMobile);
}
}

$window.resize(bindHandlers);
bindHandlers();
// END desktop/mobile resize toggle

$menu_toggle.on('click', toggle_menu);
*/
