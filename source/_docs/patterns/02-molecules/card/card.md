import Placeholder from "@site/static/img/placeholder.jpg";

# Card

## Basic
<div class="card-3col">
<div  class="wwu-card">    
  <h2 class="title">
      <a href="#">Faolan Griogarach, PhD</a>
  </h2>
    
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder" />
  </div>
  
  <div class="taxonomy-terms">
    <span class="taxonomy-term">Professor</span>
  </div>   

  <div class="body">
    <p>She/her/hers</p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
  </div>    
</div>

<div  class="wwu-card lightest-blue-bg">    
  <h2  class="title">
    Unlinked Card
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>

<div  class="wwu-card dark-blue-bg">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>
</div>


```
<div  class="wwu-card dark-blue-bg">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> 
    <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>
```


## Color Block Title Variant
Add the custom class **color-block-title**, and optionally **dark-blue, or light-green**, to your card block's custom class field to use this style. 

<div class="card-3col--flex">
<div  class="wwu-card color-block-title">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>

<div  class="wwu-card color-block-title dark-blue">    
  <h2  class="title">
    <a href="#">Unlinked Card</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>

<div  class="wwu-card color-block-title light-green">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>
</div>

```
<div  class="wwu-card color-block-title light-green">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water"/>    
  </div>
  
  <div class="taxonomy-terms">
    <a class="taxonomy-term" href="#">Term Link 1</a>
  </div> 

  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" class="cta">Call to Action</a></p>
  </div>
</div>
```

## Events
This variant is for use in views displaying events. These styles are not available for standard Drupal blocks.

<div class="card-2col">
<div  class="wwu-card event">
  <h2  class="title">
    <a href="#">Event Title</a>
  </h2>

  <div class="location">
    Old Main Theater but Make The Location Longer
  </div>

  <div class="date">
    <span class="month">Apr</span> 
    <span class="day">04</span>
    <span class="year">2023</span>
  </div>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>  
  
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>

<div  class="wwu-card event alt">
  <h2  class="title">
    <a href="#">Event Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>  
  
  <div class="date">
    <span class="month">Apr</span> 
    <span class="day">04 - 07</span>
    <span class="year">2023</span>
  </div>
  
  <div class="location">
    Old Main Theater but Make The Location Longer
  </div>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>
</div>

```
<div  class="wwu-card event">
  <h2  class="title">
    <a href="#">Event Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water"/>    
  </div>  
  
  <div class="date">
    <span class="month">Apr</span> 
    <span class="day">04 - 07</span>
    <span class="year">2023</span>
  </div>
  
  <div class="location">
    Old Main Theater but Make The Location Longer
  </div>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>

<div  class="wwu-card event alt">
  <h2  class="title">
    <a href="#">Event Title</a>
  </h2>
  
  <div class="image">
    <img src={Placeholder} alt="leaves in water"/>    
  </div>  
  
  <div class="date">
    <span class="month">Apr</span> 
    <span class="day">04 - 07</span>
    <span class="year">2023</span>
  </div>
  
  <div class="location">
    Old Main Theater but Make The Location Longer
  </div>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>
```

## Hover Variant
This variant requires different markup from standard cards. It is only available in views or as a hard coded element (not recommened), it is **not available for Drupal blocks.**
<div class="card-3col">
<div class="hover-card">
<div class="image">
  <img src={Placeholder} alt="leaves in water placeholder"/>    
</div>

<div class="content">    
  <h2  class="title">
    <a href="#">Card Title</a>
  </h2>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
  </div>
</div>

<div class="read-more">
  <span class='material-icons' aria-hidden='true'>arrow_forward</span>
</div>
</div>
<div class="hover-card">
<div class="image">
  <img src={Placeholder} alt="leaves in water placeholder"/>    
</div>

<div class="content">    
  <h2  class="title">
    <a href="#">Longer card title for 2+ lines</a>
  </h2>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
  </div>
</div>

<div class="read-more">
  <span class='material-icons' aria-hidden='true'>arrow_forward</span>
</div>
</div>
<div class="hover-card">
<div class="image">
  <img src={Placeholder} alt="leaves in water placeholder"/>    
</div>

<div class="content">    
  <h2  class="title">
    <a href="#">A rather long card title that takes up three or so lines</a>
  </h2>
  
  <div class="body">
    <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#">Ut enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
  </div>
</div>

<div class="read-more">
  <span class='material-icons' aria-hidden='true'>arrow_forward</span>
</div>
</div>
</div>

```
<div class="hover-card">
  <div class="image">
    <img src={Placeholder} alt="leaves in water placeholder"/>    
  </div>

  <div class="content">    
    <h2  class="title">
      <a href="#">Card Title</a>
    </h2>
    
    <div class="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
    </div>
  </div>

  <div class="read-more">
    <span class='material-icons' aria-hidden='true'>arrow_forward</span>
  </div>
</div>
```

## Degree Cards
For degrees displayed on majors pages. These style are fairly specific to the content on those pages and the way the views are built.

<div class="degree-card lightest-blue-bg ">
<h3 class="title">
  Cat Science — Secondary, BAE
</h3>

<div class="taxonomy-terms">
    <span class="taxonomy-term dark-blue-bg"><span class="visually-hidden">Degree Type:</span><span class="material-icons" aria-hidden="true">school</span> Teaching Endorsement</span>
</div>

<div class="body">
  <p>Do you like to know why and how cats think? Do you enjoy making yourself feel insignificant? Are you concerned about what makes your cat purr? Want to teach Cat science and other sciences to middle or high school students? This degree leads to recommendations for teaching endorsements in Cat Science.</p>
  
  <div class="department-links">
    <div>
      <a class="department-link" href="#" tabindex="-1">Cat Education <span class="material-icons" aria-hidden="true">arrow_forward</span></a>
    </div>
    <div>
      <a class="department-link" href="#" tabindex="-1">Catology <span class="material-icons" aria-hidden="true">arrow_forward</span></a>
    </div>           
  </div>
    
  <h4 class="title">Contact</h4>    
  <p>
    Advisor #1, <em>Cat Science Education Advisor</em><br/>
    <a href="#" tabindex="-1">advisor.one@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#" tabindex="-1">360-650-5555</a>
  </p>
  
  <p>
    Advisor #2, <em>General Science Education Advisor</em><br/>
    <a href="#" tabindex="-1">advisor.two@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#" tabindex="-1">360-650-5555</a>
  </p>
  
  <p>
    Advisor #3, <em>Cat Science Education Advisor</em><br/>
    <a href="#" tabindex="-1">advisor.three@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#" tabindex="-1">360-650-5555</a>
  </p>
</div>

<div class="more-link">
  <a href="#" class="cta" tabindex="-1">Catalog details about Cat Science/General Science — Secondary, BAE</a>
</div>  
</div>