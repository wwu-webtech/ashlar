if (typeof ga != 'function') {
  return;
}

var $links = $('a[data-tracking-event-category]', context);

$links.once('tracking-event-category').on('click', function (event) {
  var $target = $(event.target).closest('a');
  var category = $target.data('tracking-event-category');

  ga('send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: 'Click',
    eventLabel: $target.text(),
    hitCallback: function () {
      window.location = $target.attr('href');
    }
  });

  return false;
});
