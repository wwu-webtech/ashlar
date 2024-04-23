import WWUSearch from "../../../02-molecules/search/search.js"
import PreHeader from "./pre-header.js"

# Pre-Header
<wwu-pre-header></wwu-pre-header>

## Component Markup and Library
Place in <header>

```
<wwu-pre-header></wwu-pre-header>
```

Place near bottom of page
```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js"></script>
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/pre-header.js"></script>
```

## With Alternate Search Profile
The base component will use the default search profile. If your site has a custom profile set up, you can use the following attribute to set the default search to that:

```
<wwu-pre-header search-profile="My-Profile"></wwu-pre-header>
```

