(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[610],{2037:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var t=s(5893),a=s(1151);s(2596);const r={},c="Search",o={id:"molecules/search/search",title:"Search",description:"Component Library",source:"@site/patterns/02-molecules/search/search.md",sourceDirName:"02-molecules/search",slug:"/molecules/search/",permalink:"/patterns/molecules/search/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schedule",permalink:"/patterns/molecules/schedule/"},next:{title:"Statistics",permalink:"/patterns/molecules/statistic/"}},l={},i=[{value:"Component Library",id:"component-library",level:2},{value:"Component Markup",id:"component-markup",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"search",children:"Search"}),"\n",(0,t.jsx)(n.h2,{id:"component-library",children:"Component Library"}),"\n",(0,t.jsx)(n.p,{children:"Include the following script to use the search component on your non-Drupal website or application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js"><\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"component-markup",children:"Component Markup"}),"\n",(0,t.jsx)("wwu-search",{role:"search","aria-label":"Western",children:(0,t.jsx)("noscript",{children:(0,t.jsxs)("form",{class:"search-area",method:"get",action:"https://search2.wwu.edu/texis/search/",children:[(0,t.jsx)("label",{for:"search-box",class:"search-label",children:"Search:"}),(0,t.jsx)("input",{id:"search-box",name:"query",type:"search"}),(0,t.jsxs)("button",{class:"submit-search",children:[(0,t.jsx)("span",{class:"material-icons","aria-hidden":"true",children:"search"}),(0,t.jsx)("span",{class:"toggle-text",children:"Go"})]}),(0,t.jsx)("input",{type:"hidden",name:"pr",value:"Default-WWU-Base"})]})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<wwu-search role="search" aria-label="Western">\n    <noscript>\n        <form class="search-area" method="get" action="https://search2.wwu.edu/texis/search">\n            <label for="search-box" class="search-label">Search:</label>\n            <input id="search-box" name="query" type="search">\n            <button class="submit-search">\n                <span class="material-icons" aria-hidden="true">search</span>\n                <span class="toggle-text">Go</span>\n            </button>\n            \n            <input type="hidden" name="pr" value="Default-WWU-Base">\n        </form>\n    </noscript>\n</wwu-search>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2596:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    <form class="search-area" method="get" action="https://search.wwu.edu/">\n      <label for="search-box" class="search-label">Search:</label>\n      <input id="search-box" name="q" type="search">\n      <button class="submit-search">\n        <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span>\n        <span class="toggle-text">Go</span>\n      </button>      \n    </form>\n    ';class n extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.contains("element-created")||(this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created"))}}window.customElements.get("wwu-search")||window.customElements.define("wwu-search",n)}},1151:(e,n,s)=>{"use strict";s.d(n,{Z:()=>o,a:()=>c});var t=s(7294);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);