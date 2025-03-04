# Helpers

Ashlar has a variety of helper classes that can be used on various components or parts of sites to make adjustments to things like spacing and layout. We also have styles in this section of the theme for fixing things like administration theme display bugs. This is an overview of what custom classes are available/what they do. If anything isn't working as expected, or you have a request for a helper class not found here, contact [WebTech](mailto:web.help@wwu.edu);

## Administration Theme
Not custom classes, but in the theme there are some styles to improve Drupal's administration theme and fix display bugs. If you notice something weird happening in the user interface while editing sites, get in touch with [WebTech](mailto:web.help@wwu.edu), we can probably fix it!

## Alignment
These are the custom classes available for adjusting alignment. There are many ways to align things in CSS, and some alignment methods are incompatible with others, so you may need to experiment with which element these classes are placed on to get the desired effect.

* align-right 
* align-left 
* align-center 
* text-align-left 
* text-align-center 
* text-align-right
* media-align-center 
* media-stretch
* media-align-left
* media-align-right 

## Columns
These classes can be placed on content containers to create columns. The column-count-- classes use CSS columns, and the grid-column-count-- classes use CSS grids. There are a lot of nuances as to why you'd use one over the other, but in general you will want to use the column-count-- classes for large blocks of text, and the grid columns for smaller chunks of content (like cards). 

* column-count--2
* column-count--3
* column-count--4
* column-count--5
* column-count--6
* grid-column-count--2
* grid-column-count--3
* grid-column-count--4
* grid-column-count--5
* grid-column-count--6

## Images
Class for image captions

* caption

## Overlays
These classes are useful for improving contrast between text and background images for banners, image CTAs, etc.

* image-darker---10
* image-darker---20
* image-darker---30
* image-darker---40
* image-darker---50
* image-darker---60
* image-darker---70
* image-darker---80
* image-darker---90

## Print
Use this class to prevent an element from showing up on the print version of a site (for example, decorative elements that take up a lot of space)

* no-printing

## Size
These classes how much horizontal or vertical space an element takes up.

* full-width
* full-height
* min-height--25vh
* min-height--50vh
* min-height--75vh
* min-height--100vh
* max-width--content
* max-width--content--sm
* full-vw

## Space
These can be used to add additional margin or padding to an element.

* half-margin
* half-margin--top
* half-margin--right
* half-margin--bottom
* half-margin--left
* standard-margin
* standard-margin--top
* standard-margin--right
* standard-margin--bottom
* standard-margin--left
* double-margin
* double-margin--top
* double-margin--right
* double-margin--bottom
* double-margin--left
* no-margin
* no-margin--top
* no-margin--right
* no-margin--bottom
* no-margin--left
* half-padding
* half-padding--top
* half-padding--right
* half-padding--bottom
* half-padding--left
* standard-padding
* standard-padding--top
* standard-padding--right
* standard-padding--bottom
* standard-padding--left
* double-padding
* double-padding--top
* double-padding--right
* double-padding--bottom
* double-padding--left
* no-padding
* no-padding--top
* no-padding--right
* no-padding--bottom
* no-padding--left

These vertical-space-- classes can be used to add additional white space between items on large displays. This additional white space will disappear on mobile displays, which is often the desired effect: more breathing room on large displays, without unusual/seemingly random gaps on small displays. These classes are what the "white space" custom blocks in layout builder are using. 

* vertical-space--1x
* vertical-space--2x
* vertical-space--3x
* vertical-space--4x
* vertical-space--5x
* vertical-space--6x
* vertical-space--7x
* vertical-space--8x

Lists can also be given breathing room by adding the "spaced" class to the ul element

`<ul class="spaced">`

## Text
Classes to alter the font or styling of text. Be conscious of potential accessibility issues when using these classes: for example, do not use italic on large bodies of text as it negatively affects readability.

* font--sans-serif
* font--serif
* font--title-font
* bold
* italic
* uppercase
* lowercase
* tagline
* font-size--smaller
* font-size--larger
* word-break--all

## Video
When embedding video on a page, adding the following wrapper will make the iframe responsive:

```
<div class="embed-container">
    <!-- your embed code goes here -->
</div>
```

## Visually Hidden
Sometimes you need things in the DOM, but you don't want them visible on the page. Use the **visually-hidden** class to accomplish this affect. Be sure you are doing this in an accessible way!


