import WWUDialog from "./dialog.js"

# Dialog

## Component Library
Include the following script to use the dialog component on your non-Drupal website or application.

```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/dialog.js"></script>
```

## Component Markup
<wwu-dialog label="Anthem Video on Vimeo" button="Play a Vimeo Video" icon="play_arrow">
    <div className="embed-container">
        <iframe src="https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" title="Anthem, Vimeo"></iframe>
    </div>
</wwu-dialog>

```
<wwu-dialog label="Anthem Video on Vimeo" button="Play a Vimeo Video" icon="play_arrow">
    <div class="embed-container">
        <iframe src="https://player.vimeo.com/video/668337172?h=15cc98305e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" title="Anthem, Vimeo"></iframe>
    </div>
</wwu-dialog>
```

<wwu-dialog label="Anthem Video on YouTube" button="Play a YouTube Video" icon="play_arrow">
    <div className="embed-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nR7cUFRwTIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Shannon Point Marine Center, YouTube"></iframe>
    </div>
</wwu-dialog>

```
<wwu-dialog label="Anthem Video on YouTube" button="Play a YouTube Video" icon="play_arrow">
    <div class="embed-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nR7cUFRwTIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Shannon Point Marine Center, YouTube"></iframe>
    </div>
</wwu-dialog>
```

<wwu-dialog label="Non-video stuff" button="Dialog with Non-Video Content" icon="play_arrow">
    <h2>Here is a Heading</h2>
    <p>This is just some regular plain old content, no video, just stuff to read or whatever</p>
</wwu-dialog>

```
<wwu-dialog label="Non-video stuff" button="Dialog with Non-Video Content" icon="play_arrow">
    <h2>Here is a Heading</h2>
    <p>This is just some regular plain old content, no video, just stuff to read or whatever</p>
</wwu-dialog>
```