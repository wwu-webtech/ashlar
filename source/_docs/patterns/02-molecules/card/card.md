import Placeholder from "@site/static/img/placeholder.jpg";

# Cards

## Card Containers
The following classes are available to put on divs containing cards. The first three use a grid layout, the others use flexbox. Different situations may make one type desireable over the other, but the flex layouts work best in most cases.

* card-2col
* card-3col
* card-4col
* card-2col--flex
* card-3col--flex
* card-4col--flex 

The class full-width can be used to break an element out of the flex container. For example, if you have a view using a card flex container, but would like headings as section dividers that span the full width of the container.

```
<div class="card-3col--flex">
  <h2 class="full-width">Section Heading</h2>
  <div class="wwu-card"></div>
  <div class="wwu-card"></div>
  <div class="wwu-card"></div>
</div>
```

## Basic
<div className="card-3col">
  <div  className="wwu-card">    
    <h2 className="title">
      <a href="#">Faolan Griogarach, PhD</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder" />
    </div>
    
    <div className="taxonomy-terms">
      <span className="taxonomy-term">Professor</span>
    </div>   
    
    <div className="body">
      <p>She/her/hers</p>
      <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
      <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
    </div>    
  </div>
  
  <div  className="wwu-card bordered">    
    <h2  className="title">Unlinked Card</h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="taxonomy-terms">
      <a className="taxonomy-term" href="#">Term Link 1</a>
    </div> 
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p>
    </div>
  </div>
  
  <div  className="wwu-card dark-blue-bg">    
    <h2  className="title">
      <a href="#">Card Title</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="taxonomy-terms">
      <a className="taxonomy-term" href="#">Term Link 1</a>
    </div> 
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p>
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

## Horizontal
Will look the same as basic cards on mobile/small screens

<div  className="wwu-card horizontal">    
  <h2 className="title">
    <a href="#">Faolan Griogarach, PhD</a>
  </h2>
  
  <div className="image">
    <img src={Placeholder} alt="leaves in water placeholder" />
  </div>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term">Professor</span>
  </div>   
  
  <div className="body">
    <p>She/her/hers</p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
  </div>    
</div>

<div  className="wwu-card horizontal bordered">    
  <h2 className="title">Unlinked Horizontal Card with border</h2>
  
  <div className="image">
    <img src={Placeholder} alt="leaves in water placeholder" />
  </div>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term">Professor</span>
  </div>   
  
  <div className="body">
    <p>She/her/hers</p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
  </div>    
</div>

<div  className="wwu-card horizontal">    
  <h2 className="title">
    <a href="#">Faolan Griogarach, PhD</a>
  </h2>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term">Professor</span>
  </div>   
  
  <div className="body">
    <p>She/her/hers</p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
  </div>    
</div>

<div  className="wwu-card horizontal">    
  <h2 className="title">Unlinked Horizontal Card</h2>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term">Professor</span>
  </div>   
  
  <div className="body">
    <p>She/her/hers</p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
  </div>    
</div>

```
<div  class="wwu-card horizontal">    
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
```

## Color Block Title Variant
Add the custom class **color-block-title**, and optionally **dark-blue, or light-green**, to your card block's custom class field to use this style. 

<div className="card-3col--flex">
  <div  className="wwu-card color-block-title">    
    <h2  className="title">
      <a href="#new">Card Title</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="taxonomy-terms">
      <a className="taxonomy-term" href="#">Term Link 1</a>
    </div> 
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" className="cta">Call to Action</a></p>
    </div>
  </div>
  
  <div  className="wwu-card color-block-title dark-blue">    
    <h2  className="title">
      <a href="#new">Unlinked Card</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="taxonomy-terms">
      <a className="taxonomy-term" href="#">Term Link 1</a>
    </div> 
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" className="cta">Call to Action</a></p>
    </div>
  </div>
  
  <div  className="wwu-card color-block-title light-green">    
    <h2  className="title">
      <a href="#new">Card Title</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="taxonomy-terms">
      <a className="taxonomy-term" href="#">Term Link 1</a>
    </div> 
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p> <p><a href="#" className="cta">Call to Action</a></p>
    </div>
  </div>
</div>

<div  className="wwu-card horizontal color-block-title">    
  <h2 className="title">
    <a href="#">Faolan Griogarach, PhD</a>
  </h2>
  
  <div className="image">
    <img src={Placeholder} alt="leaves in water placeholder" />
  </div>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term">Professor</span>
  </div>   
  
  <div className="body">
    <p>She/her/hers</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. </p>
    <p><a href="mailto:faolan.griogarach@wwu.edu">faolan.griogarach@wwu.edu</a></p>
    <p><a href="tel:360-650-6820">360-650-6820</a> <span aria-hidden="true">|</span> OM 360</p>
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

## Small Thumbnail Variant
Add the custom class **small-thumbnail** to use this variant. Works with different backgroud colors.

