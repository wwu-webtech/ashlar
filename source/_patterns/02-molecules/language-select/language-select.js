var $language_Select_Button = $('#dropMenu');
var $language_Menu = $('#langMenu');

$language_Select_Button.click(function(event){
  if($language_Menu.css('display') === 'none'){
    $language_Menu.show("linear");
  }
  else{
    $language_Menu.hide("linear");
  }
  event.stopPropagation();
});
