if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const display_settings_template = document.createElement("template");
  display_settings_template.innerHTML = `
  <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/display-settings.css" /-->

  <button class="toggle-settings" aria-expanded="false" aria-controls="settings-menu">
      <span class="component-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M292-172v-28h174v-120H192q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h576q26 0 43 17t17 43v348q0 26-17 43t-43 17H494v120h174v28H292ZM160-380q0 12 10 22t22 10h576q12 0 22-10t10-22v-348q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v348Zm0 0v-380 412-32Z"/></svg>
      </span>
      <span class="toggle-text"><span class="visually-hidden">Display </span>Settings</span>
  </button>

  <div class="settings-menu">
      <div class="menu-container">
          <h2 class="no-margin--top align-center">Display Settings</h2>
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
      <button class="reset-button"><span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
          height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
          d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
      </svg></span> Reset preferences</button>
  </div>   
  `;
  
  class DisplaySettings extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      /* Create the custom element by appending the template -----------------------*/
      if (!element_exists) {
        this.appendChild(display_settings_template.content.cloneNode(true));
        this.classList.add("element-created");
        
        /*------------------------------------------------------------------------------
        Menu functionality
        ------------------------------------------------------------------------------*/
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;
        const settings_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M292-172v-28h174v-120H192q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h576q26 0 43 17t17 43v348q0 26-17 43t-43 17H494v120h174v28H292ZM160-380q0 12 10 22t22 10h576q12 0 22-10t10-22v-348q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v348Zm0 0v-380 412-32Z"/></svg>`;        
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
        function open() {
          document.addEventListener("mouseup", click_outside);
          
          display_toggle.setAttribute("aria-expanded", true);
          display_toggle.querySelector(".component-icon").innerHTML = close_icon;
          
          settings_menu.removeAttribute("aria-hidden");

          html.classList.add("settings-open");
          html.classList.remove("settings-closed");
        }
        
        /* Close the menu -------------------------------------------------------------*/
        function close() {
          document.removeEventListener("mouseup", click_outside);
          
          display_toggle.setAttribute("aria-expanded", false);
          display_toggle.querySelector(".component-icon").innerHTML = settings_icon;
          
          settings_menu.setAttribute("aria-hidden", true);

          html.classList.add("settings-closed");
          html.classList.remove("settings-open");
        }
        
        function keyboard_close(event) {
          if (event.keyCode == 27 && html.classList.contains("settings-open")) {
            close();
            display_toggle.focus();
          }
        }
        
        function click_outside(event) {
          var isClickInside = settings_menu.contains(event.target);
          var isClickToggle = display_toggle.contains(event.target);
          
          if (
            html.classList.contains("settings-open") &&
            !isClickInside &&
            !isClickToggle
          ) {
            close();
          }
        }
        
        /* Toggle the menu -----------------------------------------------------------*/
        function toggle_settings() {
          if (html.classList.contains("settings-closed")) {
            open();
            return;
          } else {
            close();
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
        close();
      }
    }
  }
  
  if (!window.customElements.get('wwu-display-settings')) {    
    window.customElements.define("wwu-display-settings", DisplaySettings);
  }
}
