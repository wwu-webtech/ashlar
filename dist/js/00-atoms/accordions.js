$(document).ready(function() {
  $(".expand").click(function(){
    $(".expand + .content").slideToggle();
    $(".expand").toggleClass("is-expanded");

    $(".expand .material-icons").text("add");
    $(".expand.is-expanded .material-icons").text("clear");
  });
});
