if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const background_color_template = document.createElement("template");
  background_color_template.innerHTML = `
  <div class="bg-wrapper standard-padding">
    <h1>H1 Heading <a href="https://wwu.edu/#nowhere">and link</a></h1>
    <h2>H2 Heading <a href="https://wwu.edu/#nowhere">and link</a></h2>
    <h3>H3 Heading <a href="https://wwu.edu/#nowhere">and link</a></h3>
    <h4>H4 Heading <a href="https://wwu.edu/#nowhere">and link</a></h4>
    <h5>H5 Heading <a href="https://wwu.edu/#nowhere">and link</a></h5>

    <p class="tagline">Tagline Text</p>

    <p>Regular Text with <a href="https://wwu.edu/#nowhere">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>

    <blockquote>Blockquote</blockquote>

    <hr/>

    <blockquote class="dark-blue-bg">Blockquote</blockquote>

    <div class="byline">
        <div class="date">January 25, 2024</div>
        <div class="credit">This is a Byline</div>
        <div class="info">Information about the Author</div>
    </div>

    <form>
      <label class="required" for="input">Form element</label>
      <input id="input"/>
    </form>

    <ul>
        <li><a href="https://wwu.edu/#nowhere">Regular</a></li>
        <li><a href="https://wwu.edu/#nowhere">list with this</a></li>
        <li>background, and a <a href="https://wwu.edu/#nowhere">bunch of links</a></li>
    </ul>

    <div class="block--beyond-basics-block">
        <ul class="menu">
        <li><a href="https://wwu.edu/#nowhere">List of links</a></li>
        <li><a href="https://wwu.edu/#nowhere">with menu class</a></li>
        <li><a href="https://wwu.edu/#nowhere" aria-current="page">this one is the current page</a></li>
        </ul>
    </div>

    <div class="ctas">
        <a class="cta" href="https://wwu.edu/#nowhere">Call to Action</a><br/>
        <a class="cta" href="https://wwu.edu/">Visited CTA</a><br/>
        <a class="cta blue" href="https://wwu.edu/#nowhere">CTA with .blue class</a><br/>
        <a class="cta dark-blue" href="https://wwu.edu/#nowhere">CTA with .dark-blue class</a><br/>
        <a class="cta light-green" href="https://wwu.edu/#nowhere">CTA with .light-green class</a><br/>
        <a class="cta white" href="https://wwu.edu/#nowhere">CTA with .white class</a>
    </div>

    <div class="buttons">
      <button>Button</button>
      <button class="alt">With .alt class</button>
      <button class="warning">With .warning class</button>
      <button disabled>Disabled Button</button>
    </div>

    <wwu-social group="Western" url="https://www.facebook.com/westernwashingtonuniversity"></wwu-social>
    <wwu-social group="Western" url="https://www.flickr.com/photos/wwu"></wwu-social>
    <wwu-social group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>
    <wwu-social group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>
    <wwu-social group="Western" url="https://www.snapchat.com/add/"></wwu-social>
    <wwu-social group="Western" url="https://www.tiktok.com/@westernwauniversity"></wwu-social>
    <wwu-social group="Western" url="https://vimeo.com/user30954810"></wwu-social>
    <wwu-social group="Western" url="https://www.youtube.com/wwu"></wwu-social>

    <table class="blue auto-layout align-top">
      <caption>Custom classes applied to this table: light-blue fixed align-top</caption>
      <tr>
          <th id="t1-row-1-col-1" scope="col"><a href="https://wwu.edu/#nowhere">Row Group</a></th>
          <th id="t1-row-1-col-2" scope="col">Col Header</th>
          <th id="t1-row-1-col-3" colspan="2" scope="col"><a href="https://wwu.edu/#nowhere">Col Group</a></th>
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
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="https://wwu.edu/#nowhere">Link</a></td>
          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="https://wwu.edu/#nowhere">Link</a></td>
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
