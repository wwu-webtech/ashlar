(function($) {
  Drupal.behaviors.acalog = {
    attach: function(context, settings) {
      $('.acalog').acalogWidgetize({
        // gateway to western catalog
        gateway: 'https://catalog.wwu.edu',
        // request for catalogs
        data: 'catalogs',
        // request for a specific catalog
        // catalogName: "2019-2020 University Catalog"
        catalogId: 13
      });
    }
  };
})(jQuery);