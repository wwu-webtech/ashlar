if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const wwu_footer = document.createElement("template");
  wwu_footer.innerHTML = `
    <wwu-logo></wwu-logo>

    <div class="social">
        <h2 class="visually-hidden">Western social media links</h2>
        <wwu-social size="small" group="Western" url="https://www.facebook.com/westernwashingtonuniversity"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>
        <wwu-social size="small" group="Western" url="https://twitter.com/WWU"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.tiktok.com/@westernwauniversity"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.youtube.com/wwu"></wwu-social>
    </div>

    <div class="tribal-lands-statement">
        <h2 class="visually-hidden">Tribal Lands Statement</h2>
        <p>
            Western Washington University's main campus is <a href="https://www.wwu.edu/tribal-lands-statement">situated on the ancestral homelands of the Coast Salish
            Peoples</a>, who have lived in the Salish Sea basin, all throughout the San Juan Islands and the North Cascades
            watershed from time immemorial. We express our deepest respect and gratitude to our Indigenous neighbors,
            for their enduring care and protection of our shared lands and waterways.
        </p>
    </div>

    <div class="copyright">
        <h2 class="visually-hidden">Copyright and Contact Info</h2>
        <p>
            © <span class="copyright-date">{{ "now"|date("Y") }}</span> Western Washington University <span aria-hidden="true">
        </p>
    </div>

    <div class="footer-bottom">
        <nav class="footer-nav" aria-labelledby="wwu-footer-heading">
            <h2 id="wwu-footer-heading" class="visually-hidden">University Links and Policy</h2>
            <a class="icon-link" href="https://www.wwu.edu/wwucontact/"><span class="material-icons" aria-hidden="true">send</span>Contact Western</a> 
            <a class="icon-link" href="https://calendar.wwu.edu/"><span class="material-icons" aria-hidden="true">calendar_month</span>Calendar</a>
            <a class="icon-link" href="https://www.wwu.edu/directory"><span class="material-icons" aria-hidden="true">person_search</span>University Directory</a>
            <a class="icon-link" href="https://www.wwu.edu/campus-maps"><span class="material-icons" aria-hidden="true">map</span>Map</a>
            <a class="icon-link" href="https://www.wwu.edu/online-privacy-statement"><span class="material-icons" aria-hidden="true">policy</span>Privacy</a>
            <a class="icon-link" href="https://www.wwu.edu/commitment-accessibility"><span class="material-icons" aria-hidden="true">accessibility_new</span>Accessibility Notice</a>
            <a class="icon-link" href="https://www.wwu.edu/equal-opportunity-policy"><span class="material-icons" aria-hidden="true">diversity_3</span>Equal Employment Opportunity Policy</a>        
        </nav>
    </div>
  `;

  class WWUFooter extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template */
      this.appendChild(wwu_footer.content.cloneNode(true));
      let currentDate = new Date();
      this.querySelector('.copyright-date').innerText =  currentDate.getFullYear();
      this.setAttribute('aria-label', 'Western footer');
    }
  }

  window.customElements.define("wwu-footer", WWUFooter);
}
