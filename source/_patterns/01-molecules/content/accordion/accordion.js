/* Add aria labels to all buttons */
var accordionButton = $('.accordion-set .field__title .expand');

  accordionButton.filter('.is-expanded').attr('aria-expanded', 'true');
  accordionButton.not('.is-expanded').attr('aria-expanded', 'false');


/* Toggle expansion */
$('.accordion-set .field__title .expand', context).click(function () {
  accordionButtonClicked = $(this);
  accordionContent = $(this).parent().siblings('.content');

  accordionButtonClicked.toggleClass('is-expanded');
  accordionContent.slideToggle();

  accordionButtonClicked.children('.material-icons').text('add');
  accordionButtonClicked.filter('.is-expanded').children('.material-icons').text('clear');

  accordionButtonClicked.filter('.is-expanded').attr('aria-expanded', 'true');
  accordionButtonClicked.not('.is-expanded').attr('aria-expanded', 'false');
});

// Close with Esc key
$('.accordion-set .field__title .expand', context).keydown(function (e) {
  accordionButtonClicked = $(this);
  accordionContent = accordionButtonClicked.parent().siblings('.content');

  if (e.keyCode === 27) {
    accordionContent.slideUp();
    accordionButtonClicked.removeClass('is-expanded');
    accordionButtonClicked.children('.material-icons').text('add');
    accordionButtonClicked.attr('aria-expanded', 'false');
  }
});
