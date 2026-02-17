if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
    const org_chart_template = document.createElement("template");
    org_chart_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/org-chart-new.css" /-->
    
    <figure class="org-chart"> 
    </figure>
    `;
    
    class WWUOrgChart extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback() {        
            let element_exists = this.classList.contains("element-created");
            
            if (!element_exists) {
                this.appendChild(org_chart_template.content.cloneNode(true));
                this.classList.add("element-created");   
                
                const chart = this.querySelector(".org-chart");
                
                const base_list = createList(1);
                chart.append(base_list);
                
                const top_item = getChildren(this);
                createNestedLists(top_item, base_list, 1);               
            }
        }
    }
    if (!window.customElements.get('wwu-org-chart')) {    
        window.customElements.define("wwu-org-chart", WWUOrgChart);
    }
    
    function createList(level) {
        const ul = document.createElement("ul");
        ul.classList.add(`level-${level}`);
        
        return ul;
    }
    
    function createNestedLists(items, list, level) {           
        for (let i = 0; i < items.length; i++) {
            if(items[i].hasChildNodes()) {
                const this_item = createListItem(items[i], level);
                list.append(this_item);                    
                
                const new_list = createList(level + 1);   
                this_item.append(new_list); 
                
                const these_items = getChildren(items[i]);                
                
                createNestedLists(these_items, new_list, level + 1);
            } else {                        
                list.append(createListItem(items[i], level, false));
            };
        }
    }  
    
    function createListItem(item, level, children) {
        const li = document.createElement("li");
        const unit = item.getAttribute("unit") ? `<strong class="uppercase">${item.getAttribute("unit")}</strong><br/>` : "";
        const name = item.getAttribute("name") ? `<strong>${item.getAttribute("name")}<br/></strong>` : "";
        const title = item.getAttribute("title") ? `<em>${item.getAttribute("title")}</em>` : "";        
        const link = item.getAttribute("link") ? `${item.getAttribute("link")}` : "";        

        li.innerHTML = link ? `<a href="${link}">${unit}${name}${title}</a>` : `<span>${unit}${name}${title}</span>`;
        li.classList.add(`item-level-${level}`);

        if (children == false ) {
            li.classList.add("no-children");
        }
        
        return li;
    }
    
    function getChildren(item) {
        return item.querySelectorAll(":scope > chart-item");
    }
}