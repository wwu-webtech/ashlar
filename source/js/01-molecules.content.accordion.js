(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.accordion = {

    attach: function (context) {
      $(".expand").click(function(){
        $(this).toggleClass("is-expanded");
        $(this).siblings(".content").slideToggle();
        $(this).children(".material-icons").text("add");
        $(this).filter(".is-expanded").children(".material-icons").text("clear");
      });
    }

  };

})(jQuery, Drupal, this, this.document);
