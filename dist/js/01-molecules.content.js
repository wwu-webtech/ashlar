$(document).ready(function() {
  /* accordion */
  $(".expand").click(function(){
    $(this).toggleClass("is-expanded");
    $(this).siblings(".content").slideToggle();
    $(this).children(".material-icons").text("add");
    $(this).filter(".is-expanded").children(".material-icons").text("clear");
  });

  /* switcher */
  $(".content-switcher a").click(function(){
    $(".content-switcher a").removeClass("active");
    var $thisSwitch = $(this).attr("class");
    console.log($thisSwitch);
    $(this).addClass("active");

    $(".content-switcher-container .content:not(." + $thisSwitch + ")").fadeOut();
    $(".content-switcher-container .content." + $thisSwitch).fadeIn();
  });
});
