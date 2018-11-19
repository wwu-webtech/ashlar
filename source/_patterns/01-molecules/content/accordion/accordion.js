/* Add aria labels to all buttons */
$('.accordion-set .expand').attr('aria-label', 'Open item');

/* Toggle expansion */
$('.accordion-set .expand', context).click(function () {
  $(this).toggleClass('is-expanded');
  $(this).siblings('.content').slideToggle();

  $(this).children('.material-icons').text('add');
  $(this).filter('.is-expanded').children('.material-icons').text('clear');

  $(this).filter('.is-expanded').attr('aria-label', 'Close item');
  $(this).not('.is-expanded').attr('aria-label', 'Open item');
});
