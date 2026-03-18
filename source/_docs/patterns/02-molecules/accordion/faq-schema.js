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
        
        script.innerHTML =
        `
        {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "How to find an apprenticeship?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p>We provide an official service to search through available apprenticeships. To get started, create an account here, specify the desired region, and your preferences. You will be able to search through all officially registered open apprenticeships.</p>"
            }
        }, {
            "@type": "Question",
            "name": "Whom to contact?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days."
            }
        }]
        }
      `
    }
}