if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const search_template = document.createElement("template");
  search_template.innerHTML = `
  <button class="toggle toggle-search" aria-expanded="false">
      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg></span>
      <span class="toggle-text">Search</span>
  </button>   
    
  <div class="wwu-search">
    <form class="search-form">
        <label for="search-box" class="search-label">What can we help you find?</label>
        <input id="search-box" name="q" type="search">

        <fieldset class="search-selection">
          <legend class="visually-hidden">Search Scope</legend>
          <div class="radio">
              <input id="site-search" name="search-select" value="site" type="radio" checked>
              <label for="site-search">This department or website only</label>
          </div>          
          <div class="radio">
              <input id="full-search" name="search-select" value="full" type="radio">
              <label for="full-search">All Western Washington University websites</label>
          </div>
        </fieldset>
        <button class="submit-search" type="submit">            
            <span class="toggle-text">Search</span>
        </button>
    </form>
  </div>
  `;
  
  class WWUSearch extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      /* Create the custom element by appending the template */
      if (!element_exists) {
        this.appendChild(search_template.content.cloneNode(true));
        this.classList.add("element-created");
        this.querySelector(".search-form").addEventListener("submit", this.submitSearch.bind(this));        

        var subdomain = window.location.hostname.split('.')[0];
        
        /*------------------------------------------------------------------------------
        Search pop-up functionality
        ------------------------------------------------------------------------------*/
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;
        const search_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg>`;
        var html = document.querySelector("html");
        var search_toggle = this.querySelector(".toggle-search");
        var search_form = this.querySelector(".wwu-search");
        
        if (subdomain == "www" || subdomain == "search") {
          this.querySelector("#site-search").checked = false;
          this.querySelector("#full-search").checked = true;
        }

        /* Open search -------------------------------------------------------------*/
        function open() {
          document.addEventListener("mouseup", click_outside);

          search_toggle.setAttribute("aria-expanded", true);
          search_toggle.querySelector(".component-icon").innerHTML = close_icon;
          search_toggle.querySelector(".toggle-text").innerHTML = "Close";

          html.classList.add("search-open");
          html.classList.remove("search-closed");
        }

        /* Close search -------------------------------------------------------------*/        
        function close() {
          document.removeEventListener("mouseup", click_outside);

          search_toggle.setAttribute("aria-expanded", false);
          search_toggle.querySelector(".component-icon").innerHTML = search_icon;
          search_toggle.querySelector(".toggle-text").innerHTML = "Search";

          html.classList.add("search-closed");
          html.classList.remove("search-open");
        }

        function keyboard_close(event) {
          if (event.keyCode == 27 && html.classList.contains("search-open")) {
            close();
            search_toggle.focus();
          }
        }
        
        function click_outside(event) {
          var isClickInside = search_form.contains(event.target);
          var isClickToggle = search_toggle.contains(event.target);
          
          if (
            html.classList.contains("search-open") &&
            !isClickInside &&
            !isClickToggle
          ) {
            close();
          }
        }

        /* Toggle search -----------------------------------------------------------*/
        function toggle_search() {
          if (html.classList.contains("search-open")) {
            close();
            return;
          } else {
            open();
            return;
          }
        }
             
        if (search_toggle) {
          search_toggle.addEventListener("click", toggle_search);
          search_toggle.addEventListener("keyup", keyboard_close);
          search_form.addEventListener("keyup", keyboard_close);
        }
        close();
      }
    }
    
    submitSearch(event) {
      event.preventDefault();
      var query = this.querySelector("#search-box").value;
      var subdomain = window.location.hostname.split('.')[0];
      
      if (this.querySelector("#site-search").checked) {
        window.location.href = "https://search.wwu.edu/?q=" + encodeURIComponent(query) + " site%3A" + encodeURIComponent(subdomain) + ".wwu.edu";
      } else {
        window.location.href = "https://search.wwu.edu/?q=" + encodeURIComponent(query);
      }
    }
  }
  if (!window.customElements.get('wwu-search')) {    
    window.customElements.define("wwu-search", WWUSearch);
  }
}
