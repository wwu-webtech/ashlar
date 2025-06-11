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
  
    <div class="buttons">
      <button class="small toggle-menu" aria-expanded="false">
          <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></span>
          <span class="toggle-text">Menu</span>
      </button>

      <wwu-search role="search" aria-label="Western">
          <noscript>
              <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search">
                  <label for="search-box" class="search-label">Search:</label>
                  <input id="search-box" name="query" type="search">
                  <button class="submit-search">
                      <span class="material-icons" aria-hidden="true">search</span>
                      <span class="toggle-text">Go</span>
                  </button>
                  
                  <input type="hidden" name="pr" value="Default-WWU-Base">
              </form>
          </noscript>
      </wwu-search>

      <wwu-display-settings></wwu-display-settings>
    </div>

    <div class="site-name">
        <a href="/" class="home-link"></a>
    </div>
    
    <div class="western-header-region">
    </div>
  
    <div class="western-logo" type="wwu">
      <a class="wwu-home-link" href="https://www.wwu.edu">
          <wwu-logo type="wwu"></wwu-logo>
      </a>
    </div>
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
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;
        
        waitForElm('.button--ultimenu').then((elm) => {
          elm.remove();
        });
                
        
        function open(toggle) {
          toggle.toggle_button.setAttribute("aria-expanded", true);
          toggle.toggle_button.querySelector(".component-icon").innerHTML = close_icon;
          toggle.toggle_button.querySelector(".toggle-text").innerHTML = "Close";
          document.querySelector("html").classList.add("navigation-open");
          document.querySelector("html").classList.remove("navigation-closed");
          toggle.state = "open";         
        }
        
        function close(toggle) {
          toggle.toggle_button.setAttribute("aria-expanded", false);
          toggle.toggle_button.querySelector(".component-icon").innerHTML = toggle.icon;
          toggle.toggle_button.querySelector(".toggle-text").innerHTML = toggle.text;
          document.querySelector("html").classList.add("navigation-closed");
          document.querySelector("html").classList.remove("navigation-open");
          toggle.state = "closed";
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
        close(menu);        
      }
    }
  }
  if (!window.customElements.get('wwu-header')) {        
    window.customElements.define("wwu-header", WWUHeader);
  }    
}