var $manual_login = $('.manual-login', context);
var $username = $('.textfield', context);
var $password = $('.password', context);
var $submit = $('.form-actions', context);

function show_login(event) {
  $manual_login.off('click', show_login);

  $username.show();
  $password.show();
  $submit.show();

  event.stopPropagation();
}

$manual_login.on('click', show_login);