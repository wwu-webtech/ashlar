/* On search page results and collection pages, options for changing sort order, result limits, and results display */
var $search_options_container = $('<div class="search-options-container"></div>');
var $sort = $('.pane-islandora-solr-sort');
var $results_limit = $('.pane-islandora-solr-result-limit');
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
