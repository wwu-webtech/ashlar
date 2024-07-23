import WWUBackgroundSlideshow from "./slide-banner.js"
import Placeholder from '@site/static/img/placeholder.jpg';
import Placeholder2 from '@site/static/img/sampleheader.jpg';

# Slide Banner

<wwu-slide-banner class="black-overlay min-height--50vh">
  <wwu-slide src={Placeholder}></wwu-slide>
  <wwu-slide src={Placeholder2}></wwu-slide>

  <h2>Some Content</h2>
  <p>That sits on top of the slideshow</p>
</wwu-slide-banner>