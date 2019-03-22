/* Result limit, sort, and display drop down functionality */
var $search_options_container = $('<div class="search-options-container"></div>');
var $results_limit = $('.pane-islandora-solr-result-limit');
var $sort = $('.pane-islandora-solr-sort');
var $display_switch = $('.pane-islandora-solr-display-switch');
var $pane_titles = $('.pane-islandora-solr-result-limit .pane-title, .pane-islandora-solr-sort .pane-title, .pane-islandora-solr-display-switch .pane-title');

$('.layout__region--second').prepend($search_options_container);
$search_options_container.append($sort);
$search_options_container.append($results_limit);
$search_options_container.append($display_switch);

$pane_titles.each(function() {
  $(this).replaceWith($('<button class="expand-solr-panel" aria-expanded="false">' + this.innerText + '<span class="material-icons" aria-hidden="true">add</span></button>'));
})

$('.expand-solr-panel').click(function() {
  $(this).next('.item-list').slideToggle();

  if ($(this).attr('aria-expanded') == 'false' ) {
    $(this).attr('aria-expanded', 'true')
    $(this).children('.material-icons').text('close');
  }
  else {
    $(this).attr('aria-expanded', 'false')
    $(this).children('.material-icons').text('add');
  }
});

/* Move compound object navigation out of tabs and next to JAIL display */
var $jail = $('#block-islandora-compound-object-compound-jail-display');
var $jail_prev = $('#islandora-compound-previous-link');
var $jail_seq = $('#islandora-compound-sequence-position');
var $jail_next = $('#islandora-compound-next-link');
var $nav_container = $('<div class="compound-navigation"></div>');

$nav_container.addClass('compound-navigation');

$nav_container.insertBefore($jail);

$nav_container.append($jail_prev);
$nav_container.append($jail_seq);
$nav_container.append($jail_next);


/* Remove clip icon from object pages and make it a descriptive link */
$('#clip').html("Download and Print Options");

/* Add button styles to islandora navigation links */
$('#islandora-solr-search-return-link a').addClass('green button');
$('#islandora-solr-search-next-link a').addClass('button');
$('#islandora-solr-search-prev-link a').addClass('button');
$('#block-islandora-compound-object-compound-jail-display a:contains("manage parent")').addClass("button");


/* Move search results count to after H1 */
var $search_count = $('#islandora-solr-result-count');
$('.pane-page-title').append($search_count);
