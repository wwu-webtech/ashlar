"use strict";(self.webpackChunkashlar_docs=self.webpackChunkashlar_docs||[]).push([[536],{6735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=t(5893),a=t(1151);const i={slug:"version-5",title:"Major Upcoming Update: Ashlar 5.0",authors:["masons7"],tags:["major-release"],date:"2023-05-01T10:00"},o=void 0,l={permalink:"/changelog/version-5",source:"@site/changelog/5-0/major-release-5-0.md",title:"Major Upcoming Update: Ashlar 5.0",description:"Ashlar is the university's Drupal theme, and basis for its component library/design system and Brand and Communication Guide. And it is getting a major update this month!",date:"2023-05-01T10:00:00.000Z",formattedDate:"May 1, 2023",tags:[{label:"major-release",permalink:"/changelog/tags/major-release"}],hasTruncateMarker:!1,authors:[{name:"Stephanie Paulantis",title:"Front End Developer/Designer",imageURL:"https://www.wwu.edu/files/styles/profile_image/public/pictures/2019-12/profile.jpg",key:"masons7"}],frontMatter:{slug:"version-5",title:"Major Upcoming Update: Ashlar 5.0",authors:["masons7"],tags:["major-release"],date:"2023-05-01T10:00"},unlisted:!1,prevItem:{title:"5.0.x Updates",permalink:"/changelog/version-5-0"},nextItem:{title:"4.6.x Updates",permalink:"/changelog/version-4-6"}},r={authorsImageUrls:[void 0]},h=[{value:"Front End Changes",id:"front-end-changes",level:2},{value:"Call to Action links and Buttons",id:"call-to-action-links-and-buttons",level:3},{value:"Old Call to Action Links",id:"old-call-to-action-links",level:4},{value:"New Call to Action Links",id:"new-call-to-action-links",level:4},{value:"Old Buttons",id:"old-buttons",level:4},{value:"New Buttons",id:"new-buttons",level:4},{value:"Cards",id:"cards",level:3},{value:"Font/Text Changes",id:"fonttext-changes",level:3},{value:"Condensed Fonts Removed",id:"condensed-fonts-removed",level:4},{value:"Headings",id:"headings",level:4},{value:"Links",id:"links",level:3},{value:"Old Link Styles",id:"old-link-styles",level:4},{value:"New Link Styles",id:"new-link-styles",level:4},{value:"Forms",id:"forms",level:3},{value:"Icons",id:"icons",level:3},{value:"Lightbox",id:"lightbox",level:3},{value:"Link List",id:"link-list",level:3},{value:"Ribbon",id:"ribbon",level:3},{value:"Schedule",id:"schedule",level:3},{value:"Social Media Icons",id:"social-media-icons",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Switcher",id:"switcher",level:3},{value:"Old Switcher",id:"old-switcher",level:4},{value:"New Switcher",id:"new-switcher",level:4},{value:"Tables",id:"tables",level:3},{value:"Western Header",id:"western-header",level:3},{value:"Old Header",id:"old-header",level:4},{value:"New Header",id:"new-header",level:4},{value:"Western Footer",id:"western-footer",level:3},{value:"Old Footer",id:"old-footer",level:4},{value:"New Footer",id:"new-footer",level:4},{value:"Back End Changes",id:"back-end-changes",level:2},{value:"CSS Updates",id:"css-updates",level:3},{value:"Helper Class Changes",id:"helper-class-changes",level:3},{value:"File Reorganization",id:"file-reorganization",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Ashlar is the university's Drupal theme, and basis for its ",(0,s.jsx)(n.a,{href:"/patterns/overview",children:"component library/design system"})," and ",(0,s.jsx)(n.a,{href:"https://brand.wwu.edu",children:"Brand and Communication Guide"}),". And it is getting a major update this month!"]}),"\n",(0,s.jsxs)(n.p,{children:["Many of the updates are under the  hood. We have refactored almost all the SASS/CSS and Javascript, take advantage of the latest features those languages. We  have also completely redone the documentation and pattern library. We are moving away from Pattern Lab (which hasn't seen many update and is  starting to fall out of maintenance) and into ",(0,s.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),"  (the website you're looking at now.)"]}),"\n",(0,s.jsx)(n.p,{children:"There have also been some changes  that you will see reflected in the visual styles on Drupal sites. Most  of these are minor, like subtle changes to heading and other text  styles."}),"\n",(0,s.jsx)(n.p,{children:"Some will be more noticeable, like changes to some card  styles and Call to Action links. In this post, we outline what to expect."}),"\n",(0,s.jsx)(n.p,{children:"We don't have an exact timeline for deploying this update, but you can expect to see the changes on Development sites in March, and on Production sites in late March or early April."}),"\n",(0,s.jsx)(n.h2,{id:"front-end-changes",children:"Front End Changes"}),"\n",(0,s.jsx)(n.p,{children:"These are the style changes that have been made in the theme, that you will probably notice on Western's Drupal websites."}),"\n",(0,s.jsx)(n.h3,{id:"call-to-action-links-and-buttons",children:"Call to Action links and Buttons"}),"\n",(0,s.jsxs)(n.p,{children:["This is one of the biggest style changes. ",(0,s.jsx)(n.strong,{children:"Call to action links"})," (or CTAs) have been update so that they no longer resemble buttons. The number of CTA style variants have also been reduced."]}),"\n",(0,s.jsxs)(n.p,{children:["There is an important reason for this change, but it is somewhat technical. In short, links (eg ",(0,s.jsx)(n.code,{children:"<a>"})," elements) and buttons (eg ",(0,s.jsx)(n.code,{children:"<button>"})," elements) are semantically different in HTML. This means that assistive technology announces them differently, and they have different interactive behaviors. For sited, mouse-using folks, these differences aren't readily apparent. This means that when links are styled to ",(0,s.jsx)(n.em,{children:"look like"})," buttons, they get ",(0,s.jsx)(n.em,{children:"called"})," buttons. But when they are called buttons, it can (and does) create confusion for assistive technology users\u2013particularly users who are site impaired and cannot see the visual button styles. In order reduce the barriers produced by that visual styling, we have opted to re-do call to action styles so that they visually resemble links, while still standing out on page to call attention to the text."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're interested in learning more about this, we recommend reading the article ",(0,s.jsx)(n.a,{href:"https://www.isoftstoneinc.com/insights/knowledge-leader/call-to-action-links-are-not-buttons/",children:"A call to action \u2013 links are not buttons"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Along with this change, we have also refreshed the actual semantic ",(0,s.jsx)(n.code,{children:"<button>"})," styles."]}),"\n",(0,s.jsx)(n.h4,{id:"old-call-to-action-links",children:"Old Call to Action Links"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of old CTA styles, which looked like buttons",src:t(2748).Z+"",width:"458",height:"84"})}),"\n",(0,s.jsx)(n.h4,{id:"new-call-to-action-links",children:"New Call to Action Links"}),"\n",(0,s.jsx)("a",{href:"#",className:"cta",children:"Call to Action"}),"\n",(0,s.jsx)("a",{href:"#",className:"cta blue",children:"CTA with .blue class"}),"\n",(0,s.jsx)(n.h4,{id:"old-buttons",children:"Old Buttons"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot of old button styles",src:t(3667).Z+"",width:"651",height:"60"})}),"\n",(0,s.jsx)(n.h4,{id:"new-buttons",children:"New Buttons"}),"\n",(0,s.jsx)("button",{children:"Button"}),"\n",(0,s.jsx)("button",{class:"warning",children:"With .warning class"}),"\n",(0,s.jsx)("button",{disabled:!0,children:"Disabled Button"}),"\n",(0,s.jsxs)("div",{class:"wwu-announcement font-size--smaller",children:[(0,s.jsx)("span",{class:"material-icons","aria-hidden":"true",children:"warning"}),(0,s.jsx)("div",{class:"body",children:(0,s.jsxs)("p",{children:["It can take some time for us to get configuration on Drupal user interfaces synced up with theme changes. You may still notice block types referred to as ",(0,s.jsx)("strong",{children:"Button"})," or ",(0,s.jsx)("strong",{children:"Image Button"})," when they should actually be ",(0,s.jsx)("strong",{children:"Call to Action Link"})," and ",(0,s.jsx)("strong",{children:"Image Link."})," Please don't hesitate to ",(0,s.jsx)("a",{href:"mailto:web.help@wwu.edu",children:"get in touch"})," if you notice this discrepency!"]})})]}),"\n",(0,s.jsx)(n.h3,{id:"cards",children:"Cards"}),"\n",(0,s.jsx)(n.p,{children:"This is the other major change. We no longer support styles for the following card variants:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Solid Round Blue/Green"}),"\n",(0,s.jsx)(n.li,{children:"Tag tile"}),"\n",(0,s.jsx)(n.li,{children:"Simple"}),"\n",(0,s.jsx)(n.li,{children:"Information/Split Information"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Old solid blue style",src:t(6218).Z+"",width:"431",height:"437"}),"\n",(0,s.jsx)(n.img,{alt:"Old tag style card",src:t(868).Z+"",width:"432",height:"306"}),"\n",(0,s.jsx)(n.img,{alt:"Old simple card",src:t(2590).Z+"",width:"432",height:"417"}),"\n",(0,s.jsx)(n.img,{alt:"Old info style card",src:t(3408).Z+"",width:"433",height:"523"})]}),"\n",(0,s.jsxs)(n.p,{children:["Anywhere these variants are used will revert to the ",(0,s.jsx)(n.a,{href:"/patterns/molecules/card",children:"basic card styles"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"fonttext-changes",children:"Font/Text Changes"}),"\n",(0,s.jsx)(n.h4,{id:"condensed-fonts-removed",children:"Condensed Fonts Removed"}),"\n",(0,s.jsx)(n.p,{children:"Fira Sans Condensed has been removed for style consistency and improved menu readability. This will be most noticeable in the main navigation."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Old main navigation, with condensed font",src:t(179).Z+"",width:"416",height:"76"}),"\n",(0,s.jsx)(n.img,{alt:"New main navigation, with regular font",src:t(2140).Z+"",width:"532",height:"76"})]}),"\n",(0,s.jsx)(n.h4,{id:"headings",children:"Headings"}),"\n",(0,s.jsxs)(n.p,{children:["Styles have been simplified. There are now only ",(0,s.jsx)(n.a,{href:"/patterns/atoms/headings",children:"two variations"})," for headings, and both make use of the title case Montserrat for level 1 headings."]}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.p,{children:"Link styles and borders in general have become a little less bold."}),"\n",(0,s.jsx)(n.h4,{id:"old-link-styles",children:"Old Link Styles"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Old link styles",src:t(4827).Z+"",width:"521",height:"204"})}),"\n",(0,s.jsx)(n.h4,{id:"new-link-styles",children:"New Link Styles"}),"\n",(0,s.jsxs)("div",{children:["This ",(0,s.jsx)("a",{href:"#",children:"link"})," appears outside of a paragraph."]}),"\n",(0,s.jsxs)("p",{children:["This is a ",(0,s.jsx)("a",{href:"#",children:"link is very long, (it may overlap in smaller containers) has a descenders (yjgpq)"})," and is in a regular paragraph of text."]}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"This is a list of links"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"It is not styled as a menu"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"It just has a lot of links"})})]}),"\n",(0,s.jsx)(n.h3,{id:"forms",children:"Forms"}),"\n",(0,s.jsx)(n.p,{children:"Minor style updates, particularly with radios and checkboxes which no longer rely on images."}),"\n",(0,s.jsx)(n.h3,{id:"icons",children:"Icons"}),"\n",(0,s.jsxs)(n.p,{children:["Icon with text style removed as an atom. Instead, icons line up with text horizontally by default:\n",(0,s.jsxs)("a",{href:"#",class:"icon-link",children:[(0,s.jsx)("span",{class:"material-icons","aria-hidden":"true",children:"home"}),"Home"]}),"\n",(0,s.jsxs)("a",{href:"#",class:"icon-link",children:[(0,s.jsx)("span",{class:"material-icons","aria-hidden":"true",children:"how_to_reg"}),"Apply"]})]}),"\n",(0,s.jsx)(n.h3,{id:"lightbox",children:"Lightbox"}),"\n",(0,s.jsxs)(n.p,{children:["Has been replaced with ",(0,s.jsx)(n.a,{href:"/patterns/molecules/dialog",children:"Dialog"})]}),"\n",(0,s.jsx)(n.h3,{id:"link-list",children:"Link List"}),"\n",(0,s.jsx)(n.p,{children:"The Link List style has been removed (not widely used, this has already been replaced on pages it was used on)"}),"\n",(0,s.jsx)(n.h3,{id:"ribbon",children:"Ribbon"}),"\n",(0,s.jsx)(n.p,{children:"This style has been removed."}),"\n",(0,s.jsx)(n.h3,{id:"schedule",children:"Schedule"}),"\n",(0,s.jsx)(n.p,{children:"Round edges option has been removed."}),"\n",(0,s.jsx)(n.h3,{id:"social-media-icons",children:"Social Media Icons"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/patterns/atoms/icons/social-media-icons",children:"custom element has been created for social media icons"}),", to simplify the markup, and the styles have changed slightly. Old instances of social media markup will still be supported, but we recommend switching to the new markup and styles at your earliest convenience."]}),"\n",(0,s.jsx)(n.h3,{id:"statistics",children:"Statistics"}),"\n",(0,s.jsx)(n.p,{children:"The markup and CSS for these has been simplified. Drupal blocks will update automatically, but any existing custom markup will need to be replaced."}),"\n",(0,s.jsx)(n.h3,{id:"switcher",children:"Switcher"}),"\n",(0,s.jsx)(n.p,{children:"Styles have been updated to better match other component styles. There is also a column layout available now."}),"\n",(0,s.jsx)(n.h4,{id:"old-switcher",children:"Old Switcher"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"old switcher styles",src:t(3250).Z+"",width:"879",height:"139"})}),"\n",(0,s.jsx)(n.h4,{id:"new-switcher",children:"New Switcher"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"new switcher styles",src:t(4510).Z+"",width:"874",height:"128"})}),"\n",(0,s.jsx)(n.h3,{id:"tables",children:"Tables"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/patterns/atoms/tables",children:"Tables"})," are a little lighter by default, with less contrast between cells. Table styles in dark mode have been improved as well."]}),"\n",(0,s.jsx)(n.h3,{id:"western-header",children:"Western Header"}),"\n",(0,s.jsx)(n.p,{children:"On both mobile and desktop, the styes for fonts and icons have inherited change from elsewhere in the theme. The site name is also now larger on desktops."}),"\n",(0,s.jsx)(n.h4,{id:"old-header",children:"Old Header"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Screenshot of older header styles on small screens",src:t(5271).Z+"",width:"499",height:"209"}),"\n",(0,s.jsx)(n.img,{alt:"Older header styles on large screens",src:t(7522).Z+"",width:"1191",height:"182"})]}),"\n",(0,s.jsx)(n.h4,{id:"new-header",children:"New Header"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New header styles on large screens",src:t(1415).Z+"",width:"1513",height:"171"})}),"\n",(0,s.jsx)(n.h3,{id:"western-footer",children:"Western Footer"}),"\n",(0,s.jsx)(n.p,{children:"The footer has been rearranged, and links have been placed at the bottom of the page."}),"\n",(0,s.jsx)(n.h4,{id:"old-footer",children:"Old Footer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Older footer styles, with content in three columns",src:t(4436).Z+"",width:"1338",height:"358"})}),"\n",(0,s.jsx)(n.h4,{id:"new-footer",children:"New Footer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New footer styles, with content stacked in a single column",src:t(8642).Z+"",width:"1512",height:"427"})}),"\n",(0,s.jsx)(n.h2,{id:"back-end-changes",children:"Back End Changes"}),"\n",(0,s.jsx)(n.p,{children:"There have been a LOT of code changes on the back end. Many things have been simplified, reorganized, and condensed."}),"\n",(0,s.jsx)(n.h3,{id:"css-updates",children:"CSS Updates"}),"\n",(0,s.jsx)(n.p,{children:"One big change is that we are now using CSS variables to set things like link colors and font sizes. This makes inheritence a lot more logical, so that a lot less overrides are needed to make sure that things like contrast and font sizes are maintained when different user preferences are set, or in different situations like when a background color changes."}),"\n",(0,s.jsx)(n.p,{children:"Another technical change is that we've converted nearly all of our jQuery to vanilla javscript, and many of our components are now available as custom web elements."}),"\n",(0,s.jsx)(n.p,{children:"The SASS module Breakpoint has been removed. We are now using vanilla CSS media queries. (Note that the variables are still referred to as breakpoints, we're just not using the sass plugin anymore)"}),"\n",(0,s.jsx)(n.p,{children:"Support for IE has been removed (eg no more -ms- prefixes cluttering things up)."}),"\n",(0,s.jsxs)(n.p,{children:["These changes, along with dropping out some extra style variants, has lead to a great overall improvement in the file size for our compiled stylesheets. Our ",(0,s.jsx)(n.strong,{children:"ashlar-base.css"})," stylesheet will go from  ",(0,s.jsx)(n.strong,{children:"11,544"})," lines of code, and ",(0,s.jsx)(n.strong,{children:"796 kb"})," to ",(0,s.jsx)(n.strong,{children:"5991"})," lines of code, and ",(0,s.jsx)(n.strong,{children:"452 kb"})," on this release."]}),"\n",(0,s.jsx)(n.h3,{id:"helper-class-changes",children:"Helper Class Changes"}),"\n",(0,s.jsx)(n.p,{children:"Some class names and helper class names have changed. This will not affect any native Drupal blocks, but if you have custom styles, you may need to update them."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'The "button" class is no longer supported for links. Use "cta" instead.'}),"\n",(0,s.jsx)(n.li,{children:".block-- has been updated to .wwu-"}),"\n",(0,s.jsx)(n.li,{children:".block__title has been updated to .title"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"file-reorganization",children:"File Reorganization"}),"\n",(0,s.jsx)(n.p,{children:"We moved .html.twig templates out of the _docs/patterns folders and directly into the templates folder. Since these are no longer being used for both the component library and Drupal, it makes more sense to me to keep them in the Drupal-only part of the theme files. This makes the templates a little less reusable, but easier to find."}),"\n",(0,s.jsx)(n.p,{children:"With the move away from Pattern Lab, we no longer need YAML files. Component documentation lives in Markdown files, alongside the SASS and any Javascript for a component."}),"\n",(0,s.jsx)(n.p,{children:"We have also continued to convert components to Custom Elements (eg Web Components, but without shadow DOMs). Generally, anything that requires Javascript to function outside of being a web component (like a content switcher or an accordion) will be scripted as a custom element. What this means is that markup for these types of elements has been greatly simplified, so that they are easier to implement across different platforms. For example, a content switcher previously needed the following markup:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<div class="block--content-switcher" id="example">\n  <div class="content-switcher" role="tablist" aria-label="Title of Content Switcher">\n  </div>\n  \n  <div class="content-switcher-container">    \n    <button class="switch-1" role="tab" id="switch-button-1" title="switch-button-1" aria-controls="switch-content-1">\n      Content 1\n    </button>\n    \n    <div class="switch-1 content" role="tabpanel" id="switch-content-1" aria-labelledby="switch-button-1" tabindex="0">\n      We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.\n    </div>\n    \n    <button class="switch-2" role="tab" id="switch-button-2" title="switch-button-2" aria-controls="switch-content-2">\n      Content 2\n    </button>\n    \n    <div class="switch-2 content" role="tabpanel" id="switch-content-2" aria-labelledby="switch-button-2" tabindex="0">\n      If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.\n    </div>\n    \n    <button class="switch-3" role="tab" id="switch-button-3" title="switch-button-3" aria-controls="switch-content-3">\n      Content 3\n    </button>\n    \n    <div class="switch-3 content" role="tabpanel" id="switch-content-3" aria-labelledby="switch-button-3" tabindex="0">\n      Astronomy compels the soul to look upward, and leads us from this world to another.\n    </div>\n  </div>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, the same switcher can be marked up as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<wwu-accordion>\n    <wwu-accordion-item label="Cats" heading-level="h3">\n        <p>Purr when being pet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand this is the day hell is other people meowwww. Jump five feet high and sideways when a shadow moves naughty running cat or crash against wall but walk away like nothing happened scratch the box your pillow is now my pet bed. Lick human with sandpaper tongue miaow then turn around and show you my bum rub face on everything. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bleghbleghvomit my furball really tie the room together mew hunt anything. Lick plastic bags disappear for four days and return home with an expensive injury; bite the vet but scratch leg; meow for can opener to feed me for shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff eats owners hair then claws head but sleep over your phone and make cute snoring noises. Trip owner up in kitchen i want food human give me attention meow.</p>\n    </wwu-accordion-item>\n    <wwu-accordion-item label="Dogs" heading-level="h3">\n        <p>Doggo ipsum blep corgo doggo smol borking doggo with a long snoot for pats, the neighborhood pupper what a nice floof boofers, wow very biscit he made many woofs. Boofers thicc fluffer big ol very taste wow extremely cuuuuuute, blep thicc clouds shooberino, vvv extremely cuuuuuute ruff waggy wags. You are doin me a concern bork what a nice floof fluffer puggorino, very hand that feed shibe pupper smol borking doggo with a long snoot for pats pupper, heckin good boys and girls shooberino sub woofer. Blep yapper big ol pupper very hand that feed shibe big ol, doggorino blep doing me a frighten.  Doing me a frighten adorable doggo ruff ur givin me a spook waggy wags, what a nice floof waggy wags noodle horse, shoober doge pupperino.</p>\n    </wwu-accordion-item>\n    <wwu-accordion-item label="Fish" heading-level="h3">\n        <p>Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</p>\n    </wwu-accordion-item>\n</wwu-accordion>\n'})}),"\n",(0,s.jsx)(n.p,{children:"There are some components (such as Announcements and Cards) that don't require Javascript for their basic functionality. We have opted for less Javascript over simplified markup, though this may change in the future."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Why the changes? As time passes,  many new styles (and their accompanying code) get introduced to the  theme. Some components become cluttered with many style  variants. Some of those style options get added that strayed from the look and  feel of the theme, and/or don't see much use."}),"\n",(0,s.jsx)(n.p,{children:"We've removed certain style variations so that there is more consistency across the theme. This reduces the  complexity for the people who are managing the components. It also reduces the  amount of CSS, which means pages load faster."}),"\n",(0,s.jsx)(n.p,{children:"That doesn't  mean we don't want to keep innovating and adding new styles. In fact,  simplifying makes this easier to do. We're  starting from a fresh slate, which means there are less style  conflicts and bugs to worry about."}),"\n",(0,s.jsxs)(n.p,{children:["If you have any questions, or  notice that something on your page that doesn't just look different, but looks brokenplease reach out to ",(0,s.jsx)(n.a,{href:"mailto:Web.Help@wwu.edu",children:"Web.Help@wwu.edu"})," or contact ",(0,s.jsx)(n.a,{href:"mailo:masons7@wwu.edu",children:"Stephanie"})," directly."]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3408:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/info-card-d1821d2a351940600ea6f5047ede2bde.png"},8642:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/new-footer-7940c73aa0bb2c9e6735a49b772c3aed.png"},1415:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/new-header-3f31dfa2e4b12de94cea199d43355e36.png"},2140:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/new-main-nav-0ee54eb289d9ac410b8081ebf15d1ccf.png"},4510:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/new-switcher-98315401eca8195c3fa80d4df646f45e.png"},3667:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-buttons-ee688f371e34ae7fbc95d23231f3bec9.png"},2748:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-cta-dda3e8566b38cfa0ab9ec4325fbed8be.png"},7522:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-desktop-header-39cd28d16d52867c424017c035b6d251.png"},4436:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-footer-92eb06221b9a124b7f36cd24f7745003.png"},4827:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-links-7f4bb0392ef54dd931e6c09b939554ac.png"},179:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-main-nav-44f256c24e4daf7422fd9806322e6b01.png"},5271:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-mobile-header-6eeabe0aad4dd414f9eb3df278e35f1e.png"},3250:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/old-switcher-c55b64dec25c1b61e3427523483fd4a1.png"},6218:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/round-card-1bd54451a137f6cc2b32aff30f8bd251.png"},2590:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/simple-card-5768ea7c25e49cb24781fd7bd1545638.png"},868:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tag-card-6b612c46f7a8823c51648de56512456d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);