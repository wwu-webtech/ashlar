/* Header Things */
var western_header = document.querySelector('.western-header');
var mobile_menu_toggle = document.querySelector('.toggle-menu');
var mobile_menu_wrapper = document.querySelector('.mobile-menu');
var header_site_name = document.querySelector('.site-name');
var header_display_settings = document.querySelector('.display-settings');
var header_quick_links = document.querySelector('.western-menu');
var header_main_nav = document.querySelector('.main-navigation');

/* Non-Menu Things */
var header = document.querySelector('.western-header');
var splash = document.querySelector('.splash');
var content = document.querySelector('.page-content');
var footer = document.querySelector('.page-footer');

var screen_width = window.innerWidth;

function position_elements() {
  screen_width = window.innerWidth;

  if (screen_width < 841) {
    mobile_menu_wrapper.appendChild(header_display_settings);
    mobile_menu_wrapper.appendChild(header_quick_links);
    mobile_menu_wrapper.appendChild(header_main_nav);
    return;
  } else {
    close_mobile_menu();
    western_header.insertBefore(header_display_settings, mobile_menu_toggle);
    western_header.insertBefore(header_quick_links, header_site_name);
    western_header.appendChild(header_main_nav);
    return;
  }
}

function hide_page_elements() {
  header.style.display = "none";
  splash.style.display = "none";
  content.style.display = "none";
  footer.style.display = "none";
}

function show_page_elements() {
  header.style.display = "grid";
  splash.style.display = "grid";
  content.style.display = "grid";
  footer.style.display = "block";
}

function open_mobile_menu() {
  mobile_menu_wrapper.addEventListener("transitionend", hide_page_elements);
  mobile_menu_wrapper.classList.add('open');
  mobile_menu_wrapper.classList.remove('closed');
  mobile_menu_wrapper.insertBefore(mobile_menu_toggle, header_quick_links);
}

function close_mobile_menu() {
  show_page_elements();
  mobile_menu_wrapper.removeEventListener("transitionend", hide_page_elements);
  mobile_menu_wrapper.classList.remove('open');
  mobile_menu_wrapper.classList.add('closed');
  western_header.insertBefore(mobile_menu_toggle, header_site_name)
}

function toggle_mobile_menu() {
  if (mobile_menu_wrapper.classList.contains('closed')) {
    open_mobile_menu()
    return;
  } else {
    close_mobile_menu()
  }
}

position_elements();
window.addEventListener('resize', position_elements);
mobile_menu_toggle.addEventListener('click', toggle_mobile_menu);



/*
var $menu_toggle = $('.toggle-menu', context);
var $menu_icon = $menu_toggle.children('.material-icons');
var $toggle_prefix = $menu_toggle.children('.toggle-prefix');
var $toggle_text = $menu_toggle.children('.toggle-text');
var $toggle_suffix = $menu_toggle.children('.toggle-suffix');
var $last_focused;
var $inputs = $(document).find('select, button, a, input, textarea', context);
var $page = $('.skip-link, .splash, .make-waves, .header-navigation .site-name, .toggle-open-menu, .page-content, .region--footer', context);

// aria-expanded vars
var $menu_item = $('.ultimenu__item', context);
var $menu_link = $menu_item.children('.ultimenu__link');

function toggle_menu(event) {
$menu_toggle.off('click', toggle_menu);

if ($menu_toggle.hasClass('is-expanded')) {
toggle_close_menu(event);
}
else {
toggle_open_menu(event);
}
}

function toggle_open_menu(event) {
$last_focused = document.activeElement;
$('.header-navigation').show();
$menu_icon.text('close');
$toggle_prefix.html('');
$toggle_text.html('Close');
$toggle_suffix.html(' the Menu');

$('.header-navigation').animate(
{
right: '0',
opacity: '1'
},
{
duration: 'normal',
easing: 'swing',
complete: function () {
$menu_toggle.addClass('is-expanded');
$menu_toggle.on('click', toggle_menu);
$menu_toggle.focus();
$inputs.not('.toggle-menu, .header-navigation a, .header-navigation button, .ultimenu__flyout a').attr('tabindex', '-1');
$page.not('.header-navigation').attr('aria-hidden', 'true');
$menu_link.removeAttr('aria-hidden aria-expanded tabindex');
$('.has-ultimenu').find($menu_link).attr({
'role': 'button',
'aria-expanded': false
});
}
}
);
}

function toggle_close_menu(event) {
$menu_icon.text('menu');
$toggle_prefix.html('Open the ');
$toggle_text.html('Menu');
$toggle_suffix.html('');
$('.header-navigation').animate(
{
right: '-100%',
opacity: '0'
},
{
duration: 'normal',
easing: 'swing',
complete: function () {
$('.header-navigation').hide();
$('#dropLangMenu').hide();
$menu_toggle.removeClass('is-expanded');
$page.not('.header-navigation').removeAttr('aria-hidden');
$inputs.not('.header-navigation a, .header-navigation button').removeAttr('tabindex');
$menu_link.attr({'aria-hidden': 'true', 'tabindex': '-1'});
$menu_toggle.on('click', toggle_menu);
$last_focused.focus();
}
}
);
}

// START desktop/mobile resize toggle
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
