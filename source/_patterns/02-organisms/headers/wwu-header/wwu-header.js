var $toggle_open_menu = $('.toggle-open-menu', context);
var $toggle_close_menu = $('.toggle-close-menu', context);
var $last_focused;
var $mobile_nav = $('.quick-links .mobile');
var $inputs = $(document).find('select, button, a, input, textarea')
var $page = $('.western-header, .splash, .toggle-open-menu, .search, .page-content, .region--footer');


// function restrict_focus_mobile(event) {
  // var $mywestern = $('.mywestern');
  // var $last_nav_item = $('.ultimenu li').last();
  //
  //   $last_nav_item.on('keydown', function (event) {
  //     if (e.which === 9 && !e.shiftKey) {
  //       e.preventDefault();
  //       $mywestern.focus();
  //     }
  //   });
  //
  //   $mywestern.on('keydown', function (event) {
  //     if (e.which === 9 && e.shiftKey) {
  //       e.preventDefault();
  //       $last_nav_item.focus();
  //     }
  //   });
  // }
function toggle_open_menu(event) {
  $last_focused = document.activeElement;
  $toggle_open_menu.off('click', toggle_open_menu);
  $('.nav--main').show();
  $('.nav--main').animate(
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
        $inputs.not('.nav--main :focusable').attr('tabindex', '-1');
        $page.not('.nav--main').attr('aria-hidden', 'true');
      }
    }
  );
    // restrict_focus_mobile();
}

function toggle_close_menu(event) {
  $toggle_close_menu.off('click', toggle_close_menu);

  $('.nav--main').animate(
    {
      right: '-100%',
      opacity: '0'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $('.nav--main').hide();
        $toggle_close_menu.removeClass('is-expanded');
        $page.not('.nav--main').removeAttr('aria-hidden');
        $inputs.not('.nav--main :focusable').removeAttr('tabindex');
        $toggle_close_menu.on('click', toggle_close_menu);
        $last_focused.focus();
      }
    }
  );
}

$toggle_open_menu.on('click', toggle_open_menu);
$toggle_close_menu.on('click', toggle_close_menu);
