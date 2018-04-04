$(document).ready(function() {
  /* accordion */
  $(".expand").click(function(){
    $(this).toggleClass("is-expanded");
    $(this).siblings(".content").slideToggle();
    $(this).children(".material-icons").text("add");
    $(this).filter(".is-expanded").children(".material-icons").text("clear");
  });

  /* switcher */
  $(".content-switcher button").click(function(){
    $(".content-switcher button").removeClass("active");
    $(".content-switcher button").attr("disabled", false);
    var $thisSwitch = $(this).attr("class");
    console.log($thisSwitch);
    $(this).addClass("active");
    $(this).attr("disabled", true);

    $(".content-switcher-container .content:not(." + $thisSwitch + ")").fadeOut();
    $(".content-switcher-container .content." + $thisSwitch).fadeIn();
  });
});
