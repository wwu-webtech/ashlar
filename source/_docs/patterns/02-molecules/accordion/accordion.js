if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const accordion_template = document.createElement("template");
    accordion_template.innerHTML = `
    `;
    
    class WWUAccordion extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {        
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
          
          setup(items[i].querySelector(".expand"));
          items[i].querySelector(".expand").addEventListener("click", toggle_item);
          items[i].querySelector(".expand").addEventListener("keyup", close_item);
        }
      }
    }
    window.customElements.define("wwu-accordion", WWUAccordion);

    function setup(item) {
      const item_content = item.parentNode.nextElementSibling;         
      const id = Math.random().toString(16).slice(2);      

      item.setAttribute("aria-controls", "accordion-content-" + id);
      item_content.setAttribute("id", "accordion-content-" + id);

      if (item.classList.contains("is-expanded")) {
        item.setAttribute("aria-expanded", "true");
      } else {
        item.setAttribute("aria-expanded", "false");
      }
    }

    function toggle_item() {
      const item_content = this.parentNode.nextElementSibling;         
      
      // close item
      if (item_content.classList.contains("is-expanded")) {
        item_content.classList.remove("is-expanded");
        item_content.style.maxHeight = null;
        this.querySelector(".material-icons").innerText = "add";
        this.setAttribute("aria-expanded", false);
      } 
      // open item
      else {
        item_content.classList.add("is-expanded");
        item_content.style.maxHeight = item_content.scrollHeight + "px";
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
    
    /* HTML accordion markup support - mainly for Drupal Views, where custom elements are not supported */       
    const items = document.querySelectorAll(".accordion-set .expand");
    for (let i = 0; i < items.length; i++) {
      setup(items[i]);
      items[i].addEventListener("click", toggle_item);
      items[i].addEventListener("keyup", close_item);
    }
  }