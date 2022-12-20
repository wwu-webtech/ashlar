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
        
        <button aria-expanded="false"></button>
        `;
        
        class WWUModal extends HTMLElement {
            constructor() {
                super();
            }
            
            connectedCallback() {
                const content = this.innerHTML;
                this.innerHTML = ``;
                this.appendChild(modal_template.content.cloneNode(true));     
                this.querySelector(".modal").innerHTML = content; 
                
                
                const button = this.querySelector("button");
                if (this.getAttribute("icon")) {
                    button.innerHTML = `<span class="material-icons">${this.getAttribute("icon")}</span>${this.getAttribute("label")}`
                }
                else {
                    button.innerText = this.getAttribute("label");
                }
                
                button.addEventListener("click", open_modal);
                button.addEventListener("keyup", esc_close);
            }
        }

        window.customElements.define("wwu-modal", WWUModal);      
        
        function open_modal(){
            this.parentNode.querySelector(".wrapper").classList.remove("closed");
            this.setAttribute("aria-expanded", true);
        }

        function close_modal() {
            this.parentNode.querySelector(".wrapper").classList.add("closed");
            this.setAttribute("aria-expanded", false);
        }
        
        function esc_close(event){
            const key_pressed = event.code;
            
            if(key_pressed == "Escape") {
                close_modal(this);
            }
        }
        
        
    }  
    
    