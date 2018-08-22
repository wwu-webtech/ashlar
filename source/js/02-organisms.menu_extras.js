/* Mobile menu scripts */
var $ultimenu_link = $('.ultimenu__link', context);
var $close_flyout = $('.close-flyout', context);

function open_mobile_flyout(event) {
  if ($(window).width() < 841) {
    $ultimenu_link.siblings('.ultimenu__flyout').animate(
      {
        right: '0',
        opacity: 1
      },
      {
        duration: 'fast',
        easing: 'linear',
        complete: function () {
        }
      }
    );
  }
}

function close_mobile_flyout(event) {
  if ($(window).width() < 841) {
    $ultimenu_link.siblings('.ultimenu__flyout').animate(
      {
        right: '-100%',
        opacity: 0
      },
      {
        duration: 'fast',
        easing: 'linear',
        complete: function () {
        }
      }
    );
  }
}

$ultimenu_link.on('click', open_mobile_flyout);
$close_flyout.on('click', close_mobile_flyout);

/* Ultimenu variable declarations */

$(".nav--main").accessibleMegaMenu({
    /* prefix for generated unique id attributes, which are required
       to indicate aria-owns, aria-controls and aria-labelledby */
    uuidPrefix: "accessible-megamenu",

    /* css class used to define the megamenu styling */
    menuClass: "ultimenu",

    /* css class for a top-level navigation item in the megamenu */
    topNavItemClass: "ultimenu__item",

    /* css class for a megamenu panel */
    panelClass: "ultimenu__flyout",

    /* css class for a group of items within a megamenu panel */
    panelGroupClass: "sub-nav-group",

    /* css class for the hover state */
    hoverClass: "hover",

    /* css class for the focus state */
    focusClass: "focus",

    /* css class for the open state */
    openClass: "open"
});
