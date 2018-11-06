/* Function to allow the call to action bar on the bottom of mobile view to be
 * closed
 */
var $close_cta = $('.close', context);

function close_cta(event) {
  $close_cta.off('click', toggle_search);

  $close_cta.parent('.majors-call-to-action').fadeOut();

  event.stopPropagation();
}

$close_cta.on('click', close_cta);
