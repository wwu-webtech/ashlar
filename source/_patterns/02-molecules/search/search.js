var $toggle_search = $('.toggle-search', context);
var $search_icon = $toggle_search.children('.material-icons');
var $search_box = $('#search-box');
var $toggle_prefix = $toggle_search.children('.toggle-prefix');
var $toggle_text = $toggle_search.children('.toggle-text');
var $toggle_suffix = $toggle_search.children('.toggle-suffix');

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
          $toggle_prefix.html('');
          $toggle_text.html('Close');
          $toggle_suffix.html(' Search');
          $search_box.focus()
        }
        else {
          $search_icon.text('search');
          $toggle_prefix.html('Open ');
          $toggle_text.html('Search');
          $toggle_suffix.html('');
        }

        $toggle_search.on('click', toggle_search);
      }
    }
  );

  event.stopPropagation();
}

$toggle_search.on('click', toggle_search);
