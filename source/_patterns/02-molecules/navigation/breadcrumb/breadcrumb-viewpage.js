/* Prevent multiple calls in Drupal */
if (context !== document) {
  return;
}

var breadcrumb_list = document.querySelector(
  ".block--system-breadcrumb-block .breadcrumb ol"
);

if (breadcrumb_list) {
  var previous_items = document.querySelectorAll(".breadcrumb ol li a");

  for (var i = 0; i < previous_items.length; i++) {
    previous_items[i].removeAttribute("aria-current");
    previous_items[i].removeAttribute("class");
  }

  var page_title = document.querySelector(".page-title");
  var profile_page_title = document.querySelector(".view--profile-page h1");
  var current_listitem = document.createElement("li");
  var current_link = document.createElement("a");

  current_link.setAttribute("href", window.location.pathname);
  current_link.setAttribute("aria-current", "page");

  if (profile_page_title) current_link.innerText = profile_page_title.innerText;
  else current_link.innerText = page_title.innerText;

  current_listitem.appendChild(current_link);
  breadcrumb_list.appendChild(current_listitem);
} else {
  return;
}
