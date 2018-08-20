var $toggle_menu = $('.toggle-menu', context);

function toggle_menu(event) {
  $toggle_menu.off('click', toggle_menu);

  $('.nav--main').animate(
    {
      width: 'toggle',
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_menu.toggleClass('.is-expanded');

        $toggle_menu.on('click', toggle_menu);
      }
    }
  );

  event.stopPropagation();
}

$toggle_menu.on('click', toggle_menu);
