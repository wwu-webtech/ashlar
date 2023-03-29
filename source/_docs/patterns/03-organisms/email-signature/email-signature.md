# Email Signature

This is the markup that gets used on https://brand.wwu.edu/email-signature

```
<p><strong>All</strong> fields are optional. Blank fields will not appear in the generated signature.</p>

<form id="signature-form">
  <div class="form-line">
    <div class="form-item">
      <label for="full_name">Full Name</label>
      <input type="text" id="full_name" name="full_name"></input>
    </div>

    <div class="form-item">
      <label for="pronouns">Pronouns</label>
      <input type="text" id="pronouns" name="pronouns"></input>
    </div>

    <div class="form-item">
      <input type="checkbox" id="include_pronoun_link" name="include_pronoun_link" value="link"></input>
      <label for="include_pronoun_link">Link my pronouns to <a href='https://pronouns.org/'>Pronouns.org</a></label>
    </div>
  </div>

  <div class="form-line">
    <div class="form-item">
      <label for="job_title">Job title</label>
      <input type="text" id="job_title" name="job_title"></input>
    </div>

    <div class="form-item">
      <label for="department">Department</label>
      <input type="text" id="department" name="department"></input>
    </div>

    <div class="form-item">
      <label for="department_website">Department Website</label>
      <input type="text" id="department_website" name="department_website"></input>
    </div>
  </div>

  <div class="form-line">
    <div class="form-item">
      <label for="street_address">Street Address</label>
      <input type="text" id="street_address" name="job_title" value="516 High Street"></input>
    </div>

    <div class="form-item">
      <label for="city">City</label>
      <input type="text" id="city" name="city" value="Bellingham"></input>
    </div>

    <div class="form-item">
      <label for="zip_code">Zip Code</label>
      <input type="text" id="zip_code" name="zip_code" value="98225"></input>
    </div>

    <div class="form-item">
      <label for="mail_stop">Mail Stop</label>
      <input type="text" id="mail_stop" name="mail_stop"></input>
    </div>
  </div>

  <div class="form-line">
    <div class="form-item">
      <label for="email">Email</label>
      <input type="text" id="email" name="email"></input>
    </div>

    <div class="form-item">
      <label for="phone_one">Office Phone Number</label>
      <input type="text" id="phone_one" name="phone_one" value="360-650-"></input>
    </div>

    <div class="form-item">
      <label for="phone_two">Additional Phone Number</label>
      <input type="text" id="phone_two" name="phone_two"></input>
    </div>
  </div>

  <div class="form-line">
    <div class="form-item">
      <p>New! Add a link for a Teams direct chat message. Enter your Universal ID (eg lastf83) if you'd like this link to show up in your signature.</p>
        <label for="teams_id">Universal ID</label>
        <input type="text" id="teams_id" name="teams_id"></input>
      </div>
    </div>

  <button type="submit" id="generate_signature">Generate Signature</button>
</form>

<p>&nbsp;</p>

<div id="email_signature">
  <table class="email_signature_table" role="presentation">
      <tr>
        <td>
          <img src="https://designsystem.wwu.edu/files/2020-06/wwu-make-waves.png" width="156" height="148" style="width:156px; height: 148px;" alt="Western Washington University – Make Waves" />
        </td>

        <td style="font-size: 14px;">
          &nbsp;
        </td>

        <td class="info">
          <p style="font-family: 'Segoe UI Web (West European)',Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif; font-size: 14px;">
            <span id="field_name" style="font-weight: 700;">Full Name</span><span id="field_pronouns"> <span aria-hidden="true">|</span> <span style="font-style: italic;">they/them/theirs</span></span><br />
            <span id="field_job_title">Job Title</span><span><br />
            <span id="field_department">Department</span><br />
            Western Washington University<br />
            <span id="field_street_address">516 High Street</span>, <span id="field_city">Bellingham</span> WA <span id="field_zip_code">98225</span> <span id="field_mail_stop"><span aria-hidden="true">|</span> MS0000</span><br />
            <span id="field_email"><a href="mailto:first.last@wwu.edu">first.last@wwu.edu</a></span>
            <span id="field_phone_one"> <span aria-hidden="true">|</span> <a href="tel:360-650-xxxx">360-650-xxxx</a></span>
            <span id="field_phone_two"> <span aria-hidden="true">|</span> <a href="tel:360-650-xxxx">360-650-xxxx</a></span>
            <span id="field_teams_id"> <span aria-hidden="true">|</span> <a href="https://teams.microsoft.com/l/chat/0/0?users=user@wwu.edu">Message me on Teams</a></span>
          </p>
        </td>
      </tr>
  </table>
</div>

<button id="copy_button">Copy to Clipboard</button>
```