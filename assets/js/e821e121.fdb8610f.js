"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const l={sidebar_position:1},o="Card",a={unversionedId:"molecules/card/card",id:"molecules/card/card",title:"Card",description:"{% if blockcontent.fieldlink.0.url is not empty %}",source:"@site/patterns/02-molecules/card/card.md",sourceDirName:"02-molecules/card",slug:"/molecules/card/",permalink:"/ashlar/patterns/molecules/card/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Logos",permalink:"/ashlar/patterns/atoms/logo/"},next:{title:"Pre-Header",permalink:"/ashlar/patterns/organisms/headers/pre-header/pre-header.html"}},c={},d=[],s={toc:d};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"card"},"Card"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<div {{ attributes }}>\n  {% if block_content.field_link.0.url is not empty %}\n  <div class="title">\n    {{ title_prefix }}\n      {% if label %}\n        {% if block_content.field_heading_level.0.value is not empty %}\n          <{{ block_content.field_heading_level.0.value }} {{ title_attributes }}>\n            <a href="{{ block_content.field_link.0.url }}">{{ label }}</a>\n          </{{ block_content.field_heading_level.0.value }}>\n        {% else %}\n          <p {{ title_attributes }}>\n            <a href="{{ block_content.field_link.0.url }}">{{ label }}</a>\n          </p>\n        {% endif %}\n      {% endif %}\n    {{ title_suffix }}\n  </div>\n  {% else %}\n  <div class="title">\n    {% include "@atoms/text/label/label-customized.twig" %}\n  </div>\n  {% endif %}\n\n  {% if content.field_sorting_term %}\n    <div class="sorting-term">\n      {{ content.field_sorting_term }}\n    </div>\n  {% endif %}\n\n  {% if content.field_image %}\n  <div class="image">\n    {{ content.field_image }}\n  </div>\n  {% endif %}\n\n  {% if content.field_highlighted_terms %}\n    {{ content.field_highlighted_terms }}\n  {% endif %}\n\n  {% if content.field_date %}\n    <div class="date">\n      {{ content.field_date }}\n    </div>\n  {% endif %}\n\n  {% if content.field_location %}\n    <div class="location">\n      {{ content.field_location }}\n    </div>\n  {% endif %}\n\n  <div class="body">\n    {% if content %}\n      {% block content %}\n        {{ content.body }}\n      {% endblock %}\n    {% endif %}\n  </div>\n</div>\n')))}f.isMDXComponent=!0}}]);