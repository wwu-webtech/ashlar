var $toggle_open_menu = $('.toggle-open-menu', context);
var $toggle_close_menu = $('.toggle-close-menu', context);

function toggle_open_menu(event) {
  $toggle_open_menu.off('click', toggle_open_menu);

  $('.nav--main').animate(
    {
      left: '0',
      opacity: '1'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_open_menu.addClass('is-expanded');

        $toggle_open_menu.on('click', toggle_open_menu);
      }
    }
  );

  event.stopPropagation();
}

function toggle_close_menu(event) {
  $toggle_close_menu.off('click', toggle_close_menu);

  $('.nav--main').animate(
    {
      left: '-100%',
      opacity: '0'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_close_menu.removeClass('is-expanded');

        $toggle_close_menu.on('click', toggle_close_menu);
      }
    }
  );

  event.stopPropagation();
}

$toggle_open_menu.on('click', toggle_open_menu);
$toggle_close_menu.on('click', toggle_close_menu);
