"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[4762],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=i,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return o?r.createElement(k,a(a({ref:t},p),{},{components:o})):r.createElement(k,a({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<n;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3538:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=o(7462),i=(o(7294),o(3905));const n={},a="Forms",l={unversionedId:"atoms/forms/forms",id:"atoms/forms/forms",title:"Forms",description:"Checkboxes",source:"@site/patterns/01-atoms/forms/forms.md",sourceDirName:"01-atoms/forms",slug:"/atoms/forms/",permalink:"/ashlar/patterns/atoms/forms/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fonts",permalink:"/ashlar/patterns/atoms/fonts/"},next:{title:"Headings",permalink:"/ashlar/patterns/atoms/headings/"}},c={},s=[{value:"Checkboxes",id:"checkboxes",level:2},{value:"Radio",id:"radio",level:2},{value:"Select List",id:"select-list",level:2},{value:"Text Area",id:"text-area",level:2},{value:"Text Field",id:"text-field",level:2},{value:"Disabled Text Field",id:"disabled-text-field",level:2},{value:"Submit",id:"submit",level:2}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"forms"},"Forms"),(0,i.kt)("h2",{id:"checkboxes"},"Checkboxes"),(0,i.kt)("form",null,(0,i.kt)("div",{className:"checkbox"},(0,i.kt)("input",{type:"checkbox",id:"checkbox-option1",name:"checkbox",value:"First"}),(0,i.kt)("label",{htmlFor:"checkbox-option1"},"Option One")),(0,i.kt)("div",{className:"checkbox"},(0,i.kt)("input",{type:"checkbox",id:"checkbox-option2",name:"checkbox",value:"Second"}),(0,i.kt)("label",{htmlFor:"checkbox-option2"},"Option Two")),(0,i.kt)("div",{className:"checkbox"},(0,i.kt)("input",{type:"checkbox",id:"checkbox-option3",name:"checkbox",value:"Third"}),(0,i.kt)("label",{htmlFor:"checkbox-option3"},"Option Three"))),(0,i.kt)("h2",{id:"radio"},"Radio"),(0,i.kt)("form",null,(0,i.kt)("div",{className:"radio"},(0,i.kt)("input",{type:"radio",id:"radio-option1",name:"radio",value:"First"}),(0,i.kt)("label",{htmlFor:"radio-option1"},"Option One")),(0,i.kt)("div",{className:"radio"},(0,i.kt)("input",{type:"radio",id:"radio-option2",name:"radio",value:"Second"}),(0,i.kt)("label",{htmlFor:"radio-option2"},"Option Two")),(0,i.kt)("div",{className:"radio"},(0,i.kt)("input",{type:"radio",id:"radio-option3",name:"radio",value:"Third"}),(0,i.kt)("label",{htmlFor:"radio-option3"},"Option Three"))),(0,i.kt)("h2",{id:"select-list"},"Select List"),(0,i.kt)("form",null,(0,i.kt)("label",{htmlFor:"list"},"Select an Item"),(0,i.kt)("select",{id:"list"},(0,i.kt)("option",{value:"",defaultValue:"selected"},"- Select -"),(0,i.kt)("option",{value:"Option One"},"Option One"),(0,i.kt)("option",{value:"Option Two"},"Option Two"),(0,i.kt)("option",{value:"Option Three"},"Option Three"),(0,i.kt)("option",{value:"Option Four"},"Option Four"))),(0,i.kt)("h2",{id:"text-area"},"Text Area"),(0,i.kt)("form",null,(0,i.kt)("label",{htmlFor:"text"},"Textarea label"),(0,i.kt)("textarea",{id:"text",rows:"5"})),(0,i.kt)("h2",{id:"text-field"},"Text Field"),(0,i.kt)("form",null,(0,i.kt)("label",{htmlFor:"input"},"Textfield label"),(0,i.kt)("input",{id:"input"})),(0,i.kt)("h2",{id:"disabled-text-field"},"Disabled Text Field"),(0,i.kt)("form",null,(0,i.kt)("label",{htmlFor:"input-disabled"},"Textfield label"),(0,i.kt)("input",{id:"input-disabled",disabled:!0})),(0,i.kt)("h2",{id:"submit"},"Submit"),(0,i.kt)("input",{id:"edit-submit",type:"submit",value:"Submit"}))}d.isMDXComponent=!0}}]);