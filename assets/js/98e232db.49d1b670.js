(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[496],{1996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=n(5893),i=n(1151),a=(n(1067),n(7199)),l=n(756);const r={},o="Slide Banner",c={id:"molecules/slide-banner/slide-banner",title:"Slide Banner",description:"Some Content",source:"@site/patterns/02-molecules/slide-banner/slide-banner.md",sourceDirName:"02-molecules/slide-banner",slug:"/molecules/slide-banner/",permalink:"/patterns/molecules/slide-banner/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/patterns/molecules/search/"},next:{title:"Statistics",permalink:"/patterns/molecules/statistic/"}},d={},u=[];function h(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"slide-banner",children:"Slide Banner"}),"\n",(0,s.jsxs)("wwu-slide-banner",{class:"black-overlay min-height--50vh",children:[(0,s.jsx)("wwu-slide",{src:a.Z,alt:"Autumn leaves"}),(0,s.jsx)("wwu-slide",{src:l.Z,alt:"Western drone shot"}),(0,s.jsx)("h2",{children:"Some Content"}),(0,s.jsx)("p",{children:"That sits on top of the imagery"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1067:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const t=document.createElement("template");t.innerHTML='    \n    <button class="playback">\n      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>\n      <span>pause</span>\n    </button>\n    ';class n extends HTMLElement{constructor(){super()}connectedCallback(){if(!this.classList.contains("element-created")){this.appendChild(t.content.cloneNode(!0)),this.classList.add("element-created");const n=this.querySelectorAll("wwu-slide"),s=6;for(let e=0;e<n.length;e++)n[e].innerHTML=`<img src="${n[e].getAttribute("src")}" alt="${n[e].getAttribute("alt")}">`,n[e].setAttribute("style",`animation-duration: ${n.length*s}s; animation-delay: ${s*e}s;`);this.querySelector("button").addEventListener("click",e)}}}function e(){const e=document.querySelectorAll("wwu-slide");this.classList.contains("pause")?function(e,t){for(let n=0;n<t.length;n++)t[n].style["animation-play-state"]="running";e.classList.remove("pause"),e.innerHTML='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>pause</button>'}(this,e):function(e,t){for(let n=0;n<t.length;n++)t[n].style["animation-play-state"]="paused";e.classList.add("pause"),e.innerHTML='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>play</button>'}(this,e)}window.customElements.get("wwu-slide-banner")||window.customElements.define("wwu-slide-banner",n)}},7199:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/images/placeholder-e2df3995300bd522d525f9a24b235bab.jpg"},756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/images/sampleheader-7c3e280fd2682ce052069386b411230a.jpg"},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r,a:()=>l});var s=n(7294);const i={},a=s.createContext(i);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);