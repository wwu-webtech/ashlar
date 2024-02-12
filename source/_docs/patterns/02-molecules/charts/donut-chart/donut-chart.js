if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
  const donut_chart_template = document.createElement("template");
  donut_chart_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/donut-chart.css" /-->
    <svg viewBox="0 0 31.83 31.83" role="img"> 
    </svg>
  `;

  class WWUDonutChart extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let element_exists = this.classList.contains("element-created");
      if (!element_exists) {
        this.appendChild(donut_chart_template.content.cloneNode(true));
        this.classList.add("element-created");
        const data = this.querySelectorAll("li");
        const svg = this.querySelector("svg");
        let offset = 0;

        svg.setAttribute("aria-label", "Donut chart of " + this.getAttribute("label"))
        
        for (let i = 0; i < data.length; i++) {
          const percent = data[i].innerText.substr(0, data[i].innerText.indexOf("%"));         

          const slice = `
          <circle r="15.915" cx="15.915" cy="15.915" 
          style="stroke-dashoffset: ${offset}; 
          stroke-dasharray: ${percent} 100;"/>`
          svg.innerHTML += slice;
          offset -= parseFloat(percent);
        }      
      }
    }
  }

  window.customElements.define("wwu-donut-chart", WWUDonutChart);
}
