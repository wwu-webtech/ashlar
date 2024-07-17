if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const accordion_template = document.createElement("template");
    accordion_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/accordion.css" /-->
    `;
    
    class WWUAccordion extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {        
        let element_exists = this.classList.contains("element-created");
        
        if (!element_exists) {
          this.appendChild(accordion_template.content.cloneNode(true));
          this.classList.add("element-created");
          
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
            <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
            ${label_text}
            </button>
            `
            items[i].prepend(label);
            
            setup(items[i].querySelector(".expand"));
            items[i].querySelector(".expand").addEventListener("click", click_toggle);
            items[i].querySelector(".expand").addEventListener("keyup", key_close);
            
            if (items[i].getAttribute("expand")) {
              open_item(items[i].querySelector(".expand"));
            }
          }
        }
      }
    }
    if (!window.customElements.get('wwu-accordion')) {    
      window.customElements.define("wwu-accordion", WWUAccordion);
    }
    
    function setup(item) {
      const item_content = item.parentNode.nextElementSibling;         
      const id = Math.random().toString(16).slice(2);      
      
      item.setAttribute("aria-controls", "accordion-content-" + id);
      item_content.setAttribute("id", "accordion-content-" + id);
      
      if (item.localName === 'div') {
        item.setAttribute("tabindex", "0");
        item.setAttribute("role", "button");
      }
      
      if (item.classList.contains("is-expanded")) {
        item.setAttribute("aria-expanded", "true");
      } else {
        item.setAttribute("aria-expanded", "false");
      }
    }
    
    function click_toggle() {
      const item_content = this.parentNode.nextElementSibling;         
      
      if (item_content.classList.contains("is-expanded")) {
        close_item(this);
      } else {
        open_item(this);
      }
      set_expand_collapse_all_state();
    }    
    function key_close (event) {
      const key_pressed = event.code;
      if (key_pressed == "Escape") {
        close_item(this);
      }
    }
    function key_toggle(event) {
      const key_pressed = event.code;
      const item_content = this.parentNode.nextElementSibling;
      
      if (key_pressed == "Enter" || key_pressed == "Space") {
        event.preventDefault();
        if (item_content.classList.contains("is-expanded")) {
          close_item(this);
        } else {
          open_item(this);
        }
        set_expand_collapse_all_state();
      }
    }
    
    function open_item(item) {
      const item_content = item.parentNode.nextElementSibling;         
      const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
      
      item_content.classList.add("is-expanded");
      item_content.style.maxHeight = item_content.scrollHeight + "px";      
      item.setAttribute("aria-expanded", true);
      
      if(item.querySelector(".component-icon")) {
        item.querySelector(".component-icon").innerHTML = close_icon;
      } else if (item.querySelector(".material-icons")) {
        item.querySelector(".material-icons").innerHTML = close_icon;
      }
      
    }    
    function close_item(item) {
      const item_content = item.parentNode.nextElementSibling;          
      const open_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`;
      
      item_content.classList.remove("is-expanded");
      item_content.style.maxHeight = null;
      item.setAttribute("aria-expanded", false);
      
      if(item.querySelector(".component-icon")) {
        item.querySelector(".component-icon").innerHTML = open_icon;
      } else if (item.querySelector(".material-icons")) {
        item.querySelector(".material-icons").innerHTML = open_icon;
      }
    }
    
    /* HTML accordion markup support - mainly for Drupal Views, where custom elements are not supported */       
    const items = document.querySelectorAll(".accordion-set div.expand");     
    for (let i = 0; i < items.length; i++) {
      setup(items[i]);
      items[i].addEventListener("click", click_toggle);
      items[i].addEventListener("keypress", key_toggle);
      items[i].addEventListener("keyup", key_close);
      
      if (items[i].classList.contains("is-expanded")) {
        open_item(items[i]);
      }
    }
    
    // Expand/collapse all accordion items
    const button_collapse_all = document.createElement("button");
    button_collapse_all.classList.add('collapse-all');
    if (!document.querySelectorAll('wwu-accordion-item .content.is-expanded')) {
      button_collapse_all.setAttribute('disabled', 'true');
    }
    button_collapse_all.innerHTML = `
      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></span>
      Collapse all sections
    `;
    
    const button_expand_all = document.createElement("button");
    button_expand_all.classList.add('expand-all');
    button_expand_all.innerHTML = `
      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
      Expand all sections
    `;
    
    // Docusaurus needs timeout function to add buttons when wwu-accordion is loaded
    const wwu_accordion_check_interval = function() {
      let wwu_accordion_exists;
      setTimeout(() => {
        wwu_accordion_exists = document.querySelector('wwu-accordion') ? true : false;
        if (wwu_accordion_exists === false) {
          wwu_accordion_check_interval();
        } else {
          clearTimeout();
          document.querySelector('wwu-accordion.element-created').prepend(button_expand_all, button_collapse_all);
        }
      }, 100);
    }
    wwu_accordion_check_interval();

    // Disable expand/collapse all button based on how many items are open
    function set_expand_collapse_all_state() {
      const items = document.querySelectorAll("wwu-accordion-item");
      const expanded_items = document.querySelectorAll("wwu-accordion-item .is-expanded");
      
      switch(expanded_items.length) {
        case 0:
          document.querySelector(".collapse-all").setAttribute("disabled", "true");
          break;
        case items.length:
          document.querySelector(".expand-all").setAttribute("disabled", "true");
          break;
        default:
          document.querySelector(".collapse-all").removeAttribute("disabled");
      }
    }

    button_expand_all.addEventListener('click', function() {
      const items = document.querySelectorAll("wwu-accordion-item .expand");        
      for (let i = 0; i < items.length; i++) { 
        open_item(items[i]);
      }
      button_expand_all.setAttribute('disabled', 'true');
      button_collapse_all.removeAttribute('disabled');
    });
    

    button_collapse_all.addEventListener('click', function() {
      const items = document.querySelectorAll("wwu-accordion-item .expand");        
      for (let i = 0; i < items.length; i++) { 
        close_item(items[i]);
      }
      button_collapse_all.setAttribute('disabled', 'true');
      button_expand_all.removeAttribute('disabled');
    });
  }