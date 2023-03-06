---
slug: version-2
title: 'Major Update: Ashlar 2.0'
authors: [masons7, gerardc]
tags: [major-release]
date: 2019-06-17T10:00
---

* In Drupal, two custom block fields will no longer be functional: field_button_size and field_button_style
    * Instead, the plain text field_custom_classes can be used to manually inject the style classes
    * There is now the option to also style buttons as round or square
    * True `<button>` elements have different styles than `<a>` elements with the button class
* Testimonials and image buttons have received new styles
* New quote style available, along with a custom block type for it
* There is also an additional testimonial style that can be used by adding the "testimonial--full-page" class to the custom class field on testimonial blocks
* Additional font tweaks made, "title-font-heading" class is now available
* Statistics and statistics collection styles added
* Styles added for creating half & full page blocks (these span outside of the normal maximum content area)
* Classes & styles added to easily use images in blocks as backgrounds, and to add colored overlays to them (see pattern lab atoms)
* Secondary site name can now be used as a custom block
* Bug fixes, versions 2.0.1, 2.0.2, 2.0.3
