var $erm_menu = $('#block-ermmenu');
$erm_menu.hide();

/* ERM Menu toggle controls */
if(!$('.toggle-erm-menu').length && $('#block-ermmenu').length) {
  $('.quick-links').remove();
  $('.search').remove();
  $('.nav--main').remove();
  $('.toggle-menu').remove();
  $('.splash').remove();

  $('body').addClass('erm-page erm-headings');

  var $erm_toggle = $('<button class="toggle toggle-erm-menu toggle-open-menu" aria-label="Open the menu"><span class="material-icons">menu</span></button>');

  $('.western-header .wrap').append($erm_toggle);
}

function toggle_erm_menu(event) {
  $erm_toggle.off('click', toggle_erm_menu);

  $erm_menu.animate(
    {
      opacity: 'toggle'
    },
    {
      duration: 'normal',
      easing: 'swing',
      complete: function () {
        $erm_toggle.toggleClass('is-expanded');

        if ($erm_toggle.hasClass('is-expanded')) {
          $('.toggle-erm-menu .material-icons').text('close');
          $erm_toggle.attr('aria-label', 'Close the menu');
        }
        else {
          $('.toggle-erm-menu .material-icons').text('menu');
          $erm_toggle.attr('aria-label', 'Open the menu');
        }

        $erm_toggle.on('click', toggle_erm_menu);
      }
    }
  );

  event.stopPropagation();
}

$erm_toggle.on('click', toggle_erm_menu);
