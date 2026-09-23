# Email Signature

This is the markup that gets used on https://marcom.wwu.edu/email-signature


```
<p><strong>All</strong> fields are optional. Blank fields will not appear in the generated signature.</p>


<form id="signature-form">
  <div class="form-line">
    <div class="form-item">
      <label for="full_name">Full Name</label>
      <input type="text" name="full_name"></input>
    </div>
    
    <div class="form-item">
      <label for="pronouns">Pronouns</label>
      <input type="text" name="pronouns"></input>
    </div>
    
    <div class="form-item">
      <label for="job_title">Job title</label>
      <input type="text" name="job_title"></input>
    </div>
  </div>
  
  <div class="form-line">
    <div class="form-item">
      <label for="department">Department</label>
      <input type="text" name="department"></input>
    </div>
    
    <div class="form-item">
      <label for="department_website">Department Website</label>
      <input type="text" name="department_website"></input>
    </div>
    
    <div class="form-item">
      <label for="unit">Unit</label>
      <input type="text" name="unit"></input>
    </div>
    
    <div class="form-item">
      <label for="unit_website">Unit Website</label>
      <input type="text" name="unit_website"></input>
    </div>
  </div>
  
  <div class="form-line">
    <div class="form-item">
      <label for="street_address">Street Address</label>
      <input type="text" name="street_address"></input>
    </div>
    
    <div class="form-item">
      <label for="city">City</label>
      <input type="text" name="city"></input>
    </div>

    <div class="form-item">
      <label for="state">State</label>
      <input type="text" name="state" size="4"></input>
    </div>
    
    <div class="form-item">
      <label for="zip_code">Zip Code</label>
      <input type="text" name="zip_code" size="6"></input>
    </div>
    
    <div class="form-item">
      <label for="mail_stop">Mail Stop</label>
      <input type="text" name="mail_stop"></input>
    </div>
  </div>
  
  <div class="form-line">
    <div class="form-item">
      <label for="email">Email</label>
      <input type="text" name="email"></input>
    </div>
    
    <div class="form-item">
      <label for="phone_one">Office Phone Number</label>
      <input type="text" name="phone_one"></input>
    </div>
    
    <div class="form-item">
      <label for="phone_two">Additional Phone Number</label>
      <input type="text" name="phone_two"></input>
    </div>
  </div>
  
  <div class="form-line">
    <div class="form-item">
      <p>Add a link for a Teams direct chat message. Enter your Universal ID (eg lastf83) if you'd like this link to show up in your signature.</p>
      <label for="teams_id">Universal ID</label>
      <input type="text" name="teams_id"></input>
    </div>
  </div>
  
  <button type="button" id="generate_signature">Generate Signature</button>
</form>
```

```
<div id="email_signature">
  <table class="email_signature_table" role="presentation">
    <tr>
      <td style="vertical-align: middle; width: 160px;">
        <img src="https://ashlar.blob.core.windows.net/ashlar-theme-files/wwu-logo.png" width="160" height="113" style="margin-right: 8px;" alt="Western Washington University" />
      </td>
      
      <td class="info" style="vertical-align: top;">        
        <p style="font-family: 'Segoe UI Web (West European)',Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif; font-size: 14px; padding-top: 2px;">
          <span id="full_name" style="font-weight: 700; font-size: 16px;">Full Name</span><span style="font-style: italic;" id="pronouns">they/them/theirs</span><br/>
          <span id="job_title" style="font-style: italic;">Job Title</span><br/>
          <span id="department" style="font-weight: 700;">Department Name</span><br/>
          <span id="unit">Unit</span><br/>
          Western Washington University<br/>
          <span id="street_address">516 High Street</span><span id="city">Bellingham</span> <span id="state">WA</span><span id="zip_code">98225</span><span id="mail_stop">MS0000</span><br />
          <span id="email"><a href="mailto:first.last@wwu.edu">first.last@wwu.edu</a></span>
          <span id="phone_one"><a href="tel:360-650-xxxx">360-650-xxxx</a></span>
          <span id="phone_two"><a href="tel:360-650-xxxx">360-650-xxxx</a></span>
          <span id="teams_id"><a href="https://teams.microsoft.com/l/chat/0/0?users=user@wwu.edu">Message me on Teams</a></span>
        </p>
      </td>
    </tr>
  </table>
</div>

<button id="copy_button">Copy to Clipboard</button>
```