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
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`;
  icon.classList.add("component-icon");
  icon.setAttribute("aria-hidden", "true");

  link.append(text, icon);
}
