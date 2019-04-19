var $tablist = $('.content-switcher', context);
var $tabButton = $('.content-switcher button', context);
var $panels = $('.content-switcher-container .content', context);
var $selectedPanel = $('.content-switcher-container .content.active', context);


$('.content-switcher button.active').attr('aria-selected', 'true');
$('.content-switcher button:not(.active)').attr({'aria-selected' : 'false', 'tabindex' : '-1'});

$tabButton.click(function () {
  var $otherButtons = $('.content-switcher button');
  $otherButtons.removeClass('active');
  $otherButtons.attr('aria-selected', 'false');
  $otherButtons.attr('tabindex', '-1');
  var $thisSwitch = $(this).attr('class');
  $(this).addClass('active');
  $(this).attr('aria-selected', 'true');
  $(this).removeAttr('tabindex');

  $('.content-switcher-container .content:not(.' + $thisSwitch + ')').fadeOut();
  $('.content-switcher-container .content.' + $thisSwitch).fadeIn();
});

$tabButton.keydown(function (event) {
  var $key = event.keyCode;
  var $selected = $('.content-switcher button.active', context);
  var $selectedPanel = $('#' + $selected.attr('aria-controls'), context);

  if ($key === 37) {
    // find previous tab, if we are on first => activate last
    $selectedPanel.removeClass('active');
    if ($selected.parent().is('.content-switcher li:first-child')) {
      $('.content-switcher li:last-child button').click().focus();
      $('.content-switcher-container:last-child').addClass('active');
    }
    else {
      $selected.parent().prev().children($tabButton).click().focus();
    }
    event.preventDefault();
  }

  if ($key === 39) {
  // find next tab, if we are on last => activate first
    $selectedPanel.removeClass('active');
    if ($selected.parent().is('.content-switcher li:last-child')) {
      $('.content-switcher li:first-child button').click().focus();
      $selectedPanel.addClass('active');
    }
    else {
      $selected.parent().next().children($tabButton).click().focus();
    }
    event.preventDefault();
  }
});
