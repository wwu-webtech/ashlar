/**
* @file
* Majors page search and filter functions.
*
* Some logic to get listnav and quicksearch to play nice together. We want
* them to share the same "no results" message, as well as properly function
* as an intersection. That is, each search method should be able to filter
* the results of the other.
*
* This is achieved by giving each filter it's own classes to "show" and
* "hide" each result. A result is only shown if it has the ".listNavShow" and
* ".quickSearchShow" classes. In addition, the "no results" message is only
* shown if there are no results matching this selector.
*
* This code relies on the id attribute attached to the "majors_index" view in
* the views_view_list preprocessor function.
*/

// Majors index.
var $list = $('.majors-list', context);
// Majors search form.
var $form = $('#majors-search-form', context);
// Majors search box.
var $input = $('#majors-search-input', context);
// Container to use as role="status" to announce live changes.
var $wrapper = $(".item-list");
// Letter selection menu.
var $letterMenu = $("#majors-list-nav");

// ===Functions and attributes to enhance UX of majors filter===
// Insert aria attr's to make div accessible:
$list.attr('aria-live', 'assertive');
$list.attr('aria-atomic', 'true');
$wrapper.attr('role', 'status');
$list.attr('aria-labelledby', 'majors-search-input');

// Prevent a disabled letter from being selected through tab-navigation.
/* The interval is used because the buttons are added dynamically, so
we must wait for them to be present.*/
var checkForLetters = setInterval(function () {
  var letterDisabled = $(".ln-disabled");

  if (letterDisabled.length) {
    letterDisabled.attr("tabindex", "-1").attr("aria-disabled", "true");
    clearTimeout(checkForLetters);
  }
}, 100);

// Hide the letter-selection menu once the user has typed something in:
$input.on("keyup", function () {

  if (!$(".ln-selected").hasClass("all")) {
    /* Simulate a user clicking on the "all" label, and then refocusing
    on input box:*/
    $(".all").trigger("click");
    $($input).focus();
  }

  if ($input.val() == "")
  $letterMenu.fadeIn();
  else
  $letterMenu.fadeOut();
});

// Setup variables for timer.
var typingTimer;                // Timer identifier.
var doneTypingInterval = 500;   // Time in ms.

// On keyup, start the countdown => this is used to detect when user is done typing (for the moment)
$input.keyup(function () {
  clearTimeout(typingTimer);
  if ($input.val())
  typingTimer = setTimeout(showResults, doneTypingInterval);
});

/* This function will run once the user has stopped typing --
this is implemented in order to avoid repeated flashing of results on the
screen while the list is filtering.*/
function showResults(){
  // Flash list so screen reader knows content was added.
  $list.fadeOut(10);
  setTimeout(function () {
    $list.fadeIn(10);
  }, 1);
}

/* ====End of UX features===*/

// Initialize index.
$list.listnav({
  'includeAll': true,
  'includeNums': false,
  'noMatchText': 'No matching majors.',
  'showCounts': false,
  'onClick': noResultsCheck
});

$("#majors-list-nav .ln-letters > a").on("click touchstart", function () {
  $(this).focus();
});

// Initialize index classes so that the no results check works correctly.
$list.children('li').addClass('listNavShow');

// Initialize search.
$input.quicksearch('.majors-list li a', {
  'delay': 100,
  'noResults': 'li.ln-no-match',
  'show': function () {
    var $item = $(this).closest('li');

    // Provide a custom class for quicksearch matches.
    $item.addClass('quickSearchShow');
    $item.removeClass('quickSearchHide');
  },
  'hide': function () {
    var $item = $(this).closest('li');

    // Provide a custom class for quicksearch non-matches.
    $item.removeClass('quickSearchShow');
    $item.addClass('quickSearchHide');
  },
  'onAfter': noResultsCheck
});

// Handle form submission behavior.
$form.submit(function (event) {
  // Prevent the form from submitting as normal.
  event.preventDefault();

  // Scroll down to the results.
  $('html, body').animate({
    'scrollTop': $form.offset().top
  }, 400);
});

// Check that the no results message is displayed correctly.
function noResultsCheck() {
  // No match message.
  var $noMatch = $('li.ln-no-match');
  // Number of results shown by both filters.
  var results = $list.children('.listNavShow.quickSearchShow').length;

  if (results === 0) {
    $noMatch.css('display', 'list-item');
    $noMatch.removeClass('listNavHide');
    $noMatch.addClass('listNavShow');
  }
  else {
    $noMatch.css('display', 'none');
    $noMatch.addClass('listNavHide');
    $noMatch.removeClass('listNavShow');
  }
}
