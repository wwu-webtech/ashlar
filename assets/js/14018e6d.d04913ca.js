(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[157],{1112:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(5893),s=t(1151);t(2114);const r={},c="Countdown",i={id:"molecules/countdown/countdown",title:"Countdown",description:"Component Library",source:"@site/patterns/02-molecules/countdown/countdown.md",sourceDirName:"02-molecules/countdown",slug:"/molecules/countdown/",permalink:"/patterns/molecules/countdown/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Donut Chart",permalink:"/patterns/molecules/charts/donut-chart/"},next:{title:"Dialog",permalink:"/patterns/molecules/dialog/"}},a={},l=[{value:"Component Library",id:"component-library",level:2},{value:"Component Markup",id:"component-markup",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"countdown",children:"Countdown"}),"\n",(0,o.jsx)(n.h2,{id:"component-library",children:"Component Library"}),"\n",(0,o.jsx)(n.p,{children:"Include the following script to use the countdown component on your non-Drupal website or application."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/countdown.js"><\/script>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"component-markup",children:"Component Markup"}),"\n",(0,o.jsx)("wwu-countdown",{to:"Something Cool",date:"March 8, 2025 00:00:00"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<wwu-countdown to="Something Cool" date="March 8, 2025 00:00:00">\n</wwu-countdown>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2114:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    \x3c!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/countdown.css" /--\x3e\n\n    <section aria-label="Countdown">\n      <div role="timer" class="timer">\n        <p><span class="number days">0</span> Days</p>\n        <p><span class="number hours">0</span> Hours</p>\n        <p><span class="number minutes">0</span> Minutes</p>\n        <p><span class="number seconds">0</span> Seconds</p>\n      </div>\n    \n      <div class="announced-time" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>\n    </section>\n    ';class n extends HTMLElement{constructor(){super()}connectedCallback(){if(!this.classList.contains("element-created")){this.appendChild(e.content.cloneNode(!0)),this.classList.add("element-created"),this.querySelector(".timer").setAttribute("aria-label","Countdown to "+this.getAttribute("to"));let t,o,s,r,c=1e3,i=60*c,a=60*i,l=24*a;const u=this.querySelector(".days"),d=this.querySelector(".hours"),p=this.querySelector(".minutes"),m=this.querySelector(".seconds"),h=this.querySelector(".announced-time");try{const C=new Date(this.getAttribute("date")).getTime();C&&(b(C),setInterval((function(){v(C)}),1e3))}catch(n){console.log("No date provided")}function w(){d.innerText=o}function f(){p.innerText=s}function x(){m.innerText=r}function b(e){y(e),t>0?u.innerText=t:u.parentElement.remove(),t>0||o>0?w():d.parentElement.remove(),s>=0&&f(),r>=0&&x()}function y(e){let n=e-(new Date).getTime();t=Math.floor(n/l),o=Math.floor(n%l/a),s=Math.floor(n%a/i),r=Math.floor(n%i/c)}function v(e){let n=o,c=s;y(e),o>=0&&n!=o&&w(),s>=0&&c!=s&&f(),r>=0&&x(),t<=0&&o<=0&&s<=10&&s>=1&&0==r&&(h.innerText=1==s?String(s)+" minute left":String(s)+" minutes left"),t<=0&&o<=0&&s<=0&&r<=10&&r>0&&(h.innerText=String(r))}}}}window.customElements.get("wwu-countdown")||window.customElements.define("wwu-countdown",n)}},1151:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i,a:()=>c});var o=t(7294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);