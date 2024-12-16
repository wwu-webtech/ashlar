(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[610],{2037:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(5893),a=t(1151);t(2596);const r={},c="Search",o={id:"molecules/search/search",title:"Search",description:"Component Library",source:"@site/patterns/02-molecules/search/search.md",sourceDirName:"02-molecules/search",slug:"/molecules/search/",permalink:"/patterns/molecules/search/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schedule",permalink:"/patterns/molecules/schedule/"},next:{title:"Slide Banner",permalink:"/patterns/molecules/slide-banner/"}},i={},l=[{value:"Component Library",id:"component-library",level:2},{value:"Component Markup",id:"component-markup",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"search",children:"Search"}),"\n",(0,s.jsx)(n.h2,{id:"component-library",children:"Component Library"}),"\n",(0,s.jsx)(n.p,{children:"Include the following script to use the search component on your non-Drupal website or application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js"><\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"component-markup",children:"Component Markup"}),"\n",(0,s.jsx)("wwu-search",{role:"search","aria-label":"Western",children:(0,s.jsx)("noscript",{children:(0,s.jsxs)("form",{class:"search-area",method:"get",action:"https://search2.wwu.edu/texis/search/",children:[(0,s.jsx)("label",{for:"search-box",class:"search-label",children:"Search:"}),(0,s.jsx)("input",{id:"search-box",name:"query",type:"search"}),(0,s.jsxs)("button",{class:"submit-search",type:"submit",children:[(0,s.jsx)("span",{class:"material-icons","aria-hidden":"true",children:"search"}),(0,s.jsx)("span",{class:"toggle-text",children:"Go"})]}),(0,s.jsx)("input",{type:"hidden",name:"pr",value:"Default-WWU-Base"})]})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<wwu-search role="search" aria-label="Western">\n    <noscript>\n        <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search">\n            <label for="search-box" class="search-label">Search:</label>\n            <input id="search-box" name="query" type="search">\n            <button class="submit-search">\n                <span class="material-icons" aria-hidden="true">search</span>\n                <span class="toggle-text">Go</span>\n            </button>\n            \n            <input type="hidden" name="pr" value="Default-WWU-Base">\n        </form>\n    </noscript>\n</wwu-search>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2596:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n  <button class="toggle-settings" aria-expanded="false" aria-controls="search-menu">\n      <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z" /></g></svg></span>\n      <span class="toggle-text">Search Settings</span>\n  </button>\n\n  <div id="search-menu" class="search-menu black-bg closed">\n      <fieldset class="search-selection">\n          <legend>Search Scope</legend>\n          <div class="radio">\n              <input id="site-search" name="search-select" value="site" type="radio" checked>\n              <label for="site-search">This department or website only</label>\n          </div>\n          \n          <div class="radio">\n              <input id="full-search" name="search-select" value="full" type="radio">\n              <label for="full-search">All Western Washington University websites</label>\n          </div>\n      </fieldset>\n  </div>\n\n  <form class="search-area">\n      <label for="search-box" class="search-label">Search:</label>\n      <input id="search-box" name="q" type="search">\n      <button class="submit-search" type="submit">\n          <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span>\n          <span class="toggle-text">Go</span>\n      </button>\n  </form>\n  ';class n extends HTMLElement{constructor(){super()}connectedCallback(){if(!this.classList.contains("element-created")){this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created"),this.querySelector(".search-area").addEventListener("submit",this.submitSearch.bind(this));var n=window.location.hostname.split(".")[0];const a='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',r='<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z"/></g></svg>';"www"!=n&&"search"!=n||(this.querySelector("#site-search").checked=!1,this.querySelector("#full-search").checked=!0);var t=this.querySelector(".toggle-settings"),s=this.querySelector(".search-menu");function c(){document.removeEventListener("mouseup",i),t.setAttribute("aria-expanded",!1),t.querySelector(".component-icon").innerHTML=r,s.setAttribute("aria-hidden",!0),s.classList.remove("open"),s.classList.add("closed")}function o(e){27==e.keyCode&&s.classList.contains("open")&&(c(),t.focus())}function i(e){var n=s.contains(e.target),a=t.contains(e.target);!s.classList.contains("open")||n||a||c()}function l(){return s.classList.contains("closed")?(document.addEventListener("mouseup",i),t.setAttribute("aria-expanded",!0),t.querySelector(".component-icon").innerHTML=a,s.removeAttribute("aria-hidden"),s.classList.remove("closed"),void s.classList.add("open")):void c()}t&&(t.addEventListener("click",l),t.addEventListener("keyup",o),s.addEventListener("keyup",o))}}submitSearch(e){e.preventDefault();var n=this.querySelector("#search-box").value,t=window.location.hostname.split(".")[0];this.querySelector("#site-search").checked?window.location.href="https://search.wwu.edu/?q="+encodeURIComponent(n)+" site%3A"+encodeURIComponent(t)+".wwu.edu":window.location.href="https://search.wwu.edu/?q="+encodeURIComponent(n)}}window.customElements.get("wwu-search")||window.customElements.define("wwu-search",n)}},1151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o,a:()=>c});var s=t(7294);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);