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
    <div class="navigation-wrapper">    
      <div class="university-links">
        <nav class="action-links" aria-label="Action Links">
          <a class="icon-link apply-quick-link" href="https://admissions.wwu.edu/apply">
            <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46.46 66.94" width="48px" height="48px"><path class="wwu-cls-4" d="M25.98,33.66c-4.24,0-7.68-3.44-7.68-7.68s3.44-7.68,7.68-7.68,7.68,3.44,7.68,7.68-3.44,7.68-7.68,7.68M25.98,66.94c11.6-18.4,20.48-31.23,20.48-41.98S36.73,5.5,25.98,5.5,5.5,14.21,5.5,24.96s8.88,23.58,20.48,41.98"/><path class="wwu-cls-3" d="M20.98,28.66c-4.24,0-7.68-3.44-7.68-7.68s3.44-7.68,7.68-7.68,7.68,3.44,7.68,7.68-3.44,7.68-7.68,7.68ZM20.98.5C10.23.5.5,9.21.5,19.96s8.88,23.58,20.48,41.98c11.6-18.4,20.48-31.23,20.48-41.98S31.73.5,20.98.5Z"/></svg></span>
            Visit Campus
          </a>      
          <a class="icon-link apply-quick-link" href="https://admissions.wwu.edu/apply">
            <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54.6 50.53" width="48px" height="48px"><path class="wwu-cls-4" d="M27.52,50.53c-12.71,0-23.02-10.31-23.02-23.02S14.8,4.5,27.52,4.5s23.02,10.31,23.02,23.02-10.3,23.02-23.02,23.02"/><polyline class="wwu-cls-3" points="9.5 19.42 23.46 32.84 54.24 1.5"/><path class="wwu-cls-3" d="M46.53,23.52c0,12.71-10.31,23.02-23.02,23.02S.5,36.23.5,23.52,10.81.5,23.52.5s23.02,10.3,23.02,23.02Z"/></svg></span>
            Apply Today
          </a>      
          <a class="icon-link give-quick-link" href="https://alumniq.wwu.edu/giving/make-a-gift">
            <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.66 49.57" width="48px" height="48px"><path class="wwu-cls-4" d="M29.08,49.57c4.29-8.96,24.58-16.47,24.58-31.36S34.87-.17,29.08,11.51C23.29-.15,4.5,3.19,4.5,18.21s20.28,22.4,24.58,31.36"/><path class="wwu-cls-3" d="M25.08,45.57c4.29-8.96,24.58-16.47,24.58-31.36S30.87-4.17,25.08,7.51C19.29-4.15.5-.81.5,14.21s20.28,22.4,24.58,31.36"/></svg></span>
            Give
          </a>           
        </nav>    
  
        <nav class="quick-links" aria-labelledby="quick-links">            
          <h2 id="quick-links" class="visually-hidden">Quick Links</h2>
          <a href="https://mywestern.wwu.edu">myWestern</a>        
          <a href="https://www.wwu.edu/contactwwu/">Contact WWU</a>    
          <a href="https://calendar.wwu.edu/">Calendar</a>    
          <a href="https://www.wwu.edu/directory">Directory</a>                    
          <a href="https://www.wwu.edu/campus-maps">Maps</a>            
        </nav>       
      </div>          
    </div>
  
    <div class="buttons">
      <button class="small toggle-menu" aria-expanded="false">
          <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/></svg></span>
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
        const region_content = this.querySelector('#regioncontent');
        
        if(this.getAttribute("sitename") != null) { 
          site_name = this.getAttribute("sitename"); 
          this.querySelector(".home-link").innerText = site_name;
        }
        if(this.getAttribute("sitename-link") != null) { 
          site_name_link = this.getAttribute("sitename-link"); 
          this.querySelector(".home-link").setAttribute("href", site_name_link);
        }
        if(region_content) { 
          this.querySelector(".western-header-region").innerHTML = region_content.innerHTML;
        }      
        
        /*------------------------------------------------------------------------------
        Menu pop-up functionality
        --------------------------------------------------------------------------*/
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;
        const menu_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/></svg>`;
        var html = document.querySelector("html");
        var nav_wrapper = this.querySelector(".navigation-wrapper");
        var main_nav = document.querySelector(".region--main_navigation");
        var menu_toggle = this.querySelector(".toggle-menu");
        
        waitForElm(".button--ultimenu").then((elm) => {
          elm.setAttribute("aria-hidden", "true");
          elm.classList.add("visually-hidden");
        });                
        
        
        /* Open menu -------------------------------------------------------------*/
        function open() {
          menu_toggle.setAttribute("aria-expanded", true);
          menu_toggle.querySelector(".component-icon").innerHTML = close_icon;
          menu_toggle.querySelector(".toggle-text").innerHTML = "Close";
          
          nav_wrapper.removeAttribute("aria-hidden");
          
          html.classList.add("navigation-open");
          html.classList.remove("navigation-closed");
        }
        
        /* Close menu -------------------------------------------------------------*/        
        function close() {
          menu_toggle.setAttribute("aria-expanded", false);
          menu_toggle.querySelector(".component-icon").innerHTML = menu_icon;
          menu_toggle.querySelector(".toggle-text").innerHTML = "Menu";
          
          nav_wrapper.setAttribute("aria-hidden", true);
          
          html.classList.add("navigation-closed");
          html.classList.remove("navigation-open");
        }
        
        function keyboard_close(event) {
          if (event.keyCode == 27 && html.classList.contains("navigation-open")) {
            close();
            menu_toggle.focus();
          }
        }
        
        /* Toggle menu -----------------------------------------------------------*/
        function toggle_menu() {
          if (html.classList.contains("navigation-closed")) {
            open();
            return;
          } else {
            close();
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
        
        function updateNavPosition() {
          if (html.classList.contains("is-ultimenu--active") || window.innerWidth <= 951) {
            nav_wrapper.prepend(main_nav);
            close();
          } else {                        
            document.querySelector("wwu-header").append(main_nav);
          }
        }
        
        
        if (menu_toggle) {
          menu_toggle.addEventListener("click", toggle_menu);
          menu_toggle.addEventListener("keyup", keyboard_close);
          this.addEventListener("keyup", keyboard_close);
        }     
        updateNavPosition();
        window.addEventListener("resize", updateNavPosition);
        
        /* Alternate theme settings */
        const hide_links = this.getAttribute('hidelinks');
        const site_logo = this.getAttribute('logo');        
        if (hide_links) {          
          this.querySelector(".university-links").remove();          
        }        
        if (site_logo != "/") {
          console.log(site_logo);
          this.querySelector(".wwu-home-link").innerHTML = `<img src="${site_logo}" alt="${site_name} logo"/>`
        }
      }
    }
  }
  if (!window.customElements.get('wwu-header')) {        
    window.customElements.define("wwu-header", WWUHeader);
  }    
}