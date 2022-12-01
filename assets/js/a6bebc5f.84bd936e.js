(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[2400],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>s,kt:()=>p});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=c(l),p=r,f=h["".concat(o,".").concat(p)]||h[p]||d[p]||i;return l?n.createElement(f,a(a({ref:t},s),{},{components:l})):n.createElement(f,a({ref:t},s))}));function p(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,a=new Array(i);a[0]=h;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=l[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},8355:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    <svg viewBox="0 0 31.83 31.83" role="img"> \n    </svg>\n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0));const t=this.querySelectorAll("li"),l=this.querySelector("svg");let n=0;l.setAttribute("aria-label","Donut chart of "+this.getAttribute("label"));for(let e=0;e<t.length;e++){const r=t[e].innerText.substr(0,t[e].innerText.indexOf("%")),i=`\n        <circle r="15.915" cx="15.915" cy="15.915" \n        style="stroke-dashoffset: ${n}; \n        stroke-dasharray: ${r} 100;"/>`;l.innerHTML+=i,n-=parseFloat(r)}}}window.customElements.define("wwu-donut-chart",t)}},5738:(e,t,l)=>{"use strict";l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=l(7462),r=(l(7294),l(3905));l(8355);const i={},a="Donut Chart",u={unversionedId:"molecules/charts/donut-chart/donut-chart",id:"molecules/charts/donut-chart/donut-chart",title:"Donut Chart",description:"These donut charts can only display eight values or less. If using as markup, the label attribute is required for accessibility, it should describe what is in the dataset. This is included by default with the Drupal block.",source:"@site/patterns/02-molecules/charts/donut-chart/donut-chart.md",sourceDirName:"02-molecules/charts/donut-chart",slug:"/molecules/charts/donut-chart/",permalink:"/ashlar/patterns/molecules/charts/donut-chart/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cards",permalink:"/ashlar/patterns/molecules/card/"},next:{title:"Flowchart",permalink:"/ashlar/patterns/molecules/charts/flowchart/"}},o={},c=[{value:"Blue (Default)",id:"blue-default",level:2},{value:"Light Blue",id:"light-blue",level:2},{value:"Green",id:"green",level:2}],s={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"donut-chart"},"Donut Chart"),(0,r.kt)("p",null,"These donut charts can only display eight values or less. If using as markup, the label attribute is required for accessibility, it should describe what is in the dataset. This is included by default with the Drupal block."),(0,r.kt)("h2",{id:"blue-default"},"Blue (Default)"),(0,r.kt)("wwu-donut-chart",{label:"Student Population"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"10% Freshman"),(0,r.kt)("li",null,"14% Sophomore"),(0,r.kt)("li",null,"22% Junior"),(0,r.kt)("li",null,"35% Senior"),(0,r.kt)("li",null,"7% Post Bac"),(0,r.kt)("li",null,"2% Grad Student"),(0,r.kt)("li",null,"5% Alumni"),(0,r.kt)("li",null,"5% Other"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<wwu-donut-chart label="Student Population">\n    <ul>\n        <li>10% Freshman</li>\n        <li>14% Sophomore</li>\n        <li>22% Junior</li>\n        <li>35% Senior</li>\n        <li>7% Post Bac</li>\n        <li>2% Grad Student</li>\n        <li>5% Alumni</li>\n        <li>5% Other</li>\n    </ul>\n</wwu-donut-chart>\n')),(0,r.kt)("h2",{id:"light-blue"},"Light Blue"),(0,r.kt)("wwu-donut-chart",{class:"light-blue",label:"Letters"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"5% A"),(0,r.kt)("li",null,"2% B"),(0,r.kt)("li",null,"30% C"),(0,r.kt)("li",null,"8% D"),(0,r.kt)("li",null,"7% E"),(0,r.kt)("li",null,"2% F"),(0,r.kt)("li",null,"12% G"),(0,r.kt)("li",null,"34% H"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<wwu-donut-chart class="light-blue" label="Letters">\n    <ul>\n        <li>5% A</li>\n        <li>2% B</li>\n        <li>30% C</li>\n        <li>8% D</li>\n        <li>7% E</li>\n        <li>2% F</li>\n        <li>12% G</li>\n        <li>34% H</li>\n    </ul>\n</wwu-donut-chart>\n')),(0,r.kt)("h2",{id:"green"},"Green"),(0,r.kt)("wwu-donut-chart",{class:"green",label:"Student Population"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"9.1% Freshman"),(0,r.kt)("li",null,"14.8% Sophomore"),(0,r.kt)("li",null,"21.9% Junior"),(0,r.kt)("li",null,"35.2% Senior"),(0,r.kt)("li",null,"6.25% Post Bac"),(0,r.kt)("li",null,"2.75% Grad Student"),(0,r.kt)("li",null,"4.5% Alumni"),(0,r.kt)("li",null,"5.5% Other"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<wwu-donut-chart class="green" label="Student Population">\n    <ul>\n        <li>9.1% Freshman</li>\n        <li>14.8% Sophomore</li>\n        <li>21.9% Junior</li>\n        <li>35.2% Senior</li>\n        <li>6.25% Post Bac</li>\n        <li>2.75% Grad Student</li>\n        <li>4.5% Alumni</li>\n        <li>5.5% Other</li>\n    </ul>\n</wwu-donut-chart>\n')))}d.isMDXComponent=!0}}]);