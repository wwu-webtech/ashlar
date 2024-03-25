import WWUBackgroundVideo from "./background-video.js"

# Background Video
<div class="wwu-beyond-basics-block block light-green-bg standard-margin standard-padding">
  <p class="no-margin--bottom"><strong>Important!</strong> See "Pattern Notes" before using on a live site.</p>
</div>

<wwu-background-video src="https://www.wwu.edu/files/2020-04/Viking%20on%20Mars.mp4" alt="4-second looping animation. The Mars Rover Curiosity crawls over rocky terrain as the camera pans over a vast, red landscape" class="min-height--50vh headings--big-and-bold black-overlay">
  <h2>Heading for this Video</h2>
  <p>Some content for this video. Not to be confused with the alt text, which should be a short description of what is going on in the video :)</p>
</wwu-background-video>

```
<wwu-background-video src="https://www.wwu.edu/files/2020-04/Viking%20on%20Mars.mp4" alt="4-second looping animation. The Mars Rover Curiosity crawls over rocky terrain as the camera pans over a vast, red landscape">
  <h2>Heading for this Video</h2>
  <p>Some content for this video. Not to be confused with the alt text, which should be a short description of what is going on in the video :)</p>
</wwu-background-video>
  ```
## Pattern Notes

This pattern needs additional consideration from content creators to maintain site accessibility, usability, and performance.

### Performance
Due to video using more bandwidth to load, content creators and editors should ensure the video is adding meaningful content and purpose, in addition to visual aesthetic. If a high quality banner image can also convey the intended message, or the purpose is strictly visual flair, compressed image formats are preferred over video (WebP, SVG, compressed JPEG/PNG).

### Accessibility
If using this pattern, the following accessibility features must be included:

* For short-form video (5 seconds or less): a text-based description of visuals must be provided through the alt attribute.
  * Example: "4-second looping animation. The Mars Rover Curiosity crawls over rocky terrain as the camera pans over a vast, red landscape."
* For long-form video (6 seconds or longer), a link to an [audio-described video version](https://urm.wwu.edu/accessibility/guide/provide-audio-descriptions-time-based-media) must be provided.
* The text overlayed on the video background must meet [color contrast requirements](https://urm.wwu.edu/accessibility/guide/ensure-text-and-controls-have-enough-color-contrast), for both regular and large text.  