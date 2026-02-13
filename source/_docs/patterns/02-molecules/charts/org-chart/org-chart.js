if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
    const org_chart_template = document.createElement("template");
    org_chart_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/org-chart-new.css" /-->

    <p>It worked</p>
    `;
    
    class WWUOrgChart extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback() {        
            let element_exists = this.classList.contains("element-created");
            
            if (!element_exists) {
                this.appendChild(org_chart_template.content.cloneNode(true));
                this.classList.add("element-created");                          
            }
        }
    }
    if (!window.customElements.get('wwu-org-chart')) {    
        window.customElements.define("wwu-org-chart", WWUOrgChart);
    }
}