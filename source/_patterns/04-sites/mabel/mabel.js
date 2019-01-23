/* Move compound object navigation out of tabs and next to JAIL display */
var $jail = $('#block-islandora-compound-object-compound-jail-display');
var $prev = $('#islandora-compound-previous-link');
var $seq = $('#islandora-compound-sequence-position');
var $next = $('#islandora-compound-next-link');

$prev.insertBefore($jail);
$seq.insertBefore($jail);
$next.insertBefore($jail);

/* Remove clip icon and make it a descriptive link */
var $clip = $('#clip');

$clip.html("Download and Print Options");
