if (
  typeof context == "undefined" ||
  (typeof context != "undefined" && context == document)
) {
  const accordion_template = document.createElement("template");
  accordion_template.innerHTML = `
    <p>Stephanie by golly you've made an accordion.</p>
  `;

  class WWUAccordion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        /* Create the custom element by appending the template */
        this.appendChild(accordion_template.content.cloneNode(true));
    }
  }

  window.customElements.define("wwu-accordion", WWUAccordion);
}
