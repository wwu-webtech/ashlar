import WWUSearch from "./search.js"

# Search

## Component Library
Include the following script to use the search component on your non-Drupal website or application.

```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js"></script>
```

## Component Markup

<wwu-search role="search" aria-label="Western">
    <noscript>
        <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search/">
            <label for="search-box" class="search-label">Search:</label>
            <input id="search-box" name="query" type="search" />
            <button class="submit-search" type="submit">
                <span class="material-icons" aria-hidden="true">search</span>
                <span class="toggle-text">Go</span>
            </button>
            
            <input type="hidden" name="pr" value="Default-WWU-Base" />
        </form>
    </noscript>
</wwu-search>

```
<wwu-search role="search" aria-label="Western">
    <noscript>
        <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search">
            <label for="search-box" class="search-label">Search:</label>
            <input id="search-box" name="query" type="search">
            <button class="submit-search">
                <span class="material-icons" aria-hidden="true">search</span>
                <span class="toggle-text">Go</span>
            </button>
            
            <input type="hidden" name="pr" value="Default-WWU-Base">
        </form>
    </noscript>
</wwu-search>
```

