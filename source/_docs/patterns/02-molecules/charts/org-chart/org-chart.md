import WWUOrgChart from "./org-chart.js"

# Organization Chart

<wwu-org-chart heading-start="2"> 
    <chart-item
        id="bot"
        unit="Board of Trustees">    
        <chart-item
            title="Internal Audit"
            name="Priya Sall"
            connect="after">
        </chart-item>
        <chart-item 
            id="pres"
            title="President" 
            name="Sabah Randhawa"
            link="https://president.wwu.edu/">
            <chart-item
                title="Exec. Asst. to President"
                name="Rayne Rambo"
                connect="pres"
                link="https://trustees.wwu.edu/">
            </chart-item>   
            <chart-item
                id="cos"
                title="Chief of Staff"
                name="Becca Kenna-Schenk"
                connect="pres">
                <chart-item
                    title="Government Relations"
                    name="Nora Selander"
                    connect="cos">
            </chart-item>  
            </chart-item>           
        </chart-item> 
        <chart-item
            title="Exec./Liaison to Board of Trustees"
            name="Rebecca Hansen-Zeller"
            connect="before">
        </chart-item>        
    </chart-item>    
    <chart-item
        title="Assistant Attorneys General">
    </chart-item>
</wwu-org-chart>

<wwu-org-chart>
    <chart-item 
        id="pres"
        title="President" 
        name="Sabah Randhawa"
        link="https://president.wwu.edu/">
        <chart-item 
            unit="Aademic Affairs"
            title="Provost & Executive Vice President"
            name="Brad Johnson">
            <chart-item
                unit="Academic Affiars"
                name="Jack Herring">
            </chart-item>
            <chart-item
                unit="Academic Advising & Student Achievement Center"
                name="Meagan Bryson">
            </chart-item>
            <chart-item
                unit="Enrollment Management"
                name="Shelli Soto">
            </chart-item>
        </chart-item>
        <chart-item 
            unit="Business & Financial Affairs"
            title="Vice President"
            name="Joyce Lopes">
        </chart-item>
        <chart-item 
            unit="University Advancement"
            title="Vice President & CEO Foundation for WWU & Alumni"
            name="Kim Hill">
        </chart-item>
        <chart-item 
            unit="Office of Equity"
            title="Chief Diversity Officer"
            name="Jacqueline Hughes">
        </chart-item>
    </chart-item>        
</wwu-org-chart>