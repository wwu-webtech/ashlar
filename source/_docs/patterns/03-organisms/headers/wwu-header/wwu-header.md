import WWULogo from "../../../01-atoms/logo/logo.js"
import WWUHeader from "./wwu-header.js"

# Western Header

<wwu-header sitename='A Western Department' sitename-link='/' regioncontent='<div><p><a href=#>A Website of this Department</a></p></div>'></wwu-header>

```
Place inside <header>
<wwu-header sitename='A Western Website' sitename-link='/' regioncontent='<div><p><a href=#>Department of this College</a></p></div>'></wwu-header>

Place near bottom of page
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/logo.js"></script>
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/wwu-header.js"></script>
```

<p><span className="material-icons" aria-hidden="true">keyboard_arrow_right</span> Drupal note: If twig debugging is turned on, things in the Western Header region (like site names) may go wonky because of how the component acts with the extra comment markup.</p>