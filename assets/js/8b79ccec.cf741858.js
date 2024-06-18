(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[6286],{5405:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(5893),a=n(1151);n(2596),n(2461);const r={},l="Pre-Header",i={id:"organisms/headers/pre-header/pre-header",title:"Pre-Header",description:"Component Markup and Library",source:"@site/patterns/03-organisms/headers/pre-header/pre-header.md",sourceDirName:"03-organisms/headers/pre-header",slug:"/organisms/headers/pre-header/",permalink:"/patterns/organisms/headers/pre-header/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Western Footer",permalink:"/patterns/organisms/footers/wwu-footer/"},next:{title:"Western Header",permalink:"/patterns/organisms/headers/wwu-header/"}},o={},c=[{value:"Component Markup and Library",id:"component-markup-and-library",level:2},{value:"With Alternate Search Profile",id:"with-alternate-search-profile",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pre-header",children:"Pre-Header"}),"\n",(0,s.jsx)("wwu-pre-header",{}),"\n",(0,s.jsx)(t.h2,{id:"component-markup-and-library",children:"Component Markup and Library"}),"\n",(0,s.jsx)(t.p,{children:"Place in <header>"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<wwu-pre-header></wwu-pre-header>\n"})}),"\n",(0,s.jsx)(t.p,{children:"Place near bottom of page"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js"><\/script>\n<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/pre-header.js"><\/script>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"with-alternate-search-profile",children:"With Alternate Search Profile"}),"\n",(0,s.jsx)(t.p,{children:"The base component will use the default search profile. If your site has a custom profile set up, you can use the following attribute to set the default search to that:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<wwu-pre-header search-profile="My-Profile"></wwu-pre-header>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2596:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n  <button class="toggle-settings" aria-expanded="false" aria-controls="search-menu">\n      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z" /></g></svg></span>\n      <span class="toggle-text">Search Settings</span>\n  </button>\n\n  <div id="search-menu" class="search-menu black-bg closed">\n      <fieldset class="search-selection">\n          <legend>Search Scope</legend>\n          <div class="radio">\n              <input id="site-search" name="search-select" value="site" type="radio" checked>\n              <label for="site-search">This department or website only</label>\n          </div>\n          \n          <div class="radio">\n              <input id="full-search" name="search-select" value="full" type="radio">\n              <label for="full-search">All Western Washington University websites</label>\n          </div>\n      </fieldset>\n  </div>\n\n  <form class="search-area">\n      <label for="search-box" class="search-label">Search:</label>\n      <input id="search-box" name="q" type="search">\n      <button class="submit-search" type="submit">\n          <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span>\n          <span class="toggle-text">Go</span>\n      </button>\n  </form>\n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){if(!this.classList.contains("element-created")){this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created"),this.querySelector(".search-area").addEventListener("submit",this.submitSearch.bind(this));var t=window.location.hostname.split(".")[0];const a='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',r='<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z"/></g></svg>';"www"!=t&&"search"!=t||(this.querySelector("#site-search").checked=!1,this.querySelector("#full-search").checked=!0);var n=this.querySelector(".toggle-settings"),s=this.querySelector(".search-menu");function l(){document.removeEventListener("mouseup",o),n.setAttribute("aria-expanded",!1),n.querySelector(".component-icon").innerHTML=r,s.setAttribute("aria-hidden",!0),s.classList.remove("open"),s.classList.add("closed")}function i(e){27==e.keyCode&&s.classList.contains("open")&&(l(),n.focus())}function o(e){var t=s.contains(e.target),a=n.contains(e.target);!s.classList.contains("open")||t||a||l()}function c(){return s.classList.contains("closed")?(document.addEventListener("mouseup",o),n.setAttribute("aria-expanded",!0),n.querySelector(".component-icon").innerHTML=a,s.removeAttribute("aria-hidden"),s.classList.remove("closed"),void s.classList.add("open")):void l()}n&&(n.addEventListener("click",c),n.addEventListener("keyup",i),s.addEventListener("keyup",i))}}submitSearch(e){e.preventDefault();var t=this.querySelector("#search-box").value,n=window.location.hostname.split(".")[0];this.querySelector("#site-search").checked?window.location.href="https://search.wwu.edu/?q="+encodeURIComponent(t)+" site%3A"+encodeURIComponent(n)+".wwu.edu":window.location.href="https://search.wwu.edu/?q="+encodeURIComponent(t)}}window.customElements.get("wwu-search")||window.customElements.define("wwu-search",t)}},2461:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n  \x3c!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/search.css" /--\x3e\n  \x3c!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/pre-header.css" /--\x3e\n\n  <a href="#main-content" class="skip-link focusable icon-link">\n      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"\n          enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">\n          <g>\n              <rect fill="none" height="24" width="24" />\n          </g>\n          <g>\n              <g>\n                  <polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" />\n                  <polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19" />\n              </g>\n          </g>\n      </svg></span>\n      <span class="skip-link-text">Skip to Content </span>\n  </a>\n\n  <button class="toggle-settings" aria-expanded="false" aria-controls="settings-menu">\n      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"\n          enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">\n          <g>\n              <path d="M0,0h24v24H0V0z" fill="none" />\n              <path\n              d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />\n          </g>\n      </svg></span>\n      <span class="toggle-text">Display Settings</span>\n  </button>\n\n  <div id="settings-menu" class="settings-menu black-bg closed">\n      <div class="menu-container">\n          <fieldset class="theme-selection">\n              <legend>Theme</legend>\n              <div class="radio">\n                  <input id="default-theme" type="radio" name="theme-select" value="default-theme" checked="checked">\n                  <label for="default-theme">Default (System)</label>\n              </div>\n              <div class="radio">\n                  <input id="dark-mode" type="radio" name="theme-select" value="dark-mode">\n                  <label for="dark-mode">Dark</label>\n              </div>\n              <div class="radio">\n                  <input id="light-mode" type="radio" name="theme-select" value="light-mode">\n                  <label for="light-mode">Light</label>\n              </div>\n          </fieldset>\n          \n          <fieldset class="font-selection">\n              <legend>Font</legend>\n              <div class="radio">\n                  <input id="font--default" type="radio" name="font-select" value="font--default" checked="checked">\n                  <label for="font--default">Default</label>\n              </div>\n              <div class="radio">\n                  <input id="font--serif" type="radio" name="font-select" value="font--serif">\n                  <label for="font--serif">Serif</label>\n              </div>\n              <div class="radio">\n                  <input id="font--dyslexia-friendly" type="radio" name="font-select" value="font--dyslexia-friendly">\n                  <label for="font--dyslexia-friendly">Open Dyslexic</label>\n              </div>\n              <div class="radio">\n                  <input id="font--hyperlegible" type="radio" name="font-select" value="font--hyperlegible">\n                  <label for="font--hyperlegible">Hyperlegible</label>\n              </div>\n          </fieldset>\n          \n          \x3c!--fieldset class="language-selection">\n              <legend>Language</legend>\n              <input id="language--english" type="radio" name="font-select" value="language--english" checked="checked">\n              <label for="language--english">English</label>\n              <input id="language--spanish" type="radio" name="font-select" value="language--spanish">\n              <label for="language--spanish">Espa\xf1ol</label>\n          </fieldset--\x3e\n      </div>\n      <button class="reset-button"><span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"\n          height="24px" viewBox="0 0 24 24" width="24px">\n          <path d="M0 0h24v24H0z" fill="none" />\n          <path\n          d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />\n      </svg></span> Reset preferences</button>\n  </div>   \n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){if(!this.classList.contains("element-created")){this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created");const u='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',p='<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>',f=document.createElement("wwu-search");f.setAttribute("role","search"),f.setAttribute("aria-label","Western"),null!=this.getAttribute("search-profile")&&f.setAttribute("profile",this.getAttribute("search-profile")),this.appendChild(f);var t,n,s,a=this.querySelector(".toggle-settings"),r=this.querySelector(".settings-menu"),l=document.querySelector("body"),i=document.querySelector("html"),o=this.querySelector(".theme-selection"),c=window.matchMedia("(prefers-color-scheme: dark)"),d=this.querySelector(".font-selection"),h=this.querySelector(".reset-button");function m(){document.removeEventListener("mouseup",w),a.setAttribute("aria-expanded",!1),a.querySelector(".component-icon").innerHTML=p,r.setAttribute("aria-hidden",!0),r.classList.remove("open"),r.classList.add("closed")}function g(e){27==e.keyCode&&r.classList.contains("open")&&(m(),a.focus())}function w(e){var t=r.contains(e.target),n=a.contains(e.target);!r.classList.contains("open")||t||n||m()}function v(){return r.classList.contains("closed")?(document.addEventListener("mouseup",w),a.setAttribute("aria-expanded",!0),a.querySelector(".component-icon").innerHTML=u,r.removeAttribute("aria-hidden"),r.classList.remove("closed"),void r.classList.add("open")):void m()}function b(e){if(localStorage.getItem("wwu_preferred_theme")){t=localStorage.getItem("wwu_preferred_theme");var n=document.querySelector('input[value="'+String(t)+'"]');return n&&(n.checked=!0),void y(t)}try{localStorage.setItem("wwu_preferred_theme","default-theme")}catch(s){return}}function x(){y(n=document.querySelector('input[name="theme-select"]:checked').value);try{localStorage.setItem("wwu_preferred_theme",n)}catch(e){return}}function y(e){"light-mode"==e?i.setAttribute("data-theme","light"):"dark-mode"==e||"default-theme"==e&&c.matches?i.setAttribute("data-theme","dark"):i.setAttribute("data-theme","light")}function L(){if(localStorage.getItem("wwu_preferred_font")){s=localStorage.getItem("wwu_preferred_font");var e=document.querySelector('input[value="'+String(s)+'"]');return e&&(e.checked=!0),void l.classList.add(s)}try{localStorage.setItem("wwu_preferred_font","font--default")}catch(t){return}}function k(){var e=s;s=document.querySelector('input[name="font-select"]:checked').value,l.classList.remove(e),l.classList.add(s);try{localStorage.setItem("wwu_preferred_font",s)}catch(t){return}}function S(e){var t=localStorage.getItem("wwu_preferred_theme"),n=localStorage.getItem("wwu_preferred_font");if(e.target==h&&("default-theme"!==t||"font--default"!==n)){var s=o.querySelector('input[value="default-theme"]'),a=d.querySelector('input[value="font--default"]');try{localStorage.setItem("wwu_preferred_theme","default-theme"),localStorage.setItem("wwu_preferred_font","font--default")}catch(r){return}y("default-theme"),l.classList.add("font--default"),l.classList.remove("font--dyslexia-friendly","font--hyperlegible","font--serif"),s.checked=!0,a.checked=!0}}a&&(a.addEventListener("click",v),a.addEventListener("keyup",g),r.addEventListener("keyup",g)),o&&o.addEventListener("click",x),d&&d.addEventListener("click",k),h&&h.addEventListener("click",S),b(),L()}}}window.customElements.get("wwu-pre-header")||window.customElements.define("wwu-pre-header",t)}},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,a:()=>l});var s=n(7294);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);