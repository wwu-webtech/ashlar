
var $languageMenu = $('#langMenu');

$('#dropMenu').click(function(event){
  if($languageMenu.css('display') === 'none'){
    $languageMenu.show("linear");
  }
  else{
    $languageMenu.hide("linear");
  }
  event.stopPropagation();
});
   