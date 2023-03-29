"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,c=m["".concat(o,".").concat(f)]||m[f]||u[f]||r;return t?i.createElement(c,s(s({ref:n},d),{},{components:t})):i.createElement(c,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const r={},s="Email Signature",l={unversionedId:"organisms/email-signature/email-signature",id:"organisms/email-signature/email-signature",title:"Email Signature",description:"This is the markup that gets used on https://brand.wwu.edu/email-signature",source:"@site/patterns/03-organisms/email-signature/email-signature.md",sourceDirName:"03-organisms/email-signature",slug:"/organisms/email-signature/",permalink:"/ashlar/patterns/organisms/email-signature/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Timeline",permalink:"/ashlar/patterns/molecules/timeline/"},next:{title:"Site Footer",permalink:"/ashlar/patterns/organisms/footers/site-footer/"}},o={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"email-signature"},"Email Signature"),(0,a.kt)("p",null,"This is the markup that gets used on ",(0,a.kt)("a",{parentName:"p",href:"https://brand.wwu.edu/email-signature"},"https://brand.wwu.edu/email-signature")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<p><strong>All</strong> fields are optional. Blank fields will not appear in the generated signature.</p>\n\n<form id="signature-form">\n  <div class="form-line">\n    <div class="form-item">\n      <label for="full_name">Full Name</label>\n      <input type="text" id="full_name" name="full_name"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="pronouns">Pronouns</label>\n      <input type="text" id="pronouns" name="pronouns"></input>\n    </div>\n\n    <div class="form-item">\n      <input type="checkbox" id="include_pronoun_link" name="include_pronoun_link" value="link"></input>\n      <label for="include_pronoun_link">Link my pronouns to <a href=\'https://pronouns.org/\'>Pronouns.org</a></label>\n    </div>\n  </div>\n\n  <div class="form-line">\n    <div class="form-item">\n      <label for="job_title">Job title</label>\n      <input type="text" id="job_title" name="job_title"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="department">Department</label>\n      <input type="text" id="department" name="department"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="department_website">Department Website</label>\n      <input type="text" id="department_website" name="department_website"></input>\n    </div>\n  </div>\n\n  <div class="form-line">\n    <div class="form-item">\n      <label for="street_address">Street Address</label>\n      <input type="text" id="street_address" name="job_title" value="516 High Street"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="city">City</label>\n      <input type="text" id="city" name="city" value="Bellingham"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="zip_code">Zip Code</label>\n      <input type="text" id="zip_code" name="zip_code" value="98225"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="mail_stop">Mail Stop</label>\n      <input type="text" id="mail_stop" name="mail_stop"></input>\n    </div>\n  </div>\n\n  <div class="form-line">\n    <div class="form-item">\n      <label for="email">Email</label>\n      <input type="text" id="email" name="email"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="phone_one">Office Phone Number</label>\n      <input type="text" id="phone_one" name="phone_one" value="360-650-"></input>\n    </div>\n\n    <div class="form-item">\n      <label for="phone_two">Additional Phone Number</label>\n      <input type="text" id="phone_two" name="phone_two"></input>\n    </div>\n  </div>\n\n  <div class="form-line">\n    <div class="form-item">\n      <p>New! Add a link for a Teams direct chat message. Enter your Universal ID (eg lastf83) if you\'d like this link to show up in your signature.</p>\n        <label for="teams_id">Universal ID</label>\n        <input type="text" id="teams_id" name="teams_id"></input>\n      </div>\n    </div>\n\n  <button type="submit" id="generate_signature">Generate Signature</button>\n</form>\n\n<p>&nbsp;</p>\n\n<div id="email_signature">\n  <table class="email_signature_table" role="presentation">\n      <tr>\n        <td>\n          <img src="https://designsystem.wwu.edu/files/2020-06/wwu-make-waves.png" width="156" height="148" style="width:156px; height: 148px;" alt="Western Washington University \u2013 Make Waves" />\n        </td>\n\n        <td style="font-size: 14px;">\n          &nbsp;\n        </td>\n\n        <td class="info">\n          <p style="font-family: \'Segoe UI Web (West European)\',Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif; font-size: 14px;">\n            <span id="field_name" style="font-weight: 700;">Full Name</span><span id="field_pronouns"> <span aria-hidden="true">|</span> <span style="font-style: italic;">they/them/theirs</span></span><br />\n            <span id="field_job_title">Job Title</span><span><br />\n            <span id="field_department">Department</span><br />\n            Western Washington University<br />\n            <span id="field_street_address">516 High Street</span>, <span id="field_city">Bellingham</span> WA <span id="field_zip_code">98225</span> <span id="field_mail_stop"><span aria-hidden="true">|</span> MS0000</span><br />\n            <span id="field_email"><a href="mailto:first.last@wwu.edu">first.last@wwu.edu</a></span>\n            <span id="field_phone_one"> <span aria-hidden="true">|</span> <a href="tel:360-650-xxxx">360-650-xxxx</a></span>\n            <span id="field_phone_two"> <span aria-hidden="true">|</span> <a href="tel:360-650-xxxx">360-650-xxxx</a></span>\n            <span id="field_teams_id"> <span aria-hidden="true">|</span> <a href="https://teams.microsoft.com/l/chat/0/0?users=user@wwu.edu">Message me on Teams</a></span>\n          </p>\n        </td>\n      </tr>\n  </table>\n</div>\n\n<button id="copy_button">Copy to Clipboard</button>\n')))}u.isMDXComponent=!0}}]);