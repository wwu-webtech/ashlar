var $toggle_menu = $('.toggle-menu', context);
var $icon = $toggle_menu.children('.material-icons');

function toggle_menu(event) {
  $toggle_menu.off('click', toggle_menu);

  $('.quick-links').animate(
    {
      height: 'toggle',
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {}
    }
  );

  $('.nav--main').animate(
    {
      height: 'toggle',
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () { }
    }
  );

  $('.site-name').animate(
    {
      height: 'toggle',
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () { }
    }
  );

  $('.splash').animate(
    {
      height: 'toggle',
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_menu.toggleClass('.is-expanded');

        if ($toggle_menu.hasClass('.is-expanded')) {
          $icon.text('close');
          $toggle_menu.attr('aria-label', 'Close the menu.');
        }
        else {
          $icon.text('menu');
          $toggle_menu.attr('aria-label', 'Open the menu.');
        }

        $toggle_menu.on('click', toggle_menu);
      }
    }
  );

  event.stopPropagation();
}

$toggle_menu.on('click', toggle_menu);
