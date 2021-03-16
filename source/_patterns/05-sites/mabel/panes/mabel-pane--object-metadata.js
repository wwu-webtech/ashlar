var $tablist = $(".mabel-content-switcher", context);
var $tabButton = $(".mabel-content-switcher button", context);
var $panels = $(".mabel-content-switcher-container .content", context);
var $selectedPanel = $(".mabel-content-switcher-container .content.active", context);
var $imageViewer = $(".islandora-large-image-content-wrapper", context);
var $metadata = $(".islandora-metadata", context);

$tabButton.first().addClass("active");
$panels.first().addClass("active");
$("#medatdata-container").append($metadata);

var $activeButton = $(".mabel-content-switcher button.active", context);
var $leftArrow = '<span class="material-icons show" aria-hidden="true">chevron_left</span>';
var $rightArrow = '<span class="material-icons show" aria-hidden="true">chevron_right</span>';

$activeButton.attr("aria-selected", "true");
$activeButton.prepend($leftArrow);
$activeButton.append($rightArrow);
$(".mabel-content-switcher button:not(.active)").attr({
  "aria-selected": "false",
  tabindex: "-1"
});

$tabButton.click(function() {
  var $otherButtons = $(".mabel-content-switcher button");
  $otherButtons.removeClass("active");
  $otherButtons.attr("aria-selected", "false");
  $otherButtons.attr("tabindex", "-1");
  $otherButtons.children(".material-icons").remove();
  var $thisSwitch = $(this).attr("class");
  $(this).addClass("active");
  $(this).prepend($leftArrow);
  $(this).append($rightArrow);
  $(this).attr("aria-selected", "true");
  $(this).removeAttr("tabindex");
  $(".mabel-content-switcher-container .content:not(." + $thisSwitch + ")").fadeOut(200);
  $(".mabel-content-switcher-container .content." + $thisSwitch).fadeIn(200);

  if ($thisSwitch == "switch-3") {
    $("#side-by-side-viewer-container").append($imageViewer);
    $("#side-by-side-metadata-container").append($metadata);
  } else {
    $("#viewer-container").append($imageViewer);
    $("#metadata-container").append($metadata);
  }
});

$tabButton.keydown(function(event) {
  var $key = event.keyCode;
  var $selected = $(".mabel-content-switcher button.active", context);
  var $selectedPanel = $("#" + $selected.attr("aria-controls"), context);
  if ($key === 37) {
    // find previous tab, if we are on first => activate last
    $selectedPanel.removeClass("active");
    if ($selected.is(".mabel-content-switcher button:first-child")) {
      $(".mabel-content-switcher button:last-child").click().focus();
      $(".mabel-content-switcher-container:last-child").addClass("active");
    } else {
      $selected.prev($tabButton).click().focus();
    }
    event.preventDefault();
  }
  if ($key === 39) {
    // find next tab, if we are on last => activate first
    $selectedPanel.removeClass("active");
    if ($selected.is(".mabel-content-switcher button:last-child")) {
      $(".mabel-content-switcher button:first-child").click().focus();
      $selectedPanel.addClass("active");
    } else {
      $selected.next($tabButton).click().focus();
    }
    event.preventDefault();
  }
});
