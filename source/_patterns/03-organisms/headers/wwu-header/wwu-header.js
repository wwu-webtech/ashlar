var $menu_toggle = $('.toggle-menu', context);
var $menu_icon = $menu_toggle.children('.material-icons');
var $toggle_prefix = $menu_toggle.children('.toggle-prefix');
var $toggle_text = $menu_toggle.children('.toggle-text');
var $toggle_suffix = $menu_toggle.children('.toggle-suffix');
var $last_focused;
var $inputs = $(document).find('select, button, a, input, textarea', context);
var $page = $('.skip-link, .splash, .make-waves, .header-navigation .site-name, .toggle-open-menu, .page-content, .region--footer', context);

// aria-expanded vars
var $menu_item = $('.ultimenu__item');
var $menu_link = $menu_item.children('.ultimenu__link');

function toggle_menu(event) {
  $menu_toggle.off('click', toggle_menu);

  if ($menu_toggle.hasClass('is-expanded')) {
    toggle_close_menu(event);
    $menu_link.attr('aria-hidden', 'true');
    $menu_link.attr('tabindex', '-1');
  }
  else {
    toggle_open_menu(event);
    $menu_link.removeAttr('aria-hidden tabindex');
    ariaFix();
  }

  // aria-expanded fix
  function ariaFix() {
    $menu_link.removeAttr('aria-hidden aria-expanded');
    $('.has-ultimenu').find($menu_link).attr({
      'role': 'button',
      'aria-expanded': false
    });
  }
// end aria-expanded fix
}

function toggle_open_menu(event) {
  $last_focused = document.activeElement;
  $('.header-navigation').show();
  $menu_icon.text('close');
  $toggle_prefix.html('');
  $toggle_text.html('Close');
  $toggle_suffix.html(' the Menu');

  $('.header-navigation').animate(
    {
      right: '0',
      opacity: '1'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $menu_toggle.addClass('is-expanded');
        $menu_toggle.on('click', toggle_menu);
        $menu_toggle.focus();
        $inputs.not('.toggle-menu, .header-navigation a, .header-navigation button, .ultimenu__flyout a').attr('tabindex', '-1');
        $page.not('.header-navigation').attr('aria-hidden', 'true');
      }
    }
  );
}

function toggle_close_menu(event) {
  $menu_icon.text('menu');
  $toggle_prefix.html('Open the ');
  $toggle_text.html('Menu');
  $toggle_suffix.html('');

  $('.header-navigation').animate(
    {
      right: '-100%',
      opacity: '0'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $('.header-navigation').hide();
        $('#dropLangMenu').hide();
        $menu_toggle.removeClass('is-expanded');
        $page.not('.header-navigation').removeAttr('aria-hidden');
        $inputs.not('.header-navigation a, .header-navigation button').removeAttr('tabindex');
        $menu_link.attr('aria-hidden', 'true');
        $menu_toggle.on('click', toggle_menu);
        $last_focused.focus();
      }
    }
  );
}

$menu_toggle.on('click', toggle_menu);
