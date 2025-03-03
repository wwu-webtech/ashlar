var generateButton = document.getElementById('generate_signature');
var copyButton = document.getElementById('copy_button');

if (generateButton) {
  generateButton.onclick = function() {
    var name = document.getElementById('full_name');
    var pronouns =  document.getElementById('pronouns');
    var job_title =  document.getElementById('job_title');
    var department =  document.getElementById('department');
    var department_website =  document.getElementById('department_website');
    var unit =  document.getElementById('unit');
    var unit_website =  document.getElementById('unit_website');
    var street_address =  document.getElementById('street_address');
    var city =  document.getElementById('city');
    var zip_code =  document.getElementById('zip_code');
    var mail_stop =  document.getElementById('mail_stop');
    var email =  document.getElementById('email');
    var phone_one =  document.getElementById('phone_one');
    var phone_two =  document.getElementById('phone_two');
    var teams_id =  document.getElementById('teams_id');

    name = (name.value) ? name.value : '';
    job_title = (job_title.value) ? job_title.value : '';
    department = (department.value) ? department.value : '';
    department_website = (department_website.value) ? department_website.value : '';
    unit = (unit.value) ? unit.value : '';
    unit_website = (unit_website.value) ? unit_website.value : '';
    street_address = (street_address.value) ? street_address.value : '';
    city = (city.value) ? city.value : '';
    zip_code = (zip_code.value) ? zip_code.value : '';
    mail_stop = (mail_stop.value) ? mail_stop.value : '';
    email = (email.value) ? email.value : '';
    phone_one = (phone_one.value) ? phone_one.value : '';
    phone_two = (phone_two.value) ? phone_two.value : '';
    teams_id = (teams_id.value) ? teams_id.value : '';

    if (document.getElementById('include_pronoun_link').checked) {
      pronouns = (pronouns.value) ? ' <span aria-hidden="true">|</span> <a href="https://pronouns.org/">' + pronouns.value + '</a>' : '';
    } else {
      pronouns = (pronouns.value) ? ' <span aria-hidden="true">|</span> ' + pronouns.value : '';
    }

    document.getElementById('field_name').innerText = name;
    document.getElementById('field_pronouns').innerHTML = pronouns;
    document.getElementById('field_job_title').innerText = job_title;
    document.getElementById('field_department').innerText = department;
    document.getElementById('field_unit').innerText = unit;
    document.getElementById('field_street_address').innerText = street_address;
    document.getElementById('field_city').innerText = city;
    document.getElementById('field_zip_code').innerText = zip_code;
    document.getElementById('field_email').innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';

    if(phone_one) { document.getElementById('field_phone_one').innerHTML = ' <span aria-hidden="true">|</span> <a href="tel:' + phone_one + '">' + phone_one + '</a>' }
    else { document.getElementById('field_phone_one').innerHTML= '' }
    if(phone_two) { document.getElementById('field_phone_two').innerHTML = ' <span aria-hidden="true">|</span> <a href="tel:' + phone_two + '">' + phone_two + '</a>' }
    else { document.getElementById('field_phone_two').innerHTML= '' }

    if(teams_id) { document.getElementById('field_teams_id').innerHTML = ' <span aria-hidden="true">|</span> <a href="https://teams.microsoft.com/l/chat/0/0?users=' + teams_id + '@wwu.edu">Message me on Teams</a>' }
    else { document.getElementById('field_teams_id').innerHTML= '' }

    if(mail_stop) { document.getElementById('field_mail_stop').innerHTML = ' <span aria-hidden="true">|</span> MS' + mail_stop }
    else { document.getElementById('field_mail_stop').innerText= '' }

    if(department_website) { document.getElementById('field_department').innerHTML = '<a style="color: #ffffff !important; text-decoration: none !important;" href="' + department_website + '">' + department + '</a>'; }
    if(unit_website) { document.getElementById('field_unit').innerHTML = '<a href="' + unit_website + '">' + unit + '</a>'; }

    copyButton.innerText ='Copy to Clipboard';
    copyButton.focus();
  }
}

if (copyButton) {
  copyButton.onclick = function(){
    copyToClip(document.getElementById('email_signature').innerHTML);
    copyButton.innerText ='Signature copied!';
  };
}

function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};
