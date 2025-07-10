/* Accessibile mega menu variable declarations */
$('.main-navigation').accessibleMegaMenu({
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

// add aria-current to ultimenu link representing active page
var $active_item = $('.main-navigation ul .ultimenu__item--active-page:not(.has-ultimenu');
var $homepage_link = $('.main-navigation ul .ultimenu__item .ultimenu__link[href="/"]');

$active_item.children('.ultimenu__link').attr('aria-current', 'page');
if (window.location.pathname === $homepage_link.attr('href')) {
    $homepage_link.parent('li').addClass('ultimenu__item--active-page');
    $homepage_link.attr('aria-current', 'page');
}

// add is-unlinked to top level items without using ultimenu settings panel
var $top_links = $('.ultimenu__link[href=""]'); 
$top_links.addClass('is-unlinked');