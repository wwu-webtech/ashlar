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
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>`;
    }
    
    function pause_video(vid, btn) {
      vid.pause();
      btn.classList.remove("play");
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>`;
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
  