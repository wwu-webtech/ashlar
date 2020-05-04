var $toggle_open_menu = $('.toggle-open-menu', context);
var $toggle_close_menu = $('.toggle-close-menu', context);
var $last_focused;
var $mobile_nav = $('.quick-links .mobile', context);
var $inputs = $(document).find('select, button, a, input, textarea', context)
var $page = $('.skip-link, .western-header, .splash, .toggle-open-menu, .search, .page-content, .region--footer', context);

function toggle_open_menu(event) {
  $last_focused = document.activeElement;
  $toggle_open_menu.off('click', toggle_open_menu);
  $('.main-navigation').show();
  $('.main-navigation').animate(
    {
      right: '0',
      opacity: '1'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $toggle_open_menu.addClass('is-expanded');
        $toggle_open_menu.on('click', toggle_open_menu);
        $toggle_close_menu.focus();
        $inputs.not('.main-navigation a, .main-navigation button, .ultimenu__flyout a').attr('tabindex', '-1');
        $page.not('.main-navigation').attr('aria-hidden', 'true');
      }
    }
  );
}

function toggle_close_menu(event) {
  $toggle_close_menu.off('click', toggle_close_menu);

  $('.main-navigation').animate(
    {
      right: '-100%',
      opacity: '0'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $('.main-navigation').hide();
        $('#dropLangMenu').hide();
        $toggle_close_menu.removeClass('is-expanded');
        $page.not('.main-navigation').removeAttr('aria-hidden');
        $inputs.not('.main-navigation a, .main-navigation button').removeAttr('tabindex');
        $toggle_close_menu.on('click', toggle_close_menu);
        $last_focused.focus();
      }
    }
  );
}

$toggle_open_menu.on('click', toggle_open_menu);
$toggle_close_menu.on('click', toggle_close_menu);

