import WWULogo from "../../../01-atoms/logo/logo.js"
import WWUHeader from "./wwu-header.js"

# Western Header

<wwu-header sitename='A Western Website With a Name that Takes Up Some Space' regioncontent='<div><p><a href=#>Department of this College, it also has a Lengthy Name</a></p></div>'></wwu-header>

```
Place in or near <head>
<link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/normalize.css" />
<link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/ashlar-base.css" />
<link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/wwu-header.css" />

Place inside <header>
<wwu-header sitename='A Western Website' regioncontent='<div><p><a href=#>Department of this College</a></p></div>'></wwu-header>

Place near bottom of page
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/logo.js"></script>
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/wwu-header.js"></script>
```

<p><span class="material-icons" aria-hidden="true">keyboard_arrow_right</span> Drupal note: If twig debugging is turned on, things in the Western Header region (like site names) may go wonky because of how the component acts with the extra comment markup.</p>