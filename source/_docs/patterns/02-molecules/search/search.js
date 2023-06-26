if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const search_template = document.createElement("template");
    search_template.innerHTML = `
    <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search/">
    <label for="search-box" class="search-label">Search:</label>
    <input id="search-box" name="query" type="search">
    <button class="submit-search">
    <span class="material-icons" aria-hidden="true">search</span>
    <span class="toggle-text">Go</span>
    </button>

    <input id="profile" type="hidden" name="pr">
    </form>
    `;

    class WWUSearch extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        /* Create the custom element by appending the template */
        this.appendChild(search_template.content.cloneNode(true));
        if (this.getAttribute("profile") != null) {
          this.querySelector("#profile").setAttribute("value", this.getAttribute("profile"));
        } else {
          this.querySelector("#profile").setAttribute("value", "Default-WWU-Base");
        }
      }
    }

    window.customElements.define("wwu-search", WWUSearch);
  }
