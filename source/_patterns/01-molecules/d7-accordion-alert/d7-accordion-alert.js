//START accordion menu accessibility workaround
Drupal.behaviors.accordionAccessibility = {
  attach: function (context) {
    function accordionMenuConvert($root) {
      var $ul = $root.children('ul').clone(false);

      if (!$ul.length) {
        $ul = $('<ul>', { 'class': 'menu' });

        $root.children('h3').each(function (index, element) {
          var $h3 = $(element);
          var $div = $h3.next('div');
          var $submenu = accordionMenuConvert($div);
          var $li = $('<li>', { 'class': 'menu__item' });
          var $a = $h3.children('.accordion-link').clone(false);

          if ($a.length) {
            $li.html($a.removeClass('accordion-link').addClass('menu__link'));
          }

          if ($submenu.children().length) {
            $li.append($submenu);
          }
          else {
            $li.addClass('is-leaf').addClass('leaf');
          }

          $ul.append($li);
        });

        $ul.children().first().addClass('first');
        $ul.children().last().addClass('last');
      }

      return $ul;
    }

    $('[class^="accordion-menu-"]', context).each(function () {
      var $accordion = $(this);

      var $enableAlert = $accordion.siblings('.enable-menu-alert');
      var $disableAlert = $accordion.siblings('.disable-menu-alert');

      var $enableAlertButton = $enableAlert.find('.enable-accordion');
      var $disableAlertButton = $disableAlert.find('.menu-disable-button');

      var $menuWarning = $disableAlert.find('.menu-enabled');
      var $menuDisabled = $enableAlert.find('.menu-disabled');

      var $accessibleMenu = accordionMenuConvert($accordion);

      function accordionMenuDisable() {
        $disableAlert.hide();
        $accordion.hide();
        $accordion.addClass('accordion-menu-disabled');
        $accordion.removeClass('accordion-menu-enabled');
        $accordion.children('a').attr('tabindex', '-1');
        $accessibleMenu.show();
        $enableAlert.show();
      }

      function accordionMenuEnable() {
        $enableAlert.hide();
        $accordion.show();
        $accordion.addClass('accordion-menu-enabled');
        $accordion.removeClass('accordion-menu-disabled');
        $accordion.children('a').removeAttr('tabindex');
        $accessibleMenu.hide();
        $disableAlert.show();
      }

      function checkLocalStorage() {
        if (localStorage.getItem('accordiondisabled') === 'true') {
          accordionMenuDisable();
        }
        else {
          accordionMenuEnable();
        }
      }

      function navWrapper () {
        var $accordionDisabled = $('.accordion-menu-disabled');
        var $accessibleMenu = $accordionDisabled.siblings('ul', { 'class': 'menu' });

        if ($accordionDisabled.length) {
          $accessibleMenu.wrapAll("<nav aria-label='Submenu'></nav>");
        }
        else {
          return false;
        }
      }

      $accordion.after($accessibleMenu.hide());
      checkLocalStorage();

      $disableAlertButton.click(function() {
        localStorage.setItem('accordiondisabled', 'true');
        accordionMenuDisable();
        navWrapper();
        $menuDisabled.focus();
        ga('send', 'event', { eventCategory: 'Accessibility', eventAction: 'Enable/Disable', eventLabel: 'Interior Menu Fix'});
      });

      $enableAlertButton.click(function() {
        localStorage.setItem('accordiondisabled', 'false');
        accordionMenuEnable();
        navWrapper();
        $menuWarning.focus();
      });
    });
  }
};
// END accordion menu accessibility workaround
