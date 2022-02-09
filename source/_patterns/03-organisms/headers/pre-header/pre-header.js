if (
  typeof context == "undefined" ||
  (typeof context != "undefined" && context == document)
) {
  const pre_header_template = document.createElement("template");
  pre_header_template.innerHTML = `
<a href="#main-content" class="skip-link focusable">
    <span class="skip-link-text">Skip to Content </span>
    <span class="material-icons" aria-hidden="true">keyboard_arrow_down</span>
</a>    

<button class="toggle-settings" aria-expanded="false" aria-controls="settings-menu">
    <span class="toggle-text"><span class="visually-hidden" role="presentation">Open</span> Settings </span>
    <span class="material-icons toggle-icon" aria-hidden="true">settings</span>
</button>

<div id="settings-menu" class="settings-menu black-bg closed">
    <div class="menu-container">            
        <fieldset class="theme-selection">
            <legend>Theme</legend>
            <input id="default-theme" type="radio" name="theme-select" value="default-theme" checked="checked">
            <label for="default-theme">Default (System)</label>
            <input id="dark-mode" type="radio" name="theme-select" value="dark-mode">
            <label for="dark-mode">Dark</label>
            <input id="light-mode" type="radio" name="theme-select" value="light-mode">
            <label for="light-mode">Light</label>
        </fieldset>
        
        <fieldset class="font-selection">
            <legend>Font</legend>
            <input id="font--default" type="radio" name="font-select" value="font--default" checked="checked">
            <label for="font--default">Default</label>
            <input id="font--serif" type="radio" name="font-select" value="font--serif">
            <label for="font--serif">Serif</label>
            <input id="font--dyslexia-friendly" type="radio" name="font-select" value="font--dyslexia-friendly">
            <label for="font--dyslexia-friendly">Open Dyslexic</label>
            <input id="font--hyperlegible" type="radio" name="font-select" value="font--hyperlegible">
            <label for="font--hyperlegible">Hyperlegible</label>
        </fieldset>
        
        <!--fieldset class="language-selection">
            <legend>Language</legend>
            <input id="language--english" type="radio" name="font-select" value="language--english" checked="checked">
            <label for="language--english">English</label>
            <input id="language--spanish" type="radio" name="font-select" value="language--spanish">
            <label for="language--spanish">Español</label>
        </fieldset-->            
    </div>
    <button id="reset-display-preferences" class="reset-button"><span class="material-icons" aria-hidden="true">replay</span> Reset preferences</button>
</div>    

<wwu-search role="search" aria-label="Western"></wwu-search>
`;

  class PreHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template -----------------------*/
      this.appendChild(pre_header_template.content.cloneNode(true));

      /*------------------------------------------------------------------------------
        Menu functionality
        --------------------------------------------------------------------------*/

      var display_toggle = this.querySelector(".toggle-settings");
      var settings_menu = this.querySelector(".settings-menu");
      var body = document.querySelector("body");

      var theme_options = this.querySelector(".theme-selection");
      var system_theme = window.matchMedia("(prefers-color-scheme: dark)");
      var stored_theme;
      var selected_theme;

      var font_options = this.querySelector(".font-selection");
      var selected_font;

      var reset_preferences = this.querySelector(".reset-button");

      /* Open the menu -------------------------------------------------------------*/
      function open_display_settings() {
        document.addEventListener("mouseup", click_outside);

        display_toggle.setAttribute("aria-expanded", true);
        display_toggle.querySelector(".material-icons").innerText = "close";
        display_toggle.querySelector(".toggle-text").innerHTML =
          "<span class='visually-hidden'>Close</span> Settings";

        settings_menu.removeAttribute("aria-hidden");
        settings_menu.classList.remove("closed");
        settings_menu.classList.add("open");
      }

      /* Close the menu -------------------------------------------------------------*/
      function close_display_settings() {
        document.removeEventListener("mouseup", click_outside);

        display_toggle.setAttribute("aria-expanded", false);
        display_toggle.querySelector(".material-icons").innerText = "settings";
        display_toggle.querySelector(".toggle-text").innerHTML =
          "<span class='visually-hidden'>Open</span> Settings";

        settings_menu.setAttribute("aria-hidden", true);
        settings_menu.classList.remove("open");
        settings_menu.classList.add("closed");
      }

      function keyboard_close(event) {
        if (event.keyCode == 27 && settings_menu.classList.contains("open")) {
          close_display_settings();
          display_toggle.focus();
        }
      }

      function click_outside(event) {
        var isClickInside = settings_menu.contains(event.target);
        var isClickToggle = display_toggle.contains(event.target);

        if (
          settings_menu.classList.contains("open") &&
          !isClickInside &&
          !isClickToggle
        ) {
          close_display_settings();
        }
      }

      /* Toggle the menu -----------------------------------------------------------*/
      function toggle_settings() {
        if (settings_menu.classList.contains("closed")) {
          open_display_settings();
          return;
        } else {
          close_display_settings();
          return;
        }
      }

      /*------------------------------------------------------------------------------
        Theme settings
        ---------------------------------------------------------------------------*/
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
        selected_theme = document.querySelector(
          'input[name="theme-select"]:checked'
        ).value;

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
        ---------------------------------------------------------------------------*/
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
        selected_font = document.querySelector(
          'input[name="font-select"]:checked'
        ).value;

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
        Initialize settings menu
        ---------------------------------------------------------------------------*/
      if (display_toggle) {
        display_toggle.addEventListener("click", toggle_settings);
        display_toggle.addEventListener("keyup", keyboard_close);
        settings_menu.addEventListener("keyup", keyboard_close);
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
    }
  }

  window.customElements.define("wwu-pre-header", PreHeader);
}
