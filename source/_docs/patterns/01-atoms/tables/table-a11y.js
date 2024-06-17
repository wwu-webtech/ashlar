if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal  
) {
    const tables = document.querySelectorAll("table");
    
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        
        if (!table.parentElement.classList.contains("responsive-table")){                        
            var wrapper = document.createElement("div");
            wrapper.classList.add("responsive-table");
            wrapper.setAttribute("tabIndex", "0");
            wrapper.setAttribute("role", "region");            
            
            if (table.querySelector("caption")) {
                const id = Math.random().toString(16).slice(2);
                table.querySelector("caption").setAttribute("id", id);
                wrapper.setAttribute("aria-labelledby", id);                
            }
            
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    }
}