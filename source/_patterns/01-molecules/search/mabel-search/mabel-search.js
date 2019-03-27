var $search_container = $('#islandora-search-container' , context);
var $simple_search = $('#block-islandora-solr-simple', context);

/* Move search blocks into splash search container */
$search_container.append($simple_search);
$search_container.append($advanced_search);
