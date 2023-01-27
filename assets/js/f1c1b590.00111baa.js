"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[8920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,v=m["".concat(o,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},i="Event List",l={unversionedId:"molecules/event-list/event-list",id:"molecules/event-list/event-list",title:"Event List",description:"See also event cards.",source:"@site/patterns/02-molecules/event-list/event-list.md",sourceDirName:"02-molecules/event-list",slug:"/molecules/event-list/",permalink:"/ashlar/patterns/molecules/event-list/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Countdown",permalink:"/ashlar/patterns/molecules/countdown/"},next:{title:"Headline",permalink:"/ashlar/patterns/molecules/headline/"}},o={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event-list"},"Event List"),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/patterns/molecules/card#events"},"event cards"),"."),(0,r.kt)("div",{className:"event-list"},(0,r.kt)("div",{className:"event"},(0,r.kt)("div",{className:"title"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#"},"Soccer Match"))),(0,r.kt)("div",{className:"date"},(0,r.kt)("div",null,(0,r.kt)("span",{className:"month","aria-hidden":"true"},(0,r.kt)("time",{dateTime:"00Z"},"Sep ")),(0,r.kt)("span",{className:"day","aria-hidden":"true"},(0,r.kt)("time",{dateTime:"00Z"},"02")),(0,r.kt)("span",{className:"year","aria-hidden":"true"},(0,r.kt)("time",{dateTime:"00Z"},"2023")))),(0,r.kt)("div",{className:"icon"},(0,r.kt)("span",{className:"material-icons","aria-hidden":"true"},"sports"),(0,r.kt)("span",{className:"icon-text"},(0,r.kt)("span",{className:"visually-hidden"},"Category:"),"Athletics")),(0,r.kt)("div",{className:"location"},(0,r.kt)("p",null,"Venue")),(0,r.kt)("div",{className:"body"},(0,r.kt)("p",null,(0,r.kt)("time",{dateTime:"00Z"},"Thursday, September 2, 2021")),(0,r.kt)("p",null,(0,r.kt)("strong",null,(0,r.kt)("time",{dateTime:"00Z"},"7:00 pm")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div class="event-list">\n    <div class="event">\n        <div class="title">\n            <h3>\n                <a href="#">Soccer Match\n                </a>\n            </h3>\n        </div>\n        <div class="date">\n            <div>\n                <span class="month" aria-hidden="true">\n                    <time datetime="00Z">Sep </time>\n                </span>\n                <span class="day" aria-hidden="true">\n                    <time datetime="00Z">02</time>\n                </span>\n                <span class="year" aria-hidden="true">\n                    <time datetime="00Z">2023</time>\n                </span>\n            </div>\n        </div>\n        <div class="icon">\n            \n            <span class="material-icons" aria-hidden="true">sports</span>\n            \n            <span class="icon-text">\n                <span class="visually-hidden">Category:</span>\n                Athletics\n            </span>\n        </div>\n        \n        <div class="location">\n            <p>\n                Venue\n            </p>\n        </div>\n        \n        <div class="body">\n            <p>\n                <time datetime="00Z">Thursday, September 2, 2021</time>\n            </p>\n            \n            <p>\n                <strong>\n                    <time datetime="00Z">7:00 pm</time>\n                </strong>\n            </p>\n        </div>\n    </div>\n</div>\n')))}d.isMDXComponent=!0}}]);