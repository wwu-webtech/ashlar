const search_template = document.createElement("template");
search_template.innerHTML = `
<form class="search-area" method="get" action="https://search2.wwu.edu/texis/search">
  <div class="search-box">
    <input id="search-box" placeholder="Enter terms" name="query" type="search">
    <label for="search-box" class="search-label">Enter the terms you wish to search for.</label>
  </div>

  <button class="submit-search">
    <span class="material-icons" aria-hidden="true">search</span>
    <span class="toggle-text">Search</span>
  </button>

  <input type="hidden" name="pr" value="Default-WWU-Base">
</form>
`;

class WWUSearch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    /* Create the custom element by appending the template */
    this.appendChild(search_template.content.cloneNode(true));
  }
}

window.customElements.define("wwu-search", WWUSearch);
