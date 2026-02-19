import WWUOrgChart from "./org-chart.js"

# Organization Chart

<wwu-org-chart heading-start="2" highlight-legend="position in the President’s Cabinet"> 
    <chart-item
        unit="Board of Trustees"
        link="https://trustees.wwu.edu/never-been-here-before">    
        <chart-item
            title="Internal Audit"
            name="First Last">
        </chart-item>
        <chart-item 
            title="President" 
            name="First Last"
            link="https://president.wwu.edu/"
            highlight>
            <chart-item
                title="Exec. Asst. to President"
                name="First Last"
                link="https://trustees.wwu.edu/">
            </chart-item>   
            <chart-item
                title="Chief of Staff"
                name="First Last">
                <chart-item
                    title="Government Relations"
                    name="First Last">
            </chart-item>  
            </chart-item>           
        </chart-item> 
        <chart-item
            title="Exec./Liaison to Board of Trustees"
            name="First Last">
        </chart-item>        
    </chart-item>    
    <chart-item
        title="Assistant Attorneys General">
    </chart-item>
</wwu-org-chart>

<wwu-org-chart>
    <chart-item 
        title="President" 
        link="https://president.wwu.edu/">
        <chart-item 
            unit="Aademic Affairs"
            title="Provost & Executive Vice President"
            name="First Last">
            <chart-item
                unit="Academic Affiars">
            </chart-item>
            <chart-item
                unit="Academic Advising & Student Achievement Center">
            </chart-item>
            <chart-item
                unit="Enrollment Management">
            </chart-item>
        </chart-item>
        <chart-item 
            unit="Business & Financial Affairs"
            title="Vice President">
        </chart-item>
        <chart-item 
            unit="University Advancement"
            title="Vice President & CEO Foundation for WWU & Alumni">
        </chart-item>
        <chart-item 
            unit="Office of Equity"
            title="Chief Diversity Officer">
        </chart-item>
    </chart-item>        
</wwu-org-chart>