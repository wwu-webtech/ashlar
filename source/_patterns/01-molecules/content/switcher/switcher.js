var $tablist = $('.content-switcher', context);
var $tabButton = $('.content-switcher button', context)
var $panels = $('.content-switcher-container > .content', context);
var $selectedPanel = $('.content-switcher-container > .content.active', context);

$tablist.attr('role', 'tablist');
$tablist.children('li').attr('role', 'presentation');
$tabButton.attr('role', 'tab');

$tabButton.hasClass('active').attr('aria-selected', 'true');
$tabButton.not('active').attr({'aria-selected' : 'false', 'tabindex' : '-1'});
$panels.attr({'tabindex' : '0', 'role' : 'tabpanel'});

$tabButton.click(function () {
  var $otherButtons = $('.content-switcher button');

  $otherButtons.removeClass('active');
  $otherButtons.attr('disabled', false);
  var $thisSwitch = $(this).attr('class');
  $(this).addClass('active');
  $(this).attr('disabled', true);
  $('.content-switcher-container .content:not(.' + $thisSwitch + ')').fadeOut();
  $('.content-switcher-container .content.' + $thisSwitch).fadeIn();
});
