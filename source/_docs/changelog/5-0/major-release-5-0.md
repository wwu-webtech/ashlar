---
slug: version-5
title: 'Major Update: Ashlar 5.0'
authors: [masons7]
tags: [major-release]
---

Why all the changes? As time passes, many new styles are introduced to the theme. Over time some things become a little cluttered, and some styles that were added strayed from the look and feel of the theme, and/or don't see much use. With this update we've removed some style variants for things like call to action links and cards, so that styles are more consistent across components. This reduces the complexity for the people who are managing the components, and has the added benefit of making the stylesheets smaller, which means pages load faster! 

That doesn't mean we don't want to keep innovating and adding new styles. In fact, it makes it easier, since we're starting from a relatively fresh slate and there are less style conflicts and bugs to worry about.

If you have any questions, or notice that something on your page looks broken as a result of the style changes, please reach out to Web.Help@wwu.edu or contact Stephanie directly.

## Front End Changes

### Fonts
Fira Sans Condensed has been removed for style consistency and improved menu readability

### Headings
Styles have been simplified. There are now only two sets, and both make use of the title case Montserrat for level 1 headings. You may still see other options in drop downs for block styles. These will be removed soon.

### Links
Link styles and borders in general have become a little less bold

### Call to Action links
Call to action links and button styles have been updated so that they are more differentiated visually. CTA styles have been simplified.

### Icons
Icon with text style removed as an atom, so that icons line up with text horizontally by default.

### Forms
Mostly technical updates:
    * Rather than have form styles spread across atoms and molecules, they have all been moved into atoms.
    * Restyle checkboxes & radios to use pure css, no images needed

### Cards 
We no longer support styles for the following card variants:

* Solid Round Blue/Green
* Tag tile
* Simple
* Information/Split Information

Anywhere these variants are used will revert to the basic card styles.

### Ribbon
This component's styles have been removed

### Lightbox
Has been replaced with Modal, which is a simplified custom element

### Navigation
The Link List style has been removed (not widely used, has been replaced on pages it was used on)

### Schedule
Round edges option removed

### Statistics
The markup and CSS for these has been simplified. Drupal blocks will update automatically, but any existing custom markup will need to be replaced.

### Switcher
Styles have been updated to better match other component styles

### Western Header
Some small style adjustments, the site name is now larger

### Western Footer
Has been rearranged. All of the links now appear in a nav bar at the bottom.

## Back End Changes

Lots of code changes on the back end! Many things have been simplified, reorganized, and condensed.

One big change is that we are now using CSS variables to set things like link colors and font sizes. This makes inheritence a lot more logical, so that a lot less overrides are needed to make sure that things like contrast and font sizes are maintained when different user preferences are set, or in different situations like when a background color changes. This means less lines of code overall, and a lot less edge cases to fix (hopefully!)

Another technical change is that we've converted nearly all of our jQuery to vanilla javscript, and many of our components are now available as custom web elements.

Some class names and helper class names have changed. This will not affect any native Drupal blocks, but if you have custom styles, you may need to update them.

* The "button" class is no longer supported for links. Use "cta" instead.
* .block-- has been updated to .wwu-
* .block__title has been updated to .title


Moved .html.twig templates out of the _docs/patterns folders and direclty into the templates folder. Since these are no longer being used for both the component library and Drupal, it makes more sense to me to keep them with the Drupal only side of things. This does make them a little less reusable, though, so if two different things in Drupal use them, you'll have to put the template in both places. (For example, banner blocks and banner paragraphs)

No more need for yaml files!

Breakpoint has been removed, using vanilla CSS media queries now. (Note that the variables are still referred to as breakpoints, we're just not using the sass plugin anymore)

Support for IE has been removed (eg no more -ms- prefixes cluttering things up)

I want to revisit Flow & Org charts, so they're currently hidden in html files so they won't show up in the docs

Since the webform progress tracker tend to break anwyay, I overwrote the template so it just uses our library and redid the styles

My general logic for what does or doesn't become a custom element/web component is basically if it otherwise needs javascript to function. So Accordions require javascript one way or another, so they're now a custom element. Whereas schedules have somewhat detailed markup, but javascript isn't required for their functionality or display, so leaving those out for now. Eventually we may want to make those into custom elements with `<noscript>` sections in the templates, but for now I'm just leaving them as markup. I've also made some non front-end things into custom elements just for ease of documentation, like background colors.


## Documentation Changes
We are also using Docusaurus for our documentation, so the way theme files have been organized has changed. This mostly only affects the WebTech team's workflow, but for the curious: We are still using atomic file organization, but the patterns have moved from source/_patterns into ashlar/source/_docs/patterns. Because docuasaurus does not use twig, most of our twig templating code has been moved direclty into the twig template files in the ashlar/templates folder. The exception are those that are frequently reused (like labels and page templates.) Those now live in the 04-templates folder. Everything from 03-organisms on down is documented in a markdown file, with the accompanying stylesheets in the same folder. There are some components/styles that are not documented--typically miscelaneous Drupal-specific things (for example, off-canvas, page-title, beyond-basics-blocks)

## Todo
* update markup on degree view on homepage majors pages
* find any flowcharts and update their markup/attach the library, or make a block type
* Fix countdown config form display (add fields) and display (nothing should be displayed)
* Fix/simplify markup on event lists... maybe update styles too
* Remove video and link fields from headline config
