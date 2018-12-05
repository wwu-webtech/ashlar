var $toggle_advanced_search = $('#block-islandora-solr-advanced > h2', context);
var $advanced_search_form = $('#islandora-solr-advanced-search-form', context);

function toggle_advanced_mabel_search(event) {
  $toggle_advanced_search.off('click', toggle_advanced_mabel_search);

  $advanced_search_form.animate(
    {
      height: 'toggle'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $advanced_search_form.toggleClass('.is-expanded');

        if ($advanced_search_form.hasClass('.is-expanded')) {
          $advanced_search_form.attr('aria-label', 'Close advanced search');
        }
        else {
          $advanced_search_form.attr('aria-label', 'Open advanced search');
        }

        $toggle_advanced_search.on('click', toggle_advanced_mabel_search);
      }
    }
  );

  event.stopPropagation();
}

$toggle_advanced_search.on('click', toggle_advanced_mabel_search);
