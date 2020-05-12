var $mobile_language_button = $('langOptionButton');
var $mobile_language_menu = $('#dropLangMenu');

$mobile_language_button.click(function (event) {

    if ($mobile_language_menu.css('display') === 'none') {
        $mobile_language_menu.show("linear");
    }
    else {
        $mobile_language_menu.hide("linear");
    }
    event.stopPropagation();
});
