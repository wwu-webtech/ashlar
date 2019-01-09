var $advanced_h2 = $('#block-islandora-solr-advanced > h2', context);
var $advanced_search_form = $('#islandora-solr-advanced-search-form', context);

$advanced_search_form.removeClass('is-expanded');
/* Turn h2 into a button */
$advanced_h2.replaceWith('<button aria-label="open advanced search" class="toggle-advanced-search">Advanced search<span class="material-icons">add</span></button>');

var $toggle_advanced_search = $('.toggle-advanced-search');
var $advanced_search_icon = $toggle_advanced_search.children('.material-icons');

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
        $advanced_search_form.toggleClass('is-expanded');

        if ($advanced_search_form.hasClass('is-expanded')) {
          $toggle_advanced_search.attr('aria-label', 'Close advanced search');
          $advanced_search_icon.text('close');
        }
        else {
          $toggle_advanced_search.attr('aria-label', 'Open advanced search');
          $advanced_search_icon.text('add');
        }

        $toggle_advanced_search.on('click', toggle_advanced_mabel_search);
      }
    }
  );

  event.stopPropagation();
}

$toggle_advanced_search.on('click', toggle_advanced_mabel_search);
