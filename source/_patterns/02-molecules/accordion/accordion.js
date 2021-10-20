// Set vars and aria attributes
var $accordionToggles = $(".accordion-set .expand", context);
var $accordionButton = $(".accordion-set button.expand", context);
var $accordionMockButton = $(".accordion-set a.expand", context);
var $accordionContent = $(".accordion-set .content");

$accordionToggles.filter(".is-expanded").attr("aria-expanded", "true");
$accordionToggles.not(".is-expanded").attr("aria-expanded", "false");

for (var i = 0; i < $accordionContent.length; i++) {
  $accordionContent[i].setAttribute("id", "accordion-content-" + i);
}

$accordionToggles.each(function () {
  var $contentID = $(this).parent().siblings($accordionContent).attr("id");
  $(this).attr("aria-controls", $contentID);
});

// Kbd support function for mock button toggles
function keyPressed(event) {
  if (event.type === "click") {
    return true;
  } else if (event.type === "keypress") {
    var code = event.charCode || event.keyCode;
    if (code === 32 || code === 13) {
      return true;
    }
  } else {
    return false;
  }
}

// Toggle expansion/collapse
function toggleExpansion(button) {
  var accordionButtonClicked = button;
  var accordionContent = button.parent().siblings(".content");

  accordionButtonClicked.toggleClass("is-expanded");
  accordionContent.slideToggle();

  accordionButtonClicked.children(".material-icons").text("add");
  accordionButtonClicked
    .filter(".is-expanded")
    .children(".material-icons")
    .text("clear");

  accordionButtonClicked.filter(".is-expanded").attr("aria-expanded", "true");
  accordionButtonClicked.not(".is-expanded").attr("aria-expanded", "false");
}

// On Esc press, close accordion content
function closeAccordion(event) {
  var accordionButtonClicked = $(this);
  var accordionContent = accordionButtonClicked.parent().siblings(".content");
  var $code = event.charCode || event.keyCode;

  if ($code === 27) {
    accordionContent.slideUp();
    accordionButtonClicked.removeClass("is-expanded");
    accordionButtonClicked.children(".material-icons").text("add");
    accordionButtonClicked.attr("aria-expanded", "false");
  }
}

// Run accordion events
$accordionButton.on("click", function () {
  toggleExpansion($(this));
});

$accordionMockButton.on("click keypress", function (event) {
  event.preventDefault();
  if (keyPressed(event) === true) {
    toggleExpansion($(this));
  }
});

$accordionToggles.on("keyup", closeAccordion);
