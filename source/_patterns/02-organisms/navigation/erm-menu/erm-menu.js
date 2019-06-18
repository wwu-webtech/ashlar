$('.quick-links').remove();;
$('.search').remove();
$('.region--main_navigation').remove();
$('.toggle-menu').remove();
$('.splash').remove();

if(!$('.toggle-erm-menu').length) {
  var $new_toggle = $('<button class="toggle toggle-erm-menu toggle-open-menu" aria-label="Open the menu"><span class="material-icons">menu</span></button>');

  $('.western-header').insertAfter($new_toggle);
}
