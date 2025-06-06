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

        const search = {
          toggle_button: this.querySelector(".toggle-search"), 
          text: "Search", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg>`
        };
        const close_icon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>`;

        var subdomain = window.location.hostname.split('.')[0];
        
        if (subdomain == "www" || subdomain == "search") {
          this.querySelector("#site-search").checked = false;
          this.querySelector("#full-search").checked = true;
        }

        function open(toggle) {
          toggle.toggle_button.setAttribute("aria-expanded", true);
          toggle.toggle_button.querySelector(".component-icon").innerHTML = close_icon;
          toggle.toggle_button.querySelector(".toggle-text").innerHTML = "Close";
          document.querySelector("html").classList.add("search-open");
          document.querySelector("html").classList.remove("search-closed");
          toggle.state = "open";         
        }
        
        function close(toggle) {
          toggle.toggle_button.setAttribute("aria-expanded", false);
          toggle.toggle_button.querySelector(".component-icon").innerHTML = toggle.icon;
          toggle.toggle_button.querySelector(".toggle-text").innerHTML = toggle.text;
          document.querySelector("html").classList.add("search-closed");
          document.querySelector("html").classList.remove("search-open");
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

        search.toggle_button.addEventListener("click", function() { toggle(search); });            
        close(search);        
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
