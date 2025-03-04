import Placeholder from '@site/static/img/placeholder.jpg';

# Images

## Image Captions
Use the helper class "caption" on a paragraph or div tag

<div class="column-count--2">
    <div>
        <img src={Placeholder} alt="leaves in water placeholder"/>
        <p class="caption">Leaves in Water Placeholder Image</p>
    </div>

    <div>
        <img src={Placeholder} alt="leaves in water placeholder"/>
        <div class="caption">Leaves in Water Placeholder Image</div>
    </div>
</div>

```
<img src={Placeholder} alt="leaves in water placeholder"/>
<p class="caption">Leaves in Water Placeholder Image</p>

<img src={Placeholder} alt="leaves in water placeholder"/>
<div class="caption">Leaves in Water Placeholder Image</div>
```