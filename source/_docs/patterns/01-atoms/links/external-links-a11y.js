// Prevent multiple calls in Drupal

if (context !== document) {
  return;
}

// add 'open in new tab' icon and text to external links.
// NOTE: This isn't a recommended practice for all links, but adds a11y info in case the link doesn't open in the same window

const targetBlank = document.querySelectorAll(
  '.page a[target="_blank"], .page a[target="blank"]',
  context
);

for (let link of targetBlank) {
  let text = document.createElement("span");
  text.innerHTML = " (opens in new tab)";
  text.classList.add("visually-hidden");

  let icon = document.createElement("span");
  icon.innerHTML = "open_in_new";
  icon.classList.add("material-icons");
  icon.setAttribute("aria-hidden", "true");

  link.append(text, icon);
}
