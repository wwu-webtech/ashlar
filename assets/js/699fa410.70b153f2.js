(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[4803],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,d=m["".concat(s,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2302:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n  <div class="switcher" role="tablist">\n  </div>\n\n  <div class="switcher-container">\n  </div>\n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){function t(e){this&&(e=this),function(e){e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),e.classList.remove("active"),e.content.classList.remove("active")}(a),e.setAttribute("aria-selected","true"),e.removeAttribute("tabindex"),e.classList.add("active"),"column"==i?(e.prepend(c),e.append(u)):(e.prepend(l),e.append(s)),e.content.classList.add("active"),a=e}function n(e){const n=e.code;"ArrowLeft"==n&&"column"!=i&&(this.previousElementSibling?(t(this.previousElementSibling),this.previousElementSibling.focus()):(t(this.parentElement.lastChild),this.parentElement.lastChild.focus())),"ArrowUp"==n&&"column"==i&&(this.previousElementSibling?(t(this.previousElementSibling),this.previousElementSibling.focus()):(t(this.parentElement.lastChild),this.parentElement.lastChild.focus())),"ArrowRight"==n&&"column"!=i&&(this.nextElementSibling?(t(this.nextElementSibling),this.nextElementSibling.focus()):(t(this.parentElement.querySelector("button")),this.parentElement.querySelector("button").focus())),"ArrowDown"==n&&"column"==i&&(this.nextElementSibling?(t(this.nextElementSibling),this.nextElementSibling.focus()):(t(this.parentElement.querySelector("button")),this.parentElement.querySelector("button").focus()))}this.appendChild(e.content.cloneNode(!0));const r=this.getAttribute("label").toLowerCase().replaceAll(" ","-"),o=this.querySelectorAll("wwu-switcher-item"),i=this.getAttribute("layout");let a;const l=document.createElement("span"),s=document.createElement("span"),c=document.createElement("span"),u=document.createElement("span");l.setAttribute("aria-hidden","true"),l.setAttribute("class","material-icons show"),l.innerText="keyboard_arrow_left",s.setAttribute("aria-hidden","true"),s.setAttribute("class","material-icons show"),s.innerText="keyboard_arrow_right",c.setAttribute("aria-hidden","true"),c.setAttribute("class","material-icons show"),c.innerText="keyboard_arrow_up",u.setAttribute("aria-hidden","true"),u.setAttribute("class","material-icons show"),u.innerText="keyboard_arrow_down";for(let e=0;e<o.length;e++){const l=document.createElement("button"),s=document.createElement("div");l.content=s,this.querySelector(".switcher").setAttribute("aria-label",this.getAttribute("label")),"column"==i?this.querySelector(".switcher").setAttribute("aria-orientation","vertical"):this.querySelector(".switcher").setAttribute("aria-orientation","horizontal"),this.querySelector(".switcher").appendChild(l),l.innerHTML=o[e].getAttribute("label"),l.setAttribute("role","tab"),l.setAttribute("aria-selected","false"),l.setAttribute("id",r+"-switch-tab-"+[e]),l.setAttribute("aria-controls",r+"-switch-content-"+[e]),this.querySelector(".switcher-container").appendChild(s),s.innerHTML=o[e].innerHTML,s.setAttribute("role","tabpanel"),s.setAttribute("tabindex","0"),s.setAttribute("id",r+"-switch-content-"+[e]),s.setAttribute("aria-labelledby",r+"-switch-tab-"+[e]),0==e&&(a=l,t(l)),l.addEventListener("click",t),l.addEventListener("keyup",n),o[e].remove()}}}window.customElements.define("wwu-switcher",t)}},3412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));n(2302);const i={},a="Switcher",l={unversionedId:"molecules/switcher/switcher",id:"molecules/switcher/switcher",title:"Switcher",description:"We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.",source:"@site/patterns/02-molecules/switcher/switcher.md",sourceDirName:"02-molecules/switcher",slug:"/molecules/switcher/",permalink:"/patterns/molecules/switcher/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Alert",permalink:"/patterns/molecules/status-alert/"},next:{title:"System Messages",permalink:"/patterns/molecules/system-messages/"}},s={},c=[{value:"Column Layout",id:"column-layout",level:2}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"switcher"},"Switcher"),(0,o.kt)("wwu-switcher",{label:"Accessible Label"},(0,o.kt)("wwu-switcher-item",{label:"Content 1"},(0,o.kt)("p",null,"We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.")),(0,o.kt)("wwu-switcher-item",{label:"Content 2"},(0,o.kt)("p",null,"If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.")),(0,o.kt)("wwu-switcher-item",{label:"Content 3"},(0,o.kt)("p",null,"Astronomy compels the soul to look upward, and leads us from this world to another."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<wwu-switcher label="Accessible Label">\n    <wwu-switcher-item label="Content 1">\n        <p>We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>\n    </wwu-switcher-item>\n    <wwu-switcher-item label="Content 2">\n        <p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.</p>\n    </wwu-switcher-item>\n    <wwu-switcher-item label="Content 3">\n        <p>Astronomy compels the soul to look upward, and leads us from this world to another.</p>\n    </wwu-switcher-item>\n</wwu-switcher>\n')),(0,o.kt)("h2",{id:"column-layout"},"Column Layout"),(0,o.kt)("wwu-switcher",{label:"Accessible Label",layout:"column"},(0,o.kt)("wwu-switcher-item",{label:"Content 1"},(0,o.kt)("p",null,"We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.")),(0,o.kt)("wwu-switcher-item",{label:"Content 2"},(0,o.kt)("p",null,"If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.")),(0,o.kt)("wwu-switcher-item",{label:"Content 3"},(0,o.kt)("p",null,"Astronomy compels the soul to look upward, and leads us from this world to another."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="column-layout">\n<wwu-switcher label="Accessible Label">\n    <wwu-switcher-item label="Content 1">\n        <p>We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>\n    </wwu-switcher-item>\n    <wwu-switcher-item label="Content 2">\n        <p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.</p>\n    </wwu-switcher-item>\n    <wwu-switcher-item label="Content 3">\n        <p>Astronomy compels the soul to look upward, and leads us from this world to another.</p>\n    </wwu-switcher-item>\n</wwu-switcher>\n</div>\n')))}h.isMDXComponent=!0}}]);