/* Move compound object navigation out of tabs and next to JAIL display */
var $jail = $('#block-islandora-compound-object-compound-jail-display');
var $prev = $('#islandora-compound-previous-link');
var $seq = $('#islandora-compound-sequence-position');
var $next = $('#islandora-compound-next-link');
var $nav_container = $('<div class="compound-navigation"></div>');

$nav_container.addClass('compound-navigation');

$nav_container.insertBefore($jail);

$nav_container.append($prev);
$nav_container.append($seq);
$nav_container.append($next);

/* Remove clip icon and make it a descriptive link */
var $clip = $('#clip');

$clip.html("Download and Print Options");
