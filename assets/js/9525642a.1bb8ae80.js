(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[284],{2430:(e,n,a)=>{"use strict";a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=a(5893),i=a(1151);a(2025);const r={},s="Main Navigation",l={id:"organisms/navigation/main-navigation/main-navigation",title:"Main Navigation",description:"Utilizes Ultimenu for generating the markup and region management in Drupal, and Adobe Megamenu for the interactions/accessibility.",source:"@site/patterns/03-organisms/navigation/main-navigation/main-navigation.md",sourceDirName:"03-organisms/navigation/main-navigation",slug:"/organisms/navigation/main-navigation/",permalink:"/patterns/organisms/navigation/main-navigation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Homepage Icon Navigation",permalink:"/patterns/organisms/navigation/homepage-icon-nav/"},next:{title:"myWestern Menu",permalink:"/patterns/organisms/navigation/my-western-menu/"}},c={},o=[{value:"Component Library",id:"component-library",level:2},{value:"Component Markup",id:"component-markup",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"main-navigation",children:"Main Navigation"}),"\n",(0,t.jsx)(n.p,{children:"Utilizes Ultimenu for generating the markup and region management in Drupal, and Adobe Megamenu for the interactions/accessibility.\nThe megamenu script cannot currently be loaded in the documentaion, so this is a preview for styles only."}),"\n",(0,t.jsx)(n.h2,{id:"component-library",children:"Component Library"}),"\n",(0,t.jsx)(n.p,{children:"Include the following scripts to use the navigation component on your non-Drupal website or application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/accessible-mega-menu.js">\n<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/menu-extras.js">\n<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/main-navigation.js">\n'})}),"\n",(0,t.jsx)(n.h2,{id:"component-markup",children:"Component Markup"}),"\n",(0,t.jsxs)("wwu-main-nav",{children:[(0,t.jsx)("a",{href:"#place1a",children:"Menu item 1"}),(0,t.jsx)("wwu-has-children",{label:"Parent Item 1",children:(0,t.jsxs)("wwu-sub-menu",{children:[(0,t.jsx)("a",{href:"#place1b",children:"Parent 1 Item 1"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 1 Item two"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent One Item 3"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 1 Item 4"})]})}),(0,t.jsx)("a",{href:"#place2",children:"Menu item 3"}),(0,t.jsxs)("wwu-has-children",{label:"Parent Item 2",children:[(0,t.jsxs)("wwu-sub-menu",{label:"Sub Menu 1",children:[(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 1 Item 1"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 1 Item 2"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 1 Item 3"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 1 Item 4"})]}),(0,t.jsxs)("wwu-sub-menu",{label:"Sub Menu 2",children:[(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 2 Item 1"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 2 Item 2"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 2 Item 3"}),(0,t.jsx)("a",{href:"#place1b",children:"Parent 2 Sub Menu 2 Item 4"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<wwu-main-nav>\n  <a href="#place1a">Menu item 1</a>\n\n  <wwu-has-children label="Parent Item 1">\n    <wwu-sub-menu>\n      <a href="#place1b">Parent 1 Item 1</a>\n      <a href="#place1b">Parent 1 Item two</a>\n      <a href="#place1b">Parent One Item 3</a>\n      <a href="#place1b">Parent 1 Item 4</a>\n    </wwu-sub-menu>\n  </wwu-has-children>\n\n  <a href="#place2">Menu item 3</a>\n\n  <wwu-has-children label="Parent Item 2">\n\n    <wwu-sub-menu label="Sub Menu 1">\n      <a href="#place1b">Parent 2 Sub Menu 1 Item 1</a>\n      <a href="#place1b">Parent 2 Sub Menu 1 Item 2</a>\n      <a href="#place1b">Parent 2 Sub Menu 1 Item 3</a>\n      <a href="#place1b">Parent 2 Sub Menu 1 Item 4</a>\n    </wwu-sub-menu>\n\n    <wwu-sub-menu label="Sub Menu 2">\n      <a href="#place1b">Parent 2 Sub Menu 2 Item 1</a>\n      <a href="#place1b">Parent 2 Sub Menu 2 Item 2</a>\n      <a href="#place1b">Parent 2 Sub Menu 2 Item 3</a>\n      <a href="#place1b">Parent 2 Sub Menu 2 Item 4</a>\n    </wwu-sub-menu>\n\n  </wwu-has-children>\n</wwu-main-nav>\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},2025:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='   \n    <nav class="main-navigation" aria-label="Main">\n      <ul class="ultimenu ultimenu--horizontal ultimenu--htb ultimenu--basic">\n      </ul>\n    </nav>\n  ';class n extends HTMLElement{constructor(){super()}connectedCallback(){let n=this.classList.contains("element-created");const a=Array.from(this.children);if(!n){this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created");const n=this.querySelector(".ultimenu");for(const e of a)if("NAV"!=e.tagName){if("A"==e.tagName){const a=document.createElement("li");a.classList.add("ultimenu__item"),e.classList.add("ultimenu__link"),e.href===document.URL&&(a.classList.add("is-active-trail"),e.setAttribute("aria-current","page")),a.append(e),n.append(a)}if("WWU-HAS-CHILDREN"==e.tagName){const a=e.getAttribute("label"),t=Array.from(e.children),i=document.createElement("li");i.classList.add("ultimenu__item","has-ultimenu"),i.innerHTML=`\n                <span class="component-icon expand-icon mobile" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span>\n                <span class="component-icon expand-icon desktop" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>\n                <a href="#" class="ultimenu__link">${a}</a>\n\n                <section class="ultimenu__flyout">\n                  <div class="ultimenu__region">\n                  </div>\n                </section>\n              `;const r=i.querySelector(".ultimenu__region");for(const e of t){const n=Array.from(e.children),a=e.getAttribute("label"),t=document.createElement("div");t.classList.add("ultimenusub");const s=document.createElement("ul");if(s.classList.add("menu"),a){const e=document.createElement("h2");e.classList.add("title"),e.innerText=a,s.append(e)}for(const e of n){const n=document.createElement("sub_li");n.classList.add("menu-item"),n.append(e),e.href===document.URL&&(i.classList.add("is-active-trail"),e.setAttribute("aria-current","page")),s.append(n)}t.append(s),r.append(t)}n.append(i),e.remove()}}}}}window.customElements.define("wwu-main-nav",n)}},1151:(e,n,a)=>{"use strict";a.d(n,{Z:()=>l,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);