if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {
    const org_chart_template = document.createElement("template");
    org_chart_template.innerHTML = `
    <!--link rel="stylesheet" href="https://ashlar.blob.core.windows.net/ashlar-theme-files/css/components/org-chart.css" /-->
    
    <figure class="wwu-org-chart"> 
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
                
                const chart = this.querySelector(".wwu-org-chart");
                const heading_level = this.getAttribute("heading-start") ? parseInt(this.getAttribute("heading-start")) : 2;
                const legend_text = this.getAttribute("highlight-legend");                
                
                const base_list = createList(1);
                chart.append(base_list);
                
                const top_item = getChildren(this);
                createNestedLists(top_item, base_list, 1, heading_level);               

                if(legend_text) { chart.prepend(createHighlightLegend(this, legend_text, heading_level))};
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
    
    function createNestedLists(items, list, level, heading_level) {           
        for (let i = 0; i < items.length; i++) {
            if(items[i].hasChildNodes()) {
                const this_item = createListItem(items[i], level, heading_level);
                list.append(this_item);                    
                
                const new_list = createList(level + 1);   
                this_item.append(new_list); 
                
                const these_items = getChildren(items[i]);                
                
                createNestedLists(these_items, new_list, level + 1, heading_level + 1);
            } else {                        
                list.append(createListItem(items[i], level, heading_level, false));
            };
        }
    }  
    
    function createListItem(item, level, heading_level, children) {
        const li = document.createElement("li");        
        const outer_div = document.createElement("div");
            outer_div.classList.add("item");            
            outer_div.classList.add("lightest-gray-bg");
            if (item.getAttribute("highlight")) { outer_div.classList.add("highlight"); } 
        const inner_div = document.createElement("div");
            inner_div.classList.add("lightest-gray-bg");            
        const heading = heading_level < 7 ? document.createElement(`h${heading_level}`) : document.createElement("span");        
        const unit = item.getAttribute("unit") ? document.createElement("span") : null;
            if(unit) { unit.classList.add("unit"); unit.innerHTML = item.getAttribute("unit"); }
        const name = item.getAttribute("name") ? document.createElement("span") : null;
            if(name) { name.classList.add("name"); name.innerHTML = item.getAttribute("name"); }
        const title = item.getAttribute("title") ? document.createElement("span") : null;
            if(title) { title.classList.add("title"); title.innerHTML = item.getAttribute("title"); }
        
        li.classList.add(`item-level-${level}`);        
        li.append(outer_div);    
        outer_div.append(inner_div);
        inner_div.append(heading);       
        
        let current_element = heading;        
        if (item.getAttribute("link")) {
            const link = document.createElement("a");
            link.setAttribute("href", item.getAttribute("link"));

            heading.append(link);
            current_element = link;
        }        
        
        if (unit) {
            current_element.append(unit);
            current_element = inner_div;
        } 
        if (name) {
            current_element.append(name);
            current_element = inner_div;
        } 
        if (title) {
            current_element.append(title);
        }        

        if (children == false ) {
            li.classList.add("no-children");
        }      
        
        return li;
    }
    
    function getChildren(item) {
        return item.querySelectorAll(":scope > chart-item");
    }

    function createHighlightLegend(chart, legend, heading_level) {
        const highlights = chart.querySelectorAll(".highlight");
        const wrapper = document.createElement("div");    

        wrapper.classList.add("highlight-legend");                
        wrapper.innerHTML=`<h${heading_level} class="visually-hidden">Legend</h${heading_level}><span class="highlight"><span class="lightest-gray-bg">Highlighted item</span></span> indicates ${legend}`;

        for(let i = 0; i < highlights.length; i++) {
            const item_legend = document.createElement("p");            
            item_legend.classList.add("visually-hidden");
            item_legend.innerText = legend;

            highlights[i].append(item_legend);
        }

        return wrapper;
    }    
}