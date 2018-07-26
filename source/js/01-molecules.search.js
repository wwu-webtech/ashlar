var expanded = false;

$(".toggle-search", context).click(function() {
  if (!expanded) {
    $(this).parent().addClass('is-expanded');
  }

  $(this).toggleClass('is-expanded');
  $(this).siblings('.search-area').animate({width: 'toggle'});
  $(this).children('.material-icons').text('search');
  $(this).filter('.is-expanded').children('.material-icons').text('close');

  if (expanded) {
    $(this).parent().removeClass('is-expanded');
    $(this).attr('aria-label', 'Open the search box');
    expanded = false;
  }
  else {
    $(this).attr('aria-label', 'Close the search box');
    expanded = true;
  }
});
