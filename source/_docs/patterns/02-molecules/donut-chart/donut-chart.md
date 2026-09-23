import WWUDonutChart from "./donut-chart.js"

# Donut Chart
These donut charts can only display **eight values or less**. If using as markup, the label attribute is required for accessibility, it should describe what is in the dataset. This is included by default with the Drupal block.

Include the following script to use this component on your non-Drupal website or application.

```
<script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/donut-chart.js"></script>
```

## Blue (Default)
<wwu-donut-chart label="Student Population">
    <wwu-chart-item value="10">Freshman</wwu-chart-item>
    <wwu-chart-item value="14">Sophomore</wwu-chart-item>
    <wwu-chart-item value="22">Junior</wwu-chart-item>
    <wwu-chart-item value="35">Senior</wwu-chart-item>
    <wwu-chart-item value="7">Post Bac</wwu-chart-item>
    <wwu-chart-item value="2">Grad Student</wwu-chart-item>
    <wwu-chart-item value="5">Alumni</wwu-chart-item>
    <wwu-chart-item value="5">Other</wwu-chart-item>
</wwu-donut-chart>

```
<wwu-donut-chart label="Student Population">
    <wwu-chart-item value="10">Freshman</wwu-chart-item>
    <wwu-chart-item value="14">Sophomore</wwu-chart-item>
    <wwu-chart-item value="22">Junior</wwu-chart-item>
    <wwu-chart-item value="35">Senior</wwu-chart-item>
    <wwu-chart-item value="7">Post Bac</wwu-chart-item>
    <wwu-chart-item value="2">Grad Student</wwu-chart-item>
    <wwu-chart-item value="5">Alumni</wwu-chart-item>
    <wwu-chart-item value="5">Other</wwu-chart-item>
</wwu-donut-chart>
```

## Light Blue
<wwu-donut-chart className="light-blue" label="Letters">
    <wwu-chart-item value="5">A</wwu-chart-item>
    <wwu-chart-item value="2">B</wwu-chart-item>
    <wwu-chart-item value="30">C</wwu-chart-item>
    <wwu-chart-item value="8">D</wwu-chart-item>
    <wwu-chart-item value="7">E</wwu-chart-item>
    <wwu-chart-item value="48">F</wwu-chart-item>

</wwu-donut-chart>

```
<wwu-donut-chart class="light-blue" label="Letters">
    <wwu-chart-item value="5">A</wwu-chart-item>
    <wwu-chart-item value="2">B</wwu-chart-item>
    <wwu-chart-item value="30">C</wwu-chart-item>
    <wwu-chart-item value="8">D</wwu-chart-item>
    <wwu-chart-item value="7">E</wwu-chart-item>
    <wwu-chart-item value="2">F</wwu-chart-item>
</wwu-donut-chart>
```

## Green
<wwu-donut-chart className="green" label="Student Population">
    <wwu-chart-item value="9.1"> Freshman</wwu-chart-item>
    <wwu-chart-item value="14.8"> Sophomore</wwu-chart-item>
    <wwu-chart-item value="21.9"> Junior</wwu-chart-item>
    <wwu-chart-item value="35.2"> Senior</wwu-chart-item>
    <wwu-chart-item value="6.2"> Post Bac</wwu-chart-item>
    <wwu-chart-item value="2.7"> Grad Student</wwu-chart-item>
    <wwu-chart-item value="4.5"> Alumni</wwu-chart-item>
    <wwu-chart-item value="5.5"> Other</wwu-chart-item>
</wwu-donut-chart>

```
<wwu-donut-chart class="green" label="Student Population">
    <wwu-chart-item value="9.1"> Freshman</wwu-chart-item>
    <wwu-chart-item value="14.8"> Sophomore</wwu-chart-item>
    <wwu-chart-item value="21.9"> Junior</wwu-chart-item>
    <wwu-chart-item value="35.2"> Senior</wwu-chart-item>
    <wwu-chart-item value="6.2"> Post Bac</wwu-chart-item>
    <wwu-chart-item value="2.7"> Grad Student</wwu-chart-item>
    <wwu-chart-item value="4.5"> Alumni</wwu-chart-item>
    <wwu-chart-item value="5.5"> Other</wwu-chart-item>
</wwu-donut-chart>
```