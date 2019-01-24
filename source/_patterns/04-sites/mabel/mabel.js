/* Move compound object navigation out of tabs and next to JAIL display */
var $jail = $('#block-islandora-compound-object-compound-jail-display');
var $jail_prev = $('#islandora-compound-previous-link');
var $jail_seq = $('#islandora-compound-sequence-position');
var $jail_next = $('#islandora-compound-next-link');
var $nav_container = $('<div class="compound-navigation"></div>');

$nav_container.addClass('compound-navigation');

$nav_container.insertBefore($jail);

$nav_container.append($jail_prev);
$nav_container.append($jail_seq);
$nav_container.append($jail_next);

/* Give the manage parent link button styles */
var $manage_parent = $('#block-islandora-compound-object-compound-jail-display a:contains("manage parent")');

$manage_parent.addClass("button");

/* Remove clip icon and make it a descriptive link */
var $clip = $('#clip');

$clip.html("Download and Print Options");


/* Add button styles to search navigation links */
var $search_return = $('#islandora-solr-search-return-link a');
var $search_next = $('#islandora-solr-search-next-link a');
var $search_prev = $('#islandora-solr-search-prev-link a');

$search_return.addClass('green button');
$search_next.addClass('button');
$search_prev.addClass('button');
