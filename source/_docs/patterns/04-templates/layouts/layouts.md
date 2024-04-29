# Layouts

## One Column
The default one column layout is narrow, in order to optimize characters per line for better readability. If you have a lot of text in a one column layout, then the default is recommended. If you have smaller amounts of text and want margins to line up nicely, then the "full content width" one column layout is also available.

### Default (narrow)
<div className="layout--onecol">
    <div className="layout__region">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. A diam sollicitudin tempor id. Auctor urna nunc id cursus metus aliquam. Tortor id aliquet lectus proin nibh
            nisl condimentum id venenatis. Consequat mauris nunc congue nisi. Augue interdum velit euismod in. Quis risus sed
            vulputate odio ut enim. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Molestie ac feugiat sed lectus.
            Suspendisse in est ante in nibh mauris cursus. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus.
            Tortor condimentum lacinia quis vel eros donec ac odio tempor. Leo urna molestie at elementum eu facilisis. Gravida
            dictum fusce ut placerat orci nulla pellentesque dignissim enim. Sit amet porttitor eget dolor morbi non. Nunc faucibus
            a pellentesque sit amet. Nisi scelerisque eu ultrices vitae auctor eu.
        </p>    
    </div>
</div>

```
<div class="layout--onecol">
    <div class="layout__region">
        <p>
            Lorem ipsum...
        </p>    
    </div>
</div>
```

### Full content width (wide)
<div className="layout--onecol--full">
    <div className="layout__region">  
        <p>
            Vulputate odio ut enim blandit volutpat maecenas. Lectus nulla at volutpat diam ut venenatis. Eget nullam non nisi est
            sit amet. Pulvinar mattis nunc sed blandit libero. Est ultricies integer quis auctor elit sed. Sagittis nisl rhoncus
            mattis rhoncus urna neque. Risus feugiat in ante metus dictum at tempor. At quis risus sed vulputate. Tellus elementum
            sagittis vitae et leo duis ut diam quam. Ut enim blandit volutpat maecenas volutpat. Cursus vitae congue mauris rhoncus
            aenean vel elit scelerisque. Amet purus gravida quis blandit turpis cursus in hac. Nibh ipsum consequat nisl vel pretium
            lectus quam. Et tortor consequat id porta nibh. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc
            scelerisque viverra mauris in aliquam. Amet est placerat in egestas erat imperdiet sed. Vulputate enim nulla aliquet
            porttitor lacus luctus accumsan. Risus nec feugiat in fermentum posuere. Et tortor at risus viverra adipiscing at in
            tellus.
        </p>
    </div>
</div>

```
<div class="layout--onecol--full">
    <div class="layout__region">  
        <p>
            Vulputate odio...
        </p>
    </div>
</div>
```

## Two Column

### 50/50
<div className="layout--twocol-section layout--twocol-section--50-50">
    <div className="layout__region layout__region--first">
        <p>
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Suspendisse sed nisi lacus sed viverra tellus. Massa ultricies mi quis hendrerit. Id porta nibh venenatis cras sed
            felis. Magna etiam tempor orci eu lobortis elementum nibh. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar sapien. 
        </p>
    </div>
    <div className="layout__region layout__region--second">
        <p>
            Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Non diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Senectus et netus et malesuada fames ac turpis egestas. Nec dui nunc mattis enim
            ut. Tortor posuere ac ut consequat semper viverra. Ut consequat semper viverra nam libero justo laoreet sit. Morbi
            tristique senectus et netus et malesuada fames. Nullam vehicula ipsum a arcu cursus vitae.
        </p>
    </div>
</div>

```
<div class="layout--twocol-section layout--twocol-section--50-50">
    <div class="layout__region layout__region--first">
        <p>
            Massa sapien...
        </p>
    </div>
    <div class="layout__region layout__region--second">
        <p>
            Nulla aliquet...
        </p>
    </div>
</div>
```

### 33/67
<div className="layout--twocol-section layout--twocol-section--33-67">
    <div className="layout__region--first">
        <p>
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Suspendisse sed nisi lacus sed viverra tellus. Massa ultricies mi quis hendrerit. Id porta nibh venenatis cras sed
            felis. Magna etiam tempor orci eu lobortis elementum nibh. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar sapien.
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Non diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Senectus et netus et malesuada fames ac turpis egestas. Nec dui nunc mattis
            enim
            ut. Tortor posuere ac ut consequat semper viverra. Ut consequat semper viverra nam libero justo laoreet sit. Morbi
            tristique senectus et netus et malesuada fames. Nullam vehicula ipsum a arcu cursus vitae.
        </p>
    </div>
