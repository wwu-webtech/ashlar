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
        function toggle_item() {
          const item_content = this.parentNode.nextElementSibling;

          if (item_content.classList.contains("is-expanded")) {
            item_content.classList.remove("is-expanded");
            this.querySelector(".material-icons").innerText = "add";
            this.setAttribute("aria-expanded", false);
          } else {
            item_content.classList.add("is-expanded");
            this.querySelector(".material-icons").innerText = "clear";
            this.setAttribute("aria-expanded", true);
          }
        }
        function close_item(event) {
          const key_pressed = event.code;

          if(key_pressed == "Escape") {
            this.parentNode.nextElementSibling.classList.remove("is-expanded");
            this.querySelector(".material-icons").innerText = "add";
            this.removeAttribute("aria-expanded", false);
          }
        }
        /* Create the custom element by appending the template */
        this.appendChild(accordion_template.content.cloneNode(true));
        
        const items = this.querySelectorAll("wwu-accordion-item");
        const id = Math.floor(Math.random() * 1000000);        

        for (let i = 0; i < items.length; i++) { 
          const content = items[i].innerHTML;
          items[i].innerHTML = ``;

          const content_container = document.createElement("div");
          content_container.setAttribute("id", "accordion-" + id + "-content-" + i);
          content_container.classList.add("content");
          items[i].append(content_container);
          content_container.innerHTML = content;

          const label = document.createElement(items[i].getAttribute("heading-level"));
          const label_text = items[i].getAttribute("label");
          label.classList.add("title");
          label.innerHTML = `
            <button class="expand" aria-controls="accordion-${id}-content-${i}">
              <span class="material-icons" aria-hidden="true">add</span>
              ${label_text}
            </button>
          `
          items[i].prepend(label);

          items[i].querySelector(".expand").addEventListener("click", toggle_item);
          items[i].querySelector(".expand").addEventListener("keyup", close_item);
        }
    }
  }

  window.customElements.define("wwu-accordion", WWUAccordion);
}
