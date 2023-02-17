(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[157],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2114:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n    <section aria-label="Countdown">\n      <div role="timer" class="timer">\n        <p><span class="number days">0</span> Days</p>\n        <p><span class="number hours">0</span> Hours</p>\n        <p><span class="number minutes">0</span> Minutes</p>\n        <p><span class="number seconds">0</span> Seconds</p>\n      </div>\n    \n      <div class="announced-time" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>\n    </section>\n    ';class t extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0)),this.querySelector(".timer").setAttribute("aria-label","Countdown to "+this.getAttribute("to"));let t,n,r,o,a=6e4,c=36e5,i=24*c;const s=this.querySelector(".days"),l=this.querySelector(".hours"),u=this.querySelector(".minutes"),p=this.querySelector(".seconds"),d=this.querySelector(".announced-time");try{const e=new Date(this.getAttribute("date")).getTime();e&&(!function(e){w(e),t>0?s.innerText=t:s.parentElement.remove();t>0||n>0?m():l.parentElement.remove();r>=0&&f();o>=0&&y()}(e),setInterval((function(){!function(e){let a=n,c=r;w(e),n>=0&&a!=n&&m();r>=0&&c!=r&&f();o>=0&&y();t<=0&&n<=0&&r<=10&&r>=1&&0==o&&(d.innerText=1==r?String(r)+" minute left":String(r)+" minutes left");t<=0&&n<=0&&r<=0&&o<=10&&o>0&&(d.innerText=String(o))}(e)}),1e3))}catch(h){console.log("No date provided")}function m(){l.innerText=n}function f(){u.innerText=r}function y(){p.innerText=o}function w(e){let s=e-(new Date).getTime();t=Math.floor(s/i),n=Math.floor(s%i/c),r=Math.floor(s%c/a),o=Math.floor(s%a/1e3)}}}window.customElements.define("wwu-countdown",t)}},1934:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));n(2114);const a={},c="Countdown",i={unversionedId:"molecules/countdown/countdown",id:"molecules/countdown/countdown",title:"Countdown",description:"",source:"@site/patterns/02-molecules/countdown/countdown.md",sourceDirName:"02-molecules/countdown",slug:"/molecules/countdown/",permalink:"/ashlar/patterns/molecules/countdown/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Donut Chart",permalink:"/ashlar/patterns/molecules/charts/donut-chart/"},next:{title:"Event List",permalink:"/ashlar/patterns/molecules/event-list/"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"countdown"},"Countdown"),(0,o.kt)("wwu-countdown",{to:"Something Cool",date:"March 8, 2025 00:00:00"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<wwu-countdown to="Something Cool" date="March 8, 2025 00:00:00">\n</wwu-countdown>\n')))}p.isMDXComponent=!0}}]);