</div>

```
<div class="layout--twocol-section layout--twocol-section--33-67">
    <div class="layout__region--first">
        <p>
            Massa sapien...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Nulla aliquet...
        </p>
    </div>
</div>
```

### 67/33
<div className="layout--twocol-section layout--twocol-section--67-33">
    <div className="layout__region--first">
        <p>
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Suspendisse sed nisi lacus sed viverra tellus. Massa ultricies mi quis hendrerit. Id porta nibh venenatis cras sed
            felis. Magna etiam tempor orci eu lobortis elementum nibh. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar sapien.
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Non diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Senectus et netus et malesuada fames ac turpis egestas. Nec dui nunc mattis
            enim
            ut. Tortor posuere ac ut consequat semper viverra. Ut consequat semper viverra nam libero justo laoreet sit. Morbi
            tristique senectus et netus et malesuada fames. Nullam vehicula ipsum a arcu cursus vitae.
        </p>
    </div>
</div>

```
<div class="layout--twocol-section layout--twocol-section--67-33">
    <div class="layout__region--first">
        <p>
            Massa sapien...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Nulla aliquet...
        </p>
    </div>
</div>
```

### 25/75
<div className="layout--twocol-section layout--twocol-section--25-75">
    <div className="layout__region--first">
        <p>
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Suspendisse sed nisi lacus sed viverra tellus. Massa ultricies mi quis hendrerit. Id porta nibh venenatis cras sed
            felis. Magna etiam tempor orci eu lobortis elementum nibh. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar sapien.
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Non diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Senectus et netus et malesuada fames ac turpis egestas. Nec dui nunc mattis
            enim
            ut. Tortor posuere ac ut consequat semper viverra. Ut consequat semper viverra nam libero justo laoreet sit. Morbi
            tristique senectus et netus et malesuada fames. Nullam vehicula ipsum a arcu cursus vitae.
        </p>
    </div>
</div>

```
<div class="layout--twocol-section layout--twocol-section--25-75">
    <div class="layout__region--first">
        <p>
            Massa sapien...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Nulla aliquet...
        </p>
    </div>
</div>
```

### 75/25
<div className="layout--twocol-section layout--twocol-section--75-25">
    <div className="layout__region--first">
        <p>
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nullam ac tortor vitae purus faucibus ornare suspendisse sed
            nisi. Suspendisse sed nisi lacus sed viverra tellus. Massa ultricies mi quis hendrerit. Id porta nibh venenatis cras sed
            felis. Magna etiam tempor orci eu lobortis elementum nibh. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar sapien.
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Non diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Senectus et netus et malesuada fames ac turpis egestas. Nec dui nunc mattis
            enim
            ut. Tortor posuere ac ut consequat semper viverra. Ut consequat semper viverra nam libero justo laoreet sit. Morbi
            tristique senectus et netus et malesuada fames. Nullam vehicula ipsum a arcu cursus vitae.
        </p>
    </div>
</div>

```
<div class="layout--twocol-section layout--twocol-section--75-25">
    <div class="layout__region--first">
        <p>
            Massa sapien...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Nulla aliquet...
        </p>
    </div>
</div>
```

## Three Column

### 33/34/33
<div className="layout--threecol-section layout--threecol-section--33-34-33">
    <div className="layout__region--first">
        <p>
            Id aliquet risus feugiat in ante metus dictum at tempor. Lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. 
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus pretium quam vulputate dignissim suspendisse in est ante. Maecenas volutpat blandit aliquam etiam. Diam sit amet nisl suscipit adipiscing. Massa sapien faucibus et molestie. Tempor orci eu lobortis elementum nibh. 
        </p>
    </div>
    <div className="layout__region--third">
        <p>
            Cras adipiscing enim eu turpis egestas pretium. Sollicitudin tempor id eu nisl nunc mi ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Purus viverra accumsan in nisl nisi.
        </p>
    </div>
</div>

```
<div class="layout--threecol-section layout--threecol-section--33-34-33">
    <div class="layout__region--first">
        <p>
            Id aliquet...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Dui nunc...
        </p>
    </div>
    <div class="layout__region--third">
        <p>
            Cras adipiscing...
        </p>
    </div>
</div>
```

