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
