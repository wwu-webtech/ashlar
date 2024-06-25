if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const background_video_template = document.createElement("template");
    background_video_template.innerHTML = `      
    <video class="bg-video background-image" autoplay loop muted preload="auto" id="video-elem-1">        
    </video>      

    <p class="description visually-hidden"></p>
    
    <button class="playback"><span class="material-icons" aria-hidden="true">pause</span>Pause</button>    
    `;
    
    class WWUBackgroundVideo extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        let element_exists = this.classList.contains("element-created");
        if (!element_exists) {
          this.appendChild(background_video_template.content.cloneNode(true));
          this.classList.add("element-created");
          this.querySelector("video").innerHTML = `<source src="${this.getAttribute("src")}" />`
          this.querySelector(".description").innerText= this.getAttribute("alt");
          const video = this.querySelector("video");
          const pause_button = this.querySelector(".playback");     
          let motion_preference = window.matchMedia("(prefers-reduced-motion: reduce)");                       
          
          pause_button.addEventListener("click", toggle_playback);       
          reduced_motion_check(motion_preference, video, pause_button);
        }
      }
    }
    
    if (!window.customElements.get('wwu-background-video')) {   
      window.customElements.define("wwu-background-video", WWUBackgroundVideo);  
    }
    
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
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>Pause</button>`;
    }
    
    function pause_video(vid, btn) {
      vid.pause();
      btn.classList.remove("play");
      btn.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>Play</button>`;
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
    
  