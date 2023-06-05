"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=o(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(d,l(l({ref:t},c),{},{components:n})):i.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var i=n(7462),a=(n(7294),n(3905));const r={},l="Timeline",m={unversionedId:"molecules/timeline/timeline",id:"molecules/timeline/timeline",title:"Timeline",description:"January 2019",source:"@site/patterns/02-molecules/timeline/timeline.md",sourceDirName:"02-molecules/timeline",slug:"/molecules/timeline/",permalink:"/patterns/molecules/timeline/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System Messages",permalink:"/patterns/molecules/system-messages/"},next:{title:"Email Signature",permalink:"/patterns/organisms/email-signature/"}},s={},o=[],c={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timeline"},"Timeline"),(0,a.kt)("div",{className:"timeline"},(0,a.kt)("div",{className:"timeline-block"},(0,a.kt)("h2",{className:"timeline-heading"},"January 2019"),(0,a.kt)("p",{className:"timeline-item"},"Go to the zoo"),(0,a.kt)("p",{className:"timeline-item"},"Eat some ",(0,a.kt)("a",{href:"#"},"ice cream")),(0,a.kt)("aside",{className:"timeline-item--highlighted"},"See a zebra!"),(0,a.kt)("p",{className:"timeline-item"},"Visit the gift shop"),(0,a.kt)("p",{className:"timeline-item"},"Go home")),(0,a.kt)("div",{className:"timeline-block"},(0,a.kt)("h2",{className:"timeline-heading"},"January 2019"),(0,a.kt)("p",{className:"timeline-item"},"Go to the zoo"),(0,a.kt)("p",{className:"timeline-item"},"Eat some ",(0,a.kt)("a",{href:"#"},"ice cream")),(0,a.kt)("aside",{className:"timeline-item--highlighted"},"See a zebra!"),(0,a.kt)("p",{className:"timeline-item"},"Visit the gift shop"),(0,a.kt)("p",{className:"timeline-item"},"Go home"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div className="timeline">\n    <div className="timeline-block">\n        <h2 className="timeline-heading">January 2019</h2>\n        \n        <p className="timeline-item">\n            Go to the zoo\n        </p>\n        <p className="timeline-item">  \n            Eat some <a href="#">ice cream</a>\n        </p>\n        \n        <aside className="timeline-item--highlighted">   \n            See a zebra!\n        </aside>\n        \n        <p className="timeline-item">  \n            Visit the gift shop\n        </p>\n        \n        <p className="timeline-item">  \n            Go home\n        </p>\n    </div>\n    <div className="timeline-block">\n        <h2 className="timeline-heading">January 2019</h2>\n        \n        <p className="timeline-item">\n            Go to the zoo\n        </p>\n        <p className="timeline-item">  \n            Eat some <a href="#">ice cream</a>\n        </p>\n        \n        <aside className="timeline-item--highlighted">   \n            See a zebra!\n        </aside>\n        \n        <p className="timeline-item">  \n            Visit the gift shop\n        </p>\n        \n        <p className="timeline-item">  \n            Go home\n        </p>\n    </div>\n</div>\n')))}p.isMDXComponent=!0}}]);