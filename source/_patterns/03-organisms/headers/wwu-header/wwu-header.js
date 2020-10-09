/* Prevent multiple calls in Drupal */
if (context !== document) {
  return;
}

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

  mobile_menu_wrapper.removeEventListener("transitionend", hide_page_elements);
}

function show_page_elements() {
  header.style.display = "grid";
  splash.style.display = "grid";
  content.style.display = "grid";
  footer.style.display = "block";
}

function set_focus() {
  mobile_menu_toggle.focus();

  mobile_menu_wrapper.removeEventListener("transitionend", set_focus);
}

function open_mobile_menu() {
  mobile_menu_wrapper.addEventListener("transitionend", hide_page_elements);
  mobile_menu_wrapper.addEventListener("transitionend", set_focus);
  mobile_menu_wrapper.classList.add('open');
  mobile_menu_wrapper.classList.remove('closed');
  mobile_menu_wrapper.insertBefore(mobile_menu_toggle, header_display_settings);

  mobile_menu_toggle.querySelector('.material-icons').innerText = "close";
  mobile_menu_toggle.querySelector('.toggle-prefix').innerText = "";
  mobile_menu_toggle.querySelector('.toggle-text').innerText = "Close";
  mobile_menu_toggle.querySelector('.toggle-suffix').innerText = " the menu";
  mobile_menu_toggle.setAttribute('aria-expanded', true);
}

function close_mobile_menu() {
  show_page_elements();
  mobile_menu_wrapper.classList.remove('open');
  mobile_menu_wrapper.classList.add('closed');
  western_header.insertBefore(mobile_menu_toggle, header_site_name)

  mobile_menu_toggle.querySelector('.material-icons').innerText = "menu";
  mobile_menu_toggle.querySelector('.toggle-prefix').innerText = "Open the ";
  mobile_menu_toggle.querySelector('.toggle-text').innerText = "Menu";
  mobile_menu_toggle.querySelector('.toggle-suffix').innerText = "";
  mobile_menu_toggle.setAttribute('aria-expanded', false);

  set_focus()
}

function toggle_mobile_menu() {
  if (mobile_menu_wrapper.classList.contains('closed')) {
    open_mobile_menu();
    return;
  } else {
    close_mobile_menu();
    return;
  }
}

if (western_header) {
  position_elements();
  window.addEventListener('resize', position_elements);
  mobile_menu_toggle.addEventListener('click', toggle_mobile_menu);
}
