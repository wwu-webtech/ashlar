if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const slide_banner_template = document.createElement("template");
    slide_banner_template.innerHTML = `    
    `;
    
    class WWUSlideBanner extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        let element_exists = this.classList.contains("element-created");
        if (!element_exists) {
          this.appendChild(slide_banner_template.content.cloneNode(true));
          this.classList.add("element-created");

          const slides = this.querySelectorAll("wwu-slide");

          for (let i = 0; i < slides.length; i++) { 
            slides[i].innerHTML = `<img src="${slides[i].getAttribute('src')}">`;
          }
        }
      }
    }
    
    if (!window.customElements.get('wwu-slide-banner')) {   
      window.customElements.define("wwu-slide-banner", WWUSlideBanner);  
    }
    
    function toggle_playback() {
      const slideshow = this.parentNode.querySelector("slideshow");             
      
      if (this.classList.contains("play")) {
        pause_slideshow(slideshow, this);
      } else {
        play_slideshow(slideshow, this);
      }
    }
    
    function play_slideshow(vid, btn) {
      vid.play().catch(function (error) {
        console.log(error);
      });
      btn.classList.add("play");
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>Pause</button>`;
    }
    
    function pause_slideshow(vid, btn) {
      vid.pause();
      btn.classList.remove("play");
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>Play</button>`;
    }    
    
    function reduced_motion_check(pref, vid, btn) {
      if (pref.matches) {
        pause_slideshow(vid, btn);
      } else {
        play_slideshow(vid, btn);
      }
      
      pref.onchange = (e) => {
        if (e.matches) {
          pause_slideshow(vid, btn)
        } else {
          play_slideshow(vid, btn)
        }
      }
    }  
  } 
    
  