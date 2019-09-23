var generateButton = document.getElementById('generate_signature');
var copyButton = document.getElementById('copy_button');

if (generateButton) {
  generateButton.onclick = function() {
    var name = document.getElementById('full_name');
    var pronouns =  document.getElementById('pronouns');
    var job_title =  document.getElementById('job_title');
    var department =  document.getElementById('department');
    var street_address =  document.getElementById('street_address');
    var city =  document.getElementById('city');
    var zip_code =  document.getElementById('zip_code');
    var email =  document.getElementById('email');
    var phone_one =  document.getElementById('phone_one');
    var phone_two =  document.getElementById('phone_two');

    name = (name.value) ? name.value : '';
    pronouns = (pronouns.value) ? ' | ' + pronouns.value : '';
    job_title = (job_title.value) ? job_title.value : '';
    department = (department.value) ? department.value : '';
    street_address = (street_address.value) ? street_address.value : '';
    city = (city.value) ? city.value : '';
    zip_code = (zip_code.value) ? zip_code.value : '';
    email = (email.value) ? email.value : '';
    phone_one = (phone_one.value) ? phone_one.value : '';
    phone_two = (phone_two.value) ? phone_two.value : '';

    document.getElementById('field_name').innerText = name;
    document.getElementById('field_pronouns').innerText = pronouns;
    document.getElementById('field_job_title').innerText = job_title;
    document.getElementById('field_department').innerText = department;
    document.getElementById('field_street_address').innerText = street_address;
    document.getElementById('field_city').innerText = city;
    document.getElementById('field_zip_code').innerText = zip_code;
    document.getElementById('field_email').innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    if(phone_one) { document.getElementById('field_phone_one').innerHTML = ' | <a href="tel:' + phone_one + '">' + phone_one + '</a>' } else { document.getElementById('field_phone_one').innerHTML= '' };
    if(phone_two) { document.getElementById('field_phone_two').innerHTML = ' | <a href="tel:' + phone_two + '">' + phone_two + '</a>' } else { document.getElementById('field_phone_two').innerHTML= '' };

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
