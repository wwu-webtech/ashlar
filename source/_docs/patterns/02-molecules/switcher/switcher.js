if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
  const switcher_template = document.createElement("template");
  switcher_template.innerHTML = `
  <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/switcher.css" /-->
  <div class="switcher" role="tablist">
  </div>

  <div class="switcher-container">
  </div>
  `;

  class WWUSwitcher extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let element_exists = this.classList.contains("element-created");

      if (!element_exists) {
        function disable_page_scroll(event) {
          const key_pressed = event.code;

          if (key_pressed == "Tab") {
            return;
          }
          if (key_pressed == "ArrowUp" || "ArrowDown") {
            event.preventDefault();
          }
        }
        function activate_tab(tab) {      
          if(this) { tab = this };        
          deactivate_tab(active_tab);

          tab.setAttribute("aria-selected", "true");        
          tab.removeAttribute("tabindex");
          tab.classList.add("active"); 

          if (layout == "column") {
            tab.prepend(up_arrow);
            tab.append(down_arrow);
          } else {
            tab.prepend(left_arrow);
            tab.append(right_arrow);
          }    

          tab.content.classList.add("active");

          active_tab = tab;
        }
        function deactivate_tab(tab) {
          tab.setAttribute("aria-selected", "false");
          tab.setAttribute("tabindex", "-1");
          tab.classList.remove("active"); 

          tab.content.classList.remove("active");
        }
        function tab_select(event) {
          const key_pressed = event.code;

          if(key_pressed == "ArrowLeft" && layout != "column") {
            if(this.previousElementSibling) {
              activate_tab(this.previousElementSibling);
              this.previousElementSibling.focus();
            } else {
              activate_tab(this.parentElement.lastChild);
              this.parentElement.lastChild.focus();
            }
          }
          if(key_pressed == "ArrowUp" && layout == "column") {
            if(this.previousElementSibling) {
              activate_tab(this.previousElementSibling);
              this.previousElementSibling.focus();
            } else {
              activate_tab(this.parentElement.lastChild);
              this.parentElement.lastChild.focus();
            }
          }
          if(key_pressed == "ArrowRight" && layout != "column") {
            if(this.nextElementSibling) {            
              activate_tab(this.nextElementSibling);        
              this.nextElementSibling.focus();            
            } else {
              activate_tab(this.parentElement.querySelector("button"));
              this.parentElement.querySelector("button").focus();
            }
          }
          if(key_pressed == "ArrowDown" && layout == "column") {
            if(this.nextElementSibling) {            
              activate_tab(this.nextElementSibling);        
              this.nextElementSibling.focus();            
            } else {
              activate_tab(this.parentElement.querySelector("button"));
              this.parentElement.querySelector("button").focus();
            }
          }
        }

        /* Create the custom element by appending the template */
        this.appendChild(switcher_template.content.cloneNode(true));      
        this.classList.add("element-created");

        const switcher_id = this.getAttribute("label").toLowerCase().replaceAll(" ", "-");
        const switcher_items = this.querySelectorAll("wwu-switcher-item");      
        const layout = this.getAttribute("layout");
        let active_tab;      

        const left_arrow = document.createElement("span");
        const right_arrow = document.createElement("span");      
        const up_arrow = document.createElement("span");      
        const down_arrow = document.createElement("span");      
        left_arrow.setAttribute("aria-hidden", "true");
        left_arrow.setAttribute("class", "component-icon left");
        left_arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>`;
        right_arrow.setAttribute("aria-hidden", "true");
        right_arrow.setAttribute("class", "component-icon right");
        right_arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`;
        up_arrow.setAttribute("aria-hidden", "true");
        up_arrow.setAttribute("class", "component-icon up");
        up_arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`;
        down_arrow.setAttribute("aria-hidden", "true");
        down_arrow.setAttribute("class", "component-icon down");
        down_arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`;

        /* Create tabs & tabpanel from wwu-switcher-item tags */
        for (let i = 0; i < switcher_items.length; i++) {
          const switcher_tab = document.createElement("button");
          const switcher_content = document.createElement("div");
          switcher_tab.content = switcher_content;

          this.querySelector(".switcher").setAttribute("aria-label", this.getAttribute("label"));      
          if (layout == "column") {
            this.querySelector(".switcher").setAttribute("aria-orientation", "vertical");
          } else {
            this.querySelector(".switcher").setAttribute("aria-orientation", "horizontal");
          }
          
          this.querySelector(".switcher").appendChild(switcher_tab);
          switcher_tab.innerHTML = switcher_items[i].getAttribute("label");
          switcher_tab.setAttribute("role", "tab");
          switcher_tab.setAttribute("aria-selected", "false");
          switcher_tab.setAttribute("id", switcher_id + "-switch-tab-" + [i]);
          switcher_tab.setAttribute("aria-controls", switcher_id + "-switch-content-" + [i]);          

          this.querySelector(".switcher-container").appendChild(switcher_content);
          switcher_content.innerHTML = switcher_items[i].innerHTML;
          switcher_content.setAttribute("role", "tabpanel");
          switcher_content.setAttribute("tabindex", "0");        
          switcher_content.setAttribute("id", switcher_id + "-switch-content-" + [i]);
          switcher_content.setAttribute("aria-labelledby", switcher_id + "-switch-tab-" + [i]);


          /* make first item active */
          if (i == 0) {           
            active_tab = switcher_tab;
            activate_tab(switcher_tab);
          }
          else {
            deactivate_tab(switcher_tab);
          }

          switcher_tab.addEventListener("click", activate_tab);
          switcher_tab.addEventListener("keyup", tab_select);
          // In vertical tablists, remove page scroll behavior when arrow keys are used
          if (layout == "column") {
            switcher_tab.addEventListener("keydown", disable_page_scroll);
          }

          switcher_items[i].remove();        
        }
      }
    }
  }

  if (!window.customElements.get('wwu-switcher')) {    
    window.customElements.define("wwu-switcher", WWUSwitcher);
  }
}
