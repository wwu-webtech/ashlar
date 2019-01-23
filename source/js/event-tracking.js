if (typeof ga != 'function') {
  return;
}

var $links = $('a[data-tracking-event-category]', context);

$links.once('tracking-event-category').on('click', function (event) {
  var $target = $(event.target).closest('a');
  var category = $target.data('tracking-event-category');
  var locationSet = false;

  function setLocation() {
    if (!locationSet) {
      locationSet = true;
      window.location = $target.attr('href');
    }
  }

  event.preventDefault();
  setTimeout(setLocation, 2000);

  ga('send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: 'Click',
    eventLabel: $target.text(),
    hitCallback: setLocation
  });
});
