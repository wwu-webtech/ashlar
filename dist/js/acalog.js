(function($) {
  Drupal.behaviors.acalog = {
    attach: function(context, settings) {      
      /* Setting these attribnutes in acalogWidgetize just doesn't work, so we are setting them here instead */
      $('.acalog').attr("data-acalog-data", "programs");
      $('.acalog').each(function () {
        $(this).attr('data-acalog-link-text', $(this).text());
      });
      $('.acalog').acalogWidgetize({
        // gateway to western catalog
        gateway: 'https://catalog.wwu.edu',
        data: 'catalogs',
        catalogId: 1,
      });

      /* Slightly different class for making course links */
      $('.acalog-course').attr("data-acalog-data", "courses");
      $('.acalog-courses').each(function () {
        $(this).attr('data-acalog-link-text', $(this).text());
      });
      $('.acalog-course').acalogWidgetize({
        gateway: 'https://catalog.wwu.edu',
        data: 'catalogs',
        catalogId: 1,
      });
    }
  };
})(jQuery);
