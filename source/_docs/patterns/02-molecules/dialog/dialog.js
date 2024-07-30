if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
    const wwu_dialog = document.createElement("template");
    wwu_dialog.innerHTML = `
      <button class="open-button"></button>
      <dialog role="dialog" aria-modal="true">
        <div class="dialog-wrapper">
          <div class="dialog-content"></div>
        </div>
      </dialog>
    `;
    
    class WWUDialog extends HTMLElement {
        constructor() {
            super();
            this.observer = new MutationObserver(() => this.initializeDialog());
        }
        
        connectedCallback() {
            this.observer.observe(this, { childList: true, subtree: true });
            if (!this.classList.contains("element-created")) {
                this.initializeDialog();
            }
        }
        
        initializeDialog() {
            if (this.classList.contains("element-created")) return;
            
            const content = this.innerHTML.trim();
            if (content) {               
                this.innerHTML = '';
                this.appendChild(wwu_dialog.content.cloneNode(true));
                
                const open_button = this.querySelector(".open-button");
                const close_button = document.createElement("button");
                const icon = document.createElement("span");
                const dialog = this.querySelector("dialog");
                const dialog_content = this.querySelector(".dialog-content");
                
                open_button.innerText = this.getAttribute("button");
                icon.classList.add("material-icons");
                icon.setAttribute("aria-hidden", true);
                icon.innerText = this.getAttribute("icon");
                open_button.appendChild(icon);
                
                close_button.innerHTML = `<span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span> Close`;
                close_button.classList.add("close-button");
                dialog.setAttribute("aria-label", this.getAttribute("label"));
                dialog_content.innerHTML = content;
                dialog_content.prepend(close_button);
                
                open_button.addEventListener("click", () => open_dialog(dialog));
                close_button.addEventListener("click", () => close_dialog(dialog));
                document.addEventListener("click", (e) => {
                    if (e.target.className === "dialog-wrapper") {
                        close_dialog(dialog);
                    }
                });
                
                this.classList.add("element-created");
                this.observer.disconnect();
            }
        }
    }
    
    window.customElements.define("wwu-dialog", WWUDialog);
    
    function open_dialog(dialog) {
        dialog.showModal();
    }
    
    function close_dialog(dialog) {
        dialog.close();
        const iframe = dialog.querySelector("iframe");
        if (iframe) {
            const iframe_container = iframe.parentNode;
            iframe.remove();
            iframe_container.appendChild(iframe);
        }
    }
}  




