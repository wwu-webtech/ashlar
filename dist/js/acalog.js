(function($) {
  Drupal.behaviors.acalog = {
    attach: function(context, settings) {
      /* Current Catalog ID. Note this may be a few numbers behind the coid that shows up in the URL */
      const current_catoid = "18";
      
      /* Setting these attribnutes in acalogWidgetize just doesn't work, so we are setting them here instead */
      $('.acalog').attr("data-acalog-data", "programs");
      $('.acalog').attr("data-acalog-catalog-id", current_catoid);
      $('.acalog').acalogWidgetize({
        // gateway to western catalog
        gateway: 'https://catalog.wwu.edu',
      });
    }
  };
})(jQuery);
