(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[2400],{563:(e,l,n)=>{"use strict";n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=n(5893),i=n(1151);n(3905);const r={},s="Donut Chart",c={id:"molecules/charts/donut-chart/donut-chart",title:"Donut Chart",description:"These donut charts can only display eight values or less. If using as markup, the label attribute is required for accessibility, it should describe what is in the dataset. This is included by default with the Drupal block.",source:"@site/patterns/02-molecules/charts/donut-chart/donut-chart.md",sourceDirName:"02-molecules/charts/donut-chart",slug:"/molecules/charts/donut-chart/",permalink:"/patterns/molecules/charts/donut-chart/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cards",permalink:"/patterns/molecules/card/"},next:{title:"Countdown",permalink:"/patterns/molecules/countdown/"}},d={},h=[{value:"Blue (Default)",id:"blue-default",level:2},{value:"Light Blue",id:"light-blue",level:2},{value:"Green",id:"green",level:2}];function o(e){const l={h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"donut-chart",children:"Donut Chart"}),"\n",(0,t.jsx)(l.p,{children:"These donut charts can only display eight values or less. If using as markup, the label attribute is required for accessibility, it should describe what is in the dataset. This is included by default with the Drupal block."}),"\n",(0,t.jsx)(l.h2,{id:"blue-default",children:"Blue (Default)"}),"\n",(0,t.jsx)("wwu-donut-chart",{label:"Student Population",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"10% Freshman"}),(0,t.jsx)("li",{children:"14% Sophomore"}),(0,t.jsx)("li",{children:"22% Junior"}),(0,t.jsx)("li",{children:"35% Senior"}),(0,t.jsx)("li",{children:"7% Post Bac"}),(0,t.jsx)("li",{children:"2% Grad Student"}),(0,t.jsx)("li",{children:"5% Alumni"}),(0,t.jsx)("li",{children:"5% Other"})]})}),"\n",(0,t.jsx)("wwu-donut-chart",{label:"Student Population",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"10% Freshman"}),(0,t.jsx)("li",{children:"14% Sophomore"}),(0,t.jsx)("li",{children:"22% Junior"}),(0,t.jsx)("li",{children:"35% Senior"}),(0,t.jsx)("li",{children:"7% Post Bac"}),(0,t.jsx)("li",{children:"2% Grad Student"}),(0,t.jsx)("li",{children:"5% Alumni"}),(0,t.jsx)("li",{children:"5% Other"})]})}),"\n",(0,t.jsx)(l.h2,{id:"light-blue",children:"Light Blue"}),"\n",(0,t.jsx)("wwu-donut-chart",{class:"light-blue",label:"Letters",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"5% A"}),(0,t.jsx)("li",{children:"2% B"}),(0,t.jsx)("li",{children:"30% C"}),(0,t.jsx)("li",{children:"8% D"}),(0,t.jsx)("li",{children:"7% E"}),(0,t.jsx)("li",{children:"2% F"}),(0,t.jsx)("li",{children:"12% G"}),(0,t.jsx)("li",{children:"34% H"})]})}),"\n",(0,t.jsx)("wwu-donut-chart",{class:"light-blue",label:"Letters",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"5% A"}),(0,t.jsx)("li",{children:"2% B"}),(0,t.jsx)("li",{children:"30% C"}),(0,t.jsx)("li",{children:"8% D"}),(0,t.jsx)("li",{children:"7% E"}),(0,t.jsx)("li",{children:"2% F"}),(0,t.jsx)("li",{children:"12% G"}),(0,t.jsx)("li",{children:"34% H"})]})}),"\n",(0,t.jsx)(l.h2,{id:"green",children:"Green"}),"\n",(0,t.jsx)("wwu-donut-chart",{class:"green",label:"Student Population",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"9.1% Freshman"}),(0,t.jsx)("li",{children:"14.8% Sophomore"}),(0,t.jsx)("li",{children:"21.9% Junior"}),(0,t.jsx)("li",{children:"35.2% Senior"}),(0,t.jsx)("li",{children:"6.25% Post Bac"}),(0,t.jsx)("li",{children:"2.75% Grad Student"}),(0,t.jsx)("li",{children:"4.5% Alumni"}),(0,t.jsx)("li",{children:"5.5% Other"})]})}),"\n",(0,t.jsx)("wwu-donut-chart",{class:"green",label:"Student Population",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"9.1% Freshman"}),(0,t.jsx)("li",{children:"14.8% Sophomore"}),(0,t.jsx)("li",{children:"21.9% Junior"}),(0,t.jsx)("li",{children:"35.2% Senior"}),(0,t.jsx)("li",{children:"6.25% Post Bac"}),(0,t.jsx)("li",{children:"2.75% Grad Student"}),(0,t.jsx)("li",{children:"4.5% Alumni"}),(0,t.jsx)("li",{children:"5.5% Other"})]})})]})}function a(e={}){const{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},3905:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    \x3c!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/donut-chart.css" /--\x3e\n    <svg viewBox="0 0 31.83 31.83" role="img"> \n    </svg>\n  ';class l extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0));const l=this.querySelectorAll("li"),n=this.querySelector("svg");let t=0;n.setAttribute("aria-label","Donut chart of "+this.getAttribute("label"));for(let e=0;e<l.length;e++){const i=l[e].innerText.substr(0,l[e].innerText.indexOf("%")),r=`\n        <circle r="15.915" cx="15.915" cy="15.915" \n        style="stroke-dashoffset: ${t}; \n        stroke-dasharray: ${i} 100;"/>`;n.innerHTML+=r,t-=parseFloat(i)}}}window.customElements.define("wwu-donut-chart",l)}},1151:(e,l,n)=>{"use strict";n.d(l,{Z:()=>c,a:()=>s});var t=n(7294);const i={},r=t.createContext(i);function s(e){const l=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);