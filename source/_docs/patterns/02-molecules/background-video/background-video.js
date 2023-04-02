if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const background_video_template = document.createElement("template");
    background_video_template.innerHTML = `      
    <video class="bg-video background-image" autoplay="" id="video-elem-1" loop="" muted="" preload="auto">        
    </video>      

    <p class="description visually-hidden"></p>
    
    <button class="playback"><span class="material-icons" aria-hidden="true">pause</span>Pause</button>    
    `;
    
    class WWUBackgroundVideo extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        this.appendChild(background_video_template.content.cloneNode(true));
        this.querySelector("video").innerHTML = `<source src="${this.getAttribute("src")}" />`
        this.querySelector(".description").innerText= this.getAttribute("alt");
        const video = this.querySelector("video");
        const pause_button = this.querySelector(".playback");     
        let motion_preference = window.matchMedia("(prefers-reduced-motion: reduce)");                       
        
        pause_button.addEventListener("click", toggle_playback);       
        reduced_motion_check(motion_preference, video, pause_button);
      }
    }
    
    window.customElements.define("wwu-background-video", WWUBackgroundVideo);  
    
    function toggle_playback() {
      const video = this.parentNode.querySelector("video");             
      
      if (this.classList.contains("play")) {
        pause_video(video, this);
      } else {
        play_video(video, this);
      }
    }
    
    function play_video(vid, btn) {
      vid.play().catch(function (error) {
        console.log(error);
      });
      btn.classList.add("play");
      btn.innerHTML = `<span class="material-icons" aria-hidden="true">pause</span>Pause</button>`;
    }
    
    function pause_video(vid, btn) {
      vid.pause();
      btn.classList.remove("play");
      btn.innerHTML = `<span class="material-icons" aria-hidden="true">play_arrow</span>Play</button>`;
    }    
    
    function reduced_motion_check(pref, vid, btn) {
      if (pref.matches) {
        pause_video(vid, btn);
      } else {
        play_video(vid, btn);
      }
      
      pref.onchange = (e) => {
        if (e.matches) {
          pause_video(vid, btn)
        } else {
          play_video(vid, btn)
        }
      }
    }  
  }
  