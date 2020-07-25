// STEP 1 - Include Dependencies
// Include react
import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.zune";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);



const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Stars per langugage',
        theme: "zune",
        decimals: 0,
        doughnutRadius: '25%',
        showPercentValues: 0,
        // paletteColors: '#f0d4f',
        // paletteColors: '#f0d5f',
        // paletteColors: '#f000f',

      },
      // Chart Data
      data,
    }
  };

  return <ReactFC {...chartConfigs} />
}


export default ChartComponent;