# Overlays

import CampusImage from '@site/static/img/sampleheader.jpg';

Overlays can be used to shade a block. They're typically used in conjunction with a block containing an image wrapped with the "background-image" class. When using an overlay, it's helpful to also set the block's background color with a background color class, so that the block inherits font colors and styles correctly. For example, for a blue background block, use class="blue-bg blue-overlay"

## Blue

<div className="wwu-banner blue-overlay min-height--25vh">
 <div className="body"> <p>This block has a blue overlay.</p></div>
  <div className="background-image">
    <img src={CampusImage} alt="aerial view of campus"/>
  </div>
</div>

```
<div class="wwu-banner blue-overlay">
  <div class="body"><p>This block has a blue overlay.</p></div>
  <div class="background-image">
    <img src="img-src.jpg" alt="descriptive alt text">
  </div>
</div>
```

## Dark-Blue

<div className="wwu-banner dark-blue-overlay min-height--25vh">
  <div className="body"><p>This block has a dark blue overlay.</p></div>
  <div className="background-image">
    <img src={CampusImage} alt="aerial view of campus"/>
  </div>
</div>

```
<div class="wwu-banner dark-blue-overlay">
  <div class="body"><p>This block has a dark blue overlay.</p></div>
  <div class="background-image">
    <img src="img-src.jpg" alt="descriptive alt text">
  </div>
</div>
```

## Black

<div className="wwu-banner black-overlay min-height--25vh">
  <div className="body"><p>This block has a black overlay.</p></div>
  <div className="background-image">
    <img src={CampusImage} alt="aerial view of campus"/>
  </div>
</div>

```
<div class="wwu-banner black-overlay min-height--25vh">
  <div class="body"><p>This block has a black overlay.</p></div>
  <div class="background-image">
    <img src="img-src.jpg" alt="descriptive alt text">
  </div>
</div>
```

## Gray

<div className="wwu-banner gray-overlay min-height--25vh">
  <div className="body"><p>This block has a gray overlay.</p></div>
  <div className="background-image">
    <img src={CampusImage} alt="aerial view of campus"/>
  </div>
</div>

```
<div class="wwu-banner gray-overlay">
  <div class="body"><p>This block has a gray overlay.</p></div>
  <div class="background-image">
    <img src="img-src.jpg" alt="descriptive alt text">
  </div>
</div>
```
