# Call to Action Links

To style a call to action link, add the class ``cta``

<a href="#" className="cta">Apply for this program</a><br/>
<a href="#" className="cta blue">With .blue class</a><br/>
<a href="#" className="cta no-animation dark-blue">With .no-animation and .dark-blue class</a><br/>
<a href="#" className="cta small light-green">With .small and .light-green class</a><br/>
<a href="#" className="cta small white no-animation">With .small .no-animation .white classes</a><br/>

<a href="something.pdf" className="cta">Contains a pdf</a><br/>
<a href="something.docx" className="cta">Contains a Word doc</a><br/>
<a href="something.xlsx" className="cta">Contains a Excel doc</a><br/>
<a href="something.pptx" className="cta">Contains a PowerPoint doc</a><br/>

```
<a href="#" class="cta">Apply for this program</a>
<a href="#" class="cta blue">With .blue class</a>
<a href="#" class="cta no-animation dark-blue">With .no-animation and .dark-blue class</a>
<a href="#" class="cta small light-green">With .small and .light-green class</a>
<a href="#" class="cta small white no-animation">With .small .no-animation .white classes</a>

<a href="something.pdf" class="cta">Contains a pdf</a>
<a href="something.docx" class="cta">Contains a Word doc</a>
<a href="something.xlsx" class="cta">Contains a Excel doc</a>
<a href="something.pptx" class="cta">Contains a PowerPoint doc</a>
```


## CTAs with Icons

You can customize the icon in your CTA with material icons. This behavior is easiest when using Drupal block types—just use the included field. Material Icons are not included by default, so if you need to hard code links this way, you will need to load the library on that page via another method such as including another block that has it included, adding it to a view, or adding a ``<link>`` tag to the page via HTML.


<a href="#" className="cta with-icon">With an Icon <span className="material-icons" aria-hidden="true">accessibility_new</span></a><br/>
<a href="#" className="cta small with-icon">Small with an Icon <span className="material-icons" aria-hidden="true">park</span></a><br/>
<a href="#" className="cta align-center with-icon">Centered and with an Icon <span className="material-icons" aria-hidden="true">favorite_border</span></a><br/>

```
<a href="#" class="cta with-icon">With an Icon <span class="material-icons" aria-hidden="true">accessibility_new</span></a>
<a href="#" class="cta small with-icon">Small with an Icon <span className="material-icons" aria-hidden="true">park</span></a><br/>
<a href="#" class="cta align-center with-icon">Centered and with an Icon <span class="material-icons" aria-hidden="true">favorite_border</span></a>
```
