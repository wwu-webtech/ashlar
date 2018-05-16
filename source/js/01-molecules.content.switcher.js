$('.content-switcher button', context).click(function () {
  $('.content-switcher button').removeClass('active');
  $('.content-switcher button').attr('disabled', false);
  var $thisSwitch = $(this).attr('class');
  $(this).addClass('active');
  $(this).attr('disabled', true);
  $('.content-switcher-container .content:not(.' + $thisSwitch + ')').fadeOut();
  $('.content-switcher-container .content.' + $thisSwitch).fadeIn();
});
