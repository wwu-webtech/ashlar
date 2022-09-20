var $search_container = $('#islandora-search-container' , context);
var $simple_search = $('#block-islandora-solr-simple', context);
var $advanced_search_link =$('<a class="advanced-search-link" href="/advanced-search">Advanced Search</a>');

/* Move search blocks into splash search container */
$search_container.append($simple_search);
$search_container.append($advanced_search_link);
