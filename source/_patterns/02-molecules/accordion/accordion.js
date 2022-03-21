// Set vars and aria attributes
const $accordionToggles = $(".accordion-set .expand", context);
const $accordionButton = $(".accordion-set button.expand", context);
const $accordionMockButton = $(".accordion-set a.expand", context);
const $accordionContent = $(".accordion-set .content");

$accordionToggles.filter(".is-expanded").attr("aria-expanded", "true");
$accordionToggles.not(".is-expanded").attr("aria-expanded", "false");

// Set up aria-controls
for (let i = 0; i < $accordionContent.length; i++) {
  $accordionContent[i].setAttribute("id", "accordion-content-" + i);
}

$accordionToggles.each(function () {
  let $contentID = $(this).parent().siblings($accordionContent).attr("id");
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

// Add href/role if not added to view-based accordion "button"
if ($accordionMockButton) {
  $accordionMockButton.each(function(){
    let $mockButton = $(this);
  
    if (!$mockButton.attr('href')) {
      $mockButton.attr('href', '#');
    }

    if(!$mockButton.attr('role')) {
      $mockButton.attr('role', 'button');
    }
  });
}

// Toggle expansion/collapse
function toggleExpansion(button) {
  let accordionButtonClicked = button;
  let accordionContent = button.parent().siblings(".content");

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
  let accordionButtonClicked = $(this);
  let accordionContent = accordionButtonClicked.parent().siblings(".content");
  let $code = event.charCode || event.keyCode;

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
  if (keyPressed(event) === true) {
    toggleExpansion($(this));
    event.preventDefault();
  }
});

$accordionToggles.on("keyup", closeAccordion);
