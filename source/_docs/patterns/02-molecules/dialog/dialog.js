if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
    ) {
        const wwu_dialog = document.createElement("template");
        wwu_dialog.innerHTML = `
        <button class="open-button"></button>
        <dialog>
            <button class="close-button"><span class="material-icons" aria-hidden="true">close</span> Close</button>

            <div class="dialog-content">
            </div>
        <dialog>                    
        `;
        
        class WWUDialog extends HTMLElement {
            constructor() {
                super();
            }
            
            connectedCallback() {
                const content = this.innerHTML;
                this.innerHTML = ``;
                this.appendChild(wwu_dialog.content.cloneNode(true));     
                                
                const open_button = this.querySelector('.open-button');
                const close_button = this.querySelector('.close-button');
                const dialog = this.querySelector('dialog');  
                const dialog_content = this.querySelector('.dialog-content');       
                
                open_button.innerText = this.getAttribute('button');
                dialog.setAttribute('aria-label', this.getAttribute('label'));
                dialog_content.innerHTML = content;
                

                open_button.addEventListener('click', () => {
                    dialog.showModal();
                });
                close_button.addEventListener('click', () => {
                    dialog.close();
                });
                
            }
        }
        
        window.customElements.define("wwu-dialog", WWUDialog);      
    }  
    
    
    
    
    