### 25/50/25
<div className="layout--threecol-section layout--threecol-section--25-50-25">
    <div className="layout__region--first">
        <p>
            Id aliquet risus feugiat in ante metus dictum at tempor. Lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. 
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus pretium quam vulputate dignissim suspendisse in est ante. Maecenas volutpat blandit aliquam etiam. Diam sit amet nisl suscipit adipiscing. Massa sapien faucibus et molestie. Tempor orci eu lobortis elementum nibh. 
        </p>
    </div>
    <div className="layout__region--third">
        <p>
            Cras adipiscing enim eu turpis egestas pretium. Sollicitudin tempor id eu nisl nunc mi ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Purus viverra accumsan in nisl nisi.
        </p>
    </div>
</div>

```
<div class="layout--threecol-section layout--threecol-section--25-50-25">
    <div class="layout__region--first">
        <p>
            Id aliquet...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Dui nunc...
        </p>
    </div>
    <div class="layout__region--third">
        <p>
            Cras adipiscing...
        </p>
    </div>
</div>
```

### 25/25/50
<div className="layout--threecol-section layout--threecol-section--25-25-50">
    <div className="layout__region--first">
        <p>
            Id aliquet risus feugiat in ante metus dictum at tempor. Lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. 
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus pretium quam vulputate dignissim suspendisse in est ante. Maecenas volutpat blandit aliquam etiam. Diam sit amet nisl suscipit adipiscing. Massa sapien faucibus et molestie. Tempor orci eu lobortis elementum nibh. 
        </p>
    </div>
    <div className="layout__region--third">
        <p>
            Cras adipiscing enim eu turpis egestas pretium. Sollicitudin tempor id eu nisl nunc mi ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Purus viverra accumsan in nisl nisi.
        </p>
    </div>
</div>

```
<div class="layout--threecol-section layout--threecol-section--25-25-50">
    <div class="layout__region--first">
        <p>
            Id aliquet...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Dui nunc...
        </p>
    </div>
    <div class="layout__region--third">
        <p>
            Cras adipiscing...
        </p>
    </div>
</div>
```

### 50/25/25
<div className="layout--threecol-section layout--threecol-section--50-25-25">
    <div className="layout__region--first">
        <p>
            Id aliquet risus feugiat in ante metus dictum at tempor. Lectus quam id leo in vitae turpis massa sed. Duis at tellus at urna condimentum. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. 
        </p>
    </div>
    <div className="layout__region--second">
        <p>
            Dui nunc mattis enim ut tellus elementum sagittis vitae et. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Risus pretium quam vulputate dignissim suspendisse in est ante. Maecenas volutpat blandit aliquam etiam. Diam sit amet nisl suscipit adipiscing. Massa sapien faucibus et molestie. Tempor orci eu lobortis elementum nibh. 
        </p>
    </div>
    <div className="layout__region--third">
        <p>
            Cras adipiscing enim eu turpis egestas pretium. Sollicitudin tempor id eu nisl nunc mi ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Purus viverra accumsan in nisl nisi.
        </p>
    </div>
</div>

```
<div class="layout--threecol-section layout--threecol-section--50-25-25">
    <div class="layout__region--first">
        <p>
            Id aliquet...
        </p>
    </div>
    <div class="layout__region--second">
        <p>
            Dui nunc...
        </p>
    </div>
    <div class="layout__region--third">
        <p>
            Cras adipiscing...
        </p>
    </div>
</div>
```

## Four Column
<div className="layout--fourcol-section">
    <div className="layout__region">
        <p>
            Sagittis eu volutpat odio facilisis mauris sit amet. Proin sagittis nisl rhoncus mattis rhoncus. Tincidunt eget nullam non nisi est sit. Ac felis donec et odio pellentesque diam volutpat commodo sed. 
        </p>
    </div>
    <div className="layout__region">
        <p>
            Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Orci porta non pulvinar neque laoreet suspendisse interdum. Praesent tristique magna sit amet purus gravida quis. 
        </p>
    </div>
    <div className="layout__region">
        <p>
            Curabitur vitae nunc sed velit dignissim sodales. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Nam libero justo laoreet sit amet cursus sit amet. Senectus et netus et malesuada. 
        </p>
    </div>
    <div className="layout__region">
        <p>
            Vulputate ut pharetra sit amet aliquam id diam. Faucibus in ornare quam viverra orci sagittis eu volutpat odio.
        </p>
    </div>
</div>

```
<div class="layout--fourcol-section">
    <div class="layout__region">
        <p>
            Sagittis eu...
        </p>
    </div>
    <div class="layout__region">
        <p>
            Commodo elit...
        </p>
    </div>
    <div class="layout__region">
        <p>
            Curabitur vitae...
        </p>
    </div>
    <div class="layout__region">
        <p>
            Vulputate ut...
        </p>
    </div>
</div>
```