var $switchButton = $('.content-switcher button', context);
var $panels = $('.content-switcher-container > .content', context);
var $thisPanel = $('.content-switcher-container .active', context);

$('.content-switcher').attr('role', 'tablist');
$('.content-switcher li').attr('role', 'presentation');
$switchButton.attr('role', 'tab');
$('.content-switcher button.active').attr('aria-selected', 'true');
$('.content-switcher button:not(.active)').attr({'aria-selected' : 'false', 'tabindex' : '-1'});
$panels.attr('tabindex', '0');


$switchButton.click(function () {
  $switchButton.removeClass('active');
  $switchButton.attr('aria-selected', 'false');
  $switchButton.attr('tabindex', '-1');
  // $switchButton.attr('disabled', false);

  var $thisSwitch = $(this).attr('class');
  $(this).addClass('active');
  $(this).attr('aria-selected', 'true');
  $(this).removeAttr('tabindex');
  // $(this).attr('disabled', true);

  $('.content-switcher-container .content:not(.' + $thisSwitch + ')').fadeOut();
  $('.content-switcher-container .content.' + $thisSwitch).fadeIn();
});

$switchButton.keydown(function (event) {
  if (event.keyCode === 37) {
    // find previous tab, if we are on first => activate last
    var $selected = $('.content-switcher button.active', context);
    $thisPanel.removeClass('active');

    if ($selected.parent().is('.content-switcher li:first-child')) {
      $('.content-switcher li:last-child button').click().focus();
      $('.content-switcher-container:last-child').addClass('active');
    }
    else {
      $selected.parent().prev().children($switchButton).click().focus();
    }
    event.preventDefault();
  }

  if (event.keyCode === 39) {
  // find next tab, if we are on last => activate first
    var $selected = $('.content-switcher button.active', context);
    var $selectedPanel = $('#' + $selected.attr('aria-controls'));
    $thisPanel.removeClass('active');

    if ($selected.parent().is('.content-switcher li:last-child')) {
      $('.content-switcher li:first-child button').click().focus();
      $selectedPanel.addClass('active');
    }
    else {
      $selected.parent().next().children($switchButton).click().focus();
    }
   event.preventDefault();
  }
  //event.stopPropagation();
  //return false;
});
