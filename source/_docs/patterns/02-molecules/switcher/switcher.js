if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
  const switcher_template = document.createElement("template");
  switcher_template.innerHTML = `
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
      function activate_tab(tab) {      
        if(this) { tab = this };
        deactivate_tab(active_tab);

        tab.setAttribute("aria-selected", "true");        
        tab.removeAttribute("tabindex");
        tab.classList.add("active"); 
        tab.prepend(left_arrow);
        tab.append(right_arrow);    

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

        if(key_pressed == "ArrowLeft") {
          if(this.previousElementSibling) {
            activate_tab(this.previousElementSibling);
            this.previousElementSibling.focus();
          } else {
            activate_tab(this.parentElement.lastChild);
            this.parentElement.lastChild.focus();
          }
        }
        if(key_pressed == "ArrowRight") {
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

      const switcher_id = this.getAttribute("label").toLowerCase().replaceAll(" ", "-");
      const switcher_items = this.querySelectorAll("wwu-switcher-item");      
      let active_tab;      

      const left_arrow = document.createElement("span");
      const right_arrow = document.createElement("span");      
      left_arrow.setAttribute("aria-hidden", "true");
      left_arrow.setAttribute("class", "material-icons show");
      left_arrow.innerText = "chevron_left";
      right_arrow.setAttribute("aria-hidden", "true");
      right_arrow.setAttribute("class", "material-icons show");
      right_arrow.innerText = "chevron_right";

      /* Create tabs & tabpanel from wwu-switcher-item tags */
      for (let i = 0; i < switcher_items.length; i++) {
        const switcher_tab = document.createElement("button");
        const switcher_content = document.createElement("div");
        switcher_tab.content = switcher_content;

        this.querySelector(".switcher").setAttribute("aria-label", this.getAttribute("label"));
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

        switcher_tab.addEventListener("click", activate_tab);
        switcher_tab.addEventListener("keyup", tab_select);

        switcher_items[i].remove();        
      }
    }
  }

  window.customElements.define("wwu-switcher", WWUSwitcher);
}
