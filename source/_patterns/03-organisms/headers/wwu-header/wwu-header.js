if (
  typeof context == "undefined" ||
  (typeof context != "undefined" && context == document)
) {
  const header_template = document.createElement("template");
  header_template.innerHTML = `
    <button class="small icon-with-text toggle-menu" aria-expanded="false">
    <span class="material-icons" aria-hidden="true">menu</span>
    <span class="toggle-text">Open Menu</span>
    </button>
    
    <nav class="wwu-menu wwu-menu-closed" aria-label="Western Quick Links">
    <a class="small icon-with-text apply-quick-link" href="https://admissions.wwu.edu/apply">
    <span class="material-icons" aria-hidden="true">how_to_reg</span>
    <span class="icon-text">Apply</span>
    </a>
    
    <a class="small icon-with-text give-quick-link" href="https://wwu.edu/give">
    <span class="material-icons" aria-hidden="true">favorite_border</span>
    <span class="icon-text">Give</span>
    </a>
    
    <a class="small icon-with-text report-bias-quick-link" href="https://www.wwu.edu/sebrt/report-bias-incident">
    <span class="material-icons" aria-hidden="true">sms</span>
    <span class="icon-text">Report Bias</span>
    </a>
    
    <a class="small icon-with-text my-western-link" href="https://mywestern.wwu.edu">
    <span class="material-icons" aria-hidden="true">person_pin</span>
    <span class="icon-text">myWestern</span>
    </a>
    
    <a class="small icon-with-text jobs-link" href="https://www.wwu.edu/workatwestern">
    <span class="material-icons" aria-hidden="true">business_center</span>
    <span class="icon-text">Jobs</span>
    </a>
    </nav>
    
    <div class="site-info wwu-menu-open">
    <div class="western-logo">
    <a class="western-home-link" href="https://www.wwu.edu">
    <wwu-logo></wwu-logo>
    </a>
    </div>
    
    <div class="site-name">
    <a href="/" class="home-link"></a>
    </div>
    
    <div class="western-header-region">
    </div>
    </div>   
    `;

  class WWUHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template */
      this.appendChild(header_template.content.cloneNode(true));

      const site_name = this.attributes.sitename.value;
      const region_content = this.attributes.regioncontent.value;

      this.querySelector(".home-link").innerText = site_name;
      this.querySelector(".western-header-region").innerHTML = region_content;

      /*------------------------------------------------------------------------------
        Mobile menu functionality
        --------------------------------------------------------------------------*/
      const menu_toggle = this.querySelector(".toggle-menu");
      const site_content = [
        this.querySelector(".site-info"),
        document.querySelector(".page-content"),
      ];
      const mobile_menu = [
        this.querySelector(".wwu-menu"),
        document.querySelector(".main-navigation"),
      ];

      function open_menu() {
        menu_toggle.setAttribute("aria-expanded", true);
        menu_toggle.querySelector(".material-icons").innerText = "close";
        menu_toggle.querySelector(".toggle-text").innerHTML = "Close Menu";

        site_content.forEach(function (item) {
          item.classList.remove("wwu-menu-open");
          item.classList.add("wwu-menu-closed");
        });

        mobile_menu.forEach(function (item) {
          item.classList.remove("wwu-menu-closed");
          item.classList.add("wwu-menu-open");
        });
      }

      function close_menu() {
        menu_toggle.setAttribute("aria-expanded", false);
        menu_toggle.querySelector(".material-icons").innerText = "menu";
        menu_toggle.querySelector(".toggle-text").innerHTML = "Open Menu";

        site_content.forEach(function (item) {
          item.classList.remove("wwu-menu-closed");
          item.classList.add("wwu-menu-open");
        });

        mobile_menu.forEach(function (item) {
          item.classList.remove("wwu-menu-open");
          item.classList.add("wwu-menu-closed");
        });
      }

      function toggle_menu() {
        if (menu_toggle.querySelector(".material-icons").innerText == "menu") {
          open_menu();
          return;
        } else {
          close_menu();
          return;
        }
      }

      menu_toggle.addEventListener("click", toggle_menu);
    }
  }

  window.customElements.define("wwu-header", WWUHeader);
}
