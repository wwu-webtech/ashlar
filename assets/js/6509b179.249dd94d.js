"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[4666],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=c(a),d=r,f=h["".concat(o,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(f,l(l({ref:e},u),{},{components:a})):n.createElement(f,l({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4727:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},l="Call to Action Links",s={unversionedId:"atoms/links/call-to-action",id:"atoms/links/call-to-action",title:"Call to Action Links",description:"To style a call to action link, add the class `cta`",source:"@site/patterns/01-atoms/links/call-to-action.md",sourceDirName:"01-atoms/links",slug:"/atoms/links/call-to-action",permalink:"/patterns/atoms/links/call-to-action",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/patterns/atoms/links/"},next:{title:"Lists",permalink:"/patterns/atoms/lists/"}},o={},c=[{value:"CTAs with Icons",id:"ctas-with-icons",level:2}],u={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"call-to-action-links"},"Call to Action Links"),(0,r.kt)("p",null,"To style a call to action link, add the class ",(0,r.kt)("inlineCode",{parentName:"p"},"cta")),(0,r.kt)("a",{href:"#",className:"cta"},"Apply for this program"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta blue"},"With .blue class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta dark-blue"},"With .dark-blue class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta light-green"},"With .light-green class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta white"},"With .white class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.pdf",className:"cta"},"Contains a pdf"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.docx",className:"cta"},"Contains a Word doc"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.xlsx",className:"cta"},"Contains a Excel doc"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.pptx",className:"cta"},"Contains a PowerPoint doc"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="#" class="cta">Apply for this program</a>\n<a href="#" class="cta blue">With .blue class</a>\n<a href="#" class="cta dark-blue">With .dark-blue class</a>\n<a href="#" class="cta light-green">With .light-green class</a>\n<a href="#" class="cta white">With .white class</a>\n')),(0,r.kt)("h2",{id:"ctas-with-icons"},"CTAs with Icons"),(0,r.kt)("p",null,"You can customize the icon in your CTA with material icons. This behavior is easiest when using Drupal block types\u2014just use the included field. Material Icons are not included by default, so if you need to hard code links this way, you will need to load the library on that page via another method such as including another block that has it included, adding it to a view, or adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," tag to the page via HTML."),(0,r.kt)("a",{href:"#",className:"cta with-icon"},"With an Icon ",(0,r.kt)("span",{className:"material-icons","aria-hidden":"true"},"accessibility_new")),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta align-center with-icon"},"Centered and with an Icon ",(0,r.kt)("span",{className:"material-icons","aria-hidden":"true"},"favorite_border")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="#" class="cta with-icon">With an Icon <span class="material-icons" aria-hidden="true">accessibility_new</span></a>\n<a href="#" class="cta align-center with-icon">Centered and with an Icon <span class="material-icons" aria-hidden="true">favorite_border</span></a>\n')))}p.isMDXComponent=!0}}]);