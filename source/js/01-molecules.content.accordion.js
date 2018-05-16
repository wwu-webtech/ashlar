$('.expand', context).click(function () {
  $(this).toggleClass('is-expanded');
  $(this).siblings('.content').slideToggle();
  $(this).children('.material-icons').text('add');
  $(this).filter('.is-expanded').children('.material-icons').text('clear');
});