<div className="layout--threecol-section">
  <div class="layout__region layout__region--first">
    <div  className="wwu-card small-thumbnail">    
      <h2  className="title">
        <a href="#new">Card Title</a>
      </h2>
      
      <div className="image">
        <img src={Placeholder} alt="leaves in water placeholder"/>    
      </div>
      
      <div className="taxonomy-terms">
        <a className="taxonomy-term" href="#">Term Link 1</a>
      </div> 
      
      <div className="body">
        <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p>
      </div>
    </div>
  </div>
  
  <div class="layout__region layout__region--first">
    <div  className="wwu-card small-thumbnail blue-bg">    
      <h2  className="title">
        <a href="#new">Supply Chain Management for Better Business Practices</a>
      </h2>
      
      <div className="image">
        <img src={Placeholder} alt="leaves in water placeholder"/>    
      </div>
      
      <div className="body text-align-center">
        <p><em>Non-Credit Program</em></p>
        <p>In-Person: Mukilteo</p>
      </div>
    </div>
  </div>
  
  <div class="layout__region layout__region--first">
    <div  className="wwu-card small-thumbnail dark-blue-bg">    
      <h2  className="title">
        <a href="#new">Card Title</a>
      </h2>
      
      <div className="image">
        <img src={Placeholder} alt="leaves in water placeholder"/>    
      </div>
      
      <div className="taxonomy-terms">
        <a className="taxonomy-term" href="#">Term Link 1</a>
      </div> 
      
      <div className="body">
        <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt <a href="nothing.pdf">ut labore et dolore magna aliqua.</a></p>
      </div>
    </div>
  </div>
</div>
```
<div  class="wwu-card small-thumbnail blue-bg">    
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
This variant is for use in views displaying events. These styles are not available for standard Drupal blocks. See also [event lists](/patterns/molecules/event-list), for events without images.

<div className="card-2col">
  <div  className="wwu-card event">
    <h2  className="title">
      <a href="#">Event Title</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>  
    
    <div className="location">
      Old Main Theater but Make The Location Longer
    </div>
    
    <div className="date">
      <span className="month">Apr</span> 
      <span className="day">04</span>
      <span className="year">2023</span>
    </div>  
    
    <div className="body">
      <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  
  <div  className="wwu-card event alt">
    <h2  className="title">
      <a href="#">Event Title</a>
    </h2>
    
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>  
    
    <div className="location">
      Old Main Theater but Make The Location Longer
    </div>
    
    <div className="date">
      <span className="month">Apr</span> 
      <span className="day">04 - 07</span>
      <span className="year">2023</span>
    </div>
    
    <div className="body">
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
<div className="card-3col">
  <div className="hover-card">
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="content">    
      <h2  className="title">
        <a href="#">Card Title</a>
      </h2>
      
      <div className="body">
        <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
      </div>
    </div>
    
    <div className="read-more">
      <span className='component-icon' aria-hidden='true'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
    </div>
  </div>
  <div className="hover-card">
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="content">    
      <h2  className="title">
        <a href="#">Longer card title for 2+ lines</a>
      </h2>
      
      <div className="body">
        <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
      </div>
    </div>
    
    <div className="read-more">
      <span className='component-icon' aria-hidden='true'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
    </div>
  </div>
  <div className="hover-card">
    <div className="image">
      <img src={Placeholder} alt="leaves in water placeholder"/>    
    </div>
    
    <div className="content">    
      <h2  className="title">
        <a href="#">A rather long card title that takes up three or so lines</a>
      </h2>
      
      <div className="body">
        <p>Card body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#">Ut enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Another paragraph of text.</p>
      </div>
    </div>
    
    <div className="read-more">
      <span className='component-icon' aria-hidden='true'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
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
    <span class='component-icon' aria-hidden='true'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
  </div>
</div>
```

## Degree Cards
For degrees displayed on majors pages. These style are fairly specific to the content on those pages and the way the views are built.

<div className="degree-card lightest-blue-bg ">
  <h3 className="title">
    Cat Science — Secondary, BAE
  </h3>
  
  <div className="taxonomy-terms">
    <span className="taxonomy-term dark-blue-bg"><span className="visually-hidden">Degree Type:</span><span className="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg></span> Teaching Endorsement</span>
  </div>
  
  <div className="body">
    <p>Do you like to know why and how cats think? Do you enjoy making yourself feel insignificant? Are you concerned about what makes your cat purr? Want to teach Cat science and other sciences to middle or high school students? This degree leads to recommendations for teaching endorsements in Cat Science.</p>
    
    <div className="department-links">
      <div>
        <a className="department-link" href="#">Cat Education</a>
      </div>
      <div>
        <a className="department-link" href="#">Catology</a>
      </div>           
    </div>
    
    <h4 className="title">Contact</h4>    
    <p>
      Advisor #1, <em>Cat Science Education Advisor</em><br/>
      <a href="#">advisor.one@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#">360-650-5555</a>
    </p>
    
    <p>
      Advisor #2, <em>General Science Education Advisor</em><br/>
      <a href="#">advisor.two@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#">360-650-5555</a>
    </p>
    
    <p>
      Advisor #3, <em>Cat Science Education Advisor</em><br/>
      <a href="#">advisor.three@wwu.edu</a> <span aria-hidden="true">|</span> <a href="#">360-650-5555</a>
    </p>
  </div>
  
  <div className="more-link">
    <a href="#" className="cta">Catalog details about Cat Science/General Science — Secondary, BAE</a>
  </div>  
</div>