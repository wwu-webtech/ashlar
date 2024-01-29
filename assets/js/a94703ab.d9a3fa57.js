"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[4368],{6902:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(7294),o=n(6905),i=n(1944),s=n(5281),l=n(2802),r=n(1116),c=n(5999),d=n(2466),u=n(5936);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(5893);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(1442),x=n(6550),f=n(7524),j=n(6668),k=n(1327);function _(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function g(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,h.jsx)(_,{className:v.collapseSidebarButtonIcon})})}var C=n(6010),S=n(9689),I=n(902);const N=Symbol("EmptyContext"),T=a.createContext(N);function B(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(T.Provider,{value:i,children:t})}var Z=n(6043),y=n(8596),L=n(3692),A=n(2389);function w(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:b,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),k=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),_=(0,l._F)(t,i),v=(0,y.Mg)(x,i),{collapsed:g,setCollapsed:C}=(0,Z.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:S,setExpandedItem:B}=function(){const e=(0,a.useContext)(T);if(e===N)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!g),B(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,I.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{b&&null!=S&&S!==c&&f&&C(!0)}),[b,S,c,C,f]),(0,h.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,h.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v}),children:[(0,h.jsx)(L.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!x&&b,"menu__link--active":_}),onClick:b?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!g:void 0,href:b?k??"#":k,...d,children:m}),x&&b&&(0,h.jsx)(w,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,h.jsx)(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,h.jsx)(V,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var H=n(3919),M=n(9471);const P={menuExternalLink:"menuExternalLink_NmtK"};function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,p=(0,l._F)(t,a),x=(0,H.Z)(d);return(0,h.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,h.jsxs)(L.Z,{className:(0,o.Z)("menu__link",!x&&P.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,h.jsx)(M.Z,{})]})},u)}const W={menuHtmlItem:"menuHtmlItem_M9Kj"};function F(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,h.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[W.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(E,{item:t,...n});case"html":return(0,h.jsx)(F,{item:t,...n});default:return(0,h.jsx)(R,{item:t,...n})}}function U(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,h.jsx)(B,{children:a.map(((e,t)=>(0,h.jsx)(D,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(U),Y={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};function K(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,S.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":"Pattern",className:(0,C.Z)("menu thin-scrollbar",Y.menu,i&&Y.menuWithAnnouncementBar,o),children:(0,h.jsx)("ul",{className:(0,C.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:n,activePath:t,level:1})})})}const z="sidebar_njMd",G="sidebarWithHideableNavbar_wUlq",O="sidebarHidden_VK0M",q="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.L)();return(0,h.jsxs)("div",{className:(0,o.Z)(z,s&&G,i&&O),children:[s&&(0,h.jsx)(k.Z,{tabIndex:-1,className:q}),(0,h.jsx)(K,{path:t,sidebar:n}),l&&(0,h.jsx)(g,{onClick:a})]})}const Q=a.memo(J);var X=n(3102),$=n(2961);const ee=e=>{let{sidebar:t,path:n}=e;const a=(0,$.e)();return(0,h.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function te(e){return(0,h.jsx)(X.Zo,{component:ee,props:e})}const ne=a.memo(te);function ae(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(Q,{...e}),a&&(0,h.jsx)(ne,{...e})]})}const oe={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ie(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:oe.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(_,{className:oe.expandButtonIcon})})}const se={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,r.V)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.n)()&&c(!0),i((e=>!e))}),[i,r]);return(0,h.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(le,{children:(0,h.jsxs)("div",{className:(0,o.Z)(se.sidebarViewport,r&&se.sidebarViewportHidden),children:[(0,h.jsx)(ae,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,h.jsx)(ie,{toggleSidebar:d})]})})})}const ce={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function de(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,h.jsx)("main",{className:(0,o.Z)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const ue={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function me(e){let{children:t}=e;const n=(0,r.V)(),[o,i]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:ue.docsWrapper,children:[(0,h.jsx)(b,{}),(0,h.jsxs)("div",{className:ue.docRoot,children:[n&&(0,h.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,h.jsx)(de,{hiddenSidebarContainer:o,children:t})]})]})}var he=n(5658);function be(e){const t=(0,l.SN)(e);if(!t)return(0,h.jsx)(he.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,h.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,h.jsx)(r.b,{name:a,items:c,children:(0,h.jsx)(me,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(6905),o=n(5999),i=n(7955),s=n(5893);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);