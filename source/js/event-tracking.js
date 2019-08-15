if (typeof ga != 'function') {
  return;
}

var $links = $('a[data-tracking-event-category], a[data-tracking-event-enable]', context);

$links.once('tracking-event').on('click', function (event) {
  var category, label;
  var $target = $(event.target).closest('a');
  var locationSet = false;

  function setLocation() {
    if (!locationSet) {
      locationSet = true;
      window.location = $target.attr('href');
    }
  }

  event.preventDefault();
  setTimeout(setLocation, 2000);

  category = $target.data('tracking-event-category');

  if ($target.data('tracking-event-label')) {
    label = $target.data('tracking-event-label');
  }
  else {
    label = $target.text();
  }

  ga('send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: 'Click',
    eventLabel: label,
    hitCallback: setLocation
  });
});
