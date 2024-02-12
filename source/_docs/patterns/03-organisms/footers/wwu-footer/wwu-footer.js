if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const footer_template = document.createElement("template");
  footer_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/wwu-footer.css" /-->

    <wwu-logo></wwu-logo>

    <div class="social">
        <h2 class="visually-hidden">Western social media links</h2>
        <wwu-social size="small" group="Western" url="https://www.facebook.com/westernwashingtonuniversity"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>
        <wwu-social size="small" group="Western" url="https://twitter.com/WWU"></wwu-social>
        <wwu-social size="small" group="Western" url="https://www.threads.net/@westernwashingtonuniversity"></wwu-social>
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
            © <span class="copyright-date">{{ "now"|date("Y") }}</span> Western Washington University
        </p>
    </div>

    <div class="footer-bottom">
        <nav class="footer-nav" aria-labelledby="wwu-footer-heading">
            <h2 id="wwu-footer-heading" class="visually-hidden">University Links and Policy</h2>
            <a class="icon-link" href="https://www.wwu.edu/wwucontact/"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></span>Contact Western</a> 
            <a class="icon-link" href="https://calendar.wwu.edu/"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z"/></g></svg></span>Calendar</a>
            <a class="icon-link" href="https://www.wwu.edu/directory"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="10" cy="8" r="4"/><path d="M10.35,14.01C7.62,13.91,2,15.27,2,18v2h9.54C9.07,17.24,10.31,14.11,10.35,14.01z"/><path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 L20.59,22L22,20.59L19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C18,17.1,17.1,18,16,18z"/></g></g></svg></span>University Directory</a>
            <a class="icon-link" href="https://www.wwu.edu/campus-maps"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg></span>Map</a>
            <a class="icon-link" href="https://www.wwu.edu/online-privacy-statement"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21,5l-9-4L3,5v6c0,5.55,3.84,10.74,9,12c2.3-0.56,4.33-1.9,5.88-3.71l-3.12-3.12c-1.94,1.29-4.58,1.07-6.29-0.64 c-1.95-1.95-1.95-5.12,0-7.07c1.95-1.95,5.12-1.95,7.07,0c1.71,1.71,1.92,4.35,0.64,6.29l2.9,2.9C20.29,15.69,21,13.38,21,11V5z"/><circle cx="12" cy="12" r="3"/></g></g></svg></span>Privacy</a>
            <a class="icon-link" href="https://www.wwu.edu/commitment-accessibility"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></span>Accessibility Notice</a>
            <a class="icon-link" href="https://www.wwu.edu/equal-opportunity-policy"><span class="component-icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.32,13.01c0.96,0.02,1.85,0.5,2.45,1.34C9.5,15.38,10.71,16,12,16c1.29,0,2.5-0.62,3.23-1.66 c0.6-0.84,1.49-1.32,2.45-1.34C16.96,11.78,14.08,11,12,11C9.93,11,7.04,11.78,6.32,13.01z"/><path d="M4,13L4,13c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3s-3,1.34-3,3C1,11.66,2.34,13,4,13z"/><path d="M20,13L20,13c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3s-3,1.34-3,3C17,11.66,18.34,13,20,13z"/><path d="M12,10c1.66,0,3-1.34,3-3c0-1.66-1.34-3-3-3S9,5.34,9,7C9,8.66,10.34,10,12,10z"/><path d="M21,14h-3.27c-0.77,0-1.35,0.45-1.68,0.92C16.01,14.98,14.69,17,12,17c-1.43,0-3.03-0.64-4.05-2.08 C7.56,14.37,6.95,14,6.27,14H3c-1.1,0-2,0.9-2,2v4h7v-2.26c1.15,0.8,2.54,1.26,4,1.26s2.85-0.46,4-1.26V20h7v-4 C23,14.9,22.1,14,21,14z"/></g></g></svg></span>Equal Employment Opportunity Policy</a>        
        </nav>
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

  window.customElements.define("wwu-footer", WWUFooter);
}
