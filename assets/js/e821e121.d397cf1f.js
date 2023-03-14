"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[1816],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var r=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),d=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=l,k=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(k,n(n({ref:a},c),{},{components:t})):r.createElement(k,n({ref:a},c))}));function p(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,n=new Array(i);n[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,n[1]=s;for(var d=2;d<i;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=t(7462),l=(t(7294),t(3905)),i=t(7199);const n={},s="Cards",o={unversionedId:"molecules/card/card",id:"molecules/card/card",title:"Cards",description:"Card Containers",source:"@site/patterns/02-molecules/card/card.md",sourceDirName:"02-molecules/card",slug:"/molecules/card/",permalink:"/ashlar/patterns/molecules/card/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Banner",permalink:"/ashlar/patterns/molecules/banner/"},next:{title:"Donut Chart",permalink:"/ashlar/patterns/molecules/charts/donut-chart/"}},d={},c=[{value:"Card Containers",id:"card-containers",level:2},{value:"Basic",id:"basic",level:2},{value:"Horizontal",id:"horizontal",level:2},{value:"Color Block Title Variant",id:"color-block-title-variant",level:2},{value:"Events",id:"events",level:2},{value:"Hover Variant",id:"hover-variant",level:2},{value:"Degree Cards",id:"degree-cards",level:2}],m={toc:c};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cards"},"Cards"),(0,l.kt)("h2",{id:"card-containers"},"Card Containers"),(0,l.kt)("p",null,"The following classes are available to put on divs containing cards. The first three use a grid layout, the others use flexbox. Different situations may make one type desireable over the other, but the flex layouts work best in most cases."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"card-2col"),(0,l.kt)("li",{parentName:"ul"},"card-3col"),(0,l.kt)("li",{parentName:"ul"},"card-4col"),(0,l.kt)("li",{parentName:"ul"},"card-2col--flex"),(0,l.kt)("li",{parentName:"ul"},"card-3col--flex"),(0,l.kt)("li",{parentName:"ul"},"card-4col--flex ")),(0,l.kt)("p",null,"The class full-width can be used to break an element out of the flex container. For example, if you have a view using a card flex container, but would like headings as section dividers that span the full width of the container."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div class="card-3col--flex">\n  <h2 class="full-width">Section Heading</h2>\n  <div class="wwu-card"></div>\n  <div class="wwu-card"></div>\n  <div class="wwu-card"></div>\n</div>\n')),(0,l.kt)("h2",{id:"basic"},"Basic"),(0,l.kt)("div",{className:"card-3col"},(0,l.kt)("div",{className:"wwu-card"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Faolan Griogarach, PhD")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("span",{className:"taxonomy-term"},"Professor")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"She/her/hers"),(0,l.kt)("p",null,(0,l.kt)("a",{href:"mailto:faolan.griogarach@wwu.edu"},"faolan.griogarach@wwu.edu")),(0,l.kt)("p",null,(0,l.kt)("a",{href:"tel:360-650-6820"},"360-650-6820")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," OM 360"))),(0,l.kt)("div",{className:"wwu-card lightest-blue-bg"},(0,l.kt)("h2",{className:"title"},"Unlinked Card"),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("a",{className:"taxonomy-term",href:"#"},"Term Link 1")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ",(0,l.kt)("a",{href:"nothing.pdf"},"ut labore et dolore magna aliqua."))," ",(0,l.kt)("p",null,(0,l.kt)("a",{href:"#",className:"cta"},"Call to Action")))),(0,l.kt)("div",{className:"wwu-card dark-blue-bg"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Card Title")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("a",{className:"taxonomy-term",href:"#"},"Term Link 1")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ",(0,l.kt)("a",{href:"nothing.pdf"},"ut labore et dolore magna aliqua."))," ",(0,l.kt)("p",null,(0,l.kt)("a",{href:"#",className:"cta"},"Call to Action"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div  class="wwu-card dark-blue-bg">    \n  <h2  class="title">\n    <a href="#">Card Title</a>\n  </h2>\n  \n  <div class="image">\n    <img src={Placeholder} alt="leaves in water"/>    \n  </div>\n  \n  <div class="taxonomy-terms">\n    <a class="taxonomy-term" href="#">Term Link 1</a>\n  </div> \n\n  <div class="body">\n    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> \n    <p><a href="#" class="cta">Call to Action</a></p>\n  </div>\n</div>\n')),(0,l.kt)("h2",{id:"horizontal"},"Horizontal"),(0,l.kt)("p",null,"Will look the same as basic cards on mobile/small screens"),(0,l.kt)("div",{className:"wwu-card horizontal"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Faolan Griogarach, PhD")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("span",{className:"taxonomy-term"},"Professor")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"She/her/hers"),(0,l.kt)("p",null,(0,l.kt)("a",{href:"mailto:faolan.griogarach@wwu.edu"},"faolan.griogarach@wwu.edu")),(0,l.kt)("p",null,(0,l.kt)("a",{href:"tel:360-650-6820"},"360-650-6820")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," OM 360"))),(0,l.kt)("div",{className:"wwu-card horizontal"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Faolan Griogarach, PhD")),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("span",{className:"taxonomy-term"},"Professor")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"She/her/hers"),(0,l.kt)("p",null,(0,l.kt)("a",{href:"mailto:faolan.griogarach@wwu.edu"},"faolan.griogarach@wwu.edu")),(0,l.kt)("p",null,(0,l.kt)("a",{href:"tel:360-650-6820"},"360-650-6820")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," OM 360"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div  class="wwu-card horizontal">    \n  <h2 class="title">\n    <a href="#">Faolan Griogarach, PhD</a>\n  </h2>\n  \n  <div class="image">\n    <img src={Placeholder} alt="leaves in water placeholder" />\n  </div>\n  \n  <div class="taxonomy-terms">\n    <span class="taxonomy-term">Professor</span>\n  </div>   \n  \n  <div class="body">\n    <p>She/her/hers</p>\n    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>\n    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>\n  </div>    \n</div>\n')),(0,l.kt)("h2",{id:"color-block-title-variant"},"Color Block Title Variant"),(0,l.kt)("p",null,"Add the custom class ",(0,l.kt)("strong",{parentName:"p"},"color-block-title"),", and optionally ",(0,l.kt)("strong",{parentName:"p"},"dark-blue, or light-green"),", to your card block's custom class field to use this style. "),(0,l.kt)("div",{className:"card-3col--flex"},(0,l.kt)("div",{className:"wwu-card color-block-title"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#new"},"Card Title")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("a",{className:"taxonomy-term",href:"#"},"Term Link 1")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ",(0,l.kt)("a",{href:"nothing.pdf"},"ut labore et dolore magna aliqua."))," ",(0,l.kt)("p",null,(0,l.kt)("a",{href:"#",className:"cta"},"Call to Action")))),(0,l.kt)("div",{className:"wwu-card color-block-title dark-blue"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#new"},"Unlinked Card")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("a",{className:"taxonomy-term",href:"#"},"Term Link 1")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ",(0,l.kt)("a",{href:"nothing.pdf"},"ut labore et dolore magna aliqua."))," ",(0,l.kt)("p",null,(0,l.kt)("a",{href:"#",className:"cta"},"Call to Action")))),(0,l.kt)("div",{className:"wwu-card color-block-title light-green"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#new"},"Card Title")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("a",{className:"taxonomy-term",href:"#"},"Term Link 1")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ",(0,l.kt)("a",{href:"nothing.pdf"},"ut labore et dolore magna aliqua."))," ",(0,l.kt)("p",null,(0,l.kt)("a",{href:"#",className:"cta"},"Call to Action"))))),(0,l.kt)("div",{className:"wwu-card horizontal color-block-title"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Faolan Griogarach, PhD")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("span",{className:"taxonomy-term"},"Professor")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"She/her/hers"),(0,l.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. "),(0,l.kt)("p",null,(0,l.kt)("a",{href:"mailto:faolan.griogarach@wwu.edu"},"faolan.griogarach@wwu.edu")),(0,l.kt)("p",null,(0,l.kt)("a",{href:"tel:360-650-6820"},"360-650-6820")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," OM 360"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div  class="wwu-card color-block-title light-green">    \n  <h2  class="title">\n    <a href="#">Card Title</a>\n  </h2>\n  \n  <div class="image">\n    <img src={Placeholder} alt="leaves in water"/>    \n  </div>\n  \n  <div class="taxonomy-terms">\n    <a class="taxonomy-term" href="#">Term Link 1</a>\n  </div> \n\n  <div class="body">\n    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>\n  </div>\n</div>\n')),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"This variant is for use in views displaying events. These styles are not available for standard Drupal blocks. See also ",(0,l.kt)("a",{parentName:"p",href:"/patterns/molecules/event-list"},"event lists"),", for events without images."),(0,l.kt)("div",{className:"card-2col"},(0,l.kt)("div",{className:"wwu-card event"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Event Title")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"location"},"Old Main Theater but Make The Location Longer"),(0,l.kt)("div",{className:"date"},(0,l.kt)("span",{className:"month"},"Apr"),(0,l.kt)("span",{className:"day"},"04"),(0,l.kt)("span",{className:"year"},"2023")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),(0,l.kt)("div",{className:"wwu-card event alt"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Event Title")),(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"location"},"Old Main Theater but Make The Location Longer"),(0,l.kt)("div",{className:"date"},(0,l.kt)("span",{className:"month"},"Apr"),(0,l.kt)("span",{className:"day"},"04 - 07"),(0,l.kt)("span",{className:"year"},"2023")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div  class="wwu-card event">\n  <h2  class="title">\n    <a href="#">Event Title</a>\n  </h2>\n  \n  <div class="image">\n    <img src={Placeholder} alt="leaves in water"/>    \n  </div>  \n  \n  <div class="date">\n    <span class="month">Apr</span> \n    <span class="day">04 - 07</span>\n    <span class="year">2023</span>\n  </div>\n  \n  <div class="location">\n    Old Main Theater but Make The Location Longer\n  </div>\n  \n  <div class="body">\n    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n  </div>\n</div>\n\n<div  class="wwu-card event alt">\n  <h2  class="title">\n    <a href="#">Event Title</a>\n  </h2>\n  \n  <div class="image">\n    <img src={Placeholder} alt="leaves in water"/>    \n  </div>  \n  \n  <div class="date">\n    <span class="month">Apr</span> \n    <span class="day">04 - 07</span>\n    <span class="year">2023</span>\n  </div>\n  \n  <div class="location">\n    Old Main Theater but Make The Location Longer\n  </div>\n  \n  <div class="body">\n    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n  </div>\n</div>\n')),(0,l.kt)("h2",{id:"hover-variant"},"Hover Variant"),(0,l.kt)("p",null,"This variant requires different markup from standard cards. It is only available in views or as a hard coded element (not recommened), it is ",(0,l.kt)("strong",{parentName:"p"},"not available for Drupal blocks.")),(0,l.kt)("div",{className:"card-3col"},(0,l.kt)("div",{className:"hover-card"},(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"content"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Card Title")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),(0,l.kt)("p",null,"Another paragraph of text."))),(0,l.kt)("div",{className:"read-more"},(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"arrow_forward"))),(0,l.kt)("div",{className:"hover-card"},(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"content"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"Longer card title for 2+ lines")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),(0,l.kt)("p",null,"Another paragraph of text."))),(0,l.kt)("div",{className:"read-more"},(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"arrow_forward"))),(0,l.kt)("div",{className:"hover-card"},(0,l.kt)("div",{className:"image"},(0,l.kt)("img",{src:i.Z,alt:"leaves in water placeholder"})),(0,l.kt)("div",{className:"content"},(0,l.kt)("h2",{className:"title"},(0,l.kt)("a",{href:"#"},"A rather long card title that takes up three or so lines")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",(0,l.kt)("a",{href:"#"},"Ut enim ad minim veniam"),", quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),(0,l.kt)("p",null,"Another paragraph of text."))),(0,l.kt)("div",{className:"read-more"},(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"arrow_forward")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div class="hover-card">\n  <div class="image">\n    <img src={Placeholder} alt="leaves in water placeholder"/>    \n  </div>\n\n  <div class="content">    \n    <h2  class="title">\n      <a href="#">Card Title</a>\n    </h2>\n    \n    <div class="body">\n      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>\n    </div>\n  </div>\n\n  <div class="read-more">\n    <span class=\'material-icons\' aria-hidden=\'true\'>arrow_forward</span>\n  </div>\n</div>\n')),(0,l.kt)("h2",{id:"degree-cards"},"Degree Cards"),(0,l.kt)("p",null,"For degrees displayed on majors pages. These style are fairly specific to the content on those pages and the way the views are built."),(0,l.kt)("div",{className:"degree-card lightest-blue-bg "},(0,l.kt)("h3",{className:"title"},"Cat Science \u2014 Secondary, BAE"),(0,l.kt)("div",{className:"taxonomy-terms"},(0,l.kt)("span",{className:"taxonomy-term dark-blue-bg"},(0,l.kt)("span",{className:"visually-hidden"},"Degree Type:"),(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"school")," Teaching Endorsement")),(0,l.kt)("div",{className:"body"},(0,l.kt)("p",null,"Do you like to know why and how cats think? Do you enjoy making yourself feel insignificant? Are you concerned about what makes your cat purr? Want to teach Cat science and other sciences to middle or high school students? This degree leads to recommendations for teaching endorsements in Cat Science."),(0,l.kt)("div",{className:"department-links"},(0,l.kt)("div",null,(0,l.kt)("a",{className:"department-link",href:"#"},"Cat Education ",(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"arrow_forward"))),(0,l.kt)("div",null,(0,l.kt)("a",{className:"department-link",href:"#"},"Catology ",(0,l.kt)("span",{className:"material-icons","aria-hidden":"true"},"arrow_forward")))),(0,l.kt)("h4",{className:"title"},"Contact"),(0,l.kt)("p",null,"Advisor #1, ",(0,l.kt)("em",null,"Cat Science Education Advisor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#"},"advisor.one@wwu.edu")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," ",(0,l.kt)("a",{href:"#"},"360-650-5555")),(0,l.kt)("p",null,"Advisor #2, ",(0,l.kt)("em",null,"General Science Education Advisor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#"},"advisor.two@wwu.edu")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," ",(0,l.kt)("a",{href:"#"},"360-650-5555")),(0,l.kt)("p",null,"Advisor #3, ",(0,l.kt)("em",null,"Cat Science Education Advisor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#"},"advisor.three@wwu.edu")," ",(0,l.kt)("span",{"aria-hidden":"true"},"|")," ",(0,l.kt)("a",{href:"#"},"360-650-5555"))),(0,l.kt)("div",{className:"more-link"},(0,l.kt)("a",{href:"#",className:"cta"},"Catalog details about Cat Science/General Science \u2014 Secondary, BAE"))))}u.isMDXComponent=!0},7199:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/placeholder-e2df3995300bd522d525f9a24b235bab.jpg"}}]);