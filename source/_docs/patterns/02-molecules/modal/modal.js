if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
    ) {
        const modal_template = document.createElement("template");
        modal_template.innerHTML = `
        <div class="wrapper closed" hidden>
        <div class="wwu-modal" tabindex="0" role="dialog" aria-modal="true">             
        </div>
        </div>
        
        <button class="open-modal"></button>
        `;
        
        class WWUModal extends HTMLElement {
            constructor() {
                super();
            }
            
            connectedCallback() {
                const content = this.innerHTML;
                this.innerHTML = ``;
                this.appendChild(modal_template.content.cloneNode(true));     
                this.querySelector(".wwu-modal").innerHTML = content + `<button class="close-modal"><span class="material-icons" aria-hidden="true">close</span>Close</button>`;
                
                const open_button = this.querySelector(".open-modal");
                if (this.getAttribute("icon")) {
                    open_button.innerHTML = `<span class="material-icons" aria-hidden="true">${this.getAttribute("icon")}</span>${this.getAttribute("button")}`
                }
                else {
                    open_button.innerText = this.getAttribute("label");
                }
                
                open_button.addEventListener("click", open_modal);
                this.addEventListener("keydown", handle_keydown);
                this.querySelector(".wrapper").addEventListener("click", click_close);     
                this.querySelector(".wwu-modal").setAttribute("aria-label", this.getAttribute("label"));        
            }
        }
        
        window.customElements.define("wwu-modal", WWUModal);      
        
        function open_modal(){            
            this.parentNode.querySelector(".wrapper").classList.remove("closed");
            this.parentNode.querySelector(".wrapper").removeAttribute('hidden');
            this.parentNode.querySelector(".wwu-modal").focus();
        }
        
        function close_modal() {
            this.parentNode.querySelector(".wrapper").classList.add("closed");
            this.parentNode.querySelector(".wrapper").setAttribute("hidden", true);
            this.parentNode.querySelector(".open-modal").focus();
            
            /* Remove and re-add iframes to stop video playback without needing an api */
            const iframe = this.parentNode.querySelector("iframe");
            const iframe_container = iframe.parentNode;
            iframe.remove();
            iframe_container.appendChild(iframe);
        }
        
        function handle_keydown(event){
            const key_pressed = event.code;
            const shift_pressed = event.shiftKey
            
            if(key_pressed == "Escape") {
                close_modal.call(this);
                event.preventDefault()
            } 
            else if (!shift_pressed && document.activeElement.classList.contains("close-modal") && key_pressed == "Tab") {                
                this.parentNode.querySelector(".wwu-modal").focus();                
                event.preventDefault()
            }
            else if (shift_pressed && document.activeElement.classList.contains("wwu-modal") && key_pressed == "Tab") {                
                this.parentNode.querySelector(".close-modal").focus();         
                event.preventDefault()       
            }
        }
        
        function click_close(event) {
            if (!event.target.classList.contains("modal")) {
                close_modal.call(this);
            }
        }
    }  
    
    