/* For pages with titles in the header region, this creates a visually hidden
 * title that appears in the main region instead.
 */

var $splash_title = $(".splash .block--page-title-block");
var $main_title = $(".page-content .block--page-title-block");

if ($splash_title.length && !$main_title.length) {
  $main_title = $splash_title.clone();
  $main_title.insertAfter("#main-content");

  $splash_title.children("h1").attr("aria-hidden", "true");
  $main_title.attr("id", "main-content-page-title").addClass("visually-hidden");
}
