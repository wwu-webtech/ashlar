import WWUAccordion from "./accordion.js"

# Accordion

## Component Library
Include the following script to use the accordion component on your non-Drupal website or application.

```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/accordion.js">
```

## Component Markup
This is the simplified, preferred markup for using accordions. 

<wwu-accordion>
    <wwu-accordion-item label="Cats" heading-level="h3">
        <p>Purr when being pet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand this is the day hell is other people meowwww. Jump five feet high and sideways when a shadow moves naughty running cat or crash against wall but walk away like nothing happened scratch the box your pillow is now my pet bed. Lick human with sandpaper tongue miaow then turn around and show you my bum rub face on everything. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bleghbleghvomit my furball really tie the room together mew hunt anything. Lick plastic bags disappear for four days and return home with an expensive injury; bite the vet but scratch leg; meow for can opener to feed me for shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff eats owners hair then claws head but sleep over your phone and make cute snoring noises. Trip owner up in kitchen i want food human give me attention meow.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Dogs" heading-level="h4">
        <p>Doggo ipsum blep corgo doggo smol borking doggo with a long snoot for pats, the neighborhood pupper what a nice floof boofers, wow very biscit he made many woofs. Boofers thicc fluffer big ol very taste wow extremely cuuuuuute, blep thicc clouds shooberino, vvv extremely cuuuuuute ruff waggy wags. You are doin me a concern bork what a nice floof fluffer puggorino, very hand that feed shibe pupper smol borking doggo with a long snoot for pats pupper, heckin good boys and girls shooberino sub woofer. Blep yapper big ol pupper very hand that feed shibe big ol, doggorino blep doing me a frighten.  Doing me a frighten adorable doggo ruff ur givin me a spook waggy wags, what a nice floof waggy wags noodle horse, shoober doge pupperino.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Fish" heading-level="h5">
        <p>Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</p>
    </wwu-accordion-item>
</wwu-accordion>

```
<wwu-accordion>
    <wwu-accordion-item label="Cats" heading-level="h3">
        <p>Purr when being pet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand this is the day hell is other people meowwww. Jump five feet high and sideways when a shadow moves naughty running cat or crash against wall but walk away like nothing happened scratch the box your pillow is now my pet bed. Lick human with sandpaper tongue miaow then turn around and show you my bum rub face on everything. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bleghbleghvomit my furball really tie the room together mew hunt anything. Lick plastic bags disappear for four days and return home with an expensive injury; bite the vet but scratch leg; meow for can opener to feed me for shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff eats owners hair then claws head but sleep over your phone and make cute snoring noises. Trip owner up in kitchen i want food human give me attention meow.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Dogs" heading-level="h3">
        <p>Doggo ipsum blep corgo doggo smol borking doggo with a long snoot for pats, the neighborhood pupper what a nice floof boofers, wow very biscit he made many woofs. Boofers thicc fluffer big ol very taste wow extremely cuuuuuute, blep thicc clouds shooberino, vvv extremely cuuuuuute ruff waggy wags. You are doin me a concern bork what a nice floof fluffer puggorino, very hand that feed shibe pupper smol borking doggo with a long snoot for pats pupper, heckin good boys and girls shooberino sub woofer. Blep yapper big ol pupper very hand that feed shibe big ol, doggorino blep doing me a frighten.  Doing me a frighten adorable doggo ruff ur givin me a spook waggy wags, what a nice floof waggy wags noodle horse, shoober doge pupperino.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Fish" heading-level="h3">
        <p>Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</p>
    </wwu-accordion-item>
</wwu-accordion>
```

## Options
Background colors can be used on accordions, and individual items can be set to expanded by default.

