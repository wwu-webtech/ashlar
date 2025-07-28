console.log('✅ Ultimenu Extras loaded');
(function ($, Drupal, once) {
  Drupal.behaviors.ultimenuExtras = {
    attach: function (context, settings) {
      console.log('Ultimenu Extras behavior attached');
      if (Drupal.ultimenu && typeof Drupal.ultimenu.onClickCaret === 'function') {
        Drupal.ultimenu.onClickCaret = function (e) {
          const $caret = e.target;
          e.preventDefault();
          e.stopPropagation();

          const $link = $caret.closest('.ultimenu__link');
          const $li = $link.closest('li');
          const $flyout = $link.nextElementSibling;

          if (!$flyout) return false;

          const isExpanded = $li.classList.contains('is-uitem-expanded');

          // Toggle aria-expanded
          $link.setAttribute('aria-expanded', !isExpanded);

          // Toggle Ultimenu's visual classes
          $li.classList.toggle('is-uitem-expanded', !isExpanded);
          $link.classList.toggle('is-ulink-active', !isExpanded);
          $flyout.classList.toggle('is-flyout-expanded', !isExpanded);
        };
      }
    }
  };
  if (!Drupal.ultimenu) {
    console.warn('⚠️ Drupal.ultimenu is not defined when ultimenu-extras ran');
  }
})(jQuery, Drupal, once);
