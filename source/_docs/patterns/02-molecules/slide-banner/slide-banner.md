import WWUBackgroundSlideshow from "./slide-banner.js"
import Placeholder from '@site/static/img/placeholder.jpg';
import Placeholder2 from '@site/static/img/sampleheader.jpg';

# Slide Banner

<wwu-slide-banner class="black-overlay min-height--50vh">
  <wwu-slide src={Placeholder} alt="Autumn leaves"></wwu-slide>
  <wwu-slide src={Placeholder2} alt="Western drone shot"></wwu-slide>

  <h2>Some Content</h2>
  <p>That sits on top of the imagery</p>
</wwu-slide-banner>