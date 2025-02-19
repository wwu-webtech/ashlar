if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const header_template = document.createElement("template");
    header_template.innerHTML = `
    <!--link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Sans+Extra+Condensed:wght@300;400&family=Fira+Sans:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&family=Montserrat:wght@700;900&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet" /-->
    <!--link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /-->
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/normalize.css" /-->
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/ashlar-base.css" /-->
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/wwu-header.css" /-->
       
    <div class="western-logo" type="wwu">
        <a class="wwu-home-link" href="https://www.wwu.edu">
            <wwu-logo type="wwu"></wwu-logo>
        </a>
    </div>
    
    <div class="site-name">
        <a href="/" class="home-link"></a>
    </div>
    
    <div class="western-header-region">
    </div>

    <button class="toggle toggle-menu" aria-expanded="false">
        <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/></svg></span>
        <span class="toggle-text">Menu</span>
    </button>

    <button class="toggle toggle-search" aria-expanded="false">
        <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg></span>
        <span class="toggle-text">Search</span>
    </button>
    `;
    
    class WWUHeader extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        let element_exists = this.classList.contains("element-created");        
        /* Create the custom element by appending the template */
        if (!element_exists) {
          this.appendChild(header_template.content.cloneNode(true));
          this.classList.add("element-created");
          let site_name;
          let site_name_link;
          let region_content;
          
          if(this.getAttribute("sitename") != null) { 
            site_name = this.getAttribute("sitename"); 
            this.querySelector(".home-link").innerText = site_name;
          }
          if(this.getAttribute("sitename-link") != null) { 
            site_name_link = this.getAttribute("sitename-link"); 
            this.querySelector(".home-link").setAttribute("href", site_name_link);
          }
          if(this.getAttribute("regioncontent") != null) { 
            region_content  = this.getAttribute("regioncontent"); 
            this.querySelector(".western-header-region").innerHTML = region_content;
          }     
          
          /*------------------------------------------------------------------------------
          Mobile menu functionality
          --------------------------------------------------------------------------*/
          const menu = {
            toggle_button: this.querySelector(".toggle-menu"), 
            text: "Menu", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/></svg>`
          };
          const search = {
            toggle_button: this.querySelector(".toggle-search"), 
            text: "Search", 
            icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg>`
          };
          const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;
          const site_content = [
            this.querySelector(".site-info"),
            document.querySelector(".page-content"),
          ];
          const mobile_menu = [
            this.querySelector(".wwu-menu"),
          ];
          waitForElm('.main-navigation').then((elm) => {
            mobile_menu[1] = document.querySelector(".main-navigation");
          });
         
          // Non-Drupal Applications
          if (document.querySelector(".is-ultimenu") == null) {            
            waitForElm('.nav-primary').then((elm) => {
                mobile_menu[2] = document.querySelector(".nav-primary"); // Wordpress
            });
          }

          function open(toggle) {
            toggle.toggle_button.setAttribute("aria-expanded", true);
            toggle.toggle_button.querySelector(".component-icon").innerHTML = close_icon;
            toggle.toggle_button.querySelector(".toggle-text").innerHTML = "Close";
            toggle.state = "open";
            
            /*site_content.forEach(function (item) {
              if (item) {
                item.classList.remove("wwu-menu-open");
                item.classList.add("wwu-menu-closed");
              }
            });
            
            mobile_menu.forEach(function (item) {
              if (item) {
                item.classList.remove("wwu-menu-closed");
                item.classList.add("wwu-menu-open");
              }
            });*/
          }
          
          function close(toggle) {
            toggle.toggle_button.setAttribute("aria-expanded", false);
            toggle.toggle_button.querySelector(".component-icon").innerHTML = toggle.icon;
            toggle.toggle_button.querySelector(".toggle-text").innerHTML = toggle.text;
            toggle.state = "closed";
            
            /*site_content.forEach(function (item) {
              if (item) {
                item.classList.remove("wwu-menu-closed");
                item.classList.add("wwu-menu-open");
              }
            });
            
            mobile_menu.forEach(function (item) {
              if (item) {
                item.classList.remove("wwu-menu-open");
                item.classList.add("wwu-menu-closed");
              }
            });*/
          }
          
          function toggle(x) {
            if (x.state == "closed") {
              open(x);
              return;
            } else {
              close(x);
              return;
            }
          }
          
          function waitForElm(selector) {
            return new Promise(resolve => {
              if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
              }
              
              const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                  resolve(document.querySelector(selector));
                  observer.disconnect();
                }
              });
              
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });
            });
          }
          
          
          menu.toggle_button.addEventListener("click", function() { toggle(menu); });            
          search.toggle_button.addEventListener("click", function() { toggle(search); });            
          close(menu);
          close(search);

        }
      }
    }
    if (!window.customElements.get('wwu-header')) {        
      window.customElements.define("wwu-header", WWUHeader);
    }    
  }
  