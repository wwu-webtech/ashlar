// add 'open in new tab' icon and text to external links. NOTE: This isn't a recommended practice for all links, but adds a11y info in case the link doesn't open in the same window

var newTab = document.querySelectorAll('a[target="_blank"], a[target="blank"]', context);

for (var i = 0; i < newTab.length; i++) {
  // icon
  var icon = document.createElement('span');
  icon.innerHTML = 'open_in_new';
  icon.classList.add('material-icons');
  icon.setAttribute('aria-hidden', 'true');

  // visually-hidden text
  var text = document.createElement('span');
  text.innerHTML = ' (opens in new tab)';
  text.classList.add('visually-hidden');

  newTab[i].append(text, icon);
}