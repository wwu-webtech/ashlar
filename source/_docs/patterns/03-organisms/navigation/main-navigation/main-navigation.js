if (
  (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
  && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
  const main_nav_template = document.createElement("template");
  main_nav_template.innerHTML = `   
    <nav class="main-navigation" aria-label="Main">
      <ul class="ultimenu ultimenu--horizontal ultimenu--htb ultimenu--basic">
      </ul>
    </nav>
  `;

  class WWUMainNav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      /* Create the custom element by appending the template */     
      const items = Array.from(this.children);

      this.appendChild(main_nav_template.content.cloneNode(true));            
      const top_menu = this.querySelector(".ultimenu");     
            
      for (const item of items) {        
        if (item.tagName != "NAV") {

          if (item.tagName == "A") {
            const li = document.createElement("li"); 
            li.classList.add("ultimenu__item");
            item.classList.add("ultimenu__link");
            li.append(item);
            
            top_menu.append(li_wrap(item, ["ultimenu__item"]));
          }
          
          if (item.tagName == "WWU-HAS-CHILDREN") {
            const item_label = item.getAttribute("label");
            const sub_menus = Array.from(item.children);

            const li = document.createElement("li");      
            li.classList.add("ultimenu__item", "has-ultimenu"); 
            li.innerHTML = `
              <span class="component-icon expand-icon mobile" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></span>
              <span class="component-icon expand-icon desktop" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
              <a href="#" class="ultimenu__link">${item_label}</a>

              <section class="ultimenu__flyout">
                <div class="ultimenu__region">
                </div>
              </section>
            `;        
            
            const ultimenu_region = li.querySelector(".ultimenu__region");
            
            for (const menu of sub_menus) {
              const sub_menu_items = Array.from(menu.children);
              const menu_label = menu.getAttribute("label");   

              const wrapper = document.createElement("div");
              wrapper.classList.add("ultimenusub");

              const menu_list = document.createElement("ul");
              menu_list.classList.add("menu");

              if (menu_label) {
                const title = document.createElement("h2");
                title.classList.add("title");
                title.innerText = menu_label;

                menu_list.append(title);
              }

              for (const sub_item of sub_menu_items) {
                menu_list.append(li_wrap(sub_item, ["menu-item"]));
              }  

              wrapper.append(menu_list);
              ultimenu_region.append(wrapper);
            } 
            
            top_menu.append(li);
            item.remove();
          }           
        }
      }
    }
  }

  window.customElements.define("wwu-main-nav", WWUMainNav);
  
  function li_wrap(item, classes) {
    const li = document.createElement("li"); 
    for (const each of classes) {
      li.classList.add(each);
    }
    li.append(item);

    return(li);
  }
}
