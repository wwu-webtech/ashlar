
// patch featherlight, semantically hide main page content while iframemodal is open
var $playLink = $('a[data-featherlight="iframe"]');
var $behindFeatherlight = $('.page, .skip-link, .page-content');
$playLink.featherlight({
  beforeOpen: function() {
	$behindFeatherlight.attr('aria-hidden', 'true');
  },
  afterClose: function() {
	$behindFeatherlight.removeAttr('aria-hidden');
	$playLink.focus();
  }
});