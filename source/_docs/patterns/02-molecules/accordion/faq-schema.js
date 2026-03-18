if (
    (typeof context == "undefined" || (typeof context != "undefined" && context == document)) // makes it work in Drupal
    && typeof window !== "undefined" // makes it work in Node.js server side rendering
) {       
    if (!document.querySelector("html").getAttribute("data-faq-active")) {
        checkForFAQ();
    }
    
    function checkForFAQ() {
        let headings = document.querySelectorAll("h1, h2, h3");
        
        for (let i = 0; i < headings.length; i++) {
            const heading_text = headings[i].innerText.toLowerCase();
            
            if(heading_text.search("faq|frequently asked") != -1) {
                document.querySelector("html").setAttribute("data-faq-active", true);
                createSchema();
                return
            }        
        }
    }   
    
    function createSchema() {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
        
        const schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": []};

        const accordion_items = document.querySelectorAll("wwu-accordion-item");

        for(let i = 0; i < accordion_items.length; i++) {
            const question = accordion_items[i].getAttribute("label");
            const answer = accordion_items[i].querySelector(".field").innerHTML;

            const item_schema = {
                "@type": "Question", 
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer
                }
            };

            schema["mainEntity"].push(item_schema);
        }

        script.innerHTML = JSON.stringify(schema);
    }
}