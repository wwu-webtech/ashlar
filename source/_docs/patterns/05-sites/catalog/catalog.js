if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const search_template = document.createElement("template");
  search_template.innerHTML = `
  <link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/catalog.css" />
  `;
  
  class WWUCatalogStyles extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      /* Create the custom element by appending the template */
      if (!element_exists) {
        this.appendChild(search_template.content.cloneNode(true));
        this.classList.add("element-created");

        /* This is just a way to get the styles into acalog cleanly, since their inclusion does weird things with css variables*/
      }
    }
  }
  if (!window.customElements.get('wwu-catalog-styles')) {    
    window.customElements.define("wwu-catalog-styles", WWUCatalogStyles);
  }
}