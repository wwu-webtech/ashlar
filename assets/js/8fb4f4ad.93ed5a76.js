(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[8223],{7076:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);n(8884);const a={},r="Dialog",l={id:"molecules/dialog/dialog",title:"Dialog",description:"Component Library",source:"@site/patterns/02-molecules/dialog/dialog.md",sourceDirName:"02-molecules/dialog",slug:"/molecules/dialog/",permalink:"/patterns/molecules/dialog/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Countdown",permalink:"/patterns/molecules/countdown/"},next:{title:"Event List",permalink:"/patterns/molecules/event-list/"}},s={},c=[{value:"Component Library",id:"component-library",level:2},{value:"Component Markup",id:"component-markup",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"dialog",children:"Dialog"}),"\n",(0,i.jsx)(t.h2,{id:"component-library",children:"Component Library"}),"\n",(0,i.jsx)(t.p,{children:"Include the following script to use the dialog component on your non-Drupal website or application."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/dialog.js"><\/script>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"component-markup",children:"Component Markup"}),"\n",(0,i.jsx)("wwu-dialog",{label:"Anthem Video on Vimeo",button:"Play a Vimeo Video",children:(0,i.jsx)("div",{className:"embed-container",children:(0,i.jsx)("iframe",{src:"https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed",allow:"autoplay; fullscreen; picture-in-picture",title:"Anthem, Vimeo"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<wwu-dialog label="Anthem Video on Vimeo" button="Play a Vimeo Video">\n    <div class="embed-container">\n        <iframe src="https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" title="Anthem, Vimeo"></iframe>\n    </div>\n</wwu-dialog>\n'})}),"\n",(0,i.jsx)("wwu-dialog",{label:"Anthem Video on YouTube",button:"Play a YouTube Video",children:(0,i.jsx)("div",{className:"embed-container",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nR7cUFRwTIM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Shannon Point Marine Center, YouTube"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<wwu-dialog label="Anthem Video on YouTube" button="Play a YouTube Video">\n    <div class="embed-container">\n        <iframe width="560" height="315" src="https://www.youtube.com/embed/nR7cUFRwTIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Shannon Point Marine Center, YouTube"></iframe>\n    </div>\n</wwu-dialog>\n'})}),"\n",(0,i.jsxs)("wwu-dialog",{label:"Non-video stuff",button:"Dialog with Non-Video Content",children:[(0,i.jsx)("h2",{children:"Here is a Heading"}),(0,i.jsx)("p",{children:"This is just some regular plain old content, no video, just stuff to read or whatever"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<wwu-dialog label="Non-video stuff" button="Dialog with Non-Video Content">\n    <h2>Here is a Heading</h2>\n    <p>This is just some regular plain old content, no video, just stuff to read or whatever</p>\n</wwu-dialog>\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8884:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const t=document.createElement("template");t.innerHTML='\n      <button class="open-button"></button>\n      <dialog role="dialog" aria-modal="true">\n        <div class="dialog-wrapper">\n          <div class="dialog-content"></div>\n        </div>\n      </dialog>\n    ';class n extends HTMLElement{constructor(){super(),this.observer=new MutationObserver((()=>this.initializeDialog()))}connectedCallback(){this.observer.observe(this,{childList:!0,subtree:!0}),this.classList.contains("element-created")||this.initializeDialog()}initializeDialog(){if(this.classList.contains("element-created"))return;const n=this.innerHTML.trim();if(n){this.innerHTML="",this.appendChild(t.content.cloneNode(!0));const i=this.querySelector(".open-button"),o=document.createElement("button"),a=document.createElement("span"),r=this.querySelector("dialog"),l=this.querySelector(".dialog-content");i.innerText=this.getAttribute("button"),a.classList.add("material-icons"),a.setAttribute("aria-hidden",!0),a.innerText=this.getAttribute("icon"),i.appendChild(a),o.innerHTML='<span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span> Close',o.classList.add("close-button"),r.setAttribute("aria-label",this.getAttribute("label")),l.innerHTML=n,l.prepend(o),i.addEventListener("click",(()=>function(e){e.showModal()}(r))),o.addEventListener("click",(()=>e(r))),document.addEventListener("click",(t=>{"dialog-wrapper"===t.target.className&&e(r)})),this.classList.add("element-created"),this.observer.disconnect()}}}function e(e){e.close();const t=e.querySelector("iframe");if(t){const e=t.parentNode;t.remove(),e.appendChild(t)}}window.customElements.define("wwu-dialog",n)}},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);