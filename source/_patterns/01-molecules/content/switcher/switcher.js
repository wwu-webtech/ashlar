var $switchButton = $('.content-switcher button', context);
var $thisPanel = $('.content-switcher-container .active', context);

$('.content-switcher').attr('role', 'tablist');
$('.content-switcher li').attr('role', 'presentation');
$switchButton.attr('role', 'tab');
$('.content-switcher button.active').attr('aria-selected', 'true');
$('.content-switcher button:not(.active)').attr({'aria-selected' : 'false', 'tabindex' : '-1'});
$thisPanel.attr('tabindex', '0');

$switchButton.click(function () {
  $switchButton.removeClass('active');
  $switchButton.attr('aria-selected', 'false');
  $switchButton.attr('tabindex', '-1');
  // $switchButton.attr('disabled', false);

  var $thisSwitch = $(this).attr('class');
  $(this).addClass('active');
  $(this).attr('aria-selected', 'true');
  $(this).removeAttr('tabindex');
  $thisPanel.attr('tabindex', '0');
  // $(this).attr('disabled', true);

  $('.content-switcher-container .content:not(.' + $thisSwitch + ')').fadeOut();
  $('.content-switcher-container .content.' + $thisSwitch).fadeIn();
});
