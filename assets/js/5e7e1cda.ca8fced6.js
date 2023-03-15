(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1598],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>h});var l=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=l.createContext({}),i=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(r),h=o,p=d["".concat(s,".").concat(h)]||d[h]||w[h]||n;return r?l.createElement(p,c(c({ref:t},u),{},{components:r})):l.createElement(p,c({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var i=2;i<n;i++)c[i]=r[i];return l.createElement.apply(null,c)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9346:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n  <div class="bg-wrapper standard-padding">\n    <h1>H1 Heading <a href="https://wwu.edu/#nowhere">and link</a></h1>\n    <h2>H2 Heading <a href="https://wwu.edu/#nowhere">and link</a></h2>\n    <h3>H3 Heading <a href="https://wwu.edu/#nowhere">and link</a></h3>\n    <h4>H4 Heading <a href="https://wwu.edu/#nowhere">and link</a></h4>\n    <h5>H5 Heading <a href="https://wwu.edu/#nowhere">and link</a></h5>\n\n    <p class="tagline">Tagline Text</p>\n\n    <p>Regular Text with <a href="https://wwu.edu/#nowhere">a regular link</a> and a <a href="https://wwu.edu/">visited link</a></p>\n\n    <blockquote>Blockquote</blockquote>\n\n    <hr/>\n\n    <blockquote class="dark-blue-bg">Blockquote</blockquote>\n\n    <form>\n      <label class="required" htmlFor="input">Form element</label>\n      <input id="input"/>\n    </form>\n\n    <ul>\n        <li><a href="https://wwu.edu/#nowhere">Regular</a></li>\n        <li><a href="https://wwu.edu/#nowhere">list with this</a></li>\n        <li>background, and a <a href="https://wwu.edu/#nowhere">bunch of links</a></li>\n    </ul>\n\n    <div class="block--beyond-basics-block">\n        <ul class="menu">\n        <li><a href="https://wwu.edu/#nowhere">List of links</a></li>\n        <li><a href="https://wwu.edu/#nowhere">with menu class</a></li>\n        <li><a href="https://wwu.edu/#nowhere" aria-current="page">this one is the current page</a></li>\n        </ul>\n    </div>\n\n    <div class="ctas">\n        <a class="cta" href="https://wwu.edu/#nowhere">Call to Action</a><br/>\n        <a class="cta" href="https://wwu.edu/">Visited CTA</a><br/>\n        <a class="cta blue" href="https://wwu.edu/#nowhere">CTA with .blue class</a><br/>\n        <a class="cta dark-blue" href="https://wwu.edu/#nowhere">CTA with .dark-blue class</a><br/>\n        <a class="cta light-green" href="https://wwu.edu/#nowhere">CTA with .light-green class</a><br/>\n        <a class="cta white" href="https://wwu.edu/#nowhere">CTA with .white class</a>\n    </div>\n\n    <div class="buttons">\n      <button>Button</button>\n      <button class="alt">With .alt class</button>\n      <button class="warning">With .warning class</button>\n      <button disabled>Disabled Button</button>\n    </div>\n\n    <wwu-social group="Western" url="https://www.facebook.com/westernwashingtonuniversity"></wwu-social>\n    <wwu-social group="Western" url="https://www.flickr.com/photos/wwu"></wwu-social>\n    <wwu-social group="Western" url="https://www.instagram.com/westernwashingtonuniversity/"></wwu-social>\n    <wwu-social group="Western" url="https://www.linkedin.com/school/western-washington-university/"></wwu-social>\n    <wwu-social group="Western" url="https://www.snapchat.com/add/"></wwu-social>\n    <wwu-social group="Western" url="https://twitter.com/WWU"></wwu-social>\n    <wwu-social group="Western" url="https://www.tiktok.com/@westernwauniversity"></wwu-social>\n    <wwu-social group="Western" url="https://vimeo.com/user30954810"></wwu-social>\n    <wwu-social group="Western" url="https://www.youtube.com/wwu"></wwu-social>\n\n    <table class="blue auto-layout align-top">\n      <caption>Custom classes applied to this table: light-blue fixed align-top</caption>\n      <tr>\n          <th id="t1-row-1-col-1" scope="col"><a href="https://wwu.edu/#nowhere">Row Group</a></th>\n          <th id="t1-row-1-col-2" scope="col">Col Header</th>\n          <th id="t1-row-1-col-3" colspan="2" scope="col"><a href="https://wwu.edu/#nowhere">Col Group</a></th>\n          <th id="t1-row-1-col-4" colspan="3" scope="col">Col Group</th>\n      </tr>\n      <tr>\n          <th id="t1-row-2-col-1" rowspan="3" scope="row">Row Group</th>\n          <th id="t1-row-2-col-2" scope="row">Row Header</th>\n          <th id="t1-row-2-col-3" scope="col">Col Header</th>\n          <th id="t1-row-2-col-4" scope="col">Col Header</th>\n          <th id="t1-row-2-col-5" scope="col">Col Header</th>\n          <th id="t1-row-2-col-6" scope="col">Col Header</th>\n          <th id="t1-row-2-col-7" scope="col">Col Header</th>\n      </tr>\n      <tr>\n          <th id="t1-row-3-col-2" scope="row">Row Header</th>\n          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-3"><a href="https://wwu.edu/#nowhere">Link</a></td>\n          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-4"><a href="https://wwu.edu/#nowhere">Link</a></td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-5">Many <br/>Lines <br/>of <br/>Data</td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-6">Data</td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-3-col-2 t1-row-2-col-7">Data</td>\n      </tr>\n      <tr>\n          <th id="t1-row-4-col-2" scope="row">Row Header</th>\n          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-3">More words taking up a single cell on table</td>\n          <td headers="t1-row-1-col-3 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-4">Supercalifragilisticexpialidocious</td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-5">Data</td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-6">Data</td>\n          <td headers="t1-row-1-col-4 t1-row-2-col-1 t1-row-4-col-2 t1-row-2-col-7">Data</td>\n      </tr>\n    </table>\n  </div>\n  ';class t extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0)),this.querySelector(".bg-wrapper").classList.add(this.attributes.color.value+"-bg")}}window.customElements.define("wwu-background-color",t)}},8066:()=>{if(("undefined"==typeof context||"undefined"!=typeof context&&context==document)&&"undefined"!=typeof window){const e=document.createElement("template");e.innerHTML='\n        <a class="wwu-social-link">\n        <span class="visually-hidden"></span>\n        <div class="wwu-social-icon">\n        </div>\n        </a>\n        \n        ';class t extends HTMLElement{constructor(){super()}connectedCallback(){this.appendChild(e.content.cloneNode(!0));const t=this.getAttribute("url"),[r,l]=function(e){if(e.includes("facebook"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><path class="wwu-icon-cls-1" d="M135,67.5a67.5,67.5,0,1,0-78,66.68V87H39.81V67.5H57V52.63C57,35.71,67,26.37,82.45,26.37a103.77,103.77,0,0,1,15.11,1.32V44.3H89.05c-8.39,0-11,5.2-11,10.54V67.5H96.77L93.77,87H78.05v47.17A67.51,67.51,0,0,0,135,67.5Z"/><path class="wwu-icon-cls-2" d="M93.77,87l3-19.51H78.05V54.84c0-5.34,2.61-10.54,11-10.54h8.51V27.69a103.77,103.77,0,0,0-15.11-1.32C67,26.37,57,35.71,57,52.63V67.5H39.81V87H57v47.17a68.28,68.28,0,0,0,21.1,0V87Z"/></svg>',"Facebook"];if(e.includes("flickr"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><circle class="wwu-icon-cls-2" cx="41.46" cy="67.64" r="20.99"/><circle class="wwu-icon-cls-2" cx="93.64" cy="67.64" r="20.99"/></svg>',"Flickr"];if(e.includes("instagram"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M67.5,32.66c11.35,0,12.69,0,17.17.25a23.4,23.4,0,0,1,7.9,1.46,14.11,14.11,0,0,1,8.06,8.06,23.4,23.4,0,0,1,1.46,7.9c.21,4.48.25,5.82.25,17.17s0,12.69-.25,17.17a23.4,23.4,0,0,1-1.46,7.9,14.11,14.11,0,0,1-8.06,8.06,23.4,23.4,0,0,1-7.9,1.46c-4.48.21-5.82.25-17.17.25s-12.69,0-17.17-.25a23.4,23.4,0,0,1-7.9-1.46,14.11,14.11,0,0,1-8.06-8.06,23.4,23.4,0,0,1-1.46-7.9c-.21-4.48-.25-5.82-.25-17.17s0-12.69.25-17.17a23.4,23.4,0,0,1,1.46-7.9,14.11,14.11,0,0,1,8.06-8.06,23.4,23.4,0,0,1,7.9-1.46c4.48-.21,5.82-.25,17.17-.25m0-7.66c-11.54,0-13,.05-17.52.26a31,31,0,0,0-10.32,2A21.7,21.7,0,0,0,27.23,39.66a31,31,0,0,0-2,10.32C25.05,54.51,25,56,25,67.5s.05,13,.26,17.52a31,31,0,0,0,2,10.32,21.7,21.7,0,0,0,12.43,12.43,31,31,0,0,0,10.32,2c4.53.21,6,.26,17.52.26s13,0,17.52-.26a31,31,0,0,0,10.32-2,21.7,21.7,0,0,0,12.43-12.43,31,31,0,0,0,2-10.32c.21-4.53.26-6,.26-17.52s0-13-.26-17.52a31,31,0,0,0-2-10.32A21.7,21.7,0,0,0,95.34,27.23a31,31,0,0,0-10.32-2C80.49,25.05,79,25,67.5,25Z"/><path class="wwu-icon-cls-2" d="M67.5,45.68A21.82,21.82,0,1,0,89.32,67.5,21.82,21.82,0,0,0,67.5,45.68Zm0,36A14.17,14.17,0,1,1,81.67,67.5,14.18,14.18,0,0,1,67.5,81.67Z"/><circle class="wwu-icon-cls-2" cx="90.19" cy="44.81" r="5.1"/></svg>',"Instagram"];if(e.includes("linkedin"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M72.72,58.29c1.11-1.24,2-2.51,3.16-3.58a17.3,17.3,0,0,1,12.48-4.92,28.74,28.74,0,0,1,7.84,1c5.86,1.69,9.27,5.73,10.89,11.45a48,48,0,0,1,1.45,13.12c0,9.32,0,18.65,0,28,0,.88-.24,1.1-1.1,1.1q-7.2-.06-14.41,0c-.84,0-1-.26-1-1Q92,90,92,76.71a24.16,24.16,0,0,0-.77-6.61c-1.15-4-4-6-8.17-5.79-5.7.3-8.66,3.12-9.39,8.91a34.19,34.19,0,0,0-.25,4.17c0,8.62,0,17.25,0,25.88,0,.86-.21,1.12-1.09,1.11q-7.26-.06-14.52,0c-.77,0-1-.21-1-1q0-25.64,0-51.25c0-.85.28-1,1.08-1,4.59,0,9.19,0,13.78,0,.85,0,1.07.26,1,1.06C72.69,54.21,72.72,56.25,72.72,58.29Z"/><path class="wwu-icon-cls-2" d="M46.4,77.81c0,8.46,0,16.91,0,25.36,0,.94-.23,1.22-1.2,1.21-4.8,0-9.6,0-14.4,0-.77,0-1-.19-1-1q0-25.67,0-51.33c0-.71.17-1,.92-1,4.87,0,9.75,0,14.62,0,.93,0,1.06.35,1.06,1.15C46.39,60.77,46.4,69.29,46.4,77.81Z"/><path class="wwu-icon-cls-2" d="M47.73,34.14a9.6,9.6,0,1,1-9.58-9.54A9.62,9.62,0,0,1,47.73,34.14Z"/></svg>',"LinkedIn"];if(e.includes("pinterest"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135.22"><path class="wwu-icon-cls-1" d="M67.56,0A67.58,67.58,0,0,0,42.92,130.5c-.61-5.34-1.11-13.57.23-19.41C44.37,105.81,51,77.51,51,77.51a24.63,24.63,0,0,1-2-10c0-9.4,5.45-16.4,12.23-16.4,5.79,0,8.57,4.33,8.57,9.51,0,5.78-3.67,14.45-5.62,22.51-1.61,6.73,3.39,12.24,10,12.24,12,0,21.24-12.68,21.24-30.92C95.47,48.26,83.85,37,67.22,37,48,37,36.7,51.38,36.7,66.28c0,5.78,2.22,12,5,15.4a2,2,0,0,1,.45,1.94c-.5,2.12-1.67,6.73-1.89,7.68-.28,1.22-1,1.5-2.28.89C29.52,88.24,24.24,76,24.24,66c0-21.3,15.46-40.87,44.65-40.87,23.41,0,41.65,16.68,41.65,39,0,23.3-14.68,42-35,42-6.84,0-13.29-3.56-15.46-7.79,0,0-3.39,12.9-4.23,16.07-1.5,5.9-5.61,13.24-8.39,17.74A67.62,67.62,0,1,0,67.56,0Z"/></svg>',"Pinterest"];if(e.includes("snapchat"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M90.75,51.58c0,1.85-.11,3.71-.25,5.56,0,.31,0,.63,0,.94,0,.69.39,1,1.07.91a3.18,3.18,0,0,0,.74-.17l2-.74A27.24,27.24,0,0,1,97.69,57a5.18,5.18,0,0,1,2.38-.09,2.87,2.87,0,0,1,2.06,4,4,4,0,0,1-.79,1.21,8.23,8.23,0,0,1-1.58,1.36l-2.05,1.36L94.28,67c-.47.32-.93.65-1.38,1a5.23,5.23,0,0,0-.69.64,2.24,2.24,0,0,0-.59,1.69,8.5,8.5,0,0,0,.32,1.8,22.3,22.3,0,0,0,2.38,5.35,30.62,30.62,0,0,0,7.06,8,40.13,40.13,0,0,0,7.73,4.88c.25.12.49.26.72.39a1.46,1.46,0,0,1,.46.43.74.74,0,0,1,.06.83,2.12,2.12,0,0,1-.54.61,6,6,0,0,1-1,.65,22.46,22.46,0,0,1-4.94,1.91c-.73.2-1.46.41-2.18.63a8.4,8.4,0,0,0-1.45.61,2.61,2.61,0,0,0-1.41,1.92c-.09.47-.15,1-.23,1.43a1.9,1.9,0,0,1-1.83,1.85,10.55,10.55,0,0,1-1.26.13c-1,.06-2.1.09-3.15.15a26.88,26.88,0,0,0-7,1.25,14,14,0,0,0-2.77,1.23c-.93.53-1.85,1.09-2.77,1.64a28.65,28.65,0,0,1-4.54,2.34,19.8,19.8,0,0,1-5.52,1.28,24,24,0,0,1-4.79-.06,19.37,19.37,0,0,1-6.8-2.06c-1-.51-1.95-1.08-2.9-1.66l-2.11-1.27a18.23,18.23,0,0,0-5.41-2.06,31,31,0,0,0-5.26-.65l-2.78-.13a8.16,8.16,0,0,1-1.56-.23,1.68,1.68,0,0,1-1.33-1.37c-.08-.41-.15-.83-.22-1.24l0-.25a2.86,2.86,0,0,0-1.74-2.39,13.31,13.31,0,0,0-2-.7c-1.16-.32-2.33-.61-3.46-1a21.77,21.77,0,0,1-2.88-1.28c-.28-.16-.55-.32-.81-.5a3.09,3.09,0,0,1-.48-.4.92.92,0,0,1,.12-1.55,5.71,5.71,0,0,1,1-.56,39.43,39.43,0,0,0,6.82-4.2,31.07,31.07,0,0,0,7.65-8.35,22.74,22.74,0,0,0,2.52-5.57,7.72,7.72,0,0,0,.33-1.92A2.23,2.23,0,0,0,43,68.6a6.71,6.71,0,0,0-.85-.75c-.88-.66-1.8-1.26-2.71-1.86L36,63.71a11.87,11.87,0,0,1-1.65-1.27,6.05,6.05,0,0,1-1-1.17,3,3,0,0,1-.17-2.85A2.52,2.52,0,0,1,34.66,57,4.32,4.32,0,0,1,37,56.83a14.73,14.73,0,0,1,2.67.75c.89.32,1.77.67,2.66,1a6.11,6.11,0,0,0,1.26.38,1.75,1.75,0,0,0,.32,0c.51,0,.93-.18.92-.86s0-1.14-.06-1.71a86.11,86.11,0,0,1-.17-9.23,32.61,32.61,0,0,1,.72-5.82,18.82,18.82,0,0,1,3.38-7.28,21.87,21.87,0,0,1,11.92-8,26.45,26.45,0,0,1,8.07-.91A25,25,0,0,1,77,26.92,21.31,21.31,0,0,1,84,31.16a19.56,19.56,0,0,1,5.55,8.46,25.42,25.42,0,0,1,1,4.63A57.89,57.89,0,0,1,90.75,51.58Z"/></svg>',"Snapchat"];if(e.includes("tiktok"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M105.32,45.19c0-.39,0-.4-.42-.4a18.15,18.15,0,0,1-2.94-.26C98.43,44,87,38,85,28.16a30,30,0,0,1-.47-3.67c0-.46,0-.46-.46-.47H70.34c-.9,0-.77-.11-.77.79q0,29.16,0,58.33a12,12,0,0,1-.15,2.16,12.64,12.64,0,0,1-15,10.31,18,18,0,0,1-3-1,2.39,2.39,0,0,0-.23-.22c-.33-.27-.68-.49-1-.74-4.15-2.87-6.12-6.86-5.52-11.85S48.19,73.34,53,71.57a11.13,11.13,0,0,1,4.47-.67,13.24,13.24,0,0,1,2.92.45c.33.09.51,0,.52-.37,0-.13,0-.25,0-.37,0-3.49-.13-11.12-.14-11.13,0-1,0-2,0-3,0-.29-.14-.34-.38-.36A28.25,28.25,0,0,0,55,56a27.71,27.71,0,0,0-7.31,1.55,27.41,27.41,0,0,0-18.1,24,26.58,26.58,0,0,0,.05,4.28,27,27,0,0,0,1.16,5.79A27.32,27.32,0,0,0,40.08,105a6.31,6.31,0,0,0,1.42,1h0l.69.61a14.93,14.93,0,0,0,2.29,1.4,27.46,27.46,0,0,0,15.76,2.79A27.69,27.69,0,0,0,84.73,83.26c.06-9.68,0-19.36,0-29.05,0-.23-.13-.56.12-.67s.4.17.59.3a35.92,35.92,0,0,0,11.7,5,32.63,32.63,0,0,0,7.44.89c.79,0,.9,0,.9-.83C105.5,55.51,105.32,46.11,105.32,45.19Z"/></svg>',"TikTok"];if(e.includes("twitter"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M53.86,106.38c33,0,51-27.32,51-51,0-.78,0-1.55,0-2.32a36.52,36.52,0,0,0,8.94-9.28,35.57,35.57,0,0,1-10.29,2.82,18,18,0,0,0,7.88-9.91A36.21,36.21,0,0,1,100,41,17.93,17.93,0,0,0,69,53.3a17.72,17.72,0,0,0,.46,4.08A50.87,50.87,0,0,1,32.47,38.66,17.93,17.93,0,0,0,38,62.59a17.71,17.71,0,0,1-8.12-2.25,1.77,1.77,0,0,0,0,.23A17.93,17.93,0,0,0,44.27,78.14a18,18,0,0,1-8.09.31A18,18,0,0,0,52.92,90.9a35.93,35.93,0,0,1-22.26,7.67,35.48,35.48,0,0,1-4.27-.25,50.68,50.68,0,0,0,27.47,8.06"/></svg>',"Twitter"];if(e.includes("vimeo"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M111.11,46.36q-.61,13.28-18.56,36.37Q74,106.85,61.15,106.85q-8,0-13.46-14.69L40.34,65.23q-4.08-14.69-8.76-14.69c-.69,0-3.07,1.44-7.15,4.29l-4.28-5.51Q26.9,43.4,33.43,37.48q9-7.77,13.49-8.18,10.62-1,13.07,14.52,2.65,16.77,3.68,20.86,3.08,13.91,6.75,13.91,2.85,0,8.58-9t6.12-13.74C85.67,50.63,83.62,48,79,48a17.07,17.07,0,0,0-6.74,1.49q6.7-22,25.63-21.35Q111.92,28.58,111.11,46.36Z"/></svg>',"Vimeo"];if(e.includes("youtube"))return['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><circle class="wwu-icon-cls-1" cx="67.5" cy="67.5" r="67.5"/><path class="wwu-icon-cls-2" d="M110.62,45.84a11.3,11.3,0,0,0-8-8C95.64,36,67.5,36,67.5,36s-28.14,0-35.16,1.88a11.3,11.3,0,0,0-8,8c-1.88,7-1.88,21.66-1.88,21.66s0,14.64,1.88,21.66a11.3,11.3,0,0,0,8,8C39.36,99,67.5,99,67.5,99s28.14,0,35.16-1.88a11.3,11.3,0,0,0,8-8c1.88-7,1.88-21.66,1.88-21.66S112.5,52.86,110.62,45.84ZM58.5,81V54L81.88,67.5Z"/></svg>',"YouTube"]}(t);this.querySelector(".wwu-social-link").setAttribute("href",t),this.querySelector(".wwu-social-icon").innerHTML=r,this.querySelector(".wwu-social-icon").classList.add(this.getAttribute("size")),this.querySelector(".visually-hidden").innerText=this.getAttribute("group")+" on "+l}}window.customElements.define("wwu-social",t)}},7532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>w,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var l=r(7462),o=(r(7294),r(3905));r(9346),r(8066);const n={},c="Background Color",a={unversionedId:"atoms/background-color/background-color",id:"atoms/background-color/background-color",title:"Background Color",description:"Default",source:"@site/patterns/01-atoms/background-color/background-color.md",sourceDirName:"01-atoms/background-color",slug:"/atoms/background-color/",permalink:"/ashlar/patterns/atoms/background-color/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/ashlar/patterns/utilities/variables"},next:{title:"Blockquotes",permalink:"/ashlar/patterns/atoms/blockquotes/"}},s={},i=[{value:"Default",id:"default",level:2},{value:"Black",id:"black",level:2},{value:"Darkest Blue",id:"darkest-blue",level:2},{value:"Dark Blue",id:"dark-blue",level:2},{value:"Blue",id:"blue",level:2},{value:"Light Blue",id:"light-blue",level:2},{value:"Lightest Blue",id:"lightest-blue",level:2},{value:"Green",id:"green",level:2},{value:"Light Green",id:"light-green",level:2},{value:"Gray",id:"gray",level:2},{value:"Light Gray",id:"light-gray",level:2},{value:"Lightest Gray",id:"lightest-gray",level:2}],u={toc:i};function w(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"background-color"},"Background Color"),(0,o.kt)("h2",{id:"default"},"Default"),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"white"}),"    "),(0,o.kt)("h2",{id:"black"},"Black"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="black-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"black"})),(0,o.kt)("h2",{id:"darkest-blue"},"Darkest Blue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="darkest-blue-bg"></div>    \n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"darkest-blue"})),(0,o.kt)("h2",{id:"dark-blue"},"Dark Blue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="dark-blue-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"dark-blue"})),(0,o.kt)("h2",{id:"blue"},"Blue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="blue-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"blue"})),(0,o.kt)("h2",{id:"light-blue"},"Light Blue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="light-blue-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"light-blue"})),(0,o.kt)("h2",{id:"lightest-blue"},"Lightest Blue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="lightest-blue-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"lightest-blue"})),(0,o.kt)("h2",{id:"green"},"Green"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="green-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"green"})),(0,o.kt)("h2",{id:"light-green"},"Light Green"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="light-green-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"light-green"})),(0,o.kt)("h2",{id:"gray"},"Gray"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="gray-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"gray"})),(0,o.kt)("h2",{id:"light-gray"},"Light Gray"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="light-gray-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"light-gray"})),(0,o.kt)("h2",{id:"lightest-gray"},"Lightest Gray"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div class="lightest-gray-bg"></div>\n')),(0,o.kt)("p",null,(0,o.kt)("wwu-background-color",{color:"lightest-gray"})))}w.isMDXComponent=!0}}]);