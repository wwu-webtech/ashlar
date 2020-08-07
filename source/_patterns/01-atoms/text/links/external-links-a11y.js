// add 'open in new tab' icon and text to external links. NOTE: This isn't a recommended practice for all links, but adds a11y info in case the link doesn't open in the same window


var newTab = document.querySelectorAll('a[target="_blank"], a[target="blank"]', context);
var page = document.querySelector('body');

// only run if on a live page
if (!page.classList.contains('adminimal-admin-toolbar')) {
  var newTabArr = Array.from(newTab);

  newTabArr.forEach(function(link) {
    var icon = document.createElement('span');
    icon.innerHTML = 'open_in_new';
    icon.classList.add('material-icons');
    icon.setAttribute('aria-hidden', 'true');
  
    // visually-hidden text
    var text = document.createElement('span');
    text.innerHTML = ' (opens in new tab)';
    text.classList.add('visually-hidden');
  
    link.append(text, icon);
  });
}

