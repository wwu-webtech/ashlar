var display_toggle = document.querySelector(".toggle-display-settings");
var display_menu = document.querySelector(".display-settings-menu");
var body = document.querySelector("body");

var theme_options = document.querySelector(".theme-selection");
var system_theme = window.matchMedia("(prefers-color-scheme: dark)");
var stored_theme;
var selected_theme;

var font_options = document.querySelector(".font-selection");
var selected_font;

var reset_preferences = document.getElementById("reset-display-preferences");

/*------------------------------------------------------------------------------
Menu functionality
------------------------------------------------------------------------------*/
/* Open the menu -------------------------------------------------------------*/
function open_display_settings() {
  display_toggle.setAttribute("aria-expanded", true);
  display_toggle.querySelector(".material-icons").innerText = "close";
  display_toggle.querySelector(".toggle-text").innerText =
    "Close Display Settings";

  display_menu.removeAttribute("hidden");
  display_menu.classList.remove("closed");
  display_menu.classList.add("open");
}

/* Close the menu -------------------------------------------------------------*/
function close_display_settings() {
  display_toggle.setAttribute("aria-expanded", false);
  display_toggle.querySelector(".material-icons").innerText = "settings";
  display_toggle.querySelector(".toggle-text").innerText =
    "Open Display Settings";

  display_menu.classList.remove("open");
  display_menu.classList.add("closed");
}

function keyboard_close(event) {
  if (event.keyCode == 27 && display_menu.classList.contains("open")) {
    close_display_settings();
    display_toggle.focus();
  }
}

/* Toggle the menu -----------------------------------------------------------*/
function toggle_settings() {
  if (display_menu.classList.contains("closed")) {
    open_display_settings();
    return;
  } else {
    close_display_settings();
    return;
  }
}

/*------------------------------------------------------------------------------
Theme settings
------------------------------------------------------------------------------*/
function set_initial_theme(system_theme) {
  /* Check if there is a preference stored -----------------------------------*/
  if (localStorage.getItem("wwu_preferred_theme")) {
    /* Find the menu option that matches local storage and check it ----------*/
    stored_theme = localStorage.getItem("wwu_preferred_theme");
    var theme_input_select = document.querySelector(
      'input[value="' + String(stored_theme) + '"]'
    );
    if (theme_input_select) {
      theme_input_select.checked = true;
    }

    set_theme(stored_theme);

    return;
  } else {
    /* If there's no preference, set default as the preference ---------------*/
    try {
      localStorage.setItem("wwu_preferred_theme", "default-theme");
    } catch (e) {
      return;
    }
    return;
  }
}

/* Choose a new theme setting ------------------------------------------------*/
function select_theme() {
  selected_theme = document.querySelector('input[name="theme-select"]:checked')
    .value;

  set_theme(selected_theme);

  try {
    localStorage.setItem("wwu_preferred_theme", selected_theme);
  } catch (e) {
    return;
  }
}

function set_theme(theme) {
  if (theme == "light-mode") {
    /* If light mode is selected, use light mode ---------------------------*/
    body.classList.remove("dark-mode");
  } else if (theme == "dark-mode") {
    /* If dark mode is selected, use dark mode -----------------------------*/
    body.classList.add("dark-mode");
  } else if (theme == "default-theme" && system_theme.matches) {
    /* If default is selected & system settings prefer dark mode, use dark -*/
    body.classList.add("dark-mode");
  } else {
    /* Otherwise, use the default (light mode) -----------------------------*/
    body.classList.remove("dark-mode");
  }
}

/*------------------------------------------------------------------------------
Font settings
------------------------------------------------------------------------------*/
// Set font in local storage
function set_font_preference() {
  if (localStorage.getItem("wwu_preferred_font")) {
    selected_font = localStorage.getItem("wwu_preferred_font");
    var selected_font_input = document.querySelector(
      'input[value="' + String(selected_font) + '"]'
    );

    if (selected_font_input) {
      selected_font_input.checked = true;
    }

    body.classList.add(selected_font);
    return;
  } else {
    try {
      localStorage.setItem("wwu_preferred_font", "font--default");
    } catch (e) {
      return;
    }
    return;
  }
}

// Choose font from fieldset
function select_font() {
  var previous_font = selected_font;
  selected_font = document.querySelector('input[name="font-select"]:checked')
    .value;

  body.classList.remove(previous_font);
  body.classList.add(selected_font);

  try {
    localStorage.setItem("wwu_preferred_font", selected_font);
  } catch (e) {
    return;
  }
}

function global_reset(event) {
  var current_theme_value = localStorage.getItem("wwu_preferred_theme");
  var current_font_value = localStorage.getItem("wwu_preferred_font");

  if (event.target == reset_preferences) {
    if (
      current_theme_value !== "default-theme" ||
      current_font_value !== "font--default"
    ) {
      var theme_default = theme_options.querySelector(
        'input[value="default-theme"]'
      );
      var font_default = font_options.querySelector(
        'input[value="font--default"]'
      );

      try {
        localStorage.setItem("wwu_preferred_theme", "default-theme");
        localStorage.setItem("wwu_preferred_font", "font--default");
      } catch (e) {
        return;
      }
      set_theme("default-theme");
      body.classList.add("font--default");
      body.classList.remove(
        "font--dyslexia-friendly",
        "font--hyperlegible",
        "font--serif"
      );
      theme_default.checked = true;
      font_default.checked = true;
    }
  }
}

/*------------------------------------------------------------------------------
Initialize
------------------------------------------------------------------------------*/
if (display_toggle) {
  display_toggle.addEventListener("click", toggle_settings);
  display_toggle.addEventListener("keyup", keyboard_close);
  display_menu.addEventListener("keyup", keyboard_close);
}
if (theme_options) {
  theme_options.addEventListener("click", select_theme);
}
if (font_options) {
  font_options.addEventListener("click", select_font);
}
if (reset_preferences) {
  reset_preferences.addEventListener("click", global_reset);
}

set_initial_theme(system_theme);
set_font_preference();
