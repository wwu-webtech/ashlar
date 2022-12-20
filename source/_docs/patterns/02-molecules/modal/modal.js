if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
    ) {
        const modal_template = document.createElement("template");
        modal_template.innerHTML = `
        <div class="wrapper closed">
        <div class="modal">            
        </div>
        </div>
        
        <button class="open-modal" aria-expanded="false"></button>
        `;
        
        class WWUModal extends HTMLElement {
            constructor() {
                super();
            }
            
            connectedCallback() {
                const content = this.innerHTML;
                this.innerHTML = ``;
                this.appendChild(modal_template.content.cloneNode(true));     
                this.querySelector(".modal").innerHTML = `<button class="close-modal"><span class="material-icons" aria-hidden="true">close</span>Close</button>` + content; 
                
                
                const open_button = this.querySelector(".open-modal");
                if (this.getAttribute("icon")) {
                    open_button.innerHTML = `<span class="material-icons" aria-hidden="true">${this.getAttribute("icon")}</span>${this.getAttribute("label")}`
                }
                else {
                    open_button.innerText = this.getAttribute("label");
                }
                
                open_button.addEventListener("click", open_modal);
                this.addEventListener("keyup", esc_close);
                this.querySelector(".wrapper").addEventListener("click", click_close);                
            }
        }

        window.customElements.define("wwu-modal", WWUModal);      
        
        function open_modal(){
            const close_button = this.parentNode.querySelector(".close-modal");
            this.parentNode.querySelector(".wrapper").classList.remove("closed");
            this.setAttribute("aria-expanded", true);            
            close_button.focus();
        }

        function close_modal() {
            this.parentNode.querySelector(".wrapper").classList.add("closed");
            this.setAttribute("aria-expanded", false);

                        
            /* Remove and re-add iframes to stop video playback without needing an api */
            const iframe = this.parentNode.querySelector("iframe");
            const iframe_container = iframe.parentNode;
            iframe.remove();
            iframe_container.appendChild(iframe);
        }
        
        function esc_close(event){
            const key_pressed = event.code;
            
            if(key_pressed == "Escape") {
                close_modal.call(this);
            }
        }
        
        function click_close(event) {
            if (!event.target.classList.contains("modal")) {
                close_modal.call(this);
            }
        }        
    }  
    
    