if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const pre_header_template = document.createElement("template");
  pre_header_template.innerHTML = `
  <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/search.css" /-->
  <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/pre-header.css" /-->

  <a href="#main-content" class="skip-link focusable icon-link">
      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"/><polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"/></g></g></svg></span>
      <span class="skip-link-text">Skip to Content </span>      
  </a>    

  <button class="toggle-settings" aria-expanded="false" aria-controls="settings-menu">
      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg></span>
      <span class="toggle-text">Display Settings</span>      
  </button>

  <div id="settings-menu" class="settings-menu black-bg closed">
      <div class="menu-container">            
          <fieldset class="theme-selection">
              <legend>Theme</legend>
              <div class="radio">
                  <input id="default-theme" type="radio" name="theme-select" value="default-theme" checked="checked">
                  <label for="default-theme">Default (System)</label>
              </div>
              <div class="radio">
                  <input id="dark-mode" type="radio" name="theme-select" value="dark-mode">
                  <label for="dark-mode">Dark</label>
              </div>
              <div class="radio">
                  <input id="light-mode" type="radio" name="theme-select" value="light-mode">
                  <label for="light-mode">Light</label>
              </div>
          </fieldset>
          
          <fieldset class="font-selection">
              <legend>Font</legend>
              <div class="radio">
                  <input id="font--default" type="radio" name="font-select" value="font--default" checked="checked">
                  <label for="font--default">Default</label>
              </div>
              <div class="radio">
                  <input id="font--serif" type="radio" name="font-select" value="font--serif">
                  <label for="font--serif">Serif</label>
              </div>
              <div class="radio">
                  <input id="font--dyslexia-friendly" type="radio" name="font-select" value="font--dyslexia-friendly">
                  <label for="font--dyslexia-friendly">Open Dyslexic</label>
              </div>
              <div class="radio">
                  <input id="font--hyperlegible" type="radio" name="font-select" value="font--hyperlegible">
                  <label for="font--hyperlegible">Hyperlegible</label>
              </div>
          </fieldset>
          
          <!--fieldset class="language-selection">
              <legend>Language</legend>
              <input id="language--english" type="radio" name="font-select" value="language--english" checked="checked">
              <label for="language--english">English</label>
              <input id="language--spanish" type="radio" name="font-select" value="language--spanish">
              <label for="language--spanish">Español</label>
          </fieldset-->            
      </div>
      <button class="reset-button"><span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg></span> Reset preferences</button>
  </div>      
  `;

  class PreHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      /* Create the custom element by appending the template -----------------------*/
      if (!element_exists) {
        this.appendChild(pre_header_template.content.cloneNode(true));
        this.classList.add("element-created");

        /*------------------------------------------------------------------------------
        Search set up
        --------------------------------------------------------------------------*/
        const search = document.createElement("wwu-search");
        const settings_icon = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>`;
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
        search.setAttribute("role", "search");
        search.setAttribute("aria-label", "Western");
        if (this.getAttribute("search-profile") != null) { search.setAttribute("profile", this.getAttribute("search-profile"))};
        this.appendChild(search);
        

        /*------------------------------------------------------------------------------
        Menu functionality
        --------------------------------------------------------------------------*/
        var display_toggle = this.querySelector(".toggle-settings");
        var settings_menu = this.querySelector(".settings-menu");
        var body = document.querySelector("body");
        var html = document.querySelector("html");

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
          display_toggle.querySelector(".component-icon").innerHTML = close_icon;

          settings_menu.removeAttribute("aria-hidden");
          settings_menu.classList.remove("closed");
          settings_menu.classList.add("open");
        }

        /* Close the menu -------------------------------------------------------------*/
        function close_display_settings() {
          document.removeEventListener("mouseup", click_outside);

          display_toggle.setAttribute("aria-expanded", false);
          display_toggle.querySelector(".component-icon").innerHTML = settings_icon;

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
            html.setAttribute("data-theme", "light");
          } else if (theme == "dark-mode") {
            /* If dark mode is selected, use dark mode -----------------------------*/
            html.setAttribute("data-theme", "dark");
          } else if (theme == "default-theme" && system_theme.matches) {
            /* If default is selected & system settings prefer dark mode, use dark -*/
            html.setAttribute("data-theme", "dark");
          } else {
            /* Otherwise, use the default (light mode) -----------------------------*/
            html.setAttribute("data-theme", "light");
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
  }

  if (!window.customElements.get('wwu-pre-header')) {    
    window.customElements.define("wwu-pre-header", PreHeader);
  }
}
