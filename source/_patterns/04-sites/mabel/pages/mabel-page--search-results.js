/* Scripts for search result pages (and collection pages) */

/* Move search results count to after page title */
var $search_count = $('#islandora-solr-result-count');
$('.pane-page-title').append($search_count);

/* Move results limits and display options after search count */
var $results_limit = $('.pane-islandora-solr-result-limit');
var $display_switch = $('.pane-islandora-solr-display-switch');

$('.pane-page-title').append($results_limit);
$('.pane-page-title').append($display_switch);

/* Make result and display pane titles into expand buttons */
var $pane_titles = $('.pane-islandora-solr-result-limit .pane-title, .pane-islandora-solr-display-switch .pane-title');

$pane_titles.each(function() {
  $(this).replaceWith($('<button class="expand-solr-panel" aria-expanded="false">' + this.innerText + '<span class="material-icons" aria-hidden="true">add</span></button>'));
})

$('.expand-solr-panel').click(function() {
  $(this).next('.item-list').slideToggle();

  if ($(this).attr('aria-expanded') == 'false' ) {
    $(this).attr('aria-expanded', 'true')
    $(this).children('.material-icons').text('close');
  }
  else {s
    $(this).attr('aria-expanded', 'false')
    $(this).children('.material-icons').text('add');
  }
});

/* Move the sort options to just above search results */
var $sort = $('.pane-islandora-solr-sort');

$('.layout__region--second').prepend($sort);

/* Replace asc/desc images with html & css */
$('img[title="sort ascending"]').replaceWith('<span class="sort-asc material-icons" aria-hidden="true">change_history</span>');
$('img[title="sort descending"]').replaceWith('<span class="sort-desc material-icons" aria-hidden="true">details</span>');
