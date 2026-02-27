import WWUOrgChart from "./org-chart.js"

# Organization Chart

Include the following script to use this component on your non-Drupal website or application.

```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/org-chart.js"></script>
```



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

```
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
```