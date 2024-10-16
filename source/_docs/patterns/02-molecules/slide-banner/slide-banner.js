if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const slide_banner_template = document.createElement("template");
    slide_banner_template.innerHTML = `    
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/slide-banner.css" /-->
    <button class="playback">
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
      <span>pause</span>
    </button>
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
          const interval = 6;

          for (let i = 0; i < slides.length; i++) { 
            slides[i].innerHTML = `<img src="${slides[i].getAttribute('src')}" alt="${slides[i].getAttribute('alt')}">`;
            slides[i].setAttribute("style", `animation-duration: ${slides.length * interval}s; animation-delay: ${interval * i}s;`);
          }

          this.querySelector("button").addEventListener("click", toggle_playback);       
        }
      }
    }
    
    if (!window.customElements.get('wwu-slide-banner')) {   
      window.customElements.define("wwu-slide-banner", WWUSlideBanner);  
    }
    
    function toggle_playback() {            
      const slides = document.querySelectorAll("wwu-slide");

      if (this.classList.contains("pause")) {
        play_slideshow(this, slides);
      } else {
        pause_slideshow(this, slides);
      }
    }
    
    function play_slideshow(btn, slides) {      
      for (let i = 0; i < slides.length; i++) {  
        slides[i].style["animation-play-state"] = "running";
      }

      btn.classList.remove("pause");
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>pause</button>`;
    }
    
    function pause_slideshow(btn, slides) {      
      for (let i = 0; i < slides.length; i++) {  
        slides[i].style["animation-play-state"] = "paused";
      }

      btn.classList.add("pause");
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>play</button>`;
    }    
  } 
    
  