  if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const footer_template = document.createElement("template");
  footer_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/wwu-footer.css" /-->

<<<<<<< HEAD
    <div class="artwork">
      <img src="/themes/ashlar/source/images/footer-artwork-temp.webp" alt="Mountains, streams and trees rendered in bold and colorful illustration by Gretchen Leggitt" />
=======
    <wwu-logo></wwu-logo>

    <div class="social">
        <h2 class="visually-hidden">Western social media links</h2>
        <wwu-social size="small" group="Western" url="https://www.facebook.com/westernwashingtonuniversity"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>        
        <wwu-social size="small" group="Western" url="https://www.tiktok.com/@westernwauniversity"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.youtube.com/wwu"></wwu-social>
>>>>>>> 5.5.6
    </div>

    <svg class="footer-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1846 126" aria-hidden="true">
      <path d="M1043.04,0c-21.41,0-42.77.87-64.02,2.87-42.51,4.01-82.5,12.49-123.63,18.61-2.57.38-5.15.76-7.73,1.12-18.27,2.57-36.82,4.58-55.95,5.46-7.83.36-15.62.52-23.41.52-42.95,0-85.35-5.02-127.65-10.06-16.71-1.99-33.41-3.99-50.12-5.68-46.32-4.68-93.81-7.01-141.33-7.01-67.58,0-135.18,4.71-199.35,14.06-32.71,4.77-64.67,10.73-97.2,15.71-22.43,3.44-45.13,6.42-68.53,8.23-13.85,1.07-28.16,1.65-42.45,1.65s-28.08-.56-41.66-1.76v82.27h1846V28.16c-13.39-1.71-26.8-3.54-40.21-5.34-44.7-6-89.46-11.67-133.77-11.67-16.23,0-32.4.76-48.49,2.54-20.93,2.32-40.62,6.3-60.58,9.97-8.77,1.61-17.59,3.16-26.59,4.48-29.41,4.32-59.15,6.08-89.15,6.08-78.43,0-158.59-12.03-238.91-21.82-55.18-6.73-110.43-12.4-165.26-12.4"/>
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
          <nav class="footer-nav" aria-labelledby="wwu-footer-heading">
              <h2 id="wwu-footer-heading" class="visually-hidden">University Links and Policy</h2>
              <a href="https://www.wwu.edu/wwucontact/">Contact Western</a> 
              <a href="https://calendar.wwu.edu/">Calendar</a>
              <a href="https://www.wwu.edu/directory">University Directory</a>
              <a href="https://www.wwu.edu/campus-maps">Map</a>
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
      }
    }
  }
  
  if (!window.customElements.get('wwu-footer')) {    
    window.customElements.define("wwu-footer", WWUFooter);
  }
}
