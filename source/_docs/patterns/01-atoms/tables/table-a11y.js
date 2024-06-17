if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal  
) {
    const tables = document.querySelectorAll("table");
    
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        
        if (!table.parentElement.classList.contains("responsive-table")){                        
            var new_wrapper = document.createElement("div");
            
            table.parentNode.insertBefore(new_wrapper, table);
            new_wrapper.appendChild(table);
        } 
        
        var wrapper = table.parentNode;
        wrapper.classList.add("responsive-table");
        wrapper.setAttribute("tabIndex", "0");
        wrapper.setAttribute("role", "region");            
        
        if (table.querySelector("caption")) {
            const id = Math.random().toString(16).slice(2);
            table.querySelector("caption").setAttribute("id", id);
            wrapper.setAttribute("aria-labelledby", id);                
        } else {
            wrapper.setAttribute("aria-label", `Table ${i + 1}`);
        }
    }
}