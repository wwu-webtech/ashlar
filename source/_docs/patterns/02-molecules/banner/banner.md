import Placeholder from '@site/static/img/placeholder.jpg';

# Banner

<div className="wwu-banner blue-overlay min-height--25vh">
    <h2 className="title">A Title for the Banner</h2>
    
    <div className="background-image">
        <img src={Placeholder} alt="leaves in water placeholder"/>
    </div>
    
    <div className="body">
        Content for the banner
    </div>
</div>

```
<div class="wwu-banner blue-overlay min-height--25vh">
    <h2 class="title">A Title for the Banner</h2>
    
    <div class="background-image">
        <img src={Placeholder} alt="leaves in water placeholder"/>
    </div>
    
    <div class="body">
        Content for the banner
    </div>
</div>
```

## Animated Background

Subtle animation option for banners that uses less bandwidth than videos. We recommend using this feature sparingly, for the top image of landing pages only.


<div className="wwu-banner blue-overlay min-height--25vh animated">
    <h2 className="title">A Title for the Banner</h2>   

    <div className="background-image">
        <img src={Placeholder} alt="leaves in water placeholder"/>
    </div>    

    <div className="body">
        Content for the banner
    </div>
</div>