<wwu-accordion class="blue-bg">
    <wwu-accordion-item label="Cats" heading-level="h3">
        <p>Purr when being pet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand this is the day hell is other people meowwww. Jump five feet high and sideways when a shadow moves naughty running cat or crash against wall but walk away like nothing happened scratch the box your pillow is now my pet bed. Lick human with sandpaper tongue miaow then turn around and show you my bum rub face on everything. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bleghbleghvomit my furball really tie the room together mew hunt anything. Lick plastic bags disappear for four days and return home with an expensive injury; bite the vet but scratch leg; meow for can opener to feed me for shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff eats owners hair then claws head but sleep over your phone and make cute snoring noises. Trip owner up in kitchen i want food human give me attention meow.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Dogs" heading-level="h4" expand="true">
        <p>Doggo ipsum blep corgo doggo smol borking doggo with a long snoot for pats, the neighborhood pupper what a nice floof boofers, wow very biscit he made many woofs. Boofers thicc fluffer big ol very taste wow extremely cuuuuuute, blep thicc clouds shooberino, vvv extremely cuuuuuute ruff waggy wags. You are doin me a concern bork what a nice floof fluffer puggorino, very hand that feed shibe pupper smol borking doggo with a long snoot for pats pupper, heckin good boys and girls shooberino sub woofer. Blep yapper big ol pupper very hand that feed shibe big ol, doggorino blep doing me a frighten.  Doing me a frighten adorable doggo ruff ur givin me a spook waggy wags, what a nice floof waggy wags noodle horse, shoober doge pupperino.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Fish" heading-level="h5">
        <p>Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</p>
    </wwu-accordion-item>
</wwu-accordion>

```
<wwu-accordion class="blue-bg">
    <wwu-accordion-item label="Cats" heading-level="h3">
        <p>Purr when being pet claw at curtains stretch and yawn nibble on tuna ignore human bite human hand this is the day hell is other people meowwww. Jump five feet high and sideways when a shadow moves naughty running cat or crash against wall but walk away like nothing happened scratch the box your pillow is now my pet bed. Lick human with sandpaper tongue miaow then turn around and show you my bum rub face on everything. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock bleghbleghvomit my furball really tie the room together mew hunt anything. Lick plastic bags disappear for four days and return home with an expensive injury; bite the vet but scratch leg; meow for can opener to feed me for shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff eats owners hair then claws head but sleep over your phone and make cute snoring noises. Trip owner up in kitchen i want food human give me attention meow.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Dogs" heading-level="h4">
        <p>Doggo ipsum blep corgo doggo smol borking doggo with a long snoot for pats, the neighborhood pupper what a nice floof boofers, wow very biscit he made many woofs. Boofers thicc fluffer big ol very taste wow extremely cuuuuuute, blep thicc clouds shooberino, vvv extremely cuuuuuute ruff waggy wags. You are doin me a concern bork what a nice floof fluffer puggorino, very hand that feed shibe pupper smol borking doggo with a long snoot for pats pupper, heckin good boys and girls shooberino sub woofer. Blep yapper big ol pupper very hand that feed shibe big ol, doggorino blep doing me a frighten.  Doing me a frighten adorable doggo ruff ur givin me a spook waggy wags, what a nice floof waggy wags noodle horse, shoober doge pupperino.</p>
    </wwu-accordion-item>
    <wwu-accordion-item label="Fish" heading-level="h5">
        <p>Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</p>
    </wwu-accordion-item>
</wwu-accordion>
```

## HTML Markup
This markup can be used when custom elements can't, like in Drupal Views. 

``` 
<div class="accordion-set">  
    <div class="item">
        <h3 class="title">
            <div class="expand">
                <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
                Accordion to This
            </div>
        </h3>
        
        <div class="content">
            <p>We have an infinite amount to learn both from nature and from each other. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>
        </div>
    </div>
    
    <div class="item">
        <h3 class="title">
            <div class="expand is-expanded">
                <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
                Another Item Resides Within, with a title that may extend multiple lines
            </div>
        </h3>
        
        <div class="content">
            If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.
        </div>
    </div>
    
    <div class="item">
        <h3 class="title">
            <div class="expand">
                <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
                Click to Expand
            </div>
        </h3>
        
        <div class="content">
            Astronomy (http://someveryveryverylongurlthattakesupalongline.edu) compels the soul to look upward, and leads us from this world to another.
        </div>
    </div>
</div>
```