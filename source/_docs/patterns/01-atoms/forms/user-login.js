var manual_login = context.querySelector('.manual-login');
var username = context.querySelector('.textfield');
var password = context.querySelector('.password');
var submit = context.querySelector('.form-actions');

function show_login(event) {
  manual_login.removeEventListener('click', show_login);

  username.style.display = 'block';
  password.style.display = 'block';
  submit.style.display = 'block';

  event.stopPropagation();
}

manual_login.addEventListener('click', show_login);
