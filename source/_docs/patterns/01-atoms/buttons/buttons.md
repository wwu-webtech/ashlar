# Buttons

The styles show here are for true HTML buttons, which use either the &lt;button&gt; or &lt;input type="submit"&gt; HTML tags. They are typically used for things like form submissions, or to trigger some kind of action on a page. These styles are not to be used for [Call to Action Links](/patterns/atoms/links#call-to-action-links).

<p><span className="material-icons" aria-hidden="true">warning</span> Docusaurus A11y Bug: When using forced colors, active (clicked) buttons may lose their outline. This only happens inside the docs.</p>

<button>Button</button>
<button className="warning">With .warning class</button>
<button disabled>Disabled Button</button>

```
<button>Button</button>
<button class="warning">With .warning class</button>
<button disabled>Disabled Button</button>
```

## Buttons with Icons

<button>
  <span aria-hidden="true" className="material-icons">
      play_arrow
  </span>
  Play Video
</button>

```
<button>
  <span aria-hidden="true" class="material-icons">
      play_arrow
  </span>
  Play Video
</button>
```