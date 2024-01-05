import WWUMainNav from "./main-navigation.js"

# Main Navigation
Utilizes Ultimenu for generating the markup and region management in Drupal, and Adobe Megamenu for the interactions/accessibility. 
The megamenu script cannot currently be loaded in the documentaion, so this is a preview for styles only. 

<wwu-main-nav>
<a href="#place1a">Menu item 1</a>

<wwu-has-children label="Parent Item 1">
<wwu-sub-menu>
<a href="#place1b">Parent 1 Item 1</a>
<a href="#place1b">Parent 1 Item two</a>
<a href="#place1b">Parent One Item 3</a>
<a href="#place1b">Parent 1 Item 4</a>
</wwu-sub-menu>
</wwu-has-children>

<a href="#place2">Menu item 3</a>

<wwu-has-children label="Parent Item 2">    

<wwu-sub-menu label="Sub Menu 1">
<a href="#place1b">Parent 2 Sub Menu 1 Item 1</a>
<a href="#place1b">Parent 2 Sub Menu 1 Item 2</a>
<a href="#place1b">Parent 2 Sub Menu 1 Item 3</a>
<a href="#place1b">Parent 2 Sub Menu 1 Item 4</a>
</wwu-sub-menu>

<wwu-sub-menu label="Sub Menu 2">
<a href="#place1b">Parent 2 Sub Menu 2 Item 1</a>
<a href="#place1b">Parent 2 Sub Menu 2 Item 2</a>
<a href="#place1b">Parent 2 Sub Menu 2 Item 3</a>
<a href="#place1b">Parent 2 Sub Menu 2 Item 4</a>
</wwu-sub-menu>

</wwu-has-children>
</wwu-main-nav>


```
<wwu-main-nav>
  <a href="#place1a">Menu item 1</a>

  <wwu-has-children label="Parent Item 1">
    <wwu-sub-menu>
      <a href="#place1b">Parent 1 Item 1</a>
      <a href="#place1b">Parent 1 Item two</a>
      <a href="#place1b">Parent One Item 3</a>
      <a href="#place1b">Parent 1 Item 4</a>
    </wwu-sub-menu>
  </wwu-has-children>

  <a href="#place2">Menu item 3</a>

  <wwu-has-children label="Parent Item 2">

    <wwu-sub-menu label="Sub Menu 1">
      <a href="#place1b">Parent 2 Sub Menu 1 Item 1</a>
      <a href="#place1b">Parent 2 Sub Menu 1 Item 2</a>
      <a href="#place1b">Parent 2 Sub Menu 1 Item 3</a>
      <a href="#place1b">Parent 2 Sub Menu 1 Item 4</a>
    </wwu-sub-menu>

    <wwu-sub-menu label="Sub Menu 2">
      <a href="#place1b">Parent 2 Sub Menu 2 Item 1</a>
      <a href="#place1b">Parent 2 Sub Menu 2 Item 2</a>
      <a href="#place1b">Parent 2 Sub Menu 2 Item 3</a>
      <a href="#place1b">Parent 2 Sub Menu 2 Item 4</a>
    </wwu-sub-menu>

  </wwu-has-children>
</wwu-main-nav>
```