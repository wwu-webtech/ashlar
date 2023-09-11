"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[4666],{3905:(t,a,e)=>{e.d(a,{Zo:()=>h,kt:()=>d});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),c=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},h=function(t){var a=c(t.components);return n.createElement(s.Provider,{value:a},t.children)},p={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),u=c(e),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return e?n.createElement(m,l(l({ref:a},h),{},{components:e})):n.createElement(m,l({ref:a},h))}));function d(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=e[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},4727:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=e(7462),r=(e(7294),e(3905));const i={},l="Call to Action Links",o={unversionedId:"atoms/links/call-to-action",id:"atoms/links/call-to-action",title:"Call to Action Links",description:"To style a call to action link, add the class `cta`",source:"@site/patterns/01-atoms/links/call-to-action.md",sourceDirName:"01-atoms/links",slug:"/atoms/links/call-to-action",permalink:"/patterns/atoms/links/call-to-action",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/patterns/atoms/links/"},next:{title:"Lists",permalink:"/patterns/atoms/lists/"}},s={},c=[{value:"CTAs with Icons",id:"ctas-with-icons",level:2}],h={toc:c};function p(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"call-to-action-links"},"Call to Action Links"),(0,r.kt)("p",null,"To style a call to action link, add the class ",(0,r.kt)("inlineCode",{parentName:"p"},"cta")),(0,r.kt)("a",{href:"#",className:"cta"},"Apply for this program"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta blue"},"With .blue class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta no-animation dark-blue"},"With .no-animation and .dark-blue class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta small light-green"},"With .small and .light-green class"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta small white no-animation"},"With .small .no-animation .white classes"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.pdf",className:"cta"},"Contains a pdf"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.docx",className:"cta"},"Contains a Word doc"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.xlsx",className:"cta"},"Contains a Excel doc"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"something.pptx",className:"cta"},"Contains a PowerPoint doc"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="#" class="cta">Apply for this program</a>\n<a href="#" class="cta blue">With .blue class</a>\n<a href="#" class="cta no-animation dark-blue">With .no-animation and .dark-blue class</a>\n<a href="#" class="cta small light-green">With .small and .light-green class</a>\n<a href="#" class="cta small white no-animation">With .small .no-animation .white classes</a>\n\n<a href="something.pdf" class="cta">Contains a pdf</a>\n<a href="something.docx" class="cta">Contains a Word doc</a>\n<a href="something.xlsx" class="cta">Contains a Excel doc</a>\n<a href="something.pptx" class="cta">Contains a PowerPoint doc</a>\n')),(0,r.kt)("h2",{id:"ctas-with-icons"},"CTAs with Icons"),(0,r.kt)("p",null,"You can customize the icon in your CTA with material icons. This behavior is easiest when using Drupal block types\u2014just use the included field. Material Icons are not included by default, so if you need to hard code links this way, you will need to load the library on that page via another method such as including another block that has it included, adding it to a view, or adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," tag to the page via HTML."),(0,r.kt)("a",{href:"#",className:"cta with-icon"},"With an Icon ",(0,r.kt)("span",{className:"material-icons","aria-hidden":"true"},"accessibility_new")),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#",className:"cta align-center with-icon"},"Centered and with an Icon ",(0,r.kt)("span",{className:"material-icons","aria-hidden":"true"},"favorite_border")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="#" class="cta with-icon">With an Icon <span class="material-icons" aria-hidden="true">accessibility_new</span></a>\n<a href="#" class="cta align-center with-icon">Centered and with an Icon <span class="material-icons" aria-hidden="true">favorite_border</span></a>\n')))}p.isMDXComponent=!0}}]);