  if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const footer_template = document.createElement("template");
  footer_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/wwu-footer.css" /-->

    <div class="artwork">
      <img src="https://ashlar.blob.core.windows.net/ashlar-theme-files/images/footer-artwork.webp" alt="Mountains, streams and trees rendered in bold and colorful illustration by Gretchen Leggitt" />
    </div>

    <svg class="footer-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1846 62.99" aria-hidden="true">
      <path d="M802.96,0c-54.83,0-110.08,2.83-165.26,6.2-80.32,4.9-160.48,10.91-238.91,10.91-30,0-59.74-.88-89.15-3.04-9-.66-17.82-1.43-26.59-2.24-19.96-1.84-39.65-3.82-60.58-4.99-16.09-.89-32.26-1.27-48.49-1.27-44.31,0-89.07,2.84-133.77,5.84C26.8,12.31,13.39,13.23,0,14.08v48.91s1846,0,1846,0V21.86c-13.58.6-27.37.88-41.66.88-14.29,0-28.6-.29-42.45-.83-23.4-.91-46.1-2.4-68.53-4.11-32.53-2.49-64.49-5.47-97.2-7.85-64.17-4.67-131.77-7.03-199.35-7.03-47.52,0-95.01,1.16-141.33,3.51-16.71.85-33.41,1.85-50.12,2.84-42.3,2.52-84.7,5.03-127.65,5.03-7.79,0-15.58-.08-23.41-.26-19.13-.44-37.68-1.45-55.95-2.73-2.58-.18-5.16-.37-7.73-.56-41.13-3.06-81.12-7.3-123.63-9.3C845.74.44,824.38,0,802.97,0"/>
    </svg>

    <div class="dark-blue-bg">
      <div class="tribal-lands-statement">
          <h2 class="visually-hidden">Tribal Lands Statement</h2>
          <p>
              Western Washington University's main campus is <a href="https://www.wwu.edu/tribal-lands-statement">situated on the ancestral homelands of the Coast Salish
              Peoples</a>, who have lived in the Salish Sea basin, all throughout the San Juan Islands and the North Cascades
              watershed from time immemorial. We express our deepest respect and gratitude to our Indigenous neighbors,
              for their enduring care and protection of our shared lands and waterways.
          </p>
      </div>

      <div class="social">
          <h2 class="visually-hidden">Western social media links</h2>
          <wwu-social size="small" group="Western" url="https://www.facebook.com/westernwashingtonuniversity" class="fb"></wwu-social>
          <wwu-social size="small" group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>
          <wwu-social size="small" group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>
          <wwu-social size="small" group="Western" url="https://twitter.com/WWU"></wwu-social>
          <wwu-social size="small" group="Western" url="https://www.tiktok.com/@westernwauniversity"></wwu-social>
          <wwu-social size="small" group="Western" url="https://www.youtube.com/wwu"></wwu-social>
      </div>
    
      <div class="copyright">
          <h2 class="visually-hidden">Copyright and Contact Info</h2>
          <p>
              © <span class="copyright-date">{{ "now"|date("Y") }}</span> Western Washington University
          </p>
      </div>
    
      <div class="footer-bottom">
          <nav class="footer-nav horizontal menu" aria-labelledby="wwu-footer-heading">
              <h2 id="wwu-footer-heading" class="visually-hidden">University Links and Policy</h2>            
              
              <a href="https://www.wwu.edu/workatwestern">Jobs</a>
              <a href="https://equity.wwu.edu/sebrt/report-bias-incident">Report Bias</a>
              <a href="https://www.wwu.edu/online-privacy-statement">Privacy</a>              
              <a href="https://www.wwu.edu/commitment-accessibility">Accessibility Notice</a>
              <a href="https://www.wwu.edu/equal-opportunity-policy">Equal Employment Opporunity Policy</a>
          </nav>
      </div>    
    </div>
  `;
  
  class WWUFooter extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      /* Create the custom element by appending the template */
      if (!element_exists) {
        this.appendChild(footer_template.content.cloneNode(true));
        this.classList.add("element-created");
        let currentDate = new Date();
        this.querySelector('.copyright-date').innerText =  currentDate.getFullYear();
        this.setAttribute('aria-label', 'Western footer');

        const hide = this.getAttribute('hide');
        if (hide) {          
          this.querySelector("wwu-logo").remove();
          this.querySelector(".social").remove();
          this.querySelector(".tribal-lands-statement").remove();
          this.querySelector(".copyright").remove();
        }
      }
    }
  }
  
  if (!window.customElements.get('wwu-footer')) {    
    window.customElements.define("wwu-footer", WWUFooter);
  }
}
