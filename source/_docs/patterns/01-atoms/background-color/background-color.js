if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const background_color_template = document.createElement("template");
  background_color_template.innerHTML = `
  <div class="bg-wrapper standard-padding">
    <h1>H1 Heading <a href="#">and link</a></h1>
    <h2>H2 Heading <a href="#">and link</a></h2>
    <h3>H3 Heading <a href="#">and link</a></h3>
    <h4>H4 Heading <a href="#">and link</a></h4>
    <h5>H5 Heading <a href="#">and link</a></h5>

    <p class="tagline">Tagline Text</p>

    <p>Regular Text with <a href="#">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>

    <blockquote>Blockquote</blockquote>

    <hr/>

    <blockquote class="dark-blue-bg">Blockquote</blockquote>

    <ul>
        <li><a href="#">Regular</a></li>
        <li><a href="#">list with this</a></li>
        <li>background, and a <a href="#">bunch of links</a></li>
    </ul>

    <div class="block--beyond-basics-block">
        <ul class="menu">
        <li><a href="#">List of links</a></li>
        <li><a href="#">with of links</a></li>
        <li><a href="#">.menu class of links</a></li>
        </ul>
    </div>

    <div class="ctas">
        <a class="cta" href="#">Call to Action</a>
        <a class="cta" href="https://wwu.edu/">Visited CTA</a>
    </div>

    <div class="buttons">
      <button>Button</button>
      <button class="alt">With .alt class</button>
      <button class="warning">With .warning class</button>
      <button disabled>Disabled Button</button>
    </div>

    {% include "@molecules/social-media-links/social-media-links.html.twig" %}

    <table class="light-blue auto-layout align-top">
      <caption>Custom classes applied to this table: light-blue fixed align-top</caption>
      <tr>
          <th id="t1-row-1-col-1" scope="col"><a>Row Group</a></th>
          <th id="t1-row-1-col-2" scope="col">Col Header</th>
          <th id="t1-row-1-col-3" colspan="2" scope="col"><a>Col Group</a></th>
          <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>
      </tr>
      <tr>
          <th id="t1-row-2-col-1" rowspan="3" scope="row">Row Group</th>
          <th id="t1-row-2-col-2" scope="row">Row Header</th>
          <th id="t1-row-2-col-3" scope="col">Col Header</th>
          <th id="t1-row-2-col-4" scope="col">Col Header</th>
          <th id="t1-row-2-col-5" scope="col">Col Header</th>
          <th id="t1-row-2-col-6" scope="col">Col Header</th>
          <th id="t1-row-2-col-7" scope="col">Col Header</th>
      </tr>
      <tr>
          <th id="t1-row-3-col-2" scope="row">Row Header</th>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="#">Link</a></td>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="#">Link</a></td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-6">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-7">Data</td>
      </tr>
      <tr>
          <th id="t1-row-4-col-2" scope="row">Row Header</th>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-3">More words taking up a single cell on table</td>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-4">Supercalifragilisticexpialidocious</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-5">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-6">Data</td>
          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-7">Data</td>
      </tr>
    </table>
  </div>
  `;

  class WWUBackgroundColor extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template */
      this.appendChild(background_color_template.content.cloneNode(true));
      this.querySelector(".bg-wrapper").classList.add(this.attributes.color.value + "-bg");
    }
  }

  window.customElements.define("wwu-background-color", WWUBackgroundColor);
}
