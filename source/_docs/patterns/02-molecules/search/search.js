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
    
  <form class="search-area">
      <label for="search-box" class="search-label">Search</label>
      <input id="search-box" name="q" type="search">
      <button class="submit-search" type="submit">
          <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span>
          <span class="toggle-text">Go</span>
      </button>
  </form>

  <div id="search-menu" class="search-menu">
      <fieldset class="search-selection">
          <legend>Search Scope</legend>
          <div class="radio">
              <input id="site-search" name="search-select" value="site" type="radio" checked>
              <label for="site-search">This department or website only</label>
          </div>
          
          <div class="radio">
              <input id="full-search" name="search-select" value="full" type="radio">
              <label for="full-search">All Western Washington University websites</label>
          </div>
      </fieldset>
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
        this.querySelector(".search-area").addEventListener("submit", this.submitSearch.bind(this));

        const search = {
          toggle_button: this.querySelector(".toggle-search"), 
          text: "Search", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.23 0-156.12-63.84-63.88-63.83-63.88-156Q162-672 225.84-736q63.83-64 156-64Q474-800 538-736.12q64 63.89 64 156.12 0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg>`
        };

        var subdomain = window.location.hostname.split('.')[0];
        
        if (subdomain == "www" || subdomain == "search") {
          this.querySelector("#site-search").checked = false;
          this.querySelector("#full-search").checked = true;
        }
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
