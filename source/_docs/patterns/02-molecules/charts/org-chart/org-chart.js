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
                
                const base_list = createList();
                chart.append(base_list);
                
                const top_level_items = getChildren(this);
                createNestedLists(top_level_items, base_list);               
            }
        }
    }
    if (!window.customElements.get('wwu-org-chart')) {    
        window.customElements.define("wwu-org-chart", WWUOrgChart);
    }
    
    function createNestedLists(items, list) {        
        for (let i = 0; i < items.length; i++) {
            if(items[i].hasChildNodes()) {
                const this_item = createListItem(items[i]);
                list.append(this_item);                    
                
                const new_list = createList();   
                this_item.append(new_list); 

                const new_top_level_items = getChildren(items[i]);

                createNestedLists(new_top_level_items, new_list);
            } else {                        
                list.append(createListItem(items[i]));
            };
        }
    }
    
    function getChildren(item) {
        return item.querySelectorAll(":scope > chart-item");
    }
    
    function createList() {
        const ul = document.createElement("ul");
        
        return ul;
    }
    
    function createListItem(item) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.getAttribute("title")}</strong> <em>${item.getAttribute("name")}</em>`;
        
        return li;
    }
}