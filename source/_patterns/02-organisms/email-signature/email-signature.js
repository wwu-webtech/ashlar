var generateButton = document.getElementById("generate_signature");
var copyButton = document.getElementById("copy_button");

generateButton.onclick = function() {
  var name = document.getElementById('full_name');
  var pronouns =  document.getElementById('pronouns');
  var job_title =  document.getElementById('job_title');
  var department =  document.getElementById('department');
  var email =  document.getElementById('email');
  var office_phone =  document.getElementById('phone_one');
  var cell_phone =  document.getElementById('phone_two');

  console.log(name);

  name = (name.value) ? name.value : "";
  pronouns = (pronouns.value) ? pronouns.value : "";
  job_title = (job_title.value) ? job_title.value : "";
  department = (department.value) ? department.value : "";
  email = (email.value) ? email.value : "";
  office_phone = (office_phone.value) ? office_phone.value : "";
  cell_phone = (cell_phone.value) ? cell_phone.value : "";

  console.log(name);

  document.getElementById('field_name').innerText = name;
  document.getElementById('field_pronouns').innerText = pronouns;  

  document.getElementById('field_job_title').innerText = job_title;
  document.getElementById('field_department').innerText = department;

  document.getElementById('field_email').innerText = email;
  document.getElementById('field_email').setAttribute("href", "mailto:" + email);

  document.getElementById('field_phone_one').innerText = office_phone;
  document.getElementById('field_phone_one').setAttribute("href", "tel:" + office_phone);

  document.getElementById('field_phone_two').innerText = cell_phone;
  document.getElementById('field_phone_two').setAttribute("href", "tel:" + cell_phone);

  copyButton.focus();
}

copyButton.onclick = function(){
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("email_signature"));
    range.select().createTextRange();
    document.execCommand("copy");

  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("email_signature"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};
