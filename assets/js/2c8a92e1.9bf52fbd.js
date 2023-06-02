"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[3841],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=t,p=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(p,i(i({ref:r},c),{},{components:n})):a.createElement(p,i({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1372:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),t=(n(7294),n(3905));const l={sidebar_position:1},i="Variables",o={unversionedId:"utilities/variables",id:"utilities/variables",title:"Variables",description:"These are the css variables that are available for use in the theme.",source:"@site/patterns/00-utilities/variables.md",sourceDirName:"00-utilities",slug:"/utilities/variables",permalink:"/patterns/utilities/variables",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Patterns Overview",permalink:"/patterns/overview"},next:{title:"Background Color",permalink:"/patterns/atoms/background-color/"}},s={},d=[{value:"Breakpoints",id:"breakpoints",level:2},{value:"Color",id:"color",level:2},{value:"Brand Colors",id:"brand-colors",level:3},{value:"Special Use Colors",id:"special-use-colors",level:3},{value:"RGB Values",id:"rgb-values",level:3},{value:"Gradients",id:"gradients",level:3},{value:"Typography",id:"typography",level:2},{value:"Font families",id:"font-families",level:3},{value:"Font weights",id:"font-weights",level:3},{value:"Font sizes",id:"font-sizes",level:3},{value:"Headings",id:"headings",level:3},{value:"Page layout",id:"page-layout",level:2},{value:"Spacing",id:"spacing",level:3},{value:"Content areas",id:"content-areas",level:3},{value:"Content area grids",id:"content-area-grids",level:3},{value:"Decoration",id:"decoration",level:2},{value:"Borders and outlines",id:"borders-and-outlines",level:3},{value:"Shadows",id:"shadows",level:3},{value:"Icons",id:"icons",level:3},{value:"Touch Targets",id:"touch-targets",level:3},{value:"Logo",id:"logo",level:3},{value:"Forms",id:"forms",level:3},{value:"Animation",id:"animation",level:2}],c={toc:d};function g(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"variables"},"Variables"),(0,t.kt)("p",null,"These are the css variables that are available for use in the theme."),(0,t.kt)("h2",{id:"breakpoints"},"Breakpoints"),(0,t.kt)("p",null,"Media queries don't allow you to use CSS variables, so they are only available as SASS variables. These are the theme's breakpoints."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$small: 580px;\n$medium: 950px;\n$large: 1300px;\n")),(0,t.kt)("p",null,"It is okay to use pixel values in media queries when making CSS styles overrides in-page. We recommend sticking to these breakpoint values for consistency. Whenever possible, use ",(0,t.kt)("em",{parentName:"p"},"mobile-first")," design and adjust styles with ",(0,t.kt)("em",{parentName:"p"},"min-width")," media queries:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"@media (min-width: 581px) {   }\n@media (min-width: 951px) {   }\n@media (min-width: 1301x) {   }\n")),(0,t.kt)("p",null,"There are a few cases where you need to override a style specifically at a smaller screen. In these cases, max-width queries are acceptable:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"@media (max-width: 580px) {   }\n@media (max-width: 950px) {   }\n@media (max-width: 1300px) {   }\n")),(0,t.kt)("h2",{id:"color"},"Color"),(0,t.kt)("p",null,"This is a complete list of color variables in the theme. We highly recommend that if you are altering color on something, you use a variable rather than a hex or rgb value, with a possible exception for rgba values that need alpha transparency."),(0,t.kt)("div",{className:"messages"},(0,t.kt)("div",{className:"messages--warning",role:"alert"},(0,t.kt)("span",{class:"material-icons","aria-hidden":"true"},"warning"),"\xa0 If you alter an element's color, you *must* make sure that element meets contrast requirements both in light mode and in dark mode. You may need to add an alternate style for dark mode.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'.change-color {\n    color: var(--blue--darker--80);\n}\n\n[data-theme="dark"] .change-color {\n    color: var(--blue--lighter--80);\n}\n')),(0,t.kt)("h3",{id:"brand-colors"},"Brand Colors"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--black: #262b2f;\n--gray--darker--80: #14181b;\n--gray--darker--60: #293036;\n--gray--darker--40: #3d4950;\n--gray--darker--20: #52616b;\n--gray: #667986;\n--gray--lighter--20: #8394a0;\n--gray--lighter--40: #a2afb8;\n--gray--lighter--60: #c1cad0; \n--gray--lighter--80: #e0e4e7; \n--gray--lighter--90: #f0f2f3;\n--white: #fff;\n\n--dark-blue--darker--80: #000d1b;\n--dark-blue--darker--60: #001936;\n--dark-blue--darker--40: #002651;\n--dark-blue--darker--20: #00326c; \n--dark-blue: #003f87;\n--dark-blue--lighter--20: #0062d2;\n--dark-blue--lighter--40: #1e87ff;\n--dark-blue--lighter--60: #69afff; \n--dark-blue--lighter--80: #b4d7ff; \n\n--blue--darker--80: #001828;\n--blue--darker--60: #003150;\n--blue--darker--40: #004978; \n--blue--darker--20: #0062a0; \n--blue: #007ac8;\n--blue--lighter--20: #079eff;\n--blue--lighter--40: #45b6ff; \n--blue--lighter--60: #83cfff;\n--blue--lighter--80: #c1e7ff;\n\n--dark-green--darker--80: #00150d;\n--dark-green--darker--60: #002b19;\n--dark-green--darker--40: #004026;\n--dark-green--darker--20: #005632;\n--dark-green: #006b3f;\n--dark-green--lighter--20: #338965;\n--dark-green--lighter--40: #66a68c;\n--dark-green--lighter--60: #99c4b2;\n--dark-green--lighter--80: #cce1d9;\n\n--green--darker--80: #0f1a06;\n--green--darker--60: #1e340c;\n--green--darker--40: #2c4e12;\n--green--darker--20: #3b6818;\n--green: #4a821e;\n--green--lighter--20: #6e9b4b;\n--green--lighter--40: #92b478;\n--green--lighter--60: #b7cda5;\n--green--lighter--80: #dbe6d2;\n\n--light-green--darker--80: #252b02;\n--light-green--darker--60: #4a5604;\n--light-green--darker--40: #708206;\n--light-green--darker--20: #95ad08;\n--light-green: #bad80a;\n--light-green--lighter--20: #c8e03b;\n--light-green--lighter--40: #d6e86c; \n--light-green--lighter--60: #e3ef9d;\n--light-green--lighter--80: #f1f7ce;\n")),(0,t.kt)("h3",{id:"special-use-colors"},"Special Use Colors"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--red: #cc2d30;\n\n--yellow: #ffc61e;\n--yellow--lighter--40: #ffe38f;\n\n--purple--lighter--80: #ebcfee;\n--purple--lighter--60: #d79fdc;\n--purple--lighter--40: #c26fcb;\n--purple--lighter--20: #ae3fb9;\n--purple: #9a0fa8;\n\n--table-blue: #edf8ff;\n--table-blue--darker--10: #daecf8;\n--table-blue--darker--15: #c5dff0;\n--table-blue--darker--5: #e4f2fb;\n--table-gray: #fdfdfd;\n--table-gray--darker--10: #eeeeee;\n--table-gray--darker--15: #e4e4e4;\n--table-gray--darker--5: #f5f5f6;\n")),(0,t.kt)("h3",{id:"rgb-values"},"RGB Values"),(0,t.kt)("p",null,"For easy use with rgba/transparency, added only as needed."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--black--rgb: 28, 32, 35;\n--blue--rgb: 0, 122, 200;\n--dark-blue--darker--40--rgb: 0, 38, 81;\n--green--rgb: 93, 162, 37;\n--light-green--rgb: 186, 216, 10;\n--red--rgb: 204, 45, 48;\n--yellow--rgb: 255, 198, 30;\n--white--rgb: 255, 255, 255;\n")),(0,t.kt)("h3",{id:"gradients"},"Gradients"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--gradient--vertical--light-blue: linear-gradient(\nto bottom,\nvar(--blue--lighter--40) 0,\nvar(--blue--lighter--60) 100%\n);\n\n--gradient--vertical--dark-blue: linear-gradient(\nto bottom,\nvar(--dark-blue--darker--40) 0,\nvar(--dark-blue) 100%\n);\n\n--gradient--vertical--light-green: linear-gradient(\nto bottom,\nvar(--light-green--lighter--20) 0,\nvar(--light-green) 100%\n);\n\n--gradient--vertical--blue-to-dark-blue: linear-gradient(\nto bottom,\nvar(--blue),\nrgba(var(--dark-blue--darker--40--rgb), 0.9)\n);\n\n--gradient--horizontal--dark-blue-to-transparent: linear-gradient(\nto right,\nrgba(var(--dark-blue--darker--40--rgb), 1) 0%,\nrgba(var(--dark-blue--darker--40--rgb), 0.5) 100%\n);\n\n--gradient--diagonal--blue-to-dark-blue: linear-gradient(\nto right bottom,\n#002f5e,\n#003266,\n#00356d,\n#003875,\n#003b7d,\n#004186,\n#01478e,\n#004d97,\n#0058a3,\n#0063b0,\n#006ebc,\n#007ac8\n);\n--gradient--diagonal--dark-blue-to-black: linear-gradient(\nto left bottom,\n#1c2023,\n#18242d,\n#122738,\n#0a2a44,\n#022d4f,\n#00335c,\n#013a69,\n#044077,\n#074e8b,\n#085c9f,\n#066bb3,\n#007ac8\n);\n")),(0,t.kt)("h2",{id:"typography"},"Typography"),(0,t.kt)("h3",{id:"font-families"},"Font families"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'--font--sans-serif: "Fira Sans", sans-serif;\n--font--serif: "PT Serif", serif;\n--font--hyperlegible: "Atkinson Hyperlegible", sans-serif;\n--font--dyslexia-friendly: "Open Dyslexic", sans-serif;\n--font--title: "Montserrat", sans-serif;\n')),(0,t.kt)("h3",{id:"font-weights"},"Font weights"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--font-weight--light: 300;\n--font-weight--regular: 400;\n--font-weight--semibold: 600;\n--font-weight--bold: 700;\n--font-weight--black: 900;\n")),(0,t.kt)("h3",{id:"font-sizes"},"Font sizes"),(0,t.kt)("p",null,"We use Fluid Typography, so our font sizes scale directly with the viewport size. Our font sizes are based on major second scale, with a few small adjustments."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--font-size--xs: 0.75em;\n--font-size--sm: 0.9em;\n--font-size--md: 1em;\n--font-size--lg: 1.125em;\n--font-size--xl: 1.266em;\n--font-size--2xl: 1.424em;\n--font-size--3xl: 1.602em;\n--font-size--4xl: 1.802em;\n--font-size--5xl: 2.027em;\n--font-size--6xl: 2.281em;\n--font-size--7xl: 2.566em;\n--font-size--8xl: 3.653em;\n--font-size--9xl: 4.11em;\n")),(0,t.kt)("h3",{id:"headings"},"Headings"),(0,t.kt)("p",null,"Heading sizes and colors are set using the font size and color variables above. These are their default values the :root"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--h1-color: var(--blue--darker--80);\n--h1-size: var(--font-size--7xl);\n--h2-color: var(--blue--darker--60);\n--h2-size: var(--font-size--4xl);\n--h3-color: var(--blue--darker--40);\n--h3-size: var(--font-size--3xl);\n--h4-color: var(--blue--darker--20);\n--h4-size: var(--font-size--2xl);\n--h5-color: var(--blue);\n--h5-size: var(--font-size--xl);\n--h6-color: var(--blue);\n--h6-size: var(--font-size--lg);\n")),(0,t.kt)("p",null,"When altering heading styles, the recommended method is to reset the heading variables in the highest possible ",(0,t.kt)("strong",{parentName:"p"},"containing element")," and using ",(0,t.kt)("strong",{parentName:"p"},"css variables"),", rather than on a heading element itself. This helps keep selector specificity and overall CSS complexity lower. We also recommend resetting values with provided theme variables, rather than direct hex/pixel/em values, for consistency with brand, accessibility, and overall scaling."),(0,t.kt)("p",null,"In other words, do this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},".some-container {\n    --h2-size: var(--font-size-md);\n    --h2-color: var(--blue);\n}\n")),(0,t.kt)("p",null,"Not this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"h2 {\n    font-size: 20px;\n    color: #007ac8;\n}\n")),(0,t.kt)("div",{className:"messages"},(0,t.kt)("div",{className:"messages--warning",role:"alert"},(0,t.kt)("span",{class:"material-icons","aria-hidden":"true"},"warning"),"\xa0 Remember: if you adjust ",(0,t.kt)("strong",null,"any")," colors, you need to make sure that you account for and test in both light and dark mode!")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'.some-container {\n    --h2-color: var(--blue);\n}\n[data-theme="dark"] .some-container {\n    --h2-color: var(--blue--lighter--20);\n} \n')),(0,t.kt)("h2",{id:"page-layout"},"Page layout"),(0,t.kt)("h3",{id:"spacing"},"Spacing"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--space--2xs: 0.25rem;\n--space--xs: 0.5rem;\n--space--sm: 0.75rem;\n--space--md: 1rem;\n--space--lg: 1.5rem;\n--space--xl: 2rem;\n--space--2xl: 3rem;\n--space--3xl: 4rem;\n")),(0,t.kt)("h3",{id:"content-areas"},"Content areas"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--content-area-max-width: 60rem; \n--content-area-max-width--sm: 40rem;\n")),(0,t.kt)("h3",{id:"content-area-grids"},"Content area grids"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--grid-columns--sm: var(--space--sm) 1fr var(--space--sm);\n--grid-columns--lg: 1fr var(--content-area-max-width) 1fr;\n")),(0,t.kt)("h2",{id:"decoration"},"Decoration"),(0,t.kt)("h3",{id:"borders-and-outlines"},"Borders and outlines"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--border-width--sm: 0.0625rem; \n--border-width--md: 0.125rem; \n--border-width--lg: 0.1875rem; \n--border-radius--roundest: 6.25rem;\n--border-radius--rounder: 0.625rem;\n--border-radius--round: 0.125rem;\n")),(0,t.kt)("h3",{id:"shadows"},"Shadows"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--shadow--hard: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.4),0 0.0625rem 0.125rem rgba(0, 0, 0, 0.5);\n--shadow--soft: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16),\n0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);\n--shadow--soft--hover: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.12),\n0 0.0625rem 0.125rem rgba(0, 0, 0, 0.24);\n--shadow--dark-mode: 0 0.1875rem 0.375rem rgba(0, 122, 200, 0.7),\n0 0.1875rem 0.375rem rgba(0, 63, 135, 0.9);\n--shadow--dark-mode--hover: 0 0.0625rem 0.1875rem rgba(0, 122, 200, 0.12),\n0 0.0625rem 0.125rem rgba(0, 63, 135, 0.24);\n")),(0,t.kt)("h3",{id:"icons"},"Icons"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--icon-size--2xs: 1rem;\n--icon-size--xs: 1.125rem;\n--icon-size--sm: 1.5rem;\n--icon-size--md: 2.25rem; \n--icon-size--lg: 3rem;\n")),(0,t.kt)("h3",{id:"touch-targets"},"Touch Targets"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--touch-target--min: 44px;\n")),(0,t.kt)("h3",{id:"logo"},"Logo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--logo-size: 8rem;\n--logo--horizontal--width: 25rem;\n--logo--horizontal--height: 6.25rem;\n")),(0,t.kt)("h3",{id:"forms"},"Forms"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--checkbox-size: 1rem;\n")),(0,t.kt)("h2",{id:"animation"},"Animation"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"--transition-speed--slow: 800ms;\n--transition-speed--md: 400ms;\n--transition-speed--fast: 200ms;\n--ease--standard: ease;\n")))}g.isMDXComponent=!0}}]);