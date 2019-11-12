var $toggle_search = $('.toggle-search', context);
var $search_icon = $toggle_search.children('.material-icons');
var $search_box = $('#search-box')

function toggle_search(event) {
  $toggle_search.off('click', toggle_search);

  $toggle_search.siblings('.search-area').animate(
    {
      width: 'toggle'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_search.toggleClass('.is-expanded');

        if ($toggle_search.hasClass('.is-expanded')) {
          $search_icon.text('close');
          $toggle_search.attr('aria-label', 'Close the search box');
          $search_box.focus()
        }
        else {
          $search_icon.text('search');
          $toggle_search.attr('aria-label', 'Open the search box');
        }

        $toggle_search.on('click', toggle_search);
      }
    }
  );

  event.stopPropagation();
}

$toggle_search.on('click', toggle_search);
