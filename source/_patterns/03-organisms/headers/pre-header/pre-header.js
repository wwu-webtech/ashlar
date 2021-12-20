const pre_header_template = document.createElement("template");
pre_header_template.innerHTML = `
<div class="pre-header">
    <a href="#main-content" class="skip-link focusable">Skip to main content</a>

    <div class="display-settings">
        <button class="small icon-with-text toggle-display-settings" aria-expanded="false" aria-controls="display-settings-menu">
        <span class="material-icons toggle-icon" aria-hidden="true">settings</span>
        <span class="toggle-text">Open Display Settings</span>
        </button>
    
        <div id="display-settings-menu" class="display-settings-menu closed">
        <div class="menu-container">
            <div class="theme-selection">
            <fieldset>
                <legend>Theme</legend>
                <input id="default-theme" type="radio" name="theme-select" value="default-theme" checked="checked">
                <label for="default-theme">Default (System)</label>
                <input id="dark-mode" type="radio" name="theme-select" value="dark-mode">
                <label for="dark-mode">Dark</label>
                <input id="light-mode" type="radio" name="theme-select" value="light-mode">
                <label for="light-mode">Light</label>
            </fieldset>
            </div>
    
            <div class="font-selection">
            <fieldset>
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
            </div>
        </div>
        <button id="reset-display-preferences" class="reset-button"><span class="material-icons" aria-hidden="true">replay</span> Reset preferences</button>
        </div>
    </div>
 

    // language selector could go here
</div>
`;

class PreHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(pre_header_template.content.cloneNode(true));
  }
}

window.customElements.define("wwu-pre-header", PreHeader);
