if (
  typeof context == "undefined" ||
  (typeof context != "undefined" && context == document)
) {
  const accordion_template = document.createElement("template");
  accordion_template.innerHTML = `
  `;

  class WWUAccordion extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        /* Create the custom element by appending the template */
        this.appendChild(accordion_template.content.cloneNode(true));

        const items = this.querySelectorAll("wwu-accordion-item");

        for (let i = 0; i < items.length; i++) { 
          const content = items[i].innerHTML;
          items[i].innerHTML = ``;

          const content_container = document.createElement("div");
          content_container.classList.add("content");
          items[i].append(content_container);
          content_container.innerHTML = content;

          const label = document.createElement(items[i].getAttribute("heading-level"));
          const label_text = items[i].getAttribute("label");
          label.classList.add("title");
          label.innerHTML = `
            <button class="expand">
              <span class="material-icons" aria-hidden="true">add</span>
              ${label_text}
            </button>
          `
          items[i].prepend(label);          
        }
    }
  }

  window.customElements.define("wwu-accordion", WWUAccordion);
}