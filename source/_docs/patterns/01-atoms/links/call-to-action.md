# Call to Action Links

To style a call to action link, add the class ``cta``

<a href="#" className="cta">Apply for this program</a><br/>
<a href="#" className="cta dark-blue">With .dark-blue class</a><br/>
<a href="#" className="cta small light-green">With .small and .light-green class</a><br/>

<a href="something.pdf" className="cta">Contains a pdf</a><br/>
<a href="something.docx" className="small cta">Contains a Word doc and is small</a><br/>
<a href="something.xlsx" className="cta">Contains a Excel doc</a><br/>
<a href="something.pptx" className="cta">Contains a PowerPoint doc</a><br/>

```
<a href="#" class="cta dark-blue">With .dark-blue class</a>
<a href="#" class="cta small light-green">With .small and .light-green class</a>

<a href="something.pdf" class="cta">Contains a pdf</a>
<a href="something.docx" class="cta">Contains a Word doc</a>
<a href="something.xlsx" class="cta">Contains a Excel doc</a>
<a href="something.pptx" class="cta">Contains a PowerPoint doc</a>
```


## CTAs with Icons

You can customize the icon in your CTA with material icons. This behavior is easiest when using Drupal block types—just use the included field. Material Icons are not included by default, so if you need to hard code links this way, you will need to load the library on that page via another method such as including another block that has it included, adding it to a view, or adding a ``<link>`` tag to the page via HTML.


<a href="#" className="cta with-icon"><span className="material-icons" aria-hidden="true">accessibility_new</span> With an Icon</a><br/>
<a href="#" className="cta small with-icon"><span className="material-icons" aria-hidden="true">park</span> Small with an Icon</a><br/>

```
<a href="#" class="cta with-icon"><span class="material-icons" aria-hidden="true">accessibility_new</span> With an Icon</a>
<a href="#" class="cta small with-icon"><span className="material-icons" aria-hidden="true">park</span> Small with an Icon</a><br/>
```

## Inline CTAs
Inline CTAs are useful for when you want to draw a little extra attention to a link without removing it from the flow of text.

Still exploring? Contact Admissions to <a href="#" className="inline-cta">Request More Information</a>.

```
Still exploring? Contact Admissions to <a href="#" class="inline-cta">Request More Information</a>.
```


