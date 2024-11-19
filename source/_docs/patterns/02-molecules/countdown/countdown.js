if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
  ) {
    const countdown_template = document.createElement("template");
    countdown_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/countdown.css" /-->

    <section aria-label="Countdown">
      <div role="timer" class="timer">
        <p><span class="number days">0</span> Days</p>
        <p><span class="number hours">0</span> Hours</p>
        <p><span class="number minutes">0</span> Minutes</p>
        <p><span class="number seconds">0</span> Seconds</p>
      </div>
    
      <div class="announced-time" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
    </section>
    `;
    
    class WWUCountdown extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {    
        let element_exists = this.classList.contains("element-created");
        if (!element_exists) {
          this.appendChild(countdown_template.content.cloneNode(true));        
          this.classList.add("element-created");
          this.querySelector(".timer").setAttribute("aria-label", "Countdown to " + this.getAttribute("to"));
          let second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
          let d_left, h_left, m_left, s_left;
          const days = this.querySelector(".days");
          const hours = this.querySelector(".hours");
          const minutes = this.querySelector(".minutes");
          const seconds = this.querySelector(".seconds");
          const announcement = this.querySelector(".announced-time");
          
          try {
            const date = new Date(this.getAttribute("date")).getTime();          
            
            if (date) {        
              initialize_count(date);
              setInterval(function() { update_time(date) }, 1000);
            }
          } catch (err) {
            console.log("No date provided");
          }
          
          function set_days() { days.innerText = d_left; }
          function set_hours() { hours.innerText = h_left; }
          function set_minutes() { minutes.innerText = m_left; }
          function set_seconds() { seconds.innerText = s_left; }     
          
          function minute_announce() {
            if (m_left == 1) {
              announcement.innerText = String(m_left) + " minute left";
            } else {
              announcement.innerText = String(m_left) + " minutes left";
            }
          }
          function second_announce() { announcement.innerText = String(s_left); }
          
          function initialize_count(date) {
            time_left(date);
            
            // Only set days & hours if there are any, otherwise hide those blocks 
            if (d_left > 0) { set_days(); } 
            else { days.parentElement.remove() }
            if (d_left > 0 || h_left > 0) { set_hours(); } 
            else { hours.parentElement.remove() }
            
            //Minutes & seconds should always show 
            if (m_left >= 0) { set_minutes(); }
            if (s_left >= 0) { set_seconds(); }
          }
          
          function time_left(date) {
            let now = new Date().getTime(), distance = date - now;      
            
            d_left = Math.floor(distance / day);
            h_left = Math.floor((distance % day) / hour);
            m_left = Math.floor((distance % hour) / minute);
            s_left = Math.floor((distance % minute) / second);
          }
          
          function update_time(date) {          
            let prev_hours = h_left, prev_minutes = m_left;
            time_left(date);
            
            if (h_left >= 0 && prev_hours != h_left) { set_hours(); }
            if (m_left >= 0 && prev_minutes != m_left) { set_minutes(); }
            if (s_left >= 0) { set_seconds(); }
            
            // Only announce last 10 minutes, and only when the minute is about to change
            if (d_left <= 0 && h_left <= 0 && m_left <= 10 && m_left >= 1 && s_left == 0) { minute_announce(); }
            // Only announce last 10 seconds
            if (d_left <= 0 && h_left <= 0 && m_left <= 0 && s_left <= 10 && s_left > 0) { second_announce(); }
          }
        }  
      } /* End of Connected Callback */      
    }
    if (!window.customElements.get('wwu-countdown')) {    
      window.customElements.define("wwu-countdown", WWUCountdown);      
    }    
  }
  