
// patch featherlight, semantically hide main page content while iframe modal is open
// stays in jQuery due to featherlight dependency

var $playLink = $('[data-featherlight="iframe"]', context);
var $behindFeatherlight = $('.page, .skip-link, .page-content', context);

$playLink.featherlight({
  beforeOpen: function() {
	$behindFeatherlight.attr('aria-hidden', 'true');
  },
  afterClose: function() {
	$behindFeatherlight.removeAttr('aria-hidden');
  }
});