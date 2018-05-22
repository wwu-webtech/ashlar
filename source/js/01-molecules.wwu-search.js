var expanded = false;

$(".toggle-search").click(function() {
  if (!expanded) {
    $(this).parent().addClass('is-expanded');
  }

  $(this).toggleClass('is-expanded');
  $(this).toggleClass('blue');
  $(this).toggleClass('dark-blue');
  $(this).siblings('.search-area').animate({width: 'toggle'});
  $(this).children('.material-icons').text('search');
  $(this).filter('.is-expanded').children('.material-icons').text('close');

  if (expanded) {
    $(this).parent().removeClass('is-expanded');
    expanded = false;
  }
  else {
    expanded = true;
  }
});
