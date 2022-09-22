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

    <p class="intro">Intro Text</p>

    <p>Regular Text with <a href="#">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>

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
        <a class="light-blue cta" href="#">Call to Action</a>
        <a class="cta" href="#">Call to Action</a>
        <a class="dark-blue cta" href="#">Call to Action</a>
        <a class="light-green cta" href="#">Call to Action</a>
        <a class="green cta" href="#">Call to Action</a>
        <a class="dark-green cta" href="#">Call to Action</a>
        <a class="white cta" href="#">Call to Action</a> 
    </div>

    {% include "@atoms/buttons/play-button/play-button.twig" %}

    {% include "@molecules/social-media-links/social-media-links.html.twig" %}

    {% include "@atoms/tables/tables--customized.twig" %}
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
